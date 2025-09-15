const $testimonials = document.querySelectorAll("article");
let index = 0;

$testimonials.forEach($testimonial => {
    const $prevBtn = $testimonial.querySelector(".prev-Btn");
    const $nextBtn = $testimonial.querySelector(".next-Btn");
    $prevBtn.addEventListener("click", showSlide);
    $nextBtn.addEventListener("click", showSlide);
});

function showSlide() {
    $testimonials[index].classList.toggle("hidden");

    if (index == 0) {
        index = 1;
    } else {
        index = 0;
    }


    $testimonials[index].classList.toggle("hidden");

}




