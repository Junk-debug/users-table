import { useAppDispatch } from "@/redux/redux";
import { Button } from "./ui/button";
import { resetFilters } from "@/redux/slices/filters-slice";

const ClearFiltersButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const dispatch = useAppDispatch();

  return (
    <Button onClick={() => dispatch(resetFilters())} {...props}>
      Clear all filters
    </Button>
  );
};

export default ClearFiltersButton;
