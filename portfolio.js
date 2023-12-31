var currentSlideIndex = 0;

function openSlider(projectIndex) {
    var slider = document.getElementById('slider');
    slider.style.display = 'block';
    populateSlider(projectIndex);

    var prevButton = document.getElementById('slider-prev');
    var nextButton = document.getElementById('slider-next');

    prevButton.addEventListener('click', function () {
        showSlide(currentSlideIndex - 1);
    });
    nextButton.addEventListener('click', function () {
        showSlide(currentSlideIndex + 1);
    });
}

function closeSlider() {
    var slider = document.getElementById('slider');
    slider.style.display = 'none';
}

function populateSlider(projectId) {
    var imageWrapper = document.querySelector('.image-wrapper');
    imageWrapper.innerHTML = '';


    var slideImages = {
        1: ['./assets/project1_slide1.png', './assets/project1_slide2.png', './assets/project1_slide3.png', './assets/project1_slide4.png', './assets/project1_slide5.png', './assets/project1_slide6.png', './assets/project1_slide7.png'],
        2: ['./assets/project2_slide1.png', './assets/project2_slide2.png', './assets/project2_slide3.png', './assets/project2_slide4.png', './assets/project2_slide5.jpeg', './assets/project2_slide6.png'],
        3: ['./assets/project3_slide1.png', './assets/project3_slide2.png', './assets/project3_slide3.png', './assets/project3_slide4.png', './assets/project3_slide5.png', './assets/project3_slide6.png', './assets/project3_slide7.png', './assets/project3_slide8.png', './assets/project3_slide9.png', './assets/project3_slide10.png', './assets/project3_slide11.png'],
        4: ['./assets/project4_slide1.png', './assets/project4_slide2.png', './assets/project4_slide3.png', './assets/project4_slide4.png', './assets/project4_slide5.png', './assets/project4_slide6.png', './assets/project4_slide7.png', './assets/project4_slide8.png', './assets/project4_slide9.png', './assets/project4_slide10.png', './assets/project4_slide11.png', './assets/project4_slide12.png', './assets/project4_slide13.png', './assets/project4_slide14.png', './assets/project4_slide15.png', './assets/project4_slide16.png', './assets/project4_slide17.png', './assets/project4_slide18.png', './assets/project4_slide19.png', './assets/project4_slide20.png', './assets/project4_slide21.png', './assets/project4_slide22.png', './assets/project4_slide23.png', './assets/project4_slide24.png', './assets/project4_slide25.png'],
        5: ['./assets/project5_slide1.png', './assets/project5_slide2.png', './assets/project5_slide3.png', './assets/project5_slide4.png', './assets/project5_slide5.png', './assets/project5_slide6.png', './assets/project5_slide7.png', './assets/project5_slide8.png', './assets/project5_slide9.png'],
        6: ['./assets/project6_slide1.png', './assets/project6_slide2.png', './assets/project6_slide3.png', './assets/project6_slide4.png', './assets/project6_slide5.png', './assets/project6_slide6.png', './assets/project6_slide7.png', './assets/project6_slide8.png', './assets/project6_slide9.png', './assets/project6_slide10.png', './assets/project6_slide11.png', './assets/project6_slide12.png', './assets/project6_slide13.png', './assets/project6_slide14.png', './assets/project6_slide15.png'],
        7: ['./assets/project7_slide1.png', './assets/project7_slide2.png', './assets/project7_slide3.png', './assets/project7_slide4.png', './assets/project7_slide5.png'],
        8: ['./assets/project8_slide1.png', './assets/project8_slide2.png', './assets/project8_slide3.png', './assets/project8_slide4.png', './assets/project8_slide5.png', './assets/project8_slide6.png', './assets/project8_slide7.png', './assets/project8_slide8.png', './assets/project8_slide9.png', './assets/project8_slide10.png'],
    };

    var slides = slideImages[projectId];
    slides.forEach(function (slide) {
        var img = document.createElement('img');
        img.src = slide;
        img.classList.add('slide');
        imageWrapper.appendChild(img);
    });

    showSlide(0);
}

function showSlide(n) {
    var slides = document.getElementsByClassName('slide');
    if (n >= slides.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = n;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlideIndex].style.display = 'block';
}