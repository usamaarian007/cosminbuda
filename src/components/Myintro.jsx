import React from "react";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';

export default function Myintro({language}) {

  const pageName = window.location.href.split("/")[3];

  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "#EEF1EF" }}>
        <div className="row">
        <Fade bottom>

          <div className="col-lg-12  d-flex justify-content-center  mt-5">
            <img
              src="pic.jpeg"
              className="rounded-circle"
              alt=""
              style={{ height: "150px", width: "150px" }}
            />
          </div>
          <div className="col-lg-12  d-flex justify-content-center  mt-3">
            <h2>{language.Intro.h1}</h2>
          </div>
          <div className="col-lg-12  d-flex justify-content-center  mt-3">
            <div className="col-lg-5 text-center">
              <p style={{ marginBottom: pageName === "Detail" && "125px" }} >
             {language.Intro.p1}
              </p>
            </div>
          </div>
          </Fade>

          <i class="bi bi-arrow-down"></i>
          {pageName === "Detail" ? (
            ""
          ) : (
            <>
              <div
                className="col-lg-12  d-flex justify-content-center"
                style={{ marginTop: "80px" }}
              >
                <div className="col-lg-2 mb-5 d-flex justify-content-center ">
                  <div
                    style={{
                      height: "70px",
                      width: "70px",
                      border: "1px solid black",
                    }}
                    className=" rounded-circle cursal  d-flex justify-content-center align-items-center"
                  >
                    <Link
                      to="What"
                      py={true}
                      smooth={true}
                      offset={50}
                      duration={50}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        style={{ height: "40px" }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
