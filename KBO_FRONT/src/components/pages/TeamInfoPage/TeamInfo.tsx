import React, { useState } from 'react';
import { Container, TeamName, StyledTeamDetail, StyledImage, LineSpacing, LogoImagePosition, StyledImages } from './StyledTeamInfo';
import dummy from '../../../db/teamData.json';
import Heroes from '../../../images/teamLogo/Heroes_logo.png'
import Dinos from '../../../images/teamLogo/Dinos_logo.png';
import Bears from '../../../images/teamLogo/Bears_logo.png'
import Eagles from '../../../images/teamLogo/Eagles_logo.png'
import Giants from '../../../images/teamLogo/Giants_logo.png'
import Landers from '../../../images/teamLogo/Landers_logo.png'
import Lions from '../../../images/teamLogo/Lions_logo.png'
import Tigers from '../../../images/teamLogo/Tigers_logo.png'
import Twins from '../../../images/teamLogo/Twins_logo.png'
import Wiz from '../../../images/teamLogo/Wiz_logo.png';

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

type Props = {
  newId: number;
};

function TeamInfo({ newId }: Props) {
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
      <TeamName>
        {teamData.teamName}
      </TeamName>
      <Container>
        <LogoImagePosition>
          <StyledImages src={Heroes} alt='키움로고' onClick={() => handleTeamClick(1)} />
          <StyledImages src={Twins} alt='엘지로고' onClick={() => handleTeamClick(2)} />
          <StyledImages src={Bears} alt='두산로고' onClick={() => handleTeamClick(3)} />
          <StyledImages src={Giants} alt='롯데로고' onClick={() => handleTeamClick(4)} />
          <StyledImages src={Dinos} alt='엔씨로고' onClick={() => handleTeamClick(5)} />
          <StyledImages src={Wiz} alt='케이티로고' onClick={() => handleTeamClick(6)} />
          <StyledImages src={Tigers} alt='기아로고' onClick={() => handleTeamClick(7)} />
          <StyledImages src={Lions} alt='삼성로고' onClick={() => handleTeamClick(8)} />
          <StyledImages src={Eagles} alt='한화로고' onClick={() => handleTeamClick(9)} />
          <StyledImages src={Landers} alt='SSG로고' onClick={() => handleTeamClick(10)} />
        </LogoImagePosition>
        <StyledImage src={teamData.logo} alt={teamData.teamName + ' 로고'} />
        <StyledTeamDetail>
          홈페이지: {teamData.homepage}
          <LineSpacing />
          연고지역: {teamData.region}
          <LineSpacing />
          감독: {teamData.coach}
          <LineSpacing />
          창단년도: {teamData.foundingYear}
          <LineSpacing />
          설명: {teamData.description}
        </StyledTeamDetail>
      </Container>
    </div>
  );
};

export default TeamInfo;
