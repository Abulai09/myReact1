import { createSelector } from "reselect"

let getUsersSelector = (state) => {
    return state.UsersPage.users
}


export const usersSelector = createSelector( getUsersSelector,
    (users) =>{
        return users.filter(u=>true)
})



export let pageSizeSelector = (state) =>{
    return state.UsersPage.pageSize
}

export let totalUsersCountSelector = (state) =>{
    return state.UsersPage.totalUsersCount
}

export let currentPageSelector = (state) =>{
    return state.UsersPage.currentPage
}

export let isFetchingSelector = (state) =>{
    return state.UsersPage.isFetching
}

export let isAuthSelector = (state) =>{
    return state.auth.isAuth
}