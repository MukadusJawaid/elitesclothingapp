import React from "react";
import classes from "./ProductsPageView.module.css";
import Header from "@/Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "@/Components/ProductCard";
import Button from "@/Components/Button";
export default function ProductsPageView() {
  return (
    <main>
      <Header isLoggedIn={true} />
      <Container>
        <Row>
          <Col md={12}>
            <h1 className={classes.heading}>Products</h1>
          </Col>
        </Row>
        <Row className="mb-5 g-4">
          {products?.map((item, index) => (
            <Col md={4} key={index}>
              <ProductCard isLoggedIn={true} data={item} />
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Button variant="primary" className={classes.button}>
              Load More
            </Button>
          </Col>
        </Row>
      </Container>
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
