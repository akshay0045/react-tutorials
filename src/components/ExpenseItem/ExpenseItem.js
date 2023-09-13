import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import React,{useState} from "react";
const ExpenseItem = (props) => {
	const [title,setTitle] = useState(props.title);
	const [newTitle,setNewTitle] = useState("");
	const changeTitle = () =>{
		setTitle(newTitle)
	}
	const changeNewTitle =(event) => {
		setNewTitle(event.target.value)
	}

	return (
		<div className="Container">
		<div className="expense-item">
			<ExpenseDate date ={new Date(props.date)}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item-price">${props.price}</div>
				<input type="text" value={newTitle} onChange={changeNewTitle}/>
				<button onClick={changeTitle}>Change Title</button>
			</div>
		</div>
		</div>
	);
}

export default ExpenseItem;
