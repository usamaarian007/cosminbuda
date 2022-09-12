import React from "react";
import "../Styles/Style.css";
import { Outlet, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Model from "../components/Modal";
export default function Example({ language }) {
  const images = [
    "a1.jpeg",
    "a2.jpeg",
    "a3.jpeg",
    "a4.jpeg",
    "a5.jpg",
    "a6.jpg",
    "a7.jpeg",
    "a8.jpeg",
    "a9.jpg",
    "a10.jpg",
  ];
  const pageName = window.location.href.split("/")[3];
  return (
    <div>
      <div
        className="container-fluid"
        id="Work"
        style={{ backgroundColor: "#3A4443" }}
      >
        <div className="row flex  justify-content-center  ">
          <div className="col-lg-8 mt-5 mb-5">
            <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
              <div
                className="mt-5"
                style={{
                  height: "8px",
                  width: "50px",
                  backgroundColor: "#FFBB6E",
                }}
              ></div>
            </div>

            <div className="d-flex align-items-center justify-content-center   ">
              <h2 className="text-white">
                {pageName === "Detail"
                  ? "Related Projects."
                  : `${language.WorkExamples.h1}`}
              </h2>
            </div>
            <div className="col-lg-12  d-flex justify-content-center  mt-">
              <div className="col-lg-6 text-center">
                <p
                  className="font-italic "
                  style={{ fontSize: "25px", color: "#959D97" }}
                >
                  {language.WorkExamples.p1}
                </p>
              </div>
            </div>
          </div>
          <Model language={language} />
          {/* <div className="row">
              {images.map((elm) => {
                return (
                  <>
                       <Fade bottom>

                    <div className="col-lg-4 col-sm-6 mt-4 mb-3 d-flex cursal  justify-content-center ">
                      <div
                        className="d-flex overflow-hidden flex-column justify-content-end align-items-start "
                        style={{
                          height: "280px",
                          width: "500px",
                          border: "1px solid white",
                        }}
                      >
                        
                        <Link to={{
                          pathname:'/Detail',
                          name:'App wireframes for Execetur Sit'
                        }}>
                        <div className='position-relative' >

                        <img className='img_zoom' src={elm} alt="" style={{ height:'100%',width:"100%" }} />
                        </div>
                    </Link>
                        <div  className='position-absolute z-10 text-white' >
                        <p>{language.WorkExamples.h4}</p>

                        </div>
                      </div>
                    </div>
                    </Fade>

                  </>
                );
              })}
            </div> */}
        </div>
      </div>
    </div>
  );
}
