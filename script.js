function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}



const cursor = document.getElementById('custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const lag = 0.1; // Facteur de lag (plus petit = plus de lag, teste 0.05-0.2)

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * lag;
  cursorY += (mouseY - cursorY) * lag;
  cursor.style.transform = `translate(${cursorX - 5}px, ${cursorY - 5}px)`; // Centre le cercle
  requestAnimationFrame(animateCursor);
}

animateCursor();




const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Fonction utilitaire pour générer une couleur aléatoire
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




