import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { CustomToolbarComponent } from './components/custom-toolbar/custom-toolbar.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    IndexComponent,
    CustomToolbarComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    IonicModule,
  ]
})
export class IndexModule { }
