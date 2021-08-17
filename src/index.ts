import puppeteer from "puppeteer";

const uri = "http://192.168.0.161";

const main = async (): Promise<number> => {
  console.log("START APP.");

  const browser = await puppeteer.launch({
    // headless: false, // デバッグ時のみfalse
  });
  const page = await browser.newPage();

  try {
    await page.goto(uri);

    const content = await page.$("div.func-result");

    // レンダリング待ち
    sleep(10000);

    const jsonTextArray = await content?.$$eval("#func-result-pre", (nodes) =>
      nodes.map((n) => n.innerHTML)
    );

    // 結果を表示
    jsonTextArray?.filter((jsonText) => {
      if (jsonText.match(/.*person.*/)) return;
    }).length
      ? console.log("Person")
      : console.log("Nobody");
  } catch {
    return 1;
  } finally {
    browser.close();
  }
  console.log("END APP.");
  return 0;
};

const sleep = (waitMsec: number): void => {
  const startMsec = new Date();
  while (new Date().getTime() - startMsec.getTime() < waitMsec);
  return;
};

main();
