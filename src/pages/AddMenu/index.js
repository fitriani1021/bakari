import useAddMenu from "./useAddMenu";
import {useNavigate} from "react-router-dom";
import constants from "../../constants/constants";
import {FormInput, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import useFetchMutation from "../../hooks/useFetchMutation";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getMenuCategories} from "../../service/menuCategoryApi";
import FormSelect from "../../components/FormSelect";
import {addMenu} from "../../service/menuApi";

const FORM_LIST = [
    {id: "menuName", label: "Menu Name", type: "text", placeholder: "Enter Menu Name"},
    {id: "price", label: "Price", type: "number", placeholder: "Enter Price"}
]

const AddMenu = () => {
    const {getter, setter} = useAddMenu();
    const navigate = useNavigate();
    const {fetchMutation, loading} = useFetchMutation(
        addMenu,
        () => navigate(constants.ROUTES.MENU)
    );
    const {data: menuCategoryData} = useFetchQuery(getMenuCategories);
    const submitHandler = () => {
        fetchMutation(getter)
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Menu</StyledTitle>
            <Form>
                {FORM_LIST.map(item => (
                    <FormInput
                        label={item.label}
                        type={item.type}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        placeholder={item.placeholder}
                        key={item.id}
                    />
                ))}
                <FormSelect
                    label="Menu Category"
                    placeholder="Select Menu Category"
                    onChange={setter.categoryId}
                    value={getter.categoryId}
                    values={menuCategoryData?.data?.map(
                        (item) => ({
                            id: item?.categoryId,
                            label: item?.categoryName
                        }))}
                />
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable || loading}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.MENU)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddMenu;