/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-button/button.ts
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
import { MAT_ANCHOR_HOST, MAT_ANCHOR_INPUTS, MAT_BUTTON_HOST, MAT_BUTTON_INPUTS, MatAnchorBase, MatButtonBase } from './button-base';
/**
 * Material Design button component. Users interact with a button to perform an action.
 * See https://material.io/components/buttons
 *
 * The `MatButton` class applies to native button elements and captures the appearances for
 * "text button", "outlined button", and "contained button" per the Material Design
 * specification. `MatButton` additionally captures an additional "flat" appearance, which matches
 * "contained" but without elevation.
 */
export class MatButton extends MatButtonBase {
    /**
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} ngZone
     * @param {?=} animationMode
     */
    constructor(elementRef, platform, ngZone, animationMode) {
        super(elementRef, platform, ngZone, animationMode);
    }
}
MatButton.decorators = [
    { type: Component, args: [{
                selector: `
    button[mat-button], button[mat-raised-button], button[mat-flat-button],
    button[mat-stroked-button]
  `,
                template: "<span class=\"mdc-button__ripple\"></span>\n\n<ng-content select=\".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd])\">\n</ng-content>\n\n<span class=\"mdc-button__label\"><ng-content></ng-content></span>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<div class=\"mat-mdc-focus-indicator\"></div>\n\n<ng-content select=\".material-icons[iconPositionEnd], mat-icon[iconPositionEnd]\">\n</ng-content>\n\n<span matRipple class=\"mat-mdc-button-ripple\"\n     [matRippleAnimation]=\"_rippleAnimation\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"_isRippleCentered\"\n     [matRippleTrigger]=\"_elementRef.nativeElement\"></span>\n",
                inputs: MAT_BUTTON_INPUTS,
                host: MAT_BUTTON_HOST,
                exportAs: 'matButton',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mat-mdc-button .mdc-button__ripple::before,.mat-mdc-button .mdc-button__ripple::after,.mat-mdc-unelevated-button .mdc-button__ripple::before,.mat-mdc-unelevated-button .mdc-button__ripple::after,.mat-mdc-raised-button .mdc-button__ripple::before,.mat-mdc-raised-button .mdc-button__ripple::after,.mat-mdc-outlined-button .mdc-button__ripple::before,.mat-mdc-outlined-button .mdc-button__ripple::after{content:\"\";pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mdc-button__ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mdc-button__ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mdc-button__ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-fab,.cdk-high-contrast-active .mat-mdc-mini-fab,.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border:none}\n"]
            }] }
];
/** @nocollapse */
MatButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform },
    { type: NgZone },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
/**
 * Material Design button component for anchor elements. Anchor elements are used to provide
 * links for the user to navigate across different routes or pages.
 * See https://material.io/components/buttons
 *
 * The `MatAnchor` class applies to native anchor elements and captures the appearances for
 * "text button", "outlined button", and "contained button" per the Material Design
 * specification. `MatAnchor` additionally captures an additional "flat" appearance, which matches
 * "contained" but without elevation.
 */
