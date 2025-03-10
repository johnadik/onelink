async function fetchLinks() {
  const url = 'https://bold-queen-621b.uncle.workers.dev/'; // Ganti dengan URL Cloudflare Worker anda
  const linksContainer = document.getElementById("links-container");

  if (!linksContainer) {
    console.error("Links container not found!");
    return;
  }

  try {
    console.log("Fetching data from:", url);
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });

    console.log("Response status:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
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
