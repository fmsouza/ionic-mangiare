import { AboutPage } from './page';

declare var describe, beforeEach, it, expect;

describe("AboutPage", () => {

    let page: AboutPage;

    beforeEach(() => page = new AboutPage());

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});