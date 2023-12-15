import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { TeamData } from '../types';
import dummy from '../../../../db/teamData.json';
import { BtnContainer, BtnSort, CheerLyrics, CheerTitle, CheersListContainer, Title, Info } from './StyledCheer';
import { Spacing } from '../StyledTeamInfo';

interface CheerDataItem {
  id: number;
  teamName: string;
  cheerTitle: string;
  cheerLyrics: string;
  cheerUrl: string;
}

type TeamItemsProps = {
  newId?: number | null;
};

export default function CheerPage({ newId }: TeamItemsProps) {
  const [data, setData] = useState<CheerDataItem[]>([]);
  const { id } = useParams<{ id?: string }>();
  const [teamId, setTeamId] = useState(newId || (id ? parseInt(id, 10) : null));
  const teamData: TeamData | undefined = dummy.team.find((team) => team.id === teamId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (teamData) {
          const response = await axios.get<CheerDataItem[]>(`http://localhost:8080/database/${teamData.id}`);
          setData(response.data);
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, [teamData]);

  const handleCheerTitleClick = (cheerUrl: string) => {
    window.location.href = cheerUrl;
  };

  if (!teamData) {
    return <div>팀 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Title>{teamData.teamName}</Title>
      <BtnContainer>
        <BtnSort>TEAM</BtnSort>
        <BtnSort>PLAYER</BtnSort>
      </BtnContainer>
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
    </div >
  );
}
