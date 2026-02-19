function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}



// --- Variables ---

const trailCount = 5;
    const trails = [];

    // Création des éléments trail
   for (let i = 0; i < trailCount; i++) {
  const el = document.createElement('div');
  el.className = 'trail';
  el.style.width  = `${6 + i * 4}px`;
  el.style.height = el.style.width;
  
  // On utilise la variable CSS --accent-color
  el.style.background = `rgba(var(--accent-rgb), ${0.9 - i * 0.18})`;
  
  el.style.opacity = 0.9 - i * 0.18;
  
  // Ombre assortie (légèrement plus douce)
  el.style.boxShadow = `0 0 ${10 + i * 6}px rgba(var(--accent-rgb), ${0.5 - i * 0.12})`;
  
  document.body.appendChild(el);
  trails.push(el);
}

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    let positions = Array(trailCount).fill().map(() => ({x: 0, y: 0}));

 function animate() {
      // Le premier suit directement
      positions[0].x += (mouseX - positions[0].x) * 0.45;
      positions[0].y += (mouseY - positions[0].y) * 0.45;

      // Les suivants suivent le précédent avec délai croissant
      for (let i = 1; i < trailCount; i++) {
        const prev = positions[i - 1];
        positions[i].x += (prev.x - positions[i].x) * (0.22 - i * 0.03);
        positions[i].y += (prev.y - positions[i].y) * (0.22 - i * 0.03);
      }

      // Applique les positions
      trails.forEach((el, i) => {
        el.style.left = positions[i].x + 'px';
        el.style.top  = positions[i].y + 'px';
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Optionnel : grossit légèrement le premier cercle au hover
   document.querySelectorAll('a, button, .link').forEach(el => {
  el.addEventListener('mouseenter', () => {
    trails[0].style.transform  = 'translate(-50%, -50%) scale(2.2)';
    trails[0].style.background = 'var(--accent-color)';           // ← version pleine et vive
    // Alternative plus douce si tu préfères :
    // trails[0].style.background = 'rgba(var(--accent-rgb), 0.95)';
  });
  
  el.addEventListener('mouseleave', () => {
    trails[0].style.transform  = 'translate(-50%, -50%) scale(1)';
    trails[0].style.background = `rgba(var(--accent-rgb), 0.9)`;  // retour à l’opacité normale
  });
});






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









