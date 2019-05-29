import React, { Component } from "react";
import NavMenu from "../components/NavbarMenu";
import JumbotronHeader from "../components/JumbotronHeader";
import IntroCards from "../components/IntroCards";
import ConvertForm from "../components/ConvertForm";
import AboutItems from "../components/AboutItems";
import FooterContent from "../components/FooterContent";

class App extends Component {
  render() {
    console.log("Application is STARTING")
    return (
      <>
        <div>
          <NavMenu />
          <div className="content-background">
            <JumbotronHeader />
            <IntroCards />
            <ConvertForm />
            <AboutItems />
            <FooterContent />
          </div>
        </div>
      </>
    );
  }
}

export default App;
