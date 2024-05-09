import {
  AfterViewChecked,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-bagian-browse",
  templateUrl: "./bagian-browse.component.html",
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class BagianBrowseComponent
  implements OnInit, OnDestroy, AfterViewChecked {
  public ngOnInit() {
    console.log("disini");
  }

  ngOnDestroy() {}
  ngAfterViewChecked() {}
}
