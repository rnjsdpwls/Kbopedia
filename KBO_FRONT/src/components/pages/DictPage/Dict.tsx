import { useState, ChangeEvent } from "react";
import { SearchInput, InputForm, BtnSearch, InputFormContainer } from "./StyledDict";
import SearchedKeywords from "./SearchedKeywords";

export default function Dict() {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <SearchInput>
        <InputForm value={value}
          onChange={onChange}
          type="text" />
        <BtnSearch>검색</BtnSearch>
      </SearchInput>
      <SearchedKeywords searchValue={value} />
    </div >
  );
}
