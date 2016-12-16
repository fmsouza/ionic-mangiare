import { MainPage } from './page';

declare var describe, beforeEach, it, expect;

describe("MainPage", () => {

    let page: MainPage;

    beforeEach(() => page = new MainPage(null, null));

    it("should contain 'Hello world!' in 'content' property", () => {
        // expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});