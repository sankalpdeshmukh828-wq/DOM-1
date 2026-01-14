// DOM Elements
const carImage = document.getElementById("carImage");
const price = document.getElementById("price");
const colors = document.querySelectorAll(".color");
const addToCartBtn = document.getElementById("addToCart");
const carTag = document.getElementById("carTag");

let selectedColor = "red";

// Single car data object
const carData = {
    red: {
        image: "https://stimg.cardekho.com/images/car-images/930x620/Volkswagen/Virtus/10624/1690629923736/221_wild-cherry-red_480311.jpg",
        price: "$22,800 ",
        colorCode: "red"
    },
    black: {
        image: "https://stimg.cardekho.com/images/car-images/930x620/Volkswagen/Virtus/10619/1702622200158/Deep-Black-Pearl_0a0a0a.jpg",
        price: "$16,800",
        colorCode: "black"
    },
    white: {
        image: "https://stimg.cardekho.com/images/car-images/930x620/Volkswagen/Virtus/10624/1690629923736/223_candy-white_eff2ef.jpg",
        price: "$20,800",
        colorCode: "#ffffff"
    }
};

// Color selection logic
colors.forEach(color => {
    color.addEventListener("click", () => {

        // Active state
        colors.forEach(c => c.classList.remove("active"));
        color.classList.add("active");

        selectedColor = color.dataset.color;

        // Update image & price
        carImage.src = carData[selectedColor].image;
        price.innerText = carData[selectedColor].price;

        // Update button & label color
        addToCartBtn.style.backgroundColor = carData[selectedColor].colorCode;
        carTag.style.backgroundColor = carData[selectedColor].colorCode;

        // Visibility fix for white
        if (selectedColor === "white") {
            addToCartBtn.style.color = "black";
            carTag.style.color = "black";
            carTag.style.border = "1px solid black";
        } else {
            addToCartBtn.style.color = "white";
            carTag.style.color = "white";
            carTag.style.border = "none";
        }
    });
});

// Add to cart
addToCartBtn.addEventListener("click", () => {
    alert(`Added Volkswagen Virtus (${selectedColor.toUpperCase()}) to cart 🚗`);
});
