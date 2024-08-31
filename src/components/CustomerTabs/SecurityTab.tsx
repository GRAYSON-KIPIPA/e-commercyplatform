import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { IconButton } from "@mui/material";

const SecurityTab = () => {
  return (
    <div>
      <div className="border bg-red-500 h-20 w-3/5 rounded-xl text-white">
        <div className="ml-4 p-2 flex flex-col">
          <div className="text-sm font-bold ">Delete Customer</div>
          <div className="flex flex-row">
            <div className="text-xs w-4/5">
              You are about to delete ‘Amir Kingstone’. Note that this action is
              not reversible
            </div>
            <div className="flex content-end w-2/5">
              <IconButton className="text-white ml-24 rounded-lg p-4">
                <ArrowForwardIosOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTab;
