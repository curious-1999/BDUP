import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 

//import images
import Img1 from '../../assets/images/features/img-1.png';
import HomeUrl from '../../assets/images/home-border.png';
import img from '../../assets/images/users/img-1.png' ; 

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "Starter",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account',
          titlePrimary: false,
          percentageRaised: '30',
          tag: [
            "fintech","blockchain"
          ],
        },
        {
          id: 2,
          title: "Personal",
          img: img,
          titlePrimary: true,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account-multiple text-primary',
          percentageRaised: '20', 
          pricingTag: true,
          tag: [
            "fintech","blockchain"
          ],
        },
        {
          id: 3,
          title: "Ultimate",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          titlePrimary: false,
          icon: 'mdi-account-multiple-plus',
          percentageRaised: '20', 
          pricingTag: false,
          tag: [
            "fintech","blockchain","fintech","blockchain","fintech","blockchain",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>Founder</h2>
                  <p className="mt-4 text-muted">Praesent ut tincidunt massa vel facilisis dui Integer mattis quis
                  augue in rhoncus Integer mattis enim vel eros bibendum egestas id laoreet nisi
                  Praesent malesuada eros at bibendum eleifend Nam nec urna hendrerit interdum risus
                  Donec faucibus quis magna sit amet laoreet Maecenas finibus semper massa in finibus est
                            venenatis quis.</p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Explore More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section style={{
          margin: "50px"
        }}></section> */}
        {/* style={{borderRadius: "0px 0px 0px 350px"}} */}
        <section className="section bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>Co-founder</h2>
                  <p className="mt-4 text-muted">Praesent ut tincidunt massa vel facilisis dui Integer mattis quis
                  augue in rhoncus Integer mattis enim vel eros bibendum egestas id laoreet nisi
                  Praesent malesuada eros at bibendum eleifend Nam nec urna hendrerit interdum risus
                  Donec faucibus quis magna sit amet laoreet Maecenas finibus semper massa in finibus est
                            venenatis quis.</p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Explore More</Link>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
          </section>
      </React.Fragment>
    );
  }
}
