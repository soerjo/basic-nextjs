import { NextApiRequest, NextApiResponse } from "next";

export default function commentsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  console.log(query);
  return res.status(200).json({ comments: "anjay!" });
}
