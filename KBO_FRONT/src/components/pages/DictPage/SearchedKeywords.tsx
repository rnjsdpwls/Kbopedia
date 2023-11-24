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
  termType: 'basic' | 'advanced';
}

export default function SearchedKeywords({ searchValue, termType }: SearchedKeywordsProps) {
  const [data, setData] = useState<TermsData[]>([]);

  useEffect(() => {
    const termData = termType === 'basic' ? termsDummy.basic_term : termsDummy.advanced_term;

    const filteredData = termData.filter((item) =>
      item.term.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  }, [searchValue, termType]);

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
