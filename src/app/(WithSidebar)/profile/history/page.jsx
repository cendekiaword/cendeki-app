import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { profile } from "@/actions/actions";
import ButtonTryAgain from "@/components/ButtonTryAgain";

export default async function Page() {
  const getData = async () => {
    return await profile();
  };

  const data = await getData();
  let histories = data?.history;
  console.log(histories);

  return (
    <>
      <div className="w-full">
        <div className="mx-auto mt-16 flex w-dvw max-w-[70dvw] justify-center">
          <div className="shoadow-md mt-32 hidden h-[40%] w-60 max-w-[20dvw] rounded-lg border px-4 pt-4 shadow-md shadow-sky-600">
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
          <div className="mx-auto flex min-h-[50dvh] w-[50dvw] max-w-[60dvw] flex-col items-center">
            <h2 className="mb-8 text-4xl font-bold">Previous Journey</h2>
            <input
              type="text"
              placeholder="Search"
              disabled
              className="invisible mb-8 h-8 w-full max-w-[80%] rounded-lg border border-gray-600 px-8"
            />

            <div
             className="flex max-h-[60dvh] w-full max-w-[80%] flex-col gap-8 overflow-hidden rounded-lg px-5 overflow-y-auto xl:max-h-[65dvh] pt-5">
              {histories &&
                histories?.map((el, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundImage: 'url("/roman-style.png")',
                        // maxHeight: "40dvw",
                        // maxWidth: "80%",
                        backgroundSize: "cover",
                        position: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="border-primary flex flex-col gap-4 rounded-lg border p-4 "
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">{el.title}</h2>
                        <p className="text-white bg-black/70 rounded-lg px-2">{el.playDate.split("T")[0]}</p>
                      </div>
                      <div className="flex justify-between">
                        <div className="rounded-md bg-sky-100 px-4 py-1 text-xl font-bold">
                          {el.category}
                        </div>
                        <p className="text-xl font-bold text-white bg-black/70 rounded-lg px-2">Score: {el.score}</p>
                      </div>
                      <ButtonTryAgain id={el.storyId} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
