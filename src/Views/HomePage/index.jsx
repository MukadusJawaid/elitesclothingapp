"use client";
import React, { useState } from "react";
import classes from "./HomeView.module.css";
import Header from "@/Components/Header";
import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "@/Components/HeroSection";
import ProductCard from "@/Components/ProductCard";
import Button from "@/Components/Button";
import { useRouter } from "next/navigation";
export default function HomeViewPage() {
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <main>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <HeroSection />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h1 className={classes.heading}>Our Products</h1>
          </Col>
        </Row>
        {isLoggedIn ? (
          <></>
        ) : (
          <>
            <Row className="mt-3">
              {products?.slice(0, 3).map((item, index) => (
                <Col md={4} key={index}>
                  <ProductCard data={item} />
                </Col>
              ))}
            </Row>
            <Row className="mt-5 mb-5">
              <Col md={12}>
                <Button
                  className={classes?.button}
                  onClick={() => router?.push("/login")}
                >
                  View More
                </Button>
              </Col>
            </Row>
          </>
        )}
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
