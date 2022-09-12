import React from "react";
import "../Styles/Style.css";
import Deawer from "../components/deawer";
import { Link } from "react-scroll";
import Logo from "./Logo";
import Languagebutton from "./LanguageButton";
// import { useTranslation } from 'react-i18next';
export default function Nav({language,setContect,fun}) {
  console.log(language.navbar,'languageb');

  const arr = ["What i do", "clients", "tools", "projects", "Contact"];
  const pageName = window.location.href.split("/")[3];
  return (
    <div style={{ zIndex: "30", position: "sticky", top: "0" }}>
      <div
        className="container-fluid  d-flex justify-content-center  "
        style={{ backgroundColor: "#EEF1EF" }}
      >
        <div
          className=" border row d-flex mt-3 justify-content-between "
          style={{
            width: "96%",
            borderRadius: "15px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="   d-flex justify-content-between">
            <Logo />

            <div>
              {pageName != "Detail" ? (
                <>
                  <div
                    className=" d-flex align-items-center justify-content-around mt-4  ul_show "
                    style={{ width: "550px" }}
                  >
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                      >
                        {language.navbar.h3}
                      </Link>
                    </p>
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="What"
                        py={true}
                        smooth={true}
                        offset={50}
                        duration={50}
                      >
                        {language.navbar.h1}
                      </Link>
                    </p>
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="Work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                      >
                        {language.navbar.h4}
                      </Link>
                    </p>
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="clients"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={50}
                      >
                        {language.navbar.h2}
                      </Link>
                    </p>
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={50}
                      >
                        {language.navbar.h5}
                      </Link>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className=" d-flex align-items-center justify-content-around mt-4  ul_show "
                    style={{ width: "400px" }}
                  >
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="related"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={50}
                      >
                        Project Detail
                      </Link>
                    </p>
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="Work"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={50}
                      >
                        Related Projects
                      </Link>
                    </p>
                    <p
                      className="curser"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={50}
                      >
                        Contact
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className="English_convert">
                <Languagebutton
                  setContect={setContect}
                  fun={(data) => fun(data)}
                />
              </div>
              <div className=" d-flex justify-content-end rounded-circle show_drawer   ">
                <Deawer
                  setContect={setContect}
                  fun={(data) => fun(data)}
                  language={language}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
