// const tag = ["h1", "h2", "h3", "h4", "h5", "h6"];

// for (let i = 0; i < tag.length; i++) {
//   const tagElement = document.createElement(tag[i]);
//   tagElement.innerText = tag[i];
//   boardRow0.appendChild(tagElement);
// }

//const body = document.querySelector("body");
let answer = "APPLE";

let attemps = 0;
let index = 0;
let timerFlag = false;

function appStart() {
  const handleKeyDown = (event) => {
    if (!timerFlag) startTimer();

    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(`board-row[data-id="${attemps}"]`)
      .shadowRoot.firstChild.childNodes[index];

    if (index === 5) {
      if (event.keyCode === 13) handleEnterKeyDown();
      else return;
    } else if (keyCode >= 65 && keyCode <= 90) {
      thisBlock.style.border = "2.5px solid #878A8C";
      thisBlock.innerText = key;
      index += 1;
      if (event.keyCode === 8) handleBackSpaceKeyDown(index);
    }
  };

  const handleEnterKeyDown = () => {
    // 정답확인
    console.log("정답확인");
    stopTimer("enter");
    let answerNum = 0;

    for (let i = 0; i < 5; i++) {
      let block = document.querySelector(`board-row[data-id="${attemps}"]`)
        .shadowRoot.firstChild.childNodes[i];

      if (block.innerText === answer[i]) {
        block.style.backgroundColor = "#6aaa64";
        answerNum += 1;
      } else if (answer.includes(block.innerText)) {
        block.style.backgroundColor = "#c9b458";
      } else {
        block.style.backgroundColor = "#787c7e";
      }

      block.style.color = "#fff";
    }

    nextLine();
  };

  const handleBackSpaceKeyDown = (index) => {
    // BackSpace
    console.log("BackSpace");

    let block = document.querySelector(`board-row[data-id="${attemps}"]`)
      .shadowRoot.firstChild.childNodes[index - 1];
    block.innerText = "";
  };

  const nextLine = () => {
    if (attemps === 5) {
      gamover();
      return;
    } else {
      index = 0;
      attemps += 1;
    }
  };

  const gamover = () => {
    // 게임종료
    window.removeEventListener("keydown", handleKeyDown);
    console.log("게임종료 및 애니메이션 이벤트 적용");
  };

  const startTimer = () => {
    let setSec = 15000;
    let second = setSec / 1000;
    const time = document.querySelector("#timer");
    timerFlag = true;

    const timer = setInterval(() => {
      second -= 1;
      console.log(second);
      if (second >= 10) time.innerText = `${second}`;
      else {
        time.innerText = `0${second}`;
        if (second < 4) time.style.color = "#ff0000";
        if (second === 0) {
          stopTimer("timeover");
          gamover();
        }
      }
    }, 1000);

    const stopTimer = (flag) => {
      if (flag === "enter") {
        console.log("Enter키 입력으로 타이머 중지");
        clearInterval(timer);
      }
      if (flag === "timeover") {
        console.log("Timeover 타이머 중지");
        handleEnterKeyDown();
        clearInterval(timer);
      }

      timerFlag = false;
    };
  };

  window.addEventListener("keydown", handleKeyDown);
}

appStart();
