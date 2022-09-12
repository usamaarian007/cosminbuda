import React from "react";
import Fade from "react-reveal/Fade";

export default function Clients({ language }) {
  const images = [
    "p1.svg",
    "p2.svg",
    "p3.svg",
    "p4.svg",
    "p5.svg",
    "p6.svg",
    "p7.svg",
    "p8.svg",
    
    
  ];
  return (
    <div>
      <div
        className="container-fluid"
        id="clients"
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
              <h2 className="text-white">{language.PreviousClients.h1}</h2>
            </div>
            <div className="col-lg-12  d-flex justify-content-center  mt-">
              <div className="col-lg-6 text-center">
                <p
                  className="font-italic "
                  style={{ fontSize: "25px", color: "#959D97" }}
                >
                  {language.PreviousClients.p1}
                </p>
              </div>
            </div>
            <div className="row">
              {images.map((elm) => {
                return (
                  <>
                    <Fade bottom>
                      <div className="col-lg-3 col-sm-6 mt-4  d-flex justify-content-center ">
                        <div
                          className="d-flex c cursal justify-content-center align-items-center "
                          style={{
                            height: "230px",
                            width: "230px",
                            border: "1px solid white",
                          }}
                        >
                          <img src={elm} alt="" />
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
  );
}
