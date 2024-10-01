const schemeSVG = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total")
let cost = 800;
let totalPrice = 0;
schemeSVG.addEventListener("click", (event) => 
    {
        if (!event.target.classList.contains("booked")) {
            event.target.classList.toggle("active");
            totalPrice = cost * schemeSVG.querySelectorAll(".active").length;
            totalPriceTag.textContent = (totalPrice);

        }
        
    })