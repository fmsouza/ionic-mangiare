import strings from './strings';
import * as Pages from './pages';
import * as Services from './services';

export const DEFAULT_PAGE: any = Pages.MainPage;
export const DEFAULT_LANG: string = 'en-US';

export const TABS: any[] = [
    { icon: 'people', title: strings.TAB_CARDS, component: Pages.CardsPage },
    { icon: 'chatbubbles', title: strings.TAB_CHATS, component: Pages.ChatsPage },
    { icon: 'settings', title: strings.TAB_SETTINGS, component: Pages.SettingsPage }
];

export const COMPONENTS: any = [
    Pages.AboutPage,
    Pages.CardsPage,
    Pages.ChatPage,
    Pages.ChatsPage,
    Pages.LoginPage,
    Pages.MainPage,
    Pages.ProfilePage,
    Pages.SettingsPage,
    Pages.TabsPage,
    Pages.TermsPage,
];

export const PROVIDERS: any = [
    Services.AuthService,
    Services.FacebookService,
    Services.GooglePlusService,
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

export const GOOGLEPLUS_OPTIONS: any = {
    scopes: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/user.addresses.read',
    ].join(' '),
    webClientId: '669351747838-90bniig2jmao349otatifdbmabloct34.apps.googleusercontent.com',
    offline: true,
};