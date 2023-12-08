import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
// import { LayoutService } from "../service/app.layout.service";
import { Router } from '@angular/router';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor( private router: Router ) {
        this.items = []    
    }

    menuVisible = false;

    menuItems = [
        {
            label: 'Home',
            routerLink: '/'
        },
        {
            label: 'Register',
            routerLink: '/register'
        },
        {
            label: 'Find Vendors',
            routerLink: '/vendors'
        },
        {
            label: 'Contact',
            routerLink: '/contact'
        },
    ]

    toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }
}
