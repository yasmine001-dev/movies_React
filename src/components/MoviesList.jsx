import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieCard from "./MovieCard";
import { Col, Row, Button, Container } from "react-bootstrap";
import { LifeLine } from "react-loading-indicators";

function MoviesList() {
  const { filteredMovies, categories, selectedCategory, setSelectedCategory, loading } = useContext(MoviesContext);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <LifeLine color="#ffd000" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={3} className="mb-4">
          <div className="d-flex flex-column gap-2">
            <h4 className="text-white mb-3">Categories</h4>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "warning" : "outline-warning"}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </Col>

        <Col md={9}>
          <Row>
            {filteredMovies.map((movie) => (
              <Col sm={12} md={6} lg={4} key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
            {filteredMovies.length === 0 && (
              <p className="text-white text-center w-100">No movies found.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MoviesList;
