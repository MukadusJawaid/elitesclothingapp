import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./AdminDashboard.module.css";
import ProductTable from "@/Components/ProductTable";

export default function AdminDashboardPageView() {
  return (
    <main>
      <div className={classes.heroSection}>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className={classes.title}>Welcome to Admin Dashboard</h1>
              <p className={classes.subtitle}>
                Manage your products and settings here.
              </p>
            </Col>
            <Col md={12}>
              <div className={classes.productTableContainer}>
                <h2 className={classes.tableHeading}>Product List</h2>
                <ProductTable products={products} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

const products = [
  {
    id: 1,
    title: "Product 1",
    description:
      "This is a short description of the product, highlighting its features and benefits.",
    price: 99.99,
    image: "/images/productOne.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "This is a short description of the product, highlighting its features and benefits.",
    price: 99.99,
    image: "/images/productTwo.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description:
      "This is a short description of the product, highlighting its features and benefits.",
    price: 99.99,
    image: "/images/productThree.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description:
      "This is a short description of the product, highlighting its features and benefits.",
    price: 99.99,
    image: "/images/productFour.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description:
      "This is a short description of the product, highlighting its features and benefits.",
    price: 99.99,
    image: "/images/productFive.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    description:
      "This is a short description of the product, highlighting its features and benefits.",
    price: 99.99,
    image: "/images/productSix.jpg",
  },
];
