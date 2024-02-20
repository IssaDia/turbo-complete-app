import React from "react";
import { Comment } from "react-loader-spinner";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center m-4">
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#4299e1"
      />
    </div>
  );
};

export default Spinner;
