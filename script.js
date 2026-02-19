function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}



// --- Variables ---
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
        trails[0].style.transform = 'translate(-50%, -50%) scale(2.2)';
        trails[0].style.background = 'rgba(255, 240, 200, 0.95)';
      });
      el.addEventListener('mouseleave', () => {
        trails[0].style.transform = 'translate(-50%, -50%) scale(1)';
        trails[0].style.background = 'rgba(200, 220, 255, 0.9)';
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






