import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddTable = () => {
    const [tableNo, setTableNo] = React.useState("");
    const [statusId, setStatusId] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {tableNo, statusId, isDisable};
    const setter = {
        tableNo: onChangeText(setTableNo),
        statusId: onChangeText(setStatusId)
    }

    React.useEffect(() => {
        if (tableNo && statusId) {
            setDisable(false);
        } else setDisable(true)
    }, [tableNo,statusId])

    return {
        getter, setter
    }
}

export default useAddTable;