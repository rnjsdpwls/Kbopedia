import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PostBtnPosition,
  StyledPostBtn,
  StyledPosts,
  StyledTitle,
} from "./StyledCommunity";
import { Input, StyledContent, StyledTable } from "../Posting/StyledPosting";

interface DataItem {
  title: string;
  content: string;
}

export default function Content() {
  const [kakaoNickname, setKakaoNickname] = useState<string>('');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem>();
  const [editableData, setEditableData] = useState<DataItem>({
    title: "",
    content: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // const storedNickname = localStorage.getItem('kakao_nickname');
  // if (storedNickname) {
  //   setKakaoNickname(storedNickname);
  // }

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    setLoading(true);
    const storedNickname = localStorage.getItem('kakao_nickname');
        if (storedNickname) {
            setKakaoNickname(storedNickname);
        }
    axios
      .get(`http://127.0.0.1:8000/${id}`)
      .then((response) => {
        setData(response.data);
        setEditableData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 오류 발생: " + error);
        setLoading(false);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/${id}`)
      .then(() => {
        console.log("삭제 성공");
        navigate("/community");
      })
      .catch((error) => {
        console.error("삭제 중 오류 발생: " + error);
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    axios
      .put(`http://127.0.0.1:8000/${id}`, editableData)
      .then(() => {
        console.log("수정 성공");
        fetchData(); // 수정 후 데이터 다시 불러오기
        setIsEditing(false); // 수정 완료 후 편집 모드 해제
        navigate("/community");
      })
      .catch((error) => {
        console.error("수정 중 오류 발생" + error);
      });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableData({
      ...editableData,
      title: e.target.value,
    });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableData({
      ...editableData,
      content: e.target.value,
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {isEditing ? (
            <div>
              <StyledTable>
                <thead>
                    <tr id='head'>
                        <th>글 작성</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>제목</td>
                        <td className='userInput' colSpan={3}><Input
                            type="text"
                            name="title"
                            value={editableData.title}
                            onChange={handleTitleChange}
                            placeholder='제목을 입력하세요.'
                        />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>글쓴이</td>
                        <td className='nickname'>{kakaoNickname || '익명'}</td>
                        <td className='title'>응원구단</td>
                        <td>
                            <select style={{ width: 80, height: 30, textAlign: 'center' }}>
                                <option>구단 선택</option>
                                <option value={"LG"}>LG</option>
                                <option value={"두산"}>두산</option>
                                <option value={"키움"}>키움</option>
                                <option value={"롯데"}>롯데</option>
                                <option value={"삼성"}>삼성</option>
                                <option value={"SSG"}>SSG</option>
                                <option value={"KT"}>KT</option>
                                <option value={"한화"}>한화</option>
                                <option value={"NC"}>NC</option>
                                <option value={"기아"}>기아</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td id='content'>내용</td>
                        <td className='userInput' colSpan={3}>
                            <StyledContent>
                                <textarea
                                    name="content"
                                    value={editableData.content}
                                    onChange={handleContentChange}
                                    placeholder='내용을 입력하세요.'
                                />
                            </StyledContent>
                        </td>
                    </tr>
                </tbody>
            </StyledTable>
              <PostBtnPosition>
                <StyledPostBtn onClick={handleUpdate}>수정 완료</StyledPostBtn>
              </PostBtnPosition>
            </div>
          ) : (
            <div>
              <StyledTitle>
                <h1>제목 : {data?.title}</h1>
              </StyledTitle>
              <StyledPosts>{data?.content}</StyledPosts>
              <PostBtnPosition>
                <StyledPostBtn onClick={handleEdit}>수정</StyledPostBtn>
                <StyledPostBtn onClick={handleDelete}>삭제</StyledPostBtn>
              </PostBtnPosition>
            </div>
          )}
        </div>
      )}
    </div>
  );
}