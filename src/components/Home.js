import {React} from "react";
// import profilePic from "../images/profilepic.png";
import handymantemplate from "../images/handymantemplate.png";
import yogatemplate from "../images/YogaTemplate.png";
import {Button, Carousel, Row, Col} from "react-bootstrap";

function Home() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }  
  window.addEventListener("scroll", reveal);
  return (
<div>
<section class="text-center" id="home">
  <div class="d-flex justify-content-center">
    <div class="card slideInLeft" style={{
        marginTop: "100px",
        background: "hsla(0, 0%, 100%, 0.0)",
        border: 'none',
        maxWidth: '800px',
        color: 'black',
        boxShadow: 'none'
    }}>
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-7">
            <h2 class="fw-bold mb-3" style={{textAlign: 'left', fontSize: '50px', color: '#003459'}}>Let me help create <br /> your ideal<span style={{color: '#62b6cb'}}> website.</span></h2>
            <h6 class="fw-bold mb-3" style={{textAlign: 'left', color: 'black'}}>Explore a selection of the websites I've expertly developed, and feel free to reach out to initiate a conversation.</h6>
            <Button className="button-pop-out" style={{marginTop: '50px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '50%', height: '50px', width: '150px'}}>Get in Contact</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="card slideInRight" style={{
        marginTop: "0px",
        background: "hsla(0, 0%, 100%, 0.0)",
        border: 'none',
        maxWidth: '800px',
        color: 'black',
        boxShadow: 'none'
    }}>
      <div class="card-body">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
          <img src='https://s3-us-west-2.amazonaws.com/netpro-blog/blog/wp-content/uploads/2017/08/08055421/Choosing-a-Web-Developer.jpg' alt="Developer" style={{ height: '500px', width: 'auto', borderRadius: '50%' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<center>
<section className="mt-5">
  <Carousel data-bs-theme="dark" fade style={{ maxWidth: '1500px' }}>
    <Carousel.Item>
      <Row>
        <Col xs={6}>
          <Carousel.Caption style={{ textAlign: 'left', marginBottom: '100px', color: 'black' }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Col>
        <Col xs={6}>
          <div style={{ marginRight: '150px' }}>
            <img
              src={handymantemplate}
              className="img-fluid"
              alt="..."
            />
          </div>
        </Col>
      </Row>
    </Carousel.Item>
    {/* Repeat similar structure for other items */}
    <Carousel.Item>
      <Row>
        <Col xs={6}>
          <Carousel.Caption style={{ textAlign: 'left', marginBottom: '100px', color: 'black' }}>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Col>
        <Col xs={6}>
          <div style={{ marginRight: '150px' }}>
            <img
              src={yogatemplate}
              className="img-fluid"
              alt="..."
            />
          </div>
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
</section>
</center>
</div>
  );
}

export default Home;