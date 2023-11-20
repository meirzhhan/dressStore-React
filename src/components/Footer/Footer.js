import { Link } from 'react-router-dom';
import './Footer.css'
import iconInstagram from './socialMedia/instagram.png'
import MyButton from '../UI/buttons/MyButton';
let Footer = () => {
    return (
        <footer className='footer'>
            <div>

                <div className='question'>
                    <div className='question-wrapper'>
                        <div className='question-text'>
                            <h3>Questions</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                In tempus massa ac pretium dapibus. 
                                Proin consectetur eros id suscipit tristique.
                            </p>
                        </div>

                        <form className='question-form'>
                            
                            <input type = "text" placeholder = "Name"></input>
                            <input type = "text" placeholder='Email'></input>
                            <input type = "text" placeholder='Message'></input>
                            <MyButton children={"button"}/>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>


                <h3>
                    Social Media
                </h3>
                <div className='footer-icon-wrapper'>
                    <a href='/'>
                        <img src={iconInstagram} className='icon-instagram' alt=""/>
                    </a>
                    <a href='/'>
                        <img src={iconInstagram} className='icon-instagram' alt=""/>
                    </a>
                    <a href='/'>
                        <img src={iconInstagram} className='icon-instagram' alt=""/>
                    </a>
                    <a href='/'>
                        <img src={iconInstagram} className='icon-instagram' alt=""/>
                    </a>
                    <a href='/'>
                        <img src={iconInstagram} className='icon-instagram' alt=""/>
                    </a>
                </div>

            </div>

            <div className='support-section'>
                <div className='support-wrapper'>

                    <div className='shop'>
                        <h4>Shop</h4>
                        <p className='p'>Men</p>
                        <p className='p'>Women</p>
                        <p className='p'>Delvery</p>
                    </div>
                    <div className='border'></div>

                    <div className='branches'>
                        <h4>Branches</h4>
                        <p className='p'>Shymkent</p>
                        <p className='p'>Almaty</p>
                        <p className='p'>Astana</p>
                        <p className='p'>Aktobe</p>
                        <p className='p'>Turkestan</p>
                    </div>
                    <div className='border'></div>

                    <div className='support'>
                        <h4>Support</h4>
                        <p className='p'>Privacy policy</p>
                        <p className='p'>Cookies</p>
                        <p className='p'>Contact</p>
                        <p className='p'>Find branch</p>
                    </div>
                 </div>
            </div>
            <a href='https://www.instagram.com/meirzhhan' className='footer-author'>
                Made by meirzhhan
                </a>
         </footer>
    );
}

export default Footer;