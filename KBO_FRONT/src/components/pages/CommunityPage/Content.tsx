import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PostBtnPosition,
  StyledPostBtn,
  StyledPosts,
  StyledTitle,
} from "./StyledCommunity";

interface DataItem {
  title: string;
  content: string;
}

export default function Content() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem>();
  const [editableData, setEditableData] = useState<DataItem>({
    title: "",
    content: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    setLoading(true);
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
              <label>
                제목:
                <input
                  type="text"
                  value={editableData.title}
                  onChange={handleTitleChange}
                />
              </label>
              <br />
              <label>
                내용:
                <textarea
                  value={editableData.content}
                  onChange={handleContentChange}
                />
              </label>
              <br />
              <StyledPostBtn onClick={handleUpdate}>수정 완료</StyledPostBtn>
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
