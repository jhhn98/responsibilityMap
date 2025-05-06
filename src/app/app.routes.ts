import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { TemplateComponent } from 'app/modules/admin/template/template.component';
import { ListComponent } from './shared/board/list/list.component';
import { DetailComponent } from './shared/board/detail/detail.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @ts-ignore
// @ts-ignore
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'responsibility-system'},
    {path: '', pathMatch : 'full', redirectTo: 'responsibility-map'},
    {path: '', pathMatch : 'full', redirectTo: 'executive-dashboard'},
    {path: '', pathMatch : 'full', redirectTo: 'ipm-check-department'},
    {path: '', pathMatch : 'full', redirectTo: 'ipm-check-executive'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'responsibility-system'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'responsibility-map'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'executive-dashboard'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'ipm-check-department'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'ipm-check-executive'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes')},
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [

            {path: 'responsibility-set', loadChildren: () => import('app/modules/admin/responsibility-set/responsibility-set.routes')},
            {path: 'responsibility-system', loadChildren: () => import('app/modules/admin/responsibility-system/responsibility-system.routes')},
            {path: 'bank-responsibility-map', loadChildren: () => import('app/modules/admin/bank-responsibility-map/bank-responsibility-map.routes').then(m => m.BankResponsibilityMapRoutingModule)},
            {path: 'executive-responsibility-map', loadChildren: () => import('app/modules/admin/executive-responsibility-map/executive-responsibility-map.routes').then(m => m.ExecutiveResponsibilityMapRoutingModule)},
            {path: 'responsibility-map', loadChildren: () => import('app/modules/admin/responsibility-map/responsibility-map.routes').then(m => m.ResponsibilityMapRoutingModule)},
            {path: 'accountability-information-management', loadChildren: () => import('app/modules/admin/accountability-information-management/accountability-information-management.routes')},

            {path: 'executive-information-management', loadChildren: () => import('app/modules/admin/executive-information-management/executive-information-management.routes').then(m => m.ExecutiveInformationManagementModule)},

            {path: 'meeting-information-management', loadChildren: () => import('app/modules/admin/meeting-information-management/meeting-information-management.routes')},
            {path: 'organization-management', loadChildren: () => import('app/modules/admin/organization-management/organization-management.routes')},

            {path: 'executive-dashboard', loadChildren: () => import('app/modules/admin/executive-dashboard/executive-dashboard.routes')},
            {path: 'ipm-check-department', loadChildren: () => import('app/modules/admin/ipm-check-department/ipm-check-department.routes')},
            {path: 'ipm-check-executive', loadChildren: () => import('app/modules/admin/ipm-check-executive/ipm-check-executive.routes')},
            {path: 'executive-management', loadChildren: () => import('app/modules/admin/executive-management/executive-management.routes')},
            {path: 'department-management', loadChildren: () => import('app/modules/admin/department-management/department-management.routes')},
            {path: 'status-implementation', loadChildren: () => import('app/modules/admin/status-implementation/status-implementation.routes')},
            //template
            {path: 'template', component: TemplateComponent},
            //Board routes
            {path: 'board/:bbsId', component: ListComponent},
            {path: 'board/:bbsId/detail/:bbsDetailId', component: DetailComponent},
            {path: '**', redirectTo: 'board/bbs01'}
        ]
    }
];
