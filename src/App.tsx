import { LoaderCircleIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "./components/ui/card";

import { useGetUsersQuery } from "./api/api";

import Layout from "./components/layout";
import UsersTable from "./components/users-table";

function App() {
  const { isLoading, data: users } = useGetUsersQuery();

  return (
    <Layout>
      <Card className="h-[95%] overflow-y-auto flex flex-col">
        <CardHeader className="text-3xl font-bold">Users list</CardHeader>
        <CardContent className="flex-grow">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoaderCircleIcon className="w-10 h-10 animate-spin" />
            </div>
          ) : (
            users && <UsersTable users={users} />
          )}
        </CardContent>
      </Card>
    </Layout>
  );
}

export default App;
