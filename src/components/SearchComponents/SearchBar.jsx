import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
const SearchBar = () => {
  const { setSearch, resetBtn } = useContext(UserContext);
  const [value, setValue] = useState("");
  console.log(value);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <div className="container">
      <h2>Search</h2>
      <div className="form-search">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Search by name or code "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          {value.match(/[!@#$%^&*()_+~]/g) ? (
            <>
              <button disabled>Please ,no character</button>
            </>
          ) : (
            <button>search</button>
          )}

          <button onClick={() => resetBtn()}>reset</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
