import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import divid_truth2015 from '../assets/movie_boosters/divid_truth2015.jpg';
import john_wick2014 from '../assets/movie_boosters/john_wick2014.jpg';
import joker2024 from '../assets/movie_boosters/joker2024.jpg';
import wesnesday2022 from '../assets/movie_boosters/wesnesday2022.jpg';

const moviesData = [
  { id: 1,
     title: "divid truth",
      year: "2015", genre: "Horror", ticket: 10, image: divid_truth2015 },
{ id: 2, title: "john wick", year: "2014", genre: "Horror", ticket: 4, image: john_wick2014 },
  { id: 3, title: "joker 2", year: "2024", genre: "Horror", ticket: 2, image: joker2024 },
  { id: 4, title: "wesnesday", year: "2022", genre: "Horror", ticket: 1, image: wesnesday2022 }
];
function Movies() {
  return (
    <>
      <Container fluid className="bg-dark text-warning text-center py-4 mb-4">
        <h2>Movies</h2>
      </Container>

      <Container>
        <Row>
          {moviesData.map((movie) => (
            <Col key={movie.id} lg={3} md={6} sm={12} className="mb-4">
              <Card movieInfo={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Movies;
