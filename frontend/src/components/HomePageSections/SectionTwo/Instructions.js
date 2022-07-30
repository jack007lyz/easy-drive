import React, { useState } from 'react'
import './Instructions.scss'
import dataForInstructions from '../../../utils/dataForInstructions'
import { v4 as uuidv4 } from 'uuid'
import { Container, Row, Col } from 'react-bootstrap'

const Instructions = () => {
    const [selected, setSelected] = useState(0)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        return setSelected(i)
    }

    return (
        <section className="banner_instruction" id="home_instructions">
            <Container>
                <Row className="aligh-items-center">
                    <div className="wrapper_instructions">
                        <div className="section_title_two">
                            To have a better experience
                        </div>
                        <div className="accordion_instructions">
                            {dataForInstructions.map((item, idx) => (
                                <div
                                    className="item_instructions"
                                    onClick={() => toggle(idx)}
                                    key={uuidv4()}
                                >
                                    <div className="title_instructions">
                                        <div className="title_text_instructions">
                                            {item.step}
                                        </div>
                                        <span>
                                            {selected === idx ? '-' : '+'}
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            selected === idx
                                                ? 'content_instructions show'
                                                : 'content_instructions'
                                        }
                                    >
                                        <h2>{item.content}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Instructions
