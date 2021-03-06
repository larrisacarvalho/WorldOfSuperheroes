import "./carousel.css"
export default function Carousel(props) {

   return(
    <div class="container-fluid carousalDiv">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
      </ol>
  
    
      <div class="carousel-inner" role="listbox">
  
        <div class="item active">
          <img class="carousel-photo" src="./images/comics0.png" alt="Marvel"/>
        </div>
  
        <div class="item">
          <img class="carousel-photo" src="./images/comics1.png" alt="DarkHorse"/>
        </div>
      
        <div class="item">
          <img class="carousel-photo" src="./images/comics2.png" alt="DC"/>
        </div>
  
        <div class="item">
          <img class="carousel-photo" src="./images/comics3.png" alt="NBCHeroes"/>
        </div>

        <div class="item">
          <img class="carousel-photo" src="./images/comics4.png" alt="StarWars"/>
        </div>

        <div class="item">
          <img class="carousel-photo" src="./images/comics5.png" alt="StarTrek"/>
        </div>
    
      </div>
  
    
      <a class="left carousel-control a-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control a-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  
   )

}
