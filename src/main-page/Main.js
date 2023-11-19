import './Main.css'

import salesImg from './images/Sale.jpg'
import collectionImg1 from './images/Collection-1.jpg'
import collectionImg2 from './images/Collection-2.jpg'
import collectionImg3 from './images/Collection-3.jpg'
import collectionImg4 from './images/Collection-4.jpg'
import collectionImg5 from './images/Collection-5.jpg'

let Main_ = () => {
    return (
        <main className='main-content'>
            <div className='main-container'>

                <div className='showCase'>
                    <h3 className='main-title'>
                        Stylish black and white clothes for every occasion.
                    </h3>
                    <p className='main-info'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eleifend ligula neque, at faucibus metus rutrum sed.
                        Fusce interdum at est eget aliquet. Suspendisse potenti.
                        Curabitur ac luctus magna
                    </p>
                </div>

                <div className='sale'>
                    <div className='sale-img'>
                        <div className='sale-img-info'>
                            <h1 className='sale-title'>SALE</h1>
                            <p className='sale-text'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Odit dolores hic sint excepturi, omnis minus. Perferendis,
                                velit ut? In, voluptas.
                            </p>
                        </div>

                    </div>

                    {/* <img src={salesImg} className='sale-img' /> */}
                </div>

                <div className='collection'>

                    <div className='collection-title'>
                        NEW COLLECTION
                    </div>
                    <div>
                        <div className='collection-img'>
                            <img src={collectionImg1} className='collection-img-first' />
                            <img src={collectionImg2} className='collection-img-first' />
                        </div>
                        <div className='collection-img'>
                            <img src={collectionImg3} className='collection-img-second' />
                            <img src={collectionImg4} className='collection-img-second' />
                            <img src={collectionImg5} className='collection-img-second' />
                        </div>
                    </div>
                    <div className='collection-title'>
                        NEW COLLECTION
                    </div>

                </div>

            </div>
        </main>
    );
}

export default Main_;