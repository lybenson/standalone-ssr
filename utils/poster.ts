import puppeteer from "puppeteer";

export const createPoster = async (queryString: string) => {
  const targetURL = `http://127.0.0.1:3000/poster?${queryString}`;

  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "-–disable-gpu",
      "-–disable-dev-shm-usage",
      "-–no-first-run",
      "-–no-zygote",
      "-–single-process",
    ],
    defaultViewport: {
      width: 5000,
      height: 5000,
    },
  });
  const page = await browser.newPage();
  await page.goto(targetURL, {
    waitUntil: "networkidle0",
  });
  const posterElement = await page.$("#poster");
  const buffer = await posterElement!.screenshot({
    encoding: "binary",
  });
  await browser.close();

  return buffer;
};
