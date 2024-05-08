import './validation';
import './helpers';
import './burger.js';
import { descriptionItems, navigationItems, pizzas } from './helpers.js';

document.addEventListener("DOMContentLoaded", function() {
    const favoritePizzaList = document.querySelector(".favorite-pizza__list");

    const descriptionList = document.querySelector(".description__list");

    const nav = document.querySelector(".header__nav");

    navigationItems.forEach(item => {
        const navItem = document.createElement("a");
        navItem.href = item.link;
        navItem.classList.add("header__nav-item");
        navItem.textContent = item.text;

        nav.appendChild(navItem);
    });

    pizzas.forEach(pizza => {
        const listItem = document.createElement("li");
        listItem.classList.add("favorite-pizza__list-item");

        const link = document.createElement("a");
        link.href = pizza.image;
        link.setAttribute("data-lightbox", "image-1");

        const image = document.createElement("img");
        image.src = pizza.image;
        image.alt = "image pizza";

        const title = document.createElement("p");
        title.classList.add("favorite-pizza__list-item__title");
        title.textContent = pizza.name;

        const description = document.createElement("p");
        description.classList.add("favorite-pizza__list-item__description");
        description.textContent = pizza.description;

        const button = document.createElement("button");
        button.classList.add("favorite-pizza__button");
        button.textContent = "В корзину";

        listItem.appendChild(link);
        link.appendChild(image);
        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(button);

        favoritePizzaList.appendChild(listItem);
    });

    descriptionItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.classList.add("description__list-item");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = "hop";

        const content = document.createElement("div");

        const title = document.createElement("h3");
        title.classList.add("description__item-title");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.classList.add("description__item-description");
        description.textContent = item.description;

        content.appendChild(title);
        content.appendChild(description);

        listItem.appendChild(image);
        listItem.appendChild(content);

        descriptionList.appendChild(listItem);
    });
});
