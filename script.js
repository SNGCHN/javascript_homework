const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

//문제 1.

// 1. 객체를 JSON 문자열로 변환하여 로컬 스토리지에 저장
localStorage.setItem("user", JSON.stringify(user));

// 2. 로컬 스토리지에서 데이터 조회 및 객체로 변환하여 콘솔에 출력
const user1 = JSON.parse(localStorage.getItem("user"));
console.log(user1);

// 3. 사용자 객체의 나이를 30으로 변경
const user2 = { ...user, 나이: 30 };

// 4. 변경된 객체를 다시 로컬 스토리지에 저장
const user3 = localStorage.setItem("user2", JSON.stringify(user2));

// 5. 로컬 스토리지에서 데이터 삭제
localStorage.removeItem("user3");

// 삭제 후 데이터 조회하여 null이 출력되는지 확인
console.log(localStorage.getItem("user3"));

//문제 2.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));
