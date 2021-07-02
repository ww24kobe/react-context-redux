import React, { useContext } from "react"

import MyThemeContext from "../MyThemeContext.js"

export default function ComE(props){
    const theme = useContext(MyThemeContext)
    return (
            <div style={{ width: '200px', border: '2px solid gray' }} >
                <MyThemeContext.Consumer>
                    { value => <p>context: {value} - {theme}</p>  }
                 </MyThemeContext.Consumer>
            </div>
        )
}
