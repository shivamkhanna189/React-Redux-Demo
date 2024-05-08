import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../utils/UserSlice";

const UserList = () => {
  const userList = useSelector(store => store.user.userList);
  const dispatch = useDispatch();
  return (
    <div> User List
      {userList.map((user, index) => (
        <p key={index}>
          {" "}
          {user}{" "}
          <button onClick={() => dispatch(deleteUser(index))}>
            Delete User
          </button>
        </p>
      ))}
    </div>
  );
};

export default UserList;
