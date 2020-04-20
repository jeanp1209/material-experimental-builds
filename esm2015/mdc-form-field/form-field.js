/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-form-field/form-field.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Inject, InjectionToken, Input, isDevMode, NgZone, Optional, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MAT_FORM_FIELD, matFormFieldAnimations, MatFormFieldControl, } from '@angular/material/form-field';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { MDCTextFieldFoundation, numbers as mdcTextFieldNumbers } from '@material/textfield';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatError } from './directives/error';
import { MatFormFieldFloatingLabel } from './directives/floating-label';
import { MatHint } from './directives/hint';
import { MatLabel } from './directives/label';
import { MatFormFieldLineRipple } from './directives/line-ripple';
import { MatFormFieldNotchedOutline } from './directives/notched-outline';
import { MatPrefix } from './directives/prefix';
import { MatSuffix } from './directives/suffix';
/**
 * Represents the default options for the form field that can be configured
 * using the `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token.
 * @record
 */
export function MatFormFieldDefaultOptions() { }
if (false) {
    /** @type {?|undefined} */
    MatFormFieldDefaultOptions.prototype.appearance;
    /** @type {?|undefined} */
    MatFormFieldDefaultOptions.prototype.hideRequiredMarker;
}
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 * @type {?}
 */
export const MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/** @type {?} */
let nextUniqueId = 0;
/**
 * Default appearance used by the form-field.
 * @type {?}
 */
const DEFAULT_APPEARANCE = 'fill';
/**
 * Default appearance used by the form-field.
 * @type {?}
 */
const DEFAULT_FLOAT_LABEL = 'auto';
/**
 * Default transform for docked floating labels in a MDC text-field. This value has been
 * extracted from the MDC text-field styles because we programmatically modify the docked
 * label transform, but do not want to accidentally discard the default label transform.
 * @type {?}
 */
const FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
/**
 * Container for form controls that applies Material Design styling and behavior.
 */
