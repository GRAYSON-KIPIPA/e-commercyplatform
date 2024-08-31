import React from "react";

const Comment = () => {
  return (
    <div className="m-3">
      <div className="flex row ">
        <div className="flex col">
          <img src="person5.jpg" className="h-10 w-24 rounded-full" />
        </div>
        <div className="flex col ml-4">
          <div className="flex flex-col">
            <div className="font-bold">Samia Jamal</div>
            <div className="text-xs text-slate-400">4 days ago</div>
            <div className="flex mt-3 text-sm">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface
            </div>
            <div className="flex gap-4 m-1">
              <div className="border rounded-full pl-3 pr-3 border-blue-900 text-xs font-bold">
                reply
              </div>
              <div className="border rounded-full pl-3 pr-3 border-blue-900 text-xs font-bold">
                view all 4 replies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
