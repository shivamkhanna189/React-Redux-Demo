
import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user",
    initialState: {
        userList : ["FIrst" ,"second" , "third"]
    },
    reducers: {
        
        addUser: (state, action) => {
          state.userList.push(action.payload)  
        },
        deleteUser: (state, action) => {
            state.userList.splice(action.payload , 1)
        }
    }
})

export  const {deleteUser, addUser} = UserSlice.actions

export default UserSlice.reducer;
