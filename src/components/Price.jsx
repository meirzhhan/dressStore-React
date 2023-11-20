import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PriceMain from "../price-page/Price_main";


let Price = (props) =>{
    return(
        <div>
            <Header />
            <PriceMain />
            <Footer />
        </div>
    );
    
}
export default Price;