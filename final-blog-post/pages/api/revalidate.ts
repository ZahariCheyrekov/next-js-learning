// http://localhost:3000/api/revalidate?path=/&secret=760cc77b9ff78f86d9c5c648c2912e03

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;
  await res.revalidate(path);

  return res.json({ revalidated: true });
}
