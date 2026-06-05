
//event listener on startup
document.addEventListener('DOMContentLoaded', () => {
    startCountdowns();

});
//Countdown function
function startCountdowns() {
    const timers = document.querySelectorAll('.timer');

    timers.forEach(timer => {
        let timeLeft = parseInt(timer.getAttribute('data-time'));

        const interval = setInterval(() => {
            if (timeLeft <= 0) {
                timer.textContent = 'Auction Ended';
                clearInterval(interval);
                return;
            }

            timeLeft--;

            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor((timeLeft % 86400) / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        }, 1000);
    });
}

// watchlist
let watchlist = [];

function addToWatchlist(button) {
    const card = button.closest('.card');
    const carName = card.getAttribute('data-car');

    const alreadyAdded = watchlist.find(item => item.name === carName);

    if (alreadyAdded) {
        button.textContent = '♡ Watch';
        watchlist = watchlist.filter(item => item.name !== carName);
    } else {
        button.textContent = '♥ Watching';
        watchlist.push({ name: carName});
    }

    document.getElementById('watchlistCount').textContent = watchlist.length;
}

//subscribe button
// SUBSCRIBE
document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.querySelector('.subscribeBtn');
    
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const emailInput = document.querySelector('.eventUpdates');
            const email = emailInput.value.trim();

            if (email === '') {
                alert('Please enter an email address.');
                return;
            }

            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }

            alert(`You're subscribed! We'll send updates to ${email}.`);
            emailInput.value = '';
        });
    }
});