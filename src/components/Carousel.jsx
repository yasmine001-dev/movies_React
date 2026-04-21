import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample({bannersArr}) {
  // console.log(bannersArr);
  return (
    <Carousel pause="hover">
      {bannersArr.map((item) => (
        <Carousel.Item key={item.id}>
          
          <div style={{ position: "relative", height: "500px", overflow: "hidden", backgroundColor: "#000" }}>
            
            {/* bulred img */}
            <div 
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(5px) brightness(0.4)", 
                transform: "scale(1.1)", 
                zIndex: 0
              }}
            />

            <img 
              className="d-block w-100" 
              src={item.image}
              alt={item.title}
              style={{ 
                height: "550px", 
                objectFit: "contain",
                position: "relative",
                zIndex: 1 
              }} 
            />
          </div>

          <Carousel.Caption style={{ zIndex: 2 }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>

        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
