import { Container, ItemDescription, ItemTerm, ItemTermContainer, List } from "./StyledSearchedKeywords";
import { useEffect, useState } from "react";
import termsDummy from '../../../db/termsData.json';

type TermsData = {
  id: number;
  term: string;
  description: string;
}

interface SearchedKeywordsProps {
  searchValue: string;
}

export default function SearchedKeywords({ searchValue }: SearchedKeywordsProps) {
  const [data, setData] = useState<TermsData[]>([]);

  useEffect(() => {
    const filteredData = termsDummy.dict.filter((item) =>
      item.term.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  }, [searchValue]);

  return (
    <Container>
      <ul>
        {data.map((item, index) => (
          <List key={index}>
            <ItemTermContainer>
              <ItemTerm>{item.term}</ItemTerm>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemTermContainer>

          </List>
        ))}
      </ul>
    </Container>
  );
}