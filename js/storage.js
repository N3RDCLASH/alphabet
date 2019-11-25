//cookie methods
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  //TODO save quiz config:DONE
  function setQuizCookie() {
    setCookie('currentQuestion', currentQuestionIndex, 1)
    setCookie('list', JSON.stringify(shuffledQuestions), 1)
  }
  //TODO reset the quiz config:DONE
  function resetQuizCookie() {
    setCookie('currentQuestion', '0', 1)
    setCookie('list', '', 1)
  }