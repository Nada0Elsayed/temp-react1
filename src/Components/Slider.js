
import m3 from "./imgs/m3.jpeg";
import m4 from "./imgs/m4.jpeg";
import m5 from "./imgs/m5.jpeg";
import './Slider.css';
import "./Product.css"
function Slider() {
    return (
      <>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={m4} className="d-block w-100 h-500" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={m5} className="d-block w-100 h-500" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={m3} className="d-block w-100 h-500" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
} 
export default Slider;