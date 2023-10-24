import React, { useEffect, useRef, useState } from "react";
import { StyledContent, StyledList, StyledTitle } from "./StyledPosting";
import { CreateTitle } from "./CreateTitle";
import CreateContent from "./CreateContent";
import SaveBtn from "./SaveBtn";

interface Props {
    "제목": string
    "내용": string
}

export default function Posting() {

    const [title, setTitle] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const headers = ["제목", "내용"];
    // const listItem = headers.map((header) => {
    //     <li>{header}</li>
    //     return (
    //         <ul>
    //             <CreateTitle />
    //         </ul>
    //     )
    // })


    return (
        <div>
            {/* <StyledList>
                <li>{headers}</li>
            </StyledList> */}
            <CreateTitle />
            <SaveBtn label="등록하기"></SaveBtn>
        </div>
    )
}
