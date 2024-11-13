import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "../Card";
import Footer from "../Footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (<>
	<Navbar/>
	<div className="container">
	
		<div className="row d-flex justify-content-center"><Jumbotron/></div>
		<div className="row d-flex justify-content-center">
			<Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3_sBBiRGmnYpBO8IQ_IJVZkSwwV7pPbQKQ&s" 
			title="Santiago de Compostela" 
			butom="Catedral" 
			tamaños="col-12 col-md-6 col-lg-3 mb-4"
			/>
			<Card imagen="https://www.hoteleuropaarteixo.com/ZipZap/EuropaArteixo/torre-hercules.jpg" 
			title="Torre Hercules" 
			butom="Torre" 
			tamaños="col-12 col-md-6 col-lg-3 mb-4"
			/>
			<Card imagen="https://www.galicia.info/uploads/1/8/4/8/18489470/2515151_orig.jpg" 
			title="Islas Cies" 
			butom="Islas" 
			tamaños="col-12 col-md-6 col-lg-3 mb-4"
			/>
			<Card imagen="https://www.castrohotel.com/disfruta-del-encanto-de-galicia-en-invierno_img175133t1.jpg" 
			title="Calles Magia" 
			butom="Calles"
			tamaños="col-12 col-md-6 col-lg-3 mb-4"
			/>
		</div>
	
	
	</div>
	<Footer/>
	</>
		
	);
};


export default Home;
