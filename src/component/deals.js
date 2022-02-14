import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 

//import images
import Img1 from '../assets/images/features/img-1.png';
import HomeUrl from '../assets/images/home-border.png';
import img from '../assets/images/users/img.jpg' ; 

export default class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "InternKhoj",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account',
          titlePrimary: false,
          percentageRaised: '$9.99',
          tag: [
            "Education","Internship"
          ],
          page: "/Internkhoj"
        },
        {
          id: 2,
          title: "Startup 2",
          img: img,
          titlePrimary: true,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account-multiple text-primary',
          percentageRaised: '20', 
          tag: [
            "fintech","blockchain"
          ],
        },
        {
          id: 3,
          title: "Startup 3",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          titlePrimary: false,
          icon: 'mdi-account-multiple-plus',
          percentageRaised: '20', 
          tag: [
            "fintech","blockchain",
            
          ],
          page: "/Internkhoj"
        },
        {
            id: 4,
            title: "Startup 3",
            img: img,
            description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
            titlePrimary: false,
            icon: 'mdi-account-multiple-plus',
            percentageRaised: '20', 
            tag: [
              "fintech","blockchain",
            ],
          },
          {
            id: 5,
            title: "Startup 3",
            img: img,
            description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
            titlePrimary: false,
            icon: 'mdi-account-multiple-plus',
            percentageRaised: '20', 
            tag: [
              "fintech","blockchain",
            ],
          },
          {
            id: 6,
            title: "Startup 3",
            img: img,
            description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
            titlePrimary: false,
            icon: 'mdi-account-multiple-plus',
            percentageRaised: '20', 
            tag: [
              "fintech","blockchain",
            ],
          },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" style={{padding: '100px 0px 0px 0px'}}>
          <Container>
              {/* Render Pricing items */}
              <Row className = "mt-5 pt-4"> 
              {this.state.pricing.map((item, key) => (
                <Col lg = "4" key={key}>
                  <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                       { item.description }
                      </Card.Text>
                      <div > 
                      <i>Tags:</i> {' '}
                      
                      {item.tag.map(
                        (t) => {
                          return ( 
                            <>
                            <Badge color="success" style={{fontSize: '17px'}}>{t}</Badge>
                            {' '}
                            </>
                          ) ; 
                        }
                      )}
                      <h1></h1>
                      </div>
                      <Button href='{item.page}' variant="outline-primary">Read more</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
