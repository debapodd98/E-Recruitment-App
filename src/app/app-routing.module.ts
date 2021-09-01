import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPostComponent } from './select-post/select-post.component';
import { ProfessionalQualificationComponent } from './professional-qualification/professional-qualification.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PreviewComponent } from './preview/preview.component';
import { CurrentOpeningComponent } from './current-opening/current-opening.component';
import { Ad1Component } from './ad1/ad1.component';
import { Ad2Component } from './ad2/ad2.component';

const routes: Routes = [
  {path: 'spost', component : SelectPostComponent},
  {path: 'pqual', component : ProfessionalQualificationComponent},
  {path: 'pinfo', component : PersonalInformationComponent},
  {path: 'paydetail', component : PaymentDetailComponent},
  {path: 'preview', component : PreviewComponent},
  {path: 'copening', component : CurrentOpeningComponent},
  {path: 'ad1', component : Ad1Component},
  {path: 'ad2', component : Ad2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SelectPostComponent, ProfessionalQualificationComponent, PersonalInformationComponent, PaymentDetailComponent, PreviewComponent, CurrentOpeningComponent, Ad1Component, Ad2Component];
