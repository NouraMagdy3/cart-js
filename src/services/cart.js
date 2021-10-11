const { default: axios } = require("axios");

class Cart {

    //#baseUrl = "https://fakestoreapi.com/products";

    async list() {
        return await axios.get("https://fakestoreapi.com/products")
    }

    async show(id) {
        return await axios.get(`https://fakestoreapi.com/products/${id}`)
    }
    async create(data) {
        return await axios.post(`https://fakestoreapi.com/products/${id}`, data)
    }
    async update(id, data) {
        return await axios.put(`https://fakestoreapi.com/products/${id}`, data)
    }
    async delete(id) {
        return await axios.delete(`https://fakestoreapi.com/products/${id}`)
    }

}
module.exports = new Cart