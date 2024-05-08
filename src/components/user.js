import { addUser } from "../utils/UserSlice";
import UserList from "./userlist"
import { useDispatch } from "react-redux";
import { useState} from "react"

const User = () => {
    const dispatch = useDispatch()
    const [userValue, setUserValue] = useState('');

    return (<div>
        <div>
            <input type="text" onChange={(event)=>setUserValue(event.target.value)}></input>
            <button onClick={ ()=>dispatch(addUser(userValue))}>Add User</button>
        </div>
        <UserList></UserList>
    </div>)
}

export default User; 