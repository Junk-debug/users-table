import { LoaderCircleIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "./components/ui/card";

import { useGetUsersQuery } from "./api/api";

import Layout from "./components/layout";
import UsersTable from "./components/users-table";
import ClearFiltersButton from "./components/clear-filters-button";
import { ThemeToggle } from "./components/theme-toggle";

function App() {
  const { isLoading, data: users } = useGetUsersQuery();

  return (
    <Layout>
      <Card className="h-[95%] overflow-y-auto flex flex-col">
        <CardHeader className="text-3xl font-bold flex flex-row gap-2 justify-between items-end">
          Users table
          <div className="flex flex-row gap-2">
            <ThemeToggle />
            <ClearFiltersButton />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoaderCircleIcon className="text-foreground/70 w-10 h-10 animate-spin" />
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
