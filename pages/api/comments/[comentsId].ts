import { NextApiRequest, NextApiResponse } from "next";

function handleDynamicCommants(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  console.log(query);
  console.log(req.method);

  return res.status(200).json({ msg: "success!" });
}

export default handleDynamicCommants;
