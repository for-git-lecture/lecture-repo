const secondValue = 10
const timeout = secondValue * 1000;
const api_key = "sk-1234567890abcdef";

// timeout 후에 실행되는 함수
setTimeout(() => {
    console.log(`${secondValue}초 후에 실행되는 함수`);
}, timeout);
