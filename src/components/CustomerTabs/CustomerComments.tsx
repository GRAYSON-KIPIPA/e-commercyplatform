import Comment from "./Comment";

const CustomerCommentsTab = () => {
  return (
    <div className="flex">
      <div className="w-1/2 mr-2 ">
        <Comment />
        <Comment />
      </div>
      <div className="w-1/2 ml-2">
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default CustomerCommentsTab;
