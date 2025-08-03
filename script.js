document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.next-button');
    const pageContainer = document.querySelector('.page-container');

    if (nextButton) {
        nextButton.addEventListener('click', (event) => {
            const nextPage = event.target.getAttribute('data-next-page');

            pageContainer.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = nextPage;
            }, 1000); // 1000ms = 1s, which matches the CSS transition
        });
    }
});