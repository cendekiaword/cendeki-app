import { BASE_URL } from "@/db/config/constant";
import Cookies from "universal-cookie";

export async function postScore(finalScore, storyId) {
  const cookies = new Cookies();
  return await fetch(`${BASE_URL}/api/scoring`, {
    cache: "no-store",
    headers: {
      Cookie: cookies.toString(),
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ finalScore, storyId }),
  });
}

export const getTimeUp = () => {
  let timeup = new Date();
  timeup.setSeconds(timeup.getSeconds() + 30);
  return timeup;
};



export const clearTimer = (endtime, setTimer, setGameEnd, Ref) => {
  if (Ref.current) clearInterval(Ref.current);
  setTimer("00:30");

  const id = setInterval(() => {
    startTimer(endtime, setTimer, setGameEnd, Ref);
  }, 1000);
  Ref.current = id;
};

export const startTimer = (endtime, setTimer, setGameEnd, Ref) => {
  let { total, minutes, seconds } = getTimeRemaining(endtime);
  if (total <= 0) {
    if (Ref.current) clearInterval(Ref.current);
    setTimer("00:00");
    setGameEnd(true);
  } else {
    setTimer(
      (minutes > 9 ? minutes : "0" + minutes) +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds),
    );
  }
};

export const getTimeRemaining = (e) => {
  const total = Date.parse(e) - Date.parse(new Date());
  if (!isNaN(total)) {
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  }
  return {
    total: 0,
    minutes: 0,
    seconds: 0,
  };
};

export const capitalize = (word, setCategory) => {
  const firstLetter = word.charAt(0);

  const firstLetterCap = firstLetter.toUpperCase();

  const remainingLetters = word.slice(1);

  const capitalizedWord = firstLetterCap + remainingLetters;
  setCategory(capitalizedWord);
};

export const getAllStoryFromCategory = async (category, setJourneyList) => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/journey/collect?journey=${category}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );
    if (!res.ok) {
      alert();
      // setLoading(false);
      return;
    }
    const { data } = await res.json();
    setJourneyList(data)
  } catch (error) {
    console.log(error)
  }
};