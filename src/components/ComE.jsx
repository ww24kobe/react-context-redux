import React, { useContext,useState,useEffect } from "react"

import MyThemeContext from "../MyThemeContext.js"

export default function ComE(props){
    const theme = useContext(MyThemeContext)
    const [count, setCount] = useState(100); // 类似 vue3 toRefs
    // console.log('setCount',typeof setCount)

        //   产生副作用
        useEffect(() => {
            console.log('useEffect')
            document.title = '加载完成';
            document.getElementById('box').innerHTML = '学习redux'
        });
   
    return (
            <div style={{ width: '200px', border: '2px solid gray' }} >
                <h2>E组件</h2>
                <MyThemeContext.Consumer>
                    { value => <p>context: {value}</p>  }
                 </MyThemeContext.Consumer>
                 <div>
                     count: {count} 
                     {/* <button onClick={()=>{ setCount(count+1) }}>  changeCount </button> */}
                 </div>
                 <div id="box">学习Hook</div>
                 <div>context: {theme}</div>
                
            </div>
        )
}
