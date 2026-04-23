let timerInt;

function startCall(name) {
    document.getElementById('main-screen').classList.remove('active');
    document.getElementById('call-screen').classList.add('active');
    document.getElementById('call-name').innerText = name;
    
    // Запуск таймера
    let sec = 0;
    const timerDiv = document.getElementById('timer');
    timerDiv.innerText = "00:00";
    
    clearInterval(timerInt);
    timerInt = setInterval(() => {
        sec++;
        let m = Math.floor(sec / 60).toString().padStart(2, '0');
        let s = (sec % 60).toString().padStart(2, '0');
        timerDiv.innerText = `${m}:${s}`;
    }, 1000);
}

function endCall() {
    document.getElementById('call-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('active');
    clearInterval(timerInt);
}