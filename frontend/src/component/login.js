import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleButton from "./GoogleButton";
//import Alert from "react-native";
//import {useDispatch} from "react-redux";


const Login = () => {

    // useEffect(() => {
    //     axios.get('api/hello')
    //         .then(response => )
    // }, []);

    //const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    function login() {
        if (id.trim() === "") {
            console.log("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
        } else if (password.trim() === "") {
            console.log("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
        } else {
            axios.post("http://192.168.35.149:3000/login", 
                null, 
                { params: {id: id, pwd: password} }
            ).then(function(resp) {
                console.log(resp.data);
                if (resp.data !== null && resp.data != "") {
                    console.log("로그인 성공");
                } else {
                    console.log("로그인 실패", "아이디나 비밀번호를 확인하세요.");
                    setId("");
                    setPassword("");
                }
            }).catch(function(err) {
                console.log(`Error Message: ${err}`);
            })
        }
    }

    const navigate = useNavigate();

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const goClose = () => {
        navigate(`/close`);
    }
    const goJoin = () => {
        navigate(`/join`)
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
                <button className="loginbtn" onClick={goClose}>로그인</button>
            </form>
            <div>
                <button className="joinbtn" onClick={goJoin}>회원가입</button>
            </div>
            <GoogleButton />
        </div >
    );
};

export default Login;