import strings from '../strings';

export interface SocialId {
    facebook?: string;
    google?: string;
}

export class User {

    public constructor(
        public name: string,
        public email: string,
        public avatar: string,
        public birthday: string,
        public gender: string,
        public location: string,
        public socialId: SocialId
    ) {}

    public getGender(): string {
        switch (this.gender) {
            case 'female': return strings.GENDER_FEMALE;
            case 'male': return strings.GENDER_MALE;
            default: return strings.GENDER_UNKNOWN;
        }
    }

    public getAge(): number {
        let ms: number = (new Date()).getTime() - (new Date(this.birthday)).getTime(); // difference in milisseconds
        return Math.abs(ms / 1000 / 60 / 60 / 24 / 365);
    }
}