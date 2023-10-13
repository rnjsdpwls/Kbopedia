import React, { useState, useEffect } from 'react';
import { StyledTable } from './StyledTable';
import Button from '../Button/Button';
// 데이터의 타입을 정의한 인터페이스
interface DataItem {
  번호: number;
  제목: string;
  글쓴이: string;
  등록일: string;
  조회: number;
}

export default function Community() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태를 나타내는 변수

  useEffect(() => {
    // 데이터를 불러오는 부분
    fetch('http://localhost:3001/info')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류 발생: ' + error);
        setLoading(false); // 오류 발생 시에도 로딩 상태를 false로 변경
      });
  }, []);

  const header = [
    "번호",
    "제목",
    "글쓴이",
    "등록일",
    "조회"
  ];

  return (
    <div>
    <StyledTable>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            // 데이터 로딩 중에 보여줄 내용
            <tr>
              <td colSpan={header.length}>로딩 중...</td>
            </tr>
          ) : (
            // 데이터가 로딩된 후에 보여줄 내용
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.번호}</td>
                <td>{item.제목}</td>
                <td>{item.글쓴이}</td>
                <td>{item.등록일}</td>
                <td>{item.조회}</td>
              </tr>
            ))
            )}
        </tbody>
        </StyledTable>
      <Button label={"글쓰기"}></Button>

    </div>
  );
}
