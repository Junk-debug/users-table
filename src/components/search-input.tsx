import { cn } from "../lib/utils";
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

export default SearchInput;
