import React from "react";
import { useNavigate } from "react-router-dom";
import Navigator from "../util/Navigate";
const RefrigeratorOpen = () => {

    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";
    const navigate = useNavigate();

    const goAdd = () => {
        navigate(`/edit`);

    }


    return (
        <div>
            <header>
                <Navigator />
            </header>

            <div>
                <div className="img_open">
                    <img src={process.env.PUBLIC_URL + `assets/open_refrigerator.png`} />
                </div>
                <section className="open_goEdit">
                    <div onClick={goAdd} className="plus"><img src={process.env.PUBLIC_URL + `assets/plus.png`} /></div>
                    <div>재료 수정하기</div>
                </section>
            </div>
        </div >
    );
};
export default RefrigeratorOpen;