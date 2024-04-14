document.addEventListener("DOMContentLoaded", function() {
    var firstbtn = document.querySelectorAll("#FirstBtn");
  

    firstbtn.forEach(function(FirstBtn) {
      FirstBtn.addEventListener("click", function() {

        var overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
        overlay.innerHTML = "<div class='overlay-content'>We decided to change the logo and label to better reflect our brand's evolving identity and values. Our previous design served us well, but as we grow and adapt to meet the needs of our customers and the market, we felt it was time for a refresh. The new logo and label embody our commitment to innovation, quality, and customer satisfaction, and we believe they will resonate more strongly with our audience while also distinguishing us in the marketplace.</div>";
  

        overlay.addEventListener("click", function(event) {
          if (event.target === overlay) {
            overlay.style.display = "none";
          }
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var secondbtn = document.querySelectorAll("#SecondBtn");
  

    secondbtn.forEach(function(SecondBtn) {
      SecondBtn.addEventListener("click", function() {

        var overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
        overlay.innerHTML = "<div class='overlay-content'>Billy beer has it unique taste because of its unique recipe which contain Rice, Barley, Hop, Sugar, Citric acid, many more and most importantly 8% of alcohol. Order in which we put ingredients together and the temperature of the beer is also very important factor which makes it taste better.</div>";
  

        overlay.addEventListener("click", function(event) {
          if (event.target === overlay) {
            overlay.style.display = "none";
          }
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var thirdbtn = document.querySelectorAll("#ThirdBtn");
  
    thirdbtn.forEach(function(ThirdBtn) {
      ThirdBtn.addEventListener("click", function() {

        var overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
        overlay.innerHTML = "<div class='overlay-content'>Billy beer  was first made in the heart of United states of America in 1977, by the Falls city Brewing Company.   </div>";
  

        overlay.addEventListener("click", function(event) {
          if (event.target === overlay) {
            overlay.style.display = "none";
          }
        });
      });
    });
  });