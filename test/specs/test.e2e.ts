import homePage from "../pageobjects/home.page";

describe("Magento e2e test", () => {
  it("should navigate to the magento website", async () => {
    await homePage.open("/");
    const signIn = await homePage.signInBtn;
    await expect(signIn).toBeClickable();
  });
});
