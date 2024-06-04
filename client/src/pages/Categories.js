import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <h1 className="text-center">Categories</h1>
      <div className="container">
        <div className="cat">
          {categories.map((c) => (
            <div className="mt-5 mb-3" key={c._id}>
              <Link className="btn btn-primary" to={`/category/${c.slug}`}>
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
