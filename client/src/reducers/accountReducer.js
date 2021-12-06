import {SET_ACCOUNT,
    ACCOUNT_LOAD_SUCCESS,
    ACCOUNT_LOAD_FAIL,
    ACCOUNT_UPDATE_SUCCESS,
    DELETE_ACCOUNT_SUCESS,
    PRODUCT_LOAD_SUCCESS} from '../contexts/contants';



export const accountReducer=(state,action)=>{
    const { type,payload:{isAuthenticated,account,accounts}} = action;
    switch(type){
        case SET_ACCOUNT:
            return{ 
                ...state,
                accountLoading:false,
                isAuthenticated,
                account
            }
        case ACCOUNT_LOAD_SUCCESS:
            console.log(accounts)
            return {
                ...state,
                accountsLoading:false,
                isAuthenticated,
                accounts
            }

        default:
            return state;
    }
}
