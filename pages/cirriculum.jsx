import SemiCircleProgressBar from "@/components/Progress";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Dashbaord() {
  const [progress, setProgress] = useState(30);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new URLSearchParams();

      const response = await axios.post(
        "/courses/create_course/landing_page",
        form.toString()
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto p-10">
      <div className="flex flex-row justify-end md:justify-between mb-10">
        <h1 className="text-[#3949AB] text-4xl font-extrabold leading-9 tracking-normal text-center hidden lg:block">
          Youvatar
        </h1>
        <button className="bg-[#3949AB] text-white rounded px-3 py-2 text-sm">
          Save Draft
        </button>
      </div>
      <div className="flex justify-between">
        <img
          className="h-[548px] w-[265px] rounded-sm hidden lg:block"
          src="/assets/mobile.png"
        />
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h1 className="text-[#121212] font-bold text-3xl mb-2">Curriculum</h1>
          <div className="flex flex-row gap-4">
            <img className="w-full lg:w-[300px]" src="/assets/girl.png" />
            <div className="relative hidden lg:block">
              <SemiCircleProgressBar
                background="#3949AB33"
                diameter={350}
                strokeWidth={30}
                stroke="#3949AB"
                percentage={progress}
              />
              <div className="absolute bottom-0 right-0 left-0 flex flex-col items-center bg-white w-fit mx-auto">
                <span>Percentage</span>
                <span className="text-4xl font-bold">{progress}%</span>
              </div>
            </div>
          </div>
          <p className="text-#121212] mt-2">
            Start putting together your course by creating sections, lectures
            and practice
          </p>
          <div className="flex flex-col border border-[#C7C9D9] rounded mt-4 p-4">
            <h1>
              <b>Module 1:</b> Introduction
            </h1>
            <div className="block md:flex flex-col sm:flex-row border border-[#C7C9D9] justify-between items-center m-2 p-2 rounded">
              <h1>
                <b>Lecture 1:</b> Introduction
              </h1>
              <div className="flex gap-2 m-2">
                <button
                  type="submit"
                  className="bg-white border md:border-none border-[#3949AB] text-[#3949AB] rounded px-3 py-2 text-sm"
                >
                  Add Assignments
                </button>
                <button
                  type="submit"
                  className="bg-[#3949AB] text-white rounded px-3 py-2 text-sm"
                >
                  Add Resouce
                </button>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="bg-[#3949AB] text-white rounded px-3 py-2 text-sm w-fit"
            >
              Add next lecture
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#3949AB] text-white rounded px-3 py-2 text-sm w-fit mt-4"
          >
            Add New Module
          </button>
          <button
            type="submit"
            className="bg-[#3949AB] text-white rounded px-3 py-2 text-sm w-min mt-4 ml-auto"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}
