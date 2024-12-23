import React from "react";


import NavBar from "./navbar";
import Header from "./header";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column vh-100">
			<NavBar/>
			<Header/>
			<div className = "d-flex flex-md-row flex-column flex-fill justify-content-center mt-4">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<div className = "d-flex justify-content-center  vh-100 mt-2">
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
