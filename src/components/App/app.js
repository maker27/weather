import React, { Component } from "react";

import "./app.css";
import "bootswatch/dist/minty/bootstrap.css";

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

import WeatherDisplay from '../WeatherDisplay';

import getCities from './cities.js';
import LoadingIndicator from "../LoadingIndicator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: null,
      activePlace: 0
    };
  }

  componentDidMount(){
	  this.setState({
		  cities: getCities()
	  });
  }

  render() {
	const {cities, activePlace} = this.state;
	if(!cities) return <LoadingIndicator/>;

    return (
      <div>
      <Navbar>
          <Navbar.Brand>
            Погода
          </Navbar.Brand>
      </Navbar>
        <Container>
          <Row>
            <Col md={4} sm={4}>
              <h3>Город</h3>
              <Nav
                variant="pills flex-column"
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {cities.map((place, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index}>{place.name}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} city={cities[activePlace]} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
