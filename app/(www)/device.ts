import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userAgent = req.headers["user-agent"];
  const device = userAgent ? { type: "desktop" } : { type: "mobile" };
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  if (viewport === "mobile") {
    res.redirect("/mobile");
  } else {
    res.redirect("/desktop");
  }
}
