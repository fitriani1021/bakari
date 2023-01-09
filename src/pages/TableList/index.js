import {connect, useDispatch} from "react-redux";
import {deleteTable} from "../../store/actions/tableAction";
import {StyledListGroup} from "./styles";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants/constants";
import TableItem from "./TableItem";

const TableList = ({data}) => {
    const dispatch = useDispatch();

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure to delete this table?");
        if (isOk) {
            dispatch(deleteTable(id));
        }
    }

    return (
        <StyledListGroup>
            {data?.map((item, index) => (
                <TableItem
                    data={item}
                    key={item.tableId}
                    onDelete={onDelete(item.tableId)}
                />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = (state) => ({
    listData: state.tables.tableList,
    pagination: state.tables.pagination
})

export default connect(mapStateToProps)(withPaginationList(TableList, {
    label: "Table",
    routeToAdd: constants.ROUTES.ADD_TABLE
}));