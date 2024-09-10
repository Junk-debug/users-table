import { useGetUsersQuery } from "./api/api";

function App() {
  const { isLoading, data: users } = useGetUsersQuery();
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div>
      Users:
      {users && users.map((user) => <div>{user.name}</div>)}
    </div>
  );
}

export default App;
