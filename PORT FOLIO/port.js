document.addEventListener("DOMContentLoaded", () => {
  const popup = document.createElement("div");
  popup.className = "popup";
  document.body.appendChild(popup);

  document.querySelectorAll("section").forEach(sec => {
    sec.addEventListener("click", () => {
      popup.innerHTML = `<h3>${sec.querySelector("h2").innerText}</h3>${sec.innerHTML}<button>Close</button>`;
      popup.style.display = "block";
      popup.querySelector("button").onclick = () => popup.style.display = "none";
    });
  });
});
