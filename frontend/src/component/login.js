const Login = () => {
    return (
        <div className="login_wrapper">
            <form>
                <label>아이디</label><br />
                <input type="email" value onChange />
                <br />
                <label>비밀번호</label><br />
                <input type="password" value onChange />
                <br />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default Login;