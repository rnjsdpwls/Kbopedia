import { useNavigate } from "react-router-dom";
import { StyledPostBtn } from "./StyledCommunity";
import { useState } from "react";


interface Ipost {
    label: string;
}

export default function ToPosting({label}: Ipost) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleButtonClick = () => {
        if (isLoggedIn) {
            navigate('/Posting');
        }
        else {
            alert('로그인 후 이용해주세요.');
            navigate('/Signup');
        }
    }
    return (
        <div>
            <StyledPostBtn onClick={handleButtonClick}>{label}</StyledPostBtn>
        </div>
    )
}