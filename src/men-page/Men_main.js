import './Men_main.css'

import productImg1 from './images/product1.jpg'
import productImg2 from './images/product2.jpg'
import productImg3 from './images/product3.jpg'
import productImg4 from './images/product4.jpg'
import productImg5 from './images/product5.jpg'
import Aside from '../components/Aside/Aside.js'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/buttons/MyButton.jsx'


let MenMain = (props) => {
    return (
        <main className="main-content">
            <div className="main-container">
                <div className='product-container'>
                    <div className='product-wrapper'>                        
                        <Aside/>
                        
                        <ul className='product-list'>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info' cost = '24.90$'>Price: 24.90 $, {props.name}</p>
                                <Link to="/price">
                                    <MyButton children={"Show Details"}/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton/>
                                </Link> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img' alt=""></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <Link to="/price">
                                    <MyButton />
                                </Link> 
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}




export default MenMain;


