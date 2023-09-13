import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import React from "react";
import NewExpenses from "../NewExpenses/NewExpenses";
const Expenses = ({expenses,getnewDatas})=>{
	const getnewExpences= (newExpenseData) =>{
		getnewDatas(newExpenseData);
	}
    return (
        <Card className="expences-container">
				<h2>Expense Item List</h2>
				<NewExpenses addNewExpences = {getnewExpences}/>
				{
					expenses.map(({title,price,date,id}) => {
						return (<ExpenseItem
							title={title}
							price={price}
							date={date} key={id}/>
						)
					})
				}
		</Card>
    )
}

export default Expenses;