import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function FollowingList(props) {
    const [showList, setShow] = useState(false)
    const [followingList, setFollowingList] = useState([])
    const [followingList2, setFollowingList2] = useState([])
    var followingList3 = [1, 2, 3]
    const params = useParams()

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }

    useEffect(() => {
        async function mapIDtoName(temp2) {
            axios.all(
                temp2.map(async (id) => {
                    const res = await axios.get(
                        `https://ezdrive-test-3.herokuapp.com/${id}`,
                    )
                    await console.log(res)
                    followingList.push(await res.data.data)
                    await console.log(followingList)
                }),
            )
            return followingList
        }

        async function sendGet() {
            const res = await axios.get(
                `https://ezdrive-test-3.herokuapp.com/students/${params.studentId}`,
            )
            console.log(res.data.data.followedInstructors)
            setFollowingList(res.data.data.followedInstructors)
        }
        sendGet()
    }, [])

    return (
        <>
            <Modal show={props.showBoolean} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Following</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        {followingList.map((instructor) => {
                            return <li>{instructor}</li>
                        })}
                    </ol>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.onClose}>
                        Go back
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}