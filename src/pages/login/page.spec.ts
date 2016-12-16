import { LoginPage } from './page';

declare var describe, beforeEach, it, expect;

describe("LoginPage", () => {

    let page: LoginPage;

    beforeEach(() => page = new LoginPage(null, null, null));

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});