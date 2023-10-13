import React, { useState } from "react";
import { StyledContent, StyledTitle } from "./StyledPosting";

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
    
    const [content, setContent] = useState<string>('');
    const handleContentChange = (event:React.FormEvent<HTMLTextAreaElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setContent(value);
    }
    const handleContentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // fetch:()
    }


    return (
        <div>

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
            <StyledContent>
                <form onSubmit={handleContentSubmit}>
                    <textarea
                        placeholder="내용을 입력하세요"
                        value={content}
                        onChange={handleContentChange}
                        rows={12}
                        cols={40}
                    />
                </form>
            </StyledContent>
        </div>
    )
}

export default Posting;