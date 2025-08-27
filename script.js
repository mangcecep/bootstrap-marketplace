// DOM (Document Object Model)
let product = [
    {
        id: 1,
        product_name: "Phone 1",
        ram: "Ram 256 GB",
        price: 120000,
        stock: 10,
        img_url: "./img/product/product-3.jpeg"
    },
    {
        id: 2,
        product_name: "Phone 2",
        ram: "Ram 125 GB",
        price: 120000,
        stock: 20,
        img_url: "./img/product/product-2.png"
    },
    {
        id: 3,
        product_name: "Phone 3",
        ram: "Ram 64 GB",
        price: 120000,
        stock: 15,
        img_url: "./img/product/product_1.jpg"
    }
]
console.log(product[1])


const btn_first = document.getElementById("btn_product_1")
btn_first.addEventListener("click", function () {
    alert("btn 1 sudah di klik")
})