import {useNavigate} from "react-router-dom";

const RefrigeratorClose = () => {
    const navigate = useNavigate();

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    const goOpen = () => {
        navigate(`/open`)
    }

    return (
        <div>
            <div className="img_close">
                <img src={process.env.PUBLIC_URL + `assets/close_refrigerator.png`} />
            </div>
            <button className="startBtn" onClick={goOpen}>
                시작하기
            </button>
        </div>
    );  
};
export default RefrigeratorClose;