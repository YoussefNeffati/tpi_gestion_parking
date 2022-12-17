import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import miage from '../assets/images/MIAGE.jpg'
import angely from '../assets/images/ANGELY.jpg'
import valrose from '../assets/images/VALROSE.jpg'
import polytech from '../assets/images/POLYTECH.jpg'

function Home() {
  return (
    <div>
      <Row xs={1} md={2} className="g-4" >
        <Card style={{ width: '35rem', margin: '5%', paddingLeft: '0px', paddingRight: '0px'}}>
          <Card.Img variant="top" src={miage} />
          <Card.Body>
            <Card.Title>Campus Sophia Miage</Card.Title>
            <Card.Text>
              Le campus de Sophia Miage contient un parking de 50 places pour voitures.
            </Card.Text>
            <Button variant="primary">Voir les places disponible</Button>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '35rem', margin: '5%', paddingLeft: '0px', paddingRight: '0px' , pointerEvents: 'none', opacity: '0.7'}}>
          <Card.Img variant="top" src={polytech} />
          <Card.Body>
            <Card.Title>Campus Sophia Polytech</Card.Title>
            <Card.Text>
                Le campus de Campus Sophia Polytech contient un parking de 150 places pour voitures.
            </Card.Text>
            <Button variant="primary">Voir les places disponible</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '35rem', margin: '5%', paddingLeft: '0px', paddingRight: '0px' , pointerEvents: 'none', opacity: '0.7'}}>
          <Card.Img variant="top" src={angely} />
          <Card.Body>
            <Card.Title>Campus Nice St jean Angély</Card.Title>
            <Card.Text>
                Le campus de St jean Angély situé à Nice contient un parking de 250 places pour voitures.
            </Card.Text>
            <Button variant="primary">Voir les places disponible</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '35rem', margin: '5%', paddingLeft: '0px', paddingRight: '0px' , pointerEvents: 'none', opacity: '0.7'}}>
          <Card.Img variant="top" src={valrose} />
          <Card.Body>
            <Card.Title>Campus Nice Valrose</Card.Title>
            <Card.Text>
              Le campus de Valrose situé à Nice contient un parking de 225 places pour voitures.
            </Card.Text>
            <Button variant="primary">Voir les places disponible</Button>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default Home;
