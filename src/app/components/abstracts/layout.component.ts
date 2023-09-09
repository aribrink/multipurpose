import { Component, Input } from "@angular/core";
import { DataItem } from "../../models/data-item.model";

@Component({
    template: ''
  })

export abstract class LayoutComponent {    
    @Input() headerTitle = '';
    @Input() displayType = '';    
    @Input() displayOption = '';
    @Input() actionEdit: Boolean = false;
    @Input() actionAdd: Boolean = false;
    @Input() hideDisabledActions: Boolean = true;
    @Input() data: DataItem[] = [];
}