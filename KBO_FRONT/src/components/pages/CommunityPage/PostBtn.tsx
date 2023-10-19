import { useNavigate } from "react-router-dom";
import { StyledPostBtn } from "./StyledCommunity";


interface Ipost {
    label: string;
}

export default function ToPosting({label}: Ipost) {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/Posting');
    }
    return (
        <div>
            <StyledPostBtn onClick={handleButtonClick}>{label}</StyledPostBtn>
        </div>
    )
}