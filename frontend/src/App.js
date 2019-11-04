import React, { Component } from 'react';
import axios from 'axios'; 
import { Button, Card, Row, Col } from 'react-materialize';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Row>
        {this.state.todos.map(item => (
	  <Col m={6} s={12}>
	    <Card key={item.id} className="purple accent-1" textClassName="white-text" title={item.title}>
            <span>{item.body}</span>
	    </Card>
	  </Col>
        ))}
      </Row>
    );
  }
}

export default App;
