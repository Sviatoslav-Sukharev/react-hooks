import React, {useContext, useState} from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContext } from "../context/github/githubContext";

const Search = props => {
  const [value, setValue] = useState("");
  const {show, hide} = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = event => {
    if(event.key !== "Enter") {
      return;
    }

    if(value.trim()) {
      hide();
      github.search(value.trim());
    } else {
      show("Введите данные пользователя...");
      github.clearUsers();
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите имя пользователя..."
        onKeyPress={onSubmit}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default Search;