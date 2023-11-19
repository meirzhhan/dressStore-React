import './Price_main.css'
import img from '../men-page/images/product1.jpg'

let Price_main_ = () => {
    return(
        <main className="main-content">
            <div className="main-container">
                <div className="info-container"></div>

                    <div className="detail-container">
                        <h2>KAK DELA?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <div className="detail-content">
                            <div className="detail-img-wrapper">
                                <img src={img} className="detail-img"></img>

                            </div>
                            
                            <div className='detail-info'>
                                <h2>
                                    Description
                                </h2>
                                <p className='detail-info-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quis deserunt. 
                                Aperiam minima facere dolorem saepe deleniti aspernatur amet molestiae doloremque, 
                                sed quam ullam cum veritatis corporis eius sequi magnam ipsum aliquid eum! Saepe 
                                dolorum debitis voluptate culpa veniam molestiae mollitia dignissimos velit 
                                reprehenderit voluptatibus numquam omnis aperiam, cum facere.
                                </p>
                                <h2>
                                    Price: 240.00 $
                                </h2>
                                <div className='detail-info-container'>                               
                                    <div className='detail-info-size-wrapper'>
                                        <button className='detail-info-size'>XS</button>
                                        <button className='detail-info-size'>S</button>
                                        <button className='detail-info-size'>M</button>
                                        <button className='detail-info-size'>L</button>
                                        <button className='detail-info-size'>XL</button>
                                        <button className='detail-info-size'>2XL</button>                                    
                                    </div>
                                    
                                    <div className='detail-info-button-wrapper'>
                                        <button className='detail-info-button wishlist'> 
                                            Buy
                                        </button>
                                        <button className='detail-info-button buy'>
                                            Wishlist
                                        </button>
                                    </div>
                                    
                                </div>
                               
                                
                            </div>
                            
                        </div>

                    </div>
            </div>
        </main>
        
    );
}

export default Price_main_;