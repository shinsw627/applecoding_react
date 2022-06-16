import './App.css';
import { useState } from 'react';

function App() {
    let birthday = '누리달, 스무이레';
    const [스테이트실험, b] = useState('안녕 스테이트!');
    const [boardTitle, setBoardTitle] = useState(['갬성 터지는 밤', '다 번째', '나는 오늘도']);
    const [like, setLike] = useState([0, 0, 0]);
    const [modal, setModal] = useState(false);
    const [modalTitleNum, setModalTitleNum] = useState(0);

    const sortBoardTitle = () => {
        const copyBoardTitle = [...boardTitle];
        copyBoardTitle.sort();
        setBoardTitle(copyBoardTitle);
    };

    const copyBoardTitle2 = () => {
        const copyBoardTitle = [...boardTitle];

        // copyBoardTitle[0] === '갬성 터지는 밤' ? (copyboardTitle[0] = '갬성 오지는 밤') : (copyboardTitle[0] = '갬성 터지는 밤');
        const targetIndex = copyBoardTitle.indexOf('갬성 터지는 밤');
        const targetIndex2 = copyBoardTitle.indexOf('갬성 오지는 밤');
        if (targetIndex + 1) {
            copyBoardTitle[targetIndex] = '갬성 오지는 밤';
        } else if (targetIndex2 + 1) {
            copyBoardTitle[targetIndex2] = '갬성 터지는 밤';
        }

        setBoardTitle(copyBoardTitle);
    };

    //prev 쓸 때?
    const changeBoardTitle = () => {
        setBoardTitle(prevState => {
            console.log('1', prevState);
            if (prevState[0] === '갬성 터지는 밤') {
                const newBoardTitle = [...prevState];
                newBoardTitle[0] = '갬성 오지는 밤';
                console.log('2', newBoardTitle);
                return newBoardTitle;
            } else if (prevState[0] === '갬성 오지는 밤') {
                const newBoardTitle = [...prevState];
                newBoardTitle[0] = '갬성 터지는 밤';
                console.log('3', newBoardTitle);
                return newBoardTitle;
            }
        });
    };
    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그</h4>
            </div>

            {boardTitle.map((a, index) => {
                return (
                    <div className="list" key={index}>
                        <h4
                            onClick={() => {
                                setModalTitleNum(index);
                            }}
                        >
                            {boardTitle[index]}
                            <span
                                onClick={() => {
                                    const copyLike = [...like];
                                    copyLike[index] = copyLike[index] + 1;
                                    setLike(copyLike);
                                }}
                            >
                                &nbsp;&nbsp; 👍
                            </span>
                            &nbsp;
                            {like[index]}
                        </h4>
                        <p>p태그임 아무말 대잔치</p>
                    </div>
                );
            })}

            <div className="modal">
                <h4
                    onClick={() => {
                        setModal(!modal);
                    }}
                >
                    모달제목목
                </h4>
                {modal === true ? (
                    <Modal boardTitle={boardTitle} setBoardTitle={setBoardTitle} modalTitleNum={modalTitleNum} />
                ) : null}
            </div>
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.boardTitle[props.modalTitleNum]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    const copyBoardTitle = [...props.boardTitle];
                    copyBoardTitle[0] === '갬성 터지는 밤'
                        ? (copyBoardTitle[0] = '갬성 안 터지는 밤')
                        : (copyBoardTitle[0] = '갬성 터지는 밤');
                    props.setBoardTitle(copyBoardTitle);
                }}
            >
                글수정
            </button>
        </div>
    );
}

export default App;
