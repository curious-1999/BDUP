import React, { Component } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row, Badge, Button} from "reactstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeUrl from '../../assets/images/home-border.png';


// Importing Section
import Navbar from "../../component/Navbar/NavBar";
import Clients from "./Clients";
import Footer from "../../component/Footer/Footer";
import details from "./Details";

const Content = () => {
  const ID = 1;
  const startup = details.find(
    (st) => (
      st.id === ID
      )
  )
  return (
    <React.Fragment>
      <section className="section bg-services" id="services">
      <Container>
        <Row className="align-items-center mt-5 pt-4" id="counter">
          <Col lg={6}>
            <div className="pr-4 mt-4">
              
              <h3>{startup.title}</h3>
              
              <p className="text-uppercase"><div > 
              <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>{startup.tag[0]}</Badge>
              <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>{startup.tag[1]}</Badge>
                  </div>
                  
                  </p>
              <p className="text-muted mt-3">
                {startup.description}
</p>
              <div className="mt-4 pt-1">
                <Link to="" className="btn btn-outline-primary">INVEST</Link>
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1" style={{border: '1px red', padding: '10px'}}>
          
            <ReactPlayer width = "100%" height = "300px" 
            controls = "true" url={startup.youtubelink}
            />
            
          </Col>
        </Row>
        
      </Container>
    </section>
    <section className="section bg-light bg-cta">
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <div className="text-center">
              <h2>Market Overview <span className="text-primary"> - Documents</span></h2>
              <p className="text-muted mt-3">A due diligence report is a document prepped by an independent third party due diligence team which includes information related to financials, compliance, key risks and a lot more.</p>
              <div className="mt-4 pt-2">
                <Link to="/Invest" className="btn btn-soft-primary btn-round mr-3 btn-rounded">Read More</Link>
                <Link to="#" className="btn btn-primary btn-round btn-rounded">{startup.duediligence}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <div className="title-box text-center"> <h3 className="title-heading mt-4">
{startup.foundername}


</h3>
</div>
    
    <section className="section" id="clients">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="title-box text-center">
              <h3 className="title-heading mt-4">Key Features of Startup</h3>  
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>


    <section className="section" id="contact">
    <Container>
        <Row>
          <Col lg={12}>
            <div className="title-box text-center">
              <h3 className="title-heading mt-4">Pitch Deck</h3>  
            </div>
          </Col>
        </Row>
        
      </Container>
      <Container>
      <Row> <Col lg={12}> <div className="title-box text-left"> 
      <h3 className="title-heading mt-4">Problem</h3> 
      <p className="text-muted f-17 mt-3">
      
      {startup.problem}
       </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>
        <Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
            Solution
        </h3> <p className="text-muted f-17 mt-3">
        {startup.solution}

 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Product
</h3> <p className="text-muted f-17 mt-3">
{startup.product}


</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Traction 
</h3> <p className="text-muted f-17 mt-3">
{startup.traction}
</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Customers 
</h3> <p className="text-muted f-17 mt-3">
{startup.customers}
</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>
<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Business Model

</h3> <p className="text-muted f-17 mt-3">
{startup.businessmodel}
</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Competition


</h3> <p className="text-muted f-17 mt-3">
{startup.competition}

</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>


<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Usage Of Funds


</h3> <p className="text-muted f-17 mt-3">
{startup.fundsusage}

</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Vision 


</h3> <p className="text-muted f-17 mt-3">
{startup.vision}

</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Exit 


</h3> <p className="text-muted f-17 mt-3">
{startup.exit}


</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>


      </Container>
    </section>
  </React.Fragment>
  ) ; 
}


class Startups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        // { id: 1, idnm: "home", navheading: "Home" },
        // { id: 3, idnm: "services", navheading: "Services" },
        // { id: 4, idnm: "pricing", navheading: "Pricing" },
        // { id: 5, idnm: "team", navheading: "Team" },
        // { id: 6, idnm: "clients", navheading: "Clients" },
        // { id: 7, idnm: "contact", navheading: "Contact" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      fixTop : true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          />

          <Content />

          {/* Importing Clients */}
          <Clients />

          {/* Importing Footer */}
          <Footer />

      </React.Fragment>
    );
  }
}
export default Startups;
