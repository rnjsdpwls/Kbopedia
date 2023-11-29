import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledContent, StyledTable, PostBtnPosition, StyledPostBtn, Input, H1 } from './StyledPosting';
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

const BulletinBoard = () => {
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
                            value={newPost.title}
                            onChange={handleInputChange}
                            placeholder='제목을 입력하세요.'
                        />
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>글쓴이</td>
                        <td className='nickname'>닉네임 부분</td>
                        <td className='title'>응원구단</td>
                        <td>응원구단명</td>
                    </tr>
                    <tr>
                        <td id='content'>내용</td>
                        <td className='userInput' colSpan={3}>
                            <StyledContent>
                                <textarea
                                    name="content"
                                    value={newPost.content}
                                    onChange={handleInputChange}
                                    placeholder='내용을 입력하세요.'
                                />
                            </StyledContent>
                        </td>
                    </tr>
                </tbody>
            </StyledTable>
            <PostBtnPosition>
                <StyledPostBtn onClick={handlePostSubmit}>등록하기</StyledPostBtn>
            </PostBtnPosition>
        </div>
    );
};
export default BulletinBoard;