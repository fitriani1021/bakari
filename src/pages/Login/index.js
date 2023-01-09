import useToken from "../../hooks/useToken";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import constants from "../../constants/constants";
import {FormText, StyledContainer} from "../../components";
import {Button, Form} from "react-bootstrap";
import {onChangeText} from "../../utils/eventHandlers";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {setToken} = useToken();

    function validateForm() {
        return email.length > 0 && password.length >= 6;
    }
    function handleSubmit(e) {
        e.preventDefault();
        const emailXp = "admin@example.com";
        const passwordXp = "12345678";
        if (email===emailXp && password === passwordXp){
            setToken({token: "ini adalah token"});
            navigate(constants.ROUTES.DASHBOARD);
        }else if (email!==emailXp && password===passwordXp){
            window.alert("Email is incorrect")
            setEmail("");
            setPassword("");
        }else if (email===emailXp && password!==passwordXp){
            window.alert("Password is incorrect")
            setEmail("");
            setPassword("");
        }else{
            window.alert("Email & Password is incorrect")
            setEmail("");
            setPassword("");
        }
    }

    return(
        <StyledContainer>
            <h1>Login Form</h1>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <FormText
                    label={"Email"}
                    type="email"
                    placeholder={"Enter your email"}
                    value={email}
                    onChange={onChangeText(setEmail)}
                />
                <FormText
                    label={"Password"}
                    type="password"
                    placeholder={"Enter your password"}
                    value={password}
                    onChange={onChangeText(setPassword)}
                />
                <Button size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </StyledContainer>
    );
}

export default Login;