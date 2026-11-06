const secondValue = 5
const timeout = secondValue * 1000;

// timeout 후에 실행되는 함수
setTimeout(() => {
    console.log(`${secondValue}초 후에 실행되는 함수`);
}, timeout);
