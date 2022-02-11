import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row, Button } from "reactstrap";
import Slider from "react-slick";


import HomeUrl from '../../assets/images/home-border.png';

import Img1 from '../../assets/images/users/img-1.png';
import Img2 from '../../assets/images/users/img-2.png';
import Img3 from '../../assets/images/users/img-3.png';
import Img4 from '../../assets/images/users/img-4.png';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 1,
          name: 'For Investors',
          btn: 'Invest Now'
        },
        {
          id: 2,
          name: 'For Startup',
          btn: 'Raise Funds'
        },
      ],
    };
  }

  render() {
    var temsettings = {
      autoplay: true,
      dots: true,
      speed: 300,
      infinite: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    const teamslides = this.state.teams.map((team, teamindex) => {
      return (
        <div className="team-box p-3" key={teamindex}>
          <Row className="align-items-center">
            <Col lg={7} style={{padding: "1px", margin:"50px" }}>
              <div className="mt-4" style={{textAlign: "center" }}>
                <h5 className="mt-2">{team.name}</h5>
                <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      {/* <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link> */}
                      <Button>{team.btn}</Button>
                    </li>
                  </ul>
                </div>
              </div>
              </Col>
          </Row>
        </div>
      );
    });
    return (
      <React.Fragment>
                  <Slider {...temsettings}>
                    {teamslides}
                  </Slider>
      </React.Fragment>
    );
  }
}
