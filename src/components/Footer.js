import './Footer.css';
import ListSosmed from '../assets/images/ListSosmed.png'

const Footer = () => {
    return (
        <div class = "FooterSec">
            <div class = "conFooter container">
                <div class = "rowFooter row">
                    <div class = "colFooter1 column"> 
                        <div class = "alamatFooter"> Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                        <div class = "emailFooter"> binarcarrental@gmail.com</div>
                        <div class = "noFooter">081-233-334-808</div>
                    </div>
                    <div class = "colFooter2 column">  
                        <div class = "ourFooter">Our services</div>
                        <div class = "whyFooter">Why Us</div>
                        <div class = "testiFooter">Testimonial</div>
                        <div class = "faqFooter">FAQ</div>
                    </div>
                    <div class = "colFooter3 column"> 
                        <div class = "sosmedFooter">Connect with us</div>
                        <img src={ListSosmed} />
                    </div>
                    <div class = "colFooter4 column"> 
                        <div class = "copyFooter">Copyright Binar 2022</div>
                        <div class = "logoFooter">  </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer