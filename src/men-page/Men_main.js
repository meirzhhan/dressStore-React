import './Men_main.css'

import productImg1 from './images/product1.jpg'
import productImg2 from './images/product2.jpg'
import productImg3 from './images/product3.jpg'
import productImg4 from './images/product4.jpg'
import productImg5 from './images/product5.jpg'
import Aside_ from '../components/Aside/Aside.js'
import { Link } from 'react-router-dom'


let Men_main_ = (props) => {
    return (
        <main className="main-content">
            <div className="main-container">
                <div className='product-container'>
                    <div className='product-wrapper'>                        
                        <Aside_ />
                        

                        <ul className='product-list'>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info' cost = '24.90$'>Price: 24.90 $, {props.name}</p> 
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button> 
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img'></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img'></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img'></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img'></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img'></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img'></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img'></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img'></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img'></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img'></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img'></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img'></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img'></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img'></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img'></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg1} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>
                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg2} className='product-img'></img>
                                </div>
                                <p className='product-info'>Shirt</p>
                                <p className='product-info'>Price: 59.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg3} className='product-img'></img>
                                </div>
                                <p className='product-info'>T-shirt</p>
                                <p className='product-info'>Price: 24.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg4} className='product-img'></img>
                                </div>
                                <p className='product-info'>Hoodie</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>

                            <div className='product'>
                                <div className='img-wrapper'>
                                    <img src={productImg5} className='product-img'></img>
                                </div>
                                <p className='product-info'>Sheatshirt, Jeans, shoes</p>
                                <p className='product-info'>Price: 89.90 $</p>
                                <button className='product-button'>
                                    <Link to = "/price" className='product-button-link'> Show Details </Link>
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}




export default Men_main_;


