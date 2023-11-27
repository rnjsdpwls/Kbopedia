import React, { useState, useEffect } from 'react';
import { Container, ImagePosition, PostBtnPosition, StyeldImages, Pagebutton, StyledTable } from '../CommunityPage/StyledCommunity';
import axios from 'axios';
import PostBtn from '../CommunityPage/PostBtn';
import Lions from '../../../images/teamLogo/Lions_logo.png'
// 데이터의 타입을 정의한 인터페이스
interface DataItem {
  num: number;
  title: string;
  name: string;
  date: string;
  views: number;
}



export default function Community() {
  const ITEMS_PER_PAGE = 6;

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // 데이터를 불러오는 부분
    axios.get('http://localhost:3001/all/lions')
      .then((response) => {
        setData(response.data);
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류 발생: ' + error);
        setLoading(false); // 오류 발생 시에도 로딩 상태를 false로 변경
      });
  }, []);

  
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const header: string[] = ["번호", "제목", "글쓴이", "등록일", "조회"];

  const paginatedData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


  return (
    <div>
      <Container>

        <ImagePosition>
          <StyeldImages src={Lions} alt='삼성로고'></StyeldImages>
        </ImagePosition>
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
              <tr>
                <td colSpan={header.length}>로딩 중...</td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.num}</td>
                  <td>{item.title}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                </tr>
              ))
            )}
          </tbody>
        </StyledTable>

        <div>
          {/* Display page numbers */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagebutton
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
            >
              {index + 1}
            </Pagebutton>
          ))}
        </div>
      </Container>

      <PostBtnPosition>
        <PostBtn label={"글쓰기"}></PostBtn>
      </PostBtnPosition>
    </div>
  );
}