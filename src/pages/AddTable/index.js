import useAddTable from "./useAddTable";
import {useNavigate} from "react-router-dom";
import constants from "../../constants/constants";
import {FormInput, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {addTable} from "../../store/actions/tableAction";

const FORM_LIST = [
    {id: "tableNo", label: "Table Number", type: "text", placeholder: "Enter Table Number"},
    // {id: "tableStatus", label: "Table Status", type: "text", placeholder: "Enter Table Availability"}
]

const AddTable = ({
                     addTable
                 }) => {
    const {getter, setter} = useAddTable();
    const navigate = useNavigate();

    const submitHandler = () => {
        addTable(getter)
        navigate(constants.ROUTES.TABLE)
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Table</StyledTitle>
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
                <Form.Label>Select Table Status</Form.Label>
                <Form.Select
                    value={getter.tableStatus}
                    onChange={setter.tableStatus}
                >
                    <option hidden>Select Table Status</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </Form.Select>
                <br />
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.TABLE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addTable: table => dispatch(addTable(table))
})

export default connect(
    null,
    mapDispatchToProps
)(AddTable);