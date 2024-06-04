import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy- Ecommerce"}>
      <div className="row privacy">
        <div className="col-md-6">
          <img
            src="/images/privacypolicy.jpg"
            alt="privacy policy"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p className="mt-2 text-justify">This is our privacy policy.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
