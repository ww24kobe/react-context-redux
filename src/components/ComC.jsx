import React, { Component } from "react"

import ComD from "./ComD.jsx";

import MyThemeContext from "../MyThemeContext"


export default class ComC extends Component {
    constructor(props) {
        super(props);
    }
    static contextType = MyThemeContext
    render() {
        return (
            <div style={{width: '600px',border: '2px solid blue' }} >
                <h2>C组件</h2>
                <div> context: {this.context} </div>
                <ComD />
            </div>
        )
    }
}
