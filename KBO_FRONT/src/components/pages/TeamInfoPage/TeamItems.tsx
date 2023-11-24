import { useState } from 'react';
import { Container, TeamName, StyledTeamDetail, StyledImage, LineSpacing, LogoImagePosition, PropsContainer, StyledForUrl } from './StyledTeamInfo';
import LogoImages from './LogoImages';
import dummy from '../../../db/teamData.json';

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
  newId: number | null;
};

export default function TeamItems({ newId }: TeamItemsProps) {
  const [teamId, setTeamId] = useState(newId);
  const teamData: TeamData | undefined = dummy.team.find((item) => item.id === teamId);

  if (!teamData) {
    return null;
  }

  const handleTeamClick = (newId: number) => {
    setTeamId(newId);
  };

  return (
    <div>
      <TeamName>{teamData.teamName}</TeamName>
      <Container>
        <LogoImagePosition>
          <LogoImages onClick={handleTeamClick} />
        </LogoImagePosition>
        <PropsContainer>
          <div>
            <StyledImage src={teamData.logo} alt={`${teamData.teamName} 로고`} />
          </div>
          <StyledTeamDetail>
            홈페이지: <StyledForUrl href={`http://${teamData.homepage}`} target='_blank' rel='noreferrer'>{teamData.homepage}</StyledForUrl>
            <LineSpacing />
            연고지역: {teamData.region}
            <LineSpacing />
            감독: {teamData.coach}
            <LineSpacing />
            창단년도: {teamData.foundingYear}
            <LineSpacing />
            설명: {teamData.description}
          </StyledTeamDetail>
        </PropsContainer>
      </Container>
    </div>
  );
}
