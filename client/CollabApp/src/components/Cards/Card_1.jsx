import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { useJoinProjectMutation } from '../../redux/api/api';
import { AiChat } from "../../aiChat";

function BasicExample(props) {
  const [show, setShow] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading animation
  const navigate = useNavigate();
  const [highlight, setHighlight] = useState("");
  const [joinProject] = useJoinProjectMutation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePasswordPromptClose = () => setShowPasswordPrompt(false);
  const handlePasswordPromptShow = () => setShowPasswordPrompt(true);

  const handleJoinProject = () => {
    handlePasswordPromptShow();
  };

  const handlePasswordSubmit = async () => {
    if (password === props.password) {
      try {
        const projectId = props.id;
        const { data } = await joinProject(projectId);
        navigate(0);
      } catch (e) {
        console.log(e);
      }
      handlePasswordPromptClose();
    } else {
      alert('Incorrect password. Please try again.');
      setPassword("");
    }
  };

  const generateHighlights = async () => {
    setIsLoading(true); // Show loading animation

    try {
      // Simulate API call with a timeout
      const PROMPT = ", On the basis of the given title and summary, generate a summary in 150 words with bullet points.";
      const title = props.title;
      const summary = props.summary;
      
      // Ensure AiChat.sendMessage is a promise-returning function
      const result = await AiChat.sendMessage("Title:" + title + " Summary:" + summary + PROMPT);
      
      // Assume result contains the response text from the API
      setHighlight(JSON.parse(result.response.text()).summary);

    } catch (error) {
      console.error('Error generating highlights:', error);
    } finally {
      setIsLoading(false); // Hide loading animation
    }
  }

  return (
    <>
      <Card style={{ width: '18rem', background: 'rgba(0, 0, 0, 0.2)', color: '#FBEAEB', borderRadius: '8px', overflow: 'hidden' }}>
        <Card.Img variant="top" src={props.img} style={{ height: '150px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.summary}
          </Card.Text>
          <Button variant="light" style={{ color: '#333', backgroundColor: '#FBEAEB' }} onClick={handleShow}>
            View Details
          </Button>
        </Card.Body>
      </Card>

      {/* Main Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <img 
              src={props.img} 
              alt={props.title} 
              style={{ 
                width: '40%', 
                height: 'auto', 
                objectFit: 'cover', 
                marginRight: '1rem' 
              }} 
            />
            <div style={{ width: '60%' }}>
              <p>{props.summary}</p>
              <p>{highlight}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleJoinProject}>
            Join Project
          </Button>
          <Button variant="primary" onClick={generateHighlights} disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </>
            ) : (
              'Generate Highlights'
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Password Prompt Modal */}
      <Modal show={showPasswordPrompt} onHide={handlePasswordPromptClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ width: '100%' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePasswordPromptClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasicExample;
