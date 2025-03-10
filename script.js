async function fetchLinks() {
  const url =
    "https://script.google.com/macros/s/AKfycbwwm_BxA-Q7Bi7cBp_-gPLhhsYliGFpiG5eu0RIDBt9qruLkXWs7nogt7IzhYxwux-sww/exec"; // Ganti dengan URL Web App anda
  try {
    const response = await fetch(url);
    const data = await response.json();
    const linksContainer = document.getElementById("links-container");

    linksContainer.innerHTML = "";

    data.values.forEach((row) => {
      const name = row[0];
      const link = row[1];
      const linkElement = document.createElement("a");
      linkElement.href = link;
      linkElement.className = "link";
      linkElement.innerHTML = `<i class="fas fa-link"></i> ${name}`;
      linkElement.target = "_blank";
      linksContainer.appendChild(linkElement);
    });
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchLinks);
