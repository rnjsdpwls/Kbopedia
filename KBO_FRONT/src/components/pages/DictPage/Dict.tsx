import { useState, ChangeEvent } from "react";
import { SearchInput, InputForm, BtnSearch, DictTitle } from "./StyledDict";
import SearchedKeywords from "./SearchedKeywords";

export default function Dict() {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <DictTitle>KBO 리그 야구용어 기초</DictTitle>
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
