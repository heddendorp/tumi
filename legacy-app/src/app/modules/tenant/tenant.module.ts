import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { NewOrganizerDialogComponent } from './components/new-organizer-dialog/new-organizer-dialog.component';
import { ShowDataDialogComponent } from './components/show-data-dialog/show-data-dialog.component';
import { UpdateUserDialogComponent } from './components/update-user-dialog/update-user-dialog.component';
import { SharedModule } from '@tumi/legacy-app/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TenantRegistrationCodePageComponent } from './pages/registrations/tenant-registration-code-page/tenant-registration-code-page.component';
import { TenantRegistrationsPageComponent } from './pages/registrations/tenant-registrations-page/tenant-registrations-page.component';
import { TenantMoveOrdersPageComponent } from './pages/registrations/tenant-move-orders-page/tenant-move-orders-page.component';
import { TenantRegistrationDetailsPageComponent } from './pages/registrations/tenant-registration-details-page/tenant-registration-details-page.component';
import { TenantActivityLogPageComponent } from './pages/tenant-activity-log-page/tenant-activity-log-page.component';
import { TenantEditPageComponent } from './pages/tenant-edit-page/tenant-edit-page.component';
import { TenantInsurancePageComponent } from './pages/tenant-insurance-page/tenant-insurance-page.component';
import { TenantLandingPageComponent } from './pages/tenant-landing-page/tenant-landing-page.component';
import { TenantPhotosPageComponent } from './pages/tenant-photos-page/tenant-photos-page.component';
import { TenantPurchaseDetailsPageComponent } from './pages/tenant-purchase-details-page/tenant-purchase-details-page.component';
import { TenantPurchasesPageComponent } from './pages/tenant-purchases-page/tenant-purchases-page.component';
import { TenantStatsPageComponent } from './pages/tenant-stats-page/tenant-stats-page.component';
import { TenantUserInfoPageComponent } from './pages/tenant-user-info-page/tenant-user-info-page.component';
import { TenantUsersPageComponent } from './pages/tenant-users-page/tenant-users-page.component';
import { TenantOrganizersPageComponent } from './pages/tenant-organizers-page/tenant-organizers-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { TenantRefundsPageComponent } from './pages/tenant-refunds-page/tenant-refunds-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    NewOrganizerDialogComponent,
    ShowDataDialogComponent,
    TenantActivityLogPageComponent,
    TenantEditPageComponent,
    TenantInsurancePageComponent,
    TenantLandingPageComponent,
    TenantMoveOrdersPageComponent,
    TenantOrganizersPageComponent,
    TenantPhotosPageComponent,
    TenantPurchaseDetailsPageComponent,
    TenantPurchasesPageComponent,
    TenantRefundsPageComponent,
    TenantRegistrationCodePageComponent,
    TenantRegistrationDetailsPageComponent,
    TenantRegistrationsPageComponent,
    TenantStatsPageComponent,
    TenantUserInfoPageComponent,
    TenantUsersPageComponent,
    UpdateUserDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
    NgxChartsModule,
    ReactiveFormsModule,
    SharedModule,
    TenantRoutingModule,
  ],
})
export class TenantModule {}