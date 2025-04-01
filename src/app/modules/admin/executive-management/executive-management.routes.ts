import { Routes } from '@angular/router';
import { ExecutiveManagementComponent } from 'app/modules/admin/executive-management/executive-management.component';
import { DetailViewComponent } from 'app/modules/admin/executive-management/detail-view/detail-view.component';
import { WriteViewComponent } from 'app/modules/admin/executive-management/write-view/write-view.component';

export default [
    {
        path: '',
        component: ExecutiveManagementComponent,
    },
    {
        path: 'detail-view',
        component: DetailViewComponent
    },
    {
        path: 'write-view',
        component: WriteViewComponent
    }
] as Routes;
