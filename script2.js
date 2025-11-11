function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  
  const randomX = Math.random() * 100;
  const randomScale = Math.random() * 0.5 + 0.5;
  const randomDuration = Math.random() * 4 + 5;
  
  heart.style.setProperty('--x', randomX + '%');
  heart.style.setProperty('--s', randomScale);
  heart.style.setProperty('--t', randomDuration + 's');
  
  document.querySelector('.hearts').appendChild(heart);
  
  setTimeout(() => heart.remove(), randomDuration * 1000);
}

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti-piece';
  
  const randomLeft = Math.random() * 100;
  const randomDuration = Math.random() * 2 + 1;
  const randomDelay = Math.random() * 0.3;
  
  confetti.style.left = randomLeft + '%';
  confetti.style.top = '-10px';
  confetti.style.animationDuration = randomDuration + 's';
  confetti.style.animationDelay = randomDelay + 's';
  
  document.querySelector('.confetti').appendChild(confetti);
  
  setTimeout(() => confetti.remove(), (randomDuration + randomDelay) * 1000);
}

// Criar corações flutuantes
setInterval(createFloatingHeart, 500);

// Criar confete quando clicar
document.addEventListener('click', (e) => {
  for(let i = 0; i < 5; i++) {
    setTimeout(() => createConfetti(), i * 50);
  }
});
