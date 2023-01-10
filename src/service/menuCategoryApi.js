import api from "../config/api";

export const getCategories = (page) => api.get("/menu-categories",
    {
        params: {
            page
        }
    })

export const addCategory = (data) => {
    return api.post("/menu-categories", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getMenuCategories = () => api.get("/menu-categories");