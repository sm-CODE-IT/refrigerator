import React from "react";
import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const navigate = useNavigate();
  const goOpen = () => {
    navigate(`/open`);
  }
  const goCommunity = () => {
    navigate(`/community`);
  }

  const goMypage = () => {
    navigate(`/mypage`);
  }

  return (
    <div className="header">
      <div className="head_btn_left">
        <button className="header_refrigerator" onClick={goOpen}>
          냉장고
        </button>
      </div>
      <div className="head_middle">
        <button className="header_Community" onClick={goCommunity}>
          커뮤니티
        </button>
      </div>
      <div className="head_btn_right">
        <button className="header_Mypage" onClick={goMypage}>
          마이페이지
        </button>
      </div>
      <div className="header_userinfo">
        000님 환영합니다.
      </div>
    </div>
  );
};

export default Navigator;




