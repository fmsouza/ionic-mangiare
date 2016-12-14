import { TermsPage } from './page';

declare var describe, beforeEach, it, expect;

describe("TermsPage", () => {

    let page: TermsPage;

    beforeEach(() => page = new TermsPage());

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});