import React, { useState } from "react";
import imagePath from "../../constants/imagePath";
import "./HomePage.css";
import FlatList from "flatlist-react";
import styles from "./styles";
import CarouselComp from "../../components/CarouselComp";


export default function HomePage() {
  const [dropDown, setDropDown] = useState(false);

  const services = [
    { service: imagePath.hp },
    { service: imagePath.amd },
    { service: imagePath.x8 },
    { service: imagePath.flightCentre },
    { service: imagePath.hp },
    { service: imagePath.amd },
    { service: imagePath.x8 },
    { service: imagePath.flightCentre },
    { service: imagePath.hp },
    { service: imagePath.amd },
    { service: imagePath.x8 },
    { service: imagePath.flightCentre },
    { service: imagePath.hp },
    { service: imagePath.amd },
    { service: imagePath.x8 },
    { service: imagePath.flightCentre }
  ]

  const taskBar = [
    { name: 'Services' },
    { name: 'Industries' },
    { name: 'Engagement' },
    { name: 'Knowledge Center' },
    { name: 'Company' },
    { name: 'Innovation' }
  ]

  const renderServices = (item, index) => {
    return (
      // <img src={item?.service} style={{ height: 150, maxWidth: 275 }}/>
      <div style={{ height: 200, width: 120, backgroundColor: 'lightgray', }}>
        <text>hey</text>
      </div>
    )
  }

  const renderTasks = (item) => {
    return (
      <div
        style={styles.tasks}
      >
        <div style={{
          alignContent: 'center',
          alignItems: 'center', display: 'flex'
        }}>
          <button style={{ borderWidth: 0, backgroundColor: "transparent" }}>
            {item.name}
          </button>
          <img src={imagePath.downArrow} style={{ maxHeight: 15, maxWidth: 15 }} /></div>
      </div>
    )
  }
  return (
    <div
      style={styles.container}
    >
      <div
        style={styles.taskBar}
      >
        <img src={imagePath.txLogo} style={{ height: "10%", width: "19%" }} />
        <FlatList
          renderItem={renderTasks}
          list={taskBar}
        />
        <button
          style={{ maxWidth: '30%', margin: 20, left: 0 }}
          type="button"
          className="btn btn-outline-primary"
        >
          Contact us
        </button>
        <img src={imagePath.searchIcon} style={{ maxHeight: 15, maxWidth: 15 }} />


      </div>
      <div>
        <CarouselComp />
        <div
          style={styles.absoluteDiv}
        >
          <text style={{ fontSize: 37 }}>
            <span style={{ fontWeight: "bold" }}>
              {"Delight your customers"}
            </span>
            <span>{" by partnering with us"}</span>
          </text>
          <button
            style={{ marginLeft: "5%", padding: "24px 12px" }}
            type="button"
            className="btn btn-outline-primary"
          >
            <text>GET IN TOUCH</text>
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
        style={styles.blueSeparator}
      ></div>
      <div
        style={styles.txDataMainDiv}
      >
        <div
          style={styles.deliveryCentre}
        >
          <img
            src={imagePath.notes}
            style={styles.txInfoIcons}
          />
          <text style={styles.txInfoBoldText}>
            7
          </text>
          <text style={{ color: "gray", textAlign: "center" }}>
            DELIVERY CENTERS IN UK, USA & INDIA
          </text>
        </div>

        <div
          style={styles.txIconsView}
        >
          <img
            src={imagePath.system}
            style={styles.txInfoIcons}
          />
          <text style={styles.txInfoBoldText}>
            10
          </text>
          <text style={{ color: "gray" }}>IP/ACCELERATORS</text>
        </div>
        <div
          style={styles.txIconsView}
        >
          <img
            src={imagePath.global}
            style={styles.txInfoIcons}
          />
          <text style={styles.txInfoBoldText}>
            12
          </text>
          <text style={{ color: "gray" }}>GLOBAL OFFICES</text>
        </div>
        <div
          style={styles.txIconsView}
        >
          <img
            src={imagePath.value}
            style={styles.txInfoIcons}
          />
          <text style={styles.txInfoBoldText}>
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
          <text style={styles.blueBoldTxt}>
            TestingXperts - Leader in QA & Testing Services
          </text>
          <text style={{ margin: "14px 0px", fontSize: 17 }}>
            NelsonHall has positioned TestingXperts as a Leader in their most
            recent NEAT chart published in 2019 for next-gen testing services in
            the mobile testing capability.
          </text>
          <button
            style={{ maxWidth: '30%', margin: 20, left: 0 }}
            type="button"
            className="btn btn-outline-primary"
          >
            DOWNLOAD REPORT
          </button>
          <text style={{ fontSize: 17 }}>
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
      <div style={styles.clientsView}>
        <text style={{ fontSize: 30 }}>Clients Who <span style={{ fontWeight: 'bold' }}> Trust Us</span></text>
        <div
          style={styles.blueSeparator}
        ></div>
        <div style={styles.clientLogosView}>
          <img src={imagePath.amd} style={{ height: 40, maxWidth: 155 }} />

          <img src={imagePath.x8} style={{ height: 80, maxWidth: 155 }} />

          <img src={imagePath.flightCentre} style={{ height: 150, maxWidth: 155 }} />

          <img src={imagePath.hp} style={{ height: 100, maxWidth: 155 }} />
        </div>
        <button
          style={{ marginLeft: "5%", padding: "12px 12px", margin: 12 }}
          type="button"
          className="btn btn-outline-primary"
        >
          MORE CLIENTS
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        <text>Our key services</text>

        {/* {services.map((item, index) => {
          return (
            <div>
              <img src={item.service} style={{ height: 150, maxWidth: 275 }}/>
            </div>
          )
        })} */}
        {/* <FlatList list={services}
          renderItem={renderServices}
          
        >

        </FlatList> */}
      </div>
    </div>
  );
}
