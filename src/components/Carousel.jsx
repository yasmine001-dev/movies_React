import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/carousel-imgs/panda.jpg";
import banner2 from "../assets/carousel-imgs/batman.png";
import banner3 from "../assets/carousel-imgs/deadpol.jpg";
import banner4 from "../assets/carousel-imgs/Deadpool&Wolverine.jpg";
import banner5 from "../assets/carousel-imgs/MoonKnight.jpg";
import banner6 from "../assets/carousel-imgs/BreakingBad.jpg";
//Deadpool&Wolverine.jpg
const carouselItems = [
  {
    id: 1,
    image: banner1,
    title: "Kung Fu Panda",
    description: "The Dragon Warrior must embrace his destiny to save the Valley of Peace.",
  },
  {
    id: 2,
    image: banner2,
    title: "Batman",
    description: "Vengeance becomes Gotham's only hope against a sadistic serial killer.",
  },
  {
    id: 3,
    image: banner3,
    title: "Deadpool",
    description: "A wisecracking mercenary seeks revenge with his new mutant healing abilities.",
  },
  {
    id: 4,
    image: banner4, 
    title: "Deadpool & Wolverine",
    description: "The ultimate MCU team-up to save the multiverse with chaos and claws.",
  },
  {
    id: 5,
    image: banner5, 
    title: "Moon Knight",
    description: "A mercenary struggling with multiple personalities and ancient Egyptian powers.",
  },
  {
    id: 6,
    image: banner6, 
    title: "Breaking Bad",
    description: "A high school chemistry teacher turned ruthless kingpin in the meth empire.",
  },
  
  
];
function UncontrolledExample() {
  return (
    <Carousel
   pause="hover"
   
    >
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.image}
           alt={item.title}
           />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
