import { AfterViewChecked, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-barang-browse',
    templateUrl: './barang-browse.component.html',
    providers: [],
    encapsulation: ViewEncapsulation.None
})

export class BarangBrowseComponent implements OnInit, OnDestroy, AfterViewChecked {

    public ngOnInit() {
        console.log("disini")
    }

    ngOnDestroy() {

    }

    ngAfterViewChecked() {

    }
}