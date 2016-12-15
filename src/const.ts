import { LoginPage } from './pages/login/page';
import { ProfilePage } from './pages/profile/page';
import { TermsPage } from './pages/terms/page';
import { TabsPage } from './pages/tabs/page';
import { SettingsPage } from './pages/settings/page';
import { ChatPage } from './pages/chat/page';
import { ChatsPage } from './pages/chats/page';
import { CardsPage } from './pages/cards/page';
import { AboutPage } from './pages/about/page';
import strings from './strings';

export const DEFAULT_PAGE: any = LoginPage;
export const DEFAULT_LANG: string = 'en-US';

export const TABS: any[] = [
    { icon: 'albums', title: strings.TAB_CARDS, component: CardsPage },
    { icon: 'chatbubbles', title: strings.TAB_CHATS, component: ChatsPage },
    { icon: 'settings', title: strings.TAB_SETTINGS, component: SettingsPage }
];

export const Components: any = [
    AboutPage,
    CardsPage,
    ChatPage,
    ChatsPage,
    LoginPage,
    ProfilePage,
    SettingsPage,
    TabsPage,
    TermsPage,
];

export const Providers: any = [];