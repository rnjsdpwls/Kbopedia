import { useState } from "react";
import { StyledContent } from "./StyledPosting";


export default function CreateContent() {
    const [content, setContent] = useState<string>('');
    const handleContentChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setContent(value);
    }
    const handleContentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    
    return (
        <div>
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





        // if(!isLoading && contentRef.current){
        //     fetch('http://localhost:3001/info', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },   
        //         body: JSON.stringify({
        //             content: contentRef.current.value
        //         }),
        //     }).then((res)=>{
        //         if(res.ok) {
        //             alert('생성 완료');
        //             setIsLoading(false);
        //         }
        //     });
        // }