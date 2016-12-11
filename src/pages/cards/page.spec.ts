import { CardsPage } from './page';

declare var describe, beforeEach, it, expect;

describe("CardsPage", () => {

    let page: CardsPage;

    beforeEach(() => page = new CardsPage());

    it("should contain 'Hello world!' in 'content' property", () => {
        expect(page.Text.PAGE_HOME_CONTENT).toEqual("Hello world!");
    });
});