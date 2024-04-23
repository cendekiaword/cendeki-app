import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { profile } from "@/actions/actions";

export default async function page() {
  const getData = async () => {
    return await profile()
  }

  const data = await getData()
  // console.log(data);
  let histories = data.history
  // console.log(histories);

  return (
    <>
      <div className="mx-auto flex w-dvw max-w-[70dvw] justify-center mt-16">
        <div className="shoadow-md mt-32 h-[40%] w-60 max-w-[20dvw] rounded-lg border px-4 pt-4 shadow-md shadow-sky-600">
          <h2 className="text-2xl font-bold">Filters</h2>

          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>Date</AccordionTrigger>
              <AccordionContent>
                <input type="radio" input /> Newest
              </AccordionContent>
              <AccordionContent>
                <input type="radio" input /> Oldest
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Score</AccordionTrigger>
              <AccordionContent>
                <input type="radio" input /> Newest
              </AccordionContent>
              <AccordionContent>
                <input type="radio" input /> Oldest
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent>
                <input type="radio" input /> History
              </AccordionContent>
              <AccordionContent>
                <input type="radio" input /> Language
              </AccordionContent>
              <AccordionContent>
                <input type="radio" input /> Science
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mx-auto flex min-h-[50dvw] w-[40dvw] max-w-[60dvw] flex-col items-center">
          <h2 className="mb-8 text-4xl font-bold">History</h2>
          <input
            type="text"
            placeholder="Search"
            className="mb-8 h-8 w-full max-w-[80%] rounded-lg border border-gray-600 px-8"
          />

          <div className="flex max-h-[70dvh] w-full max-w-[80%] flex-col gap-8 overflow-hidden hover:overflow-y-auto">
            {histories && histories?.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="border-primary flex flex-col gap-4 rounded-lg border p-4 "
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">
                      {el.title}
                    </h2>
                    <p className="">{el.playDate}</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="rounded-md bg-sky-300 px-4 py-1 text-xl font-bold">
                      {el.category}
                    </div>
                    <p className="text-xl font-bold">Score: {el.score}</p>
                  </div>
                  <button className="border-primary h-10 rounded-md border hover:shadow hover:shadow-sky-500">
                    Try Again
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// const histories = [
//   // {
//   //   title: "Indonesia Independence",
//   //   category: "History",
//   //   date: "22/04/2024",
//   //   score: 800,
//   // },
//   // {
//   //   title: "Bahasa Indonesia",
//   //   category: "Language",
//   //   date: "22/04/2024",
//   //   score: 400,
//   // },
//   // {
//   //   title: "photosynthesis",
//   //   category: "Science",
//   //   date: "22/04/2024",
//   //   score: 1200,
//   // },
//   // {
//   //   title: "Majapahit Kingdom",
//   //   category: "History",
//   //   date: "22/04/2024",
//   //   score: 300,
//   // },
//   // {
//   //   title: "English",
//   //   category: "Language",
//   //   date: "22/04/2024",
//   //   score: 800,
//   // },
//   // {
//   //   title: "Quantum Reactor",
//   //   category: "Physics",
//   //   date: "22/04/2024",
//   //   score: 2000,
//   // },
//   // {
//   //   title: "Gravity",
//   //   category: "Physics",
//   //   date: "22/04/2024",
//   //   score: 1500,
//   // },
//   // {
//   //   title: "Japanese",
//   //   category: "Language",
//   //   date: "22/04/2024",
//   //   score: 900,
//   // },
// ];