export class MatFormField {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} _ngZone
     * @param {?} _dir
     * @param {?} _platform
     * @param {?=} _defaults
     * @param {?=} _labelOptions
     * @param {?=} _animationMode
     */
    constructor(_elementRef, _changeDetectorRef, _ngZone, _dir, _platform, _defaults, _labelOptions, _animationMode) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._dir = _dir;
        this._platform = _platform;
        this._defaults = _defaults;
        this._labelOptions = _labelOptions;
        this._animationMode = _animationMode;
        /**
         * Whether the required marker should be hidden.
         */
        this.hideRequiredMarker = false;
        /**
         * The color palette for the form-field.
         */
        this.color = 'primary';
        this._appearance = DEFAULT_APPEARANCE;
        this._hintLabel = '';
        // Unique id for the hint label.
        this._hintLabelId = `mat-mdc-hint-${nextUniqueId++}`;
        // Unique id for the internal form field label.
        this._labelId = `mat-mdc-form-field-label-${nextUniqueId++}`;
        /**
         * State of the mat-hint and mat-error animations.
         */
        this._subscriptAnimationState = '';
        this._destroyed = new Subject();
        this._isFocused = null;
        this._needsOutlineLabelOffsetUpdateOnStable = false;
        this._adapter = {
            addClass: (/**
             * @param {?} className
             * @return {?}
             */
            className => this._textField.nativeElement.classList.add(className)),
            removeClass: (/**
             * @param {?} className
             * @return {?}
             */
            className => this._textField.nativeElement.classList.remove(className)),
            hasClass: (/**
             * @param {?} className
             * @return {?}
             */
            className => this._textField.nativeElement.classList.contains(className)),
            hasLabel: (/**
             * @return {?}
             */
            () => this._hasFloatingLabel()),
            isFocused: (/**
             * @return {?}
             */
            () => this._control.focused),
            hasOutline: (/**
             * @return {?}
             */
            () => this._hasOutline()),
            // MDC text-field will call this method on focus, blur and value change. It expects us
            // to update the floating label state accordingly. Though we make this a noop because we
            // want to react to floating label state changes through change detection. Relying on this
            // adapter method would mean that the label would not update if the custom form-field control
            // sets "shouldLabelFloat" to true, or if the "floatLabel" input binding changes to "always".
            floatLabel: (/**
             * @return {?}
             */
            () => { }),
            // Label shaking is not supported yet. It will require a new API for form field
            // controls to trigger the shaking. This can be a feature in the future.
            // TODO(devversion): explore options on how to integrate label shaking.
            shakeLabel: (/**
             * @return {?}
             */
            () => { }),
            // MDC by default updates the notched-outline whenever the text-field receives focus, or
            // is being blurred. It also computes the label width every time the notch is opened or
            // closed. This works fine in the standard MDC text-field, but not in Angular where the
            // floating label could change through interpolation. We want to be able to update the
            // notched outline whenever the label content changes. Additionally, relying on focus or
            // blur to open and close the notch does not work for us since abstract form-field controls
            // have the ability to control the floating label state (i.e. `shouldLabelFloat`), and we
            // want to update the notch whenever the `_shouldLabelFloat()` value changes.
            getLabelWidth: (/**
             * @return {?}
             */
            () => 0),
            notchOutline: (/**
             * @return {?}
             */
            () => { }),
            closeOutline: (/**
             * @return {?}
             */
            () => { }),
            activateLineRipple: (/**
             * @return {?}
             */
            () => this._lineRipple && this._lineRipple.activate()),
            deactivateLineRipple: (/**
             * @return {?}
             */
            () => this._lineRipple && this._lineRipple.deactivate()),
            // The foundation tries to register events on the input. This is not matching
            // our concept of abstract form field controls. We handle each event manually
            // in "stateChanges" based on the form-field control state. The following events
            // need to be handled: focus, blur. We do not handle the "input" event since
            // that one is only needed for the text-field character count, which we do
            // not implement as part of the form-field, but should be implemented manually
            // by consumers using template bindings.
            registerInputInteractionHandler: (/**
             * @return {?}
             */
            () => { }),
            deregisterInputInteractionHandler: (/**
             * @return {?}
             */
            () => { }),
            // We do not have a reference to the native input since we work with abstract form field
            // controls. MDC needs a reference to the native input optionally to handle character
            // counting and value updating. These are both things we do not handle from within the
            // form-field, so we can just return null.
            getNativeInput: (/**
             * @return {?}
             */
            () => null),
            // This method will never be called since we do not have the ability to add event listeners
            // to the native input. This is because the form control is not necessarily an input, and
            // the form field deals with abstract form controls of any type.
            setLineRippleTransformOrigin: (/**
             * @return {?}
             */
            () => { }),
            // The foundation tries to register click and keyboard events on the form-field to figure out
            // if the input value changes through user interaction. Based on that, the foundation tries
            // to focus the input. Since we do not handle the input value as part of the form-field, nor
            // it's guaranteed to be an input (see adapter methods above), this is a noop.
            deregisterTextFieldInteractionHandler: (/**
             * @return {?}
             */
            () => { }),
            registerTextFieldInteractionHandler: (/**
             * @return {?}
             */
            () => { }),
            // The foundation tries to setup a "MutationObserver" in order to watch for attributes
            // like "maxlength" or "pattern" to change. The foundation will update the validity state
            // based on that. We do not need this logic since we handle the validity through the
            // abstract form control instance.
            deregisterValidationAttributeChangeHandler: (/**
             * @return {?}
             */
            () => { }),
            registerValidationAttributeChangeHandler: (/**
             * @return {?}
             */
            () => (/** @type {?} */ (null))),
        };
        if (_defaults && _defaults.appearance) {
            this.appearance = _defaults.appearance;
        }
        else if (_defaults && _defaults.hideRequiredMarker) {
            this.hideRequiredMarker = true;
        }
    }
    /**
     * Whether the label should always float or float as the user types.
     * @return {?}
     */
    get floatLabel() {
        return this._floatLabel || (this._labelOptions && this._labelOptions.float)
            || DEFAULT_FLOAT_LABEL;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set floatLabel(value) {
        if (value !== this._floatLabel) {
            this._floatLabel = value;
            // For backwards compatibility. Custom form-field controls or directives might set
            // the "floatLabel" input and expect the form-field view to be updated automatically.
            // e.g. autocomplete trigger. Ideally we'd get rid of this and the consumers would just
            // emit the "stateChanges" observable. TODO(devversion): consider removing.
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * The form-field appearance style.
     * @return {?}
     */
    get appearance() { return this._appearance; }
    /**
     * @param {?} value
     * @return {?}
     */
    set appearance(value) {
        /** @type {?} */
        const oldValue = this._appearance;
        this._appearance = value || (this._defaults && this._defaults.appearance) || DEFAULT_APPEARANCE;
        // If the appearance has been switched to `outline`, the label offset needs to be updated.
        // The update can happen once the view has been re-checked, but not immediately because
        // the view has not been updated and the notched-outline floating label is not present.
        if (this._appearance === 'outline' && this._appearance !== oldValue) {
            this._needsOutlineLabelOffsetUpdateOnStable = true;
        }
    }
    /**
     * Text for the form field hint.
     * @return {?}
     */
    get hintLabel() { return this._hintLabel; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
    }
    /**
     * Gets the current form field control
     * @return {?}
     */
    get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _control(value) { this._explicitFormFieldControl = value; }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._foundation = new MDCTextFieldFoundation(this._adapter);
        // MDC uses the "shouldFloat" getter to know whether the label is currently floating. This
        // does not match our implementation of when the label floats because we support more cases.
        // For example, consumers can set "@Input floatLabel" to always, or the custom form-field
        // control can set "MatFormFieldControl#shouldLabelFloat" to true. To ensure that MDC knows
        // when the label is floating, we overwrite the property to be based on the method we use to
        // determine the current state of the floating label.
        Object.defineProperty(this._foundation, 'shouldFloat', {
            get: (/**
             * @return {?}
             */
            () => this._shouldLabelFloat()),
        });
        // By default, the foundation determines the validity of the text-field from the
        // specified native input. Since we don't pass a native input to the foundation because
        // abstract form controls are not necessarily consisting of an input, we handle the
        // text-field validity through the abstract form-field control state.
        this._foundation.isValid = (/**
         * @return {?}
         */
        () => !this._control.errorState);
        // Initial focus state sync. This happens rarely, but we want to account for
        // it in case the form-field control has "focused" set to true on init.
        this._updateFocusState();
        // Initial notch width update. This is needed in case the text-field label floats
        // on initialization, and renders inside of the notched outline.
        this._refreshOutlineNotchWidth();
        // Enable animations now. This ensures we don't animate on initial render.
        this._subscriptAnimationState = 'enter';
        // Because the above changes a value used in the template after it was checked, we need
        // to trigger CD or the change might not be reflected if there is no other CD scheduled.
        this._changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._assertFormFieldControl();
        this._initializeControl();
        this._initializeSubscript();
        this._initializePrefixAndSuffix();
        this._initializeOutlineLabelOffsetSubscriptions();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this._assertFormFieldControl();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field
     * should be positioned relative to.
     * @return {?}
     */
    getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
    }
    /**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */
    _animateAndLockLabel() {
        // This is for backwards compatibility only. Consumers of the form-field might use
        // this method. e.g. the autocomplete trigger. This method has been added to the non-MDC
        // form-field because setting "floatLabel" to "always" caused the label to float without
        // animation. This is different in MDC where the label always animates, so this method
        // is no longer necessary. There doesn't seem any benefit in adding logic to allow changing
        // the floating label state without animations. The non-MDC implementation was inconsistent
        // because it always animates if "floatLabel" is set away from "always".
        // TODO(devversion): consider removing this method when releasing the MDC form-field.
        if (this._hasFloatingLabel()) {
            this.floatLabel = 'always';
        }
    }
    /**
     * Initializes the registered form-field control.
     * @private
     * @return {?}
     */
    _initializeControl() {
        /** @type {?} */
        const control = this._control;
        if (control.controlType) {
            this._elementRef.nativeElement.classList.add(`mat-mdc-form-field-type-${control.controlType}`);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        control.stateChanges.subscribe((/**
         * @return {?}
         */
        () => {
            this._updateFocusState();
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        }));
        // Run change detection if the value changes.
        if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges
                .pipe(takeUntil(this._destroyed))
                .subscribe((/**
             * @return {?}
             */
            () => this._changeDetectorRef.markForCheck()));
        }
    }
    /**
     * Initializes the prefix and suffix containers.
     * @private
     * @return {?}
     */
    _initializePrefixAndSuffix() {
        // Mark the form-field as dirty whenever the prefix or suffix children change. This
        // is necessary because we conditionally display the prefix/suffix containers based
        // on whether there is projected content.
        merge(this._prefixChildren.changes, this._suffixChildren.changes)
            .subscribe((/**
         * @return {?}
         */
        () => this._changeDetectorRef.markForCheck()));
    }
    /**
     * Initializes the subscript by validating hints and synchronizing "aria-describedby" ids
     * with the custom form-field control. Also subscribes to hint and error changes in order
     * to be able to validate and synchronize ids on change.
     * @private
     * @return {?}
     */
    _initializeSubscript() {
        // Re-validate when the number of hints changes.
        this._hintChildren.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this._processHints();
            this._changeDetectorRef.markForCheck();
        }));
        // Update the aria-described by when the number of errors changes.
        this._errorChildren.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        }));
        // Initial mat-hint validation and subscript describedByIds sync.
        this._validateHints();
        this._syncDescribedByIds();
    }
    /**
     * Throws an error if the form field's control is missing.
     * @private
     * @return {?}
     */
    _assertFormFieldControl() {
        if (!this._control) {
            throw getMatFormFieldMissingControlError();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateFocusState() {
        // Usually the MDC foundation would call "activateFocus" and "deactivateFocus" whenever
        // certain DOM events are emitted. This is not possible in our implementation of the
        // form-field because we support abstract form field controls which are not necessarily
        // of type input, nor do we have a reference to a native form-field control element. Instead
        // we handle the focus by checking if the abstract form-field control focused state changes.
        if (this._control.focused && !this._isFocused) {
            this._isFocused = true;
            this._foundation.activateFocus();
        }
        else if (!this._control.focused && (this._isFocused || this._isFocused === null)) {
            this._isFocused = false;
            this._foundation.deactivateFocus();
        }
    }
    /**
     * The floating label in the docked state needs to account for prefixes. The horizontal offset
     * is calculated whenever the appearance changes to `outline`, the prefixes change, or when the
     * form-field is added to the DOM. This method sets up all subscriptions which are needed to
     * trigger the label offset update. In general, we want to avoid performing measurements often,
     * so we rely on the `NgZone` as indicator when the offset should be recalculated, instead of
     * checking every change detection cycle.
     * @private
     * @return {?}
     */
    _initializeOutlineLabelOffsetSubscriptions() {
        // Whenever the prefix changes, schedule an update of the label offset.
        this._prefixChildren.changes
            .subscribe((/**
         * @return {?}
         */
        () => this._needsOutlineLabelOffsetUpdateOnStable = true));
        // Note that we have to run outside of the `NgZone` explicitly, in order to avoid
        // throwing users into an infinite loop if `zone-patch-rxjs` is included.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._ngZone.onStable.asObservable().pipe(takeUntil(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => {
                if (this._needsOutlineLabelOffsetUpdateOnStable) {
                    this._needsOutlineLabelOffsetUpdateOnStable = false;
                    this._updateOutlineLabelOffset();
                }
            }));
        }));
        this._dir.change.pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => this._needsOutlineLabelOffsetUpdateOnStable = true));
    }
    /**
     * Whether the floating label should always float or not.
     * @return {?}
     */
    _shouldAlwaysFloat() {
        return this.floatLabel === 'always';
    }
    /**
     * @return {?}
     */
    _hasOutline() {
        return this.appearance === 'outline';
    }
    /**
     * Whether the label should display in the infix. Labels in the outline appearance are
     * displayed as part of the notched-outline and are horizontally offset to account for
     * form-field prefix content. This won't work in server side rendering since we cannot
     * measure the width of the prefix container. To make the docked label appear as if the
     * right offset has been calculated, we forcibly render the label inside the infix. Since
     * the label is part of the infix, the label cannot overflow the prefix content.
     * @return {?}
     */
    _forceDisplayInfixLabel() {
        return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
    }
    /**
     * @return {?}
     */
    _hasFloatingLabel() {
        return !!this._labelChildNonStatic || !!this._labelChildStatic;
    }
    /**
     * @return {?}
     */
    _shouldLabelFloat() {
        return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
    }
    /**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */
    _shouldForward(prop) {
        /** @type {?} */
        const ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
    }
    /**
     * Determines whether to display hints or errors.
     * @return {?}
     */
    _getDisplayedMessages() {
        return (this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState) ? 'error' : 'hint';
    }
    /**
     * Refreshes the width of the outline-notch, if present.
     * @return {?}
     */
    _refreshOutlineNotchWidth() {
        if (!this._hasOutline() || !this._floatingLabel) {
            return;
        }
        // The outline notch should be based on the label width, but needs to respect the scaling
        // applied to the label if it actively floats. Since the label always floats when the notch
        // is open, the MDC text-field floating label scaling is respected in notch width calculation.
        this._outlineNotchWidth = this._floatingLabel.getWidth() * mdcTextFieldNumbers.LABEL_SCALE;
    }
    /**
     * Does any extra processing that is required when handling the hints.
     * @private
     * @return {?}
     */
    _processHints() {
        this._validateHints();
        this._syncDescribedByIds();
    }
    /**
     * Ensure that there is a maximum of one of each "mat-hint" alignment specified. The hint
     * label specified set through the input is being considered as "start" aligned.
     *
     * This method is a noop if Angular runs in production mode.
     * @private
     * @return {?}
     */
    _validateHints() {
        if (isDevMode() && this._hintChildren) {
            /** @type {?} */
            let startHint;
            /** @type {?} */
            let endHint;
            this._hintChildren.forEach((/**
             * @param {?} hint
             * @return {?}
             */
            (hint) => {
                if (hint.align === 'start') {
                    if (startHint || this.hintLabel) {
                        throw getMatFormFieldDuplicatedHintError('start');
                    }
                    startHint = hint;
                }
                else if (hint.align === 'end') {
                    if (endHint) {
                        throw getMatFormFieldDuplicatedHintError('end');
                    }
                    endHint = hint;
                }
            }));
        }
    }
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     * @private
     * @return {?}
     */
    _syncDescribedByIds() {
        if (this._control) {
            /** @type {?} */
            let ids = [];
            if (this._getDisplayedMessages() === 'hint') {
                /** @type {?} */
                const startHint = this._hintChildren ?
                    this._hintChildren.find((/**
                     * @param {?} hint
                     * @return {?}
                     */
                    hint => hint.align === 'start')) : null;
                /** @type {?} */
                const endHint = this._hintChildren ?
                    this._hintChildren.find((/**
                     * @param {?} hint
                     * @return {?}
                     */
                    hint => hint.align === 'end')) : null;
                if (startHint) {
                    ids.push(startHint.id);
                }
                else if (this._hintLabel) {
                    ids.push(this._hintLabelId);
                }
                if (endHint) {
                    ids.push(endHint.id);
                }
            }
            else if (this._errorChildren) {
                ids = this._errorChildren.map((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => error.id));
            }
            this._control.setDescribedByIds(ids);
        }
    }
    /**
     * Updates the horizontal offset of the label in the outline appearance. In the outline
     * appearance, the notched-outline and label are not relative to the infix container because
     * the outline intends to surround prefixes, suffixes and the infix. This means that the
     * floating label by default overlaps prefixes in the docked state. To avoid this, we need to
     * horizontally offset the label by the width of the prefix container. The MDC text-field does
     * not need to do this because they use a fixed width for prefixes. Hence, they can simply
     * incorporate the horizontal offset into their default text-field styles.
     * @private
     * @return {?}
     */
    _updateOutlineLabelOffset() {
        if (!this._platform.isBrowser || !this._hasOutline() || !this._floatingLabel) {
            return;
        }
        /** @type {?} */
        const floatingLabel = this._floatingLabel.element;
        // If no prefix is displayed, reset the outline label offset from potential
        // previous label offset updates.
        if (!this._prefixContainer) {
            floatingLabel.style.transform = '';
            return;
        }
        // If the form-field is not attached to the DOM yet (e.g. in a tab), we defer
        // the label offset update until the zone stabilizes.
        if (!this._isAttachedToDom()) {
            this._needsOutlineLabelOffsetUpdateOnStable = true;
            return;
        }
        /** @type {?} */
        const prefixContainer = (/** @type {?} */ (this._prefixContainer.nativeElement));
        // If the directionality is RTL, the x-axis transform needs to be inverted. This
        // is because `transformX` does not change based on the page directionality.
        /** @type {?} */
        const labelHorizontalOffset = (this._dir.value === 'rtl' ? -1 : 1) * prefixContainer.getBoundingClientRect().width;
        // Update the transform the floating label to account for the prefix container. Note
        // that we do not want to overwrite the default transform for docked floating labels.
        floatingLabel.style.transform =
            `${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}px)`;
    }
    /**
     * Checks whether the form field is attached to the DOM.
     * @private
     * @return {?}
     */
    _isAttachedToDom() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        if (element.getRootNode) {
            /** @type {?} */
            const rootNode = element.getRootNode();
            // If the element is inside the DOM the root node will be either the document
            // or the closest shadow root, otherwise it'll be the element itself.
            return rootNode && rootNode !== element;
        }
        // Otherwise fall back to checking if it's in the document. This doesn't account for
        // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.
        return (/** @type {?} */ (document.documentElement)).contains(element);
    }
}
MatFormField.decorators = [
    { type: Component, args: [{
                selector: 'mat-form-field',
                exportAs: 'matFormField',
                template: "<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don't want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n\n    *Note*: We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n    read if it comes before the control in the DOM.\n  -->\n  <label matFormFieldFloatingLabel [floating]=\"_shouldLabelFloat()\"\n         *ngIf=\"_hasFloatingLabel()\"\n         (cdkObserveContent)=\"_refreshOutlineNotchWidth()\"\n         [cdkObserveContentDisabled]=\"!_hasOutline()\"\n         [id]=\"_labelId\"\n         [attr.for]=\"_control.id\"\n         [attr.aria-owns]=\"_control.id\">\n    <ng-content select=\"mat-label\"></ng-content>\n\n    <!-- Manually handle the required asterisk. This is necessary because MDC can only\n         display the asterisk if the label is directly preceded by the input. This cannot\n         be guaranteed here since the form control is not necessarily an input, or is wrapped.\n      -->\n    <span class=\"mat-mdc-form-field-required-marker\" aria-hidden=\"true\"\n          *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n  </label>\n</ng-template>\n\n<div class=\"mat-mdc-text-field-wrapper mdc-text-field\" #textField\n     [class.mdc-text-field--filled]=\"!_hasOutline()\"\n     [class.mdc-text-field--outlined]=\"_hasOutline()\"\n     [class.mdc-text-field--no-label]=\"!_hasFloatingLabel()\"\n     [class.mdc-text-field--disabled]=\"_control.disabled\"\n     [class.mdc-text-field--invalid]=\"_control.errorState\"\n     (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n  <div class=\"mat-mdc-form-field-focus-overlay\" *ngIf=\"!_hasOutline()\"></div>\n  <div class=\"mat-mdc-form-field-flex\">\n    <div *ngIf=\"_hasOutline()\" matFormFieldNotchedOutline\n         [matFormFieldNotchedOutlineOpen]=\"_shouldLabelFloat()\"\n         [matFormFieldNotchedOutlineWidth]=\"_outlineNotchWidth\">\n      <ng-template [ngIf]=\"!_forceDisplayInfixLabel()\">\n        <ng-template [ngTemplateOutlet]=\"labelTemplate\"></ng-template>\n      </ng-template>\n    </div>\n\n    <div class=\"mat-mdc-form-field-prefix\" *ngIf=\"_prefixChildren.length\" #prefixContainer>\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-mdc-form-field-infix\">\n      <ng-template [ngIf]=\"!_hasOutline() || _forceDisplayInfixLabel()\">\n        <ng-template [ngTemplateOutlet]=\"labelTemplate\"></ng-template>\n      </ng-template>\n\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"mat-mdc-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <div matFormFieldLineRipple *ngIf=\"!_hasOutline()\"></div>\n</div>\n\n<div class=\"mat-mdc-form-field-subscript-wrapper\"\n     [ngSwitch]=\"_getDisplayedMessages()\">\n  <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n    <ng-content select=\"mat-error\"></ng-content>\n  </div>\n\n  <div class=\"mat-mdc-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n       [@transitionMessages]=\"_subscriptAnimationState\">\n    <mat-hint *ngIf=\"hintLabel\" [id]=\"_hintLabelId\">{{hintLabel}}</mat-hint>\n    <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n    <div class=\"mat-mdc-form-field-hint-spacer\"></div>\n    <ng-content select=\"mat-hint[align='end']\"></ng-content>\n  </div>\n</div>\n",
                animations: [matFormFieldAnimations.transitionMessages],
                host: {
                    'class': 'mat-mdc-form-field',
                    '[class.mat-mdc-form-field-label-always-float]': '_shouldAlwaysFloat()',
                    '[class.mat-form-field-invalid]': '_control.errorState',
                    '[class.mat-form-field-disabled]': '_control.disabled',
                    '[class.mat-form-field-autofilled]': '_control.autofilled',
                    '[class.mat-form-field-no-animations]': '_animationMode === "NoopAnimations"',
                    '[class.mat-focused]': '_control.focused',
                    '[class.mat-accent]': 'color == "accent"',
                    '[class.mat-warn]': 'color == "warn"',
                    '[class.ng-untouched]': '_shouldForward("untouched")',
                    '[class.ng-touched]': '_shouldForward("touched")',
                    '[class.ng-pristine]': '_shouldForward("pristine")',
                    '[class.ng-dirty]': '_shouldForward("dirty")',
                    '[class.ng-valid]': '_shouldForward("valid")',
                    '[class.ng-invalid]': '_shouldForward("invalid")',
                    '[class.ng-pending]': '_shouldForward("pending")',
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: MAT_FORM_FIELD, useExisting: MatFormField },
                ],
                styles: [".mdc-text-field{border-radius:4px 4px 0 0;padding:0 16px;display:inline-flex;align-items:baseline;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field.mdc-text-field--with-leading-icon,.mdc-text-field.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field.mdc-text-field--with-trailing-icon,.mdc-text-field.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}[dir=rtl] .mdc-text-field.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon,.mdc-text-field.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:0}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill{z-index:auto !important}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--fullwidth .mdc-text-field__input::placeholder,.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--fullwidth .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-50%) scale(0.75);cursor:auto}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--textarea{align-items:center;width:auto;height:auto;padding:0;overflow:visible;transition:none}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-radius:0 4px 4px 0}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-radius:4px 0 0 4px}.mdc-text-field--textarea .mdc-text-field-character-counter{left:initial;right:16px;position:absolute;bottom:13px}[dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter,.mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl]{left:16px;right:initial}.mdc-text-field--textarea .mdc-floating-label{left:4px;right:initial;top:17px;width:auto}[dir=rtl] .mdc-text-field--textarea .mdc-floating-label,.mdc-text-field--textarea .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-144%) scale(1)}.mdc-text-field--textarea .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(0.75)}.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea .mdc-text-field__input{height:auto;align-self:stretch;box-sizing:border-box;margin-top:8px;margin-bottom:1px;margin-left:0;margin-right:1px;padding:0 16px 16px}[dir=rtl] .mdc-text-field--textarea .mdc-text-field__input,.mdc-text-field--textarea .mdc-text-field__input[dir=rtl]{margin-left:1px;margin-right:0}.mdc-text-field--textarea .mdc-text-field-character-counter+.mdc-text-field__input{margin-bottom:28px;padding-bottom:0}.mdc-text-field--fullwidth{padding:0;width:100%}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:flex}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{height:100%}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-floating-label{display:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before{display:none}.mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input{resize:vertical}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{margin-left:1px;content:\"*\"}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mat-mdc-textarea-input{resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field .mdc-floating-label::after{display:none}.mat-mdc-input-element{font:inherit;border:none}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-input-element.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-input-element{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix{padding-top:24px;padding-bottom:12px}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-infix,.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:20px;padding-bottom:16px}.mat-mdc-text-field-wrapper{height:auto;flex:auto}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mdc-floating-label{left:0;right:0}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75) !important}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-text-field-wrapper .mdc-floating-label{top:28px}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;overflow:hidden}.mat-mdc-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0}.mat-mdc-form-field{display:inline-flex;flex-direction:column}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;min-height:56px;box-sizing:border-box}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--fullwidth .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--fullwidth .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-130%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}\n"]
            }] }
];
/** @nocollapse */
MatFormField.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Directionality },
    { type: Platform },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MAT_LABEL_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
