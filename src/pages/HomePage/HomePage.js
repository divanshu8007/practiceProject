import React, { useState } from "react";
import imagePath from "../../constants/imagePath";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Carousel } from "react-responsive-carousel";
import "./HomePage.css";

export default function HomePage() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          alignItems: "  center",
          justifyContent: "space-between",
          flex: 1,
          backgroundColor: "#FAFAFA",
          flexDirection: "row",
          display: "flex",
          padding: "20px 60px",
        }}
      >
        <img src={imagePath.txLogo} style={{ height: "10%", width: "19%" }} />

        <div
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <button style={{ borderWidth: 0, backgroundColor: "transparent" }}>
            Services
          </button>
        </div>
      </div>
      <div>
        <div
          style={{ zIndex: 0 }}
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={imagePath.carouselImg}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={imagePath.carouselImg}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={imagePath.carouselImg}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div
          style={{
            backgroundColor: "#E1E9EE",
            left: "7.5%",
            position: "absolute",
            right: "7.5%",
            top: "65%",
            alignSelf: "center",
            zIndex: 10000,
            padding: "48px 40px",
            alignContent: "center",
            alignItems: "center",
            width: "85%",
            display: "flex",
            justifyContent: "center",
            boxShadow: " 14px 20px 33px 1px rgba(0,0,0,0.6)",
          }}
        >
          <text style={{ fontSize: 37 }}>
            <span style={{ fontWeight: "bold" }}>
              {"Delight your customers"}
            </span>
            <span>{" by partnering with us"}</span>
          </text>
          {/* <button style={{borderWidth : 1, borderColor: '#236bf0'}}>
            <text style={{color : "#236bf0"}}>Get in touch</text>
        </button> */}
          <button
            style={{ marginLeft: "5%", padding: "24px 12px" }}
            type="button"
            className="btn btn-outline-primary"
          >
            <text>GET IN TOUCH</text>
            {/* <img src={imagePath.arrow} style={{height: 10, width :15}}/>s */}
          </button>
        </div>
      </div>
      <div style={{ marginTop: "15%" }}>
        <text style={{ fontSize: 28 }}>
          <span>TestingXperts is a Next Gen </span>
          <span style={{ fontWeight: "bold" }}>
            Specialist QA & Software Testing{" "}
          </span>
          <span>Company</span>
        </text>
      </div>
      <div
        style={{
          height: 3.5,
          width: "4.2%",
          backgroundColor: "#236bf0",
          margin: "2%",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "75%",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            maxWidth: "15%",
          }}
        >
          <img
            src={imagePath.notes}
            style={{ color: "#236bf0", maxHeight: 38, maxWidth: 45 }}
          />
          <text style={{ fontSize: 36, fontWeight: "bolder", margin: 12 }}>
            7
          </text>
          <text style={{ color: "gray", textAlign: "center" }}>
            DELIVERY CENTERS IN UK, USA & INDIA
          </text>
        </div>

        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={imagePath.system}
            style={{ color: "#236bf0", maxHeight: 38, maxWidth: 45 }}
          />
          <text style={{ fontSize: 36, fontWeight: "bolder", margin: 12 }}>
            10
          </text>
          <text style={{ color: "gray" }}>IP/ACCELERATORS</text>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={imagePath.global}
            style={{ color: "#236bf0", maxHeight: 38, maxWidth: 45 }}
          />
          <text style={{ fontSize: 36, fontWeight: "bolder", margin: 12 }}>
            12
          </text>
          <text style={{ color: "gray" }}>GLOBAL OFFICES</text>
        </div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={imagePath.value}
            style={{ color: "#236bf0", maxHeight: 38, maxWidth: 45 }}
          />
          <text style={{ fontSize: 36, fontWeight: "bolder", margin: 12 }}>
            96%
          </text>
          <text style={{ color: "gray" }}>CLIENT DELIGHT</text>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#eeee",
          marginTop: 42,
          padding: 60,
          width: "100%",
          display: "flex"
        }}
      >
        <div style={{ flexDirection: "column", display: "flex", padding: 60 }}>
          <text style={{ fontSize: 22, fontWeight: "bold", color: "blue" }}>
            TestingXperts - Leader in QA & Testing Services
          </text>
          <text style={{margin: "14px 0px", fontSize: 17}}>
            NelsonHall has positioned TestingXperts as a Leader in their most
            recent NEAT chart published in 2019 for next-gen testing services in
            the mobile testing capability.
          </text>
          <button
            style={{ maxWidth : '30%', margin: 20, left: 0}}
            type="button"
            className="btn btn-outline-primary"
          >
            DOWNLOAD REPORT
          </button>
          <text style={{fontSize : 17}}>
            NelsonHall ranked TestingXperts as the{" "}
            <span style={{ fontWeight: "bold" }}>5th Largest Pure-play</span> QA
            and Testing company globally in 2020. TestingXperts is also
            mentioned in
            <span style={{ fontWeight: "bold" }}> Everest Group</span>{" "}
            Next-generation Quality Assurance (QA) Services PEAK Matrix™
            Assessment 2020 and{" "}
            <span style={{ fontWeight: "bold" }}>ISG Provider Lens</span> study
            “Next-Gen ADM – Service Partners 2020”
          </text>
        </div>
        <img src={imagePath.reportImg}></img>
      </div>
      <div style={{marginTop : 24, alignItems: 'center', justifyContent: 'center', alignContent : "center", display: 'flex', flexDirection: "column", width: "100%"}}>
        <text style={{fontSize: 30}}>Clients Who <span style={{fontWeight : 'bold'}}> Trust Us</span></text>
        <div
        style={{
          height: 3.5,
          width: "4.2%",
          backgroundColor: "#236bf0",
          margin: "2%",
        }}
      ></div>
      <div style={{display : 'flex', justifyContent: 'space-between', width :'100%', padding: '0px 200px', alignItems: "center"}}>
    <img src={imagePath.amd} style={{height: 40, maxWidth : 155}}/>    
      
    <img src={imagePath.x8} style={{height: 80, maxWidth : 155}}/>    
      
    <img src={imagePath.flightCentre} style={{height: 150, maxWidth : 155}}/>    
      
    <img src={imagePath.hp} style={{height: 100, maxWidth : 155}}/>    
      </div>
      <button
            style={{ marginLeft: "5%", padding: "12px 12px" , margin : 12}}
            type="button"
            className="btn btn-outline-primary"
          >
            MORE CLIENTS
          </button>
      </div>
    </div>
  );
}
