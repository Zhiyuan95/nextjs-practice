"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputValue}`);
  };
  return (
    <div>
      <div className="">
        <h1 className="">Enter Your Name</h1>
        <form className="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            className=""
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default page;
