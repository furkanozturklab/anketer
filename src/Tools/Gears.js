import { voteEffectAni } from "Animation/Animations";
import { voteSend } from "api/apimodel";


export const timerSet = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const timeDifference = tomorrow - now;
  let remainingHouse = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let remainingMinute = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  return [remainingHouse, remainingMinute, remainingSeconds];
}

export const voteEffect = async (vote, setPostVoteData, text, id,vote_col,setJsonData) => {

  console.log("working");

  voteSend(id,text,vote_col,setJsonData);
  voteEffectAni(vote);
  setPostVoteData(true);
}

export const getCookie = (cookieName) => {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return false;
}

export const setCookie = (cookieName, cookieValue, expiresDate) => {
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiresDate.toUTCString() + ";path=/";
}

export const getRemainingCookieTime = (cookieName) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      const cookieParts = cookie.split("=");
      const expiresIndex = cookieParts.findIndex(part => part.trim() === "expires");
      if (expiresIndex > -1 && expiresIndex < cookieParts.length - 1) {
        const expires = cookieParts[expiresIndex + 1].trim();
        const expirationDate = new Date(expires);
        const now = new Date();
        const remainingTime = expirationDate - now; // Kalan süreyi hesapla
        return remainingTime > 0 ? remainingTime : 0; // Kalan süre 0'dan küçükse 0 olarak döndür
      }
    }
  }
  return 0; // Çerez bulunamazsa veya süresi geçmişse 0 döndür
}

export const filteredJsonData = (jsonData) => {
  Object.keys(jsonData).reduce((acc, key) => {
    if (!Number.isInteger(Number(key))) {
      acc[key] = jsonData[key];
    }
    return acc;
  }, {});
} 