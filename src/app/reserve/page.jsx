import './page.scss'
import Navbar from '../Layouts/Navbar/Navbar'

const Reserve = () => {
    return (
        <>

            <header>
                <Navbar target={"reserve"} />


                <div className='container'>

                    <div className='glow-box'></div>
                    <h2>Request everything you want to create and leave <span>️webina digital</span>  it on the application</h2>

                    <div className='bottom'>
                        <img className='left-img' src='/Images/Reserve/HeaderHand.svg' />

                        <button>CONSULTE FOR FREE!</button>

                        <img className='right-img' src='/Images/Reserve/HeaderHand.svg' />
                    </div>

                </div>

            </header>


        </>
    )
}

export default Reserve