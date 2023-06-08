import { createPoster } from "@/utils/poster";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = req.body;
    let queryString = "";
    let index = 0;
    for (const key in body) {
      index++;
      if (index++ > 0) {
        queryString += "&";
      }
      const value = body[key];
      if (Array.isArray(value)) {
        queryString += `${key}=${encodeURIComponent(JSON.stringify(value))}`;
      } else {
        queryString += `${key}=${encodeURIComponent(value)}`;
      }
    }

    const buffer = await createPoster(queryString);

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
  } else {
    // 如果不是 POST 请求，返回 405 Method Not Allowed
    res.status(405).end();
  }
}
