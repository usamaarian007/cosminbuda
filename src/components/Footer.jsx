import React from "react";
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
export default function Footer({language}) {
  console.log(language.footer.arr,'llll');

  const arr = [
    "Start",
    "Licenses",
    "Instructions",
    "Style guide",
    "Changelog",
    "404",
  ];
  const wikiPediaFun = () => {

    const url = "https://www.linkedin.com";
    window.open(url, "_blank");
  };

  const wikiPediaFuns = () => {
  //   const firstName = authorbio.firstName;
  //   const lastname = authorbio.lastName;
  //   const url = `https://en.wikipedia.org/wiki/${firstName}${lastname}`;
  //   window.open(url, "_blank");
  };
  return (
    <div>
      <div
        className="container-fluid  p-4"
        style={{ backgroundColor: "#1C211C"}}
      >
        <div className="row ">
        

          {/* <div className="col-lg-4 mt-5 d-flex justify-content-center flex-column align-items-center  ">
            <p style={{ color: "white", fontWeight: "bold" }}> {language.footer.h1}</p>

            {language.footer.arr.map((elm) => {
              return (
                <>
                  <p className="cursal" style={{ color: "#B9C1B3" }}>{elm}</p>
                </>
              );
            })}
          </div>
          <div className="col-lg-4 mt-5 d-flex justify-content-center flex-column align-items-center ">
            <p style={{ color: "white", fontWeight: "bold" }}> {language.footer.h8}</p>
            <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center  ">
            <p style={{ color: "white", fontWeight: "bold" }}> page</p>

            {language.footer.arr.map((elm) => {
              return (
                <>
                  <p className="cursal" style={{ color: "#B9C1B3" }}>{elm}</p>
                </>
              );
            })}
          </div>
        
          </div>

          <div className="col-lg-4 mt-5 d-flex justify-content-center flex-column align-items-center">
            <p style={{ color: "white", fontWeight: "bold" }}> {language.footer.h9}</p>
            <p style={{ color: "#B9C1B3" }}>
            {language.footer.p1}
            </p>
            <div class="input-group p-4">
              <input type="text" placeholder="examplr@webflow.io" class="form-control text-sm " />
        
            </div>
          </div>

 
          <div className="col-lg-12  d-flex justify-content-center ">
            <div className="col-lg-2 mb-4 d-flex justify-content-center ">
      
            </div>
          </div> */}
               <div className="d-flex justify-content-center " >
               <div  className="text-white" style={{marginLeft:"20px" }} >
            <a href="https://github.com/" target="_blank">
            <AiFillGithub size={40}/>

              {/* <img src="cz.jpeg" alt="" style={{ height:"30px" }}  /> */}
              </a>

            </div>
            <div className="text-white "   >
            
            <a href="https://www.linkedin.com" target="_blank">
              {/* <img src="bvb.png" alt=""  style={{ height:"30px" }} /> */}
              <AiFillLinkedin size={40}  />
              </a>
            </div>
         

          </div>
          <div className="col-lg-12 text-center  mt-3">
            <p className="text-white">
              {language.footer.p2}
            </p>
          </div>
     
        </div>
      </div>
    </div>
  );
}
