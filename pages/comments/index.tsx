import React from "react";

const CommentPage = () => {
  const [state, setstate] = React.useState<{ comments: string | undefined }>();

  React.useEffect(() => {
    fetch("/api/comments?tulisan=baru")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setstate(res);
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl text-slate-700">
        Isi State Comments: {state ? state?.comments : "Loading..."}
      </h1>
    </div>
  );
};

export default CommentPage;
