import React from 'react'
import Slider from '../components/Slider'
export default function ProDetail({language}) {
    // console.log(language.ProjectDetail,'uuuuuu');
  return (
    <div>
        
<div className="container mb-5" id='related'>
    <div className="row">
        <div className="col-lg-12 text-center mt-5 ">
            
            <h1 style={{ color:"#5C636A" }}>{language.ProjectDetail.h1}</h1>
        </div>
        <div className="col-lg-6 mt-5">
            <Slider/>
        </div>
        <div className="col-lg-6 ">
            <h3  className='mt-5' >{language.ProjectDetail.p1}</h3>
            <p  style={{ color:"#5C636A" }} >{language.ProjectDetail.p2}</p>
            <div>
            <button type="button" class="btn btn-secondary">{language.ProjectDetail.b1}</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
