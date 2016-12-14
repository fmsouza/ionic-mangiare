import { TabsPage } from './page';

declare var describe, beforeEach, it, expect;

describe("TabsPage", () => {

    let page: TabsPage;

    beforeEach(() => page = new TabsPage());

    it("should contain 'Hello world!' in 'content' property", () => {
        // expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});