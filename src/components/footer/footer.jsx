// import CardFooter from 'react-bootstrap/CardFooter'
import { CardGroup, Card, } from "react-bootstrap"
const Footer = () => {

    return (
        <footer>
            <CardGroup>
                <Card>

                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardGroup>

        </footer>
    )
}


export default Footer