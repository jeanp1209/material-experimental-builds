/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-chips/chip-listbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { END, HOME } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Input, Optional, Output, QueryList, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MDCChipSetFoundation } from '@material/chips';
import { merge } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { MatChipOption } from './chip-option';
import { MatChipSet } from './chip-set';
/**
 * Change event object that is emitted when the chip listbox value has changed.
 */
export class MatChipListboxChange {
    /**
     * @param {?} source
     * @param {?} value
     */
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
if (false) {
    /**
     * Chip listbox that emitted the event.
     * @type {?}
     */
    MatChipListboxChange.prototype.source;
    /**
     * Value of the chip listbox when the event was emitted.
     * @type {?}
     */
    MatChipListboxChange.prototype.value;
}
/**
 * Provider Expression that allows mat-chip-listbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * \@docs-private
 * @type {?}
 */
export const MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MatChipListbox)),
    multi: true
};
/**
 * An extension of the MatChipSet component that supports chip selection.
 * Used with MatChipOption chips.
 */
let MatChipListbox = /** @class */ (() => {
    /**
     * An extension of the MatChipSet component that supports chip selection.
     * Used with MatChipOption chips.
     */
    class MatChipListbox extends MatChipSet {
        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         * @param {?} _dir
         */
        constructor(_elementRef, _changeDetectorRef, _dir) {
            super(_elementRef, _changeDetectorRef, _dir);
            this._elementRef = _elementRef;
            /**
             * Function when touched. Set as part of ControlValueAccessor implementation.
             * \@docs-private
             */
            this._onTouched = (/**
             * @return {?}
             */
            () => { });
            /**
             * Function when changed. Set as part of ControlValueAccessor implementation.
             * \@docs-private
             */
            this._onChange = (/**
             * @return {?}
             */
            () => { });
            this._multiple = false;
            /**
             * Orientation of the chip list.
             */
            this.ariaOrientation = 'horizontal';
            this._selectable = true;
            this._compareWith = (/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            (o1, o2) => o1 === o2);
            this._required = false;
            /**
             * Event emitted when the selected chip listbox value has been changed by the user.
             */
            this.change = new EventEmitter();
            this._chipSetAdapter.selectChipAtIndex = (/**
             * @param {?} index
             * @param {?} selected
             * @return {?}
             */
            (index, selected) => {
                this._setSelected(index, selected);
            });
            // Reinitialize the foundation with our overridden adapter
            this._chipSetFoundation = new MDCChipSetFoundation(this._chipSetAdapter);
            this._updateMdcSelectionClasses();
        }
        /**
         * The ARIA role applied to the chip listbox.
         * @return {?}
         */
        get role() { return this.empty ? null : 'listbox'; }
        /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */
        get multiple() { return this._multiple; }
        /**
         * @param {?} value
         * @return {?}
         */
        set multiple(value) {
            this._multiple = coerceBooleanProperty(value);
            this._updateMdcSelectionClasses();
            this._syncListboxProperties();
        }
        /**
         * The array of selected chips inside the chip listbox.
         * @return {?}
         */
        get selected() {
            /** @type {?} */
            const selectedChips = this._chips.toArray().filter((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip.selected));
            return this.multiple ? selectedChips : selectedChips[0];
        }
        /**
         * Whether or not this chip listbox is selectable.
         *
         * When a chip listbox is not selectable, the selected states for all
         * the chips inside the chip listbox are always ignored.
         * @return {?}
         */
        get selectable() { return this._selectable; }
        /**
         * @param {?} value
         * @return {?}
         */
        set selectable(value) {
            this._selectable = coerceBooleanProperty(value);
            this._updateMdcSelectionClasses();
            this._syncListboxProperties();
        }
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        get compareWith() { return this._compareWith; }
        /**
         * @param {?} fn
         * @return {?}
         */
        set compareWith(fn) {
            this._compareWith = fn;
            this._initializeSelection();
        }
        /**
         * Whether this chip listbox is required.
         * @return {?}
         */
        get required() { return this._required; }
        /**
         * @param {?} value
         * @return {?}
         */
        set required(value) {
            this._required = coerceBooleanProperty(value);
        }
        /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */
        get chipSelectionChanges() {
            return merge(...this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip.selectionChange)));
        }
        /**
         * Combined stream of all of the child chips' focus events.
         * @return {?}
         */
        get chipFocusChanges() {
            return merge(...this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip._onFocus)));
        }
        /**
         * Combined stream of all of the child chips' blur events.
         * @return {?}
         */
        get chipBlurChanges() {
            return merge(...this._chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            chip => chip._onBlur)));
        }
        /**
         * The value of the listbox, which is the combined value of the selected chips.
         * @return {?}
         */
        get value() { return this._value; }
        /**
         * @param {?} value
         * @return {?}
         */
        set value(value) {
            this.writeValue(value);
            this._value = value;
        }
        /**
         * @return {?}
         */
        ngAfterContentInit() {
            super.ngAfterContentInit();
            this._initKeyManager();
            this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => {
                // Update listbox selectable/multiple properties on chips
                this._syncListboxProperties();
                // Reset chips selected/deselected status
                this._initializeSelection();
                // Check to see if we have a destroyed chip and need to refocus
                this._updateFocusForDestroyedChips();
            }));
        }
        /**
         * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
         * are no selected chips.
         * @return {?}
         */
        focus() {
            if (this.disabled) {
                return;
            }
            /** @type {?} */
            const firstSelectedChip = this._getFirstSelectedChip();
            if (firstSelectedChip) {
                /** @type {?} */
                const firstSelectedChipIndex = this._chips.toArray().indexOf(firstSelectedChip);
                this._keyManager.setActiveItem(firstSelectedChipIndex);
            }
            else if (this._chips.length > 0) {
                this._keyManager.setFirstItemActive();
            }
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            if (this._chips) {
                this._setSelectionByValue(value, false);
            }
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */
        registerOnChange(fn) {
            this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */
        registerOnTouched(fn) {
            this._onTouched = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} isDisabled
         * @return {?}
         */
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
        }
        /**
         * Selects all chips with value.
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?}
         */
        _setSelectionByValue(value, isUserInput = true) {
            this._clearSelection();
            if (Array.isArray(value)) {
                value.forEach((/**
                 * @param {?} currentValue
                 * @return {?}
                 */
                currentValue => this._selectValue(currentValue, isUserInput)));
            }
            else {
                /** @type {?} */
                const correspondingChip = this._selectValue(value, isUserInput);
                // Shift focus to the active item. Note that we shouldn't do this in multiple
                // mode, because we don't know what chip the user interacted with last.
                if (correspondingChip) {
                    if (isUserInput) {
                        this._keyManager.setActiveItem(correspondingChip);
                    }
                }
            }
        }
        /**
         * Selects or deselects a chip by id.
         * @param {?} index
         * @param {?} selected
         * @return {?}
         */
        _setSelected(index, selected) {
            /** @type {?} */
            const chip = this._chips.toArray()[index];
            if (chip && chip.selected != selected) {
                chip.toggleSelected(true);
            }
        }
        /**
         * When blurred, marks the field as touched when focus moved outside the chip listbox.
         * @return {?}
         */
        _blur() {
            if (this.disabled) {
                return;
            }
            if (!this.focused) {
                this._keyManager.setActiveItem(-1);
            }
            // Wait to see if focus moves to an indivdual chip.
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (!this.focused) {
                    this._propagateChanges();
                    this._markAsTouched();
                }
            }));
        }
        /**
         * Removes the `tabindex` from the chip listbox and resets it back afterwards, allowing the
         * user to tab out of it. This prevents the listbox from capturing focus and redirecting
         * it back to the first chip, creating a focus trap, if it user tries to tab away.
         * @return {?}
         */
        _allowFocusEscape() {
            /** @type {?} */
            const previousTabIndex = this.tabIndex;
            if (this.tabIndex !== -1) {
                this.tabIndex = -1;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.tabIndex = previousTabIndex;
                    this._changeDetectorRef.markForCheck();
                }));
            }
        }
        /**
         * Handles custom keyboard shortcuts, and passes other keyboard events to the keyboard manager.
         * @param {?} event
         * @return {?}
         */
        _keydown(event) {
            if (this._originatesFromChip(event)) {
                if (event.keyCode === HOME) {
                    this._keyManager.setFirstItemActive();
                    event.preventDefault();
                }
                else if (event.keyCode === END) {
                    this._keyManager.setLastItemActive();
                    event.preventDefault();
                }
                else {
                    this._keyManager.onKeydown(event);
                }
            }
        }
        /**
         * Marks the field as touched
         * @private
         * @return {?}
         */
        _markAsTouched() {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */
        _propagateChanges(fallbackValue) {
            /** @type {?} */
            let valueToEmit = null;
            if (Array.isArray(this.selected)) {
                valueToEmit = this.selected.map((/**
                 * @param {?} chip
                 * @return {?}
                 */
                chip => chip.value));
            }
            else {
                valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }
            this._value = valueToEmit;
            this.change.emit(new MatChipListboxChange(this, valueToEmit));
            this._onChange(valueToEmit);
            this._changeDetectorRef.markForCheck();
        }
        /**
         * Initializes the chip listbox selection state to reflect any chips that were preselected.
         * @private
         * @return {?}
         */
        _initializeSelection() {
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Defer setting the value in order to avoid the "Expression
                // has changed after it was checked" errors from Angular.
                this._chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                chip => {
                    if (chip.selected) {
                        this._chipSetFoundation.select(chip.id);
                    }
                }));
            }));
        }
        /**
         * Deselects every chip in the listbox.
         * @private
         * @param {?=} skip Chip that should not be deselected.
         * @return {?}
         */
        _clearSelection(skip) {
            this._chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            chip => {
                if (chip !== skip) {
                    chip.deselect();
                }
            }));
        }
        /**
         * Finds and selects the chip based on its value.
         * @private
         * @param {?} value
         * @param {?=} isUserInput
         * @return {?} Chip that has the corresponding value.
         */
        _selectValue(value, isUserInput = true) {
            /** @type {?} */
            const correspondingChip = this._chips.find((/**
             * @param {?} chip
             * @return {?}
             */
            chip => {
                return chip.value != null && this._compareWith(chip.value, value);
            }));
            if (correspondingChip) {
                isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            }
            return correspondingChip;
        }
        /**
         * Syncs the chip-listbox selection state with the individual chips.
         * @private
         * @return {?}
         */
        _syncListboxProperties() {
            if (this._chips) {
                // Defer setting the value in order to avoid the "Expression
                // has changed after it was checked" errors from Angular.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this._chips.forEach((/**
                     * @param {?} chip
                     * @return {?}
                     */
                    chip => {
                        chip._chipListMultiple = this.multiple;
                        chip.chipListSelectable = this._selectable;
                        chip._changeDetectorRef.markForCheck();
                    }));
                }));
            }
        }
        /**
         * Sets the mdc classes for single vs multi selection.
         * @private
         * @return {?}
         */
        _updateMdcSelectionClasses() {
            this._setMdcClass('mdc-chip-set--filter', this.selectable && this.multiple);
            this._setMdcClass('mdc-chip-set--choice', this.selectable && !this.multiple);
        }
        /**
         * Initializes the key manager to manage focus.
         * @private
         * @return {?}
         */
        _initKeyManager() {
            this._keyManager = new FocusKeyManager(this._chips)
                .withWrap()
                .withVerticalOrientation()
                .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
            if (this._dir) {
                this._dir.change
                    .pipe(takeUntil(this._destroyed))
                    .subscribe((/**
                 * @param {?} dir
                 * @return {?}
                 */
                dir => this._keyManager.withHorizontalOrientation(dir)));
            }
            this._keyManager.tabOut.pipe(takeUntil(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => {
                this._allowFocusEscape();
            }));
        }
        /**
         * Returns the first selected chip in this listbox, or undefined if no chips are selected.
         * @private
         * @return {?}
         */
        _getFirstSelectedChip() {
            if (Array.isArray(this.selected)) {
                return this.selected.length ? this.selected[0] : undefined;
            }
            else {
                return this.selected;
            }
        }
        /**
         * Unsubscribes from all chip events.
         * @protected
         * @return {?}
         */
        _dropSubscriptions() {
            super._dropSubscriptions();
            if (this._chipSelectionSubscription) {
                this._chipSelectionSubscription.unsubscribe();
                this._chipSelectionSubscription = null;
            }
            if (this._chipBlurSubscription) {
                this._chipBlurSubscription.unsubscribe();
                this._chipBlurSubscription = null;
            }
            if (this._chipFocusSubscription) {
                this._chipFocusSubscription.unsubscribe();
                this._chipFocusSubscription = null;
            }
        }
        /**
         * Subscribes to events on the child chips.
         * @protected
         * @return {?}
         */
        _subscribeToChipEvents() {
            super._subscribeToChipEvents();
            this._listenToChipsSelection();
            this._listenToChipsFocus();
            this._listenToChipsBlur();
        }
        /**
         * Subscribes to chip focus events.
         * @private
         * @return {?}
         */
        _listenToChipsFocus() {
            this._chipFocusSubscription = this.chipFocusChanges.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                /** @type {?} */
                let chipIndex = this._chips.toArray().indexOf((/** @type {?} */ (event.chip)));
                if (this._isValidIndex(chipIndex)) {
                    this._keyManager.updateActiveItem(chipIndex);
                }
            }));
        }
        /**
         * Subscribes to chip blur events.
         * @private
         * @return {?}
         */
        _listenToChipsBlur() {
            this._chipBlurSubscription = this.chipBlurChanges.subscribe((/**
             * @return {?}
             */
            () => {
                this._blur();
            }));
        }
        /**
         * Subscribes to selection changes in the option chips.
         * @private
         * @return {?}
         */
        _listenToChipsSelection() {
            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((/**
             * @param {?} chipSelectionChange
             * @return {?}
             */
            (chipSelectionChange) => {
                this._chipSetFoundation.handleChipSelection({
                    chipId: chipSelectionChange.source.id,
                    selected: chipSelectionChange.selected,
                    shouldIgnore: false
                });
                if (chipSelectionChange.isUserInput) {
                    this._propagateChanges();
                }
            }));
        }
        /**
         * If the amount of chips changed, we need to update the
         * key manager state and focus the next closest chip.
         * @private
         * @return {?}
         */
        _updateFocusForDestroyedChips() {
            // Move focus to the closest chip. If no other chips remain, focus the chip-listbox itself.
            if (this._lastDestroyedChipIndex != null) {
                if (this._chips.length) {
                    /** @type {?} */
                    const newChipIndex = Math.min(this._lastDestroyedChipIndex, this._chips.length - 1);
                    this._keyManager.setActiveItem(newChipIndex);
                }
                else {
                    this.focus();
                }
            }
            this._lastDestroyedChipIndex = null;
        }
    }
    MatChipListbox.decorators = [
        { type: Component, args: [{
                    selector: 'mat-chip-listbox',
                    template: '<ng-content></ng-content>',
                    inputs: ['tabIndex'],
                    host: {
                        'class': 'mat-mdc-chip-set mat-mdc-chip-listbox mdc-chip-set',
                        '[attr.role]': 'role',
                        '[tabIndex]': 'empty ? -1 : tabIndex',
                        // TODO: replace this binding with use of AriaDescriber
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-required]': 'role ? required : null',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.aria-orientation]': 'ariaOrientation',
                        '[class.mat-mdc-chip-list-disabled]': 'disabled',
                        '[class.mat-mdc-chip-list-required]': 'required',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                        '(keydown)': '_keydown($event)',
                        '[id]': '_uid',
                    },
                    providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip-trailing-action__icon{height:18px;width:18px;font-size:18px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip-trailing-action{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-chip-trailing-action,.mdc-chip-trailing-action[dir=rtl]{margin-left:-4px;margin-right:4px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-chip__icon--trailing,.mdc-chip__icon--trailing[dir=rtl]{margin-left:-4px;margin-right:4px}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-chip{border-radius:16px;height:32px;position:relative;display:inline-flex;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px}[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl]{margin-left:4px;margin-right:-4px}.mdc-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-chip--exit{opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);stroke-width:2px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-chip__primary-action:focus{outline:none}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(0.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-chip{cursor:default}.mat-mdc-chip._mat-animation-noopable{transition-duration:1ms;animation:none}.mat-mdc-chip._mat-animation-noopable .mdc-chip__checkmark-svg{transition:none}.cdk-high-contrast-active .mat-mdc-chip{outline:solid 1px}.cdk-high-contrast-active .mat-mdc-chip:focus{outline:dotted 2px}.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mdc-chip__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-chip__ripple::after,.mdc-chip__ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";pointer-events:none;opacity:0;border-radius:inherit}._mat-animation-noopable .mdc-chip__ripple::after,._mat-animation-noopable .mdc-chip__ripple::before{transition:none}.mat-mdc-chip-disabled.mat-mdc-chip{opacity:.4}.mat-mdc-chip-disabled.mat-mdc-chip .mat-mdc-chip-trailing-icon,.mat-mdc-chip-disabled.mat-mdc-chip .mat-chip-row-focusable-text-content{pointer-events:none}.mat-mdc-chip-disabled.mat-mdc-chip .mdc-chip__ripple::after,.mat-mdc-chip-disabled.mat-mdc-chip .mdc-chip__ripple::before{display:none}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}input.mat-mdc-chip-input{flex:1 0 150px}._mat-animation-noopable .mdc-chip__checkmark-path{transition:none}.cdk-high-contrast-black-on-white .mdc-chip__checkmark-path{stroke:#000 !important}.mat-chip-row-focusable-text-content{position:relative}\n"]
                }] }
    ];
    /** @nocollapse */
    MatChipListbox.ctorParameters = () => [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Directionality, decorators: [{ type: Optional }] }
    ];
    MatChipListbox.propDecorators = {
        multiple: [{ type: Input }],
        ariaOrientation: [{ type: Input, args: ['aria-orientation',] }],
        selectable: [{ type: Input }],
        compareWith: [{ type: Input }],
        required: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        _chips: [{ type: ContentChildren, args: [MatChipOption, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return MatChipListbox;
})();
export { MatChipListbox };
if (false) {
    /** @type {?} */
    MatChipListbox.ngAcceptInputType_multiple;
    /** @type {?} */
    MatChipListbox.ngAcceptInputType_selectable;
    /** @type {?} */
    MatChipListbox.ngAcceptInputType_required;
    /**
     * Subscription to selection changes in the chips.
     * @type {?}
     * @private
     */
    MatChipListbox.prototype._chipSelectionSubscription;
    /**
     * Subscription to blur changes in the chips.
     * @type {?}
     * @private
     */
    MatChipListbox.prototype._chipBlurSubscription;
    /**
     * Subscription to focus changes in the chips.
     * @type {?}
     * @private
     */
    MatChipListbox.prototype._chipFocusSubscription;
    /**
     * The FocusKeyManager which handles focus.
     * @type {?}
     */
    MatChipListbox.prototype._keyManager;
    /**
     * Function when touched. Set as part of ControlValueAccessor implementation.
     * \@docs-private
     * @type {?}
     */
    MatChipListbox.prototype._onTouched;
    /**
     * Function when changed. Set as part of ControlValueAccessor implementation.
     * \@docs-private
     * @type {?}
     */
    MatChipListbox.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    MatChipListbox.prototype._multiple;
    /**
     * Orientation of the chip list.
     * @type {?}
     */
    MatChipListbox.prototype.ariaOrientation;
    /**
     * @type {?}
     * @protected
     */
    MatChipListbox.prototype._selectable;
    /**
     * @type {?}
     * @private
     */
    MatChipListbox.prototype._compareWith;
    /**
     * @type {?}
     * @protected
     */
    MatChipListbox.prototype._required;
    /**
     * @type {?}
     * @protected
     */
    MatChipListbox.prototype._value;
    /**
     * Event emitted when the selected chip listbox value has been changed by the user.
     * @type {?}
     */
    MatChipListbox.prototype.change;
    /** @type {?} */
    MatChipListbox.prototype._chips;
    /**
     * @type {?}
     * @protected
     */
    MatChipListbox.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC1saXN0Ym94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtY2hpcHMvY2hpcC1saXN0Ym94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFlLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUUsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxLQUFLLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFDLGFBQWEsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUl0QyxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixZQUVTLE1BQXNCLEVBRXRCLEtBQVU7UUFGVixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUV0QixVQUFLLEdBQUwsS0FBSyxDQUFLO0lBQUks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QkFjTCxLQUFLOzJCQVVMLEtBQUs7d0JBdUJMLEtBQUs7eUJBU0wsTUFBTTt5QkFHTixlQUFlLFNBQUMsYUFBYSxFQUFFOzs7d0JBRzlCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQjs7SUF1V0gscUJBQUM7S0FBQTtTQTVkWSxjQUFjOzs7SUF5ZHpCLDBDQUFnRDs7SUFDaEQsNENBQWtEOztJQUNsRCwwQ0FBZ0Q7Ozs7OztJQXhkaEQsb0RBQXdEOzs7Ozs7SUFHeEQsK0NBQW1EOzs7Ozs7SUFHbkQsZ0RBQW9EOzs7OztJQUdwRCxxQ0FBc0M7Ozs7OztJQU10QyxvQ0FBc0I7Ozs7OztJQU10QixtQ0FBMkM7Ozs7O0lBYTNDLG1DQUFtQzs7Ozs7SUFTbkMseUNBQXFGOzs7OztJQWVyRixxQ0FBc0M7Ozs7O0lBYXRDLHNDQUF1RDs7Ozs7SUFTdkQsbUNBQXFDOzs7OztJQXdCckMsZ0NBQXNCOzs7OztJQUd0QixnQ0FDNkM7O0lBRTdDLGdDQUtpQzs7Ozs7SUFFckIscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Rm9jdXNLZXlNYW5hZ2VyfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge0Jvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtFTkQsIEhPTUV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TURDQ2hpcFNldEZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQge21lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzdGFydFdpdGgsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNYXRDaGlwLCBNYXRDaGlwRXZlbnR9IGZyb20gJy4vY2hpcCc7XG5pbXBvcnQge01hdENoaXBPcHRpb24sIE1hdENoaXBTZWxlY3Rpb25DaGFuZ2V9IGZyb20gJy4vY2hpcC1vcHRpb24nO1xuaW1wb3J0IHtNYXRDaGlwU2V0fSBmcm9tICcuL2NoaXAtc2V0JztcblxuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiB0aGUgY2hpcCBsaXN0Ym94IHZhbHVlIGhhcyBjaGFuZ2VkLiAqL1xuZXhwb3J0IGNsYXNzIE1hdENoaXBMaXN0Ym94Q2hhbmdlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIENoaXAgbGlzdGJveCB0aGF0IGVtaXR0ZWQgdGhlIGV2ZW50LiAqL1xuICAgIHB1YmxpYyBzb3VyY2U6IE1hdENoaXBMaXN0Ym94LFxuICAgIC8qKiBWYWx1ZSBvZiB0aGUgY2hpcCBsaXN0Ym94IHdoZW4gdGhlIGV2ZW50IHdhcyBlbWl0dGVkLiAqL1xuICAgIHB1YmxpYyB2YWx1ZTogYW55KSB7IH1cbn1cblxuLyoqXG4gKiBQcm92aWRlciBFeHByZXNzaW9uIHRoYXQgYWxsb3dzIG1hdC1jaGlwLWxpc3Rib3ggdG8gcmVnaXN0ZXIgYXMgYSBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAqIFRoaXMgYWxsb3dzIGl0IHRvIHN1cHBvcnQgWyhuZ01vZGVsKV0uXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBNQVRfQ0hJUF9MSVNUQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdENoaXBMaXN0Ym94KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQW4gZXh0ZW5zaW9uIG9mIHRoZSBNYXRDaGlwU2V0IGNvbXBvbmVudCB0aGF0IHN1cHBvcnRzIGNoaXAgc2VsZWN0aW9uLlxuICogVXNlZCB3aXRoIE1hdENoaXBPcHRpb24gY2hpcHMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1jaGlwLWxpc3Rib3gnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnY2hpcHMuY3NzJ10sXG4gIGlucHV0czogWyd0YWJJbmRleCddLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ21hdC1tZGMtY2hpcC1zZXQgbWF0LW1kYy1jaGlwLWxpc3Rib3ggbWRjLWNoaXAtc2V0JyxcbiAgICAnW2F0dHIucm9sZV0nOiAncm9sZScsXG4gICAgJ1t0YWJJbmRleF0nOiAnZW1wdHkgPyAtMSA6IHRhYkluZGV4JyxcbiAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgYmluZGluZyB3aXRoIHVzZSBvZiBBcmlhRGVzY3JpYmVyXG4gICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ19hcmlhRGVzY3JpYmVkYnkgfHwgbnVsbCcsXG4gICAgJ1thdHRyLmFyaWEtcmVxdWlyZWRdJzogJ3JvbGUgPyByZXF1aXJlZCA6IG51bGwnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZC50b1N0cmluZygpJyxcbiAgICAnW2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGVdJzogJ211bHRpcGxlJyxcbiAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiAnYXJpYU9yaWVudGF0aW9uJyxcbiAgICAnW2NsYXNzLm1hdC1tZGMtY2hpcC1saXN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5tYXQtbWRjLWNoaXAtbGlzdC1yZXF1aXJlZF0nOiAncmVxdWlyZWQnLFxuICAgICcoZm9jdXMpJzogJ2ZvY3VzKCknLFxuICAgICcoYmx1ciknOiAnX2JsdXIoKScsXG4gICAgJyhrZXlkb3duKSc6ICdfa2V5ZG93bigkZXZlbnQpJyxcbiAgICAnW2lkXSc6ICdfdWlkJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbTUFUX0NISVBfTElTVEJPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdENoaXBMaXN0Ym94IGV4dGVuZHMgTWF0Q2hpcFNldCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHNlbGVjdGlvbiBjaGFuZ2VzIGluIHRoZSBjaGlwcy4gKi9cbiAgcHJpdmF0ZSBfY2hpcFNlbGVjdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIGJsdXIgY2hhbmdlcyBpbiB0aGUgY2hpcHMuICovXG4gIHByaXZhdGUgX2NoaXBCbHVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gZm9jdXMgY2hhbmdlcyBpbiB0aGUgY2hpcHMuICovXG4gIHByaXZhdGUgX2NoaXBGb2N1c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICAvKiogVGhlIEZvY3VzS2V5TWFuYWdlciB3aGljaCBoYW5kbGVzIGZvY3VzLiAqL1xuICBfa2V5TWFuYWdlcjogRm9jdXNLZXlNYW5hZ2VyPE1hdENoaXA+O1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB3aGVuIHRvdWNoZWQuIFNldCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHdoZW4gY2hhbmdlZC4gU2V0IGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb24uXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKiogVGhlIEFSSUEgcm9sZSBhcHBsaWVkIHRvIHRoZSBjaGlwIGxpc3Rib3guICovXG4gIGdldCByb2xlKCk6IHN0cmluZyB8IG51bGwgeyByZXR1cm4gdGhpcy5lbXB0eSA/IG51bGwgOiAnbGlzdGJveCc7IH1cblxuICAvKiogV2hldGhlciB0aGUgdXNlciBzaG91bGQgYmUgYWxsb3dlZCB0byBzZWxlY3QgbXVsdGlwbGUgY2hpcHMuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX211bHRpcGxlOyB9XG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl91cGRhdGVNZGNTZWxlY3Rpb25DbGFzc2VzKCk7XG4gICAgdGhpcy5fc3luY0xpc3Rib3hQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogVGhlIGFycmF5IG9mIHNlbGVjdGVkIGNoaXBzIGluc2lkZSB0aGUgY2hpcCBsaXN0Ym94LiAqL1xuICBnZXQgc2VsZWN0ZWQoKTogTWF0Q2hpcE9wdGlvbltdIHwgTWF0Q2hpcE9wdGlvbiAge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2hpcHMgPSB0aGlzLl9jaGlwcy50b0FycmF5KCkuZmlsdGVyKGNoaXAgPT4gY2hpcC5zZWxlY3RlZCk7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyBzZWxlY3RlZENoaXBzIDogc2VsZWN0ZWRDaGlwc1swXTtcbiAgfVxuXG4gIC8qKiBPcmllbnRhdGlvbiBvZiB0aGUgY2hpcCBsaXN0LiAqL1xuICBASW5wdXQoJ2FyaWEtb3JpZW50YXRpb24nKSBhcmlhT3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgY2hpcCBsaXN0Ym94IGlzIHNlbGVjdGFibGUuXG4gICAqXG4gICAqIFdoZW4gYSBjaGlwIGxpc3Rib3ggaXMgbm90IHNlbGVjdGFibGUsIHRoZSBzZWxlY3RlZCBzdGF0ZXMgZm9yIGFsbFxuICAgKiB0aGUgY2hpcHMgaW5zaWRlIHRoZSBjaGlwIGxpc3Rib3ggYXJlIGFsd2F5cyBpZ25vcmVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGFibGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zZWxlY3RhYmxlOyB9XG4gIHNldCBzZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fdXBkYXRlTWRjU2VsZWN0aW9uQ2xhc3NlcygpO1xuICAgIHRoaXMuX3N5bmNMaXN0Ym94UHJvcGVydGllcygpO1xuICB9XG4gIHByb3RlY3RlZCBfc2VsZWN0YWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gY29tcGFyZSB0aGUgb3B0aW9uIHZhbHVlcyB3aXRoIHRoZSBzZWxlY3RlZCB2YWx1ZXMuIFRoZSBmaXJzdCBhcmd1bWVudFxuICAgKiBpcyBhIHZhbHVlIGZyb20gYW4gb3B0aW9uLiBUaGUgc2Vjb25kIGlzIGEgdmFsdWUgZnJvbSB0aGUgc2VsZWN0aW9uLiBBIGJvb2xlYW5cbiAgICogc2hvdWxkIGJlIHJldHVybmVkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbXBhcmVXaXRoKCk6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoOyB9XG4gIHNldCBjb21wYXJlV2l0aChmbjogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICAgIHRoaXMuX2luaXRpYWxpemVTZWxlY3Rpb24oKTtcbiAgfVxuICBwcml2YXRlIF9jb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cblxuICAvKiogV2hldGhlciB0aGlzIGNoaXAgbGlzdGJveCBpcyByZXF1aXJlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogQ29tYmluZWQgc3RyZWFtIG9mIGFsbCBvZiB0aGUgY2hpbGQgY2hpcHMnIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnRzLiAqL1xuICBnZXQgY2hpcFNlbGVjdGlvbkNoYW5nZXMoKTogT2JzZXJ2YWJsZTxNYXRDaGlwU2VsZWN0aW9uQ2hhbmdlPiB7XG4gICAgcmV0dXJuIG1lcmdlKC4uLnRoaXMuX2NoaXBzLm1hcChjaGlwID0+IGNoaXAuc2VsZWN0aW9uQ2hhbmdlKSk7XG4gIH1cblxuICAvKiogQ29tYmluZWQgc3RyZWFtIG9mIGFsbCBvZiB0aGUgY2hpbGQgY2hpcHMnIGZvY3VzIGV2ZW50cy4gKi9cbiAgZ2V0IGNoaXBGb2N1c0NoYW5nZXMoKTogT2JzZXJ2YWJsZTxNYXRDaGlwRXZlbnQ+IHtcbiAgICByZXR1cm4gbWVyZ2UoLi4udGhpcy5fY2hpcHMubWFwKGNoaXAgPT4gY2hpcC5fb25Gb2N1cykpO1xuICB9XG5cbiAgLyoqIENvbWJpbmVkIHN0cmVhbSBvZiBhbGwgb2YgdGhlIGNoaWxkIGNoaXBzJyBibHVyIGV2ZW50cy4gKi9cbiAgZ2V0IGNoaXBCbHVyQ2hhbmdlcygpOiBPYnNlcnZhYmxlPE1hdENoaXBFdmVudD4ge1xuICAgIHJldHVybiBtZXJnZSguLi50aGlzLl9jaGlwcy5tYXAoY2hpcCA9PiBjaGlwLl9vbkJsdXIpKTtcbiAgfVxuXG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGxpc3Rib3gsIHdoaWNoIGlzIHRoZSBjb21iaW5lZCB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgY2hpcHMuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHJvdGVjdGVkIF92YWx1ZTogYW55O1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNlbGVjdGVkIGNoaXAgbGlzdGJveCB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkIGJ5IHRoZSB1c2VyLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8TWF0Q2hpcExpc3Rib3hDaGFuZ2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8TWF0Q2hpcExpc3Rib3hDaGFuZ2U+KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihNYXRDaGlwT3B0aW9uLCB7XG4gICAgLy8gV2UgbmVlZCB0byB1c2UgYGRlc2NlbmRhbnRzOiB0cnVlYCwgYmVjYXVzZSBJdnkgd2lsbCBubyBsb25nZXIgbWF0Y2hcbiAgICAvLyBpbmRpcmVjdCBkZXNjZW5kYW50cyBpZiBpdCdzIGxlZnQgYXMgZmFsc2UuXG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSlcbiAgX2NoaXBzOiBRdWVyeUxpc3Q8TWF0Q2hpcE9wdGlvbj47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBfZGlyOiBEaXJlY3Rpb25hbGl0eSkge1xuICAgIHN1cGVyKF9lbGVtZW50UmVmLCBfY2hhbmdlRGV0ZWN0b3JSZWYsIF9kaXIpO1xuICAgIHRoaXMuX2NoaXBTZXRBZGFwdGVyLnNlbGVjdENoaXBBdEluZGV4ID0gKGluZGV4OiBudW1iZXIsIHNlbGVjdGVkOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9zZXRTZWxlY3RlZChpbmRleCwgc2VsZWN0ZWQpO1xuICAgIH07XG4gICAgLy8gUmVpbml0aWFsaXplIHRoZSBmb3VuZGF0aW9uIHdpdGggb3VyIG92ZXJyaWRkZW4gYWRhcHRlclxuICAgIHRoaXMuX2NoaXBTZXRGb3VuZGF0aW9uID0gbmV3IE1EQ0NoaXBTZXRGb3VuZGF0aW9uKHRoaXMuX2NoaXBTZXRBZGFwdGVyKTtcbiAgICB0aGlzLl91cGRhdGVNZGNTZWxlY3Rpb25DbGFzc2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gICAgdGhpcy5faW5pdEtleU1hbmFnZXIoKTtcblxuICAgIHRoaXMuX2NoaXBzLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCksIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gVXBkYXRlIGxpc3Rib3ggc2VsZWN0YWJsZS9tdWx0aXBsZSBwcm9wZXJ0aWVzIG9uIGNoaXBzXG4gICAgICB0aGlzLl9zeW5jTGlzdGJveFByb3BlcnRpZXMoKTtcblxuICAgICAgLy8gUmVzZXQgY2hpcHMgc2VsZWN0ZWQvZGVzZWxlY3RlZCBzdGF0dXNcbiAgICAgIHRoaXMuX2luaXRpYWxpemVTZWxlY3Rpb24oKTtcblxuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSBkZXN0cm95ZWQgY2hpcCBhbmQgbmVlZCB0byByZWZvY3VzXG4gICAgICB0aGlzLl91cGRhdGVGb2N1c0ZvckRlc3Ryb3llZENoaXBzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgZmlyc3Qgc2VsZWN0ZWQgY2hpcCBpbiB0aGlzIGNoaXAgbGlzdGJveCwgb3IgdGhlIGZpcnN0IG5vbi1kaXNhYmxlZCBjaGlwIHdoZW4gdGhlcmVcbiAgICogYXJlIG5vIHNlbGVjdGVkIGNoaXBzLlxuICAgKi9cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFNlbGVjdGVkQ2hpcCA9IHRoaXMuX2dldEZpcnN0U2VsZWN0ZWRDaGlwKCk7XG5cbiAgICBpZiAoZmlyc3RTZWxlY3RlZENoaXApIHtcbiAgICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWRDaGlwSW5kZXggPSB0aGlzLl9jaGlwcy50b0FycmF5KCkuaW5kZXhPZihmaXJzdFNlbGVjdGVkQ2hpcCk7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oZmlyc3RTZWxlY3RlZENoaXBJbmRleCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2hpcHMpIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGlvbkJ5VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgY2hpcHMgd2l0aCB2YWx1ZS4gKi9cbiAgX3NldFNlbGVjdGlvbkJ5VmFsdWUodmFsdWU6IGFueSwgaXNVc2VySW5wdXQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgdGhpcy5fY2xlYXJTZWxlY3Rpb24oKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaChjdXJyZW50VmFsdWUgPT4gdGhpcy5fc2VsZWN0VmFsdWUoY3VycmVudFZhbHVlLCBpc1VzZXJJbnB1dCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb3JyZXNwb25kaW5nQ2hpcCA9IHRoaXMuX3NlbGVjdFZhbHVlKHZhbHVlLCBpc1VzZXJJbnB1dCk7XG5cbiAgICAgIC8vIFNoaWZ0IGZvY3VzIHRvIHRoZSBhY3RpdmUgaXRlbS4gTm90ZSB0aGF0IHdlIHNob3VsZG4ndCBkbyB0aGlzIGluIG11bHRpcGxlXG4gICAgICAvLyBtb2RlLCBiZWNhdXNlIHdlIGRvbid0IGtub3cgd2hhdCBjaGlwIHRoZSB1c2VyIGludGVyYWN0ZWQgd2l0aCBsYXN0LlxuICAgICAgaWYgKGNvcnJlc3BvbmRpbmdDaGlwKSB7XG4gICAgICAgIGlmIChpc1VzZXJJbnB1dCkge1xuICAgICAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShjb3JyZXNwb25kaW5nQ2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogU2VsZWN0cyBvciBkZXNlbGVjdHMgYSBjaGlwIGJ5IGlkLiAqL1xuICBfc2V0U2VsZWN0ZWQoaW5kZXg6IG51bWJlciwgc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjaGlwID0gdGhpcy5fY2hpcHMudG9BcnJheSgpW2luZGV4XTtcbiAgICBpZiAoY2hpcCAmJiBjaGlwLnNlbGVjdGVkICE9IHNlbGVjdGVkKSB7XG4gICAgICBjaGlwLnRvZ2dsZVNlbGVjdGVkKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGVuIGJsdXJyZWQsIG1hcmtzIHRoZSBmaWVsZCBhcyB0b3VjaGVkIHdoZW4gZm9jdXMgbW92ZWQgb3V0c2lkZSB0aGUgY2hpcCBsaXN0Ym94LiAqL1xuICBfYmx1cigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oLTEpO1xuICAgIH1cblxuICAgIC8vIFdhaXQgdG8gc2VlIGlmIGZvY3VzIG1vdmVzIHRvIGFuIGluZGl2ZHVhbCBjaGlwLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLl9tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBmcm9tIHRoZSBjaGlwIGxpc3Rib3ggYW5kIHJlc2V0cyBpdCBiYWNrIGFmdGVyd2FyZHMsIGFsbG93aW5nIHRoZVxuICAgKiB1c2VyIHRvIHRhYiBvdXQgb2YgaXQuIFRoaXMgcHJldmVudHMgdGhlIGxpc3Rib3ggZnJvbSBjYXB0dXJpbmcgZm9jdXMgYW5kIHJlZGlyZWN0aW5nXG4gICAqIGl0IGJhY2sgdG8gdGhlIGZpcnN0IGNoaXAsIGNyZWF0aW5nIGEgZm9jdXMgdHJhcCwgaWYgaXQgdXNlciB0cmllcyB0byB0YWIgYXdheS5cbiAgICovXG4gIF9hbGxvd0ZvY3VzRXNjYXBlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzVGFiSW5kZXggPSB0aGlzLnRhYkluZGV4O1xuXG4gICAgaWYgKHRoaXMudGFiSW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnRhYkluZGV4ID0gLTE7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnRhYkluZGV4ID0gcHJldmlvdXNUYWJJbmRleDtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjdXN0b20ga2V5Ym9hcmQgc2hvcnRjdXRzLCBhbmQgcGFzc2VzIG90aGVyIGtleWJvYXJkIGV2ZW50cyB0byB0aGUga2V5Ym9hcmQgbWFuYWdlci5cbiAgICovXG4gIF9rZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX29yaWdpbmF0ZXNGcm9tQ2hpcChldmVudCkpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBIT01FKSB7XG4gICAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVORCkge1xuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldExhc3RJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIE1hcmtzIHRoZSBmaWVsZCBhcyB0b3VjaGVkICovXG4gIHByaXZhdGUgX21hcmtBc1RvdWNoZWQoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuIC8qKiBFbWl0cyBjaGFuZ2UgZXZlbnQgdG8gc2V0IHRoZSBtb2RlbCB2YWx1ZS4gKi9cbiAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlcyhmYWxsYmFja1ZhbHVlPzogYW55KTogdm9pZCB7XG4gICAgbGV0IHZhbHVlVG9FbWl0OiBhbnkgPSBudWxsO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZCkpIHtcbiAgICAgIHZhbHVlVG9FbWl0ID0gdGhpcy5zZWxlY3RlZC5tYXAoY2hpcCA9PiBjaGlwLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVUb0VtaXQgPSB0aGlzLnNlbGVjdGVkID8gdGhpcy5zZWxlY3RlZC52YWx1ZSA6IGZhbGxiYWNrVmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWVUb0VtaXQ7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChuZXcgTWF0Q2hpcExpc3Rib3hDaGFuZ2UodGhpcywgdmFsdWVUb0VtaXQpKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZVRvRW1pdCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGNoaXAgbGlzdGJveCBzZWxlY3Rpb24gc3RhdGUgdG8gcmVmbGVjdCBhbnkgY2hpcHMgdGhhdCB3ZXJlIHByZXNlbGVjdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZVNlbGVjdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIERlZmVyIHNldHRpbmcgdGhlIHZhbHVlIGluIG9yZGVyIHRvIGF2b2lkIHRoZSBcIkV4cHJlc3Npb25cbiAgICAgIC8vIGhhcyBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBjaGVja2VkXCIgZXJyb3JzIGZyb20gQW5ndWxhci5cbiAgICAgIHRoaXMuX2NoaXBzLmZvckVhY2goY2hpcCA9PiB7XG4gICAgICAgIGlmIChjaGlwLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fY2hpcFNldEZvdW5kYXRpb24uc2VsZWN0KGNoaXAuaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdHMgZXZlcnkgY2hpcCBpbiB0aGUgbGlzdGJveC5cbiAgICogQHBhcmFtIHNraXAgQ2hpcCB0aGF0IHNob3VsZCBub3QgYmUgZGVzZWxlY3RlZC5cbiAgICovXG4gIHByaXZhdGUgX2NsZWFyU2VsZWN0aW9uKHNraXA/OiBNYXRDaGlwKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpcHMuZm9yRWFjaChjaGlwID0+IHtcbiAgICAgIGlmIChjaGlwICE9PSBza2lwKSB7XG4gICAgICAgIGNoaXAuZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbmQgc2VsZWN0cyB0aGUgY2hpcCBiYXNlZCBvbiBpdHMgdmFsdWUuXG4gICAqIEByZXR1cm5zIENoaXAgdGhhdCBoYXMgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUuXG4gICAqL1xuICBwcml2YXRlIF9zZWxlY3RWYWx1ZSh2YWx1ZTogYW55LCBpc1VzZXJJbnB1dDogYm9vbGVhbiA9IHRydWUpOiBNYXRDaGlwIHwgdW5kZWZpbmVkIHtcblxuICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdDaGlwID0gdGhpcy5fY2hpcHMuZmluZChjaGlwID0+IHtcbiAgICAgIHJldHVybiBjaGlwLnZhbHVlICE9IG51bGwgJiYgdGhpcy5fY29tcGFyZVdpdGgoY2hpcC52YWx1ZSwgIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGlmIChjb3JyZXNwb25kaW5nQ2hpcCkge1xuICAgICAgaXNVc2VySW5wdXQgPyBjb3JyZXNwb25kaW5nQ2hpcC5zZWxlY3RWaWFJbnRlcmFjdGlvbigpIDogY29ycmVzcG9uZGluZ0NoaXAuc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcnJlc3BvbmRpbmdDaGlwO1xuICB9XG5cbiAgLyoqIFN5bmNzIHRoZSBjaGlwLWxpc3Rib3ggc2VsZWN0aW9uIHN0YXRlIHdpdGggdGhlIGluZGl2aWR1YWwgY2hpcHMuICovXG4gIHByaXZhdGUgX3N5bmNMaXN0Ym94UHJvcGVydGllcygpIHtcbiAgICBpZiAodGhpcy5fY2hpcHMpIHtcbiAgICAgIC8vIERlZmVyIHNldHRpbmcgdGhlIHZhbHVlIGluIG9yZGVyIHRvIGF2b2lkIHRoZSBcIkV4cHJlc3Npb25cbiAgICAgIC8vIGhhcyBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBjaGVja2VkXCIgZXJyb3JzIGZyb20gQW5ndWxhci5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGlwcy5mb3JFYWNoKGNoaXAgPT4ge1xuICAgICAgICAgIGNoaXAuX2NoaXBMaXN0TXVsdGlwbGUgPSB0aGlzLm11bHRpcGxlO1xuICAgICAgICAgIGNoaXAuY2hpcExpc3RTZWxlY3RhYmxlID0gdGhpcy5fc2VsZWN0YWJsZTtcbiAgICAgICAgICBjaGlwLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgbWRjIGNsYXNzZXMgZm9yIHNpbmdsZSB2cyBtdWx0aSBzZWxlY3Rpb24uICovXG4gIHByaXZhdGUgX3VwZGF0ZU1kY1NlbGVjdGlvbkNsYXNzZXMoKSB7XG4gICAgdGhpcy5fc2V0TWRjQ2xhc3MoJ21kYy1jaGlwLXNldC0tZmlsdGVyJywgdGhpcy5zZWxlY3RhYmxlICYmIHRoaXMubXVsdGlwbGUpO1xuICAgIHRoaXMuX3NldE1kY0NsYXNzKCdtZGMtY2hpcC1zZXQtLWNob2ljZScsIHRoaXMuc2VsZWN0YWJsZSAmJiAhdGhpcy5tdWx0aXBsZSk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZXMgdGhlIGtleSBtYW5hZ2VyIHRvIG1hbmFnZSBmb2N1cy4gKi9cbiAgcHJpdmF0ZSBfaW5pdEtleU1hbmFnZXIoKSB7XG4gICAgdGhpcy5fa2V5TWFuYWdlciA9IG5ldyBGb2N1c0tleU1hbmFnZXI8TWF0Q2hpcD4odGhpcy5fY2hpcHMpXG4gICAgICAud2l0aFdyYXAoKVxuICAgICAgLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKClcbiAgICAgIC53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6ICdsdHInKTtcblxuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHRoaXMuX2Rpci5jaGFuZ2VcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoZGlyID0+IHRoaXMuX2tleU1hbmFnZXIud2l0aEhvcml6b250YWxPcmllbnRhdGlvbihkaXIpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlNYW5hZ2VyLnRhYk91dC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fYWxsb3dGb2N1c0VzY2FwZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGZpcnN0IHNlbGVjdGVkIGNoaXAgaW4gdGhpcyBsaXN0Ym94LCBvciB1bmRlZmluZWQgaWYgbm8gY2hpcHMgYXJlIHNlbGVjdGVkLiAqL1xuICBwcml2YXRlIF9nZXRGaXJzdFNlbGVjdGVkQ2hpcCgpOiBNYXRDaGlwT3B0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQubGVuZ3RoID8gdGhpcy5zZWxlY3RlZFswXSA6IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIFVuc3Vic2NyaWJlcyBmcm9tIGFsbCBjaGlwIGV2ZW50cy4gKi9cbiAgcHJvdGVjdGVkIF9kcm9wU3Vic2NyaXB0aW9ucygpIHtcbiAgICBzdXBlci5fZHJvcFN1YnNjcmlwdGlvbnMoKTtcbiAgICBpZiAodGhpcy5fY2hpcFNlbGVjdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY2hpcFNlbGVjdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2hpcFNlbGVjdGlvblN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NoaXBCbHVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jaGlwQmx1clN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2hpcEJsdXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jaGlwRm9jdXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2NoaXBGb2N1c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY2hpcEZvY3VzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogU3Vic2NyaWJlcyB0byBldmVudHMgb24gdGhlIGNoaWxkIGNoaXBzLiAqL1xuICBwcm90ZWN0ZWQgX3N1YnNjcmliZVRvQ2hpcEV2ZW50cygpIHtcbiAgICBzdXBlci5fc3Vic2NyaWJlVG9DaGlwRXZlbnRzKCk7XG4gICAgdGhpcy5fbGlzdGVuVG9DaGlwc1NlbGVjdGlvbigpO1xuICAgIHRoaXMuX2xpc3RlblRvQ2hpcHNGb2N1cygpO1xuICAgIHRoaXMuX2xpc3RlblRvQ2hpcHNCbHVyKCk7XG4gIH1cblxuICAvKiogU3Vic2NyaWJlcyB0byBjaGlwIGZvY3VzIGV2ZW50cy4gKi9cbiAgcHJpdmF0ZSBfbGlzdGVuVG9DaGlwc0ZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaXBGb2N1c1N1YnNjcmlwdGlvbiA9IHRoaXMuY2hpcEZvY3VzQ2hhbmdlcy5zdWJzY3JpYmUoKGV2ZW50OiBNYXRDaGlwRXZlbnQpID0+IHtcbiAgICAgIGxldCBjaGlwSW5kZXg6IG51bWJlciA9IHRoaXMuX2NoaXBzLnRvQXJyYXkoKS5pbmRleE9mKGV2ZW50LmNoaXAgYXMgTWF0Q2hpcE9wdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLl9pc1ZhbGlkSW5kZXgoY2hpcEluZGV4KSkge1xuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0oY2hpcEluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTdWJzY3JpYmVzIHRvIGNoaXAgYmx1ciBldmVudHMuICovXG4gIHByaXZhdGUgX2xpc3RlblRvQ2hpcHNCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaXBCbHVyU3Vic2NyaXB0aW9uID0gdGhpcy5jaGlwQmx1ckNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX2JsdXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTdWJzY3JpYmVzIHRvIHNlbGVjdGlvbiBjaGFuZ2VzIGluIHRoZSBvcHRpb24gY2hpcHMuICovXG4gIHByaXZhdGUgX2xpc3RlblRvQ2hpcHNTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fY2hpcFNlbGVjdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpcFNlbGVjdGlvbkNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgKGNoaXBTZWxlY3Rpb25DaGFuZ2U6IE1hdENoaXBTZWxlY3Rpb25DaGFuZ2UpID0+IHtcbiAgICAgICAgdGhpcy5fY2hpcFNldEZvdW5kYXRpb24uaGFuZGxlQ2hpcFNlbGVjdGlvbih7XG4gICAgICAgICAgY2hpcElkOiBjaGlwU2VsZWN0aW9uQ2hhbmdlLnNvdXJjZS5pZCxcbiAgICAgICAgICBzZWxlY3RlZDogY2hpcFNlbGVjdGlvbkNoYW5nZS5zZWxlY3RlZCxcbiAgICAgICAgICBzaG91bGRJZ25vcmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hpcFNlbGVjdGlvbkNoYW5nZS5pc1VzZXJJbnB1dCkge1xuICAgICAgICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoZSBhbW91bnQgb2YgY2hpcHMgY2hhbmdlZCwgd2UgbmVlZCB0byB1cGRhdGUgdGhlXG4gICAqIGtleSBtYW5hZ2VyIHN0YXRlIGFuZCBmb2N1cyB0aGUgbmV4dCBjbG9zZXN0IGNoaXAuXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVGb2N1c0ZvckRlc3Ryb3llZENoaXBzKCkge1xuICAgIC8vIE1vdmUgZm9jdXMgdG8gdGhlIGNsb3Nlc3QgY2hpcC4gSWYgbm8gb3RoZXIgY2hpcHMgcmVtYWluLCBmb2N1cyB0aGUgY2hpcC1saXN0Ym94IGl0c2VsZi5cbiAgICBpZiAodGhpcy5fbGFzdERlc3Ryb3llZENoaXBJbmRleCAhPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5fY2hpcHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG5ld0NoaXBJbmRleCA9IE1hdGgubWluKHRoaXMuX2xhc3REZXN0cm95ZWRDaGlwSW5kZXgsIHRoaXMuX2NoaXBzLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0obmV3Q2hpcEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0RGVzdHJveWVkQ2hpcEluZGV4ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tdWx0aXBsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0YWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVxdWlyZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==