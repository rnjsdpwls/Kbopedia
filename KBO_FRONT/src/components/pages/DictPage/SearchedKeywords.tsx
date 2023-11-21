import { BtnWords, Container } from "./StyledSearchedKeywords";
import { useEffect, useState } from "react";

interface DataItem {
  record: string;
  recordEnAbbr: string;
  recordEn: string;
  description: string;
}

interface SearchedKeywordsProps {
  searchValue: string;
}

export default function SearchedKeywords({ searchValue }: SearchedKeywordsProps) {
  const [data, setData] = useState<DataItem[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData = data.filter((item) =>
    item.record.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <span>{item.record} </span>
            <span>{item.recordEnAbbr} </span>
            <span>{item.recordEn} </span>
            <span>{item.description} </span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
