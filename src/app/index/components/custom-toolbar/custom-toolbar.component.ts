import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { IonAccordionGroup } from "@ionic/angular";

@Component({
  selector: "app-custom-toolbar",
  templateUrl: "./custom-toolbar.component.html",
  styleUrls: ["./custom-toolbar.component.scss"],
})
export class CustomToolbarComponent implements OnInit, AfterViewInit {
  @Input() folder: any;
  @ViewChild("accordionGroup", { static: true })
  accordionGroup!: IonAccordionGroup;

  readonly wrapper = "wrapper";
  notification = false;

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === this.wrapper) {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = this.wrapper;
    }
  };

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit() { 
    setTimeout(() => {
      this.notification = true;
    }, 5000);
  }

  user = {
    name: "Carolina Xavier",
    level: "Nível Roxo",
    avatart: "assets/img/user.jpg"
  };
}
