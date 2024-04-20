import React from "react";
import * as animationData from "@/lotties/reading1.json";
import history from "@/lotties/history1.json";
import Navbar from "@/components/Navbar";
import { LottieHalfPage, LottieMediumRound } from "@/components/Lottie";

export default function Home() {
  const journey = {
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


  return (
    <main className="flex min-h-[300dvh] w-full flex-col items-center bg-sky-300">
      <div className="flex h-dvh w-full flex-col items-center justify-center gap-20 border-black">
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
        <div className="flex w-full justify-center gap-7">
          <h2 className="h-40 w-[20%] rounded-xl border border-black text-center text-xl">
            History
          </h2>
          <h2 className="h-40 w-[20%] rounded-xl border border-black text-center text-xl">
            Social
          </h2>
          <h2 className="h-40 w-[20%] rounded-xl border border-black text-center text-xl">
            Language
          </h2>
          <h2 className="h-40 w-[20%] rounded-xl border border-black text-center text-xl">
            Science
          </h2>
        </div>
      </div>
      <div className="flex min-h-dvh w-full flex-col justify-between bg-orange-300">
        <h1 className="mt-5 h-20 text-center font-sans text-4xl">
          Awesome team behind the code
        </h1>
        <div className="flex justify-evenly">
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Raihan Yumna</p>
            <img
              src="https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Back-end Team</p>
          </div>
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Bayu Prasetya Utomo</p>
            <img
              src="https://images.pexels.com/photos/279360/pexels-photo-279360.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Front-end Team</p>
          </div>
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Derio Anjaya</p>
            <img
              src="https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Back-end Team</p>
          </div>
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Galih Aditya M</p>
            <img
              src="https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Front-end Team</p>
          </div>
        </div>
        <div className="mb-5 flex min-h-[20dvh] min-w-[90dvw] max-w-[90dvw] self-center rounded-lg border px-5 py-2">
          <h1 className="text-4xl">Tech stack</h1>
        </div>
      </div>
      <div className="grid min-h-dvh grid-cols-2 bg-indigo-300">
        <div className="col-span-1 flex items-center bg-slate-300">
          <LottieHalfPage
            className="mx-auto rounded-xl"
            animationData={JSON.parse(JSON.stringify(history))}
          />
        </div>
        <div className="col-span-1 content-center">
            <content className="prose">
              <p className="max-w-prose text-balance">{journey.fullStory}</p>
              <p>{journey.story}</p>
            </content>
        </div>
      </div>
    </main>
  );
}
