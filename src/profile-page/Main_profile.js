import MyButton from '../components/UI/buttons/MyButton';
import './Main_profile.css'

let MainProfile = (props) => {
    return(
        <main className="main-content">
            <div className="main-container">
                <div className='profile-menu'>
                        <h1 className='h2'>Sign in</h1>
            
                    <div className='profile-menu-input'>
                            Enter your username or email address
                            <input type="login" placeholder='Username or email address' name='login'>

                            </input>
                            Enter your password
                            <input type="password" placeholder='Password' name='password'>
                            
                            </input>
                    </div>


                    <div className='profile-menu-footer'>
                        <p className='h1'>Sign up</p>
                        <p className='profile-menu-footerText'>
                            Forgot password
                        </p>
                        <div>
                            <MyButton>Sign in</MyButton>
                        </div>
                        
                        
                    </div>


                   
                  
                </div>

                    



        

            </div>
        </main>
    );
}

export default MainProfile;