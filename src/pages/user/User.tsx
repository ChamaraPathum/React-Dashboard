import Singale from "../../components/single/Singale";
import { singleUser } from "../../data";
import "./user.scss";

const User = () => {
  //Fetch data and send to single component

  return (
    <div className="user">
      <Singale {...singleUser} />
    </div>
  );
};

export default User;
