import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

export default class ExerciseList extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            exercises:[]
        }
    }

    componentDidMount()
    {
        axios.get("/exercises")
        .then(res=>this.setState({exercises:res.data}))
    }

    render() {
        return (
            <div>
                <h1>Exercise List</h1>

                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Activity</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.exercises.map(res=>(
                                <tr>
                                    <td>{res.username}</td>
                                    <td>{res.activity}</td>
                                    <td>{res.duration}</td>
                                    <td>{res.date.substring(0, 10)}</td>
                                    <td>
                                        <Link>Edit</Link> | <Link>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
