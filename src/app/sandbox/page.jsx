"use client";
import React from "react";
import Swal from "sweetalert2";

export default function page() {
  function fireSwal() {
    Swal.fire({
      title: "Time's up!",
      html: "<p class='leading-loose'>Your final score is 900 <br /> Do you want to see the correct answer ?</p>",
      icon: "info",
      showDenyButton: true,
      confirmButtonColor: "#1860b6",
      denyButtonColor: "#14b8a6",
      confirmButtonText: "Yes",
      denyButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("confirmed")

      } else {
        console.log("DENIED")
      }
    });
  }

  return <button onClick={fireSwal}>TRY</button>;
}
