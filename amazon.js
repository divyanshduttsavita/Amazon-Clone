document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`${this.parentElement.querySelector('h2').textContent} added to cart!`);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let index = 0;

    function nextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Change image every 3 seconds
});

