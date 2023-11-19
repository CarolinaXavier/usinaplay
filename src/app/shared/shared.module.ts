import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSwiperComponent } from './custom-swiper/custom-swiper.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CustomSwiperComponent,
    CustomCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CustomSwiperComponent
  ]
})
export class SharedModule { }
