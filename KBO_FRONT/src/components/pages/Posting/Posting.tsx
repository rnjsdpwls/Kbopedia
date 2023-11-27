import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, StyledContent, StyledTable, PostBtnPosition, StyledPostBtn } from './StyledPosting';
import { useNavigate } from 'react-router-dom';

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    count: number;
}

interface NewPost {
    title: string;
    content: string;
}

const BulletinBoard: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState<NewPost>({ title: '', content: '' });
    const [editPost, setEditPost] = useState<Post | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Post[]>('http://127.0.0.1:8000/api/');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        isEditing: boolean = false
    ) => {
        const targetPost = isEditing ? editPost! : newPost;
        const updatedPost = {
            ...targetPost,
            [e.target.name]: e.target.value,
        };

        isEditing ? setEditPost(updatedPost as Post) : setNewPost(updatedPost as NewPost);
    };
    const formatDate = (dateString: string): string => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;

        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };


    const handlePostSubmit = async () => {
        try {
            const response = await axios.post<Post>('http://127.0.0.1:8000/api/', newPost);
            setPosts([...posts, response.data]);
            setNewPost({ title: '', content: '' });

        } catch (error) {
            console.log(error);
        }
        navigate('/community');

    };


    return (
        <Container>
            <StyledTable>
            <h1>글 작성</h1>
                <tr>
                    <td>제목</td>
                    <td colSpan={4}><input
                        type="text"
                        name="title"
                        value={newPost.title}
                        onChange={(e) => handleInputChange(e)}
                    />
                    </td>
                </tr>
                <tr>
                    <td>글쓴이</td>
                    <td>닉네임 부분</td>
                    <td>응원구단</td>
                    <td>응원구단명</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td colSpan={4}>
                        <StyledContent>
                            <textarea
                                name="content"
                                value={newPost.content}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </StyledContent>
                    </td>
                </tr>
            </StyledTable>
                <PostBtnPosition>
                    <StyledPostBtn onClick={handlePostSubmit}>글쓰기</StyledPostBtn>
                </PostBtnPosition>
        </Container>
    );
};

export default BulletinBoard;