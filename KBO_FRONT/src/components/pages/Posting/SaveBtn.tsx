import {  redirect, useNavigate } from "react-router-dom";
import { StyledButton } from "./StyledPosting";


interface Isave {
    label: string;
}

export default function ToPosting({label}: Isave) {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        alert('저장이 완료되었습니다.');
        navigate('/Community')
    }
    return (
        <div>
            <form>
                <StyledButton onClick={handleButtonClick}>{label}</StyledButton>
            </form>
        </div>
    )
}