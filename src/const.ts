import { MainPage } from './pages/main/page';
import { AuthService } from './services/auth';
import { FacebookService } from './services/facebook';
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

export const DEFAULT_PAGE: any = MainPage;
export const DEFAULT_LANG: string = 'en-US';

export const TABS: any[] = [
    { icon: 'people', title: strings.TAB_CARDS, component: CardsPage },
    { icon: 'chatbubbles', title: strings.TAB_CHATS, component: ChatsPage },
    { icon: 'settings', title: strings.TAB_SETTINGS, component: SettingsPage }
];

export const COMPONENTS: any = [
    AboutPage,
    CardsPage,
    ChatPage,
    ChatsPage,
    LoginPage,
    MainPage,
    ProfilePage,
    SettingsPage,
    TabsPage,
    TermsPage,
];

export const PROVIDERS: any = [
    FacebookService,
    AuthService,
];

export const FACEBOOK_FIELDS: string[] = [
    'email',
    'name',
    'picture',
    'birthday',
    'gender',
    'location'
];

export const FACEBOOK_PERMISSIONS: string[] = [
    'email',
    'public_profile',
    'user_about_me',
    'user_birthday',
    'user_location',
];