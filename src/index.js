const cart = require('./services/cart');
const Cart = require('./services/cart')
let times = 1;
let totPr = 0;



Cart.list().then(response => {
    let data = response.data;
    for (let i in data) {
        let img = document.querySelector('img');
        let details = document.querySelector('.details');
        details.innerHTML += `<section class="d-flex border border-1 p-4 mb-4" data-id="${data[i].id}">
        <img src="${data[i].image}" width="125px" class="text-center">
        <section style="margin-left: 15px">
        <h3 class="fs-6 fw-bold">${data[i].title}</h3>   
        <p class="text-secondary mb-3">${data[i].description}</p>
        <span data-price="pricePro" class="text-success fs-3">${data[i].price}$</span>
        <button data-id="${data[i].id}" onclick="AddListener(${data[i].id})" class="mt-3 btn btn-sm text-primary bg-white border border-primary float-end">Add to cart</button>
        </section>
        </section>`;
    }
})

window.AddListener = function(id) {
        let cartBox = document.getElementById('cart-box');

        Cart.show(id).then(response => {
            //let arrPrice = [];
            let price = response.data.price;
            let title = response.data.title;
            let id = response.data.id;
            let totalPrice = document.getElementById('totalPrice');
            cartBox.innerHTML += `<div data-idd="${id}" class="pricePro d-flex border-bottom justify-content-between">
        <p class="fw-bold" style="font-size: 0.8rem">(${title.substr(0, 10)}) Product</span></p>  
        <span style="font-size: 0.8rem" class="pricee">${price}$</span>
        <button onclick="DeleteListener(${id})" class="btn text-danger float-end p-0" style="box-shadow:none;align-self: flex-start;">X</button>
        </div>`;
            //  times++;
            totPr += price;
            totalPrice.innerHTML = totPr.toFixed(2) + "$";
        })
    }
    //<span class="times" data-times="${times}">${times}

window.DeleteListener = function(id) {
    Cart.delete(id).then(response => {
        // console.log(times);
        let price = response.data.price;
        /* if (times-- > times) {
             times--;
         } else {
             document.querySelector(".times").innerHTML = times;
         }*/
        //  times--;
        // document.querySelector(".times").innerHTML = times;
        totPr -= price;
        totalPrice.innerHTML = totPr.toFixed(2) + "$";
        document.querySelector(`div[data-idd="${id}"]`).remove();

    })
}