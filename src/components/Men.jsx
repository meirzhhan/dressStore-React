import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MenMain from "../men-page/Men_main";


let Men = (props) =>{

    return(
        <div>
            <Header />
            <MenMain />
            <Footer />
        </div>
    );
}

export default Men;