MatFormField.propDecorators = {
    _textField: [{ type: ViewChild, args: ['textField',] }],
    _prefixContainer: [{ type: ViewChild, args: ['prefixContainer',] }],
    _floatingLabel: [{ type: ViewChild, args: [MatFormFieldFloatingLabel,] }],
    _notchedOutline: [{ type: ViewChild, args: [MatFormFieldNotchedOutline,] }],
    _lineRipple: [{ type: ViewChild, args: [MatFormFieldLineRipple,] }],
    _labelChildNonStatic: [{ type: ContentChild, args: [MatLabel,] }],
    _labelChildStatic: [{ type: ContentChild, args: [MatLabel, { static: true },] }],
    _formFieldControl: [{ type: ContentChild, args: [MatFormFieldControl,] }],
    _prefixChildren: [{ type: ContentChildren, args: [MatPrefix, { descendants: true },] }],
    _suffixChildren: [{ type: ContentChildren, args: [MatSuffix, { descendants: true },] }],
    _errorChildren: [{ type: ContentChildren, args: [MatError, { descendants: true },] }],
    _hintChildren: [{ type: ContentChildren, args: [MatHint, { descendants: true },] }],
    hideRequiredMarker: [{ type: Input }],
    color: [{ type: Input }],
    floatLabel: [{ type: Input }],
    appearance: [{ type: Input }],
    hintLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MatFormField.prototype._textField;
    /** @type {?} */
    MatFormField.prototype._prefixContainer;
    /** @type {?} */
    MatFormField.prototype._floatingLabel;
    /** @type {?} */
    MatFormField.prototype._notchedOutline;
    /** @type {?} */
    MatFormField.prototype._lineRipple;
    /** @type {?} */
    MatFormField.prototype._labelChildNonStatic;
    /** @type {?} */
    MatFormField.prototype._labelChildStatic;
    /** @type {?} */
    MatFormField.prototype._formFieldControl;
    /** @type {?} */
    MatFormField.prototype._prefixChildren;
    /** @type {?} */
    MatFormField.prototype._suffixChildren;
    /** @type {?} */
    MatFormField.prototype._errorChildren;
    /** @type {?} */
    MatFormField.prototype._hintChildren;
    /**
     * Whether the required marker should be hidden.
     * @type {?}
     */
    MatFormField.prototype.hideRequiredMarker;
    /**
     * The color palette for the form-field.
     * @type {?}
     */
    MatFormField.prototype.color;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._floatLabel;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._appearance;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._hintLabel;
    /** @type {?} */
    MatFormField.prototype._hintLabelId;
    /** @type {?} */
    MatFormField.prototype._labelId;
    /**
     * State of the mat-hint and mat-error animations.
     * @type {?}
     */
    MatFormField.prototype._subscriptAnimationState;
    /**
     * Width of the outline notch.
     * @type {?}
     */
    MatFormField.prototype._outlineNotchWidth;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._isFocused;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._explicitFormFieldControl;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._foundation;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._needsOutlineLabelOffsetUpdateOnStable;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._adapter;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._defaults;
    /**
     * @type {?}
     * @private
     */
    MatFormField.prototype._labelOptions;
    /** @type {?} */
    MatFormField.prototype._animationMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWZvcm0tZmllbGQvZm9ybS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFJTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUVOLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsd0JBQXdCLEVBRXpCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUNMLGtDQUFrQyxFQUNsQyxrQ0FBa0MsRUFDbEMsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixtQkFBbUIsR0FDcEIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBRUwsc0JBQXNCLEVBQ3RCLE9BQU8sSUFBSSxtQkFBbUIsRUFDL0IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFB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SUFHakYsMENBQTZDOzs7OztJQUc3Qyw2QkFBeUM7Ozs7O0lBa0J6QyxtQ0FBb0M7Ozs7O0lBZXBDLG1DQUFpRTs7Ozs7SUFTakUsa0NBQXdCOztJQUd4QixvQ0FBZ0Q7O0lBR2hELGdDQUF3RDs7Ozs7SUFHeEQsZ0RBQThCOzs7OztJQUc5QiwwQ0FBMkI7Ozs7O0lBUTNCLGtDQUF5Qzs7Ozs7SUFDekMsa0NBQXdDOzs7OztJQUN4QyxpREFBNEQ7Ozs7O0lBQzVELG1DQUE0Qzs7Ozs7SUFDNUMsOERBQXVEOzs7OztJQUN2RCxnQ0FzRUU7Ozs7O0lBRVUsbUNBQStCOzs7OztJQUMvQiwwQ0FBNkM7Ozs7O0lBQzdDLCtCQUF1Qjs7Ozs7SUFDdkIsNEJBQTRCOzs7OztJQUM1QixpQ0FBMkI7Ozs7O0lBQzNCLGlDQUM4Qzs7Ozs7SUFDOUMscUNBQWtGOztJQUNsRixzQ0FBeUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIExhYmVsT3B0aW9ucyxcbiAgTUFUX0xBQkVMX0dMT0JBTF9PUFRJT05TLFxuICBUaGVtZVBhbGV0dGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge1xuICBnZXRNYXRGb3JtRmllbGREdXBsaWNhdGVkSGludEVycm9yLFxuICBnZXRNYXRGb3JtRmllbGRNaXNzaW5nQ29udHJvbEVycm9yLFxuICBNQVRfRk9STV9GSUVMRCxcbiAgbWF0Rm9ybUZpZWxkQW5pbWF0aW9ucyxcbiAgTWF0Rm9ybUZpZWxkQ29udHJvbCxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge0FOSU1BVElPTl9NT0RVTEVfVFlQRX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIE1EQ1RleHRGaWVsZEFkYXB0ZXIsXG4gIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sXG4gIG51bWJlcnMgYXMgbWRjVGV4dEZpZWxkTnVtYmVyc1xufSBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkJztcbmltcG9ydCB7bWVyZ2UsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF0RXJyb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9lcnJvcic7XG5pbXBvcnQge01hdEZvcm1GaWVsZEZsb2F0aW5nTGFiZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9mbG9hdGluZy1sYWJlbCc7XG5pbXBvcnQge01hdEhpbnR9IGZyb20gJy4vZGlyZWN0aXZlcy9oaW50JztcbmltcG9ydCB7TWF0TGFiZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9sYWJlbCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZExpbmVSaXBwbGV9IGZyb20gJy4vZGlyZWN0aXZlcy9saW5lLXJpcHBsZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE5vdGNoZWRPdXRsaW5lfSBmcm9tICcuL2RpcmVjdGl2ZXMvbm90Y2hlZC1vdXRsaW5lJztcbmltcG9ydCB7TWF0UHJlZml4fSBmcm9tICcuL2RpcmVjdGl2ZXMvcHJlZml4JztcbmltcG9ydCB7TWF0U3VmZml4fSBmcm9tICcuL2RpcmVjdGl2ZXMvc3VmZml4JztcblxuLyoqIFR5cGUgZm9yIHRoZSBhdmFpbGFibGUgZmxvYXRMYWJlbCB2YWx1ZXMuICovXG5leHBvcnQgdHlwZSBGbG9hdExhYmVsVHlwZSA9ICdhbHdheXMnIHwgJ2F1dG8nO1xuXG4vKiogUG9zc2libGUgYXBwZWFyYW5jZSBzdHlsZXMgZm9yIHRoZSBmb3JtIGZpZWxkLiAqL1xuZXhwb3J0IHR5cGUgTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSA9ICdmaWxsJyB8ICdvdXRsaW5lJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBmb3JtIGZpZWxkIHRoYXQgY2FuIGJlIGNvbmZpZ3VyZWRcbiAqIHVzaW5nIHRoZSBgTUFUX0ZPUk1fRklFTERfREVGQVVMVF9PUFRJT05TYCBpbmplY3Rpb24gdG9rZW4uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWF0Rm9ybUZpZWxkRGVmYXVsdE9wdGlvbnMge1xuICBhcHBlYXJhbmNlPzogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgaGlkZVJlcXVpcmVkTWFya2VyPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlXG4gKiBkZWZhdWx0IG9wdGlvbnMgZm9yIGFsbCBmb3JtIGZpZWxkIHdpdGhpbiBhbiBhcHAuXG4gKi9cbmV4cG9ydCBjb25zdCBNQVRfRk9STV9GSUVMRF9ERUZBVUxUX09QVElPTlMgPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48TWF0Rm9ybUZpZWxkRGVmYXVsdE9wdGlvbnM+KCdNQVRfRk9STV9GSUVMRF9ERUZBVUxUX09QVElPTlMnKTtcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbi8qKiBEZWZhdWx0IGFwcGVhcmFuY2UgdXNlZCBieSB0aGUgZm9ybS1maWVsZC4gKi9cbmNvbnN0IERFRkFVTFRfQVBQRUFSQU5DRTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSA9ICdmaWxsJztcblxuLyoqIERlZmF1bHQgYXBwZWFyYW5jZSB1c2VkIGJ5IHRoZSBmb3JtLWZpZWxkLiAqL1xuY29uc3QgREVGQVVMVF9GTE9BVF9MQUJFTDogRmxvYXRMYWJlbFR5cGUgPSAnYXV0byc7XG5cbi8qKlxuICogRGVmYXVsdCB0cmFuc2Zvcm0gZm9yIGRvY2tlZCBmbG9hdGluZyBsYWJlbHMgaW4gYSBNREMgdGV4dC1maWVsZC4gVGhpcyB2YWx1ZSBoYXMgYmVlblxuICogZXh0cmFjdGVkIGZyb20gdGhlIE1EQyB0ZXh0LWZpZWxkIHN0eWxlcyBiZWNhdXNlIHdlIHByb2dyYW1tYXRpY2FsbHkgbW9kaWZ5IHRoZSBkb2NrZWRcbiAqIGxhYmVsIHRyYW5zZm9ybSwgYnV0IGRvIG5vdCB3YW50IHRvIGFjY2lkZW50YWxseSBkaXNjYXJkIHRoZSBkZWZhdWx0IGxhYmVsIHRyYW5zZm9ybS5cbiAqL1xuY29uc3QgRkxPQVRJTkdfTEFCRUxfREVGQVVMVF9ET0NLRURfVFJBTlNGT1JNID0gYHRyYW5zbGF0ZVkoLTUwJSlgO1xuXG4vKiogQ29udGFpbmVyIGZvciBmb3JtIGNvbnRyb2xzIHRoYXQgYXBwbGllcyBNYXRlcmlhbCBEZXNpZ24gc3R5bGluZyBhbmQgYmVoYXZpb3IuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybS1maWVsZCcsXG4gIGV4cG9ydEFzOiAnbWF0Rm9ybUZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tZmllbGQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tZmllbGQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFttYXRGb3JtRmllbGRBbmltYXRpb25zLnRyYW5zaXRpb25NZXNzYWdlc10sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbWF0LW1kYy1mb3JtLWZpZWxkJyxcbiAgICAnW2NsYXNzLm1hdC1tZGMtZm9ybS1maWVsZC1sYWJlbC1hbHdheXMtZmxvYXRdJzogJ19zaG91bGRBbHdheXNGbG9hdCgpJyxcbiAgICAnW2NsYXNzLm1hdC1mb3JtLWZpZWxkLWludmFsaWRdJzogJ19jb250cm9sLmVycm9yU3RhdGUnLFxuICAgICdbY2xhc3MubWF0LWZvcm0tZmllbGQtZGlzYWJsZWRdJzogJ19jb250cm9sLmRpc2FibGVkJyxcbiAgICAnW2NsYXNzLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsZWRdJzogJ19jb250cm9sLmF1dG9maWxsZWQnLFxuICAgICdbY2xhc3MubWF0LWZvcm0tZmllbGQtbm8tYW5pbWF0aW9uc10nOiAnX2FuaW1hdGlvbk1vZGUgPT09IFwiTm9vcEFuaW1hdGlvbnNcIicsXG4gICAgJ1tjbGFzcy5tYXQtZm9jdXNlZF0nOiAnX2NvbnRyb2wuZm9jdXNlZCcsXG4gICAgJ1tjbGFzcy5tYXQtYWNjZW50XSc6ICdjb2xvciA9PSBcImFjY2VudFwiJyxcbiAgICAnW2NsYXNzLm1hdC13YXJuXSc6ICdjb2xvciA9PSBcIndhcm5cIicsXG4gICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKScsXG4gICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKScsXG4gICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcImludmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpJyxcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBNQVRfRk9STV9GSUVMRCwgdXNlRXhpc3Rpbmc6IE1hdEZvcm1GaWVsZH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0Rm9ybUZpZWxkIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkLFxuICAgIEFmdGVyQ29udGVudEluaXQge1xuICBAVmlld0NoaWxkKCd0ZXh0RmllbGQnKSBfdGV4dEZpZWxkOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgncHJlZml4Q29udGFpbmVyJykgX3ByZWZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoTWF0Rm9ybUZpZWxkRmxvYXRpbmdMYWJlbCkgX2Zsb2F0aW5nTGFiZWw6IE1hdEZvcm1GaWVsZEZsb2F0aW5nTGFiZWx8dW5kZWZpbmVkO1xuICBAVmlld0NoaWxkKE1hdEZvcm1GaWVsZE5vdGNoZWRPdXRsaW5lKSBfbm90Y2hlZE91dGxpbmU6IE1hdEZvcm1GaWVsZE5vdGNoZWRPdXRsaW5lfHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZChNYXRGb3JtRmllbGRMaW5lUmlwcGxlKSBfbGluZVJpcHBsZTogTWF0Rm9ybUZpZWxkTGluZVJpcHBsZXx1bmRlZmluZWQ7XG5cbiAgQENvbnRlbnRDaGlsZChNYXRMYWJlbCkgX2xhYmVsQ2hpbGROb25TdGF0aWM6IE1hdExhYmVsfHVuZGVmaW5lZDtcbiAgQENvbnRlbnRDaGlsZChNYXRMYWJlbCwge3N0YXRpYzogdHJ1ZX0pIF9sYWJlbENoaWxkU3RhdGljOiBNYXRMYWJlbHx1bmRlZmluZWQ7XG4gIEBDb250ZW50Q2hpbGQoTWF0Rm9ybUZpZWxkQ29udHJvbCkgX2Zvcm1GaWVsZENvbnRyb2w6IE1hdEZvcm1GaWVsZENvbnRyb2w8YW55PjtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRQcmVmaXgsIHtkZXNjZW5kYW50czogdHJ1ZX0pIF9wcmVmaXhDaGlsZHJlbjogUXVlcnlMaXN0PE1hdFByZWZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0U3VmZml4LCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfc3VmZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxNYXRTdWZmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKE1hdEVycm9yLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfZXJyb3JDaGlsZHJlbjogUXVlcnlMaXN0PE1hdEVycm9yPjtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRIaW50LCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfaGludENoaWxkcmVuOiBRdWVyeUxpc3Q8TWF0SGludD47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHJlcXVpcmVkIG1hcmtlciBzaG91bGQgYmUgaGlkZGVuLiAqL1xuICBASW5wdXQoKSBoaWRlUmVxdWlyZWRNYXJrZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogVGhlIGNvbG9yIHBhbGV0dGUgZm9yIHRoZSBmb3JtLWZpZWxkLiAqL1xuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBsYWJlbCBzaG91bGQgYWx3YXlzIGZsb2F0IG9yIGZsb2F0IGFzIHRoZSB1c2VyIHR5cGVzLiAqL1xuICBASW5wdXQoKVxuICBnZXQgZmxvYXRMYWJlbCgpOiBGbG9hdExhYmVsVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0TGFiZWwgfHwgKHRoaXMuX2xhYmVsT3B0aW9ucyAmJiB0aGlzLl9sYWJlbE9wdGlvbnMuZmxvYXQpXG4gICAgICAgIHx8IERFRkFVTFRfRkxPQVRfTEFCRUw7XG4gIH1cbiAgc2V0IGZsb2F0TGFiZWwodmFsdWU6IEZsb2F0TGFiZWxUeXBlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9mbG9hdExhYmVsKSB7XG4gICAgICB0aGlzLl9mbG9hdExhYmVsID0gdmFsdWU7XG4gICAgICAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEN1c3RvbSBmb3JtLWZpZWxkIGNvbnRyb2xzIG9yIGRpcmVjdGl2ZXMgbWlnaHQgc2V0XG4gICAgICAvLyB0aGUgXCJmbG9hdExhYmVsXCIgaW5wdXQgYW5kIGV4cGVjdCB0aGUgZm9ybS1maWVsZCB2aWV3IHRvIGJlIHVwZGF0ZWQgYXV0b21hdGljYWxseS5cbiAgICAgIC8vIGUuZy4gYXV0b2NvbXBsZXRlIHRyaWdnZXIuIElkZWFsbHkgd2UnZCBnZXQgcmlkIG9mIHRoaXMgYW5kIHRoZSBjb25zdW1lcnMgd291bGQganVzdFxuICAgICAgLy8gZW1pdCB0aGUgXCJzdGF0ZUNoYW5nZXNcIiBvYnNlcnZhYmxlLiBUT0RPKGRldnZlcnNpb24pOiBjb25zaWRlciByZW1vdmluZy5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9mbG9hdExhYmVsOiBGbG9hdExhYmVsVHlwZTtcblxuICAvKiogVGhlIGZvcm0tZmllbGQgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSB7IHJldHVybiB0aGlzLl9hcHBlYXJhbmNlOyB9XG4gIHNldCBhcHBlYXJhbmNlKHZhbHVlOiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl9hcHBlYXJhbmNlO1xuICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWx1ZSB8fCAodGhpcy5fZGVmYXVsdHMgJiYgdGhpcy5fZGVmYXVsdHMuYXBwZWFyYW5jZSkgfHwgREVGQVVMVF9BUFBFQVJBTkNFO1xuICAgIC8vIElmIHRoZSBhcHBlYXJhbmNlIGhhcyBiZWVuIHN3aXRjaGVkIHRvIGBvdXRsaW5lYCwgdGhlIGxhYmVsIG9mZnNldCBuZWVkcyB0byBiZSB1cGRhdGVkLlxuICAgIC8vIFRoZSB1cGRhdGUgY2FuIGhhcHBlbiBvbmNlIHRoZSB2aWV3IGhhcyBiZWVuIHJlLWNoZWNrZWQsIGJ1dCBub3QgaW1tZWRpYXRlbHkgYmVjYXVzZVxuICAgIC8vIHRoZSB2aWV3IGhhcyBub3QgYmVlbiB1cGRhdGVkIGFuZCB0aGUgbm90Y2hlZC1vdXRsaW5lIGZsb2F0aW5nIGxhYmVsIGlzIG5vdCBwcmVzZW50LlxuICAgIGlmICh0aGlzLl9hcHBlYXJhbmNlID09PSAnb3V0bGluZScgJiYgdGhpcy5fYXBwZWFyYW5jZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMuX25lZWRzT3V0bGluZUxhYmVsT2Zmc2V0VXBkYXRlT25TdGFibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlID0gREVGQVVMVF9BUFBFQVJBTkNFO1xuXG4gIC8qKiBUZXh0IGZvciB0aGUgZm9ybSBmaWVsZCBoaW50LiAqL1xuICBASW5wdXQoKVxuICBnZXQgaGludExhYmVsKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9oaW50TGFiZWw7IH1cbiAgc2V0IGhpbnRMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faGludExhYmVsID0gdmFsdWU7XG4gICAgdGhpcy5fcHJvY2Vzc0hpbnRzKCk7XG4gIH1cbiAgcHJpdmF0ZSBfaGludExhYmVsID0gJyc7XG5cbiAgLy8gVW5pcXVlIGlkIGZvciB0aGUgaGludCBsYWJlbC5cbiAgX2hpbnRMYWJlbElkID0gYG1hdC1tZGMtaGludC0ke25leHRVbmlxdWVJZCsrfWA7XG5cbiAgLy8gVW5pcXVlIGlkIGZvciB0aGUgaW50ZXJuYWwgZm9ybSBmaWVsZCBsYWJlbC5cbiAgX2xhYmVsSWQgPSBgbWF0LW1kYy1mb3JtLWZpZWxkLWxhYmVsLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICAvKiogU3RhdGUgb2YgdGhlIG1hdC1oaW50IGFuZCBtYXQtZXJyb3IgYW5pbWF0aW9ucy4gKi9cbiAgX3N1YnNjcmlwdEFuaW1hdGlvblN0YXRlID0gJyc7XG5cbiAgLyoqIFdpZHRoIG9mIHRoZSBvdXRsaW5lIG5vdGNoLiAqL1xuICBfb3V0bGluZU5vdGNoV2lkdGg6IG51bWJlcjtcblxuICAvKiogR2V0cyB0aGUgY3VycmVudCBmb3JtIGZpZWxkIGNvbnRyb2wgKi9cbiAgZ2V0IF9jb250cm9sKCk6IE1hdEZvcm1GaWVsZENvbnRyb2w8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGxpY2l0Rm9ybUZpZWxkQ29udHJvbCB8fCB0aGlzLl9mb3JtRmllbGRDb250cm9sO1xuICB9XG4gIHNldCBfY29udHJvbCh2YWx1ZSkgeyB0aGlzLl9leHBsaWNpdEZvcm1GaWVsZENvbnRyb2wgPSB2YWx1ZTsgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2lzRm9jdXNlZDogYm9vbGVhbnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZXhwbGljaXRGb3JtRmllbGRDb250cm9sOiBNYXRGb3JtRmllbGRDb250cm9sPGFueT47XG4gIHByaXZhdGUgX2ZvdW5kYXRpb246IE1EQ1RleHRGaWVsZEZvdW5kYXRpb247XG4gIHByaXZhdGUgX25lZWRzT3V0bGluZUxhYmVsT2Zmc2V0VXBkYXRlT25TdGFibGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWRhcHRlcjogTURDVGV4dEZpZWxkQWRhcHRlciA9IHtcbiAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuX3RleHRGaWVsZC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuX3RleHRGaWVsZC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuX3RleHRGaWVsZC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuXG4gICAgaGFzTGFiZWw6ICgpID0+IHRoaXMuX2hhc0Zsb2F0aW5nTGFiZWwoKSxcbiAgICBpc0ZvY3VzZWQ6ICgpID0+IHRoaXMuX2NvbnRyb2wuZm9jdXNlZCxcbiAgICBoYXNPdXRsaW5lOiAoKSA9PiB0aGlzLl9oYXNPdXRsaW5lKCksXG5cbiAgICAvLyBNREMgdGV4dC1maWVsZCB3aWxsIGNhbGwgdGhpcyBtZXRob2Qgb24gZm9jdXMsIGJsdXIgYW5kIHZhbHVlIGNoYW5nZS4gSXQgZXhwZWN0cyB1c1xuICAgIC8vIHRvIHVwZGF0ZSB0aGUgZmxvYXRpbmcgbGFiZWwgc3RhdGUgYWNjb3JkaW5nbHkuIFRob3VnaCB3ZSBtYWtlIHRoaXMgYSBub29wIGJlY2F1c2Ugd2VcbiAgICAvLyB3YW50IHRvIHJlYWN0IHRvIGZsb2F0aW5nIGxhYmVsIHN0YXRlIGNoYW5nZXMgdGhyb3VnaCBjaGFuZ2UgZGV0ZWN0aW9uLiBSZWx5aW5nIG9uIHRoaXNcbiAgICAvLyBhZGFwdGVyIG1ldGhvZCB3b3VsZCBtZWFuIHRoYXQgdGhlIGxhYmVsIHdvdWxkIG5vdCB1cGRhdGUgaWYgdGhlIGN1c3RvbSBmb3JtLWZpZWxkIGNvbnRyb2xcbiAgICAvLyBzZXRzIFwic2hvdWxkTGFiZWxGbG9hdFwiIHRvIHRydWUsIG9yIGlmIHRoZSBcImZsb2F0TGFiZWxcIiBpbnB1dCBiaW5kaW5nIGNoYW5nZXMgdG8gXCJhbHdheXNcIi5cbiAgICBmbG9hdExhYmVsOiAoKSA9PiB7fSxcblxuICAgIC8vIExhYmVsIHNoYWtpbmcgaXMgbm90IHN1cHBvcnRlZCB5ZXQuIEl0IHdpbGwgcmVxdWlyZSBhIG5ldyBBUEkgZm9yIGZvcm0gZmllbGRcbiAgICAvLyBjb250cm9scyB0byB0cmlnZ2VyIHRoZSBzaGFraW5nLiBUaGlzIGNhbiBiZSBhIGZlYXR1cmUgaW4gdGhlIGZ1dHVyZS5cbiAgICAvLyBUT0RPKGRldnZlcnNpb24pOiBleHBsb3JlIG9wdGlvbnMgb24gaG93IHRvIGludGVncmF0ZSBsYWJlbCBzaGFraW5nLlxuICAgIHNoYWtlTGFiZWw6ICgpID0+IHt9LFxuXG4gICAgLy8gTURDIGJ5IGRlZmF1bHQgdXBkYXRlcyB0aGUgbm90Y2hlZC1vdXRsaW5lIHdoZW5ldmVyIHRoZSB0ZXh0LWZpZWxkIHJlY2VpdmVzIGZvY3VzLCBvclxuICAgIC8vIGlzIGJlaW5nIGJsdXJyZWQuIEl0IGFsc28gY29tcHV0ZXMgdGhlIGxhYmVsIHdpZHRoIGV2ZXJ5IHRpbWUgdGhlIG5vdGNoIGlzIG9wZW5lZCBvclxuICAgIC8vIGNsb3NlZC4gVGhpcyB3b3JrcyBmaW5lIGluIHRoZSBzdGFuZGFyZCBNREMgdGV4dC1maWVsZCwgYnV0IG5vdCBpbiBBbmd1bGFyIHdoZXJlIHRoZVxuICAgIC8vIGZsb2F0aW5nIGxhYmVsIGNvdWxkIGNoYW5nZSB0aHJvdWdoIGludGVycG9sYXRpb24uIFdlIHdhbnQgdG8gYmUgYWJsZSB0byB1cGRhdGUgdGhlXG4gICAgLy8gbm90Y2hlZCBvdXRsaW5lIHdoZW5ldmVyIHRoZSBsYWJlbCBjb250ZW50IGNoYW5nZXMuIEFkZGl0aW9uYWxseSwgcmVseWluZyBvbiBmb2N1cyBvclxuICAgIC8vIGJsdXIgdG8gb3BlbiBhbmQgY2xvc2UgdGhlIG5vdGNoIGRvZXMgbm90IHdvcmsgZm9yIHVzIHNpbmNlIGFic3RyYWN0IGZvcm0tZmllbGQgY29udHJvbHNcbiAgICAvLyBoYXZlIHRoZSBhYmlsaXR5IHRvIGNvbnRyb2wgdGhlIGZsb2F0aW5nIGxhYmVsIHN0YXRlIChpLmUuIGBzaG91bGRMYWJlbEZsb2F0YCksIGFuZCB3ZVxuICAgIC8vIHdhbnQgdG8gdXBkYXRlIHRoZSBub3RjaCB3aGVuZXZlciB0aGUgYF9zaG91bGRMYWJlbEZsb2F0KClgIHZhbHVlIGNoYW5nZXMuXG4gICAgZ2V0TGFiZWxXaWR0aDogKCkgPT4gMCxcbiAgICBub3RjaE91dGxpbmU6ICgpID0+IHt9LFxuICAgIGNsb3NlT3V0bGluZTogKCkgPT4ge30sXG5cbiAgICBhY3RpdmF0ZUxpbmVSaXBwbGU6ICgpID0+IHRoaXMuX2xpbmVSaXBwbGUgJiYgdGhpcy5fbGluZVJpcHBsZS5hY3RpdmF0ZSgpLFxuICAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB0aGlzLl9saW5lUmlwcGxlICYmIHRoaXMuX2xpbmVSaXBwbGUuZGVhY3RpdmF0ZSgpLFxuXG4gICAgLy8gVGhlIGZvdW5kYXRpb24gdHJpZXMgdG8gcmVnaXN0ZXIgZXZlbnRzIG9uIHRoZSBpbnB1dC4gVGhpcyBpcyBub3QgbWF0Y2hpbmdcbiAgICAvLyBvdXIgY29uY2VwdCBvZiBhYnN0cmFjdCBmb3JtIGZpZWxkIGNvbnRyb2xzLiBXZSBoYW5kbGUgZWFjaCBldmVudCBtYW51YWxseVxuICAgIC8vIGluIFwic3RhdGVDaGFuZ2VzXCIgYmFzZWQgb24gdGhlIGZvcm0tZmllbGQgY29udHJvbCBzdGF0ZS4gVGhlIGZvbGxvd2luZyBldmVudHNcbiAgICAvLyBuZWVkIHRvIGJlIGhhbmRsZWQ6IGZvY3VzLCBibHVyLiBXZSBkbyBub3QgaGFuZGxlIHRoZSBcImlucHV0XCIgZXZlbnQgc2luY2VcbiAgICAvLyB0aGF0IG9uZSBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIHRleHQtZmllbGQgY2hhcmFjdGVyIGNvdW50LCB3aGljaCB3ZSBkb1xuICAgIC8vIG5vdCBpbXBsZW1lbnQgYXMgcGFydCBvZiB0aGUgZm9ybS1maWVsZCwgYnV0IHNob3VsZCBiZSBpbXBsZW1lbnRlZCBtYW51YWxseVxuICAgIC8vIGJ5IGNvbnN1bWVycyB1c2luZyB0ZW1wbGF0ZSBiaW5kaW5ncy5cbiAgICByZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuXG4gICAgLy8gV2UgZG8gbm90IGhhdmUgYSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBpbnB1dCBzaW5jZSB3ZSB3b3JrIHdpdGggYWJzdHJhY3QgZm9ybSBmaWVsZFxuICAgIC8vIGNvbnRyb2xzLiBNREMgbmVlZHMgYSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBpbnB1dCBvcHRpb25hbGx5IHRvIGhhbmRsZSBjaGFyYWN0ZXJcbiAgICAvLyBjb3VudGluZyBhbmQgdmFsdWUgdXBkYXRpbmcuIFRoZXNlIGFyZSBib3RoIHRoaW5ncyB3ZSBkbyBub3QgaGFuZGxlIGZyb20gd2l0aGluIHRoZVxuICAgIC8vIGZvcm0tZmllbGQsIHNvIHdlIGNhbiBqdXN0IHJldHVybiBudWxsLlxuICAgIGdldE5hdGl2ZUlucHV0OiAoKSA9PiBudWxsLFxuXG4gICAgLy8gVGhpcyBtZXRob2Qgd2lsbCBuZXZlciBiZSBjYWxsZWQgc2luY2Ugd2UgZG8gbm90IGhhdmUgdGhlIGFiaWxpdHkgdG8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIC8vIHRvIHRoZSBuYXRpdmUgaW5wdXQuIFRoaXMgaXMgYmVjYXVzZSB0aGUgZm9ybSBjb250cm9sIGlzIG5vdCBuZWNlc3NhcmlseSBhbiBpbnB1dCwgYW5kXG4gICAgLy8gdGhlIGZvcm0gZmllbGQgZGVhbHMgd2l0aCBhYnN0cmFjdCBmb3JtIGNvbnRyb2xzIG9mIGFueSB0eXBlLlxuICAgIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW46ICgpID0+IHt9LFxuXG4gICAgLy8gVGhlIGZvdW5kYXRpb24gdHJpZXMgdG8gcmVnaXN0ZXIgY2xpY2sgYW5kIGtleWJvYXJkIGV2ZW50cyBvbiB0aGUgZm9ybS1maWVsZCB0byBmaWd1cmUgb3V0XG4gICAgLy8gaWYgdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMgdGhyb3VnaCB1c2VyIGludGVyYWN0aW9uLiBCYXNlZCBvbiB0aGF0LCB0aGUgZm91bmRhdGlvbiB0cmllc1xuICAgIC8vIHRvIGZvY3VzIHRoZSBpbnB1dC4gU2luY2Ugd2UgZG8gbm90IGhhbmRsZSB0aGUgaW5wdXQgdmFsdWUgYXMgcGFydCBvZiB0aGUgZm9ybS1maWVsZCwgbm9yXG4gICAgLy8gaXQncyBndWFyYW50ZWVkIHRvIGJlIGFuIGlucHV0IChzZWUgYWRhcHRlciBtZXRob2RzIGFib3ZlKSwgdGhpcyBpcyBhIG5vb3AuXG4gICAgZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuXG4gICAgLy8gVGhlIGZvdW5kYXRpb24gdHJpZXMgdG8gc2V0dXAgYSBcIk11dGF0aW9uT2JzZXJ2ZXJcIiBpbiBvcmRlciB0byB3YXRjaCBmb3IgYXR0cmlidXRlc1xuICAgIC8vIGxpa2UgXCJtYXhsZW5ndGhcIiBvciBcInBhdHRlcm5cIiB0byBjaGFuZ2UuIFRoZSBmb3VuZGF0aW9uIHdpbGwgdXBkYXRlIHRoZSB2YWxpZGl0eSBzdGF0ZVxuICAgIC8vIGJhc2VkIG9uIHRoYXQuIFdlIGRvIG5vdCBuZWVkIHRoaXMgbG9naWMgc2luY2Ugd2UgaGFuZGxlIHRoZSB2YWxpZGl0eSB0aHJvdWdoIHRoZVxuICAgIC8vIGFic3RyYWN0IGZvcm0gY29udHJvbCBpbnN0YW5jZS5cbiAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6ICgpID0+IHt9LFxuICAgIHJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6ICgpID0+IG51bGwgYXMgYW55LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfRk9STV9GSUVMRF9ERUZBVUxUX09QVElPTlMpXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RlZmF1bHRzPzogTWF0Rm9ybUZpZWxkRGVmYXVsdE9wdGlvbnMsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0xBQkVMX0dMT0JBTF9PUFRJT05TKSBwcml2YXRlIF9sYWJlbE9wdGlvbnM/OiBMYWJlbE9wdGlvbnMsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwdWJsaWMgX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcpIHtcbiAgICBpZiAoX2RlZmF1bHRzICYmIF9kZWZhdWx0cy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBfZGVmYXVsdHMuYXBwZWFyYW5jZTtcbiAgICB9IGVsc2UgaWYgKF9kZWZhdWx0cyAmJiBfZGVmYXVsdHMuaGlkZVJlcXVpcmVkTWFya2VyKSB7XG4gICAgICB0aGlzLmhpZGVSZXF1aXJlZE1hcmtlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2ZvdW5kYXRpb24gPSBuZXcgTURDVGV4dEZpZWxkRm91bmRhdGlvbih0aGlzLl9hZGFwdGVyKTtcblxuICAgIC8vIE1EQyB1c2VzIHRoZSBcInNob3VsZEZsb2F0XCIgZ2V0dGVyIHRvIGtub3cgd2hldGhlciB0aGUgbGFiZWwgaXMgY3VycmVudGx5IGZsb2F0aW5nLiBUaGlzXG4gICAgLy8gZG9lcyBub3QgbWF0Y2ggb3VyIGltcGxlbWVudGF0aW9uIG9mIHdoZW4gdGhlIGxhYmVsIGZsb2F0cyBiZWNhdXNlIHdlIHN1cHBvcnQgbW9yZSBjYXNlcy5cbiAgICAvLyBGb3IgZXhhbXBsZSwgY29uc3VtZXJzIGNhbiBzZXQgXCJASW5wdXQgZmxvYXRMYWJlbFwiIHRvIGFsd2F5cywgb3IgdGhlIGN1c3RvbSBmb3JtLWZpZWxkXG4gICAgLy8gY29udHJvbCBjYW4gc2V0IFwiTWF0Rm9ybUZpZWxkQ29udHJvbCNzaG91bGRMYWJlbEZsb2F0XCIgdG8gdHJ1ZS4gVG8gZW5zdXJlIHRoYXQgTURDIGtub3dzXG4gICAgLy8gd2hlbiB0aGUgbGFiZWwgaXMgZmxvYXRpbmcsIHdlIG92ZXJ3cml0ZSB0aGUgcHJvcGVydHkgdG8gYmUgYmFzZWQgb24gdGhlIG1ldGhvZCB3ZSB1c2UgdG9cbiAgICAvLyBkZXRlcm1pbmUgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLl9mb3VuZGF0aW9uLCAnc2hvdWxkRmxvYXQnLCB7XG4gICAgICBnZXQ6ICgpID0+IHRoaXMuX3Nob3VsZExhYmVsRmxvYXQoKSxcbiAgICB9KTtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIHRoZSBmb3VuZGF0aW9uIGRldGVybWluZXMgdGhlIHZhbGlkaXR5IG9mIHRoZSB0ZXh0LWZpZWxkIGZyb20gdGhlXG4gICAgLy8gc3BlY2lmaWVkIG5hdGl2ZSBpbnB1dC4gU2luY2Ugd2UgZG9uJ3QgcGFzcyBhIG5hdGl2ZSBpbnB1dCB0byB0aGUgZm91bmRhdGlvbiBiZWNhdXNlXG4gICAgLy8gYWJzdHJhY3QgZm9ybSBjb250cm9scyBhcmUgbm90IG5lY2Vzc2FyaWx5IGNvbnNpc3Rpbmcgb2YgYW4gaW5wdXQsIHdlIGhhbmRsZSB0aGVcbiAgICAvLyB0ZXh0LWZpZWxkIHZhbGlkaXR5IHRocm91Z2ggdGhlIGFic3RyYWN0IGZvcm0tZmllbGQgY29udHJvbCBzdGF0ZS5cbiAgICB0aGlzLl9mb3VuZGF0aW9uLmlzVmFsaWQgPSAoKSA9PiAhdGhpcy5fY29udHJvbC5lcnJvclN0YXRlO1xuXG4gICAgLy8gSW5pdGlhbCBmb2N1cyBzdGF0ZSBzeW5jLiBUaGlzIGhhcHBlbnMgcmFyZWx5LCBidXQgd2Ugd2FudCB0byBhY2NvdW50IGZvclxuICAgIC8vIGl0IGluIGNhc2UgdGhlIGZvcm0tZmllbGQgY29udHJvbCBoYXMgXCJmb2N1c2VkXCIgc2V0IHRvIHRydWUgb24gaW5pdC5cbiAgICB0aGlzLl91cGRhdGVGb2N1c1N0YXRlKCk7XG4gICAgLy8gSW5pdGlhbCBub3RjaCB3aWR0aCB1cGRhdGUuIFRoaXMgaXMgbmVlZGVkIGluIGNhc2UgdGhlIHRleHQtZmllbGQgbGFiZWwgZmxvYXRzXG4gICAgLy8gb24gaW5pdGlhbGl6YXRpb24sIGFuZCByZW5kZXJzIGluc2lkZSBvZiB0aGUgbm90Y2hlZCBvdXRsaW5lLlxuICAgIHRoaXMuX3JlZnJlc2hPdXRsaW5lTm90Y2hXaWR0aCgpO1xuICAgIC8vIEVuYWJsZSBhbmltYXRpb25zIG5vdy4gVGhpcyBlbnN1cmVzIHdlIGRvbid0IGFuaW1hdGUgb24gaW5pdGlhbCByZW5kZXIuXG4gICAgdGhpcy5fc3Vic2NyaXB0QW5pbWF0aW9uU3RhdGUgPSAnZW50ZXInO1xuICAgIC8vIEJlY2F1c2UgdGhlIGFib3ZlIGNoYW5nZXMgYSB2YWx1ZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZSBhZnRlciBpdCB3YXMgY2hlY2tlZCwgd2UgbmVlZFxuICAgIC8vIHRvIHRyaWdnZXIgQ0Qgb3IgdGhlIGNoYW5nZSBtaWdodCBub3QgYmUgcmVmbGVjdGVkIGlmIHRoZXJlIGlzIG5vIG90aGVyIENEIHNjaGVkdWxlZC5cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fYXNzZXJ0Rm9ybUZpZWxkQ29udHJvbCgpO1xuICAgIHRoaXMuX2luaXRpYWxpemVDb250cm9sKCk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVN1YnNjcmlwdCgpO1xuICAgIHRoaXMuX2luaXRpYWxpemVQcmVmaXhBbmRTdWZmaXgoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplT3V0bGluZUxhYmVsT2Zmc2V0U3Vic2NyaXB0aW9ucygpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIHRoaXMuX2Fzc2VydEZvcm1GaWVsZENvbnRyb2woKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBFbGVtZW50UmVmIGZvciB0aGUgZWxlbWVudCB0aGF0IGEgb3ZlcmxheSBhdHRhY2hlZCB0byB0aGUgZm9ybS1maWVsZFxuICAgKiBzaG91bGQgYmUgcG9zaXRpb25lZCByZWxhdGl2ZSB0by5cbiAgICovXG4gIGdldENvbm5lY3RlZE92ZXJsYXlPcmlnaW4oKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRGaWVsZCB8fCB0aGlzLl9lbGVtZW50UmVmO1xuICB9XG5cbiAgLyoqIEFuaW1hdGVzIHRoZSBwbGFjZWhvbGRlciB1cCBhbmQgbG9ja3MgaXQgaW4gcG9zaXRpb24uICovXG4gIF9hbmltYXRlQW5kTG9ja0xhYmVsKCk6IHZvaWQge1xuICAgIC8vIFRoaXMgaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IG9ubHkuIENvbnN1bWVycyBvZiB0aGUgZm9ybS1maWVsZCBtaWdodCB1c2VcbiAgICAvLyB0aGlzIG1ldGhvZC4gZS5nLiB0aGUgYXV0b2NvbXBsZXRlIHRyaWdnZXIuIFRoaXMgbWV0aG9kIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBub24tTURDXG4gICAgLy8gZm9ybS1maWVsZCBiZWNhdXNlIHNldHRpbmcgXCJmbG9hdExhYmVsXCIgdG8gXCJhbHdheXNcIiBjYXVzZWQgdGhlIGxhYmVsIHRvIGZsb2F0IHdpdGhvdXRcbiAgICAvLyBhbmltYXRpb24uIFRoaXMgaXMgZGlmZmVyZW50IGluIE1EQyB3aGVyZSB0aGUgbGFiZWwgYWx3YXlzIGFuaW1hdGVzLCBzbyB0aGlzIG1ldGhvZFxuICAgIC8vIGlzIG5vIGxvbmdlciBuZWNlc3NhcnkuIFRoZXJlIGRvZXNuJ3Qgc2VlbSBhbnkgYmVuZWZpdCBpbiBhZGRpbmcgbG9naWMgdG8gYWxsb3cgY2hhbmdpbmdcbiAgICAvLyB0aGUgZmxvYXRpbmcgbGFiZWwgc3RhdGUgd2l0aG91dCBhbmltYXRpb25zLiBUaGUgbm9uLU1EQyBpbXBsZW1lbnRhdGlvbiB3YXMgaW5jb25zaXN0ZW50XG4gICAgLy8gYmVjYXVzZSBpdCBhbHdheXMgYW5pbWF0ZXMgaWYgXCJmbG9hdExhYmVsXCIgaXMgc2V0IGF3YXkgZnJvbSBcImFsd2F5c1wiLlxuICAgIC8vIFRPRE8oZGV2dmVyc2lvbik6IGNvbnNpZGVyIHJlbW92aW5nIHRoaXMgbWV0aG9kIHdoZW4gcmVsZWFzaW5nIHRoZSBNREMgZm9ybS1maWVsZC5cbiAgICBpZiAodGhpcy5faGFzRmxvYXRpbmdMYWJlbCgpKSB7XG4gICAgICB0aGlzLmZsb2F0TGFiZWwgPSAnYWx3YXlzJztcbiAgICB9XG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZXMgdGhlIHJlZ2lzdGVyZWQgZm9ybS1maWVsZCBjb250cm9sLiAqL1xuICBwcml2YXRlIF9pbml0aWFsaXplQ29udHJvbCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fY29udHJvbDtcblxuICAgIGlmIChjb250cm9sLmNvbnRyb2xUeXBlKSB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgYG1hdC1tZGMtZm9ybS1maWVsZC10eXBlLSR7Y29udHJvbC5jb250cm9sVHlwZX1gKTtcbiAgICB9XG5cbiAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBpbiB0aGUgY2hpbGQgY29udHJvbCBzdGF0ZSBpbiBvcmRlciB0byB1cGRhdGUgdGhlIGZvcm0gZmllbGQgVUkuXG4gICAgY29udHJvbC5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZvY3VzU3RhdGUoKTtcbiAgICAgIHRoaXMuX3N5bmNEZXNjcmliZWRCeUlkcygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAoY29udHJvbC5uZ0NvbnRyb2wgJiYgY29udHJvbC5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBjb250cm9sLm5nQ29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBJbml0aWFsaXplcyB0aGUgcHJlZml4IGFuZCBzdWZmaXggY29udGFpbmVycy4gKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZVByZWZpeEFuZFN1ZmZpeCgpIHtcbiAgICAvLyBNYXJrIHRoZSBmb3JtLWZpZWxkIGFzIGRpcnR5IHdoZW5ldmVyIHRoZSBwcmVmaXggb3Igc3VmZml4IGNoaWxkcmVuIGNoYW5nZS4gVGhpc1xuICAgIC8vIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdlIGNvbmRpdGlvbmFsbHkgZGlzcGxheSB0aGUgcHJlZml4L3N1ZmZpeCBjb250YWluZXJzIGJhc2VkXG4gICAgLy8gb24gd2hldGhlciB0aGVyZSBpcyBwcm9qZWN0ZWQgY29udGVudC5cbiAgICBtZXJnZSh0aGlzLl9wcmVmaXhDaGlsZHJlbi5jaGFuZ2VzLCB0aGlzLl9zdWZmaXhDaGlsZHJlbi5jaGFuZ2VzKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHN1YnNjcmlwdCBieSB2YWxpZGF0aW5nIGhpbnRzIGFuZCBzeW5jaHJvbml6aW5nIFwiYXJpYS1kZXNjcmliZWRieVwiIGlkc1xuICAgKiB3aXRoIHRoZSBjdXN0b20gZm9ybS1maWVsZCBjb250cm9sLiBBbHNvIHN1YnNjcmliZXMgdG8gaGludCBhbmQgZXJyb3IgY2hhbmdlcyBpbiBvcmRlclxuICAgKiB0byBiZSBhYmxlIHRvIHZhbGlkYXRlIGFuZCBzeW5jaHJvbml6ZSBpZHMgb24gY2hhbmdlLlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZVN1YnNjcmlwdCgpIHtcbiAgICAvLyBSZS12YWxpZGF0ZSB3aGVuIHRoZSBudW1iZXIgb2YgaGludHMgY2hhbmdlcy5cbiAgICB0aGlzLl9oaW50Q2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fcHJvY2Vzc0hpbnRzKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgYXJpYS1kZXNjcmliZWQgYnkgd2hlbiB0aGUgbnVtYmVyIG9mIGVycm9ycyBjaGFuZ2VzLlxuICAgIHRoaXMuX2Vycm9yQ2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fc3luY0Rlc2NyaWJlZEJ5SWRzKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWwgbWF0LWhpbnQgdmFsaWRhdGlvbiBhbmQgc3Vic2NyaXB0IGRlc2NyaWJlZEJ5SWRzIHN5bmMuXG4gICAgdGhpcy5fdmFsaWRhdGVIaW50cygpO1xuICAgIHRoaXMuX3N5bmNEZXNjcmliZWRCeUlkcygpO1xuICB9XG5cbiAgLyoqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgZm9ybSBmaWVsZCdzIGNvbnRyb2wgaXMgbWlzc2luZy4gKi9cbiAgcHJpdmF0ZSBfYXNzZXJ0Rm9ybUZpZWxkQ29udHJvbCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRyb2wpIHtcbiAgICAgIHRocm93IGdldE1hdEZvcm1GaWVsZE1pc3NpbmdDb250cm9sRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGb2N1c1N0YXRlKCkge1xuICAgIC8vIFVzdWFsbHkgdGhlIE1EQyBmb3VuZGF0aW9uIHdvdWxkIGNhbGwgXCJhY3RpdmF0ZUZvY3VzXCIgYW5kIFwiZGVhY3RpdmF0ZUZvY3VzXCIgd2hlbmV2ZXJcbiAgICAvLyBjZXJ0YWluIERPTSBldmVudHMgYXJlIGVtaXR0ZWQuIFRoaXMgaXMgbm90IHBvc3NpYmxlIGluIG91ciBpbXBsZW1lbnRhdGlvbiBvZiB0aGVcbiAgICAvLyBmb3JtLWZpZWxkIGJlY2F1c2Ugd2Ugc3VwcG9ydCBhYnN0cmFjdCBmb3JtIGZpZWxkIGNvbnRyb2xzIHdoaWNoIGFyZSBub3QgbmVjZXNzYXJpbHlcbiAgICAvLyBvZiB0eXBlIGlucHV0LCBub3IgZG8gd2UgaGF2ZSBhIHJlZmVyZW5jZSB0byBhIG5hdGl2ZSBmb3JtLWZpZWxkIGNvbnRyb2wgZWxlbWVudC4gSW5zdGVhZFxuICAgIC8vIHdlIGhhbmRsZSB0aGUgZm9jdXMgYnkgY2hlY2tpbmcgaWYgdGhlIGFic3RyYWN0IGZvcm0tZmllbGQgY29udHJvbCBmb2N1c2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgaWYgKHRoaXMuX2NvbnRyb2wuZm9jdXNlZCAmJiAhdGhpcy5faXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLl9pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZm91bmRhdGlvbi5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fY29udHJvbC5mb2N1c2VkICYmICh0aGlzLl9pc0ZvY3VzZWQgfHwgdGhpcy5faXNGb2N1c2VkID09PSBudWxsKSkge1xuICAgICAgdGhpcy5faXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3VuZGF0aW9uLmRlYWN0aXZhdGVGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmxvYXRpbmcgbGFiZWwgaW4gdGhlIGRvY2tlZCBzdGF0ZSBuZWVkcyB0byBhY2NvdW50IGZvciBwcmVmaXhlcy4gVGhlIGhvcml6b250YWwgb2Zmc2V0XG4gICAqIGlzIGNhbGN1bGF0ZWQgd2hlbmV2ZXIgdGhlIGFwcGVhcmFuY2UgY2hhbmdlcyB0byBgb3V0bGluZWAsIHRoZSBwcmVmaXhlcyBjaGFuZ2UsIG9yIHdoZW4gdGhlXG4gICAqIGZvcm0tZmllbGQgaXMgYWRkZWQgdG8gdGhlIERPTS4gVGhpcyBtZXRob2Qgc2V0cyB1cCBhbGwgc3Vic2NyaXB0aW9ucyB3aGljaCBhcmUgbmVlZGVkIHRvXG4gICAqIHRyaWdnZXIgdGhlIGxhYmVsIG9mZnNldCB1cGRhdGUuIEluIGdlbmVyYWwsIHdlIHdhbnQgdG8gYXZvaWQgcGVyZm9ybWluZyBtZWFzdXJlbWVudHMgb2Z0ZW4sXG4gICAqIHNvIHdlIHJlbHkgb24gdGhlIGBOZ1pvbmVgIGFzIGluZGljYXRvciB3aGVuIHRoZSBvZmZzZXQgc2hvdWxkIGJlIHJlY2FsY3VsYXRlZCwgaW5zdGVhZCBvZlxuICAgKiBjaGVja2luZyBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZU91dGxpbmVMYWJlbE9mZnNldFN1YnNjcmlwdGlvbnMoKSB7XG4gICAgLy8gV2hlbmV2ZXIgdGhlIHByZWZpeCBjaGFuZ2VzLCBzY2hlZHVsZSBhbiB1cGRhdGUgb2YgdGhlIGxhYmVsIG9mZnNldC5cbiAgICB0aGlzLl9wcmVmaXhDaGlsZHJlbi5jaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25lZWRzT3V0bGluZUxhYmVsT2Zmc2V0VXBkYXRlT25TdGFibGUgPSB0cnVlKTtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBoYXZlIHRvIHJ1biBvdXRzaWRlIG9mIHRoZSBgTmdab25lYCBleHBsaWNpdGx5LCBpbiBvcmRlciB0byBhdm9pZFxuICAgIC8vIHRocm93aW5nIHVzZXJzIGludG8gYW4gaW5maW5pdGUgbG9vcCBpZiBgem9uZS1wYXRjaC1yeGpzYCBpcyBpbmNsdWRlZC5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9uZWVkc091dGxpbmVMYWJlbE9mZnNldFVwZGF0ZU9uU3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fbmVlZHNPdXRsaW5lTGFiZWxPZmZzZXRVcGRhdGVPblN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZU91dGxpbmVMYWJlbE9mZnNldCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2Rpci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbmVlZHNPdXRsaW5lTGFiZWxPZmZzZXRVcGRhdGVPblN0YWJsZSA9IHRydWUpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGZsb2F0aW5nIGxhYmVsIHNob3VsZCBhbHdheXMgZmxvYXQgb3Igbm90LiAqL1xuICBfc2hvdWxkQWx3YXlzRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvYXRMYWJlbCA9PT0gJ2Fsd2F5cyc7XG4gIH1cblxuICBfaGFzT3V0bGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlYXJhbmNlID09PSAnb3V0bGluZSc7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgbGFiZWwgc2hvdWxkIGRpc3BsYXkgaW4gdGhlIGluZml4LiBMYWJlbHMgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBhcmVcbiAgICogZGlzcGxheWVkIGFzIHBhcnQgb2YgdGhlIG5vdGNoZWQtb3V0bGluZSBhbmQgYXJlIGhvcml6b250YWxseSBvZmZzZXQgdG8gYWNjb3VudCBmb3JcbiAgICogZm9ybS1maWVsZCBwcmVmaXggY29udGVudC4gVGhpcyB3b24ndCB3b3JrIGluIHNlcnZlciBzaWRlIHJlbmRlcmluZyBzaW5jZSB3ZSBjYW5ub3RcbiAgICogbWVhc3VyZSB0aGUgd2lkdGggb2YgdGhlIHByZWZpeCBjb250YWluZXIuIFRvIG1ha2UgdGhlIGRvY2tlZCBsYWJlbCBhcHBlYXIgYXMgaWYgdGhlXG4gICAqIHJpZ2h0IG9mZnNldCBoYXMgYmVlbiBjYWxjdWxhdGVkLCB3ZSBmb3JjaWJseSByZW5kZXIgdGhlIGxhYmVsIGluc2lkZSB0aGUgaW5maXguIFNpbmNlXG4gICAqIHRoZSBsYWJlbCBpcyBwYXJ0IG9mIHRoZSBpbmZpeCwgdGhlIGxhYmVsIGNhbm5vdCBvdmVyZmxvdyB0aGUgcHJlZml4IGNvbnRlbnQuXG4gICAqL1xuICBfZm9yY2VEaXNwbGF5SW5maXhMYWJlbCgpIHtcbiAgICByZXR1cm4gIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLl9wcmVmaXhDaGlsZHJlbi5sZW5ndGggJiYgIXRoaXMuX3Nob3VsZExhYmVsRmxvYXQoKTtcbiAgfVxuXG4gIF9oYXNGbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2xhYmVsQ2hpbGROb25TdGF0aWMgfHwgISF0aGlzLl9sYWJlbENoaWxkU3RhdGljO1xuICB9XG5cbiAgX3Nob3VsZExhYmVsRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2wuc2hvdWxkTGFiZWxGbG9hdCB8fCB0aGlzLl9zaG91bGRBbHdheXNGbG9hdCgpO1xuICB9XG5cbiAgLyoqIERldGVybWluZXMgd2hldGhlciBhIGNsYXNzIGZyb20gdGhlIE5nQ29udHJvbCBzaG91bGQgYmUgZm9yd2FyZGVkIHRvIHRoZSBob3N0IGVsZW1lbnQuICovXG4gIF9zaG91bGRGb3J3YXJkKHByb3A6IGtleW9mIE5nQ29udHJvbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMuX2NvbnRyb2wgPyB0aGlzLl9jb250cm9sLm5nQ29udHJvbCA6IG51bGw7XG4gICAgcmV0dXJuIG5nQ29udHJvbCAmJiBuZ0NvbnRyb2xbcHJvcF07XG4gIH1cblxuICAvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGRpc3BsYXkgaGludHMgb3IgZXJyb3JzLiAqL1xuICBfZ2V0RGlzcGxheWVkTWVzc2FnZXMoKTogJ2Vycm9yJyB8ICdoaW50JyB7XG4gICAgcmV0dXJuICh0aGlzLl9lcnJvckNoaWxkcmVuICYmIHRoaXMuX2Vycm9yQ2hpbGRyZW4ubGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5fY29udHJvbC5lcnJvclN0YXRlKSA/ICdlcnJvcicgOiAnaGludCc7XG4gIH1cblxuICAvKiogUmVmcmVzaGVzIHRoZSB3aWR0aCBvZiB0aGUgb3V0bGluZS1ub3RjaCwgaWYgcHJlc2VudC4gKi9cbiAgX3JlZnJlc2hPdXRsaW5lTm90Y2hXaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc091dGxpbmUoKSB8fCAhdGhpcy5fZmxvYXRpbmdMYWJlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUaGUgb3V0bGluZSBub3RjaCBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGxhYmVsIHdpZHRoLCBidXQgbmVlZHMgdG8gcmVzcGVjdCB0aGUgc2NhbGluZ1xuICAgIC8vIGFwcGxpZWQgdG8gdGhlIGxhYmVsIGlmIGl0IGFjdGl2ZWx5IGZsb2F0cy4gU2luY2UgdGhlIGxhYmVsIGFsd2F5cyBmbG9hdHMgd2hlbiB0aGUgbm90Y2hcbiAgICAvLyBpcyBvcGVuLCB0aGUgTURDIHRleHQtZmllbGQgZmxvYXRpbmcgbGFiZWwgc2NhbGluZyBpcyByZXNwZWN0ZWQgaW4gbm90Y2ggd2lkdGggY2FsY3VsYXRpb24uXG4gICAgdGhpcy5fb3V0bGluZU5vdGNoV2lkdGggPSB0aGlzLl9mbG9hdGluZ0xhYmVsLmdldFdpZHRoKCkgKiBtZGNUZXh0RmllbGROdW1iZXJzLkxBQkVMX1NDQUxFO1xuICB9XG5cbiAgLyoqIERvZXMgYW55IGV4dHJhIHByb2Nlc3NpbmcgdGhhdCBpcyByZXF1aXJlZCB3aGVuIGhhbmRsaW5nIHRoZSBoaW50cy4gKi9cbiAgcHJpdmF0ZSBfcHJvY2Vzc0hpbnRzKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRlSGludHMoKTtcbiAgICB0aGlzLl9zeW5jRGVzY3JpYmVkQnlJZHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmUgdGhhdCB0aGVyZSBpcyBhIG1heGltdW0gb2Ygb25lIG9mIGVhY2ggXCJtYXQtaGludFwiIGFsaWdubWVudCBzcGVjaWZpZWQuIFRoZSBoaW50XG4gICAqIGxhYmVsIHNwZWNpZmllZCBzZXQgdGhyb3VnaCB0aGUgaW5wdXQgaXMgYmVpbmcgY29uc2lkZXJlZCBhcyBcInN0YXJ0XCIgYWxpZ25lZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgYSBub29wIGlmIEFuZ3VsYXIgcnVucyBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAqL1xuICBwcml2YXRlIF92YWxpZGF0ZUhpbnRzKCkge1xuICAgIGlmIChpc0Rldk1vZGUoKSAmJiB0aGlzLl9oaW50Q2hpbGRyZW4pIHtcbiAgICAgIGxldCBzdGFydEhpbnQ6IE1hdEhpbnQ7XG4gICAgICBsZXQgZW5kSGludDogTWF0SGludDtcbiAgICAgIHRoaXMuX2hpbnRDaGlsZHJlbi5mb3JFYWNoKChoaW50OiBNYXRIaW50KSA9PiB7XG4gICAgICAgIGlmIChoaW50LmFsaWduID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0SGludCB8fCB0aGlzLmhpbnRMYWJlbCkge1xuICAgICAgICAgICAgdGhyb3cgZ2V0TWF0Rm9ybUZpZWxkRHVwbGljYXRlZEhpbnRFcnJvcignc3RhcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnRIaW50ID0gaGludDtcbiAgICAgICAgfSBlbHNlIGlmIChoaW50LmFsaWduID09PSAnZW5kJykge1xuICAgICAgICAgIGlmIChlbmRIaW50KSB7XG4gICAgICAgICAgICB0aHJvdyBnZXRNYXRGb3JtRmllbGREdXBsaWNhdGVkSGludEVycm9yKCdlbmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZW5kSGludCA9IGhpbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsaXN0IG9mIGVsZW1lbnQgSURzIHRoYXQgZGVzY3JpYmUgdGhlIGNoaWxkIGNvbnRyb2wuIFRoaXMgYWxsb3dzIHRoZSBjb250cm9sIHRvIHVwZGF0ZVxuICAgKiBpdHMgYGFyaWEtZGVzY3JpYmVkYnlgIGF0dHJpYnV0ZSBhY2NvcmRpbmdseS5cbiAgICovXG4gIHByaXZhdGUgX3N5bmNEZXNjcmliZWRCeUlkcygpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCkge1xuICAgICAgbGV0IGlkczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgaWYgKHRoaXMuX2dldERpc3BsYXllZE1lc3NhZ2VzKCkgPT09ICdoaW50Jykge1xuICAgICAgICBjb25zdCBzdGFydEhpbnQgPSB0aGlzLl9oaW50Q2hpbGRyZW4gP1xuICAgICAgICAgIHRoaXMuX2hpbnRDaGlsZHJlbi5maW5kKGhpbnQgPT4gaGludC5hbGlnbiA9PT0gJ3N0YXJ0JykgOiBudWxsO1xuICAgICAgICBjb25zdCBlbmRIaW50ID0gdGhpcy5faGludENoaWxkcmVuID9cbiAgICAgICAgICB0aGlzLl9oaW50Q2hpbGRyZW4uZmluZChoaW50ID0+IGhpbnQuYWxpZ24gPT09ICdlbmQnKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKHN0YXJ0SGludCkge1xuICAgICAgICAgIGlkcy5wdXNoKHN0YXJ0SGludC5pZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faGludExhYmVsKSB7XG4gICAgICAgICAgaWRzLnB1c2godGhpcy5faGludExhYmVsSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZEhpbnQpIHtcbiAgICAgICAgICBpZHMucHVzaChlbmRIaW50LmlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9lcnJvckNoaWxkcmVuKSB7XG4gICAgICAgIGlkcyA9IHRoaXMuX2Vycm9yQ2hpbGRyZW4ubWFwKGVycm9yID0+IGVycm9yLmlkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29udHJvbC5zZXREZXNjcmliZWRCeUlkcyhpZHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBob3Jpem9udGFsIG9mZnNldCBvZiB0aGUgbGFiZWwgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS4gSW4gdGhlIG91dGxpbmVcbiAgICogYXBwZWFyYW5jZSwgdGhlIG5vdGNoZWQtb3V0bGluZSBhbmQgbGFiZWwgYXJlIG5vdCByZWxhdGl2ZSB0byB0aGUgaW5maXggY29udGFpbmVyIGJlY2F1c2VcbiAgICogdGhlIG91dGxpbmUgaW50ZW5kcyB0byBzdXJyb3VuZCBwcmVmaXhlcywgc3VmZml4ZXMgYW5kIHRoZSBpbmZpeC4gVGhpcyBtZWFucyB0aGF0IHRoZVxuICAgKiBmbG9hdGluZyBsYWJlbCBieSBkZWZhdWx0IG92ZXJsYXBzIHByZWZpeGVzIGluIHRoZSBkb2NrZWQgc3RhdGUuIFRvIGF2b2lkIHRoaXMsIHdlIG5lZWQgdG9cbiAgICogaG9yaXpvbnRhbGx5IG9mZnNldCB0aGUgbGFiZWwgYnkgdGhlIHdpZHRoIG9mIHRoZSBwcmVmaXggY29udGFpbmVyLiBUaGUgTURDIHRleHQtZmllbGQgZG9lc1xuICAgKiBub3QgbmVlZCB0byBkbyB0aGlzIGJlY2F1c2UgdGhleSB1c2UgYSBmaXhlZCB3aWR0aCBmb3IgcHJlZml4ZXMuIEhlbmNlLCB0aGV5IGNhbiBzaW1wbHlcbiAgICogaW5jb3Jwb3JhdGUgdGhlIGhvcml6b250YWwgb2Zmc2V0IGludG8gdGhlaXIgZGVmYXVsdCB0ZXh0LWZpZWxkIHN0eWxlcy5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZU91dGxpbmVMYWJlbE9mZnNldCgpIHtcbiAgICBpZiAoIXRoaXMuX3BsYXRmb3JtLmlzQnJvd3NlciB8fCAhdGhpcy5faGFzT3V0bGluZSgpIHx8ICF0aGlzLl9mbG9hdGluZ0xhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZsb2F0aW5nTGFiZWwgPSB0aGlzLl9mbG9hdGluZ0xhYmVsLmVsZW1lbnQ7XG4gICAgLy8gSWYgbm8gcHJlZml4IGlzIGRpc3BsYXllZCwgcmVzZXQgdGhlIG91dGxpbmUgbGFiZWwgb2Zmc2V0IGZyb20gcG90ZW50aWFsXG4gICAgLy8gcHJldmlvdXMgbGFiZWwgb2Zmc2V0IHVwZGF0ZXMuXG4gICAgaWYgKCF0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgIGZsb2F0aW5nTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHRoZSBmb3JtLWZpZWxkIGlzIG5vdCBhdHRhY2hlZCB0byB0aGUgRE9NIHlldCAoZS5nLiBpbiBhIHRhYiksIHdlIGRlZmVyXG4gICAgLy8gdGhlIGxhYmVsIG9mZnNldCB1cGRhdGUgdW50aWwgdGhlIHpvbmUgc3RhYmlsaXplcy5cbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWRUb0RvbSgpKSB7XG4gICAgICB0aGlzLl9uZWVkc091dGxpbmVMYWJlbE9mZnNldFVwZGF0ZU9uU3RhYmxlID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4Q29udGFpbmVyID0gdGhpcy5fcHJlZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgLy8gSWYgdGhlIGRpcmVjdGlvbmFsaXR5IGlzIFJUTCwgdGhlIHgtYXhpcyB0cmFuc2Zvcm0gbmVlZHMgdG8gYmUgaW52ZXJ0ZWQuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIGB0cmFuc2Zvcm1YYCBkb2VzIG5vdCBjaGFuZ2UgYmFzZWQgb24gdGhlIHBhZ2UgZGlyZWN0aW9uYWxpdHkuXG4gICAgY29uc3QgbGFiZWxIb3Jpem9udGFsT2Zmc2V0ID1cbiAgICAgICh0aGlzLl9kaXIudmFsdWUgPT09ICdydGwnID8gLTEgOiAxKSAqIHByZWZpeENvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgdHJhbnNmb3JtIHRoZSBmbG9hdGluZyBsYWJlbCB0byBhY2NvdW50IGZvciB0aGUgcHJlZml4IGNvbnRhaW5lci4gTm90ZVxuICAgIC8vIHRoYXQgd2UgZG8gbm90IHdhbnQgdG8gb3ZlcndyaXRlIHRoZSBkZWZhdWx0IHRyYW5zZm9ybSBmb3IgZG9ja2VkIGZsb2F0aW5nIGxhYmVscy5cbiAgICBmbG9hdGluZ0xhYmVsLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgIGAke0ZMT0FUSU5HX0xBQkVMX0RFRkFVTFRfRE9DS0VEX1RSQU5TRk9STX0gdHJhbnNsYXRlWCgke2xhYmVsSG9yaXpvbnRhbE9mZnNldH1weClgO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIHRoZSBmb3JtIGZpZWxkIGlzIGF0dGFjaGVkIHRvIHRoZSBET00uICovXG4gIHByaXZhdGUgX2lzQXR0YWNoZWRUb0RvbSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoZWxlbWVudC5nZXRSb290Tm9kZSkge1xuICAgICAgY29uc3Qgcm9vdE5vZGUgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyBpbnNpZGUgdGhlIERPTSB0aGUgcm9vdCBub2RlIHdpbGwgYmUgZWl0aGVyIHRoZSBkb2N1bWVudFxuICAgICAgLy8gb3IgdGhlIGNsb3Nlc3Qgc2hhZG93IHJvb3QsIG90aGVyd2lzZSBpdCdsbCBiZSB0aGUgZWxlbWVudCBpdHNlbGYuXG4gICAgICByZXR1cm4gcm9vdE5vZGUgJiYgcm9vdE5vZGUgIT09IGVsZW1lbnQ7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBmYWxsIGJhY2sgdG8gY2hlY2tpbmcgaWYgaXQncyBpbiB0aGUgZG9jdW1lbnQuIFRoaXMgZG9lc24ndCBhY2NvdW50IGZvclxuICAgIC8vIHNoYWRvdyBET00sIGhvd2V2ZXIgYnJvd3NlciB0aGF0IHN1cHBvcnQgc2hhZG93IERPTSBzaG91bGQgc3VwcG9ydCBgZ2V0Um9vdE5vZGVgIGFzIHdlbGwuXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCEuY29udGFpbnMoZWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==