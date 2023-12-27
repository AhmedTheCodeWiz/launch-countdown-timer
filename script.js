function updateCountdown() {
    const eventDate = new Date('2024-06-25T00:00:00Z'); // Set your target date and time here
    const currentDate = new Date();

    const totalSeconds = Math.floor((eventDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    
    
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);

    var topDays = document.getElementById('top-days')
    var topHours = document.getElementById('top-hours')
    var topMinutes = document.getElementById('top-minutes')
    var topSecounds = document.getElementById('top-seconds')
    
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Check if the seconds value changes before updating the element
    if (parseInt(secondsElement.textContent) !== seconds) {
        secondsElement.textContent = seconds;        

        // Trigger the animation by toggling a class
        topSecounds.classList.remove('flip-animation'); // Reset animation
        void topSecounds.offsetWidth; // Trigger reflow to restart animation
        topSecounds.classList.add('flip-animation');

        if (parseInt(secondsElement.textContent) == 0){
            topMinutes.classList.remove('flip-animation');
            void topMinutes.offsetWidth;
            topMinutes.classList.add('flip-animation')
            
            if (minutesElement.textContent == '00'){
                topHours.classList.remove('flip-animation');
                void topHours.offsetWidth;
                topHours.classList.add('flip-animation')
                
                if (hoursElement.textContent == '00'){
                    topDays.classList.remove('flip-animation');
                    void topDays.offsetWidth;
                    topDays.classList.add('flip-animation')
                } 
            } 
        } 
    }
}

// Function to add leading zero if needed
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

