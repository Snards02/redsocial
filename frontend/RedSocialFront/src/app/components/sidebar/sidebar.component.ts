import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/inicio', title: 'Home', icon: 'nc-bank', class: '' },
    { path: '/mispost', title: 'Mis Post', icon: 'nc-bell-55', class: '' },
    { path: '/perfil', title: 'Muro', icon: 'nc-single-02', class: '' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[] = [];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
