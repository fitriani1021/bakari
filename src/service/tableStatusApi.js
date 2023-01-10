import api from "../config/api";

export const getStatuses = (page) => api.get("/table-statuses",
    {
        params: {
            page
        }
    })

export const addStatus = (data) => {
    return api.post("/table-statuses", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getTableStatus = () => api.get("/table-statuses");