function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}



// --- Variables ---
const cursor = document.getElementById('custom-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

const lag = 0.12;              // lag du curseur principal (ease-out naturel)
const trailCount = 6;          // nombre de traînées (4–8 est subtil)
const trailDelay = 40;         // délai entre chaque traînée (en ms, plus = trail plus long)
const trails = [];             // tableau pour stocker les éléments trail

// --- Création des trails une seule fois ---
for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  document.body.appendChild(trail);
  trails.push(trail);
}

// --- Suivi de la souris ---
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// --- Animation loop ---
function animate() {
  // Curseur principal (avec lag)
  cursorX += (mouseX - cursorX) * lag;
  cursorY += (mouseY - cursorY) * lag;
  cursor.style.transform = `translate(${cursorX - 6}px, ${cursorY - 6}px)`;

  // Trails : décalage progressif + fade
  trails.forEach((trail, index) => {
    const delayFactor = (index + 1) * trailDelay;
    // On simule un décalage temporel en utilisant une interpolation plus lente
    const delayedX = mouseX + (cursorX - mouseX) * (index * 0.15);
    const delayedY = mouseY + (cursorY - mouseY) * (index * 0.15);

    trail.style.transform = `translate(${delayedX - (trail.offsetWidth / 2)}px, ${delayedY - (trail.offsetHeight / 2)}px)`;
    
    // Opacité décroissante + fade out naturel
    trail.style.opacity = (trailCount - index) / (trailCount * 2.5); // ex: 0.4 → 0.05
  });

  requestAnimationFrame(animate);
}

animate();






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





