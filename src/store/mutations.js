// 设置商品详细信息
export const UID = (state, data) => {
    state.uid = data
}
export const CRFTEMPLATEEDITEMS = (state, data) => {
    state.CrfTemplateEditItems = data
}

export const CRFTEMPLATELEFTCHILDRENITEM = (state, data) => {
    console.log(data,'vuex')
    state.CrfTemplateLeftChildrenItem = data
}

