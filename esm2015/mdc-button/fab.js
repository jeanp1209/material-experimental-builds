/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-button/fab.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, NgZone, Optional, ViewEncapsulation } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { MatAnchor } from './button';
import { MAT_ANCHOR_HOST, MAT_ANCHOR_INPUTS, MAT_BUTTON_HOST, MAT_BUTTON_INPUTS, MatButtonBase } from './button-base';
/**
 * Material Design floating action button (FAB) component. These buttons represent the primary
 * or most common action for users to interact with.
 * See https://material.io/components/buttons-floating-action-button/
 *
 * The `MatFabButton` class has two appearances: normal and mini.
 */
let MatFabButton = /** @class */ (() => {
    /**
     * Material Design floating action button (FAB) component. These buttons represent the primary
     * or most common action for users to interact with.
     * See https://material.io/components/buttons-floating-action-button/
     *
     * The `MatFabButton` class has two appearances: normal and mini.
     */
    class MatFabButton extends MatButtonBase {
        /**
         * @param {?} elementRef
         * @param {?} platform
         * @param {?} ngZone
         * @param {?=} animationMode
         */
        constructor(elementRef, platform, ngZone, animationMode) {
            super(elementRef, platform, ngZone, animationMode);
            // The FAB by default has its color set to accent.
            this.color = (/** @type {?} */ ('accent'));
        }
    }
    MatFabButton.decorators = [
        { type: Component, args: [{
                    selector: `button[mat-fab], button[mat-mini-fab]`,
                    template: "<span class=\"mdc-button__ripple\"></span>\n\n<ng-content select=\".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd])\">\n</ng-content>\n\n<span class=\"mdc-button__label\"><ng-content></ng-content></span>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<div class=\"mat-mdc-focus-indicator\"></div>\n\n<ng-content select=\".material-icons[iconPositionEnd], mat-icon[iconPositionEnd]\">\n</ng-content>\n\n<span matRipple class=\"mat-mdc-button-ripple\"\n     [matRippleAnimation]=\"_rippleAnimation\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"_isRippleCentered\"\n     [matRippleTrigger]=\"_elementRef.nativeElement\"></span>\n",
                    inputs: MAT_BUTTON_INPUTS,
                    host: MAT_BUTTON_HOST,
                    exportAs: 'matButton',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab .mdc-fab__icon,.mdc-fab .mat-icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mat-icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,[dir=rtl] .mdc-fab--extended .mat-icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl],.mdc-fab--extended [dir=rtl].mat-icon{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mat-icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mat-icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl],.mdc-fab--extended .mdc-fab__label+[dir=rtl].mat-icon{margin-left:-8px;margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;right:0;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:\"\"}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon,.mat-icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon,.mdc-fab .mat-icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon,.mdc-fab--exited .mat-icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab .mdc-button__ripple::before,.mat-mdc-fab .mdc-button__ripple::after,.mat-mdc-mini-fab .mdc-button__ripple::before,.mat-mdc-mini-fab .mdc-button__ripple::after{content:\"\";pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mdc-button__ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mdc-button__ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab[disabled],.mat-mdc-mini-fab[disabled]{cursor:default;pointer-events:none}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:transparent;opacity:1}\n"]
                }] }
    ];
    /** @nocollapse */
    MatFabButton.ctorParameters = () => [
        { type: ElementRef },
        { type: Platform },
        { type: NgZone },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ];
    return MatFabButton;
})();
export { MatFabButton };
if (false) {
    /** @type {?} */
    MatFabButton.prototype.color;
}
/**
 * Material Design floating action button (FAB) component for anchor elements. Anchor elements
 * are used to provide links for the user to navigate across different routes or pages.
 * See https://material.io/components/buttons-floating-action-button/
 *
 * The `MatFabAnchor` class has two appearances: normal and mini.
 */
