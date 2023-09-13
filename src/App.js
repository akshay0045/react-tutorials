import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/hader";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
let expenses = [];
const App = () => {

	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="contact" element={<ContactUs />} />
			</Routes>
		</>
	);


	// const [addNewExpences, setExpenses] = useState(expenses);

	// useEffect(() => {
	// 	fetch("http://localhost/php/expenses/read.php")
	// 		.then(response => {
	// 			return response.json()
	// 		})
	// 		.then(data => {
	// 			//console.log(data);
	// 			setExpenses(data);
	// 		})
	// }, []);




	// const getNewData = (newExpenseData) => {
	// 	const newData = { id: addNewExpences.length + 1, ...newExpenseData };
	// 	//console.log(newData);
	// 	// const updateEx = [newData, ...addNewExpences];
	// 	// setExpenses(updateEx);
	// 	fetch("http://localhost/php/expenses/add.php", {
	// 		method: 'POST',
	// 		body: JSON.stringify(newData),
	// 		mode: 'no-cors',
	// 		headers: {
	// 			'Content-type': 'application/json; charset=UTF-8',
	// 		}
	// 	}).then(response => {
	// 		fetch("http://localhost/php/expenses/read.php")
	// 		.then(response => {
	// 			return response.json()
	// 		})
	// 		.then(data => {
	// 			setExpenses(data);
	// 		});
	// 	})
	// }
	// return (
	// 	<Expenses expenses={addNewExpences} getnewDatas={getNewData} />
	// );
}

export default App;
