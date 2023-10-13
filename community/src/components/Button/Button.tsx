import { useNavigate } from "react-router-dom";
import { StyledButton } from "./StyledButton";


interface ToPosting {
    label: string;
}

export default function ToPosting({label}: ToPosting) {
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