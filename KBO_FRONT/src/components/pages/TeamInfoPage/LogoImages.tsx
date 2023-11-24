import { StyledImages } from './StyledTeamInfo';
import dummy from '../../../db/teamData.json';

type TeamData = {
  id: number;
  teamName: string;
  logo: string;
};

type LogoImagesProps = {
  onClick: (id: number) => void;
};

const LogoImages = ({ onClick }: LogoImagesProps) => (
  <>
    {dummy.team.map((team: TeamData, index: number) => (
      <StyledImages
        key={index}
        src={`/images/${team.logo}`}
        alt={`${team.teamName} 로고`}
        onClick={() => onClick(team.id)}
      />
    ))}
  </>
);

export default LogoImages;
