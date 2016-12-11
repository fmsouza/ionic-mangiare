import { ChatPage } from './page';

declare var describe, beforeEach, it, expect;

describe("ChatPage", () => {

    let page: ChatPage;

    beforeEach(() => page = new ChatPage(null));

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});