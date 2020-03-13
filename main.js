var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './vmSocks-green-onWhite.jpg',
        imageDescription: 'A pair of warm socks',
        imageLink: 'www.vue.com',
        invetory: 10,
        inStock: false,
        details: ["80% algodão", "20% poliester"],
        variants: [
            {
                variantId: 1,
                variantColor: "green",
                variantImage: './vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2,
                variantColor: "blue",
                variantImage: './vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0,
        classBox: 'color-box',
    },
    methods: {
        addToCart() {
            this.cart = this.cart + 1
        },
        productUpdate(variant) {
            this.image = variant.variantImage
        }
    },
});