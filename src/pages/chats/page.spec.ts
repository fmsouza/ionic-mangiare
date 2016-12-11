import { ChatsPage } from './page';

declare var describe, beforeEach, it, expect;

describe("ChatsPage", () => {

    let page: ChatsPage;

    beforeEach(() => page = new ChatsPage());

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});