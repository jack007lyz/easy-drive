import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from './header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const StartJourney = () => {
    return (
        <div>
            <div className="section_title">Start your journey</div>
            <section className="banner" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? 'animate__animated animate__zoomIn'
                                                : ''
                                        }
                                    >
                                        <img src={headerImg} alt="Header Img" />
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default StartJourney
