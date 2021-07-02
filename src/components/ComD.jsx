import React, { Component } from "react"

import Mycontext from "../Mycontext.js"

export default class ComD extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = Mycontext;

    render() {
        return (
            <div style={{ width: '500px', border: '2px solid #ccc' }} >
                <h2>D组件</h2>
                <div>context: {this.context}</div>
            </div>
        )
    }
}
