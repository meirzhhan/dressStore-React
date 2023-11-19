import React from "react";
import ReactDOM from "react";
import Footer_ from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Men_main_ from "./men-page/Men_main";
import Price_main_ from "./price-page/Price_main";


let Price_ = (props) =>{
    return(
        <div>
            <Header />
            <Price_main_ />
            <Footer_ />
        </div>
    );
    
}
export default Price_;