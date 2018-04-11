const layout = {
  collapsibleFlag:false
}

const userInfo = {
  usersListData:[],
  listLength:0,
  userTableType:'',
  visible:false,
  loading:false,
  choosedUser:{},
  currentType:0,
  listLength:0,
}

// userTableType => get , edit , delete , add
// currentType : 0=>edit ; 1=>add

export const initState = {
  '@layout':layout,
  '@userInfo':userInfo
}
