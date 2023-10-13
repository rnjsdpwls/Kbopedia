import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledTitle } from "./StyledPosting";

const Posting = () => {
    const [title, setTitle] = useState<string>('');
    const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setTitle(value);
    };
    const handleTitleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // fetch:()
        console.log('제목:', title);
    }

    // const navigate = useNavigate();


    return (
        <StyledTitle>
                <form onSubmit={handleTitleSubmit}>
                    <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </form>
        </StyledTitle>
    )
}

export default Posting;