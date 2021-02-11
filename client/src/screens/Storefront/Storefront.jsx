import Layout from "../../components/shared/Layout/Layout";
import "./Storefront.css";

const Storefront = (props) => {
  return (
    <Layout user={props.user}>
      <div className="storefront"></div>
    </Layout>
  );
};

export default Storefront;
