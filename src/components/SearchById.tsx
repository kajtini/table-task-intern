type SearchByIdProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function SearchById({ search, setSearch }: SearchByIdProps) {
  return (
    <input
      className="focus:outline-none bg-white bg-opacity-5 text-white p-4 rounded-lg placeholder:text-white mb-5"
      type="number"
      placeholder="Search by Id"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchById;
