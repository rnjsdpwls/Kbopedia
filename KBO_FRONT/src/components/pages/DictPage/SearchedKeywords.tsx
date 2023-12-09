import { Container, ItemDescription, ItemTerm, ItemTermContainer, List } from "./StyledSearchedKeywords";
import { useEffect, useState } from "react";
import termsData from '../../../db/termsData.json';

type TermsData = {
  id: number;
  term: string;
  description: string;
}

interface SearchedKeywordsProps {
  searchValue: string;
  termType: 'basic' | 'advanced' | null;
  allTerms: TermsData[];
}

export default function SearchedKeywords({ searchValue, termType, allTerms }: SearchedKeywordsProps) {
  const [data, setData] = useState<TermsData[]>([]);

  useEffect(() => {
    const termData = termType === 'basic' ? termsData.basic_term :
      termType === 'advanced' ? termsData.advanced_term : allTerms;
    const filteredData = termData.filter((item) =>
      item.term.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  }, [searchValue, termType, allTerms]);

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