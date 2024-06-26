import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Page Not Found- go back"}>
      <div className="pnf">
        <h1 className="pnf-title">404 </h1>
        <h3 className="pnf-heading">Oops ! Page Not Found </h3>
        <Link to="/" className="pnf-btn">
          Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
