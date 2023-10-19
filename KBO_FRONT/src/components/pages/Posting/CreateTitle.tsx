import { useRef, useState } from "react"
import { StyledTitle } from "./StyledPosting";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateTitle = () => {
    const [title, setTitle] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setTitle(value);
    };
    const handleTitleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('제목:', title);
        if(!isLoading){
            setIsLoading(true);
            axios.post('http://localhost:3001/info',{
                title : titleRef.current?.value,
            })
            .then(res=>{
                if (res.status===200){
                    alert('생성 완료');
                    navigate('/Community');
                    setIsLoading(false);
                }
            })
            .catch(error=>{
                console.error('오류 발생', error);
                setIsLoading(false);
            })
        }
    }

    const titleRef = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <StyledTitle>
                <form onSubmit={handleTitleSubmit}>
                    <div>
                        <label>제목</label>
                        <input
                            type="text"
                            placeholder="제목을 입력하세요"
                            value={title}
                            onChange={handleTitleChange}
                            ref = {titleRef}
                        />
                    </div>
                    <button>{isLoading ? "Saving..." : "저장"}</button>
                </form>
            </StyledTitle>

        </div>
    )
}