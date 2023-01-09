import React from "react";
import {Button} from "react-bootstrap";
import {StyledContainer, EmptyState, Pagination} from "../components";
import {useNavigate} from "react-router-dom";

export default (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate();
        const { label, routeToAdd } = opts;
        const { listData } = props;
        const [currentPage, setCurrentPage] = React.useState(1);
        const [recordsPerPage] = React.useState(4);

        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = listData?.slice(indexOfFirstRecord, indexOfLastRecord);
        const totalPage = Math.ceil(listData?.length / recordsPerPage);

        return (
            <>
                <StyledContainer>
                    <Button variant="success" onClick={() => navigate(routeToAdd)}>Add {label}</Button>
                    {currentRecords?.length > 0 ? (
                        <ListComponent data={currentRecords} {...props} />
                    ): <EmptyState text={`Data ${label} Kosong...`} />}
                </StyledContainer>
                <Pagination
                    totalPage={totalPage}
                    onChangeCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}
