import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem', background: 'rgba(0, 0, 0, 0.2)', color: '#FBEAEB', borderRadius: '8px', overflow: 'hidden' }}>
      <Card.Img variant="top" src={props.img} style={{ height: '150px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.summary}
        </Card.Text>
        <Button variant="light" style={{ color: '#333', backgroundColor: '#FBEAEB' }}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
