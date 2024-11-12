// Daftar produk untuk demonstrasi
const products = [
    { id: 1, name: "PC Geming", price: 5000000, image: "AI_Copilot & Gaming PC - RTX 4090 - i9-13900KF - 32GB RAM - 2TB Gen4 SSD.jpeg" },
    { id: 2, name: "hadpone", price: 1500000, image: "handphone iphone,cute iphone,case hp design,chat….jpeg" },
    { id: 3, name: "Smartwarch", price: 200000, image:"Fitbit Versa 2™ Smartwatch _ Shop.jpeg" },
    { id: 4, name: "Lemineral satu dus", price: 100000, image: "Air Minum Yang Baik Untuk Tubuh.jpeg" },
    { id: 5, name: "Minuman bersoda", price: 12000, image: "Sprite Undergoes Global Brand Refresh.jpg" },
    { id: 5, name: "Kaos polos satu lusin", price: 120000, image: "uj.jpeg" },
    { id: 5, name: "Kaos polos satu lusin", price: 120000, image: "uj.jpeg" },
];

// Menampilkan produk di halaman
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Bersihkan produk yang ada

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;

        productList.appendChild(productCard);
    });
}

// Mencari produk berdasarkan nama
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Menampilkan keranjang
let cart = [];

function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('show');
    updateCart();
}

// Menutup keranjang
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.remove('show');
}

// Menambahkan produk ke keranjang
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Memperbarui tampilan keranjang
function updateCart() {
    const cartTable = document.getElementById('cartTable');
    cartTable.innerHTML = ''; // Bersihkan isi tabel

    let total = 0;
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rp ${item.price.toLocaleString()}</td>
        `;
        cartTable.appendChild(row);
        total += item.price;
    });

    const totalPrice = document.getElementById('totalPrice');
    totalPrice.textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Membeli produk sekarang
function buyNow() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong. Silakan tambahkan produk!");
    } else {
        alert("Pembelian berhasil! Terima kasih atas pembelian Anda.");
        cart = []; // Kosongkan keranjang setelah membeli
        updateCart(); // Perbarui tampilan keranjang
        closeCart(); // Tutup modal keranjang
    }
}

// Menutup keranjang dengan klik di luar modal
window.onclick = function (event) {
    const cartModal = document.getElementById('cartModal');
    if (event.target === cartModal) {
        closeCart();
    }
};

// Menampilkan produk saat pertama kali buka halaman
displayProducts();
