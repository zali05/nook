const menuData = {
  slow: {
    title: "Slow Bar Brews",
    items: [
      { name: "V-60", price: "$3.50" },
      { name: "Aeropress", price: "$3.75" },
      { name: "Cold Brew", price: "$4.00" }
    ],
    image: "images/slowbar.png"
  },
  Espresso: {
    title: "Espresso",
    items: [
      { name: "Espresso", price: "$3.00" },
      { name: "Macchiato", price: "$4.25" },
      { name: "Piccolo", price: "$4.50" },
      { name: "Cortado", price: "$4.50" },
      { name: "Flat White", price: "$4.75" },
      { name: "Cappuccino", price: "$4.75" },
      { name: "Latte", price: "$5.00" }
    ],
    image: "images/espresso.png"
  },
  creations: {
    title: "Espresso Creations",
    items: [
      { name: "Spanish Latte", price: "$5.25" },
      { name: "Butterscotch Latte", price: "$5.50" },
      { name: "Salted Caramel Latte", price: "$5.50" },
      { name: "Praline Latte", price: "$5.75" },
      { name: "Pistachio Latte", price: "$5.75" }
    ],
    image: "https://via.placeholder.com/150x150?text=Creations"
  },
  Frappe: {
    title: "Frappe",
    items: [
      { name: "Mocha Frappe", price: "$5.50" },
      { name: "Lotus Frappe", price: "$5.75" },
      { name: "Salted Caramel Frappe", price: "$5.75" },
      { name: "Coconut Frappe", price: "$5.50" }
    ],
    image: "https://via.placeholder.com/150x150?text=Frappe"
  },
  Iced: {
    title: "Iced Tea",
    items: [
      { name: "Peach Iced Tea", price: "$3.00" },
      { name: "Passion Fruit Iced Tea", price: "$3.00" }
    ],
    image: "https://via.placeholder.com/150x150?text=Iced+Tea"
  },
  Mojitos: {
    title: "Mojitos",
    items: [
      { name: "Lychee Mojito", price: "$4.50" },
      { name: "Strawberry Mojito", price: "$4.50" },
      { name: "Green Apple Mojito", price: "$4.50" }
    ],
    image: "https://via.placeholder.com/150x150?text=Mojitos"
  }
};

const videos = [
  "videos/book-vid.mp4"
];

function renderMenu() {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  Object.values(menuData).forEach((category, index) => {
    const column = document.createElement("div");
    column.className = "menu-column";

    const title = document.createElement("h2");
    title.textContent = category.title;
    column.appendChild(title);

    category.items.forEach((item, i) => {
      if (i === 2 && category.image) {
        const img = document.createElement("img");
        img.src = category.image;
        img.alt = "Category Image";
        img.className = "menu-img";
        column.appendChild(img);
      }

      const div = document.createElement("div");
      div.className = "menu-item";
      div.textContent = `${item.name} – ${item.price}`;
      column.appendChild(div);
    });

    container.appendChild(column);
  });
}

let inactivityTimer;
const screensaver = document.getElementById("screensaver");
const screensaverVideo = document.getElementById("screensaver-video");
const inactivityTime = 1 * 10 * 1000;

function startScreensaver() {
  const video = videos[Math.floor(Math.random() * videos.length)];
  screensaverVideo.src = video;
  screensaver.style.display = "block";
  screensaverVideo.play().catch(console.error);
}

function stopScreensaver() {
  screensaver.style.display = "none";
  screensaverVideo.pause();
  resetInactivityTimer();
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(startScreensaver, inactivityTime);
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  resetInactivityTimer();

  ["click", "mousemove", "keypress", "touchstart", "scroll"].forEach(event => {
    document.addEventListener(event, () => {
      if (screensaver.style.display === "block") {
        stopScreensaver();
      } else {
        resetInactivityTimer();
      }
    });
  });

  screensaver.addEventListener("click", stopScreensaver);
});
