const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () =>{
	dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
window.addEventListener("click", () =>{
	if(!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)){
		dropdownMenu.classList.add('hidden');
	}
}); 