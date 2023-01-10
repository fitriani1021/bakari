import api from "../config/api";

export const getMenus = (page) => api.get("/menus",
    {
        params: {
            page
        }
    }
)

export const getMenuById = (id) => api.get("/menus/"+id);

export const addMenu = (data) => {
    return api.post("/menus",
        data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

export const deleteMenu = (id) => {
    return api.delete("/menus/"+id)
}