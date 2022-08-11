import { useState } from "react";
import Navigator from "../util/Navigate";

const Editor = () => {
    const [inName, setInName] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <div>
            <header>
                <Navigator />
            </header>

            <div>
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
            </div>
        </div>
    )
}

export default Editor;