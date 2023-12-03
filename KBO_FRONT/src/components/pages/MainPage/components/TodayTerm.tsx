import { useState, useEffect } from 'react';
import { Title, Container, TermContainer, TermTitle, TermDescription, Spacing } from "../styles/StyledTodayTerm";
import termsData from '../../../../db/termsData.json';

type TermsData = {
  id: number;
  term: string;
  description: string;
};

export default function TodayTerm() {
  const [randomTermData, setRandomTermData] = useState<TermsData | null>(null);

  useEffect(() => {
    const allTerms = [...termsData.basic_term, ...termsData.advanced_term];
    const randomId = Math.floor(Math.random() * allTerms.length);
    const selectedTermData: TermsData = allTerms[randomId];
    setRandomTermData(selectedTermData);
  }, []);

  return (
    <Container>
      <Spacing />
      <Title>오늘의 야구 지식</Title>
      {randomTermData && (
        <TermContainer>
          <TermTitle>{randomTermData.term}</TermTitle>
          <TermDescription>{randomTermData.description}</TermDescription>
        </TermContainer>
      )}
    </Container>
  );
}
