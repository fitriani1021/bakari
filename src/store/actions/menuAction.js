import constants from "../../constants/constants";

export const addMenu = (menu) => ({
    type: constants.ACTION.ADD_MENU,
    payload: {
        menuId: Math.random().toString(36).substring(2,7),
        menuName: menu.menuName,
        category: menu.category,
        price: menu.price
    }
})

export const deleteMenu = (menuId) => ({
    type: constants.ACTION.DELETE_MENU,
    payload: menuId
})