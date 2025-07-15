const products = [
{ name: "Sunset Dress", image: "images/dress1.png", price: "₹1,499" },
{ name: "Urban Shirt", image: "images/shirt1.png", price: "₹999" },
{ name: "Classic Denim", image: "images/jeans1.png", price: "₹1,299" }
];
window.onload = () => {
  const container = document.getElementById("productList");
  if (container) {
    products.forEach(p => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" width="150" alt="${p.name}">
          <h4>${p.name}</h4>
          <p>${p.price}</p>
          <button>View Product</button>
        </div>`;
    });
  }
};