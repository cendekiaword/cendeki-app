import React from "react";

export default function PromptAPI({ category, generatePrompt, setQuestion }) {
  return (
    <>
      <h2 className="text-2xl font-bold">Subject: {category}</h2>
      <p className="text-center">
        Create your unique learning path for this subject using AI-generated
        stories here:
      </p>
      <input
        type="text"
        className="border-primary h-8 w-[60%] max-w-[60%] rounded-lg border text-center"
        onKeyDown={generatePrompt}
        placeholder="Ask any someone/something history..."
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div className="mt-4 flex items-center gap-16">
        <button
          className="border-primary w-48 rounded-md border px-1 hover:shadow-md hover:shadow-sky-400"
          onClick={generatePrompt}
        >
          Generate
        </button>
      </div>
    </>
  );
}
