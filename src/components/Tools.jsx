import React from "react";

export default function Tools({ language }) {
  const data = [
    {
      img: "z1.svg",
      name: "Webflow",
    },
    {
      img: "z2.svg",
      name: "Sketch",
    },
    {
      img: "z3.svg",
      name: "Figma",
    },
    {
      img: "z4.svg",
      name: "Adobe Photoshop",
    },
    {
      img: "z5.svg",
      name: "Adobe Illustrator",
    },
  ];
  return (
    <div>
      <div className="container mt-5 mb-5" id="tools">
        <div className="row">
          <div className="col-lg-6 ">
            <img
              src="tool.jpeg"
              alt=""
              style={{ height: "700px", width: "100%" }}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center ">
            <div>
              <div className="d-flex align-items-center justify-content-start mt-5 mb-3">
                <div
                  className="mt-5"
                  style={{
                    height: "8px",
                    width: "50px",
                    backgroundColor: "#FFBB6E",
                  }}
                ></div>
              </div>
              <div className="d-flex align-items-center justify-content-start   ">
                <h2 className="text-black">{language.Tools.h1}.</h2>
              </div>
              <div className="col-lg-12  d-flex justify-content-start  mt-">
                <div className="col-lg-12 text-start">
                  <p
                    className="font-italic "
                    style={{ fontSize: "25px", color: "#959D97" }}
                  >
                    {language.Tools.p2}.
                  </p>
                </div>
              </div>
              {language.Tools.data.map((elm) => {
                return (
                  <>
                    <div className="d-flex  cursal ">
                      <img src={elm.img} alt="" />

                      <p className="mt-3" style={{ marginLeft: "10px" }}>
                        {elm.name}
                      </p>
                    </div>
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
