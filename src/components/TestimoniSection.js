import './TestimoniSection.css'
import Rate1 from '../assets/images/Rate1.png' 
import imgrate1 from '../assets/images/imgrate1.png' 
import imgrate2 from '../assets/images/imgrate2.png' 

const TestimoniSection = () => {
    return (
      <div class = "TestimoniSec">
        <div class = "judulcarousel">Testimonial</div>
        <div class = "subjudulcarousel">Berbagai review positif dari para pelanggan kami</div>
        
        {/* <div id="myCarousel" class="carousel1 slide"
        data-ride="carousel"> 
            <ol class = "carousel-indicators">
                <li data-target="#myCarousel"
                data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel"
                data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner"> 
                <div class ="car1 carousel-item active"> */}

                  <div class = "gridtesticon container">
                        <div class = "gridtestrow row">
                            <div class = "gridtestcol1 col"> 
                                <div class="testicon container">
                                    <div class="raterow row">
                                        <div class="ratecol1 col"> 
                                            <img class="imgrate1" src={imgrate1} />
                                        </div>
                                        <div class="ratecol2 col">
                                            <div class="isirate1">
                                            <img class="rate1" src = {Rate1} />
                                            <p class="exp1"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <p class="exp2">John Dee 32, Bromo</p>
                                            </div>
                                        </div>
                                    </div>   
                                </div>  
                            </div>
                            <div class = "gridtestcol1 col"> 
                                <div class="testicon container">
                                    <div class="raterow row">
                                        <div class="ratecol1 col"> 
                                            <img class="imgrate1" src={imgrate2} />
                                        </div>
                                        <div class="ratecol2 col">
                                            <div class="isirate1">
                                            <img class="rate1" src = {Rate1} />
                                            <p class="exp1"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <p class="exp2">John Dee 32, Bromo</p>
                                            </div>
                                        </div>
                                    </div>   
                                </div>  
                            </div>
                        </div>
                    </div>
                {/* </div>
                
            </div>
        </div>  */}
        

      </div>
    )
}

export default TestimoniSection