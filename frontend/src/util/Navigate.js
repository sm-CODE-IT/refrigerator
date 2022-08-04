import { useNavigate } from "react-router-dom";

const Navigator =() => {
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

    return <div>
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
      <div className="head_userinfo">
        환영합니다.
      </div>
    </div>
};

export default Navigator;




