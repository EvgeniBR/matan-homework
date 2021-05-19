const { UserActionTypes } = require("./user.types");


const setCurrentUser = user =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

module.exports=setCurrentUser