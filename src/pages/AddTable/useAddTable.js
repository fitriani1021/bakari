import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddTable = () => {
    const [tableNo, setTableNo] = React.useState("");
    const [tableStatus, setTableStatus] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {tableNo, tableStatus, isDisable};
    const setter = {
        tableNo: onChangeText(setTableNo),
        tableStatus: onChangeText(setTableStatus)
    }

    React.useEffect(() => {
        if (tableNo && tableStatus) {
            setDisable(false);
        } else setDisable(true)
    }, [tableNo,tableStatus])

    return {
        getter, setter
    }
}

export default useAddTable;