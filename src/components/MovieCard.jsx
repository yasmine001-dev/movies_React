import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ movie }) {
  const [showMore, setShowMore] = useState(false);
  const shortDescription = movie.description.slice(0, 80) + "...";

  return (
    <Card style={{ width: "100%" }} className="mb-4 h-100 bg-dark text-white border-secondary">
      <Card.Img variant="top" src={movie.poster} style={{ height: "350px", objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>
        <span className="badge bg-warning text-dark mb-2 align-self-start">{movie.category}</span>
        
        <Card.Text style={{ fontSize: "14px", flexGrow: 1 }}>
          {showMore ? movie.description : shortDescription}
        </Card.Text>

        <Button 
          variant="link" 
          className="text-warning p-0 text-decoration-none text-start mt-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;