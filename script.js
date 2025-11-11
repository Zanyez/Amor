function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    const size = Math.random() * 20 + 20;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 0.5;
    const left = Math.random() * 100;
    
    heart.style.setProperty('--size', size + 'px');
    heart.style.setProperty('--dur', duration + 's');
    heart.style.left = left + '%';
    heart.style.animationDelay = delay + 's';
    
    document.querySelector('.hearts-layer').appendChild(heart);
    
    setTimeout(() => heart.remove(), (duration + delay) * 1000);
}

setInterval(createHeart, 300);
