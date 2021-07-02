import React , {Component} from "react"

import { connect } from "react-redux";
import store from "../redux/store.js"

class ComA extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    increment(){
        // 派发 action
        this.props.incr(7);
        
    }

    decrement(){
        // 派发 action
        this.props.decr();
    }

    asyncDecrement(){
        this.props.asyncIncr();
    }

    componentDidMount(){
        // 订阅仓库中state的数据变化，可以做相应的业务逻辑，如更新组件的UI结构
        store.subscribe(()=>{
            console.log('subscribe-收到变化了')
            // 获取仓库数据 store.getState();
            var storeState = store.getState();
            
             // 业务逻辑...
           
        })
    }

    render(){
        return (
            <div style={{width: '800px',border: '2px solid red'}}>
                <h2>A组件</h2>
                <button onClick={ ()=>this.increment() }>+ increment</button> 
                    <br/>
                    <br/>

                <button onClick={ ()=>this.decrement() }>- decrement</button>

                    <br/>
                    <br/>

                 <button onClick={ ()=>this.asyncDecrement() }> async increment </button>
                <div>
                    count： {this.props.count}
                </div>
                
            </div>
        )
    }
}
// connect有两个参数，类型都是函数
// 参数1：mapStoreStateToProps,用来获取仓库中的数据,在组件中通过 this.props.属性名 就可以获取属性
const mapStateToProps = (state,props) => {
    return state;
}
// 参数2：mapReducerToProps,用来修改仓库中的数据，在组件中就可以通过 this.props.reducer方法名 来触发相应的action
const mapDispatchToProps = (dispatch,props) => {

    return {
        incr: (goods_number) => {
            // 通过dispath去调用对应的action，必须指定type属性
            dispatch({type:"increment",payload:{goods_number}})
        },
        decr: () => {
            // 通过dispath去调用对应的action，必须指定type属性
            dispatch({type:"decrement"})
        },
        asyncIncr: ()=>{
            setTimeout(() => {
                // 异步操作 axios.get()...
                dispatch({type:"increment",payload:{goods_number:10}})
            }, 2000);
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ComA)