import React, { useRef, useEffect } from "react";
import myphoto1 from "../../assets/myphoto1.jpg";
import myphoto2 from "../../assets/myphoto2.jpg";
import myphoto3 from "../../assets/myphoto3.jpg";
import myphoto4 from "../../assets/myphot04.jpg";
import myphoto5 from "../../assets/myphoto5.jpg";
import myphoto6 from "../../assets/myprofile.jpg";
import myphoto7 from "../../assets/myphot08.jpg";

// const scrollContainer = scrollContainerRef.current;

function Gallery() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let scrollContainer = document.getElementById("jayantiGallery");
    let backButton = document.getElementById("backBtn");
    let nextButton = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaX;
    });

    nextButton.addEventListener("click", () => {
      console.log("nextClicked");
      scrollContainer.scrollLeft += 300;
    });

    backButton.addEventListener("click", () => {
      console.log("backClicked");
      scrollContainer.scrollLeft -= 300;
    });
  }, []);

  return (
    <div id="gallery">
      <div className="contenr-1200 gallery">
        <div className="about-title">
          <h2>My Photos</h2>
        </div>
        <div className="gallery-slider">
          <span id="backBtn">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <div className="images" id="jayantiGallery" ref={scrollContainerRef}>
            <img src={myphoto1} alt="" />
            <img src={myphoto2} alt="" />
            <img src={myphoto3} alt="" />
            <img src={myphoto4} alt="" />
            <img src={myphoto5} alt="" />
            <img src={myphoto6} alt="" />
            <img src={myphoto7} alt="" />
            <img src={myphoto6} alt="" />
            <img src={myphoto7} alt="" />
          </div>
          <span id="nextBtn">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
