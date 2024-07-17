import { Search as SearchIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { DebouncedState } from "usehooks-ts";
import { Input } from "./ui/input";

type Props = {
  onChange: DebouncedState<Dispatch<SetStateAction<string>>>;
};

const Search = ({ onChange }: Props) => {
  return (
    <search className="relative max-w-[46rem]">
      <form>
        <Input
          onChange={e => onChange(e.target.value)}
          name="search"
          id="search"
          placeholder="Search..."
          className="border focus-visible:ring-dodger-blue-800"
        />
      </form>
      <SearchIcon size={20} color="#88867E" className="absolute bottom-[0.625rem] right-4" />
    </search>
  );
};

export default Search;
