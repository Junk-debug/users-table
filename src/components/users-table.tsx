import { User } from "../api/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SearchInput from "./search-input";
import {
  Filters,
  filterUsers,
  selectFilters,
  setFilter,
} from "@/redux/slices/filters-slice";
import { useAppDispatch, useAppSelector } from "@/redux/redux";

export default function UsersTable({ users }: { users: User[] }) {
  const filters = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  const handleFilterChange = (
    key: keyof Filters,
    value: Filters[keyof Filters]
  ) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">
            <SearchInput
              placeholder="Name"
              value={filters.name}
              onChange={(e) => handleFilterChange("name", e.target.value)}
              className="min-w-[110px]"
            />
          </TableHead>
          <TableHead className="w-[200px]">
            <SearchInput
              placeholder="Username"
              value={filters.username}
              onChange={(e) => handleFilterChange("username", e.target.value)}
              className="min-w-[150px]"
            />
          </TableHead>
          <TableHead className="w-[220px]">
            <SearchInput
              placeholder="Email"
              className="min-w-[180px]"
              value={filters.email}
              onChange={(e) => handleFilterChange("email", e.target.value)}
            />
          </TableHead>
          <TableHead className="w-[230px] text-left">
            <SearchInput
              placeholder="Phone"
              className="min-w-[200px]"
              onChange={(e) => handleFilterChange("phone", e.target.value)}
              value={filters.phone}
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filterUsers(users, filters).map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-left">{user.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
