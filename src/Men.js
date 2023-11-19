import React from "react";
import ReactDOM from "react";
import Footer_ from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Men_main_ from "./men-page/Men_main";


let Men_ = (props) =>{

    return(
        <div>
            <Header />
            <Men_main_ />
            <Footer_ />
        </div>
    );
}

export default Men_;