// Menu data
const menuData = {
    slow: {
        title: "Slow Bar Brews",
        items: [
            {
                name: "V-60",
                price: "$3.50",
                description: "Pour-over coffee brewed with a V-60 dripper, highlighting bright acidity and clarity.",
                tags: ["Bright", "Smooth"]
            },
            {
                name: "Aeropress",
                price: "$3.75",
                description: "Immersion-style coffee brewed under gentle pressure for a clean, full-bodied cup.",
                tags: ["Bold", "Clean"]
            },
            {
                name: "Cold Brew",
                price: "$4.00",
                description: "Slow-steeped coffee in cold water for 12+ hours, yielding a smooth, low-acid refreshment.",
                tags: ["Smooth", "Cold"]
            }
        ]
    },
    Espresso: {
        title: "Espresso Classics",
        items: [
            {
                name: "Espresso",
                price: "$3.00",
                description: "A concentrated shot of coffee with rich crema and full-bodied flavor.",
                tags: ["Strong", "Traditional"]
            },
            {
                name: "Macchiato",
                price: "$4.25",
                description: "Espresso 'stained' with a dollop of milk foam for a balanced, bold sip.",
                tags: ["Strong", "Classic"]
            },
            {
                name: "Piccolo",
                price: "$4.50",
                description: "A petite latte: ristretto shot topped with steamed milk in a small glass.",
                tags: ["Smooth", "Balanced"]
            },
            {
                name: "Cortado",
                price: "$4.50",
                description: "Equal parts espresso and warm milk, cutting acidity while retaining richness.",
                tags: ["Balanced", "Strong"]
            },
            {
                name: "Flat White",
                price: "$4.75",
                description: "Smooth microfoam poured over a double espresso for a velvety mouthfeel.",
                tags: ["Creamy", "Strong"]
            },
            {
                name: "Cappuccino",
                price: "$4.75",
                description: "Equal parts espresso, steamed milk, and foam—light, airy, and classic.",
                tags: ["Creamy", "Classic"]
            },
            {
                name: "Latte",
                price: "$5.00",
                description: "Espresso with steamed milk and a thin layer of foam for a mellow finish.",
                tags: ["Creamy", "Mild"]
            }
        ]
    },
    creations: {
        title: "Espresso Creations",
        items: [
            {
                name: "Spanish Latte",
                price: "$5.25",
                description: "Latte sweetened with condensed milk for a richer, dessert-like coffee drink.",
                tags: ["Sweet", "Rich"]
            },
            {
                name: "Butterscotch Latte",
                price: "$5.50",
                description: "Espresso blended with creamy butterscotch syrup and steamed milk.",
                tags: ["Sweet", "Buttery"]
            },
            {
                name: "Salted Caramel Latte",
                price: "$5.50",
                description: "Latte flavored with salted caramel syrup and topped with caramel drizzle.",
                tags: ["Sweet", "Salted"]
            },
            {
                name: "Praline Latte",
                price: "$5.75",
                description: "Espresso with praline nut syrup and steamed milk, garnished with crushed nuts.",
                tags: ["Nutty", "Decadent"]
            },
            {
                name: "Pistachio Latte",
                price: "$5.75",
                description: "Latte infused with pistachio paste for a subtly sweet, nutty flavor.",
                tags: ["Nutty", "Smooth"]
            }
        ]
    },
    Frappe: {
        title: "Frappe",
        items: [
            {
                name: "Mocha Frappe",
                price: "$5.50",
                description: "Blended coffee with chocolate syrup, milk, and ice, topped with whipped cream.",
                tags: ["Chocolate", "Creamy"]
            },
            {
                name: "Lotus Frappe",
                price: "$5.75",
                description: "Creamy blend of coffee, Lotus Biscoff spread, and ice, garnished with cookie crumbs.",
                tags: ["Spiced", "Dessert"]
            },
            {
                name: "Salted Caramel Frappe",
                price: "$5.75",
                description: "Iced coffee blended with salted caramel syrup and milk, finished with sea salt.",
                tags: ["Sweet", "Salted"]
            },
            {
                name: "Coconut Frappe",
                price: "$5.50",
                description: "Tropical coconut cream and coffee blended with ice for a rich, island-inspired treat.",
                tags: ["Tropical", "Creamy"]
            }
        ]
    },
    Iced: {
        title: "Iced Tea",
        items: [
            {
                name: "Peach Iced Tea",
                price: "$3.00",
                description: "Freshly brewed black tea infused with ripe peach syrup over ice.",
                tags: ["Fruity", "Iced"]
            },
            {
                name: "Passion Fruit Iced Tea",
                price: "$3.00",
                description: "Tropical passion fruit blended into iced black tea for a tangy, refreshing twist.",
                tags: ["Tropical", "Iced"]
            }
        ]
    },
    Mojitos: {
        title: "Mojitos",
        items: [
            {
                name: "Lychee Mojito",
                price: "$4.50",
                description: "Lychee syrup, fresh mint, lime, and soda water over ice for a floral, refreshing mocktail.",
                tags: ["Fruity", "Refreshing"]
            },
            {
                name: "Strawberry Mojito",
                price: "$4.50",
                description: "Muddled strawberries with mint, lime, and sparkling water over ice.",
                tags: ["Sweet", "Refreshing"]
            },
            {
                name: "Green Apple Mojito",
                price: "$4.50",
                description: "Tart green apple puree with mint, lime, and soda water on the rocks.",
                tags: ["Tart", "Refreshing"]
            }
        ]
    }
};

