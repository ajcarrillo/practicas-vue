Vue.component('product', {
  data() {
    return {
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
      ]
    }
  },
  methods: {
    updateVariant(index) {
      this.selectedVariant = index
    },
    addCart() {
      this.variants[this.selectedVariant].variantQuantity--
      this.$emit('add', this.variants[this.selectedVariant].variantId)
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
  },
  template: `
  <div class="row">
        <div class="col-4">
          <img
              :src="image"
              alt=""
              class="img-fluid border"
          >
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col">
              <h1>{{ title }}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>{{ stock }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Details</h2>
              <ul>
                <li
                    v-for="detail in details"
                    :key="detail"
                >
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3>Colors</h3>
              <p
                  v-for="(variant, index) in variants"
                  :style="{backgroundColor: variant.variantColor, width: '32px', height: '32px', cursor: 'pointer'}"
                  @mouseover="updateVariant(index)"
              >
              
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button
                  class="btn btn-success"
                  @click="addCart"
                  :disabled="!inStock"
              >Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
  `
})

const app = new Vue({
  el: '#app',
  data: {
    cart: []
  },
  methods:{
    addCart(id){
      this.cart.push(id)
    }
  }
})
