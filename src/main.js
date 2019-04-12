var slides = document.getElementsByClassName('slide');
var cur_index = 0;

function changeSlides() {
    for (var a = 0; a < slides.length; a++) {
        slides[a].classList.remove("fade");
    }

    slides[cur_index].classList.add('fade');
    cur_index++;
    if (cur_index == slides.length) {
        cur_index = 0;
    }
}

function timeSlides() {
    setTimeout(() => {
        changeSlides();
        timeSlides();
    }, 3000);
}
timeSlides();