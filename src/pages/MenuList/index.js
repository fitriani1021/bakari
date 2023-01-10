import {StyledListGroup} from "./styles";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants/constants";
import MenuItem from "./components/MenuItem";
import useFetchMutation from "../../hooks/useFetchMutation";
import {deleteMenu, getMenus} from "../../service/menuApi";

const MenuList = ({data, refetch}) => {
    const {fetchMutation: deleteMenuMutation} = useFetchMutation(
        deleteMenu,
        refetch
    );

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure to delete this menu?");
        if (isOk) {
            deleteMenuMutation(id);
        }
    }

    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <MenuItem
                    data={item}
                    key={item.menuId}
                    onDelete={onDelete(item.menuId)}
                />
            ))}
        </StyledListGroup>
    )
}

export default withPaginationList(MenuList, {
    label: "Menu",
    routeToAdd: constants.ROUTES.ADD_MENU,
    query: getMenus
});