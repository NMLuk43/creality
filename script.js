document.addEventListener('DOMContentLoaded', function () {
    const testimonialContainer = document.querySelector('.social-proof__cards');
    const testimonialCards = document.querySelectorAll('.social-proof__card');

    let currentIndex = 0;

    function updateContainer() {
        const cardWidth = testimonialCards[0].offsetWidth;
        const translateValue = -currentIndex * cardWidth;
    testimonialContainer.style.transform = `translateX(${translateValue}px)`;    
}


function setActiveCard(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Arrowright') {
        currentIndex = Math.min(currentIndex + 1, testimonialCards.length - 1);
        setActiveCard(currentIndex);
        updateContainer();
    } else if (event.key === 'ArrowLeft') {
        currentIndex = Math.max(currentIndex - 1, 0);
        setActiveCard(currentIndex);
        updateContainer();
    }

});

});