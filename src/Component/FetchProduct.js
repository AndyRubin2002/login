import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";


export function FetchProduct({addToCart}){
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.in/api/products').then((response)=>{
            response.json().then((data)=>{
                setProduct(data.products)
            })
        })
    },[])
    return(
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignContent:"center"}}>
        {
            <Row style={{ margin: "20px", marginLeft: "70px" }}>
  {product.map((data, index) => (
    <Col lg={6} md={6} sm={12} key={index}>
      <Card style={{ width: "80%", marginBottom: "10px" }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Text style={{ fontWeight: "bold", color: "green" }}>
            Price: ${data.price}
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart(data)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

        }
        </div>
    );
}