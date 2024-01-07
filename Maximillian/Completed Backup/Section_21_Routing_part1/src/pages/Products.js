import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const PRODUCTS = [
    { id: "1", title: "Product 1" },
    { id: "2", title: "Product 2" },
    { id: "3", title: "Product 3" },
  ];
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
