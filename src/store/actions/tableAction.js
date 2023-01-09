import constants from "../../constants/constants";

export const addTable = (table) => ({
    type: constants.ACTION.ADD_TABLE,
    payload: {
        tableId: Math.random().toString(36).substring(2,7),
        tableNo: table.tableNo,
        tableStatus: table.tableStatus
    }
})

export const deleteTable = (tableId) => ({
    type: constants.ACTION.DELETE_TABLE,
    payload: tableId
})