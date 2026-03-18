const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () =>{
	dropdownMenu.classList.toggle('hidden');
	dropdownMenu.classList.toggle('scale-95');
	dropdownMenu.classList.toggle('opacity-0');
	dropdownMenu.classList.toggle('scale-100');
	dropdownMenu.classList.toggle('opacity-100');
});

// Close dropdown when clicking outside
window.addEventListener("click", () =>{
	if(!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)){
		dropdownMenu.classList.add('hidden');
		dropdownMenu.classList.add('scale-95');
		dropdownMenu.classList.add('opacity-0');
		dropdownMenu.classList.remove('scale-100');
		dropdownMenu.classList.remove('opacity-100');
	}
}); 

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});