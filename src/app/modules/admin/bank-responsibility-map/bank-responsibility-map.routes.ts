import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankResponsibilityMapComponent } from 'app/modules/admin/bank-responsibility-map/bank-responsibility-map.component';
import { DetailViewComponent } from 'app/modules/admin/bank-responsibility-map/detail-view/detail-view.component';
import { OverviewResponsibilitiesComponent } from 'app/modules/admin/bank-responsibility-map/detail-view/overview-responsibilities/overview-responsibilities.component';
import { ManagementDutiesComponent } from 'app/modules/admin/bank-responsibility-map/detail-view/management-duties/management-duties.component';
import { PositionInformationComponent } from 'app/modules/admin/bank-responsibility-map/detail-view/position-information/position-information.component';
import { ResponsibilitiesComponent } from 'app/modules/admin/bank-responsibility-map/detail-view/responsibilities/responsibilities.component';

const routes: Routes = [
    {
        path: '',
        component: BankResponsibilityMapComponent
    },
    {
        path: 'detail-view',
        component: DetailViewComponent,
        children: [
            { path: 'overview-responsibilities', component: OverviewResponsibilitiesComponent },
            { path: 'management-duties', component: ManagementDutiesComponent },
            { path: 'position-information', component: PositionInformationComponent },
            { path: 'responsibilities', component: ResponsibilitiesComponent },
            { path: '', redirectTo: 'overview-responsibilities', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BankResponsibilityMapRoutingModule { }
