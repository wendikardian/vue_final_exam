var sales = new Vue({
  el: "#app",
  data: {
    // create data product with array of object there is name shoes, price (in rupiah), price_after_discount, image
    shoes: [
      {
        id: 1,
        name: "Nike Air Max 90",
        price: 2000000,
        price_after_discount: 1000000,
        sizes : [37, 38, 39, 40, 41, 42, 43, 44, 45],
        description : `The Nike Air Max 90 SE stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Fresh colours give a modern look while Max Air cushioning adds comfort to your journey.`,
        specifications : ['Foam midsole', 'Rubber outsole', 'Colour Shown: White/Black/White', 'Style: CT1891-100', 'Country/Region of Origin: Vietnam'],
        image:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e835c4d8-c95a-4ddf-a9b6-86af099aeec0/air-max-tw-se-shoes-8CTsWh.png",
      },
      {
        id: 2,
        name: "Nike Air Max 95",
        price: 3000000,
        price_after_discount: 1500000,
        sizes : [37, 38, 39, 44, 45],
        description : `The Nike Air Max 95 SE moves with strength and fluidity inspired by the human body. The midsole represents the spine, graduated panels are the muscles, the lace loops are the shoe’s ribs and the mesh in the upper is its skin. Originally developed for performance running, this interpretation features premium leather and modern colours.`,
        specifications : ['Foam midsole', 'Rubber outsole', 'Colour Shown: White/Black/White', 'Style: CT1891-100', 'Country/Region of Origin: Vietnam'],
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5ea4f44f-f320-463e-bc5a-f7daafe44d41/air-max-tw-shoes-DhpWvV.png",
      },
      {
        id: 3,
        name: "Nike Air Max 97",
        price: 4000000,
        price_after_discount: 2000000,
        sizes : [37, 38, 39, 40, 41, 42, 43],
        description : `The Nike Air Max 97 keeps a sneaker icon going strong with the same design details that made it famous: water-ripple lines, reflective piping and full-length Max Air cushioning.`,
        specifications : ['Foam midsole', 'Rubber outsole', 'Colour Shown: White/Black/White', 'Style: CT1891-100', 'Country/Region of Origin: Vietnam'],
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/746357f7-f971-45d4-ae1f-2fc59d3f2bf7/air-max-ap-shoes-3Rdq04.png",
      },
      {
        id: 4,
        name: "Nike Air Max 98",
        price: 5000000,
        price_after_discount: 2500000,
        sizes : [37, 38, 39, 40, 41, 42, 43, 44, 45],
        description : `The Nike Air Max 98 brings back retro Air Max style with contemporary comfort innovations. A full-length Max Air unit gives total cushioning in every step.`,
        specifications : ['Foam midsole', 'Rubber outsole', 'Colour Shown: White/Black/White', 'Style: CT1891-100', 'Country/Region of Origin: Vietnam'],
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5b698a8a-c3ad-4ddf-9b4c-844c18c0db73/air-max-270-shoes-0MJn2d.png",
      },
      {
        name: "Nike Air Max 270",
        price: 6000000,
        price_after_discount: 3000000,
        sizes : [ 41, 42, 43, 44, 45],
        description : `The Nike Air Max 270 combines the exaggerated tongue from the Air Max 180 and classic elements from the Air Max 93. It features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.`,
        specifications : ['Foam midsole', 'Rubber outsole', 'Colour Shown: White/Black/White', 'Style: CT1891-100', 'Country/Region of Origin: Vietnam'],
        image: "https://hips.hearstapps.com/hmg-prod/images/nike-air-max-day-2023-640f5ee7d2778.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*",
      },
      {
        id: 5,
        name: "Nike Air Max 720",
        price: 7000000,
        price_after_discount: 3500000,
        sizes : [37, 38, 39, 40, 41, 42, 43, 44, 45],
        description : `The Nike Air Max 720 goes bigger than ever before with Nike's tallest Air unit yet, offering more air underfoot for unimaginable, all-day comfort. Has Air Max gone too far? We hope so.`,
        specifications : ['Foam midsole', 'Rubber outsole', 'Colour Shown: White/Black/White', 'Style: CT1891-100', 'Country/Region of Origin: Vietnam'],
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4ad1e0ea-0e52-4136-8dc0-271743a0c861/air-max-95-recraft-older-shoes-xdcRNM.png",
      },
    ],
    showModal: false,
    selectedShoe: null,
    quantity: 1,
    selectedSize: null,
    specialRequest: '',
    selectedPackaging: null,
    cart : [],
    isShowCheckoutModal : false
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.totalPrice, 0);
    },
  },
  methods: {
    toggleModal(shoe) {
      this.selectedShoe = shoe;
      this.showModal = !this.showModal;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    changePackaging(packaging) {
      this.selectedPackaging = packaging;
    }, buyNow() {
      let message = `Hello, saya ingin memesan \nProduk: ${this.selectedShoe.name}\nUkuran: ${this.selectedSize}\nSpecial Request: ${this.specialRequest}\nPackaging: ${this.selectedPackaging}\n\nTerimakasih.`;
      let whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    }, 
    addToCart() {
      // this.cart.push(this.selectedShoe);
      // also add size selected, quantity, special request, packaging
      this.selectedShoe.size = this.selectedSize;
      this.selectedShoe.quantity = this.quantity;
      this.selectedShoe.specialRequest = this.specialRequest;
      this.selectedShoe.packaging = this.selectedPackaging;
      this.selectedShoe.totalPrice = this.selectedShoe.price_after_discount * this.quantity;
      this.selectedShoe.id = this.cart.length;
      this.cart.push(this.selectedShoe);

      console.log(this.cart);
    },
    showCartModal() {
      this.isShowCheckoutModal = true;
    },
    deleteItem(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
    checkout() {
      let message = 'Hello, I would like to purchase the following items:\n';
      this.cart.forEach(item => {
        message += `
          Item: ${item.name}
          Size: ${item.size}
          Quantity: ${item.quantity}
          Packaging: ${item.packaging}
          Special Request: ${item.specialRequest}
          Total Price: Rp. ${item.totalPrice}
          ------------------------
        `;
      });
      message += `Total: Rp. ${this.total}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/?text=${encodedMessage}`);
    },
  },
});
