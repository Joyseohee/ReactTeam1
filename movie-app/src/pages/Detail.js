import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import tmdbAPI from "../tmdbAPI";

import { useDispatch, useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import Modal from "../components/Review/Modal";
import ReviewList from "../components/Review/ReviewList";
import ReviewInsert from "../components/Review/ReviewInsert";
import "../components/Review/ReviewInsert";
import "../components/Review/Modal";
import "../store";
import { ReviewWrite } from "../store";
import ReviewTestTemplate from "../components/ReviewTest/ReviewTestTemplate";
import ReviewTestList from "../components/ReviewTest/ReviewTestList";
import ReviewTestInsert from "../components/ReviewTest/ReviewTestInsert";

function Detail() {
  let id = useParams();
  const [movie, setMovie] = useState([]);
  const API_IMAGEURL = "https://image.tmdb.org/t/p/w400";

  console.log(id.id);

  useEffect(() => {
    tmdbAPI.get(`movie/${id.id}`).then((res) => {
      console.log(res.data);
      setMovie(res.data);
    });
  }, []);

  let [clickTab, setClickTab] = useState(0);

  return (
    <div>
      <h3 style={{ color: "white" }}>{movie.title}</h3>
      <img className="img" src={`${API_IMAGEURL}${movie.poster_path}`} />
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setClickTab(0);
            }}
            eventKey="link0"
          >
            환불정책
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setClickTab(1);
            }}
            eventKey="link1"
          >
            교환방법
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setClickTab(2);
            }}
            eventKey="link2"
          >
            상품평
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent clickTab={clickTab}></TabContent>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>
  );
}

function TabContent({ clickTab }) {
  // 작성 날짜 출력(작성당일날짜(오늘))
  const current = new Date();
  const date = `${current.getFullYear()}/${
    current.getMonth() + 1
  }/${current.getDate()}`;
  let today = useState(date);

  // 아이디 테스트
  let ID = useState("테스트 아이디");

  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "오늘의 점심 메뉴 정하기",
    },
    {
      id: 2,
      content: "오늘의 알고리즘 정하기",
    },
    {
      id: 3,
      content: "사고 싶은 상품 정하기",
      Date: "22-05-10",
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (content) => {
      const todo = {
        userid: ID,
        id: nextId.current,
        content,
        Date: today,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // 1씩 증가
    },
    [todos]
  ); // insert end

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  let [fade, setFade] = useState("");

  useEffect(() => {
    let t = setTimeout(() => {
      setFade("end");
    }, 30);
    return () => {
      clearTimeout(t);
      setFade("");
    };
  }, [clickTab]);

  // let state = useSelector((state) => state); // useSelector( () => {return} )
  // let dispatch = useDispatch();

  // const onInsert = useCallback(
  //   (content) => {
  //     const review = {
  //       id: state.review Text.current,
  //       content,
  //     };
  //     dispatch(ReviewWrite(state.reviewText.concat(review)));
  //   },
  //   [state.reviewText]
  // ); // insert end

  return (
    // <div className={"start" + fade}>
    <div className={`start ${fade}`}>
      {
        [
          <ReviewTestTemplate>
            <ReviewTestInsert onInsert={onInsert} />
            <ReviewTestList todos={todos} />
          </ReviewTestTemplate>,
          <div className="ModalWrap">
            <button className="ModalButton" onClick={onClickButton}>
              Click Me !
            </button>
            {isOpen && (
              <Modal
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            )}
          </div>,

          <ReviewList>
            {/* <ReviewInsert onInsert={onInsert}></ReviewInsert> */}
            <ReviewInsert></ReviewInsert>
          </ReviewList>,
        ][clickTab]
      }
    </div>
  );
}

export default Detail;
