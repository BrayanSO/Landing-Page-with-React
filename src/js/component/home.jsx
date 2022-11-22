import React from "react";
import Navbar from "./navbar.jsx";
import Cards from "./cards.jsx"
import Carru from "./carru.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">
			<Navbar></Navbar>
			<Carru></Carru>
			<div className=" d-sm-inline-flex row justify-content-center ">
			<Cards></Cards>
			<Cards></Cards>
			<Cards></Cards>
			<Cards></Cards>
			</div>
		</div>
	);
};

export default Home;
