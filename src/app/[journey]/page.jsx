"use client"
import { BASE_URL } from "@/db/config/constant";
import Link from "next/link";
import React from "react";

export default function page({ params }) {
  console.log(params);
  return (
    <>
      <main className="flex items-center justify-evenly bg-sky-300 md:min-h-[94.8dvh]">
        <section className="flex flex-col justify-center md:min-h-[50dvh] md:max-w-[30dvw]">
          <h1 className="mb-5 text-4xl font-bold">Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nostrum vel dicta corrupti aliquam praesentium eum saepe expedita
            nobis alias, sapiente non. Et quos rem iure. Laudantium tempore
            eveniet dolor.
          </p>
        </section>
        <section className="flex flex-col gap-8">
          <Link
            href={`/${params.journey}/new`}
            className="flex h-16 w-96 items-center rounded-md bg-slate-800 px-3 hover:outline"
          >
            <p className="text-2xl font-semibold invert">New Journey</p>
          </Link>
          <Link
            href={`/${params.journey}/curated`}
            className="flex h-16 w-96 items-center rounded-md bg-slate-800 px-3 hover:outline"
          >
            <p className="text-2xl font-semibold invert">Curated Journeys</p>
          </Link>
          <Link
            href={`/${params.journey}/revisit`}
            className="flex h-16 w-96 items-center rounded-md bg-slate-800 px-3 hover:outline"
          >
            <p className="text-2xl font-semibold invert">
              Revisiting Past Journeys
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}