// Videos for screensaver
const videos = [
    "https://example.com/coffee-video1.mp4",
    "https://example.com/coffee-video2.mp4",
    "https://example.com/coffee-video3.mp4"
];

// Function to render menu
function renderMenu(filter = 'all') {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    Object.keys(menuData).forEach(category => {
        if (filter !== 'all' && filter !== category) return;

        const section = document.createElement('div');
        section.className = 'menu-section';
        section.innerHTML = `<h2 class="section-title">${menuData[category].title}</h2>`;

        const menuItems = document.createElement('div');
        menuItems.className = 'menu-items';

        menuData[category].items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <div class="item-name">
                    <span>${item.name}</span>
                    <span class="item-price">${item.price}</span>
                </div>
                <p class="item-description">${item.description}</p>
                <div class="item-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
            menuItems.appendChild(menuItem);
        });

        section.appendChild(menuItems);
        menuContainer.appendChild(section);
    });
}

// Screensaver functionality
let inactivityTimer;
const inactivityTime = 5 * 60 * 1000; // 5 minutes in milliseconds
const screensaver = document.getElementById('screensaver');
const screensaverVideo = document.getElementById('screensaver-video');

// Function to start screensaver
function startScreensaver() {
    // Select a random video
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    screensaverVideo.src = randomVideo;
    
    // Show screensaver and play video
    screensaver.style.display = 'block';
    screensaverVideo.play().catch(error => {
        console.error("Error playing video:", error);
    });
}

// Function to stop screensaver
function stopScreensaver() {
    screensaver.style.display = 'none';
    screensaverVideo.pause();
    resetInactivityTimer();
}

// Function to reset inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(startScreensaver, inactivityTime);
}

// Initialize menu and event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();

    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter menu
            const filter = button.getAttribute('data-filter');
            renderMenu(filter);
            
            // Reset inactivity timer
            resetInactivityTimer();
        });
    });

    // Set up screensaver events
    resetInactivityTimer();
    
    // Any user activity resets the timer
    ['click', 'mousemove', 'keypress', 'touchstart', 'scroll'].forEach(event => {
        document.addEventListener(event, () => {
            if (screensaver.style.display === 'block') {
                stopScreensaver();
            } else {
                resetInactivityTimer();
            }
        });
    });

    // Tap on screensaver to return to menu
    screensaver.addEventListener('click', stopScreensaver);
});