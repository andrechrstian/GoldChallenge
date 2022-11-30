import './ServiceSection.css';
import HappyGirl from '../assets/images/HappyGirl.png'
import Checklist from '../assets/images/Checklist.png'

const ServiceSection = () => {
    return (
        <div class = "ourService">
            <div class = "con1 container">
                <div class = "row1 row">
                    <div class = "col1 column">
                        <img class = "HG" src={HappyGirl} />
                    </div>
                    <div class = "col2 column">
                        <div class ="Judulcol2"> 
                        <p>Best Car Rental for any kind of trip in (Lokasimu)!</p>
                        </div>
                        <div class ="SubJudulcol2">
                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.   
                        </div>
                        <div class ="checklist">
                            <div class="check1">
                            <img src={Checklist} />
                            Sewa Mobil Dengan Supir di Bali 12 Jam
                            </div>
                            <div class="check2">
                            <img src={Checklist} />
                            Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </div>
                            <div class="check3">
                            <img src={Checklist} />
                            Sewa Mobil Jangka Panjang Bulanan
                            </div>
                            <div class="check4">
                            <img src={Checklist} />
                            Gratis Antar - Jemput Mobil di Bandara
                            </div>
                            <div class="check5">
                            <img src={Checklist} />
                            Layanan Airport Transfer / Drop In Out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ServiceSection