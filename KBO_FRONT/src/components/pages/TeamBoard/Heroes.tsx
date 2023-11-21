import React, { useState, useEffect } from 'react';
import { Container, ImagePosition, PostBtnPosition, StyeldImages, StyledTable } from '../CommunityPage/StyledCommunity';
import axios from 'axios';
import PostBtn from '../CommunityPage/PostBtn';
import Heroes from '../../../images/teamLogo/Heroes_logo.png'
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
  const [heroesData, setHeroesData] = useState<DataItem[]>([]);
  useEffect(() => {
    axios.get('http://localhost:3001/all')
      .then((response) => {
        const allData = response.data.all;
        if (allData) {
          if (allData.heroes) {
            setHeroesData(allData.heroes); // "heroes" 데이터를 가져와서 상태에 설정
          }
          // 다른 팀의 데이터를 여기에서 추출하고 상태에 설정
          // 예: if (allData.bears) setOtherTeamsData(allData.bears);
          // 다른 팀의 데이터도 위와 같이 추출 및 설정
        }
        setLoading(false); // 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류 발생: ' + error);
        setLoading(false);
      });
  }, []);


  const header = ["번호", "제목", "글쓴이", "등록일", "조회"];



  return (
    <div>
      <Container>

        <ImagePosition>
          <StyeldImages src={Heroes} alt='키움로고'></StyeldImages>
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
            {heroesData.map((item, index) => (
              <tr key={index}>
                <td>{item.num}</td>
                <td>{item.title}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.views}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Container>
      <PostBtnPosition>
        <PostBtn label={"글쓰기"}></PostBtn>
      </PostBtnPosition>
    </div>
  );
}
//////////////////...