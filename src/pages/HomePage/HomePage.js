import React, { useState } from "react";
import imagePath from "../../constants/imagePath";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Carousel } from "react-responsive-carousel";

export default function HomePage()


{
const [dropDown, setDropDown] = useState(false)

    return (
        <div >
        <div style={{alignItems : '  center', justifyContent: "space-between", flex : 1, backgroundColor : '#FAFAFA', flexDirection : 'row',  display: "flex", padding : '20px 60px'}}>
      
            <img src={imagePath.txLogo} style={{height : '10%', width: '19%'}}/>
            
<div style={{display : 'flex', flex : 1, width : '100%', justifyContent: 'space-evenly'}} >
    <button style={{borderWidth : 0, backgroundColor : 'transparent'}} >
      
Services
    </button>
    

          

</div>

 
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={imagePath.carouselImg} alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={imagePath.carouselImg} alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={imagePath.carouselImg} alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <div style={{backgroundColor : '#E1E9EE', height : '22%', width : '92%', zIndex: 10000, right: "4%", left : "4%", alignContent: 'center', alignItems: "center",flex : 1, display : 'flex',justifyContent: 'center',
  boxShadow : " 4px 10px 23px -8px rgba(0,0,0,0.75)",}}>
    
        <text style={{fontSize: 47}}>
        <span style={{fontWeight : 'bold', }}>{"Delight your customers"}</span><span >{" by partnering with us"}</span></text>
        {/* <button style={{borderWidth : 1, borderColor: '#236bf0'}}>
            <text style={{color : "#236bf0"}}>Get in touch</text>
        </button> */}
        <button type="button"  className="btn btn-outline-primary" >Get in touch</button>
         </div>
         <div style={{padding : '24px 60px', paddingTop : 48}}>
            <text style={{fontSize : 16}}>
            <span>TestingXperts is a Next Gen </span>
            <span style={{fontWeight : 'bold'}}>Specialist QA & Software Testing </span>
            <span>Company</span>
            </text>

         </div>
  </div>

    )
}