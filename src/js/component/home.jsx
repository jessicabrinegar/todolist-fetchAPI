import React from "react";
import Todos from "./Todos.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center d-flex flex-column align-items-center w-50">
			<h1 className="text-center mt-5">todos</h1>
			<Todos />
			<p className="mt-5">
				Made by{" "}
				<a href="https://github.com/jessicabrinegar">Jessie B</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
