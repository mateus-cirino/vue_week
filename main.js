Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
    <p v-if="erros.length > 0">
        Erros:
        <ul>
            <li v-for="erro in erros">{{ erro }}</li>
        </ul>
    </p>
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="productReview.name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="productReview.review"></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="productReview.rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
    <p>
      <input type="submit" value="Submit">  
    </p>    
  
  </form>`,
    data() {
        return {
            productReview: {
                name: null,
                review: null,
                rating: null
            },
            erros: []
        }
    },
    methods: {
        onSubmit() {
            if(this.productReview.name && this.productReview.review && this.productReview.rating) {
                this.$emit('add-product-review', JSON.parse(JSON.stringify(this.productReview)));
                this.productReview.name = null;
                this.productReview.review = null;
                this.productReview.rating = null;
            }else {
                if(!this.productReview.name) this.erros.push("The field name is required");
                if(!this.productReview.review) this.erros.push("The field review is required");
                if(!this.productReview.rating) this.erros.push("The field rating is required");
            }
        },
    },
})
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
    <div class="product-image">
        <a v-bind:href="imageLink" target="_blank">
            <img v-bind:src="image" v-bind:alt="imageDescription">
        </a>
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p v-if="invetory >= 100">Tem mais de 99 meias</p>
        <p v-else-if="invetory > 50 && invetory < 100">Tem entre 50 e 100 meias</p>
        <p v-else>Tem menos de 100 meias</p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <p>{{ preco }}</p>
        <div v-for="(variant, index) in variants" v-bind:key="variant.variantId" v-bind:class=classBox
            v-bind:style="{ backgroundColor: variant.variantColor }" v-on:click="productUpdate(index)">
        </div>
        <button v-on:click="addToCart" v-bind:class="{ disabledButton: !inStock }">Comprar</button>
        <button v-on:click="removeToCart">Remover</button>
        <p v-if="productsReview.length > 0">
            <ul>
                <li v-for="productReview in productsReview">
                    {{ productReview.name }}
                    {{ productReview.review }}
                    {{ productReview.rating }}
                </li>
            </ul>
        </p>
        <p v-else>
            Este produto ainda não possuí reviews
        </p>
        <product-review v-on:add-product-review="addReview"></product-review>
    </div>
    </div>
    `,
    data() {
        return {
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
            classBox: 'color-box',
            productsReview: []
        }
    },
    methods: {
        addToCart() {            
            if(this.inStock) {
                this.$emit('add-to-cart', this.variantSelected);
                this.variants[this.variantSelected].variantQuantity = this.variants[this.variantSelected].variantQuantity - 1;
            }
        },
        removeToCart() {
            this.$emit('remove-to-cart', this.variantSelected);
        },
        productUpdate(index) {
            this.variantSelected = index;
        },
        addReview(productReview) {
            this.productsReview.push(productReview);
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
        },
        preco() {
            return (this.premium) ? "free" : "2.99 R$";
        }
    },
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        addToCartRoot(idProduct){            
            this.cart.push(idProduct);
        },
        removeToCartRoot(idProduct) {
            if(this.cart.indexOf(idProduct) != -1) {
                this.cart.pop();
            }
        }
    },
});