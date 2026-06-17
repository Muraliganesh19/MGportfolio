// Transition Curtain
const buttons = document.querySelectorAll('.button');
const curtain = document.querySelector('.page-transition');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const target = this.getAttribute('href');

            // Reset classes
        curtain.classList.remove('to-left', 'to-right');

            // Detect which button
        if (target.includes('cv')) {
            curtain.classList.add('to-left');
        } else {
            curtain.classList.add('to-right');
        }

        // Start animation
        requestAnimationFrame(() => {
            curtain.classList.add('active');
        });

            setTimeout(() => {
            window.location.href = target;
        }, 850);
    });
});
