import axios from "axios";
const AxiosLogin = (isUser, { signin }) => {
  if (isUser) {
    axios
      .get(`http://localhost:8080/users/email/`, {
        headers: {
          Authorization: "Basic ",
        },
      })
      .then(function (res) {
        let userId = res.data.user_id;
        let surname = res.data.surname;
        let name = res.data.name;
        let patronim = res.data.patronim;
        let inn = res.data.inn;
        let accNumber = res.data.accNumber;
        let passport = res.data.passport;
        let snils = res.data.snils;
        let email = res.data.email;
        let rate = res.data.rate;
        signin(
          userId,
          surname,
          name,
          patronim,
          inn,
          accNumber,
          passport,
          snils,
          email,
          rate
        );
      })
      .catch(function (e) {
        console.log(e);
      });
  } else {
    axios
      .get(`http://localhost:8080/users/email/`, {
        headers: {
          Authorization: "Basic ",
        },
      })
      .then(function (res) {
        let moderatorId = res.data.id;
        let nickname = res.data.nickname;
        let problemId = res.data.problem_id;
        signin(moderatorId, nickname, problemId);
      })
      .catch(function (e) {
        console.log(e);
      });
  }
};
export { AxiosLogin };
