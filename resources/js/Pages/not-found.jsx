import React from 'react';
import { Logo404, LogoBuild } from "../Components/Icons/404";

export default function Custom404() {
  return (
    <>
        <Head title="404" />
      <div className="animate-bounce absolute my-8 m-4 top-0 right-0 pt-24">
        <LogoBuild/>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center my-16">
        <Logo404 />
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="font-extrabold text-[32px] text-primary">Page Not Found</h1>
          <h1 className="font-bold text-[32px]">Sorry, the page you are looking for could not be found.</h1>
          <div className="btn-cta mt-5 flex justify-center items-center w-full">
            <a href="/" rel="noopener noreferrer" className="py-3 bg-primary hover:bg-secondary font-bold text-white rounded-lg transition-all duration-300 text-center w-[470px]">
              Back to Home Page
            </a>
          </div>
        </div>
      </div>
      <div className="animate-bounce my-8 absolute bottom-0 left-0 m-4 pb-24">
        <LogoBuild/>
      </div>
    </>
  );
}
