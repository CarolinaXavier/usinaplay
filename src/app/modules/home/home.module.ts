import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule as HomeRoutingModule } from './home-routing.module';
import { HomePage } from './page/home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeService } from './services/home.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomePage],
  providers: [HomeService]
})
export class HomeModule {}
