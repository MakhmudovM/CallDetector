let interval;

function startCall(name, initials) {
    document.getElementById('call-name').innerText = name;
    document.getElementById('call-avatar').innerText = initials;
    document.getElementById('main-screen').classList.remove('active');
    document.getElementById('call-screen').classList.add('active');
    
    let sec = 0;
    const timer = document.getElementById('timer');
    timer.innerText = "00:00";
    clearInterval(interval);
    interval = setInterval(() => {
        sec++;
        let m = Math.floor(sec / 60).toString().padStart(2, '0');
        let s = (sec % 60).toString().padStart(2, '0');
        timer.innerText = `${m}:${s}`;
    }, 1000);
}

function endCall() {
    document.getElementById('call-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('active');
    clearInterval(interval);
}