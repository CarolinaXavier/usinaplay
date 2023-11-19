import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomCardType } from "src/app/types/custom-card.type";
import { HomeService } from "../services/home.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  personals$!: Observable<CustomCardType[]>;
  programas$!: Observable<CustomCardType[]>;
  conteudos$!: Observable<CustomCardType[]>;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.personals$ = this.homeService.get().pipe();
    this.programas$ = this.homeService.get().pipe();
    this.conteudos$ = this.homeService.get().pipe();
  }
}
