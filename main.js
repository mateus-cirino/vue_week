var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './vmSocks-green-onWhite.jpg',
        imageDescription: 'A pair of warm socks',
        imageLink: 'www.vue.com',
        invetory: 10,
        buy: true,
        details: ["80% algodão", "20% poliester"],
        variants: [
            {
                variantId: 1,
                variantColor: "green"
            },
            {
                variantId: 2,
                variantColor: "blue"
            }
        ]
    }
});