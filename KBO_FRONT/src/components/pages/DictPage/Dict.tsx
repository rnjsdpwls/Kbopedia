import { useState, ChangeEvent } from "react";
import { SearchInput, InputForm, BtnSearch, DictTitle, BtnSort, BtnSortContainer } from "./StyledDict";
import SearchedKeywords from "./SearchedKeywords";

export default function Dict() {
  const [value, setValue] = useState("");
  const [termType, setTermType] = useState<'basic' | 'advanced'>('basic');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBasicClick = () => {
    setTermType('basic');
  };

  const handleAdvancedClick = () => {
    setTermType('advanced');
  };

  return (
    <div>
      <DictTitle>KBO 리그 야구 기초</DictTitle>
      <SearchInput>
        <InputForm value={value}
          onChange={onChange}
          type="text" />
        <BtnSearch >검색</BtnSearch>
      </SearchInput>
      <BtnSortContainer>
        <BtnSort onClick={handleBasicClick}>기초 용어</BtnSort>
        <BtnSort onClick={handleAdvancedClick}>심화 용어</BtnSort>
      </BtnSortContainer>
      <SearchedKeywords searchValue={value} termType={termType} />
    </div>
  );
}
