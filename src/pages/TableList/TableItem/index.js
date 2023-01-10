import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import '../../../App.css'

const TableItem = ({data, onDelete}) => {
    return (
        <StyledListItem action>
            <Row>
                <Col className="col-8">
                    <h3 className="lead">{data?.tableNo}</h3>
                    {
                        (data?.tableStatus?.statusName === "available") ?
                        <p className="statusAvail">Available</p>
                        :
                            <p className="statusUnavail">Unavailable</p>
                    }
                </Col>
                <ButtonGroup className="col-4">
                    <Button variant="danger" onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </Row>
        </StyledListItem>
    )
}

export default TableItem;