async function fetchLinks() {
  const url =
    "https://script.google.com/macros/s/AKfycbwwm_BxA-Q7Bi7cBp_-gPLhhsYliGFpiG5eu0RIDBt9qruLkXWs7nogt7IzhYxwux-sww/exec"; // Ganti dengan URL Web App anda
  const linksContainer = document.getElementById("links-container");

  if (!linksContainer) {
    console.error("Links container not found!");
    return;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors", // Pastikan mod CORS diaktifkan
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    linksContainer.innerHTML = "";

    if (data.values && Array.isArray(data.values)) {
      data.values.forEach((row) => {
        const name = row[0];
        const link = row[1];
        if (name && link) {
          const linkElement = document.createElement("a");
          linkElement.href = link;
          linkElement.className = "link";
          linkElement.innerHTML = `<i class="fas fa-link"></i> ${name}`;
          linkElement.target = "_blank";
          linksContainer.appendChild(linkElement);
        }
      });
    } else {
      linksContainer.innerHTML = "<p>No data available.</p>";
    }
  } catch (error) {
    console.error("Error fetching links:", error);
    linksContainer.innerHTML = `<p>Error loading links: ${error.message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", fetchLinks);
