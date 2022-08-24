import React from "react";
import Navigator from "../util/Navigate";
const Community = () => {
    return (
        <div>
            <header>
                <Navigator />
            </header>
            <div className="community">
                <h1>Community</h1>
                <div className='form-wrapper'>
                    <input className="title-input" type='text' placeholder='제목' />
                    <textarea className="text-area" placeholder='내용'></textarea>
                </div>
                <button className="submitbtn">입력</button>
            </div>
        </div>

    );
};

export default Community;