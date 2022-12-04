import './DetailPage.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FilterBar from '../components/FilterBar'
import HeroSection from '../components/HeroSection'
import APIPanggilan from '../components/APIPanggilan'

const DetailPage = () => {
    
    return (
        <div className='page3'>
            <Header />
            <HeroSection />
            <APIPanggilan />
            <FilterBar />
            <div className='footerCon2'> 
            <Footer />
            </div>
        </div>
    )
}

export default DetailPage