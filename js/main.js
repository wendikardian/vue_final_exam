var sales = new Vue({
  el: "#sales",
  data: {
    // create data product with array of object there is name shoes, price (in rupiah), price_after_discount, image
    shoes: [
      {
        name: "Nike Air Max 90",
        price: 2000000,
        price_after_discount: 1000000,
        image:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e835c4d8-c95a-4ddf-a9b6-86af099aeec0/air-max-tw-se-shoes-8CTsWh.png",
      },
      {
        name: "Nike Air Max 95",
        price: 3000000,
        price_after_discount: 1500000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5ea4f44f-f320-463e-bc5a-f7daafe44d41/air-max-tw-shoes-DhpWvV.png",
      },
      {
        name: "Nike Air Max 97",
        price: 4000000,
        price_after_discount: 2000000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/746357f7-f971-45d4-ae1f-2fc59d3f2bf7/air-max-ap-shoes-3Rdq04.png",
      },
      {
        name: "Nike Air Max 98",
        price: 5000000,
        price_after_discount: 2500000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5b698a8a-c3ad-4ddf-9b4c-844c18c0db73/air-max-270-shoes-0MJn2d.png",
      },
      {
        name: "Nike Air Max 270",
        price: 6000000,
        price_after_discount: 3000000,
        image: "https://hips.hearstapps.com/hmg-prod/images/nike-air-max-day-2023-640f5ee7d2778.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*",
      },
      {
        name: "Nike Air Max 720",
        price: 7000000,
        price_after_discount: 3500000,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4ad1e0ea-0e52-4136-8dc0-271743a0c861/air-max-95-recraft-older-shoes-xdcRNM.png",
      },
    ],
    title: "sales",
  },
  methods: {},
});
