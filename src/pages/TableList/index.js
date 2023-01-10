import {StyledListGroup} from "./styles";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants/constants";
import TableItem from "./TableItem";
import useFetchMutation from "../../hooks/useFetchMutation";
import {deleteTable, getTables} from "../../service/tableApi";

const TableList = ({data, refetch}) => {
    const {fetchMutation: deleteTableMutation} = useFetchMutation(
        deleteTable,
        refetch
    );

    const onDelete = (id) => () => {
        const isOk = window.confirm("Are you sure to delete this table?");
        if (isOk) {
            deleteTableMutation(id);
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

export default withPaginationList(TableList, {
    label: "Table",
    routeToAdd: constants.ROUTES.ADD_TABLE,
    query: getTables
});