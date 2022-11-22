import React from "react";
import Navbar from "./navbar.jsx";
import Cards from "./cards.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar></Navbar>
			
			<p>
				<img src={rigoImage} />
			</p>
			<Cards></Cards>
			<Cards></Cards>
			<Cards></Cards>
		</div>
	);
};

export default Home;
