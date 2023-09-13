import React,{useState} from "react";
import "./NewExpenses.css";

const NewExpenses = (props) => {

    const [expensesData,setExpanses] = useState({
        title:"",
        price:"",
        date: new Date().toJSON().slice(0,10)
    })
    
    const changeExpenses = (event) => {
        setExpanses({...expensesData,[event.target.name]:event.target.value});
    }
    const submitHandler =(event) =>{
        event.preventDefault();
        expensesData.date = new Date(expensesData.date).toJSON().slice(0,10);
        setExpanses(
            {
                title:"",
                price:"",
                date: new Date().toJSON().slice(0,10)
            }
        )

        props.addNewExpences(expensesData);
    }



    return (
        <div className="new-expenses">
            <form onSubmit={submitHandler}>
                <div className="new-expenses-fields">
                    <label>Title: </label>
                    <input type="text" name="title" value={expensesData.title} onChange={changeExpenses}/>
                </div>
                <div className="new-expenses-fields">
                    <label>Price: </label>
                    <input type="text" name="price" value={expensesData.price} onChange={changeExpenses}/>
                </div>
                <div className="new-expenses-fields">
                    <label>Date: </label>
                    <input type="date" name="date" value={expensesData.date}  onChange={changeExpenses}/>
                </div>
                <div className="new-expenses-fields">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpenses;