// scrolldown menu

const scrollThreshold = 200;
window.addEventListener("scroll", () =>{
    const navbar = document.querySelector("#header");

    if(window.scrollY > scrollThreshold){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
})

// mobile menu 

const hamburger = document.querySelector("#hamburger-icon");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener('click', () =>{
   navLinks.classList.toggle('hide');
})

// banner slider 
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let currentSlide = 0;

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('#dots span');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}


// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Initialize first slide and dot
showSlide(currentSlide);


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