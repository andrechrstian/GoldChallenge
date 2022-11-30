import './HeroSection.css';
import MercedesHero from '../assets/images/MercedesHero.png'


const HeroSection = () => {
    return (
        <div class = "Hero1"> 
            <div class="HeroFull" >
                <div class="Hero row">
                    <div class="divHero1 col-sm">
                        <div class = "judulHero">
                            <h1> Sewa & Rental Mobil Terbaik di kawasan (Lokasimu) </h1>
                        </div>
                        <div class = "subJudulHero">
                        <p1> Selamat datang di Binar Car Rental. Kami 
                             menyediakan mobil kualitas terbaik dengan harga 
                             terjangkau. Selalu siap melayani kebutuhanmu untuk 
                             sewa mobil selama 24 jam.</p1>
                        </div>
                        <div class = "buttonMulaiSewa">
                            <button class = "buttonMS">Mulai Sewa Mobil</button>
                        </div>
                    </div>
                    <div class="col-sm">
                       <div class = "divHero2"></div>
                     
                    </div>
                       <img class ="MH" src={MercedesHero} alt="MercedesHero"/>
                </div>
            </div>
        </div>   
       
    )
}

export default HeroSection
