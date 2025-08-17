// Add gradient + grid background dynamically
document.body.style.backgroundImage = `
  linear-gradient(to right, rgba(229,231,235,0.15) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(229,231,235,0.15) 1px, transparent 1px),
  radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
  radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
`;

document.body.style.backgroundSize =
  "48px 48px, 48px 48px, 100% 100%, 100% 100%";
document.body.style.backgroundColor = "#121212"; // dark base
