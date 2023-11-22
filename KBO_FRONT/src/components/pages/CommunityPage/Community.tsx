import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ImagePosition, PostBtnPosition, Pagebutton, StyeldImages, StyledTable } from './StyledCommunity';
import PostBtn from './PostBtn';
import Heroes from '../../../images/teamLogo/Heroes_logo.png';
import Dinos from '../../../images/teamLogo/Dinos_logo.png';
import Bears from '../../../images/teamLogo/Bears_logo.png';
import Eagles from '../../../images/teamLogo/Eagles_logo.png';
import Giants from '../../../images/teamLogo/Giants_logo.png';
import Landers from '../../../images/teamLogo/Landers_logo.png';
import Lions from '../../../images/teamLogo/Lions_logo.png';
import Tigers from '../../../images/teamLogo/Tigers_logo.png';
import Twins from '../../../images/teamLogo/Twins_logo.png';
import Wiz from '../../../images/teamLogo/Wiz_logo.png';
import { Link } from 'react-router-dom';

// 데이터의 타입을 정의한 인터페이스
interface DataItem {
  num: number;
  title: string;
  name: string;
  date: string;
  views: number;
}

export default function Community() {
  const ITEMS_PER_PAGE = 5;

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // 데이터를 불러오는 부분
    axios.get('http://localhost:3001/all')
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
          <Link to="/Heroes">
            <StyeldImages src={Heroes} alt='키움로고'></StyeldImages>
          </Link>
          <Link to="/Twins">
            <StyeldImages src={Twins} alt='LG로고'></StyeldImages>
          </Link>
          <Link to="/Bears">
            <StyeldImages src={Bears} alt='두산로고'></StyeldImages>
          </Link>
          <Link to="/Giants">
            <StyeldImages src={Giants} alt='롯데로고'></StyeldImages>
          </Link>
          <Link to="/Dinos">
            <StyeldImages src={Dinos} alt='엔씨로고'></StyeldImages>
          </Link>
          <Link to="/Wiz">
            <StyeldImages src={Wiz} alt='KT로고'></StyeldImages>
          </Link>
          <Link to="/Tigers">
            <StyeldImages src={Tigers} alt='기아로고'></StyeldImages>
          </Link>
          <Link to="/Lions">
            <StyeldImages src={Lions} alt='삼성로고'></StyeldImages>
          </Link>
          <Link to="/Eagles">
            <StyeldImages src={Eagles} alt='한화로고'></StyeldImages>
          </Link>
          <Link to="/Landers">
            <StyeldImages src={Landers} alt='SSG로고'></StyeldImages>
          </Link>
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
