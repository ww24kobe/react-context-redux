import React, { Component } from "react"

import ComE from "./ComE.jsx";

import MyThemeContext from "../MyThemeContext.js"

export default class ComD extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = MyThemeContext;
   
    render() {
        return (
            <div style={{ width: '500px', border: '2px solid #666' }} >
                <h2>D组件</h2>
                <div>context: {this.context}</div>
                <ComE />
            </div>
        )
    }
}
