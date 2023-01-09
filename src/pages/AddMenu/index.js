import useAddMenu from "./useAddMenu";
import {useNavigate} from "react-router-dom";
import constants from "../../constants/constants";
import {FormInput, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {addMenu} from "../../store/actions/menuAction";
import {connect} from "react-redux";

const FORM_LIST = [
    {id: "menuName", label: "Menu Name", type: "text", placeholder: "Enter Menu Name"},
    {id: "price", label: "Price", type: "number", placeholder: "Enter Price"}
    // {id: "category", label: "Category (Food/Beverages)", type: "text", placeholder: "Enter Food or Beverages"}
]

const AddMenu = ({
                     addMenu
                 }) => {
    const {getter, setter} = useAddMenu();
    const navigate = useNavigate();

    const submitHandler = () => {
        addMenu(getter)
        navigate(constants.ROUTES.MENU)
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
                <Form.Label>Select Menu Category</Form.Label>
                <Form.Select
                    value={getter.category}
                    onChange={setter.category}
                >
                    <option hidden>Select Category</option>
                    <option value="food">Food</option>
                    <option value="beverage">Beverage</option>
                </Form.Select>
                <br />
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
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

const mapDispatchToProps = (dispatch) => ({
    addMenu: menu => dispatch(addMenu(menu))
})

export default connect(
    null,
    mapDispatchToProps
)(AddMenu);