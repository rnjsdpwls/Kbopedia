import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
            헤더부분입니다.<br/>
            로그인버튼과 회원가입 버튼이 추가될 예정입니다.
            <Link to="/">메인</Link>
        </div>
    )
}