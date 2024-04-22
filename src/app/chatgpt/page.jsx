"use client"
import React, { Fragment, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/db/config/constant";
// import Head from "next/head";

const ApnaChatGpt = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [questionPreview, setQuestionPreview] = useState("");
  const [answer, setAnswer] = useState();
  const [history, setHistory] = useState([]);

  const enterHit = (e) => {
    if (e.key === "Enter") {
      generateAnswer();
    }
  };

  const handleQuestion = (e) => {

  }

  const generateAnswer = async () => {
    try {
      setLoading(true);
      setQuestionPreview(question);
      setQuestion("");
      setAnswer("");
      const res = await fetch(`${BASE_URL}/api/chatgpt?query=${question}`,{
        method: 'POST',
        cache: 'no-store'
      });
      // console.log(res);
      const result = await res.json()
      console.log(result.answer);
      if (!res.ok) {
        alert();
        setLoading(false);
        return;
      }
      setLoading(false);
      setAnswer(result.answer.story);
      setHistory([{ question, answer: result.answer.story }, ...history]);
      // console.log(result.content);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <Fragment>
        <div className="dark:bg-gray-900 min-h-[92vh]">
          <h1 className="text-3xl font-bold text-center pt-5 text-white">Cendekia-Story-Prompt</h1>
          <div className="w-[92%] sm:w-[50%] m-auto mt-6">
            <div className="inputWrapper flex justify-around text-white">
              <input
                className="dark:bg-black p-3 py-1.5 rounded text-lg block w-[100%] border border-solid border-gray-500 dark:border-white"
                id="question"
                name="question"
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={enterHit}
                placeholder="Ask any question..."
                type="text"
                value={question}
              />
            </div>

            <div className="mt-8 pb-5 text-white">
              {questionPreview && (
                <div>
                  {" "}
                  <p>Q. {questionPreview}</p>
                  <p>{loading ? "Generating..." : "Fill this Story => " + answer}</p>
                </div>
              )}

              {answer !== ""
                ? history
                    .filter((data, key) => key !== 0)
                    .map((data, key) => (
                      <div className="mt-5" key={key}>
                        <p>{"Q. " + data.question}</p>
                        <div>{"Fill this Story => " + data.answer}</div>
                      </div>
                    ))
                : history.map((data, key) => (
                    <div className="mt-5" key={key}>
                      <p>{"Q. " + data.question}</p>
                      <div>{"Fill this Story => " + data.answer}</div>
                    </div>
                  ))}
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-[100%] fixed bottom-10">
            <button
              className="p-2 px-5 dark:bg-[#286969] bg-[#c72c6c] font-bold text-white rounded sm:ml-5"
              onClick={generateAnswer}
            >
              Generate
            </button>
          </div>
        </div>
    </Fragment>
  );
};

export default ApnaChatGpt;
