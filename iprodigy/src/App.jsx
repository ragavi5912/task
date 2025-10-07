


import Navbar from "./components/Navbar/navbar.jsx";
import Youtube from "./components/Youtube/youtube.jsx";
import About from "./components/about/about.jsx";

import Content from "./components/content/content.jsx";
import Home from "./components/home/home.jsx"; 
import Main from "./components/main/mains.jsx";

import Why from "./components/why-us/why.jsx";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home /> {/* Add Home component here */}
      <About/>
      <Why/>
      <Youtube/>
      <Content/>
      <Main/>
     
    
      
   
    </div>
  );
}

export default App;






