import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Create(){
    return (
        <div>
            <Navbar />
            <div className="form-container">
                <div className="form-wrapper">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="Title" />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Summary" 
                        style={{ resize: 'none' }} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Upload File</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Create
                </Button>
                </Form>
            </div>
            </div>
        </div>
    );
}


export default Create;