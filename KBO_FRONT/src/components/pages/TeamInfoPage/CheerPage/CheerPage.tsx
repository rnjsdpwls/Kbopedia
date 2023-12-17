import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import dummy from '../../../../db/teamData.json';
import { BtnSortContainer, BtnSort, CheerLyrics, CheerTitle, CheersListContainer, Title, Info, BtnPrevContainer, NextPageInfo, BtnMoveTop } from './StyledCheer';
import { Spacing } from '../StyledTeamInfo';
import { BtnNext } from "../StyledTeamItems";
import { AiFillUpCircle } from "react-icons/ai";
interface CheerDataItem {
  id: number;
  teamName: string;
  cheerTitle: string;
  cheerLyrics: string;
  cheerUrl: string;
}

type TeamData = {
  id: number;
  teamName: string;
  homepage: string;
  region: string;
  coach: string;
  foundingYear: string;
  description: string;
  logo: string;
};

type TeamItemsProps = {
  newId?: number | null;
};

export default function CheerPage({ newId }: TeamItemsProps) {
  const navigate = useNavigate();
  const [data, setData] = useState<CheerDataItem[]>([]);
  const { id } = useParams<{ id?: string }>();
  const [teamId, setTeamId] = useState(newId || (id ? parseInt(id, 10) : null));
  const [sortType, setSortType] = useState<"TEAM" | "PLAYER">("TEAM");
  const teamData: TeamData | undefined = dummy.team.find((item) => item.id === teamId);
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (teamData) {
          const response = await axios.get<CheerDataItem[]>(`http://localhost:8080/database/${sortType.toLowerCase()}/${teamData.id}`);
          setData(response.data);
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, [teamData, sortType]);

  const handleBtnPrevClick = () => {
    navigate(`/TeamItems/${teamData?.id}`);
  };

  const handleSortTypeClick = (type: "TEAM" | "PLAYER") => {
    setSortType(type);
  };

  const handleCheerTitleClick = (cheerUrl: string) => {
    window.location.href = cheerUrl;
  };

  if (!teamData) {
    return <div>팀 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Title>{teamData.teamName}</Title>
      <BtnSortContainer>
        <BtnSort handleSortTypeClick={sortType === 'TEAM'} onClick={() => handleSortTypeClick("TEAM")}>TEAM</BtnSort>
        <BtnSort handleSortTypeClick={sortType === 'PLAYER'} onClick={() => handleSortTypeClick("PLAYER")}>PLAYER</BtnSort>
      </BtnSortContainer>
      <Info>응원곡 제목을 누르면 해당 음원으로 이동합니다.</Info>
      <CheersListContainer>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <CheerTitle onClick={() => handleCheerTitleClick(item.cheerUrl)}>
                {item.cheerTitle}
              </CheerTitle>
              <CheerLyrics>{item.cheerLyrics}</CheerLyrics>
              <Spacing />
            </li>
          ))}
        </ul>
      </CheersListContainer>
      <BtnPrevContainer>
        <NextPageInfo>{teamData.teamName} 구단 소개로 돌아가기 👉 </NextPageInfo>
        <BtnNext onClick={handleBtnPrevClick}>PREV</BtnNext>
      </BtnPrevContainer>
      <BtnMoveTop onClick={MoveToTop}><AiFillUpCircle /></BtnMoveTop>
    </div>
  );
}
