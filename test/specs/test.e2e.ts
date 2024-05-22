import homePage from "../pageobjects/home.page.js";

describe("Magento e2e test", () => {
  it("should navigate to the magento website", async () => {
    await homePage.open();
    await browser.maximizeWindow();

    const signInBtn = await homePage.signInBtn;

    await expect(signInBtn).toBeClickable();
  });
});
