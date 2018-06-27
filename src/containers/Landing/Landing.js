import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <Container className="financial-container">
            <Row className="financial-row">
              <Col className="financial-col">
                <div className="financial-parent d-flex">
                  <div className="overflow-hidden parent-left">
                    <div className="fp-header">
                      Financial Planning.
                        <br/>
                      Reinvented.
                    </div>
                    <div className="fp-body">Reach your goals with personal financial guidance.</div>
                    <Button className="get-free"> Get a FREE financial checkup </Button>
                  </div>
                  <div className="financial-img-container d-flex align-items-center overflow-hidden parent-right">
                    <img
                      alt=""
                      className="financial-img"
                      src={require('../../img/home-hero.jpg')}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="financial-col-2">
                <div className="overflow-hidden text-center parent-left">
                  <div className="fp-header text-center mb-2">
                    Financial Planning.
                      <br/>
                    Reinvented.
                  </div>
                  <div className="fp-body m-auto text-center mb-3 p-3">Reach your goals with personal financial guidance.</div>
                  <Button className="get-free d-block m-auto mb-2 p-2"> Get a FREE financial checkup </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="featured-parent d-flex flex-column">
                  <div className="text-center"><h3 className="featured-on">Featured on</h3></div>
                    <div className="d-flex justify-content-between flex-wrap">
                      <img
                        alt=""
                        className="company"
                        src={require('../../img/press-fortune.svg')}
                      />
                      <img
                        alt=""
                        className="company"
                        src={require('../../img/press-bi.svg')}
                      />
                      <img
                        alt=""
                        className="company"
                        src={require('../../img/press-ab.svg')}
                      />
                      <img
                        alt=""
                        className="company"
                        src={require('../../img/press-cnn.svg')}
                      />
                      <img
                        alt=""
                        className="company"
                        src={require('../../img/press-chase.svg')}
                      />
                      <img
                        alt=""
                        className="company"
                        src={require('../../img/press-tc.svg')}
                      />
                    </div>
                </div>
              </Col>
            </Row>
            <Row className="bleed-row">
              <Col md="4" className="d-flex align-items-center">
                <img
                  alt=""
                  className="bleed-img"
                  src={require('../../img/home-bleed.jpg')}
                />
              </Col>
              <Col md="8">
                <div className="personal-title">Like a personal trainer for your money</div>
                <Row>
                  <Col xs="12" md="6" className="mt-3">
                    <div className="personal-content-parent">
                      <div className="personal-content-title">The knowledge of a CFP®</div>
                      <div className="personal-content-body">
                        We’re Certified Financial Planners™, experts at looking at your whole financial life. And we’re
                        actual people who will get to know you —because you’re more than your name and account balance.
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="6" className="mt-3">
                    <div className="personal-content-parent">
                      <div className="personal-content-title">A plan for life’s big events</div>
                      <div className="personal-content-body">
                        Thinking about buying a house? Getting ready to start a family? Looking to make your money go further? We’ll help you understand the impact on your finances and guide you on next steps.
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="6" className="mt-5">
                    <div className="personal-content-parent">
                      <div className="personal-content-title">Modern tools. Smarter price.</div>
                      <div className="personal-content-body">
                        We’ve compiled decades of research to create a robust financial planning engine that enables our advisors to give you personalized advice at a fraction of the cost of a traditional advisor.
                      </div>
                    </div>
                  </Col> 
                  <Col xs="12" md="6" className="mt-5">
                    <div className="personal-content-parent">
                      <div className="personal-content-title">Not just 9 to 5</div>
                      <div className="personal-content-body">
                      It’s true: money never sleeps, and your money doesn’t take weekends off. Neither do we. Email, chat, or text us anytime (seriously!) with questions.
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <img
                  alt=""
                  className="award-img"
                  src={require('../../img/award.svg')}
                />
              </Col>
              <Col md="8">
                <div className="award-right-parent d-flex">
                  <div className="award-right-img-container justify-content-center">
                    <img
                      alt=""
                      className="award-logo-img"
                      width="90"
                      height="90"
                      src={require('../../img/award-logo.svg')}
                    />
                  </div>
                  <div className="fiduciary-parent d-flex flex-column">
                    <div className="fiduciary-header">
                      Fiduciary
                    </div>
                    <div className="fiduciary-body">
                      Grove is a Registered Investment Advisor and we hold ourselves to the fiduciary standard of care
                      — to act solely in your best interest when offering personalized financial advice.In addition,
                      the creation of your financial plan will be overseen by a Certified Financial Planner™.
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="how-row">
              <Col>
                <div className="how-title">How it works</div>
                <Row>
                  <Col md="4">
                    <div className="how-item-parent d-flex flex-column">
                      <div className="hi-number">
                        1
                      </div>
                      <div className="hi-header">
                        Meet your advisor
                      </div>
                      <div className="hi-body">
                        After filling out your online profile and syncing your accounts, you'll speak with a CFP® who will get to know you, discuss your current situation, and create your personalized financial plan.
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="how-item-parent d-flex flex-column">
                      <div className="hi-number">
                        2
                      </div>
                      <div className="hi-header">
                        Get your plan
                      </div>
                      <div className="hi-body">
                        Your plan (and future plan updates) include actionable steps, like how to allocate your money between savings and investment accounts and how to best take advantage of your employer's retirement benefits.
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="how-item-parent d-flex flex-column">
                      <div className="hi-number">
                        3
                      </div>
                      <div className="hi-header">
                        Stay on track
                      </div>
                      <div className="hi-body">
                        Grove will monitor your progress, let you know when there are important actions to take, and schedule an annual checkup to make sure your plan stays up to date. Of course, we are always here for help along the way!
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className="learn-parent">
            <div className="learn-bg">
              <Container>
                <Row>
                  <Col>
                    <div className="learn-container">
                      <div className="lc-parent d-flex flex-column justify-content-center">
                        <div className="lc-header">
                          Learn more
                        </div>
                        <div className="lc-subheader">
                          Join a webinar with one of our advisors
                        </div>
                        <div className="lc-reg-container">
                          <Button className="lc-reg-btn">
                            Register
                          </Button>
                        </div>
                        <div className="lc-footer">
                          See a sample plan. Ask questions. No commitment.
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <Container>
            <Row>
              <Col>
                <div className="citations-parent d-flex flex-column">
                  <div className="citations-header">
                    CITATIONS
                  </div>
                  <div className="citations-item d-flex ">
                    <div className="ci-number-container align-self-start">  
                      <div className="ci-number">
                        1
                      </div>
                    </div>
                    <div className="ci-content">
                      Financial Planning Institute Research and Practice Institute Financial Planning in 2015: Today’s Demands, Tomorrow’s Challenges.
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <div className="about-parent d-flex">
                  <div className="about-1">
                    <div className="about-title">COMPANY</div>
                    <div className="about-items d-flex flex-column">
                      <div className="about-item">
                        About us
                      </div>
                      <div className="about-item">
                        Our Advisors
                      </div>
                      <div className="about-item">
                        FAQ
                      </div>
                      <div className="about-item">
                        Careers
                      </div>
                    </div>
                  </div>
                  <div className="about-2">
                    <div className="about-title">LEGAL</div>
                    <div className="about-items d-flex flex-column">
                      <div className="about-item">
                        Privacy Policy
                      </div>
                      <div className="about-item">
                        Terms of Service
                      </div>
                    </div>
                  </div>
                  <div className="about-3 d-flex flex-column">
                    <div className="address1">
                      <strong style={{ color: 'black' }}>Grove Advisors LLC</strong>
                    </div>
                    <div className="address2">
                      487 Bryant Street, 3rd Floor
                        <br />
                      San Francisco, CA 94107
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
