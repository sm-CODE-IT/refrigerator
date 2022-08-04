import axios from "axios";
import { useEffect, useState} from "react";
//import {useDispatch} from "react-redux";

const Login = () => {

    // useEffect(() => {
    //     axios.get('api/hello')
    //         .then(response => )
    // }, []);

    //const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    // console.log(id);
    // console.log(password);

    return (
        <div className="login_wrapper">
            <form onSubmit={onSubmitHandler}>
                <label>아이디</label><br />
                <input type="email" value={id} onChange={onIdHandler} />
                <br />
                <label>비밀번호</label><br />
                <input type="password" value={password} onChange={onPasswordHandler} />
                <br />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default Login;