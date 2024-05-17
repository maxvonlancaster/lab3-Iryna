let posts = [
    { id: 1, title: "Samsung Galaxy M15 5G 4/128GB", image: "images/samsung.jpg", category: "Samsung", price: "140$" },
    { id: 2, title: "Samsung Galaxy S24 8/128GB", image: "images/samsung11.jpg", category: "Samsung", price: "150$" },
    { id: 3, title: "Samsung Galaxy A25 5G 8/256GB", image: "images/samsung2.jpg", category: "Samsung", price: "170$" },
    { id: 4, title: "Google Pixel 7a 8/128GB Snow (US)", image: "images/google.jpg", category: "Google", price: "120$" },
    { id: 5, title: "Google Pixel 8 8/256GB Obsidian (US)", image: "images/google1.jpg", category: "Google", price: "130$" },
    { id: 6, title: "Google Pixel 8 Pro 12/128GB Bay (US)", image: "images/google2.jpg", category: "Google", price: "140$" },
   
];

function loadPosts(category) {
    const container = document.getElementById("cardsContainer");
    let postsHtml = '';

    if (category === "Корзина") {
        category = "All"; 
    }
    posts.forEach(function(post){
        if (category === "All" || post.category === category) {
            postsHtml += `<div class="image-card">
                                <div class="image_and_text-container">
                                    <img class="image" src="${post.image}" alt="${post.title}">
                                    <h4>${post.title}</h4>
                                    <p>${post.price}</p>
                                    <button onclick="addToCart(${post.id})">Додати в корзину</button>

                                </div>
                            </div>`;
        }
    });

    container.innerHTML = postsHtml;
}

loadPosts("All");

const filterButtons = document.querySelectorAll('.navig button');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loadPosts(this.textContent);
    });
});
