var app = new Vue({
    el: '#app',
    data: {
        brand: 'Master',
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        variantSelected: 1,
        imageDescription: 'A pair of warm socks',
        imageLink: 'www.vue.com',
        details: ["80% algodão", "20% poliester"],
        variants: [
            {
                variantId: 0,
                variantColor: "green",
                variantImage: './vmSocks-green-onWhite.jpg',
                variantQuantity: 12
            },
            {
                variantId: 1,
                variantColor: "blue",
                variantImage: './vmSocks-blue-onWhite.jpg',
                variantQuantity: 2
            }
        ],
        cart: 0,
        classBox: 'color-box',
    },
    methods: {
        addToCart() {            
            if(this.inStock) {
                this.cart = this.cart + 1
                this.variants[this.variantSelected].variantQuantity = this.variants[this.variantSelected].variantQuantity - 1;
                
            }
        },
        productUpdate(index) {
            this.variantSelected = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.variantSelected].variantImage;
        },
        inStock() {
            return (this.variants[this.variantSelected].variantQuantity > 0) ? true : false;
        },
        invetory() {
            return this.variants[this.variantSelected].variantQuantity;
        }
    },
});