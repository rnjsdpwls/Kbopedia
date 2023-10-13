import { useNavigate } from "react-router-dom";
import { StyledButton } from "./StyledButton";


interface QuizBtn_Props {
    label: string;
}

export default function QuizBtn({ label}: QuizBtn_Props) {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/Posting');
    }
    return (
        <div>
            <StyledButton onClick={handleButtonClick}>{label}</StyledButton>
        </div>
    )
}