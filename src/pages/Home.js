import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
      <img
        src=" https://imgs.search.brave.com/fcbaNmlCZs_pWE-maVudO7tMlCrqW-LWE2F-twok0TY/rs:fit:852:480:1/g:ce/aHR0cHM6Ly9hazIu/cGljZG4ubmV0L3No/dXR0ZXJzdG9jay92/aWRlb3MvMTAxNTYw/NDI0Mi90aHVtYi8x/MS5qcGc"
        alt="gym equipment"
        className="home-banner"
      />
      <div className="featured-products-container container mt-4">
        <h2>Last products</h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="sale__banner--container mt-4">
        <img
          src="https://imgs.search.brave.com/Q2I2SacI9ujK3Xh07LKAcUIO3SGudWKjRrsQJ_NMfIQ/rs:fit:1200:980:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzY5/NS83NzQvbm9uXzJ4/L25lb24tYmlnLXNh/bGUtbGlnaHQtc2ln/bi1yZXRyby1zdHls/ZS12ZWN0b3ItYmFu/bmVyLmpwZw"
          alt="sale sign"
        />
      </div>
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
