import React, { Component } from "react"
import { connect } from "react-redux"
import ComC from "./ComC.jsx"

// const MyContext = React.createContext('gray');
import MyContext from "../Mycontext.js"


class ComB extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static contextType = MyContext;

    render() {
        return (
            <div style={{ width: '800px', border: '2px solid pink' }} >
                <h2>B组件</h2>
                <div>
                    count: {this.props.count}, <br/>
                    context: {this.context}
                </div>
                <MyContext.Provider value="dark">
                    <ComC />
                </MyContext.Provider>
            </div>
        )
    }
}

// 实现第一个参数mapStoreStateToProps ,
// 通过connect加强之后，在组件中可以 通过  this.props.属性名  去获取属性
const mapStoreStateToProps = (state) => {
    return state;
}



export default connect(mapStoreStateToProps)(ComB);