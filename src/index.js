import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import JsonData from "./components/dualLanguage.json";
// import './i18n'
import DetailViwe from "./DetailViwe";
export default function App() {
  const [contect,setContect]=useState("English")
  const [language, setLanguage] = useState(JsonData.english);
  

  useEffect(() => {
   
    if(contect === "English"){
      setLanguage(JsonData.english)
    }else if(contect === "Spanish"){
      setLanguage(JsonData.french)
    }
  })
  
  
const fun=(data)=>{
  setContect(data)
}
console.log(  contect,'contect');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home language={language} setContect={setContect} fun={(data)=>fun(data)} />} />
        <Route path="/Detail" element={<DetailViwe language={language} setContect={setContect} fun={(data)=>fun(data)}  />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
