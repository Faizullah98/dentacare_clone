// scrolldown menu

const scrollTop = 200;
window.addEventListener("scroll", () =>{
    const navbar = document.querySelector("#header");

    if(window.scrollY > scrollTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
})

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");

  const slides = document.querySelectorAll('.slide');  // Grab all slides
  const dotsContainer = document.getElementById('dots');  // Grab the dots container
  let currentSlide = 0;

  // Debugging: Log number of slides and the dots container
  console.log("Slides found: ", slides.length);
  console.log("Dots container: ", dotsContainer);

  // Check if slides and dots container are found
  if (!slides.length || !dotsContainer) {
    console.error('Slides or dots container not found');
    return;
  }

  // Create dots for each slide
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');  // Add a 'dot' class to each span for styling
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('#dots span');  // Get all dot elements

  // Debugging: Log the dots count
  console.log("Dots found: ", dots.length);

  // Function to show the current slide
  function showSlide(index) {
    if (!slides[index] || !dots[index]) return; // Ensure the slide and dot exist

    // Remove 'active' class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add 'active' class to the current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  // Initialize the first slide and dot
  showSlide(currentSlide);
});

// Tabs about us 
function openTab(evt, tabId) {
  const tablinks = document.querySelectorAll('.tablink');
  const contents = document.querySelectorAll('.tab-content');

  tablinks.forEach(btn => btn.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  evt.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}












// Testimonials 
const tSlides = document.querySelectorAll(".testimonial-slide");
const tDotsContainer = document.querySelector(".testimonial-dots");
const tNext = document.querySelector(".testimonial-next");
const tPrev = document.querySelector(".testimonial-prev");
let tCurrent = 0;

// Create dots
tSlides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => goToSlide(i));
  tDotsContainer.appendChild(dot);
});

const tDots = tDotsContainer.querySelectorAll("span");

function updateTestimonialSlider() {
  tSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === tCurrent);
    tDots[i].classList.toggle("active-dot", i === tCurrent);
  });
}

function goToSlide(index) {
  tCurrent = index;
  updateTestimonialSlider();
}

tNext.addEventListener("click", () => {
  tCurrent = (tCurrent + 1) % tSlides.length;
  updateTestimonialSlider();
});

tPrev.addEventListener("click", () => {
  tCurrent = (tCurrent - 1 + tSlides.length) % tSlides.length;
  updateTestimonialSlider();
});

updateTestimonialSlider(); // initial call

// about us tabs 

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab
    document.getElementById(cityName).style.display = "block";

    // Add "active" class to the clicked tab link
    if (evt) {
      evt.currentTarget.className += " active";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Call openCity directly with required parameters
    openCity(null, 'what_we_do');

    // Manually add "active" class to default tab button
    document.getElementById("defaultOpen").className += " active";
  });