export class MatAnchor extends MatAnchorBase {
    /**
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} ngZone
     * @param {?=} animationMode
     */
    constructor(elementRef, platform, ngZone, animationMode) {
        super(elementRef, platform, ngZone, animationMode);
    }
}
MatAnchor.decorators = [
    { type: Component, args: [{
                selector: `a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]`,
                exportAs: 'matButton, matAnchor',
                host: MAT_ANCHOR_HOST,
                inputs: MAT_ANCHOR_INPUTS,
                template: "<span class=\"mdc-button__ripple\"></span>\n\n<ng-content select=\".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd])\">\n</ng-content>\n\n<span class=\"mdc-button__label\"><ng-content></ng-content></span>\n\n<!--\n  The indicator can't be directly on the button, because MDC uses ::before for high contrast\n  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.\n-->\n<div class=\"mat-mdc-focus-indicator\"></div>\n\n<ng-content select=\".material-icons[iconPositionEnd], mat-icon[iconPositionEnd]\">\n</ng-content>\n\n<span matRipple class=\"mat-mdc-button-ripple\"\n     [matRippleAnimation]=\"_rippleAnimation\"\n     [matRippleDisabled]=\"_isRippleDisabled()\"\n     [matRippleCentered]=\"_isRippleCentered\"\n     [matRippleTrigger]=\"_elementRef.nativeElement\"></span>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mat-mdc-button .mdc-button__ripple::before,.mat-mdc-button .mdc-button__ripple::after,.mat-mdc-unelevated-button .mdc-button__ripple::before,.mat-mdc-unelevated-button .mdc-button__ripple::after,.mat-mdc-raised-button .mdc-button__ripple::before,.mat-mdc-raised-button .mdc-button__ripple::after,.mat-mdc-outlined-button .mdc-button__ripple::before,.mat-mdc-outlined-button .mdc-button__ripple::after{content:\"\";pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mdc-button__ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mdc-button__ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mdc-button__ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-fab,.cdk-high-contrast-active .mat-mdc-mini-fab,.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border:none}\n"]
            }] }
];
/** @nocollapse */
MatAnchor.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform },
    { type: NgZone },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtYnV0dG9uL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUF3QnZCLE1BQU0sT0FBTyxTQUFVLFNBQVEsYUFBYTs7Ozs7OztJQUMxQyxZQUNJLFVBQXNCLEVBQUUsUUFBa0IsRUFBRSxNQUFjLEVBQ2YsYUFBc0I7UUFDbkUsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxzMUJBQTBCO2dCQUUxQixNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixJQUFJLEVBQUUsZUFBZTtnQkFDckIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUF0Q0MsVUFBVTtZQUpKLFFBQVE7WUFNZCxNQUFNO3lDQXdDRCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7Ozs7Ozs7Ozs7O0FBeUIvQyxNQUFNLE9BQU8sU0FBVSxTQUFRLGFBQWE7Ozs7Ozs7SUFDMUMsWUFDSSxVQUFzQixFQUFFLFFBQWtCLEVBQUUsTUFBYyxFQUNmLGFBQXNCO1FBQ25FLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdGQUFnRjtnQkFDMUYsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLHMxQkFBMEI7Z0JBRTFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFsRUMsVUFBVTtZQUpKLFFBQVE7WUFNZCxNQUFNO3lDQW9FRCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBOZ1pvbmUsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QU5JTUFUSU9OX01PRFVMRV9UWVBFfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge1xuICBNQVRfQU5DSE9SX0hPU1QsXG4gIE1BVF9BTkNIT1JfSU5QVVRTLFxuICBNQVRfQlVUVE9OX0hPU1QsXG4gIE1BVF9CVVRUT05fSU5QVVRTLFxuICBNYXRBbmNob3JCYXNlLFxuICBNYXRCdXR0b25CYXNlXG59IGZyb20gJy4vYnV0dG9uLWJhc2UnO1xuXG4vKipcbiAqIE1hdGVyaWFsIERlc2lnbiBidXR0b24gY29tcG9uZW50LiBVc2VycyBpbnRlcmFjdCB3aXRoIGEgYnV0dG9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uLlxuICogU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vY29tcG9uZW50cy9idXR0b25zXG4gKlxuICogVGhlIGBNYXRCdXR0b25gIGNsYXNzIGFwcGxpZXMgdG8gbmF0aXZlIGJ1dHRvbiBlbGVtZW50cyBhbmQgY2FwdHVyZXMgdGhlIGFwcGVhcmFuY2VzIGZvclxuICogXCJ0ZXh0IGJ1dHRvblwiLCBcIm91dGxpbmVkIGJ1dHRvblwiLCBhbmQgXCJjb250YWluZWQgYnV0dG9uXCIgcGVyIHRoZSBNYXRlcmlhbCBEZXNpZ25cbiAqIHNwZWNpZmljYXRpb24uIGBNYXRCdXR0b25gIGFkZGl0aW9uYWxseSBjYXB0dXJlcyBhbiBhZGRpdGlvbmFsIFwiZmxhdFwiIGFwcGVhcmFuY2UsIHdoaWNoIG1hdGNoZXNcbiAqIFwiY29udGFpbmVkXCIgYnV0IHdpdGhvdXQgZWxldmF0aW9uLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBcbiAgICBidXR0b25bbWF0LWJ1dHRvbl0sIGJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0sIGJ1dHRvblttYXQtZmxhdC1idXR0b25dLFxuICAgIGJ1dHRvblttYXQtc3Ryb2tlZC1idXR0b25dXG4gIGAsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnV0dG9uLmNzcyddLFxuICBpbnB1dHM6IE1BVF9CVVRUT05fSU5QVVRTLFxuICBob3N0OiBNQVRfQlVUVE9OX0hPU1QsXG4gIGV4cG9ydEFzOiAnbWF0QnV0dG9uJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdEJ1dHRvbiBleHRlbmRzIE1hdEJ1dHRvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHBsYXRmb3JtOiBQbGF0Zm9ybSwgbmdab25lOiBOZ1pvbmUsXG4gICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgYW5pbWF0aW9uTW9kZT86IHN0cmluZykge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHBsYXRmb3JtLCBuZ1pvbmUsIGFuaW1hdGlvbk1vZGUpO1xuICB9XG59XG5cbi8qKlxuICogTWF0ZXJpYWwgRGVzaWduIGJ1dHRvbiBjb21wb25lbnQgZm9yIGFuY2hvciBlbGVtZW50cy4gQW5jaG9yIGVsZW1lbnRzIGFyZSB1c2VkIHRvIHByb3ZpZGVcbiAqIGxpbmtzIGZvciB0aGUgdXNlciB0byBuYXZpZ2F0ZSBhY3Jvc3MgZGlmZmVyZW50IHJvdXRlcyBvciBwYWdlcy5cbiAqIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2NvbXBvbmVudHMvYnV0dG9uc1xuICpcbiAqIFRoZSBgTWF0QW5jaG9yYCBjbGFzcyBhcHBsaWVzIHRvIG5hdGl2ZSBhbmNob3IgZWxlbWVudHMgYW5kIGNhcHR1cmVzIHRoZSBhcHBlYXJhbmNlcyBmb3JcbiAqIFwidGV4dCBidXR0b25cIiwgXCJvdXRsaW5lZCBidXR0b25cIiwgYW5kIFwiY29udGFpbmVkIGJ1dHRvblwiIHBlciB0aGUgTWF0ZXJpYWwgRGVzaWduXG4gKiBzcGVjaWZpY2F0aW9uLiBgTWF0QW5jaG9yYCBhZGRpdGlvbmFsbHkgY2FwdHVyZXMgYW4gYWRkaXRpb25hbCBcImZsYXRcIiBhcHBlYXJhbmNlLCB3aGljaCBtYXRjaGVzXG4gKiBcImNvbnRhaW5lZFwiIGJ1dCB3aXRob3V0IGVsZXZhdGlvbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgYVttYXQtYnV0dG9uXSwgYVttYXQtcmFpc2VkLWJ1dHRvbl0sIGFbbWF0LWZsYXQtYnV0dG9uXSwgYVttYXQtc3Ryb2tlZC1idXR0b25dYCxcbiAgZXhwb3J0QXM6ICdtYXRCdXR0b24sIG1hdEFuY2hvcicsXG4gIGhvc3Q6IE1BVF9BTkNIT1JfSE9TVCxcbiAgaW5wdXRzOiBNQVRfQU5DSE9SX0lOUFVUUyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24uaHRtbCcsXG4gIHN0eWxlVXJsczogWydidXR0b24uY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRBbmNob3IgZXh0ZW5kcyBNYXRBbmNob3JCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwbGF0Zm9ybTogUGxhdGZvcm0sIG5nWm9uZTogTmdab25lLFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIGFuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBwbGF0Zm9ybSwgbmdab25lLCBhbmltYXRpb25Nb2RlKTtcbiAgfVxufVxuIl19