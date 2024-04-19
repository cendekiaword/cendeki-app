import React from "react";
import * as animationData from "@/lotties/reading1.json";
import history from "@/lotties/history1.json";
import Navbar from "@/components/Navbar";
import { LottieMediumRound } from "@/components/Lottie";
import Branding from "@/components/Branding";
import Teaser from "@/components/Teaser";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-dvh w-full flex-col items-center justify-center gap-20 border-black bg-sky-300">
        <div className="flex w-full items-center justify-evenly">
          <article className="z-5 prose flex max-w-[50%] flex-col">
            <h1 className="my-1">Interactive Learning Platform</h1>
            <p className="my-1 text-lg font-medium lg:text-2xl">
              Where education meets entertainment!
            </p>
            <p className="-my-1 text-justify">
              Dive into a world of captivating storytelling that puts you at the
              center of the narrative. Engage your mind and enhance your
              learning experience by filling in missing words from our engaging
              stories. Whether you're a student looking to improve your language
              skills or someone eager to learn in a fun and interactive way, our
              platform offers a unique blend of fun and education. Join us on
              this exciting journey of discovery and unlock your full learning
              potential!
            </p>
          </article>
          <LottieMediumRound
            animationData={JSON.parse(JSON.stringify(animationData))}
          />
        </div>
        <div className="w-3/5 overflow-clip hover:overflow-auto">
          <div className="flex w-full flex-nowrap gap-7">
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              History
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Social
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Language
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Science
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Science
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Science
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Science
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Science
            </h2>
            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Science
            </h2>

            <h2 className="h-40 min-w-60 rounded-xl border border-black text-center text-xl">
              Science
            </h2>
          </div>
        </div>
      </div>
      <Teaser animationData={history} />
      {/* <Branding /> */}
    </>
  );
}
