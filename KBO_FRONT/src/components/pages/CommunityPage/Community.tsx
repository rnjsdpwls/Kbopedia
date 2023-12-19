import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import { Container, ImagePosition, PostBtnPosition, Pagebutton, StyeldImages, StyledTable, CommunityTitle } from './StyledCommunity';
import PostBtn from './PostBtn';
import { Link } from 'react-router-dom';
import { InputForm } from './StyledCommunity';

// 데이터의 타입을 정의한 인터페이스
interface DataItem {
  id: number;
  num: number;
  title: string;
  name: string;
  created_at: string;
  updated_at: string;
  count: number;
  author: string;
  team: string;
}

export default function Community() {
  const ITEMS_PER_PAGE = 6;
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const handleSearchClick = () => {
    if (!searchClicked) {
      setSearchClicked(true); // 최초 클릭 시에만 true로 변경
    }
  };
  useEffect(() => {
    setSearchClicked(false);
  }, []);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const increaseCount = async (postId: number): Promise<void> => {
    try {
      const response = await axios.get<DataItem>(`http://127.0.0.1:8000/posts/${postId}/increase_count/`);
      // 증가된 count를 받아올 수 있습니다.
      console.log(`Count increased for post ${postId}: ${response.data.count}`);

      setData((prevData) => {
        return prevData.map((item) => {
          if (item.id === postId) {
            return {
              ...item,
              count: response.data.count,
            };
          }
          return item;
        })
      })

    } catch (error) {
      console.error('Error increasing count:', error);
    }
  };

  const [showInputForm, setShowInputForm] = useState<boolean>(true);

  useEffect(() => {
    // 검색 버튼이 클릭된 경우에만 실행
    if (searchClicked) {
      setLoading(true); // 로딩 상태 활성화
      axios.get('http://127.0.0.1:8000')
        .then((response) => {
          let filteredData = response.data;
          if (searchTerm) {
            filteredData = response.data.filter((item: DataItem) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
          }
          if (filteredData.length === 0) {
            // 게시물이 없을 경우 경고 창 표시
            alert('게시물이 존재하지 않습니다.');
            window.location.href = 'http://localhost:3000/community'
          } else {
            setData(filteredData);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('데이터를 불러오는 중 오류 발생:', error);
          setLoading(false);
        });
    }
  }, [searchClicked]);
  const noDataMessage = data.length === 0 && !loading && searchClicked;


  useEffect(() => {
    // 데이터를 불러오는 부분
    axios.get('http://127.0.0.1:8000')
      .then((response) => {
        setData(response.data);
        setLoading(false); // 데이터 로딩이 완료되면 로딩 상태를 false로 변경
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류 발생: ' + error);
        setLoading(false); // 오류 발생 시에도 로딩 상태를 false로 변경
      });
  }, []);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const header: string[] = ["번호", "제목", "글쓴이", "등록일", "조회"];

  const paginatedData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const formatDate = (dateString: string): string => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;

    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  // 예시로 increaseCount 함수 호출
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchTerm.trim() === '') {
        // 검색어가 비어 있으면 경고 메시지를 표시하고 초기 상태로 리셋
        alert('검색어를 입력해주세요.');
        window.location.href = 'http://localhost:3000/community'
      } else {
        handleSearchClick();
      }
    }
  };
  
  const truncateTitle = (title: string) => {
    if (title.length > 10) {
      return title.slice(0, 10) + '...'; // 10글자 이상이면 말줄임표 추가
    }
    return title;
  };




  return (
    <Container>
      <CommunityTitle onClick={()=> window.location.href='http://localhost:3000/community'}>커뮤니티</CommunityTitle>
      <StyledTable>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={header.length}>로딩 중...</td>
            </tr>
          ) : (
            paginatedData.map((item, index) => {
              const reverseIndex = data.length - (currentPage - 1) * ITEMS_PER_PAGE - index;
              return (
                <tr key={index}>
                  <td><Link to={`/content/${item.id}`} onClick={() => increaseCount(item.id)}>{reverseIndex}</Link></td>
                  <td><Link to={`/content/${item.id}`} onClick={() => increaseCount(item.id)}>[{item.team}]{truncateTitle(item.title)}</Link></td>
                  <td><Link to={`/content/${item.id}`} onClick={() => increaseCount(item.id)}> {item.author}</Link></td>
                  <td><Link to={`/content/${item.id}`} onClick={() => increaseCount(item.id)}>{formatDate(item.created_at)}</Link></td>
                  <td><Link to={`/content/${item.id}`} onClick={() => increaseCount(item.id)}>{item.count}</Link></td>
                </tr>
              )
            }
            )
          )}
        </tbody>
      </StyledTable>


      <PostBtnPosition>
        {/* Display page numbers */}
        <div>

          {!searchClicked && (
            <div>
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagebutton
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
                >
                  {index + 1}
                </Pagebutton>
              ))}
            </div>
          )}

          {showInputForm && !searchClicked && (
            <InputForm
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              type="text"
              placeholder='검색어를 입력해보세요.'
            />
          )}
        </div>
        <PostBtn label={"글쓰기"}></PostBtn>
      </PostBtnPosition>
    </Container>
  );
}
