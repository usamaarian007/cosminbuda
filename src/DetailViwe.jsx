import React from "react";
import Nav from "./components/Nav";
import Myintro from "./components/Myintro";
import Footer from "./components/Footer";
import ProDetail from "./components/ProDetail";
import Form from "./components/Form";
import Example from "./components/Example";
import { useLocation } from "react-router-dom";
export default function DetailViwe({ language, setContect, fun }) {
  const location = useLocation();
  console.log(location.name, "mmmmmmm");
  return (
    <div>
      <Nav
        language={language}
        setContect={setContect}
        fun={(data) => fun(data)}
      />
      <Myintro language={language} />
      <ProDetail language={language} />
      <Example language={language} />
      <Form language={language} />
      <Footer language={language} />
    </div>
  );
}
