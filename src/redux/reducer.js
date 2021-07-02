
// 定义仓库中的初始化state
const initState = {
    count: 0
}

// reducer: 对state数据进行操作
exports.reducer = (state = initState,action ) => {
    console.log('reducer被触发=>action',action)
    switch(action.type){
        case 'increment': // action名字
            return {
                // 修改state中的count
                // count: state.count + 1
                count: state.count + action.payload.goods_number
            }
        case 'decrement':
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}
