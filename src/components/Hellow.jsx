import React from "react";
import Fade from "react-reveal/Fade";
import Certification from "../components/Certification";
import Drawer from '../components/drawer2'
export default function Hellow({ language }) {
  const images = ["p1.svg", "p2.svg", "p3.svg", "p4.svg", "p5.svg", "p6.svg"];
  const data = [
    {
      icon: "pen.svg",
      name: "Brand design.",
      des: "Looking at your product and the market in which it exists, .",
    },
    {
      icon: "nokpen.svg",
      name: "Website design.",
      des: "Transforming your existing communications strategy into digital .",
    },
    {
      icon: "scale.svg",
      name: "Print design.",
      des: "Adapting your communication into printed form, making sure that each color..",
    },
    {
      icon: "pen.svg",
      name: "Brand design.",
      des: "Looking at your product and the market in which it exists, .",
    },
    {
      icon: "nokpen.svg",
      name: "Website design.",
      des: "Transforming your existing communications strategy into digital .",
    },
    {
      icon: "scale.svg",
      name: "Print design.",
      des: "Adapting your communication into printed form, making sure that each color..",
    },
  ];

  return (
    <div>
      <div
        className="container-fluid"
        id="About"
        style={{ backgroundColor: "#D3D3D3" }}
      >
        <div className="row ">
          {/* <Fade bottom> */}

          <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
            <div
              className="mt-5"
              style={{
                height: "6px",
                width: "50px",
                backgroundColor: "#FFBB6E",
              }}
            ></div>
          </div>
          <div className="d-flex align-items-center justify-content-center   ">
            <h2>{language.Intro.h2}</h2>
          </div>

          <div className="col-lg-12  d-flex justify-content-center  mt-3">
            <div className="col-lg-6 text-center">
              <p className="font-italic" style={{ fontSize: "25px" }}>
                {language.Intro.p2}
              </p>
            </div>
          </div>
          <div style={{ backgroundColor: "#3A4443" }}>
            <h2 className="text-center mt-5 text-white">{language.Intro.e}</h2>

            <div className="mb-5 mt-5  d-flex justify-content-center ">
              <div className="col-lg-10  ">
                <div className="row">
                  {images.map((elm) => {
                    return (
                      <>
                        <div className="col-lg-2  d-flex  cursal justify-content-center align-items-center">
                          <div
                            className="d-flex  cursal justify-content-center align-items-center"
                            style={{
                              border: "1px solid white ",
                              height: "100px",
                              width: "100px",
                            }}
                          >
                            <img
                              src={elm}
                              alt=""
                              style={{ height: "50px", width: "50px" }}
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center mt-5">{language.Intro.e2}</h2>
          </div>
          <div className="d-flex justify-content-center mb-5  ">
            <div className=" col-lg-10   ">
              <Drawer />
              {/* {data.map((elm) => {
                  return (
                    <>
                      <Fade bottom>
                        <div
                          className=" col-lg-4  "
                          style={{ marginTop: "40px" }}
                        >
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>
                              <img
                                className="mt-3"
                                src={elm.icon}
                                alt=""
                                style={{ height: "60px" }}
                              />
                            </div>

                            <div className="mt-4">
                              <p>{elm.des}</p>
                            </div>
                          </div>
                        </div>
                      </Fade>
                    </>
                  );
                })} */}
            </div>
          </div>
          {/* <Certification/> */}
          {/* <div className="d-flex align-items-center mt-2 mb-5 justify-content-center " >
              <div className="col-lg-3  " style={{ display:'flex',justifyContent:'space-between',alignItems:'center' }}  >

            {language.Intro.arr.map((elm) => {
              return (
                <>
                  <p  className="ml-3 cursal" style={{ color:"#A9804F" }} >{elm}</p>
                </>
              );
            })}
              </div>

          </div> */}
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
}
