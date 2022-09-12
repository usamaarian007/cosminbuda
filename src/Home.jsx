import Nav from "./components/Nav";
import Myintro from "./components/Myintro";
import Hellow from "./components/Hellow";
import What from "./components/What";
import Clients from "./components/Clients";
import Tools from "./components/Tools";
import Example from "./components/Example";
import Form from "./components/Form";
import Footer from "./components/Footer";
function Home({language,setContect,fun}) {
  
  return (
    <>
    
          <Nav language={language} setContect={setContect} fun={(data)=>fun(data)}/>
          <Myintro language={language} />
          <Hellow language={language} />
          <What language={language}/>
          {/* <Tools language={language}/> */}
          <Example  language={language} />
          <Clients  language={language} />
          <Form language={language} />
          <Footer language={language} />
    
    </>
  );
}

export default Home;