import './Women_products.css'

import productImgWomen1 from '../images/productWomen1.jpg'
import productImgWomen2 from '../images/productWomen2.jpg'
import productImgWomen3 from '../images/productWomen3.jpg'
import productImgWomen4 from '../images/productWomen4.jpg'
import productImgWomen5 from '../images/productWomen5.jpg'
import productImgWomen6 from '../images/productWomen6.jpg'
import {Link} from 'react-router-dom'

let WomenProducts = () => {
    return(
        <div>
            <div className='img-wrapper'>
                <img src={productImgWomen1} className='product-img'></img>
            </div>
            <p className='product-info'></p>
            <p className='product-info'></p>

            <button className='product-button'>
                <Link to = "/price" className='product-button-link'>
                    Show details
                </Link>
            </button>
        </div>
    );
}

export default WomenProducts;