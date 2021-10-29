//Our Array that is used to simulate a data table
const menu = [
    {
        id: 1,
        title: "American Pancakes",
        category: "breakfast",
        price: 10.99,
        img: "./images/pancakes.jpg",
        desc: `We all love fluffy pancakes! These are topped with fresh berries and nuts.`,
    },
    {
        id: 2,
        title: "steak",
        category: "dinner",
        price: 18.99,
        img: "./images/steak.jpg",
        desc: `Beyond the fillet, sirloin, rib-eye and rump, there’s a world of steaks that will seriously deliver on the flavour front. This is our favorite, the flat iron steak.`,
    },
    {
        id: 3,
        title: "Hot Chocolate",
        category: "drinks",
        price: 5.99,
        img: "./images/hotchocolate.jpg",
        desc: `Steamed milk and mocha sauce topped with sweetened whipped cream and a chocolate-flavored drizzle. A timeless classic made to sweeten your spirits.`,
    },
    {
        id: 4,
        title: "English Breakfast",
        category: "breakfast",
        price: 8.99,
        img: "./images/english.jpg",
        desc: `The English breakfast is one of the best-loved national meals in the world. Sir Winston Churchill refused to start the day until he’d polished off his Full English in the morning.`,
    },
    {
        id: 5,
        title: "Pizza",
        category: "dinner",
        price: 10.99,
        img: "./images/pizza.jpg",
        desc: `Try this insanely delicious pizza with tomato sauce, mozzarella, onions, mixed bell peppers and mushrooms.`,
    },
    {
        id: 6,
        title: "Orange Juice",
        category: "drinks",
        price: 5.99,
        img: "./images/juice.jpg",
        desc: `This amazing orange juice is cold-pressed with oranges picked and squeezed at their peak of sweetness. After you've tried it you'll never go back to any other.`,
    },
    {
        id: 7,
        title: "Hamburger",
        category: "dinner",
        price: 12.99,
        img: "./images/hamburger.jpg",
        desc: `A delicious burger with bacon, American cheese, lettuce, special sauce, ketchup, diced onions and pickles.`,
    },
    {
        id: 8,
        title: "Pumpkin Soup",
        category: "dinner",
        price: 9.99,
        img: "./images/pumpkinsoup.jpg",
        desc: `There's nothing better or healthier than a proper pumpkin soup.`,
    },
    {
        id: 9,
        title: "Bluberry Milkshake",
        category: "drinks",
        price: 6.99,
        img: "./images/milkshake.jpg",
        desc: `This delicious, refreshing and tasty beverage is a frosty way to indulge, cool down and perk up all at the same time!`,
    },
    {
        id: 10,
        title: "Greek Salad",
        category: "dinner",
        price: 12.99,
        img: "./images/greeksalad.jpg",
        desc: `The key to this beautiful authentic Greek salad is bold flavours from super-fresh ingredients.`,
    },
];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//Our "display" methods are called once the DOM content is loaded
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

//We display our menu items and filter buttons. The default category is "all".
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;

}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);

        }
        return values;

    }, ["all"]);
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

//Filters the items in our array depending on the value associated with the filter button
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });

            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });

}