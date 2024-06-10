import Singale from "../../components/single/Singale";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
  //Fetch data and send to single component

  return (
    <div className="product">
      <Singale {...singleProduct} />
    </div>
  );
};

export default Product;
