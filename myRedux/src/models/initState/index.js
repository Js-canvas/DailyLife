const indexPage = {
    usersListData:[],
    choosedUser:{}
}

const users = {
    usersId:"11223344"
}

const modalBox = {
    visible:false,
    loading:false,
    currentType:0,
    listLength:0,
    operationType:''
}

// currentType:0=>edit ; 1=>add

export const initState = {
    '@indexPage':indexPage,
    '@users':users,
    '@modalBox':modalBox
}
