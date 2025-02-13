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


            <section className='whoare'>
                <div className='container'>
                    <div className='left'>
                        <div className='glow-box'></div>
                        <img src='/Images/Reserve/LogoContainer.svg' />

                        <div className='card'>
                            <span>1</span>
                            <p>Search Engine Optimization (SEO), experts optimize  and improve its visibility in search engine results</p>
                        </div>

                        <div className='bottom'>
                            <h3><span>WEBSITE</span> UI / UX </h3>
                            <img src='/Images/Reserve/ArrowCont.svg' />
                        </div>
                    </div>
                    <div className='right'>
                        <img src='/Images/Reserve/PhoneCont.svg' />

                        <div className='card'>
                            <span>2</span>
                            <p>Targeted Advertising,  data-driven insights and advanced targeting techniques to reach your ideal audience.</p>
                        </div>


                        <div className='bottom'>
                            <h3> <span>APPS</span> UI / UX </h3>

                            <img src='/Images/About/ArrowAb.svg' />
                        </div>
                    </div>
                </div>'
            </section>

        </>
    )
}

export default Reserve