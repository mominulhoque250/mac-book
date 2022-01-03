// Memory
const memory8Gb = document.getElementById('memory8Gb');
const memory16Gb = document.getElementById('memory16Gb');

// Storage 
const storage256Gb = document.getElementById('storage256Gb');
const storage512Gb = document.getElementById('storage512Gb');
const storage1Tb = document.getElementById('storage1Tb');

// Delivery option
const deliveryFree = document.getElementById('deliveryFree');
const deliveryCharge = document.getElementById('deliveryCharge');

// Table
let bestPrice = document.getElementById('bestPrice');
let memoryCost = document.getElementById('memoryCost');
let storageCost = document.getElementById('storageCost');
let deliveryCost = document.getElementById('deliveryCost');
let totalPrice = document.getElementById('totalPrice');
// Coupon
const couponCode = document.getElementById('couponCode');
const couponSubmit = document.getElementById('couponSubmit');
const finalPrice = document.getElementById('finalPrice');

let couponStatus = false;
// Calculating cost
function calculateCost(inputCost, value) {
    inputCost.innerText = value;
}

function getTotalPrice() {
    const totalPriceText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);

    totalPrice.innerText = totalPriceText;
    finalPrice.innerText = totalPriceText;
}

// All click event

// Handle Memory event
memory8Gb.addEventListener('click', function () {
    calculateCost(memoryCost, 0);
    getTotalPrice();
});
memory16Gb.addEventListener('click', function () {
    calculateCost(memoryCost, 180);
    getTotalPrice();
});

// Handle Storage event 
storage256Gb.addEventListener('click', function () {
    calculateCost(storageCost, 0);
    getTotalPrice();
});
storage512Gb.addEventListener('click', function () {
    calculateCost(storageCost, 100);
    getTotalPrice();
});
storage1Tb.addEventListener('click', function () {
    calculateCost(storageCost, 180);
    getTotalPrice();
});
// Delivery Storage event 
deliveryFree.addEventListener('click', function () {
    calculateCost(deliveryCost, 0);
    getTotalPrice();
});
deliveryCharge.addEventListener('click', function () {
    calculateCost(deliveryCost, 20);
    getTotalPrice();
});

// Handle cupon Code event 
/* couponCode- stevekaku */
couponSubmit.addEventListener('click', function () {
    if (couponCode.value == 'stevekaku') {
        if (couponStatus == false) {
            couponStatus = true;
            finalPrice.innerText = totalPrice.innerText - (totalPrice.innerText / 100) * 20;
        }
        couponCode.value = [];
    }
})

