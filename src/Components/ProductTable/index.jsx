import React from "react";
import { Table } from "react-bootstrap";
import classes from "./ProductTable.module.css";

const ProductTable = ({ products }) => {
  return (
    <Table striped bordered hover className={classes.productTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>
              <img
                src={product.image}
                alt={product.title}
                className={classes.productImage}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
