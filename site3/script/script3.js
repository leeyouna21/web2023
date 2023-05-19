window.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.sliderWrap .slider');
    var currentSlide = 0;
    var interval = setInterval(changeSlide, 3000); // 이미지 변경 간격 (3초)

    function changeSlide() {
        sliders[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % sliders.length;
        sliders[currentSlide].classList.add('active');
    }
});