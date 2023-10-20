import React, { useState, useEffect } from 'react';
import { Container, ImagePosition, PostBtnPosition, StyeldImages, StyledTable } from '../CommunityPage/StyledCommunity';
import axios from 'axios';
import PostBtn from '../CommunityPage/PostBtn';
import Heroes from '../../../images/Heroes_logo.png'
import Dinos from '../../../images/Dinos_logo.png'
import Bears from '../../../images/Bears_logo.png'
import Eagles from '../../../images/Eagles_logo.png'
import Giants from '../../../images/Giants_logo.png'
import Landers from '../../../images/Landers_logo.png'
import Lions from '../../../images/Lions_logo.png'
import Tigers from '../../../images/Tigers_logo.png'
import Twins from '../../../images/Twins_logo.png'
import Wiz from '../../../images/Wiz_logo.png'
// 데이터의 타입을 정의한 인터페이스
interface DataItem {
  num: number;
  title: string;
  name: string;
  date: string;
  views: number;
}


export default function Community() {
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태를 나타내는 변수
  const [data, setData] = useState<DataItem[]>([]);
  useEffect(() => {
    // 데이터를 불러오는 부분
    axios.get('http://localhost:3001/test')
      .then((response) => {
        setData(response.data);
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류 발생: ' + error);
        setLoading(false); // 오류 발생 시에도 로딩 상태를 false로 변경
      });
  }, []);

  const header = ["번호", "제목", "글쓴이", "등록일", "조회"];

  

  return (
    <div>
      <Container>

        <ImagePosition>
          <StyeldImages src={Heroes} alt='키움로고'></StyeldImages>
          {/* <StyeldImages src={Twins} alt='엘지로고'></StyeldImages>
          <StyeldImages src={Bears} alt='두산로고'></StyeldImages>
          <StyeldImages src={Giants} alt='롯데로고'></StyeldImages>
          <StyeldImages src={Dinos} alt='엔씨로고'></StyeldImages>
          <StyeldImages src={Wiz} alt='케이티로고'></StyeldImages>
          <StyeldImages src={Tigers} alt='기아로고'></StyeldImages>
          <StyeldImages src={Lions} alt='삼성로고'></StyeldImages>
          <StyeldImages src={Eagles} alt='한화로고'></StyeldImages>
          <StyeldImages src={Landers} alt='SSG로고'></StyeldImages> */}
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
              // 데이터 로딩 중에 보여줄 내용
              <tr>
                <td colSpan={header.length}>로딩 중...</td>
              </tr>
            ) : (
              // 데이터가 로딩된 후에 보여줄 내용
              data.map((item, index) => (
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
      </Container>
      <PostBtnPosition>
        {/* <p>1|2|3|4|5</p> */}
        <PostBtn label={"글쓰기"}></PostBtn>
      </PostBtnPosition>
    </div>
  );
}
//////////////////...