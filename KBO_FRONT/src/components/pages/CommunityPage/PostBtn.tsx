import { useNavigate } from "react-router-dom";
import { StyledPostBtn } from "./StyledCommunity";
import { useEffect, useState } from "react";
import axios from "axios";


interface Ipost {
    label: string;
}

export default function ToPosting({label}: Ipost) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        axios.get('')
        .then(response=>setIsLoggedIn(response.data.isLoggedIn))
        .catch(error=>console.error('로그인 상태 확인 중 오류 발생 : ', error))
    })
    const handleButtonClick = () => {
        if (isLoggedIn) {

        }
        else {
        }
    }
    return (
        <div>
            <StyledPostBtn onClick={handleButtonClick}>{label}</StyledPostBtn>
        </div>
    )
}