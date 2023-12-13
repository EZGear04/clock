
        function updateClock() {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();
            var timeString = hours + ':' + minutes + ':' + seconds;
            document.getElementById('clock').innerHTML = timeString;
        }
        
        setInterval(updateClock, 1000);


        