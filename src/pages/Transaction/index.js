import {Button, Card} from "react-bootstrap";

const Transaction = () => {
    function clickHandler() {
        return(
            <Button variant="outline-dark">Nasi Goreng</Button>
        )
    }

    return(
        <>
            <h2>Transaction Menu</h2>
            <Card className="card-group">
                <Button variant="outline-dark" onClick={clickHandler}>Food</Button>
                <Button variant="outline-dark">Beverage</Button>
            </Card>
        </>
    )
}

export default Transaction;