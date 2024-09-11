import { useState } from "react";
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

type Filters = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

const initialFilters = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filterUsers = (users: User[], filters: Filters) =>
  users.filter((user) => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );
  });

export default function UsersTable({ users }: { users: User[] }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFiltersChange = (
    key: keyof Filters,
    value: Filters[keyof Filters]
  ) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">
            <SearchInput
              placeholder="Name"
              value={filters.name}
              onChange={(e) => handleFiltersChange("name", e.target.value)}
              className="min-w-[110px]"
            />
          </TableHead>
          <TableHead className="w-[200px]">
            <SearchInput
              placeholder="Username"
              value={filters.username}
              onChange={(e) => handleFiltersChange("username", e.target.value)}
              className="min-w-[150px]"
            />
          </TableHead>
          <TableHead className="w-[220px]">
            <SearchInput
              placeholder="Email"
              className="min-w-[180px]"
              value={filters.email}
              onChange={(e) => handleFiltersChange("email", e.target.value)}
            />
          </TableHead>
          <TableHead className="w-[230px] text-left">
            <SearchInput
              placeholder="Phone"
              className="min-w-[200px]"
              onChange={(e) => handleFiltersChange("phone", e.target.value)}
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
