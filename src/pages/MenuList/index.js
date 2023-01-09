import {connect, useDispatch} from "react-redux";
import {deleteMenu} from "../../store/actions/menuAction";
import {StyledListGroup} from "./styles";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants/constants";
import MenuItem from "./components/MenuItem";

const MenuList = ({data}) => {
    const dispatch = useDispatch();

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure to delete this menu?");
        if (isOk) {
            dispatch(deleteMenu(id));
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

const mapStateToProps = (state) => ({
    listData: state.menus.menuList,
    pagination: state.menus.pagination
})

export default connect(mapStateToProps)(withPaginationList(MenuList, {
    label: "Menu",
    routeToAdd: constants.ROUTES.ADD_MENU
}));