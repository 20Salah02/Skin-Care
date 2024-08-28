
document.addEventListener('DOMContentLoaded', function () {
    const seikoButton = document.getElementById('seiko');
    const charlieButton = document.getElementById('charlie');
    const solarButton = document.getElementById('solar');
    const iwcButton = document.getElementById('iwc');

    const seikoWatches = document.getElementById('seiko-watches');
    const charlieWatches = document.getElementById('charlie-watches');
    const solarWatches = document.getElementById('solar-watches');
    const iwcWatches = document.getElementById('iwc-watches');

    const watchCategories = [seikoWatches, charlieWatches, solarWatches, iwcWatches];

    function showOnly(activeCategory) {
        watchCategories.forEach(category => {
            if (category === activeCategory) {
                category.classList.remove('hidden');
                category.classList.add('active');
            } else {
                category.classList.add('hidden');
                category.classList.remove('active');
            }
        });
    }

    seikoButton.addEventListener('click', () => showOnly(seikoWatches));
    charlieButton.addEventListener('click', () => showOnly(charlieWatches));
    solarButton.addEventListener('click', () => showOnly(solarWatches));
    iwcButton.addEventListener('click', () => showOnly(iwcWatches));
});




// ///////////////




document.getElementById('addToCart').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const name = this.getAttribute('data-name');
    const price = parseFloat(this.getAttribute('data-price'));
    const image = this.getAttribute('data-image');  // Get the image URL

    const item = cart.find(product => product.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, image, quantity: 1 });  // Store the image URL in the cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';  // Redirect to cart page
});




// PRODUCTS

  //FACIAL:

