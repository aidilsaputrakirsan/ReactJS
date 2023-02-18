import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navigation from "./Navigation";
//import Navigation from "./Navigation";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Slider from "./Slider";

function App() {
  return (

    <div>
      <Slider />
      <Education />
      <WorkExperience />
      <Skills />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
   );
}

export default App;
