import './ExpenseDate.css';
import React from 'react';

const ExpenseDate = (props) =>{

    const options = {
		weekday: "short",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	let date = props.date.toLocaleDateString("en-US", options);
    return (
        <div className='expense-date'>{date}</div>
    )
}

export default ExpenseDate;