const products = {
    // CLEANSER:
    "cleanser1": {
        "image": "img/07a17ca44d0756049ecd9ae4e6b72596.jpg",
        "name": "PureGlow Gentle Cleanser GC128",
        "description": "Designed and crafted with care, the PureGlow Gentle Cleanser offers a soothing experience with every wash. Its advanced formula effectively removes impurities while preserving the skin's natural moisture balance, ensuring a refreshed and vibrant complexion. Ideal for daily use, this cleanser embodies a harmonious blend of gentle care and effective cleansing.",
        "price": "$20"
    },
    "cleanser2": {
        "image": "img/AdobeStock_513432393.jpeg",
        "name": "HydraLux Daily Cleanser DC180",
        "description": "The Elysian Radiance Cleanser is the epitome of luxury and efficiency. Infused with radiance-boosting ingredients, this cleanser gently purifies the skin, leaving it illuminated and revitalized. With its unique formulation, it effortlessly removes dirt and makeup, ensuring a clean slate for your skincare routine.",
        "price": "$34"
    },
    "cleanser3": {
        "image": "img/AdobeStock_458738772.jpeg",
        "name": "SereneClear Purifying Cleanser PC200",
        "description": "Experience clarity like never before with SereneClear Purifying Cleanser. Expertly formulated to target impurities and excess oil, this cleanser delivers a deep yet gentle cleanse, promoting a clear and balanced complexion. Its soothing properties make it perfect for sensitive skin types seeking purity and calmness.",
        "price": "$22"
    },
    "cleanser4": {
        "image": "img/AdobeStock_510890424_1080x.jpg",
        "name": "PureGlow Gentle Cleanser GC122 ",
        "description": "Designed and crafted with care, the PureGlow Gentle Cleanser offers a soothing experience with every wash. Its advanced formula effectively removes impurities while preserving the skin's natural moisture balance, ensuring a refreshed and vibrant complexion. Ideal for daily use, this cleanser embodies a harmonious blend of gentle care and effective cleansing.",
        "price": "$22"
    },
    "cleanser5": {
        "image": "img/1f2a2bb5a6cc910ca5548574d5e6f342.jpg",
        "name": "Elysian Radiance Cleanser RC150",
        "description": "The Elysian Radiance Cleanser is the epitome of luxury and efficiency. Infused with radiance-boosting ingredients, this cleanser gently purifies the skin, leaving it illuminated and revitalized. With its unique formulation, it effortlessly removes dirt and makeup, ensuring a clean slate for your skincare routine.",
        "price": "$20"
    },
    "cleanser6": {
        "image": "img/89c239b1820390c8c431e95151d1db30.jpg",
        "name": "SereneClear Purifying Cleanser PC200",
        "description": "Experience clarity like never before with SereneClear Purifying Cleanser. Expertly formulated to target impurities and excess oil, this cleanser delivers a deep yet gentle cleanse, promoting a clear and balanced complexion. Its soothing properties make it perfect for sensitive skin types seeking purity and calmness.",
        "price": "$20"
    },

    // Moisturizer

    "moisturizer1": {
        "image": "img/AdobeStock_421356290.jpeg",
        "name": "HydraSilk Nourishing Moisturizer NM400",
        "description": "Crafted for ultimate hydration, the HydraSilk Nourishing Moisturizer envelops the skin in a silky veil of moisture. Its rich yet lightweight formula delivers long-lasting hydration, leaving the skin feeling soft, smooth, and deeply nourished. Perfect for daily use, it ensures a radiant glow that lasts all day.",
        "price": "$45"
    },
    "moisturizer2": {
        "image": "img/iStock-1369613190.jpg",
        "name": "PureHydra Daily Moisturizer DM420",
        "description": "Embrace the power of hydration with PureHydra Daily Moisturizer. Specially designed for everyday use, this moisturizer locks in moisture while enhancing the skin's natural barrier. Its fast-absorbing formula provides a fresh and dewy finish, making it an essential part of your skincare routine.",
        "price": "$55"
    },
    "moisturizer3": {
        "image": "img/AdobeStock_422773398.jpeg",
        "name": " RadiantGlow Moisture Cream MC350 ",
        "description": "Illuminate your skin with RadiantGlow Moisture Cream, a luxurious cream that delivers intense hydration and a radiant finish. Infused with skin-brightening ingredients, it transforms dull skin into a luminous canvas, perfect for any time of the day. Its smooth application leaves the skin feeling soft and supple.",
        "price": "$45"
    },
    "moisturizer4": {
        "image": "img/AdobeStock_458738772.jpeg",
        "name": "EternaSmooth Hydrating Moisturizer HM300 ",
        "description": "The EternaSmooth Hydrating Moisturizer offers a timeless solution for dry skin. Enriched with hydrating ingredients, it deeply nourishes and revitalizes the skin, providing a smooth and youthful appearance. Its lightweight texture ensures a non-greasy finish, making it ideal for all skin types.",
        "price": "$15"
    },
    "moisturizer5": {
        "image": "img/AdobeStock_513432393.jpeg",
        "name": "RadiantGlow Moisture Cream MC350 ",
        "description": "Enhance your skin’s natural glow with RadiantGlow Moisture Cream. This formula provides continuous hydration while imparting a subtle radiance, ensuring your skin looks and feels its best. Perfect for daily use, it delivers a soft and luminous complexion.",
        "price": "$45"
    },
    "moisturizer6": {
        "image": "img/AdobeStock_510890424_1080x.jpg",
        "name": "HydraSilk Nourishing Moisturizer NM400Y ",
        "description": "HydraSilk Nourishing Moisturizer NM400Y brings the ultimate hydration experience, enriched with a unique blend of nourishing ingredients. Its silky texture absorbs quickly, delivering moisture deep into the skin for a smooth and radiant finish that lasts.",
        "price": "$45"
    },

    //TONER

    "troner1": {
        "image": "img/07a17ca44d0756049ecd9ae4e6b72596.jpg",
        "name": "VitalMist Balancing Toner BT250",
        "description": "Achieve balance and refreshment with VitalMist Balancing Toner. This toner is designed to hydrate and harmonize your skin’s pH levels, preparing it for the next steps in your skincare routine. Its invigorating mist offers an instant boost of freshness and vitality.",
        "price": "$20"
    },
    "toner2": {
        "image": "img/AdobeStock_513432393.jpeg",
        "name": " AquaVive Refreshing Toner RT300",
        "description": "AquaVive Refreshing Toner revitalizes your skin with a burst of hydration. Its refreshing formula tones and purifies, leaving your skin feeling rejuvenated and ready for moisture. Ideal for all skin types, it enhances your complexion with a natural, healthy glow.",
        "price": "$34"
    },
    "toner3": {
        "image": "img/AdobeStock_458738772.jpeg",
        "name": "ClearRevive Clarifying Toner CT220",
        "description": "ClearRevive Clarifying Toner is your key to a clearer complexion. Formulated to target impurities and excess oil, this toner refines pores and balances the skin, leaving it feeling clean, smooth, and refreshed. Perfect for oily or acne-prone skin, it promotes a clearer, healthier appearance.",
        "price": "$22"
    },
    "toner4": {
        "image": "img/AdobeStock_510890424_1080x.jpg",
        "name": "umiTone Brightening Toner BT180 ",
        "description": "Illuminate your skin with LumiTone Brightening Toner. This toner is enriched with brightening agents that help to even out skin tone and enhance radiance. Its lightweight formula refreshes and prepares the skin for moisturization, leaving a luminous, balanced finish.",
        "price": "$22"
    },
    "toner5": {
        "image": "img/1f2a2bb5a6cc910ca5548574d5e6f342.jpg",
        "name": "ClearRevive Clarifying Toner CT222",
        "description": "ClearRevive Clarifying Toner CT222 is expertly crafted to clarify and balance your skin. Its purifying formula helps to reduce excess oil and refine pores, providing a clear and smooth complexion. Ideal for daily use, it leaves your skin feeling refreshed and revitalized.",
        "price": "$20"
    },
    "toner6": {
        "image": "img/89c239b1820390c8c431e95151d1db30.jpg",
        "name": "AquaVive Refreshing Toner RT300",
        "description": "AquaVive Refreshing Toner provides a refreshing touch to your skincare routine. Its hydrating formula revitalizes the skin, leaving it feeling clean, toned, and ready for the next steps. Perfect for all skin types, it ensures a fresh and radiant look.",
        "price": "$35"
    },

    //SERUM
    
    "serum1": {
        "image": "img/AdobeStock_421356290.jpeg",
        "name": " LumiSerum Advanced Repair SR500",
        "description": "LumiSerum Advanced Repair offers an intensive treatment for those seeking visible results. This serum is packed with active ingredients that target signs of aging, such as fine lines and wrinkles, restoring a youthful glow to the skin. Its luxurious texture absorbs quickly, delivering powerful results.",
        "price": "$45"
    },
    "serum2": {
        "image": "img/iStock-1369613190.jpg",
        "name": "RenewalBoost Intense Serum IS600E",
        "description": "Unleash the power of renewal with RenewalBoost Intense Serum. This potent serum is designed to rejuvenate the skin, targeting signs of aging and fatigue. With its advanced formulation, it delivers deep hydration and visibly improves skin texture and tone.",
        "price": "$55"
    },
    "serum3": {
        "image": "img/AdobeStock_422773398.jpeg",
        "name": " VitalEssence Anti-Aging Serum AS480 ",
        "description": "Experience timeless beauty with VitalEssence Anti-Aging Serum. Rich in anti-aging ingredients, this serum helps to diminish the appearance of fine lines and wrinkles, promoting a smoother, more youthful complexion. Its silky texture makes it a pleasure to apply, leaving your skin feeling soft and rejuvenated.",
        "price": "$65"
    },
    "serum4": {
        "image": "img/AdobeStock_458738772.jpeg",
        "name": "RadianceLift Brightening Serum BS450 ",
        "description": "RadianceLift Brightening Serum is your secret to a luminous complexion. This serum is formulated with brightening agents that enhance skin radiance while lifting and firming the skin. It delivers a youthful glow, leaving your skin looking bright and refreshed.",
        "price": "$15"
    },
    "serum5": {
        "image": "img/AdobeStock_513432393.jpeg",
        "name": "LumiSerum Advanced Repair SR500",
        "description": "LumiSerum Advanced Repair SR500 provides targeted care for aging skin. This powerful serum works to restore youthful vitality, reducing the appearance of fine lines and wrinkles. Its rich formula penetrates deeply, offering long-lasting results and a radiant complexion.",
        "price": "$45"
    },
    "serum6": {
        "image": "img/AdobeStock_510890424_1080x.jpg",
        "name": "VitalEssence Anti-Aging Serum AS480 ",
        "description": "VitalEssence Anti-Aging Serum AS480 delivers advanced anti-aging benefits, helping to smooth wrinkles and firm the skin. Its potent formula nourishes the skin deeply, leaving it looking rejuvenated and youthful. Ideal for those seeking to maintain a youthful glow.",
        "price": "$45"
    },
};

// Function to get URL parameter
function getProductKey() {
    const params = new URLSearchParams(window.location.search);
    return params.get('product');
}

// Load the product data
function loadProduct() {
    const productKey = getProductKey();
    if (productKey && products[productKey]) {
        const product = products[productKey];
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price;
    } else {
        // Handle the case where the product is not found
        document.querySelector('section').innerHTML = "<p>Product not found.</p>";
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', loadProduct);