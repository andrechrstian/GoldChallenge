import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import FilterBar from "../components/FilterBar"
import HasilPencarian from "../components/HasilPencarian"
import './SearchPage.css'


const SearchPage = () => {
    return (
        <div className="page2">
            <Header />
            <HeroSection />
            <FilterBar />
            <HasilPencarian />
            <div class='footercontainer'> 
                <Footer />
            </div>
        </div>
    )
}

export default SearchPage