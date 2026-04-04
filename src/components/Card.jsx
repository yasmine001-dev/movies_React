import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
function CardComponent({ movieInfo }) {
  const [ticketsCount, setTicketsCount] = useState(movieInfo.ticket);
  if (!movieInfo) return null;
  const handleBuyTicket = () => {
    if (ticketsCount > 0) {
      setTicketsCount(ticketsCount - 1);
    }
  };
  return (
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Img
          variant="top"
          src={movieInfo.image}
          style={{ height: "400px",width: "100%", objectFit: "cover" }}
        />
        <Card.Title style={{ userSelect: "auto", WebkitUserSelect: "auto", margin:"10px"}}>
          {movieInfo.title.toUpperCase()}
        </Card.Title>
        <Card.Text>
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
          className="mt-auto"
          onClick={handleBuyTicket}
          disabled={ticketsCount === 0}
        >
          But Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
