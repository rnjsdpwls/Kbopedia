import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TeamName, StyledTeamDetail, StyledImage, LineSpacing, LogoImagePosition, PropsContainer, StyledForUrl, BtnNext, BtnContainer, Info } from './StyledTeamItems';
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
  newId?: number | null;
};

export default function TeamItems({ newId }: TeamItemsProps) {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const [teamId, setTeamId] = useState(newId || (id ? parseInt(id, 10) : null));
  const teamData: TeamData | undefined = dummy.team.find((item) => item.id === teamId);

  if (!teamData) {
    return null;
  }

  const handleTeamClick = (newId: number) => {
    setTeamId(newId);
  };

  const handleBtnNextClick = () => {
    // BtnNext를 눌렀을 때 경로를 변경
    navigate(`/TeamItems/${teamData.id}/cheers`);
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
      <BtnContainer>
        <Info>{teamData.teamName} 응원가 바로 가기 👉 </Info>
        <BtnNext onClick={handleBtnNextClick}>NEXT</BtnNext>
      </BtnContainer>
    </div>
  );
}
