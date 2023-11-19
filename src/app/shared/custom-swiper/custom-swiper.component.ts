import { Component, Input, OnInit } from "@angular/core";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { CustomCardType } from "src/app/types/custom-card.type";
import Swiper from "swiper";
import { SwiperOptions } from "swiper/types/swiper-options";

@Component({
  selector: "app-custom-swiper",
  templateUrl: "./custom-swiper.component.html",
  styleUrls: ["./custom-swiper.component.scss"],
})
export class CustomSwiperComponent implements OnInit {
  public swiper!: Swiper;
  constructor() { }

  @Input({ required: true }) data!: CustomCardType[];

  ngOnInit() {
    const swiperConfig: SwiperOptions = {
      direction: 'horizontal',
      freeMode: {
        enabled: true,
        sticky: true,
        momentumBounce: false,
        momentumVelocityRatio: 0.5
      },
      slidesPerView: 1.2,
      modules: [FreeMode, Navigation, Pagination],
    }
    this.swiper = new Swiper(".swiper", swiperConfig);
  }
}
