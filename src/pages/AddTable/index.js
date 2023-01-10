import useAddTable from "./useAddTable";
import {useNavigate} from "react-router-dom";
import constants from "../../constants/constants";
import {FormInput, StyledContainer} from "../../components";
import {StyledTitle} from "./styles";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import {connect} from "react-redux";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addTable} from "../../service/tableApi";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getTableStatus} from "../../service/tableStatusApi";
import FormSelect from "../../components/FormSelect";

const FORM_LIST = [
    {id: "tableNo", label: "Table Number", type: "text", placeholder: "Enter Table Number"}
]

const AddTable = () => {
    const {getter, setter} = useAddTable();
    const navigate = useNavigate();
    const {fetchMutation, loading} = useFetchMutation(
        addTable,
        () => navigate(constants.ROUTES.TABLE)
    );
    const {data: tableStatusData} = useFetchQuery(getTableStatus);

    const submitHandler = () => {
        fetchMutation(getter)
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
                <FormSelect
                    label="Table Status"
                    placeholder="Select Table Status"
                    onChange={setter.statusId}
                    value={getter.statusId}
                    values={tableStatusData?.data?.map(
                        (item) => ({
                            id: item?.statusId,
                            label: item?.statusName
                        }))}
                />
                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable || loading}>
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