import './Header.css';

const Header = () => {
return (
<nav class="navbar navbar-expand-lg navbar-light" fixed="top">
  
  <a class="navbar-brand" href="#"> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Our Service</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Why Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Testimonial</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQ</a>
      </li>
    </ul>
  </div>
  
</nav>
)}

export default Header 