"use server";
import { BASE_URL } from "@/db/config/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function profile() {
  // console.log(cookies());
  let res = await fetch(`${BASE_URL}/api/profile`, {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  // console.log(res);
  let result = await res.json();
  // console.log(result);
  return result.data;
}

// get random story
export async function getStory(params) {
  let res = await fetch(`${BASE_URL}/api/journey?journey=${params}`, {
    cache: "no-store",
    headers: {
      Cookie: cookies().toString(),
    },
  });

  let result = await res.json();

  return result.story[0];
}

export async function editProfile({ fullname, bio }) {
  let res = await fetch(`${BASE_URL}/api/profile`, {
    method: "PATCH",
    cache: "no-store",
    body: JSON.stringify({ fullname, bio }),
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });
  // console.log(res);
  const result = await res.json();
  // console.log(result);
  return redirect('/profile/details')
}
