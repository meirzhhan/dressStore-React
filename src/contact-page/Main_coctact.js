import './Main_contact.css'

let Main_contact = () =>{
    return(
        <main className='main-content'>
            <div className='main-container'>
                <div className='contact-wrapper'>

                    <h2 className='main-title'>
                        Contact
                    </h2>
                    <p className='main-info'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec eleifend ligula neque, at faucibus metus rutrum sed. 
                        Fusce interdum at est eget aliquet. Suspendisse potenti. 
                        Curabitur ac luctus magna. Donec eleifend ligula neque, 
                        at faucibus metus rutrum sed. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.
                    </p>

                    <h2 className='main-title'>
                        Phone number:
                    </h2>
                    <p className='main-info'>
                        +7(707)-600-20-75 (free connection)
                    </p>

                    <h2 className='main-title'>
                        Work hours:
                    </h2>
                    <p className='main-info'>
                        Monday - Friday: 9.00 - 20.00
                    </p>
                    <p className='main-info'>
                        Saturday - SUnday: 10.00 - 16.00
                    </p>
                </div>
            </div>

        </main>
    );
}

export default Main_contact;