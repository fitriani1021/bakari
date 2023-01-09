import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddMenu = () => {
    const [menuName, setMenuName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {menuName, price, category, isDisable};
    const setter = {
        menuName: onChangeText(setMenuName),
        price: onChangeText(setPrice),
        category: onChangeText(setCategory)
    }

    React.useEffect(() => {
        if (menuName && price && category) {
            setDisable(false);
        } else setDisable(true)
    }, [menuName,price,category])

    return {
        getter, setter
    }
}

export default useAddMenu;