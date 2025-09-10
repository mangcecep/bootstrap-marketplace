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

let cart = []
console.log(`CARD LIST PRODUCT: ${cart}`)
const cartNavbar = document.getElementById("cart")
cartNavbar.innerHTML = `${cart.length}`

const listProduct = document.getElementById("list-product")
const listProductMapping = product.map(p => `<div class="col-lg-4 col-12">
                <div class="card" style="width: 18rem;">
                    <img height="200" src="${p.img_url}" class="card-img-top" alt="...">
                    <div class="–card-body text-center">
                        <h5 class="card-title">${p.product_name}</h5>
                        <p class="card-text">${p.ram}</p>
                        <p class="card-text">IDR ${p.price} </p>
                        <p class="card-text">Stock: ${p.stock}</p>
                        <div class="d-grid">
                            <a 
                                href="#" 
                                class="btn btn-success" 
                                id="btn_product"
                                onclick="addProduct(${p.id})"
                            >
                                Add To Cart
                                <i class="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`).join(",")
listProduct.innerHTML = listProductMapping.replaceAll(",", " ")

function addProduct(id) {
    const productFilter = product.find(value => value.id == id)
    product = product.map(p => {
        if (p.id == id) {
            return {
                ...p,
                stock: p.stock - 1
            }
        }

        return p
    })

    const listProductMapping = product.map(p => `<div class="col-lg-4 col-12">
                <div class="card" style="width: 18rem;">
                    <img height="200" src="${p.img_url}" class="card-img-top" alt="...">
                    <div class="–card-body text-center">
                        <h5 class="card-title">${p.product_name}</h5>
                        <p class="card-text">${p.ram}</p>
                        <p class="card-text">IDR ${p.price} </p>
                        <p class="card-text">Stock: ${p.stock}</p>
                        <div class="d-grid">
                            <a 
                                href="#" 
                                class="btn btn-success" 
                                id="btn_product"
                                onclick="addProduct(${p.id})"
                            >
                                Add To Cart
                                <i class="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`).join(",")
    listProduct.innerHTML = listProductMapping.replaceAll(",", " ")



    cart.push(productFilter)
    console.log(`FILTER PRODUCT: ${JSON.stringify(productFilter)}`)
    console.log(`FILTER PRODUCT: ${cart.length}`)
    console.log(`CARD LIST PRODUCT: ${JSON.stringify(cart)}`)
    cartNavbar.innerHTML = `${cart.length}`
}