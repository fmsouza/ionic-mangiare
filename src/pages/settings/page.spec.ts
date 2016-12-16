import { SettingsPage } from './page';

declare var describe, beforeEach, it, expect;

describe("SettingsPage", () => {

    let page: SettingsPage;

    beforeEach(() => page = new SettingsPage(null, null));

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});