import React from "react";

export default function page_() {
  const myTimeout = setTimeout(myGreeting, 5000);

  console.log(myTimeout)
  function myGreeting() {
    document.getElementById("demo").innerHTML = "Happy Birthday!";
  }

  function myStopFunction() {
    clearTimeout(myTimeout);
  }
  return <div>page_</div>;
}
