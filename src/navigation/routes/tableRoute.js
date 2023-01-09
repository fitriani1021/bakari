import constants from "../../constants/constants";
import TableList from "../../pages/TableList";
import AddTable from "../../pages/AddTable";

const {ROUTES} = constants;

const tableRoutes = {
    path: ROUTES.TABLE,
    children: [
        { index: true, element: <TableList /> },
        { path: ROUTES.ADD_TABLE, element: <AddTable /> },
    ]
}

export default tableRoutes;