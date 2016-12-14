import { ProfilePage } from './page';

declare var describe, beforeEach, it, expect;

describe("ProfilePage", () => {

    let page: ProfilePage;

    beforeEach(() => page = new ProfilePage());

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});