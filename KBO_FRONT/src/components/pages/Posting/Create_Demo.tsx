import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Create_Demo() {

    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post('http://localhost:3001/heroes/', {
            num: numRef.current?.value,
            title: titleRef.current?.value,
            name: nameRef.current?.value,
            date: dateRef.current?.value,
            views: viewsRef.current?.value,
        })
            .then(res => {
                if (res.status == 200) {
                    alert('생성완료');
                    navigate('/Heroes')
                }
            })
            .catch(error => {
                console.error('오류 발생', error);
            })
    }

    const numRef = useRef<HTMLInputElement | null>(null);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const viewsRef = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <h1>Create Demo 입니다.</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="num" placeholder="num" ref={numRef}></input>
                <input type="text" name="title" placeholder="title" ref={titleRef}></input>
                <input type="text" name="name" placeholder="name" ref={nameRef}></input>
                <input type="text" name="date" placeholder="date" ref={dateRef}></input>
                <input type="text" name="views" placeholder="views" ref={viewsRef}></input>
                <button>제출</button>
            </form>
        </div>
    )
}