import React, { Component } from "react"

import ComD from "./ComD.jsx";


export default class ComC extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width: '600px',border: '2px solid blue' }} >
                <h2>C组件</h2>
                <ComD />
            </div>
        )
    }
}
