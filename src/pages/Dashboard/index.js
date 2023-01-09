import {StyledContainer} from "../../components";
import {Button} from "react-bootstrap";
import constants from "../../constants/constants";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    return(
        <StyledContainer className="justify-content-center">
            <h1>Welcome to Warung Makan Bahari</h1>
            <p className="lead">
                Please choose menu on nav bar
            </p>
            <Button onClick={() => navigate(constants.ROUTES.TRANSACTION)}>Transaction Menu</Button>
        </StyledContainer>
    )
}

export default Dashboard;
