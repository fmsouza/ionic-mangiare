import { SettingsPage } from './pages/settings/page';
import { ChatsPage } from './pages/chats/page';
import { CardsPage } from './pages/cards/page';
import { AboutPage } from './pages/about/page';
import strings from './strings';

export const TABS: any[] = [
    { icon: 'albums', title: strings.TAB_CARDS, component: CardsPage },
    { icon: 'chatbubbles', title: strings.TAB_CHATS, component: ChatsPage },
    { icon: 'settings', title: strings.TAB_SETTINGS, component: SettingsPage }
];

export const Components: any = [
    CardsPage,
    ChatsPage,
    SettingsPage,
    AboutPage
];