
// 定义仓库中的初始化state
const initState = {
    count: 0,
    price: 9.9
}

// reducer: 对state数据进行操作
// 调用流程： 组件中dispath->reducer->action->操作数据state->ui 更新
exports.reducer = (state = initState,action ) => {
    switch(action.type){
        case 'increment': // action名字   
            return {
                // 修改state中的count
                // count: state.count + 1
                ...state,
                count: state.count + action.payload.goods_number
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }
        case 'changePrice': 
            console.log('reducer','changePrice')
            console.log('state',state)
            let {newPrice} = action
            return {
                ...state,
                price: newPrice
            }
        default:
    }
    return state;
}
