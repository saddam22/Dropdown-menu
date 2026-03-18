// Elements
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownIcon = document.getElementById('dropdownIcon');

// Toggle main dropdown
dropdownBtn.addEventListener('click', () => {
  const isOpen = !dropdownMenu.classList.contains('hidden');
  dropdownMenu.classList.toggle('hidden', isOpen);
  dropdownMenu.classList.toggle('scale-95', isOpen);
  dropdownMenu.classList.toggle('opacity-0', isOpen);
  dropdownMenu.classList.toggle('scale-100', !isOpen);
  dropdownMenu.classList.toggle('opacity-100', !isOpen);
  dropdownIcon.classList.toggle('rotate-180', !isOpen);
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
    dropdownMenu.classList.add('scale-95');
    dropdownMenu.classList.add('opacity-0');
    dropdownMenu.classList.remove('scale-100');
    dropdownMenu.classList.remove('opacity-100');
    dropdownIcon.classList.remove('rotate-180');
  }
});

// Nested Menu Toggle
document.querySelectorAll('.nested-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const menu = btn.nextElementSibling;
    const icon = btn.querySelector('.nested-icon');
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    icon.classList.toggle('rotate-90', !isOpen);
  });
});

// Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => document.documentElement.classList.toggle('dark'));

// Keyboard Navigation (optional)
dropdownBtn.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    const firstItem = dropdownMenu.querySelector('a, button');
    firstItem.focus();
  }
});