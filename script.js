// DOM (Document Object Model)

let product = localStorage.getItem("product")

window.onload = function () {
    if (product === null) {
        localStorage.setItem("product", JSON.stringify([
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
        ]))
    }
}

let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

console.log(`CARD LIST PRODUCT: ${cart}`)


const cartNavbar = document.getElementById("cart")
cartNavbar.innerHTML = `${cart.length}`

const listProduct = document.getElementById("list-product")

const listProductMapping = JSON.parse(product).map(p => `<div class="col-lg-4 col-12">
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
    let productTemp = localStorage.getItem("product")
    let productFilter = JSON.parse(productTemp)?.find(value => value.id == id)

    if (productFilter.stock === 0) {
        alert("Stock product ini Habis!")
        return
    }

    let product = JSON.parse(productTemp)?.map(p => {
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
                    <img height="200" src="${p.img_url}" class="card-img-top m-3" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${p.product_name}</h5>
                        <p class="card-text">${p.ram}</p>
                        <p class="card-text">IDR ${p.price} </p>
                        <p class="card-text">Stock: ${p.stock}</p>
                        <div class="d-grid m-3">
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

    if (cart.length === 0) {
        cart.push({
            id: productFilter.id,
            product_name: productFilter.product_name,
            ram: productFilter.ram,
            price: productFilter.price,
            stock: 1,
            img_url: productFilter.img_url
        })
    } else {
        cart?.some(value => value?.id == productFilter?.id) ? cart.map(p => {
            if (p.id == productFilter?.id) {
                return {
                    ...p,
                    stock: p.stock + 1
                }
            }

            return p
        }) : cart.push({
            id: productFilter.id,
            product_name: productFilter.product_name,
            ram: productFilter.ram,
            price: productFilter.price,
            stock: 1,
            img_url: productFilter.img_url
        })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("product", JSON.stringify(product))

    cartNavbar.innerHTML = `${cart.length}`
}