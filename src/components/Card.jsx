import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import styles from "../css/Card.module.css";
function CardComponent({ movieInfo }) {
  const [ticketsCount, setticketsCount] = useState(movieInfo.tickets);
  if (!movieInfo) return null;
  const handleBuytickets = () => {
    // if (ticketsCount > 0) 
      setticketsCount(ticketsCount - 1);
    
  };
  return (
    <Card
      className="h-100 border-0 overflow-hidden m-0 text-light"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Img
        variant="top"
        src={movieInfo.image}
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className={`mb-3 w-100 ${styles.movieCardTitle}`}>
          {movieInfo.title}
        </Card.Title>
        <Card.Text as="div">
          <p className="mb-2 text-secondary">Year: {movieInfo.year} </p>
          <p className="mb-2">Genre: {movieInfo.genre} </p>
          <p className="mb-2">Tickets: {ticketsCount} </p>
        </Card.Text>
        <Button
          variant={
            ticketsCount === 0
              ? "secondary"
              : ticketsCount === 1
                ? "danger"
                : ticketsCount === 2
                  ? "warning"
                  : "success"
          }
          className="mt-auto w-100"
          onClick={handleBuytickets}
          disabled={ticketsCount === 0}
        >
          But Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