let MatFabAnchor = /** @class */ (() => {
    /**
     * Material Design floating action button (FAB) component for anchor elements. Anchor elements
     * are used to provide links for the user to navigate across different routes or pages.
     * See https://material.io/components/buttons-floating-action-button/
     *
     * The `MatFabAnchor` class has two appearances: normal and mini.
     */
    class MatFabAnchor extends MatAnchor {
        /**
         * @param {?} elementRef
         * @param {?} platform
         * @param {?} ngZone
         * @param {?=} animationMode
         */
        constructor(elementRef, platform, ngZone, animationMode) {
            super(elementRef, platform, ngZone, animationMode);
            // The FAB by default has its color set to accent.
            this.color = (/** @type {?} */ ('accent'));
        }
    }
    MatFabAnchor.decorators = [
        { type: Component, args: [{
                    selector: `a[mat-fab], a[mat-mini-fab]`,
                    template: "<span class=\"mdc-button__ripple\"></span>\n\n<ng-content select=\".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd])\">\n</ng-content>\n\n<span class=\"mdc-button__label\"><ng-content></ng-content></span>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<div class=\"mat-mdc-focus-indicator\"></div>\n\n<ng-content select=\".material-icons[iconPositionEnd], mat-icon[iconPositionEnd]\">\n</ng-content>\n\n<span matRipple class=\"mat-mdc-button-ripple\"\n     [matRippleAnimation]=\"_rippleAnimation\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"_isRippleCentered\"\n     [matRippleTrigger]=\"_elementRef.nativeElement\"></span>\n",
                    inputs: MAT_ANCHOR_INPUTS,
                    host: MAT_ANCHOR_HOST,
                    exportAs: 'matButton, matAnchor',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab .mdc-fab__icon,.mdc-fab .mat-icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mat-icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,[dir=rtl] .mdc-fab--extended .mat-icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl],.mdc-fab--extended [dir=rtl].mat-icon{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mat-icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mat-icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl],.mdc-fab--extended .mdc-fab__label+[dir=rtl].mat-icon{margin-left:-8px;margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;right:0;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:\"\"}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon,.mat-icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon,.mdc-fab .mat-icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon,.mdc-fab--exited .mat-icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab .mdc-button__ripple::before,.mat-mdc-fab .mdc-button__ripple::after,.mat-mdc-mini-fab .mdc-button__ripple::before,.mat-mdc-mini-fab .mdc-button__ripple::after{content:\"\";pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mdc-button__ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mdc-button__ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab[disabled],.mat-mdc-mini-fab[disabled]{cursor:default;pointer-events:none}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:transparent;opacity:1}\n"]
                }] }
    ];
    /** @nocollapse */
    MatFabAnchor.ctorParameters = () => [
        { type: ElementRef },
        { type: Platform },
        { type: NgZone },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ];
    return MatFabAnchor;
})();
export { MatFabAnchor };
if (false) {
    /** @type {?} */
    MatFabAnchor.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtYnV0dG9uL2ZhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVV2Qjs7Ozs7Ozs7SUFBQSxNQVVhLFlBQWEsU0FBUSxhQUFhOzs7Ozs7O1FBSTdDLFlBQ0ksVUFBc0IsRUFBRSxRQUFrQixFQUFFLE1BQWMsRUFDZixhQUFzQjtZQUNuRSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7O1lBTHJELFVBQUssR0FBRyxtQkFBQSxRQUFRLEVBQWdCLENBQUM7UUFNakMsQ0FBQzs7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsczFCQUEwQjtvQkFFMUIsTUFBTSxFQUFFLGlCQUFpQjtvQkFDekIsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFsQ0MsVUFBVTtnQkFKSixRQUFRO2dCQU1kLE1BQU07NkNBdUNELFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOztJQUcvQyxtQkFBQztLQUFBO1NBVFksWUFBWTs7O0lBRXZCLDZCQUFpQzs7Ozs7Ozs7O0FBaUJuQzs7Ozs7Ozs7SUFBQSxNQVVhLFlBQWEsU0FBUSxTQUFTOzs7Ozs7O1FBSXpDLFlBQ0ksVUFBc0IsRUFBRSxRQUFrQixFQUFFLE1BQWMsRUFDZixhQUFzQjtZQUNuRSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7O1lBTHJELFVBQUssR0FBRyxtQkFBQSxRQUFRLEVBQWdCLENBQUM7UUFNakMsQ0FBQzs7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsczFCQUEwQjtvQkFFMUIsTUFBTSxFQUFFLGlCQUFpQjtvQkFDekIsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQS9EQyxVQUFVO2dCQUpKLFFBQVE7Z0JBTWQsTUFBTTs2Q0FvRUQsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7O0lBRy9DLG1CQUFDO0tBQUE7U0FUWSxZQUFZOzs7SUFFdkIsNkJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIE5nWm9uZSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7TWF0QW5jaG9yfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQge1xuICBNQVRfQU5DSE9SX0hPU1QsXG4gIE1BVF9BTkNIT1JfSU5QVVRTLFxuICBNQVRfQlVUVE9OX0hPU1QsXG4gIE1BVF9CVVRUT05fSU5QVVRTLFxuICBNYXRCdXR0b25CYXNlXG59IGZyb20gJy4vYnV0dG9uLWJhc2UnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKipcbiAqIE1hdGVyaWFsIERlc2lnbiBmbG9hdGluZyBhY3Rpb24gYnV0dG9uIChGQUIpIGNvbXBvbmVudC4gVGhlc2UgYnV0dG9ucyByZXByZXNlbnQgdGhlIHByaW1hcnlcbiAqIG9yIG1vc3QgY29tbW9uIGFjdGlvbiBmb3IgdXNlcnMgdG8gaW50ZXJhY3Qgd2l0aC5cbiAqIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2NvbXBvbmVudHMvYnV0dG9ucy1mbG9hdGluZy1hY3Rpb24tYnV0dG9uL1xuICpcbiAqIFRoZSBgTWF0RmFiQnV0dG9uYCBjbGFzcyBoYXMgdHdvIGFwcGVhcmFuY2VzOiBub3JtYWwgYW5kIG1pbmkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYGJ1dHRvblttYXQtZmFiXSwgYnV0dG9uW21hdC1taW5pLWZhYl1gLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZhYi5jc3MnXSxcbiAgaW5wdXRzOiBNQVRfQlVUVE9OX0lOUFVUUyxcbiAgaG9zdDogTUFUX0JVVFRPTl9IT1NULFxuICBleHBvcnRBczogJ21hdEJ1dHRvbicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRGYWJCdXR0b24gZXh0ZW5kcyBNYXRCdXR0b25CYXNlIHtcbiAgLy8gVGhlIEZBQiBieSBkZWZhdWx0IGhhcyBpdHMgY29sb3Igc2V0IHRvIGFjY2VudC5cbiAgY29sb3IgPSAnYWNjZW50JyBhcyBUaGVtZVBhbGV0dGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwbGF0Zm9ybTogUGxhdGZvcm0sIG5nWm9uZTogTmdab25lLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIGFuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBwbGF0Zm9ybSwgbmdab25lLCBhbmltYXRpb25Nb2RlKTtcbiAgfVxufVxuXG5cbi8qKlxuICogTWF0ZXJpYWwgRGVzaWduIGZsb2F0aW5nIGFjdGlvbiBidXR0b24gKEZBQikgY29tcG9uZW50IGZvciBhbmNob3IgZWxlbWVudHMuIEFuY2hvciBlbGVtZW50c1xuICogYXJlIHVzZWQgdG8gcHJvdmlkZSBsaW5rcyBmb3IgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYWNyb3NzIGRpZmZlcmVudCByb3V0ZXMgb3IgcGFnZXMuXG4gKiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9jb21wb25lbnRzL2J1dHRvbnMtZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi9cbiAqXG4gKiBUaGUgYE1hdEZhYkFuY2hvcmAgY2xhc3MgaGFzIHR3byBhcHBlYXJhbmNlczogbm9ybWFsIGFuZCBtaW5pLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBhW21hdC1mYWJdLCBhW21hdC1taW5pLWZhYl1gLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZhYi5jc3MnXSxcbiAgaW5wdXRzOiBNQVRfQU5DSE9SX0lOUFVUUyxcbiAgaG9zdDogTUFUX0FOQ0hPUl9IT1NULFxuICBleHBvcnRBczogJ21hdEJ1dHRvbiwgbWF0QW5jaG9yJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdEZhYkFuY2hvciBleHRlbmRzIE1hdEFuY2hvciB7XG4gIC8vIFRoZSBGQUIgYnkgZGVmYXVsdCBoYXMgaXRzIGNvbG9yIHNldCB0byBhY2NlbnQuXG4gIGNvbG9yID0gJ2FjY2VudCcgYXMgVGhlbWVQYWxldHRlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcGxhdGZvcm06IFBsYXRmb3JtLCBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25Nb2RlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcGxhdGZvcm0sIG5nWm9uZSwgYW5pbWF0aW9uTW9kZSk7XG4gIH1cbn1cbiJdfQ==