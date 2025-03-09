import { AdminInfoDiv } from "../styled/Admin.styled";

const AllUsers = () => {
  let users = [];
  return (
    <>
      <h2>All Users</h2>
      {users?.map((user) => (
        <AdminInfoDiv>
          <h5>{user?.username}</h5>
        </AdminInfoDiv>
      ))}
    </>
  );
};

export default AllUsers;
