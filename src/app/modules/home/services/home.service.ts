import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomCardType } from "src/app/types/custom-card.type";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor() { }

  get(): Observable<CustomCardType[]> {
    const cards: CustomCardType[] = [
      {
        _id: "1",
        srcImg: "assets/img/card-1.png",
        title: "Lorem Ipsum is simply",
        subTitle: "Lorem Ipsum is simply dummy.",
      },
      {
        _id: "2",
        srcImg: "assets/img/card-2.png",
        title: "Lorem Ipsum is simply",
        subTitle: "Lorem Ipsum is simply dummy.",
      },
      {
        _id: "3",
        srcImg: "assets/img/card-3.png",
        title: "Lorem Ipsum is simply",
        subTitle: "Lorem Ipsum is simply dummy.",
      },
      {
        _id: "4",
        srcImg: "assets/img/card-4.png",
        title: "Lorem Ipsum is simply",
        subTitle: "Lorem Ipsum is simply dummy.",
      },
      {
        _id: "5",
        srcImg: "assets/img/card-5.png",
        title: "Lorem Ipsum is simply",
        subTitle: "Lorem Ipsum is simply dummy.",
      },
    ];
    return new Observable<CustomCardType[]>((obs) => {
      obs.next(this.shuffleArray(cards));
    });
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
