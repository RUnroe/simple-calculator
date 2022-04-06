const puppeteer = require('puppeteer');
let testsPassed = 0;
let totalTests = 5;

const  evaluate = async (page, expected) => {
    let output = await page.$eval('#output', ele => ele.textContent);
    if (expected !== output) console.log(`Test did not pass. Expected (${expected}) and read (${output})`);
    else testsPassed++;
}

/*
    Puppeteer End to End Testing
    In one session, puppeteer loads the calculator and tests 5 different math problems,
    clearing the calculator in-between each. It keeps track of how many problems it got 
    right out of the 5 its testing.
*/

(async () => {
    const browser = await puppeteer.launch({slowMo: 80, headless: false});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    //10 + 9 = 19
    await page.click("button#b1");
    await page.click("button#b0");
    await page.click("button#add");
    await page.click("button#b9");
    await page.click("button#equals");
    await evaluate(page, "19")

    await page.click("button#clearAll");

    //3 - 4 = -1
    await page.click("button#b3");
    await page.click("button#subtract");
    await page.click("button#b4");
    await page.click("button#equals");
    await evaluate(page, "-1")

    await page.click("button#clearAll");

    //6.5 * 7 = 45.5
    await page.click("button#b6");
    await page.click("button#decimal");
    await page.click("button#b5");
    await page.click("button#multiply");
    await page.click("button#b7");
    await page.click("button#equals");
    await evaluate(page, "45.5")

    await page.click("button#clearAll");

    //-8 / 2 = -4
    await page.click("button#b8");
    await page.click("button#toggleSign");
    await page.click("button#divide");
    await page.click("button#b2");
    await page.click("button#equals");
    await evaluate(page, "-4")

    await page.click("button#clearAll");

    //-4.5 * 2 = 9
    await page.click("button#b4");
    await page.click("button#decimal");
    await page.click("button#b5");
    await page.click("button#toggleSign");
    await page.click("button#multiply");
    await page.click("button#b2");
    await page.click("button#equals");
    await evaluate(page, "-9")

    console.log(`${testsPassed} / ${totalTests} test problems passed`);
    await browser.close();
})();