import { useState } from "react";
import { cn } from "../lib/utils";

import { User } from "../api/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Filter } from "lucide-react";

const SearchInput = ({
  className,
  style,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={cn("relative w-full", className)} style={style}>
      <Filter className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2" />
      <Input
        type="search"
        className="text-foreground pl-8 box-border border-none bg-transparent focus-visible:ring-offset-1 ring-offset-transparent focus-visible:ring-1 focus-visible:ring-primary/50"
        {...props}
      />
    </div>
  );
};

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
        {users.map((user) => (
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
