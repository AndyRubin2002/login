import { useEffect, useState } from "react";


export function TopProduct(){
    const[getTop, setTop] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.in/api/products').then((response)=>{
            response.json().then((data)=>{
                setTop(data.products)
            })
        })
    },[])
    return(<>
        {
            getTop.map((item,index)=>{
                if(item.popular == "true"){
                    <Col lg={6} md={6} sm={12} key={index}>
                    <Card style={{ width: "80%", marginBottom: "10px" }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text style={{ fontWeight: "bold", color: "green" }}>
                            Price: ${data.price}
                        </Card.Text>
                        <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                }
            })
        }
    </>);
}