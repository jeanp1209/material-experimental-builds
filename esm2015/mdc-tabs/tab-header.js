/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-tabs/tab-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation, ContentChildren, ViewChild, ElementRef, QueryList, Optional, ChangeDetectorRef, NgZone, Inject, } from '@angular/core';
import { _MatTabHeaderBase } from '@angular/material/tabs';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Platform } from '@angular/cdk/platform';
import { Directionality } from '@angular/cdk/bidi';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { MatTabLabelWrapper } from './tab-label-wrapper';
import { MatInkBar } from './ink-bar';
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * \@docs-private
 */
let MatTabHeader = /** @class */ (() => {
    /**
     * The header of the tab group which displays a list of all the tabs in the tab group. Includes
     * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
     * width of the header container, then arrows will be displayed to allow the user to scroll
     * left and right across the header.
     * \@docs-private
     */
    class MatTabHeader extends _MatTabHeaderBase {
        /**
         * @param {?} elementRef
         * @param {?} changeDetectorRef
         * @param {?} viewportRuler
         * @param {?} dir
         * @param {?} ngZone
         * @param {?} platform
         * @param {?=} animationMode
         */
        constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
        // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
        animationMode) {
            super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        }
        /**
         * @return {?}
         */
        ngAfterContentInit() {
            this._inkBar = new MatInkBar(this._items);
            super.ngAfterContentInit();
        }
    }
    MatTabHeader.decorators = [
        { type: Component, args: [{
                    selector: 'mat-tab-header',
                    template: "<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</div>\n\n<div\n  class=\"mat-mdc-tab-label-container\"\n  #tabListContainer\n  (keydown)=\"_handleKeydown($event)\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\">\n  <div\n    #tabList\n    class=\"mat-mdc-tab-list\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-mdc-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<!-- TODO: this also had `mat-elevation-z4`. Figure out what we should do with it. -->\n<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</div>\n",
                    inputs: ['selectedIndex'],
                    outputs: ['selectFocusedIndex', 'indexFocused'],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'class': 'mat-mdc-tab-header',
                        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                    },
                    styles: [".mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-mdc-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;opacity:.4;pointer-events:none}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}._mat-animation-noopable .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;opacity:.4}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}\n"]
                }] }
    ];
    /** @nocollapse */
    MatTabHeader.ctorParameters = () => [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ViewportRuler },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: NgZone },
        { type: Platform },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ];
    MatTabHeader.propDecorators = {
        _items: [{ type: ContentChildren, args: [MatTabLabelWrapper, { descendants: false },] }],
        _tabListContainer: [{ type: ViewChild, args: ['tabListContainer', { static: true },] }],
        _tabList: [{ type: ViewChild, args: ['tabList', { static: true },] }],
        _nextPaginator: [{ type: ViewChild, args: ['nextPaginator',] }],
        _previousPaginator: [{ type: ViewChild, args: ['previousPaginator',] }]
    };
    return MatTabHeader;
})();
export { MatTabHeader };
if (false) {
    /** @type {?} */
    MatTabHeader.ngAcceptInputType_disableRipple;
    /** @type {?} */
    MatTabHeader.prototype._items;
    /** @type {?} */
    MatTabHeader.prototype._tabListContainer;
    /** @type {?} */
    MatTabHeader.prototype._tabList;
    /** @type {?} */
    MatTabHeader.prototype._nextPaginator;
    /** @type {?} */
    MatTabHeader.prototype._previousPaginator;
    /** @type {?} */
    MatTabHeader.prototype._inkBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLXRhYnMvdGFiLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUVULFFBQVEsRUFDUixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sV0FBVyxDQUFDOzs7Ozs7OztBQVNwQzs7Ozs7Ozs7SUFBQSxNQWNhLFlBQWEsU0FBUSxpQkFBaUI7Ozs7Ozs7Ozs7UUFRakQsWUFBWSxVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDaEIsR0FBbUIsRUFDL0IsTUFBYyxFQUNkLFFBQWtCO1FBQ2xCLHlFQUF5RTtRQUM5QixhQUFzQjtZQUMzRSxLQUFLLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM1RixDQUFDOzs7O1FBRUQsa0JBQWtCO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGttREFBOEI7b0JBRTlCLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDekIsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsb0JBQW9CO3dCQUM3Qix3REFBd0QsRUFBRSx5QkFBeUI7d0JBQ25GLGdDQUFnQyxFQUFFLGdDQUFnQztxQkFDbkU7O2lCQUNGOzs7O2dCQXBDQyxVQUFVO2dCQUlWLGlCQUFpQjtnQkFLWCxhQUFhO2dCQUViLGNBQWMsdUJBcUNQLFFBQVE7Z0JBM0NyQixNQUFNO2dCQUtBLFFBQVE7NkNBMENELFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7eUJBZHBELGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUM7b0NBQ3hELFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7MkJBQzVDLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO2lDQUNuQyxTQUFTLFNBQUMsZUFBZTtxQ0FDekIsU0FBUyxTQUFDLG1CQUFtQjs7SUFvQmhDLG1CQUFDO0tBQUE7U0F6QlksWUFBWTs7O0lBd0J2Qiw2Q0FBcUQ7O0lBdkJyRCw4QkFBaUc7O0lBQ2pHLHlDQUE2RTs7SUFDN0UsZ0NBQTJEOztJQUMzRCxzQ0FBb0U7O0lBQ3BFLDBDQUE0RTs7SUFDNUUsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTmdab25lLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtfTWF0VGFiSGVhZGVyQmFzZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQge1ZpZXdwb3J0UnVsZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7QU5JTUFUSU9OX01PRFVMRV9UWVBFfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtNYXRUYWJMYWJlbFdyYXBwZXJ9IGZyb20gJy4vdGFiLWxhYmVsLXdyYXBwZXInO1xuaW1wb3J0IHtNYXRJbmtCYXJ9IGZyb20gJy4vaW5rLWJhcic7XG5cbi8qKlxuICogVGhlIGhlYWRlciBvZiB0aGUgdGFiIGdyb3VwIHdoaWNoIGRpc3BsYXlzIGEgbGlzdCBvZiBhbGwgdGhlIHRhYnMgaW4gdGhlIHRhYiBncm91cC4gSW5jbHVkZXNcbiAqIGFuIGluayBiYXIgdGhhdCBmb2xsb3dzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFiLiBXaGVuIHRoZSB0YWJzIGxpc3QncyB3aWR0aCBleGNlZWRzIHRoZVxuICogd2lkdGggb2YgdGhlIGhlYWRlciBjb250YWluZXIsIHRoZW4gYXJyb3dzIHdpbGwgYmUgZGlzcGxheWVkIHRvIGFsbG93IHRoZSB1c2VyIHRvIHNjcm9sbFxuICogbGVmdCBhbmQgcmlnaHQgYWNyb3NzIHRoZSBoZWFkZXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC10YWItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItaGVhZGVyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWhlYWRlci5jc3MnXSxcbiAgaW5wdXRzOiBbJ3NlbGVjdGVkSW5kZXgnXSxcbiAgb3V0cHV0czogWydzZWxlY3RGb2N1c2VkSW5kZXgnLCAnaW5kZXhGb2N1c2VkJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1tZGMtdGFiLWhlYWRlcicsXG4gICAgJ1tjbGFzcy5tYXQtbWRjLXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jb250cm9scy1lbmFibGVkXSc6ICdfc2hvd1BhZ2luYXRpb25Db250cm9scycsXG4gICAgJ1tjbGFzcy5tYXQtbWRjLXRhYi1oZWFkZXItcnRsXSc6IFwiX2dldExheW91dERpcmVjdGlvbigpID09ICdydGwnXCIsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFRhYkhlYWRlciBleHRlbmRzIF9NYXRUYWJIZWFkZXJCYXNlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0VGFiTGFiZWxXcmFwcGVyLCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgX2l0ZW1zOiBRdWVyeUxpc3Q8TWF0VGFiTGFiZWxXcmFwcGVyPjtcbiAgQFZpZXdDaGlsZCgndGFiTGlzdENvbnRhaW5lcicsIHtzdGF0aWM6IHRydWV9KSBfdGFiTGlzdENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFiTGlzdCcsIHtzdGF0aWM6IHRydWV9KSBfdGFiTGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbmV4dFBhZ2luYXRvcicpIF9uZXh0UGFnaW5hdG9yOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgncHJldmlvdXNQYWdpbmF0b3InKSBfcHJldmlvdXNQYWdpbmF0b3I6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBfaW5rQmFyOiBNYXRJbmtCYXI7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBkaXI6IERpcmVjdGlvbmFsaXR5LFxuICAgICAgICAgICAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDkuMC4wIGBfYW5pbWF0aW9uTW9kZWAgcGFyYW1ldGVyIHRvIGJlIG1hZGUgcmVxdWlyZWQuXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25Nb2RlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2hhbmdlRGV0ZWN0b3JSZWYsIHZpZXdwb3J0UnVsZXIsIGRpciwgbmdab25lLCBwbGF0Zm9ybSwgYW5pbWF0aW9uTW9kZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5faW5rQmFyID0gbmV3IE1hdElua0Jhcih0aGlzLl9pdGVtcyk7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZVJpcHBsZTogQm9vbGVhbklucHV0O1xufVxuIl19