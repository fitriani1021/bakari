import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddMenu = () => {
    const [menuName, setMenuName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [categoryId, setCategoryId] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {menuName, price, categoryId, isDisable};
    const setter = {
        menuName: onChangeText(setMenuName),
        price: onChangeText(setPrice),
        categoryId: onChangeText(setCategoryId)
    }

    React.useEffect(() => {
        if (menuName && price && categoryId) {
            setDisable(false);
        } else setDisable(true)
    }, [menuName,price,categoryId])

    return {
        getter, setter
    }
}

export default useAddMenu;