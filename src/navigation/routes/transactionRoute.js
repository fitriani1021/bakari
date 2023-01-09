import constants from "../../constants/constants";
import Transaction from "../../pages/Transaction";

const {ROUTES} = constants;

const transactionRoute = {
    path: ROUTES.TRANSACTION,
    children: [
        { index: true, element: <Transaction /> }
    ]
}
export default transactionRoute;