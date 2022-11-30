import './WhyUsSection.css'
import WhyUs1 from '../assets/images/WhyUs1.png'
import WhyUs2 from '../assets/images/WhyUs2.png'
import WhyUs3 from '../assets/images/WhyUs3.png'
import WhyUs4 from '../assets/images/WhyUs4.png'

const WhyUsSection = () => {
    return (
        <div class ="whysection">
            <div class="conwhy container">
                <div class="rowwhy1 row">
                    <div class="colwhy1 col">Why Us? </div>
                </div>
                <div class="rowwhy2 row">
                    <div class="colwhy2 col">Mengapa harus pilih Binar Car Rental? </div>
                </div>
                <div class="rowwhy3 row">
                    <div class="colwhy3 col">  
                        <img class="w1" src={WhyUs1} />
                        <p class="judulw1">Mobil Lengkap</p>
                        <p class="subjudulw1">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                    <div class="colwhy4 col">
                        <img class="w2" src={WhyUs2} />
                        <p class="judulw2">Harga Murah</p>
                        <p class="subjudulw2">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div class="colwhy5 col"> 
                        <img class="w3" src={WhyUs3} />
                        <p class="judulw3">Layanan 24 Jam</p>
                        <p class="subjudulw3">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                    <div class="colwhy6 col">
                        <img class="w4" src={WhyUs4} />
                        <p class="judulw4">Sopir Profesional</p>
                        <p class="subjudulw4">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUsSection