import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us- Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            className="contactus-img"
            src="/images/contactus.jpg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">For any query Please contact us</p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerce.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 011-123456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000(toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
