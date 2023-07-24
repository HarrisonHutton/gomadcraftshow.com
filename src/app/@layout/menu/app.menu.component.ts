import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    /*
        { label: 'Add Vendor', path: 'add-vendor', faIconClass: 'fa-solid fa-user-plus'},
    { label: 'Search', path: 'search', faIconClass: 'fa-solid fa-search'},
    { label: 'Crafter Lists', path: 'crafter-lists', faIconClass: 'fa-solid fa-list'},
    { label: 'Email', path: 'email', faIconClass: 'fa-regular fa-envelope'}
    */

    ngOnInit() {
        // Using font awesome icons
        this.model = [
            {
                label: 'Applications',
                items: [
                    {
                        label: 'Add Vendor',
                        icon: "fa-solid fa-user-plus",
                        routerLink: ['/add-vendor']
                    },
                    {
                        label: 'Search',
                        icon: "fa-solid fa-search",
                        routerLink: ['/search']
                    },
                    {
                        label: 'Vendor Lists',
                        icon: "fa-solid fa-list",
                        routerLink: ['/vendor-lists']
                    },
                    {
                        label: 'Email',
                        icon: "fa-regular fa-envelope",
                        routerLink: ['/email']
                    },
                    {
                        label: 'Event Updates',
                        icon: "fa-solid fa-newspaper",
                        routerLink: ['/event-updates']
                    },
                    {
                        label: 'Manage Admins',
                        icon: "fa-solid fa-people-roof",
                        routerLink: ['/manage-admins']
                    }
                ],
            },
        ];
    }
}
