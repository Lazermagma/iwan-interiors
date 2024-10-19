"use client";
import Image from "next/image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Carousel } from "react-responsive-3d-carousel";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col bg-[#1E1E1E]">
      <div className="flex md:flex-row flex-col justify-between items-center px-24 pt-20">
        <img src="assets/images/Header_logo.png" className=" " />

        <a className="btn mt-6 md:btn-md md:w-60 md:mr-8 rounded-full">
          Portfolio <FileDownloadIcon />
        </a>
      </div>
      <div className="mb-3 md:h-32 md:w-3/4 md:relative md:top-10 ">
        <Carousel>
          <img
            src="/assets/images/place_holder1.jpg"
            alt="example-image-1"
            className="rounded-xl"
          />
          <img
            src="/assets/images/place_holder2.jpg"
            alt="example-image-2"
            className="rounded-xl"
          />
          <img
            src="/assets/images/place_holder2.jpg"
            alt="example-image-2"
            className="rounded-xl"
          />
          <img
            src="/assets/images/place_holder3.jpg"
            alt="example-image-2"
            className="rounded-xl"
          />
        </Carousel>
      </div>
      <div
        className="flex md:flex-row flex-col w-full items-stretch"
        id="lastitems"
      >
        <div className="flex flex-col mt-14 md:w-3/4 justify-end">
          <div className="flex flex-col md:flex-row font-bellMT text-white gap-3 p-3 w-[99%] bg-[#68696a] rounded-tr-2xl">
            <div>
              <p>
                <span className="font-bold">IWAN Interiors</span> specializes in
                creating exceptional interiors, fit-outs, and decorative
                solutions. We blend creativity with functionality to transform
                spaces into elegant environments that reflect our clients'
                vision and style.
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold">Our vision</span> is to solidify our
                services with more project executions while expanding in other
                Arab and European countries with the Iwan concept of humanity,
                functionality, and elegance.
              </p>
            </div>

            <div>
              <p>
                <span className="font-bold">Our mission</span> is to design
                projects without compensations, to achieve the optimum in the
                most possible ways and in all aspects of design where form and
                function have to be successfully fulfilled, regulations and
                budgets are considered, and the result is a pleasure to us, our
                client, the building users, and everyone passing by.
              </p>
            </div>
          </div>
          <div className="bg-[#4B4B4B] md:relative font-bellMT h-16 flex flex-col md:flex-row justify-evenly items-center text-[#9F9E9E] w-full md:w-[101%]">
            <p>info@iwaninteriors.com</p>
            <p>Full website coming soon. Stay tuned!</p>
          </div>
        </div>
        <div className="w-1/4 flex-shrink-0">
          <img
            src="/assets/images/pattern.png"
            className="w-full h-full object-cover md:flex hidden"
          />
        </div>
      </div>
    </div>
  );
}
