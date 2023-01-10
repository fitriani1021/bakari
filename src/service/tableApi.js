import api from "../config/api";

export const getTables = (page) => api.get("/tables",
    {
        params: {
            page
        }
    }
)

export const getTableById = (id) => api.get("/tables/"+id);

export const addTable = (data) => {
    return api.post("/tables",
        data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

export const deleteTable = (id) => {
    return api.delete("/tables/git "+id)
}