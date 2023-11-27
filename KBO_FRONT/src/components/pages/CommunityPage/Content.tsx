import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { StyledPosts, StyledTitle } from "./StyledCommunity";

interface DataItem {
    title : string;
    content : string;
}

export default function Content(){
    const { id } = useParams<{id: string}>();
    const [loading, setLoading] = useState<boolean>();
    const [data, setData] = useState<DataItem>();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/${id}`)
        .then((response)=>{
            setData(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error('데이터를 불러오는 중 오류 발생: ' + error);
            setLoading(false);
        });
    }, [id])
    return(
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <StyledTitle>
                        <h1>제목 : {data?.title}</h1>
                    </StyledTitle>
                    <StyledPosts>
                        {data?.content}
                    </StyledPosts>
                </div>
            )}
        </div>
    )
}