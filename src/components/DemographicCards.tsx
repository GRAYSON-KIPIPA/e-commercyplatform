import React from "react";

type Props = {
  topText: string;
  bottomNumber: number;
};
const DemographicCards = ({ topText, bottomNumber }: Props) => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="border w-28 h-15 rounded p-2">
          <div className="ml-1 text-xs ">{topText}</div>
          <div className="ml-1 text-lg font-bold">{bottomNumber}</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default DemographicCards;
