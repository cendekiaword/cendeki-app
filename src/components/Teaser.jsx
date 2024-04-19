"use client";

import React, { useState } from "react";
import { LottieMediumRound } from "@/components/Lottie";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

export default function Teaser({ animationData }) {
  const journey = {
    fullStory:
      "Soekarno, juga dikenal sebagai Bung Karno, adalah proklamator kemerdekaan Indonesia yang pertama dan presiden pertama Republik Indonesia. Dia lahir pada tanggal 6 Juni 1901 di Blitar, Jawa Timur, dan dikenal sebagai seorang orator ulung dan pemimpin karismatik. Soekarno aktif dalam pergerakan kemerdekaan Indonesia dan menjadi tokoh utama dalam menyusun teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus 1945. Sebagai presiden, Soekarno mengusung konsep Nasionalisme, Agama, dan Komunisme (NASAKOM) untuk mengintegrasikan berbagai kepentingan politik dan sosial di Indonesia. Namun, masa kepemimpinannya juga diwarnai oleh konflik internal dan tekanan dari luar negeri, yang akhirnya menyebabkan ia digulingkan dari kekuasaan pada tahun 1967. Meskipun demikian, warisan pemikiran dan kontribusinya terhadap kemerdekaan Indonesia tetap dihargai dan dihormati hingga kini.",
    story:
      "Soekarno, juga dikenal sebagai Bung Karno, adalah proklamator kemerdekaan Indonesia yang pertama dan presiden pertama Republik Indonesia. Dia lahir pada tanggal 6 Juni ---- di Blitar, Jawa Timur, dan dikenal sebagai seorang orator ulung dan pemimpin ----. Soekarno aktif dalam pergerakan kemerdekaan Indonesia dan menjadi tokoh utama dalam menyusun teks Proklamasi Kemerdekaan Indonesia pada tanggal 17 Agustus ----. Sebagai presiden, Soekarno mengusung konsep Nasionalisme, ----, dan ---- (NASAKOM) untuk mengintegrasikan berbagai kepentingan politik dan ---- di Indonesia. Namun, masa kepemimpinannya juga diwarnai oleh konflik ---- dan tekanan dari luar negeri, yang akhirnya menyebabkan ia ---- dari kekuasaan pada tahun ----. Meskipun demikian, warisan pemikiran dan ---- terhadap kemerdekaan Indonesia tetap dihargai dan dihormati hingga kini.",
    answer: [
      "1901",
      "karismatik",
      "1945",
      "Agama",
      "Komunisme",
      "sosial",
      "internal",
      "digulingkan",
      "1967",
      "kontribusinya",
    ],
  };

  const journey2 = {
    fullStory:
      "Pangeran Diponegoro adalah salah satu tokoh pahlawan nasional Indonesia yang dikenal karena perjuangannya melawan penjajahan Belanda. Lahir pada tahun 1785 di Yogyakarta, Diponegoro adalah putra sulung Sultan Hamengkubuwono III. Sebagai pemimpin spiritual dan militer, ia memimpin perang Jawa yang dikenal sebagai Perang Diponegoro melawan Belanda pada tahun 1825 hingga 1830. Perang ini dipicu oleh kebijakan-kebijakan kolonial Belanda yang menindas dan merampas hak-hak rakyat Jawa. Meskipun Diponegoro melakukan perlawanan sengit, namun akhirnya Belanda berhasil mengalahkannya dengan bantuan pasukan yang lebih kuat. Diponegoro ditangkap pada tahun 1830 dan diasingkan ke Manado, Sulawesi Utara, di mana ia meninggal pada tahun 1855. Namanya tetap diabadikan sebagai simbol perlawanan dan keberanian dalam memperjuangkan kemerdekaan Indonesia.",
    story:
      "Pangeran Diponegoro adalah salah satu tokoh pahlawan nasional Indonesia yang dikenal karena perjuangannya melawan penjajahan Belanda. Lahir pada tahun ---- di Yogyakarta, Diponegoro adalah putra sulung Sultan ---- III. Sebagai pemimpin spiritual dan militer, ia memimpin perang Jawa yang dikenal sebagai Perang ---- melawan Belanda pada tahun ---- hingga ----. Perang ini dipicu oleh ----- kolonial Belanda yang menindas dan merampas hak-hak rakyat Jawa. Meskipun Diponegoro melakukan perlawanan sengit, namun akhirnya Belanda berhasil mengalahkannya dengan ---- pasukan yang lebih kuat. Diponegoro ditangkap pada tahun ---- dan diasingkan ke ----, Sulawesi Utara, di mana ia meninggal pada tahun ----. Namanya tetap diabadikan sebagai simbol ---- dan keberanian dalam memperjuangkan kemerdekaan Indonesia.",
    answer: [
      "1785",
      "Hamengkubuwono",
      "Diponegoro",
      "1825",
      "1830",
      "kebijakan-kebijakan",
      "bantuan",
      "1830",
      "Manado",
      "1855",
      "perlawanan",
    ],
  };

  const [answers, setAnswers] = useState(Array(journey.answer.length));
  const [feedback, setFeedback] = useState(
    Array(journey.answer.length).fill(""),
  );
  const [border, setBorder] = useState(Array(journey.answer.length).fill(""));

  function handleSubmit(e) {
    // e.preventDefault();
    if (e.key == "Enter") {
      const newFeedback = answers.map((answer, idx) => {
        const res =
          answer?.toLowerCase() === journey.answer[idx]?.toLowerCase()
            ? "Correct"
            : "Incorrect";

        setFeedback((prev) => {
          const updatedFeedback = [...prev];
          updatedFeedback[idx] = res;
          return updatedFeedback;
        });

        let borderClass = "";
        if (res === "Correct") {
          borderClass = "border-2 border-teal-400 placeholder:invert";
        } else if (res === "Incorrect" && answer && answer.length !== 0) {
          borderClass = "border-2 border-rose-400 placeholder:invert";
        } else {
          borderClass = "";
        }
        setBorder((prev) => {
          const updatedBorder = [...prev];
          updatedBorder[idx] = borderClass;
          return updatedBorder;
        });

        return res;
      });
    }
  }

  const questions = journey.story.split("----").map((question, idx) => {
    if (idx !== journey.story.split("----").length - 1) {
      return (
        <>
          <span className="" key={idx}>
            {question}
          </span>
          <span className="relative">
            <input
              type="text"
              placeholder="- - - -"
              value={answers[idx]}
              onKeyDown={handleSubmit}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[idx] = e.target.value;
                setAnswers(newAnswers);
              }}
              className={
                "inline h-6 w-40 max-w-fit rounded-full bg-white px-3 outline-none " +
                (border[idx] !== "" ? border[idx] : " bg-opacity-70")
              }
            />
            {feedback[idx] == "Correct" && (
              <>
                <span className="absolute right-6 top-0 text-sm">100</span>
                <FaCircleCheck className="absolute right-1 top-[0.1rem] size-4 text-xl text-cyan-500" />
              </>
            )}
            {border[idx] == "border-2 border-rose-400 placeholder:invert" && (
              <>
                <span className="absolute right-6 top-0 text-sm text-rose-500">
                  0
                </span>
                <FaCircleXmark className="absolute right-1 top-[0.1rem] size-4 text-xl text-rose-500" />
              </>
            )}
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className="" key={idx}>
            {question}
          </span>
        </>
      );
    }
  });

  return (
    <>
      <div className="min-h-dvh bg-sky-300">
        <div className="prose w-full text-center md:max-h-[15dvh]">
          <h1 className="border py-16">Experience it by yourself</h1>
        </div>
        <div className="prose grid h-[70dvh] w-full grid-flow-row grid-cols-2 bg-sky-300 md:max-h-dvh ">
          <div className="not-prose col-span-1 flex items-center justify-center">
            <LottieMediumRound
              className="w-[60%] bg-orange-300"
              animationData={JSON.parse(JSON.stringify(animationData))}
            />
          </div>
          <div className="col-span-1 h-full max-w-full">
            <content className="flex h-full w-full grid-cols-1 flex-col items-center justify-center">
              <b className="w-[80%] text-pretty md:text-justify">{questions}</b>
              {/* <button
                onClick={handleSubmit}
                className="mt-4 bg-blue-500 p-2 text-white"
              >
                Submit
              </button> */}
            </content>
          </div>
        </div>
      </div>
    </>
  );
}
