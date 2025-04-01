import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsibilityMapComponent } from 'app/modules/admin/responsibility-map/responsibility-map.component';
import { ResponsibilityMapDetailComponent } from 'app/modules/admin/responsibility-map/responsibility-map-detail/responsibility-map-detail.component';
import { OverviewResponsibilitiesComponent } from 'app/modules/admin/responsibility-map/responsibility-map-detail/overview-responsibilities/overview-responsibilities.component';
import { ManagementDutiesComponent } from 'app/modules/admin/responsibility-map/responsibility-map-detail/management-duties/management-duties.component';
import { PositionInformationComponent } from 'app/modules/admin/responsibility-map/responsibility-map-detail/position-information/position-information.component';
import { ResponsibilitiesComponent } from 'app/modules/admin/responsibility-map/responsibility-map-detail/responsibilities/responsibilities.component';

const routes: Routes = [
    {
        path: '',
        component: ResponsibilityMapComponent
    },
    {
        path: 'responsibility-map-detail',
        component: ResponsibilityMapDetailComponent,
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
export class ResponsibilityMapRoutingModule { }
