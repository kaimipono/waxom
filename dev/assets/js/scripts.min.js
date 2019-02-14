new WOW().init();

// Header
	var header = document.getElementsByClassName('top-line')[0];
	header.classList.remove('dark-header');
	window.addEventListener('scroll', function() {
		if (this.scrollY > 150) {
			header.classList.add('dark-header');;
		} else {
			header.classList.remove('dark-header');;
		}
	});

// Navigation

	function expandMenu() {
		var navMenu = document.getElementsByClassName('top-line__navbar')[0];
		var logo = document.querySelectorAll('.header-content .logo')[0];
		if (navMenu.className === 'top-line__navbar') {
			navMenu.className += ' expanded';
			logo.style.display = 'none';
		} else {
			navMenu.className = 'top-line__navbar';
			logo.style.display = 'flex';
		}
	}

	

// Slider

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName('slider__slide');
		var dots = document.getElementsByClassName('slider__dot');
		if (n > slides.length) { slideIndex = 1 }
		if (n < 1) { slideIndex = slides.length }
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' active', '');
		}
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].className += ' active';
	}

// Slider posts
	function createDots() {
		let posts = document.querySelectorAll('.post-slider');

		posts.forEach(post => {
			let postSliderSlides = post.querySelectorAll('.post-slider__slide');
			if (postSliderSlides.length > 1) {
				let resultHTML = '';
				for (let i = 0; i < postSliderSlides.length; i++) {
					resultHTML += `<span class="post-slider__dot" data-number="${i+1}"></span>`;
				}
				post.querySelector('.post-slider__dots').innerHTML = resultHTML;
			}
		});
	}

	createDots();


	let postsGallery = document.querySelector('.posts-gallery');
	postsGallery.addEventListener('click', (evt) => {
		let target = evt.target;
		if (target.toString().indexOf('Span') > -1) {
			var n = target.getAttribute('data-number');
			var j;
			var postSlides = target.parentNode.parentNode.querySelectorAll('.post-slider__slide');
			var postDots = target.parentNode.parentNode.getElementsByClassName('post-slider__dot');
			for (j = 0; j < postSlides.length; j++) {
				postSlides[j].style.display = 'none';
			}
			for (j = 0; j < postDots.length; j++) {
				postDots[j].className = postDots[j].className.replace(' active', '');
			}
			postSlides[n - 1].style.display = 'block';
			postDots[n - 1].className += ' active';
		}
	});
	