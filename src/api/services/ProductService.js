"use strict";

import {api} from "../../globals.js";

export default {
    async getAll() {
        const response = await api.get(`/todos`);
        return response.data;
    },

    async getById(id) {
        const response = await api.get(`/todos/${id}`);
        return response.data;
    }
}