import React, { useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import MyButton from "../component/MyButton";
import Navigator from "../util/Navigate";

const Editor = () => {
    const contentRef = useRef();
    const navigate = useNavigate();
    const [inName, setInName] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");


    const handleSubmit = () => {
        if (inName.length < 1) {
            contentRef.current.focus();
            return;
        }

        if (amount < 1) {
            contentRef.current.focus();
            return;
        }

        if (window.confirm("새로운 재료를 추가하시겠습니까?")) {
            onCreate(inName, date, amount);
        }

        navigate("/", { replace: true })
    };

    return (
        <div>
            <header>
                <Navigator />
            </header>

            <div className="editor_body">
                <h2>재료 추가하기</h2>
                <section>
                    <h4>재료명</h4>
                    <form>
                        <input
                            className="input_name"
                            type="text"
                            value={inName}
                            onChange={(e) => setInName(e.target.value)}
                        />
                    </form>
                </section>
                <section>
                    <h4>유통기한</h4>
                    <form>
                        <input
                            className="input_date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </form>
                </section>
                <section>
                    <h4>남은 양</h4>
                    <input
                        className="input_amount"
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                </section>
                <button className="submitbtn" >저장</button>
            </div>
            <section>
                <div className="control_box">
                    <MyButton
                        text={"최소하기"}
                        onClick={() => Navigate(-1)} />
                    <MyButton
                        text={"작성완료"}
                        type={"positive"}
                        onClick={handleSubmit} />
                </div>
            </section>
        </div>
    )
}

export default Editor;