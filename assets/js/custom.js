const toggler = document.querySelector('.navbar-toggler');
const navEl = document.querySelector('.navbar');
var clickCount = 0;
var width = window.innerWidth;
toggler.addEventListener("click", function() {
	clickCount++;
	if (clickCount%2 != 0) {
		navEl.classList.add('custom-bg');
	}
	else {
		navEl.classList.remove('custom-bg');
	}
});
console.log(width);
/*window.addEventListener('scroll', function() {
	if (window.innerWidth > 500 && window.scrollY >= 56) {
		navEl.classList.add('navbar-scrolled');
	}
	else if (window.innerWidth > 500 && window.scrollY < 56){
		navEl.classList.remove('navbar-scrolled');
	}
	else if (window.innerWidth <= 500 && window.scrollY >= 2) {
		navEl.classList.add('navbar-scrolled');
	}
	else if (window.innerWidth <= 500 && window.scrollY < 2) {
		navEl.classList.remove('navbar-scrolled');
	}
});*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const subtitle = entry.target.querySelector('.subtitle');

    if (entry.isIntersecting) {
      subtitle.classList.add('subtitle-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    subtitle.classList.remove('subtitle-animation');
  });
});

observer.observe(document.querySelector('.header-text'));

const aboutobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const aboutTitle = entry.target.querySelector('.about-title');

    if (entry.isIntersecting) {
      aboutTitle.classList.add('about-title-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    aboutTitle.classList.remove('about-title-animation');
  });
});

aboutobserver.observe(document.querySelector('.about-section-header'));

/*VanillaTilt.init(document.querySelector(".service-img"), {
	max: 15,
	speed: 400
});*/