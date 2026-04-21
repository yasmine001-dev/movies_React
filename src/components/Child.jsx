import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Child(props) {
  let { id, count, code, price, onsale } = props.product;

  return (
    <div className="d-inline-block m-2">
      <Card
        bg={onsale ? "warning" : "light"}
        style={{ width: '18rem', position: "relative" }}
        className="mb-3 shadow-sm"
      >
       {/* { onsale?<div className='onSale'>  SALE</div>: null} */}
       { onsale &&<div className='onSale'>  SALE</div>}

        <Card.Header>Code: {code}</Card.Header>

        <Card.Body>
          <Card.Title>{price} EGP</Card.Title>
          <Card.Text>
            ID: {id} <br />
            Available: {count}<br />
            On Sale? {onsale ? "yes" : "no"}
          </Card.Text>

          <Button variant="danger" className="w-100 " onClick={()=>props.delete(id)}>
            Delete
          </Button>
                      <Button variant="info" className="w-100 mt-2" onClick={()=>props.update(props.productIndex)}>Update</Button>

        </Card.Body>
      </Card>
    </div>
  );
}
export default Child;