import React from 'react';
import {
  Form,
  Jumbotron,
  Button,
  ListGroup,
} from 'react-bootstrap'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Jumbotron>
          <div className="d-flex justify-content-center">
            <div className='col-sm-5'>
              <h1>What's for Dinner?</h1>
              <p>
                Use the search below to help you with dinner ideas based on what you already have in the kitchen.  Just enter a few ingredients, and get inspired!
              </p>
              <hr/>
              <h5>Ingredients</h5>
              <div className='form-inline'>
                <Form.Control type="text" placeholder="comman, separated, list" />
                <Button variant="outline-primary">Search</Button>
              </div>
            </div>
          </div>

        </Jumbotron>
        <div className="d-flex justify-content-center">
          <div className='col-sm-5'>
            <ListGroup>
            <Button type="button" class="btn btn-outline-primary"><ListGroup.Item>Hummus</ListGroup.Item></Button>
              <Button variant="outline-primary"> <ListGroup.Item>Hummus</ListGroup.Item></Button>
              <Button variant="outline-primary"> <ListGroup.Item>Baba Ganoush</ListGroup.Item></Button>
              <Button variant="outline-primary"> <ListGroup.Item>Pita Bread</ListGroup.Item></Button>
              <Button variant="outline-primary"> <ListGroup.Item>Kofta</ListGroup.Item></Button>
              <Button variant="outline-primary"> <ListGroup.Item>Falafel</ListGroup.Item></Button>
            </ListGroup>
          </div>
        </div>j

      </div>
    );
  }
}

export default App;
