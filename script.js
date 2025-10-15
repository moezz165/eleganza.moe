// Lagra kundvagn i localStorage
const buttons = document.querySelectorAll('.add-to-cart');
  const buyDiv = document.querySelector('.produkt-köpt');
// Göm "Produkt lagd i kundvagn" div initialt
buyDiv.style.display = 'none';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const name = button.dataset.name;
    const price = parseInt(button.dataset.price);
    cart.push({name, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    ShowBuyDiv();
  });
});

// Visa "Produkt lagd i kundvagn" div
function ShowBuyDiv() {
  
  buyDiv.style.display = 'block';
  setTimeout(() => {
    buyDiv.style.display = 'none';
  }, 200);
}

// Visa kundvagn på kundvagn.html
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  if (!cartItems) return;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - ${item.price}kr`;
    cartItems.appendChild(div);
    total += item.price;
  });
  totalEl.textContent = `Total: ${total}kr`;
}

updateCart();

// Hämta element
const alertBox = document.getElementById('customAlert');
const alertOk = document.getElementById('alertOk');

// Visa popup
function showCustomAlert() {
  alertBox.style.display = 'flex';
}

// Stäng popup
alertOk.addEventListener('click', () => {
  alertBox.style.display = 'none';
});

// Koppla till alla knappar "lägg till i kundvagn"
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    showCustomAlert();
  });
});
