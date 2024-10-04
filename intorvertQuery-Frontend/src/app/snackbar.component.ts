import { Component, Inject, inject } from "@angular/core";
import {
  MAT_SNACK_BAR_DATA,
    MatSnackBarAction,
    MatSnackBarActions,
    MatSnackBarLabel,
    MatSnackBarRef,
  } from '@angular/material/snack-bar';
import { SharedMaterialModule } from "./sharedMaterial.module";

@Component({
    selector: 'snack-bar-annotated-component-example-snack',
    template: `<span class="snack-bar" matSnackBarLabel>
                    {{data}}
                    </span>
                    <span matSnackBarActions>
                    <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">🖋️✏️😊</button>
                </span>`,
    styles: `
      :host {
        display: flex;
      }
  
      .snack-bar {
        color: hotpink;
      }
    `,
    standalone: true,
    imports: [MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction,SharedMaterialModule],
  })
  export class SnackBarComponent {
    snackBarRef = inject(MatSnackBarRef);
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
  }