import './Women_main.css'

import Aside_ from '../components/Aside/Aside'

import WomenProducts from './Products/Women_products'

let Women_main_ = () => {
    return (
        <main className="main-content">
            <div className="main-container">
                <div className='product-container'>
                    <div className='product-wrapper'>
                        
                        <Aside_ />

                        <ul className='product-list'>
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            <WomenProducts />
                            
                            {/* {arr.map(e=>  <Women_products_ title= {e.title} imageUrl={e.imageUrl} price={e.price} />)}       */}
                        </ul>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Women_main_;
