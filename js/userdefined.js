function pwChk(e) {
    var password = prompt("비밀번호", "비밀번호를 입력해주세요");
    if (password === "1234") {
      alert("확인");
    } else {
      alert("틀린 비밀번호입니다");
      e.preventDefault();
    }
  }
