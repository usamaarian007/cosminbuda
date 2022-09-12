import React from "react";
import Fade from 'react-reveal/Fade';
export default function What({language}) {
  const data = [
    {
      icon: "pen.svg",
      name: "Brand design.",
      des: "Looking at your product and the market in which it exists, we work together to design a brand that communicates your strengths.",
    },
    {
      icon: "nokpen.svg",
      name: "Website design.",
      des: "Transforming your existing communications strategy into digital form, based on modern web technologies and beautiful design.",
    },
    {
      icon: "scale.svg",
      name: "Print design.",
      des: "Adapting your communication into printed form, making sure that each color and vector is up to the task, be it on a button or a billboard.",
    },
  ];

  return (
    <div>
      <div className="container-fluid" id="What" style={{ backgroundColor: "#EEF1EF" }}>
        <div className="row">
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
            <h2>{language.WhatIDo.wh}</h2>
          </div>

          <div className="d-flex justify-content-center mb-5  ">
            <div className=" col-lg-10   ">
              <div className="row d-flex flex-wrap justify-content-center p-4 ">
                {language.WhatIDo.data.map((elm) => {
                  return (
                    <>
                      <Fade bottom>
                        <div
                          className=" col-lg-4"
                          style={{ marginTop: "80px" }}
                        >
                          <div 
                            className="d-flex flex-column justify-content-center align-items-center"
                          >
                            <div>
                              <img
                                className="mt-3"
                                src={elm.icon}
                                alt=""
                                style={{ height: "60px" }}
                              />
                            </div>
                            <div className="mt-4">
                              <h4>{elm.name}</h4>
                            </div>
                            <div>
                              <p>{elm.des}</p>
                            </div>
                            <button
                              type="button"
                              class="btn btn-secondary mt-2"
                            >
                              FIND OUT MORE
                            </button>
                          </div>
                        </div>
                      </Fade>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
    );
}