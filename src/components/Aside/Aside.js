import './Aside.css'

let Aside = () => {
    return (
        <div className='product-navigation-list'>
            <div className='filter-panel'>
                Sort by
                <select>
                    <option value="relevance">Relevance</option>
                    <option value="price - low to high">low to high</option>
                    <option value="price - high to low">high to low</option>
                </select>
            </div>
            <p className='link-text'>Men</p>
            <li className='product-navigation-link-wrapper'>
                <a className='product-navigation-link'>T-shirts</a>
            </li>
            <li className='product-navigation-link-wrapper'>
                <a className='product-navigation-link'>Shirts</a>
            </li>
            <li className='product-navigation-link-wrapper'>
                <a className='product-navigation-link'>Hoodies</a>
            </li>
            <li className='product-navigation-link-wrapper'>
                <a className='product-navigation-link'>Sweatshirts</a>
            </li>
            <li className='product-navigation-link-wrapper'>
                <a className='product-navigation-link'>Jeans</a>
            </li>
            <li className='product-navigation-link-wrapper'>
                <a className='product-navigation-link'>Trousers</a>
            </li>
            <li className='product-navigation-link-wrapper'>
                <a className='product-navigation-link'>Shoes</a>
            </li>

            <div className='product-color-list'>
                <div className='color'>
                    Color
                </div>
                <div className='product-color-wrapper'>
                    <div className='product-color black'></div>
                    <div className='product-color white'></div>
                    <div className='product-color grey'></div>
                    <div className='product-color red'></div>
                    <div className='product-color green'></div>
                    <div className='product-color yellow'></div>
                    <div className='product-color blue'></div>
                    <div className='product-color orange'></div>
                    <div className='product-color purple'></div>
                </div>
            </div>

            <div className='product-size-list'>
                <p className='product-size-text'>Size</p>
                <div className='product-size-wrapper'>
                    <button className='product-size'>XS</button>
                    <button className='product-size'>S</button>
                    <button className='product-size'>M</button>
                    <button className='product-size'>L</button>
                    <button className='product-size'>XL</button>
                    <button className='product-size'>2XL</button>                                    
                </div>
            </div>
        </div>
    );
}

export default Aside;