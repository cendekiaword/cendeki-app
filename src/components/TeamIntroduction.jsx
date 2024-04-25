import React from "react";

export default function TeamIntroduction() {
  return (
    <div
      id="about"
      className="mx-auto mt-32 flex max-w-[80dvw] flex-col items-center justify-between xl:max-w-[60dvw]"
    >
      <h2 className="mb-8 text-center text-4xl font-bold">Meet our team</h2>
      <p className="max-w-[75%] text-center xl:max-w-[60%]">
        Our philosophy is simple - hire a team of diverse, passionate people and
        foster a culture that empowers you to do your best work.
      </p>
      <div className="mx-auto mt-16 flex xl:min-w-[60%] w-full flex-wrap justify-center gap-16 xl:max-w-[60%]">
        {team.map((el, idx) => {
          return (
            <div key={idx} className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/279360/pexels-photo-279360.jpeg"
                alt=""
                className="mb-2 size-32 rounded-full object-cover"
              />
              <p className="text-lg font-semibold tracking-tighter">
                {el.name}
              </p>
              <p className="text-primary text-lg tracking-tighter">
                {el.position}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const team = [
  {
    name: "Bayu Prasetya Utomo",
    position: "Front-end Developer",
  },
  {
    name: "Derio Anjaya",
    position: "Back-end Developer",
  },
  {
    name: "Galih Aditya Mohammad",
    position: "Front-end Developer",
  },
  {
    name: "Derio Anjaya",
    position: "Back-end Developer",
  },
  {
    name: "Gilang Maulana Iwanusa",
    position: "UI/UX Designer",
  },
];
