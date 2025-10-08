
let totalCart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")) :
    [];

const cartNavbar = document.getElementById("cart")
let data = document.getElementById("list-product")

const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);
}

cartNavbar.innerHTML = `${totalCart.length}`;
data.innerHTML = `${totalCart.length === 0 ? `<tr>
        <td colspan="6">
        <p class='text-center text-danger h3 my-5'>product has not added!<p>
        <td/>
    </tr>` : `${totalCart?.map((product, index, arr) => (`${index === arr.length - 1 ?
    (`<tr>
        <td colspan="4">Total payment</td>
        <td colspan="2">0</td>
</tr>`).replaceAll(",", " ")
    : `<tr>
            <td>${index + 1}</td>
            <td>${product.product_name}</td>
            <td>${rupiah(product.price)}</td>
            <td>${product.stock}</td>
            <td>${rupiah(product.stock * product?.price)}</td>
            <td>
                <button class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>`
    }`).replaceAll(",", " "))}
`}`;