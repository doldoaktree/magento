import { $ } from "@wdio/globals";
import BasePage from "./base.page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
  constructor() {
    super();
  }
  get signInBtn() {
    return $(
      "//div[@class='panel header']/ul/li[@class='authorization-link']/a"
    );
  }
}

export default new HomePage();
