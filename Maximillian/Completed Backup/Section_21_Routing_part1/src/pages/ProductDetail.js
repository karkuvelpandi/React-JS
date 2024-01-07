import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>ProductDetail</h1>
      <h2>Product id: {params.id}</h2>
      <Link to=".." relative="path">
        Go back
      </Link>
    </div>
  );
};

export default ProductDetail;
