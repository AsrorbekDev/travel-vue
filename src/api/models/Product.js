"use strict";

export default class Product {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.description = data.description;
    }
}
