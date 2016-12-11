import {Component} from '@angular/core';
import strings from '../../strings';

/**
 * SettingsPage class is the Settings view controller
 * 
 * @class {SettingsPage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar color="white">
                <ion-title>{{ Text.PAGE_SETTINGS_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="settings">
            <ion-list>
                <ion-item>
                    <ion-avatar item-left>
                        <img src="http://lorempixel.com/100/100/transport">
                    </ion-avatar>
                    <h2>Renato Gonçalves</h2>
                    <p>renagon@gmail.com</p>
                    <ion-icon name="log-out" item-right></ion-icon>
                </ion-item>
                <ion-list-header>
                    Usuário
                </ion-list-header>
                <ion-item>
                    <ion-icon name="person" item-left></ion-icon>
                    Perfil
                </ion-item>
                <ion-item>
                    <ion-icon name="map" item-left></ion-icon>
                    Endereço
                </ion-item>
                <ion-item>
                    <ion-icon name="card" item-left></ion-icon>
                    Cartões de crédito
                </ion-item>
                <ion-list-header>
                    Sistema
                </ion-list-header>
                <ion-item>
                    <ion-icon name="megaphone" item-left></ion-icon>
                    <ion-label>Ativar sons</ion-label>
                    <ion-toggle></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-icon name="notifications" item-left></ion-icon>
                    <ion-label>Receber notificações</ion-label>
                    <ion-toggle></ion-toggle>
                </ion-item>
                <ion-item>
                    <ion-icon name="help-circle" item-left></ion-icon>
                    Sobre
                </ion-item>
                <ion-item>
                    <ion-icon name="document" item-left></ion-icon>
                    Termos de Uso
                </ion-item>
            </ion-list>
        </ion-content>
        `,
})
export class SettingsPage {

    public get Text(): any {
        return strings;
    }
}