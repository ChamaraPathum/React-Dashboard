import { topDealUser } from "../../data";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUser.map((item) => (
          <div className="listItem" key={item.id}>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="userText">
                <span className="userName">{item.userName}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <span className="amount">${item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
