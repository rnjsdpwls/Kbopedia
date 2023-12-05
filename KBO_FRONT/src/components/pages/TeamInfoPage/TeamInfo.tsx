import { useState } from 'react';
import { TeamInfoMainTitle, TeamTable, TeamContainer, TeamTableTitle, TeamTableItem, Spacing, Info, HoverableTeamTableItem, TeamTableContainer } from './StyledTeamInfo';
import dummy from '../../../db/teamData.json';
import { Link } from 'react-router-dom';

type TeamData = {
  id: number;
  teamName: string;
  region: string;
  foundingYear: string;
  record: string;
};

type Props = {
  newId?: number;
};

export default function TeamInfo({ newId }: Props) {
  const [teamId, setTeamId] = useState(newId);
  const teamData: TeamData | undefined = dummy.team.find((item) => item.id === teamId);
  if (!teamData) {
    return null;
  }
  return (
    <TeamContainer>
      <TeamInfoMainTitle>구단정보</TeamInfoMainTitle>
      <Info>팀명을 선택하시면 팀의 상세정보를 보실 수 있습니다.</Info>
      <TeamTable>
        <TeamTableTitle >팀명</TeamTableTitle>
        <TeamTableTitle >창단연도</TeamTableTitle>
        <TeamTableTitle >연고지</TeamTableTitle>
        <TeamTableTitle >우승횟수(연도)</TeamTableTitle>
      </TeamTable>
      <Spacing />
      {dummy.team.map((team: TeamData) => (
        <ul key={team.id}>
          <li>
            <TeamTableContainer style={{ display: 'flex' }}>
              <Link to={`/TeamItems/${team.id}`}>
                <HoverableTeamTableItem >{team.teamName}</HoverableTeamTableItem>
              </Link>
              <TeamTableItem>{team.foundingYear}</TeamTableItem>
              <TeamTableItem>{team.region}</TeamTableItem>
              <TeamTableItem>{team.record}</TeamTableItem>
            </TeamTableContainer>
            <Spacing />
          </li>
        </ul>
      ))
      }
    </TeamContainer >
  );
}