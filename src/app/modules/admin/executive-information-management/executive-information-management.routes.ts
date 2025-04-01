import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecutiveInformationManagementComponent } from 'app/modules/admin/executive-information-management/executive-information-management.component';
import { ViewDataComponent } from 'app/modules/admin/executive-information-management/view-data/view-data.component';

const routes: Routes = [
    {
        path: '',
        component: ExecutiveInformationManagementComponent
    },
    {
        path: 'view-data',
        component: ViewDataComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExecutiveInformationManagementModule { }
