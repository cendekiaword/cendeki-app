"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

export default function HeroBanner() {
  const cookies = new Cookies();
  const router = useRouter();
  const goToLogin = async () => {
    let data = await cookies.get("Authorization");
    if (!data) {
      return router.push("/login");
    }
    if (data) {
      const token = data.split(" ")[1];
      if (token) {
        return router.push('/lobby')
      }
    }
  };
  return (
    <div
      className="mx-auto mt-16 flex h-[363px] flex-col items-center justify-center gap-4 overflow-clip rounded-2xl md:max-w-[920px]"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/8aa6/5757/093bb5a8246e4246a5c784c5dbe90ff2?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hsFaR9N4UtPOqLk~mWXPOkNT5GURUBteADdUfRMf7duU~l~ItTl1IcgN4Nj0Y5Xy5LBODKt2nIen7uDsMZeHZwRmch2H6tbIhIWtN20-Dh1du7He3POFzB2i3ZZ3zArT7RQZAnCUl-79fP1QXrfrnVG2CotzQjyCFuHgZq5m97Ogh65w6E4NKrNjrqp9eYt6JLmTycgGTO2tGUonV7pQsF-hsZSMtNkJ5HphuCHlGepmCQ9AToVmUtm57VksfdxdgqNdYzpHw6Trw6b-sHGRfKqagmzZMRMZP24okcCEW3CvVbxInYtjjAJI6x~xycppMa0ThllyEbA~dr-SP6-N0A__')",
        maxHeight: "40dvw",
        maxWidth: "80dvw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-4xl font-semibold invert">
        CENDEKIA LEARNING PLATFORM
      </p>
      <p className="text-xl invert">Where education meets entertainment!</p>
      <button
        onClick={() => goToLogin()}
        className="bg-primary flex max-w-[150px] items-center justify-center rounded-lg px-4 py-3"
      >
        <p className="font-semibold invert">Try it for free!</p>
      </button>
    </div>
  );
}
