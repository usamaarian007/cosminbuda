import React from 'react'
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
        


        <div>
            <Link  to='/'  style={{ textDecoration:'none' }}  >
          <div className="d-flex  cursal " >
            <div className="border-right p-4  ">
              <img src="logo.png" alt="" style={{ height: "30px" }} />
            </div>
            <div className="ml-5">
              <h4 className="mt-4 "  style={{ color:"black" }} >C.BUDA</h4>
            </div>
          </div>
            </Link>
          </div>
    </div>
  )
}
