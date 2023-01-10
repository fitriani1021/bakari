import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddCategory = () => {
    const [categoryName, setCategoryName] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {categoryName, isDisable};
    const setter = {
        categoryName: onChangeText(setCategoryName)
    }

    React.useEffect(() => {
        if (categoryName){
            setDisable(false);
        } else setDisable(true)
    }, [categoryName])

    return {
        getter, setter
    }
}

export default useAddCategory;