import React from 'react'

export default function Form({language}) {

  return (
    <div>
            <div className="container-fluid" id='Contact' style={{ backgroundColor: "#1C211C" }}>
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
              <h2 className="text-white">{language.Contact.h1}</h2>
            </div>
            <div className="col-lg-12  d-flex justify-content-center  mt-">
              <div className="col-lg-6 text-center">
                <p
                  className="font-italic "
                  style={{ fontSize: "25px", color: "#ffffff" }}
                >
            {language.Contact.p1}
                </p>
              </div>
            </div>
       <div className='row mt-5'>
       
       <div className='col-lg-6' >
       <div class="form-group ">
      <label for="inputEmail4  " style={{ color:"white" }} >{language.Contact.h2}</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Your First name"  style={{ backgroundColor:"#1C211C",color:"white" }} />
    </div>
       </div>
       <div className='col-lg-6 ' >
       <div class="form-group ">
      <label for="inputEmail4" style={{ color:"white" }} >{language.Contact.h5}</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Your Last name" style={{ backgroundColor:"#1C211C",color:"white" }}/>
    </div>
       </div>
       <div className='col-lg-6 mt-4' >
       <div class="form-group ">
      <label for="inputEmail4"  style={{ color:"white" }}  >{language.Contact.h3}</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Your Phone" style={{ backgroundColor:"#1C211C",color:"white" }}/>
    </div>
       </div>
       <div className='col-lg-6 mt-4' >
       <div class="form-group ">
      <label for="inputEmail4" style={{ color:"white" }} >{language.Contact.h4}</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email" style={{ backgroundColor:"#1C211C",color:"white" }}/>
    </div>
       </div>
  
       <div class="form-group mt-4">
    <label for="inputAddress" style={{ color:"white" }} >{language.Contact.h6}</label>
    <textarea  type="text" class="form-control" id="inputAddress" placeholder="Type out your message here ...." style={{ backgroundColor:"#1C211C",color:"white"  }}/>
  </div>
       </div>
       <div className='d-flex justify-content-end ' >

  <button type="button" class="btn btn-dark mt-5  border-white">Send</button>
       </div>
          </div>
        </div>
      </div>


    </div>
  )
}
