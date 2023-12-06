import { useState, ChangeEvent } from "react";
import { SearchInput, InputForm, DictTitle, BtnSort, BtnSortContainer } from "./StyledDict";
import SearchedKeywords from "./SearchedKeywords";
import termsData from '../../../db/termsData.json';

export default function Dict() {
  const [value, setValue] = useState("");
  const [termType, setTermType] = useState<'basic' | 'advanced' | null>(null);
  const allTerms = [...termsData.basic_term, ...termsData.advanced_term];
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBasicClick = () => {
    setTermType(termType === 'basic' ? null : 'basic');
  };

  const handleAdvancedClick = () => {
    setTermType(termType === 'advanced' ? null : 'advanced');
  };

  return (
    <div>
      <DictTitle>KBO 리그 야구 기초</DictTitle>
      <SearchInput>
        <InputForm value={value}
          onChange={onChange}
          type="text" />
      </SearchInput>
      <BtnSortContainer>
        <BtnSort isActive={termType === 'basic'} onClick={handleBasicClick}>기초 용어</BtnSort>
        <BtnSort isActive={termType === 'advanced'} onClick={handleAdvancedClick}>심화 용어</BtnSort>
      </BtnSortContainer>
      <SearchedKeywords searchValue={value} termType={termType} allTerms={allTerms} />
    </div>
  );
}