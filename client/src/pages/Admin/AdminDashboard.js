import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Admin Dashboard"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-50 p-2">
              <h4>
                <span>Admin Name:</span>
                {auth?.user?.name}
              </h4>
              <h4>
                <span>Admin Email:</span>
                {auth?.user?.email}
              </h4>
              <h4>
                <span>Admin Contact:</span>
                {auth?.user?.phone}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
