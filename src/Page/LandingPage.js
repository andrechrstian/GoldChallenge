import './LandingPage.css'
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import ServiceSection from "../components/ServiceSection"
import Footer from "../components/Footer"
import WhyUsSection from '../components/WhyUsSection'
import Ctasection from '../components/CtaSection'
import FAQSection from '../components/FAQSection'
import TestimoniSection from '../components/TestimoniSection'


const LandingPage = () => {
    return (
        <div class = "Page1">
            <Header />
            <HeroSection />
            <ServiceSection />
            <WhyUsSection />
            <TestimoniSection />
            <Ctasection />
            <FAQSection />
            <Footer />
            
        </div>
    
    )
}

export default LandingPage

