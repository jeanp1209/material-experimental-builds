/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-table/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatTable } from './table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatHeaderCell, MatHeaderCellDef } from './cell';
import { MatFooterRow, MatFooterRowDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef } from './row';
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
];
export class MatTableModule {
}
MatTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [MatCommonModule, CdkTableModule],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtdGFibGUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFDWixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixnQkFBZ0IsRUFDakIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUNMLFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sT0FBTyxDQUFDOztNQUVULHFCQUFxQixHQUFHO0lBQzVCLFFBQVE7SUFDUixRQUFRO0lBRVIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFFZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLE9BQU87SUFDUCxhQUFhO0lBRWIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixNQUFNO0lBQ04sWUFBWTtDQUNiO0FBT0QsTUFBTSxPQUFPLGNBQWM7OztZQUwxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLHFCQUFxQjtnQkFDOUIsWUFBWSxFQUFFLHFCQUFxQjthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0VGFibGV9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7XG4gIE1hdENlbGwsXG4gIE1hdENlbGxEZWYsXG4gIE1hdENvbHVtbkRlZixcbiAgTWF0Rm9vdGVyQ2VsbCxcbiAgTWF0Rm9vdGVyQ2VsbERlZixcbiAgTWF0SGVhZGVyQ2VsbCxcbiAgTWF0SGVhZGVyQ2VsbERlZlxufSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHtcbiAgTWF0Rm9vdGVyUm93LFxuICBNYXRGb290ZXJSb3dEZWYsXG4gIE1hdEhlYWRlclJvdyxcbiAgTWF0SGVhZGVyUm93RGVmLFxuICBNYXRSb3csXG4gIE1hdFJvd0RlZlxufSBmcm9tICcuL3Jvdyc7XG5cbmNvbnN0IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyA9IFtcbiAgLy8gVGFibGVcbiAgTWF0VGFibGUsXG5cbiAgLy8gVGVtcGxhdGUgZGVmc1xuICBNYXRIZWFkZXJDZWxsRGVmLFxuICBNYXRIZWFkZXJSb3dEZWYsXG4gIE1hdENvbHVtbkRlZixcbiAgTWF0Q2VsbERlZixcbiAgTWF0Um93RGVmLFxuICBNYXRGb290ZXJDZWxsRGVmLFxuICBNYXRGb290ZXJSb3dEZWYsXG5cbiAgLy8gQ2VsbCBkaXJlY3RpdmVzXG4gIE1hdEhlYWRlckNlbGwsXG4gIE1hdENlbGwsXG4gIE1hdEZvb3RlckNlbGwsXG5cbiAgLy8gUm93IGRpcmVjdGl2ZXNcbiAgTWF0SGVhZGVyUm93LFxuICBNYXRSb3csXG4gIE1hdEZvb3RlclJvdyxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRDb21tb25Nb2R1bGUsIENka1RhYmxlTW9kdWxlXSxcbiAgZXhwb3J0czogRVhQT1JURURfREVDTEFSQVRJT05TLFxuICBkZWNsYXJhdGlvbnM6IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFibGVNb2R1bGUge1xufVxuIl19