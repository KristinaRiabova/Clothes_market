document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('list-view-btn').addEventListener('click', function () {
        document.getElementById('product-grid').classList.add('list-view');
        document.getElementById('product-grid').classList.remove('grid-view');
    });

    document.getElementById('grid-view-btn').addEventListener('click', function () {
        document.getElementById('product-grid').classList.add('grid-view');
        document.getElementById('product-grid').classList.remove('list-view');
    });

    
    const searchInput = document.getElementById('search-input');
    const closeImage = document.querySelector('.end-image');

    closeImage.addEventListener('click', function () {
        searchInput.value = '';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.cat1');
    const categoryContent = document.getElementById('category-content');
    const showAllButton = document.getElementById('show-all-button');

    const initialContent = categoryContent.innerHTML;


    const products = {
        'clothing-shoes': `
                    <div class="product">
                        <img src="assets/Image1.png" alt="Nail polish" class="img-grid">
                        <h3>Leather boots</h3>
                        <h2 class="boots">$13.95</h2>
                        <p class="text-product">1258 bids, 359 watchers
                            $5.95 for shipping</p>
                        <div class="star-button">
                            <div class="star-img">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star-half.png" alt="" class="star">
                            </div>
                            <p class="points">5.00</p>
                            <div class="heartbutton">
                                <img src="assets/Left.png" alt="" class="heart">
                                <button>Watch</button>
                            </div>
                        </div>
                    </div>

                     <div class="product">
                        <img src="assets/Image9.png" alt="Nail polish" class="img-grid">
                        <h3>Trousers. All sizes</h3>
                        <div class="div-5-text">
                            <h2 class="trousers">$13.95</h2>
                            <p class="text-product">1258 bids, 359 watchers
                                $5.95 for shipping</p>
                        </div>
                        <div class="div-6">
                            <div class="star-button">

                                <div class="star-img">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star-half.png" alt="" class="star">
                                </div>
                                <p class="points">5.00</p>
                                <div class="heartbutton">
                                    <img src="assets/Left.png" alt="" class="heart">
                                    <button>Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
        `,
        'pets': `
            <div class="product">
                        <img src="assets/Image11.png" alt="Nail polish" class="img-grid">
                        <h3>Cat Toy</h3>
                        <h2 class="cat">$128.99</h2>
                        <p class="text-product">Eligible for nothing :(</p>
                        <div class="div-3">
                            <div class="star-button">
                                <div class="star-img">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star-half.png" alt="" class="star">
                                </div>

                                <p class="points">5.00</p>
                                <div class="heartbutton">
                                    <img src="assets/Left.png" alt="" class="heart">
                                    <button>Watch</button>
                                </div>

                            </div>
                        </div>
                    </div>
        `,
        'kitchen-accessories': `
         <div class="product">
                        <img src="assets/Image5.png" alt="Nail polish" class="img-grid">
                        <h3>Professional set</h3>
                        <div class="div-6-text">
                            <h2 class="set">$128.99</h2>
                            <p class="text-product">Word-wide shipping is available</p>
                        </div>
                        <div class="div-7">
                            <div class="star-button">
                                <div class="star-img">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star-half.png" alt="" class="star">
                                </div>
                                <p class="points">5.00</p>
                                <div class="heartbutton">
                                    <img src="assets/Left.png" alt="" class="heart">
                                    <button>Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
   `,

        'vintage': `
                    <div class="product">
                        <img src="assets/Image.png" alt="Nail polish" class="img-grid">
                        <h3>Typewriter. Vintage</h3>
                        <h2 class="vintage">$49.50</h2>
                        <p class="text-product">Eligible for Shipping To Mars or somewhere else</p>
                        <div class="star-button">
                            <div class="star-img">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star.png" alt="" class="star">
                                <img src="assets/star-half.png" alt="" class="star">
                            </div>
                            <p class="points">5.00</p>
                            <div class="heartbutton">
                                <img src="assets/Left.png" alt="" class="heart">
                                <button>Watch</button>
                            </div>
                        </div>
                    </div>
`,
        'growing-garden': `
                        <div class="product">
                        <img src="assets/Image10.png" alt="Nail polish" class="img-grid">
                        <h3>Plastic plugs and tubes for prototyping</h3>
                        <div class="price-text">
                            <p class="price-4">$12.48</p>
                            <p class="discount">50% OFF</p>
                        </div>
                        <p class="text-product">Word-wide shipping is available</p>
                        <div class="div-4">
                            <div class="star-button">
                                <div class="star-img">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star-half.png" alt="" class="star">
                                </div>
                                <p class="points">5.00</p>
                                <div class="heartbutton">
                                    <img src="assets/Left.png" alt="" class="heart">
                                    <button>Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
    `,

        'sport-lifestyle': `
                       <div class="product">
                        <img src="assets/Image7.png" alt="Nail polish" class="img-grid">
                        <h3 >Bottle of tea. Drink every evening to generate better ideas!</h3>
                        <h2 class="tea">$12.48</h2>
                        <p class="text-product">Word-wide shipping is available</p>
                        <div class="div-5">
                            <div class="star-button">
                                <div class="star-img">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star.png" alt="" class="star">
                                    <img src="assets/star-half.png" alt="" class="star">
                                </div>
                                <p class="points">5.00</p>
                                <div class="heartbutton">
                                    <img src="assets/Left.png" alt="" class="heart">
                                    <button>Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
    `,
    };

    function showProducts(category) {
        const content = products[category] || '<p>No products available for this category.</p>';
        categoryContent.innerHTML = content;
    }

    categories.forEach(cat => {
        cat.addEventListener('click', function () {
            const category = cat.getAttribute('data-category');
            showProducts(category);
        });
    });

    showAllButton.addEventListener('click', function () {

        categoryContent.innerHTML = initialContent;
    });
});


document.querySelectorAll('.trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        content.dataset.isOpen = content.dataset.isOpen === 'true' ? 'false' : 'true';
    });
});