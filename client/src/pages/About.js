import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us- Ecommerce"}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            className="aboutus-img"
            src="/images/aboutus.jpg"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="mt-2 text-justify">Hello this is about us section.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
