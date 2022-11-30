import './FAQSection.css'

const FAQSection = () => {
    return (
        <div class = "faqsec">
            <div class = "faqcon container">
                <div class = "faqrow row">
                    <div class = "faqcol1 col">
                        <p class ="judulfaq">Frequently Asked Question</p>
                        <p class ="subjudulfaq">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div class = "faqcol2 col">
                        <div class="boxfaq1">Apa saja syarat yang dibutuhkan?</div>
                        <div class="boxfaq2">Berapa hari minimal sewa mobil lepas kunci?</div>
                        <div class="boxfaq3">Berapa hari sebelumnya sabaiknya booking sewa mobil?</div>
                        <div class="boxfaq4">Apakah Ada biaya antar-jemput?</div>
                        <div class="boxfaq5">Bagaimana jika terjadi kecelakaan</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQSection