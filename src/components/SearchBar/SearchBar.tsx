import { useState } from "react";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && input !== "") {
      console.log(input);
    }
  };
  return (
    <section className="search-bar section">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search..."
        value={input}
        onKeyDown={handleKeydown}
      />
    </section>
  );
};

export default SearchBar;
