const app = new Vue({
  el: '#app',
  data: {
    product: 'Calcetines',
    brand: 'XID',
    selectedVariant: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/images/socks_green.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/images/socks_blue.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0,
    onSale: true
  },
  methods: {
    updateVariant(index) {
      this.selectedVariant = index
    },
    addCart() {
      this.cart++
      this.variants[this.selectedVariant].variantQuantity--
    }
  },
  computed: {
    title() {
      return `${this.product} ${this.brand}`
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    stock() {
      return this.inStock ? 'Disponible' : 'Agotado'
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity > 0
    }
  }
})
