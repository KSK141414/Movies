document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const movies = document.querySelectorAll(".movie");
  
  movies.forEach(movie => {
    const title = movie.querySelector("h2").textContent.toLowerCase();
    movie.style.display = title.includes(query) ? "block" : "none";
  });
});
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}