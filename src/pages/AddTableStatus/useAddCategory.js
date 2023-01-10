import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddCategory = () => {
    const [statusName, setStatusName] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {statusName, isDisable};
    const setter = {
        statusName: onChangeText(setStatusName)
    }

    React.useEffect(() => {
        if (statusName){
            setDisable(false);
        } else setDisable(true)
    }, [statusName])

    return {
        getter, setter
    }
}

export default useAddCategory;