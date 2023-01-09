import constants from "../../constants/constants";
import MenuList from "../../pages/MenuList";
import AddMenu from "../../pages/AddMenu";

const {ROUTES} = constants;

const menuRoutes = {
    path: ROUTES.MENU,
    children: [
        { index: true, element: <MenuList /> },
        { path: ROUTES.ADD_MENU, element: <AddMenu /> },
    ]
}

export default menuRoutes;