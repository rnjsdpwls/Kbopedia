import { useState } from 'react';
import { TeamInfoMainTitle, TeamTable, TeamContainer, TeamTableTitle, TeamTableItem, Spacing, Info, HoverableTeamTableItem } from './StyledTeamInfo';
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
        <TeamTableTitle style={{ width: '120px' }}>팀명</TeamTableTitle>
        <TeamTableTitle style={{ width: '120px' }}>창단연도</TeamTableTitle>
        <TeamTableTitle style={{ width: '150px' }}>연고지</TeamTableTitle>
        <TeamTableTitle style={{ width: '500px' }}>우승횟수(연도)</TeamTableTitle>
      </TeamTable>
      <Spacing />
      {dummy.team.map((team: TeamData) => (
        <ul key={team.id}>
          <li>
            <div style={{ display: 'flex' }}>
              <Link to={`/TeamItems/${team.id}`}>
                <HoverableTeamTableItem style={{ width: '120px' }}>{team.teamName}</HoverableTeamTableItem>
              </Link>
              <TeamTableItem style={{ width: '120px' }}>{team.foundingYear}</TeamTableItem>
              <TeamTableItem style={{ width: '150px' }}>{team.region}</TeamTableItem>
              <TeamTableItem style={{ width: '500px', overflow: 'auto', whiteSpace: 'nowrap' }}>{team.record}</TeamTableItem>
            </div>
            <Spacing />
          </li>
        </ul>
      ))}
    </TeamContainer>
  );
}

