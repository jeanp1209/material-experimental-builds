/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-slider/slider.ts
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
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { normalizePassiveListenerOptions, Platform } from '@angular/cdk/platform';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Inject, Input, NgZone, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { MDCSliderFoundation } from '@material/slider';
import { Subscription } from 'rxjs';
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 * @type {?}
 */
const MIN_AUTO_TICK_SEPARATION = 30;
/**
 * Size of a tick marker for a slider. The size of a tick is based on the Material
 * Design guidelines and the MDC slider implementation.
 * TODO(devversion): ideally MDC would expose the tick marker size as constant
 * @type {?}
 */
const TICK_MARKER_SIZE = 2;
/**
 * Event options used to bind passive listeners.
 * @type {?}
 */
const passiveListenerOptions = normalizePassiveListenerOptions({ passive: true });
/**
 * Event options used to bind active listeners.
 * @type {?}
 */
const activeListenerOptions = normalizePassiveListenerOptions({ passive: false });
/**
 * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 * \@docs-private
 * @type {?}
 */
export const MAT_SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MatSlider)),
    multi: true
};
/**
 * A simple change event emitted by the MatSlider component.
 */
export class MatSliderChange {
}
if (false) {
    /**
     * The MatSlider that changed.
     * @type {?}
     */
    MatSliderChange.prototype.source;
    /**
     * The new value of the source slider.
     * @type {?}
     */
    MatSliderChange.prototype.value;
}
let MatSlider = /** @class */ (() => {
    class MatSlider {
        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         * @param {?} _ngZone
         * @param {?} _platform
         * @param {?} _dir
         * @param {?} tabIndex
         * @param {?=} _animationMode
         */
        constructor(_elementRef, _changeDetectorRef, _ngZone, _platform, _dir, tabIndex, _animationMode) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._ngZone = _ngZone;
            this._platform = _platform;
            this._dir = _dir;
            this._animationMode = _animationMode;
            /**
             * Event emitted when the slider value has changed.
             */
            this.change = new EventEmitter();
            /**
             * Event emitted when the slider thumb moves.
             */
            this.input = new EventEmitter();
            /**
             * Emits when the raw value of the slider changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             * \@docs-private
             */
            this.valueChange = new EventEmitter();
            /**
             * Tabindex for the slider.
             */
            this.tabIndex = 0;
            /**
             * The color palette for this slider.
             */
            this.color = 'accent';
            this._min = 0;
            this._max = 100;
            this._value = null;
            this._step = 1;
            this._tickInterval = 0;
            this._thumbLabel = false;
            this._disabled = false;
            /**
             * Adapter for the MDC slider foundation.
             */
            this._sliderAdapter = {
                hasClass: (/**
                 * @param {?} className
                 * @return {?}
                 */
                (className) => this._elementRef.nativeElement.classList.contains(className)),
                addClass: (/**
                 * @param {?} className
                 * @return {?}
                 */
                (className) => this._elementRef.nativeElement.classList.add(className)),
                removeClass: (/**
                 * @param {?} className
                 * @return {?}
                 */
                (className) => this._elementRef.nativeElement.classList.remove(className)),
                getAttribute: (/**
                 * @param {?} name
                 * @return {?}
                 */
                (name) => this._elementRef.nativeElement.getAttribute(name)),
                setAttribute: (/**
                 * @param {?} name
                 * @param {?} value
                 * @return {?}
                 */
                (name, value) => this._elementRef.nativeElement.setAttribute(name, value)),
                removeAttribute: (/**
                 * @param {?} name
                 * @return {?}
                 */
                (name) => this._elementRef.nativeElement.removeAttribute(name)),
                computeBoundingRect: (/**
                 * @return {?}
                 */
                () => this._elementRef.nativeElement.getBoundingClientRect()),
                getTabIndex: (/**
                 * @return {?}
                 */
                () => this._elementRef.nativeElement.tabIndex),
                registerInteractionHandler: (/**
                 * @param {?} evtType
                 * @param {?} handler
                 * @return {?}
                 */
                (evtType, handler) => 
                // Interaction event handlers (which handle keyboard interaction) cannot be passive
                // as they will prevent the default behavior. Additionally we can't run these event
                // handlers outside of the Angular zone because we rely on the events to cause the
                // component tree to be re-checked.
                // TODO: take in the event listener options from the adapter once MDC supports it.
                this._elementRef.nativeElement.addEventListener(evtType, handler, activeListenerOptions)),
                deregisterInteractionHandler: (/**
                 * @param {?} evtType
                 * @param {?} handler
                 * @return {?}
                 */
                (evtType, handler) => this._elementRef.nativeElement.removeEventListener(evtType, handler)),
                registerThumbContainerInteractionHandler: (/**
                 * @param {?} evtType
                 * @param {?} handler
                 * @return {?}
                 */
                (evtType, handler) => {
                    // The thumb container interaction handlers are currently just used for transition
                    // events which don't need to run in the Angular zone.
                    this._ngZone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this._thumbContainer.nativeElement
                            .addEventListener(evtType, handler, passiveListenerOptions);
                    }));
                }),
                deregisterThumbContainerInteractionHandler: (/**
                 * @param {?} evtType
                 * @param {?} handler
                 * @return {?}
                 */
                (evtType, handler) => {
                    this._thumbContainer.nativeElement
                        .removeEventListener(evtType, handler, passiveListenerOptions);
                }),
                registerBodyInteractionHandler: (/**
                 * @param {?} evtType
                 * @param {?} handler
                 * @return {?}
                 */
                (evtType, handler) => 
                // Body event handlers (which handle thumb sliding) cannot be passive as they will
                // prevent the default behavior. Additionally we can't run these event handlers
                // outside of the Angular zone because we rely on the events to cause the component
                // tree to be re-checked.
                document.body.addEventListener(evtType, handler)),
                deregisterBodyInteractionHandler: (/**
                 * @param {?} evtType
                 * @param {?} handler
                 * @return {?}
                 */
                (evtType, handler) => document.body.removeEventListener(evtType, handler)),
                registerResizeHandler: (/**
                 * @param {?} handler
                 * @return {?}
                 */
                (handler) => {
                    // The resize handler is currently responsible for detecting slider dimension
                    // changes and therefore doesn't cause a value change that needs to be propagated.
                    this._ngZone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => window.addEventListener('resize', handler)));
                }),
                deregisterResizeHandler: (/**
                 * @param {?} handler
                 * @return {?}
                 */
                (handler) => window.removeEventListener('resize', handler)),
                notifyInput: (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const newValue = this._foundation.getValue();
                    // MDC currently fires the input event multiple times.
                    // TODO(devversion): remove this check once the input notifications are fixed.
                    if (newValue !== this.value) {
                        this.value = newValue;
                        this.input.emit(this._createChangeEvent(newValue));
                    }
                }),
                notifyChange: (/**
                 * @return {?}
                 */
                () => {
                    // TODO(devversion): bug in MDC where only the "change" event is emitted if a keypress
                    // updated the value. Material and native range sliders also emit an input event.
                    // Usually we sync the "value" in the "input" event, but as a workaround we now sync
                    // the value in the "change" event.
                    this.value = this._foundation.getValue();
                    this._emitChangeEvent((/** @type {?} */ (this.value)));
                }),
                setThumbContainerStyleProperty: (/**
                 * @param {?} propertyName
                 * @param {?} value
                 * @return {?}
                 */
                (propertyName, value) => {
                    this._thumbContainer.nativeElement.style.setProperty(propertyName, value);
                }),
                setTrackStyleProperty: (/**
                 * @param {?} propertyName
                 * @param {?} value
                 * @return {?}
                 */
                (propertyName, value) => {
                    this._track.nativeElement.style.setProperty(propertyName, value);
                }),
                setMarkerValue: (/**
                 * @return {?}
                 */
                () => {
                    // Mark the component for check as the thumb label needs to be re-rendered.
                    this._changeDetectorRef.markForCheck();
                }),
                setTrackMarkers: (/**
                 * @param {?} step
                 * @param {?} max
                 * @param {?} min
                 * @return {?}
                 */
                (step, max, min) => {
                    this._trackMarker.nativeElement.style.setProperty('background', this._getTrackMarkersBackground(min, max, step));
                }),
                isRTL: (/**
                 * @return {?}
                 */
                () => this._isRtl()),
            };
            /**
             * Instance of the MDC slider foundation for this slider.
             */
            this._foundation = new MDCSliderFoundation(this._sliderAdapter);
            /**
             * Whether the MDC foundation has been initialized.
             */
            this._isInitialized = false;
            /**
             * Function that notifies the control value accessor about a value change.
             */
            this._controlValueAccessorChangeFn = (/**
             * @return {?}
             */
            () => { });
            /**
             * Subscription to the Directionality change EventEmitter.
             */
            this._dirChangeSubscription = Subscription.EMPTY;
            /**
             * Function that marks the slider as touched. Registered via "registerOnTouch".
             */
            this._markAsTouched = (/**
             * @return {?}
             */
            () => { });
            this.tabIndex = parseInt(tabIndex) || 0;
            if (this._dir) {
                this._dirChangeSubscription = this._dir.change.subscribe((/**
                 * @return {?}
                 */
                () => {
                    // In case the directionality changes, we need to refresh the rendered MDC slider.
                    // Note that we need to wait until the page actually updated as otherwise the
                    // client rectangle wouldn't reflect the new directionality.
                    // TODO(devversion): ideally the MDC slider would just compute dimensions similarly
                    // to the standard Material slider on "mouseenter".
                    this._ngZone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => setTimeout((/**
                     * @return {?}
                     */
                    () => this._foundation.layout()))));
                }));
            }
        }
        /**
         * The minimum value that the slider can have.
         * @return {?}
         */
        get min() {
            return this._min;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set min(value) {
            this._min = coerceNumberProperty(value);
        }
        /**
         * The maximum value that the slider can have.
         * @return {?}
         */
        get max() {
            return this._max;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set max(value) {
            this._max = coerceNumberProperty(value);
        }
        /**
         * Value of the slider.
         * @return {?}
         */
        get value() {
            // If the value needs to be read and it is still uninitialized, initialize
            // it to the current minimum value.
            if (this._value === null) {
                this.value = this.min;
            }
            return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set value(value) {
            this._value = coerceNumberProperty(value);
        }
        /**
         * The values at which the thumb will snap.
         * @return {?}
         */
        get step() {
            return this._step;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        set step(v) {
            this._step = coerceNumberProperty(v, this._step);
        }
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */
        get tickInterval() {
            return this._tickInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set tickInterval(value) {
            if (value === 'auto') {
                this._tickInterval = 'auto';
            }
            else if (typeof value === 'number' || typeof value === 'string') {
                this._tickInterval = coerceNumberProperty(value, this._tickInterval);
            }
            else {
                this._tickInterval = 0;
            }
        }
        /**
         * Whether or not to show the thumb label.
         * @return {?}
         */
        get thumbLabel() {
            return this._thumbLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set thumbLabel(value) {
            this._thumbLabel = coerceBooleanProperty(value);
        }
        /**
         * Whether the slider is disabled.
         * @return {?}
         */
        get disabled() {
            return this._disabled;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */
        set disabled(disabled) {
            this._disabled = coerceBooleanProperty(disabled);
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            this._isInitialized = true;
            if (this._platform.isBrowser) {
                // The MDC slider foundation accesses DOM globals, so we cannot initialize the
                // foundation on the server. The foundation would be needed to move the thumb
                // to the proper position and to render the ticks.
                this._foundation.init();
                // The standard Angular Material slider is always using discrete values. We always
                // want to enable discrete values and support ticks, but want to still provide
                // non-discrete slider visual looks if thumb label is disabled.
                // TODO(devversion): check if we can get a public API for this.
                // Tracked with: https://github.com/material-components/material-components-web/issues/5020
                ((/** @type {?} */ (this._foundation))).isDiscrete_ = true;
                // These bindings cannot be synced in the foundation, as the foundation is not
                // initialized and they cause DOM globals to be accessed (to move the thumb)
                this._syncStep();
                this._syncMax();
                this._syncMin();
                // Note that "value" needs to be synced after "max" and "min" because otherwise
                // the value will be clamped by the MDC foundation implementation.
                this._syncValue();
            }
            this._syncDisabled();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            if (!this._isInitialized) {
                return;
            }
            if (changes['step']) {
                this._syncStep();
            }
            if (changes['max']) {
                this._syncMax();
            }
            if (changes['min']) {
                this._syncMin();
            }
            if (changes['disabled']) {
                this._syncDisabled();
            }
            if (changes['value']) {
                this._syncValue();
            }
            if (changes['tickInterval']) {
                this._refreshTrackMarkers();
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._dirChangeSubscription.unsubscribe();
            // The foundation cannot be destroyed on the server, as the foundation
            // has not be initialized on the server.
            if (this._platform.isBrowser) {
                this._foundation.destroy();
            }
        }
        /**
         * Focuses the slider.
         * @param {?=} options
         * @return {?}
         */
        focus(options) {
            this._elementRef.nativeElement.focus(options);
        }
        /**
         * Blurs the slider.
         * @return {?}
         */
        blur() {
            this._elementRef.nativeElement.blur();
        }
        /**
         * Gets the display text of the current value.
         * @return {?}
         */
        get displayValue() {
            if (this.displayWith) {
                return this.displayWith((/** @type {?} */ (this.value))).toString();
            }
            return (/** @type {?} */ (this.value)).toString() || '0';
        }
        /**
         * Creates a slider change object from the specified value.
         * @private
         * @param {?} newValue
         * @return {?}
         */
        _createChangeEvent(newValue) {
            /** @type {?} */
            const event = new MatSliderChange();
            event.source = this;
            event.value = newValue;
            return event;
        }
        /**
         * Emits a change event and notifies the control value accessor.
         * @private
         * @param {?} newValue
         * @return {?}
         */
        _emitChangeEvent(newValue) {
            this._controlValueAccessorChangeFn(newValue);
            this.valueChange.emit(newValue);
            this.change.emit(this._createChangeEvent(newValue));
        }
        /**
         * Computes the CSS background value for the track markers (aka ticks).
         * @private
         * @param {?} min
         * @param {?} max
         * @param {?} step
         * @return {?}
         */
        _getTrackMarkersBackground(min, max, step) {
            if (!this.tickInterval) {
                return '';
            }
            /** @type {?} */
            const markerWidth = `${TICK_MARKER_SIZE}px`;
            /** @type {?} */
            const markerBackground = `linear-gradient(to right, currentColor ${markerWidth}, transparent 0)`;
            if (this.tickInterval === 'auto') {
                /** @type {?} */
                const trackSize = this._elementRef.nativeElement.getBoundingClientRect().width;
                /** @type {?} */
                const pixelsPerStep = trackSize * step / (max - min);
                /** @type {?} */
                const stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
                /** @type {?} */
                const pixelsPerTick = stepsPerTick * step;
                return `${markerBackground} 0 center / ${pixelsPerTick}px 100% repeat-x`;
            }
            // keep calculation in css for better rounding/subpixel behavior
            /** @type {?} */
            const markerAmount = `(((${max} - ${min}) / ${step}) / ${this.tickInterval})`;
            /** @type {?} */
            const markerBkgdLayout = `0 center / calc((100% - ${markerWidth}) / ${markerAmount}) 100% repeat-x`;
            return `${markerBackground} ${markerBkgdLayout}`;
        }
        /**
         * Method that ensures that track markers are refreshed.
         * @private
         * @return {?}
         */
        _refreshTrackMarkers() {
            // MDC only checks whether the slider has markers once on init by looking for the
            // `mdc-slider--display-markers` class in the DOM, whereas we support changing and hiding
            // the markers dynamically. This is a workaround until we can get a public API for it. See:
            // https://github.com/material-components/material-components-web/issues/5020
            ((/** @type {?} */ (this._foundation))).hasTrackMarker_ = this.tickInterval !== 0;
            this._foundation.setupTrackMarker();
        }
        /**
         * Syncs the "step" input value with the MDC foundation.
         * @private
         * @return {?}
         */
        _syncStep() {
            this._foundation.setStep(this.step);
        }
        /**
         * Syncs the "max" input value with the MDC foundation.
         * @private
         * @return {?}
         */
        _syncMax() {
            this._foundation.setMax(this.max);
        }
        /**
         * Syncs the "min" input value with the MDC foundation.
         * @private
         * @return {?}
         */
        _syncMin() {
            this._foundation.setMin(this.min);
        }
        /**
         * Syncs the "value" input binding with the MDC foundation.
         * @private
         * @return {?}
         */
        _syncValue() {
            this._foundation.setValue((/** @type {?} */ (this.value)));
        }
        /**
         * Syncs the "disabled" input value with the MDC foundation.
         * @private
         * @return {?}
         */
        _syncDisabled() {
            this._foundation.setDisabled(this.disabled);
        }
        /**
         * Whether the slider is displayed in RTL-mode.
         * @return {?}
         */
        _isRtl() {
            return this._dir && this._dir.value === 'rtl';
        }
        /**
         * Registers a callback to be triggered when the value has changed.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
        }
        /**
         * Registers a callback to be triggered when the component is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        registerOnTouched(fn) {
            this._markAsTouched = fn;
        }
        /**
         * Sets whether the component should be disabled.
         * Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this._syncDisabled();
        }
        /**
         * Sets the model value.
         * Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            this.value = value;
            this._syncValue();
        }
    }
    MatSlider.decorators = [
        { type: Component, args: [{
                    selector: 'mat-slider',
                    template: "<div class=\"mdc-slider__track-container\">\n  <div class=\"mdc-slider__track\" #track></div>\n  <div class=\"mdc-slider__track-marker-container\" #trackMarker></div>\n</div>\n<div class=\"mdc-slider__thumb-container\" #thumbContainer>\n  <div *ngIf=\"thumbLabel\" class=\"mdc-slider__pin\">\n    <span class=\"mdc-slider__pin-value-marker\">{{displayValue}}</span>\n  </div>\n  <svg class=\"mdc-slider__thumb\" focusable=\"false\" width=\"21\" height=\"21\">\n    <circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle>\n  </svg>\n  <div class=\"mdc-slider__focus-ring\"></div>\n</div>\n",
                    host: {
                        'class': 'mat-mdc-slider mdc-slider mat-mdc-focus-indicator',
                        'role': 'slider',
                        'aria-orientation': 'horizontal',
                        // The tabindex if the slider turns disabled is managed by the MDC foundation which
                        // dynamically updates and restores the "tabindex" attribute.
                        '[attr.tabindex]': 'tabIndex || 0',
                        '[class.mdc-slider--discrete]': 'thumbLabel',
                        '[class.mat-slider-has-ticks]': 'tickInterval !== 0',
                        '[class.mdc-slider--display-markers]': 'tickInterval !== 0',
                        '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
                        // Class binding which is only used by the test harness as there is no other
                        // way for the harness to detect if mouse coordinates need to be inverted.
                        '[class.mat-slider-invert-mouse-coords]': '_isRtl()',
                        '[class.mat-slider-disabled]': 'disabled',
                        '[class.mat-primary]': 'color == "primary"',
                        '[class.mat-accent]': 'color == "accent"',
                        '[class.mat-warn]': 'color == "warn"',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                        '(blur)': '_markAsTouched()',
                    },
                    exportAs: 'matSlider',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [MAT_SLIDER_VALUE_ACCESSOR],
                    styles: [".mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:\"\"}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1}.mdc-slider__pin-value-marker{transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;margin-left:8px;margin-right:8px;width:auto;min-width:112px}.cdk-high-contrast-active .mat-mdc-slider .mdc-slider__track-container{height:0;outline:solid 2px;margin-top:1px}.cdk-high-contrast-active .mat-mdc-slider .mdc-slider__pin-value-marker{outline:solid 1px}@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__track{will-change:transform}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__thumb-container{will-change:transform}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__thumb{transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__focus-ring{transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider__pin{transition:transform 100ms ease-out}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--in-transit .mdc-slider__thumb-container,.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--in-transit .mdc-slider__track,.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mat-mdc-slider:not(._mat-animation-noopable) .mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mat-slider-has-ticks:not(.mat-slider-disabled) .mdc-slider__track-marker-container{visibility:visible}\n"]
                }] }
    ];
    /** @nocollapse */
    MatSlider.ctorParameters = () => [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: Platform },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ];
    MatSlider.propDecorators = {
        change: [{ type: Output }],
        input: [{ type: Output }],
        valueChange: [{ type: Output }],
        tabIndex: [{ type: Input }],
        color: [{ type: Input }],
        displayWith: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        value: [{ type: Input }],
        step: [{ type: Input }],
        tickInterval: [{ type: Input }],
        thumbLabel: [{ type: Input }],
        disabled: [{ type: Input }],
        _thumbContainer: [{ type: ViewChild, args: ['thumbContainer',] }],
        _track: [{ type: ViewChild, args: ['track',] }],
        _pinValueMarker: [{ type: ViewChild, args: ['pinValueMarker',] }],
        _trackMarker: [{ type: ViewChild, args: ['trackMarker',] }]
    };
    return MatSlider;
})();
export { MatSlider };
if (false) {
    /** @type {?} */
    MatSlider.ngAcceptInputType_min;
    /** @type {?} */
    MatSlider.ngAcceptInputType_max;
    /** @type {?} */
    MatSlider.ngAcceptInputType_value;
    /** @type {?} */
    MatSlider.ngAcceptInputType_step;
    /** @type {?} */
    MatSlider.ngAcceptInputType_tickInterval;
    /** @type {?} */
    MatSlider.ngAcceptInputType_thumbLabel;
    /** @type {?} */
    MatSlider.ngAcceptInputType_disabled;
    /**
     * Event emitted when the slider value has changed.
     * @type {?}
     */
    MatSlider.prototype.change;
    /**
     * Event emitted when the slider thumb moves.
     * @type {?}
     */
    MatSlider.prototype.input;
    /**
     * Emits when the raw value of the slider changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * \@docs-private
     * @type {?}
     */
    MatSlider.prototype.valueChange;
    /**
     * Tabindex for the slider.
     * @type {?}
     */
    MatSlider.prototype.tabIndex;
    /**
     * The color palette for this slider.
     * @type {?}
     */
    MatSlider.prototype.color;
    /**
     * Function that will be used to format the value before it is displayed
     * in the thumb label. Can be used to format very large number in order
     * for them to fit into the slider thumb.
     * @type {?}
     */
    MatSlider.prototype.displayWith;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._min;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._max;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._value;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._step;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._tickInterval;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._thumbLabel;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._disabled;
    /**
     * Adapter for the MDC slider foundation.
     * @type {?}
     * @private
     */
    MatSlider.prototype._sliderAdapter;
    /**
     * Instance of the MDC slider foundation for this slider.
     * @type {?}
     * @private
     */
    MatSlider.prototype._foundation;
    /**
     * Whether the MDC foundation has been initialized.
     * @type {?}
     * @private
     */
    MatSlider.prototype._isInitialized;
    /**
     * Function that notifies the control value accessor about a value change.
     * @type {?}
     * @private
     */
    MatSlider.prototype._controlValueAccessorChangeFn;
    /**
     * Subscription to the Directionality change EventEmitter.
     * @type {?}
     * @private
     */
    MatSlider.prototype._dirChangeSubscription;
    /**
     * Function that marks the slider as touched. Registered via "registerOnTouch".
     * @type {?}
     */
    MatSlider.prototype._markAsTouched;
    /** @type {?} */
    MatSlider.prototype._thumbContainer;
    /** @type {?} */
    MatSlider.prototype._track;
    /** @type {?} */
    MatSlider.prototype._pinValueMarker;
    /** @type {?} */
    MatSlider.prototype._trackMarker;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    MatSlider.prototype._dir;
    /** @type {?} */
    MatSlider.prototype._animationMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtc2xpZGVyL3NsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUVMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFFckIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUMsK0JBQStCLEVBQUUsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDaEYsT0FBTyxFQUVMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7TUFNNUIsd0JBQXdCLEdBQUcsRUFBRTs7Ozs7OztNQU83QixnQkFBZ0IsR0FBRyxDQUFDOzs7OztNQUdwQixzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQzs7Ozs7TUFHekUscUJBQXFCLEdBQUcsK0JBQStCLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUM7Ozs7Ozs7QUFPL0UsTUFBTSxPQUFPLHlCQUF5QixHQUFRO0lBQzVDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBQztJQUN4QyxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7O0FBR0QsTUFBTSxPQUFPLGVBQWU7Q0FNM0I7Ozs7OztJQUpDLGlDQUFrQjs7Ozs7SUFHbEIsZ0NBQWM7O0FBR2hCO0lBQUEsTUE4QmEsU0FBUzs7Ozs7Ozs7OztRQXdOcEIsWUFDWSxXQUFvQyxFQUNwQyxrQkFBcUMsRUFDckMsT0FBZSxFQUNmLFNBQW1CLEVBQ1AsSUFBb0IsRUFDakIsUUFBZ0IsRUFDVyxjQUF1QjtZQU5qRSxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7WUFDcEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtZQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1lBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVTtZQUNQLFNBQUksR0FBSixJQUFJLENBQWdCO1lBRVUsbUJBQWMsR0FBZCxjQUFjLENBQVM7Ozs7WUE3TjFELFdBQU0sR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7WUFHNUUsVUFBSyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7Ozs7O1lBTzNFLGdCQUFXLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7WUFHekUsYUFBUSxHQUFXLENBQUMsQ0FBQzs7OztZQUdyQixVQUFLLEdBQWlCLFFBQVEsQ0FBQztZQWlCaEMsU0FBSSxHQUFHLENBQUMsQ0FBQztZQVVULFNBQUksR0FBRyxHQUFHLENBQUM7WUFlWCxXQUFNLEdBQWdCLElBQUksQ0FBQztZQVUzQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1lBbUJsQixrQkFBYSxHQUFrQixDQUFDLENBQUM7WUFVakMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7WUFVN0IsY0FBUyxHQUFHLEtBQUssQ0FBQzs7OztZQUdsQixtQkFBYyxHQUFxQjtnQkFDekMsUUFBUTs7OztnQkFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDckYsUUFBUTs7OztnQkFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDaEYsV0FBVzs7OztnQkFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdEYsWUFBWTs7OztnQkFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUN6RSxZQUFZOzs7OztnQkFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3ZGLGVBQWU7Ozs7Z0JBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDL0UsbUJBQW1COzs7Z0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtnQkFDakYsV0FBVzs7O2dCQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQTtnQkFDMUQsMEJBQTBCOzs7OztnQkFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDN0MsbUZBQW1GO2dCQUNuRixtRkFBbUY7Z0JBQ25GLGtGQUFrRjtnQkFDbEYsbUNBQW1DO2dCQUNuQyxrRkFBa0Y7Z0JBQ2xGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FBQTtnQkFDNUYsNEJBQTRCOzs7OztnQkFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBQ3hFLHdDQUF3Qzs7Ozs7Z0JBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7b0JBQzdELGtGQUFrRjtvQkFDbEYsc0RBQXNEO29CQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQjs7O29CQUFDLEdBQUcsRUFBRTt3QkFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhOzZCQUMvQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixDQUFDLENBQUM7b0JBQ2hFLENBQUMsRUFBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQTtnQkFDRCwwQ0FBMEM7Ozs7O2dCQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO29CQUMvRCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWE7eUJBQy9CLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztnQkFDbkUsQ0FBQyxDQUFBO2dCQUNELDhCQUE4Qjs7Ozs7Z0JBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ2pELGtGQUFrRjtnQkFDbEYsK0VBQStFO2dCQUMvRSxtRkFBbUY7Z0JBQ25GLHlCQUF5QjtnQkFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBQ3BELGdDQUFnQzs7Ozs7Z0JBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FDbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZELHFCQUFxQjs7OztnQkFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNqQyw2RUFBNkU7b0JBQzdFLGtGQUFrRjtvQkFDbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUI7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFDLENBQUM7Z0JBQ25GLENBQUMsQ0FBQTtnQkFDRCx1QkFBdUI7Ozs7Z0JBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBQ25GLFdBQVc7OztnQkFDUCxHQUFHLEVBQUU7OzBCQUNHLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtvQkFDNUMsc0RBQXNEO29CQUN0RCw4RUFBOEU7b0JBQzlFLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO3dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDcEQ7Z0JBQ0gsQ0FBQyxDQUFBO2dCQUNMLFlBQVk7OztnQkFDUixHQUFHLEVBQUU7b0JBQ0gsc0ZBQXNGO29CQUN0RixpRkFBaUY7b0JBQ2pGLG9GQUFvRjtvQkFDcEYsbUNBQW1DO29CQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFBO2dCQUNMLDhCQUE4Qjs7Ozs7Z0JBQzFCLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUUsQ0FBQyxDQUFBO2dCQUNMLHFCQUFxQjs7Ozs7Z0JBQ2pCLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkUsQ0FBQyxDQUFBO2dCQUNMLGNBQWM7OztnQkFDVixHQUFHLEVBQUU7b0JBQ0gsMkVBQTJFO29CQUMzRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQTtnQkFDTCxlQUFlOzs7Ozs7Z0JBQ1gsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUM3QyxZQUFZLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckUsQ0FBQyxDQUFBO2dCQUNMLEtBQUs7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7YUFDM0IsQ0FBQzs7OztZQUdNLGdCQUFXLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Ozs7WUFHM0QsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7WUFHdkIsa0NBQTZCOzs7WUFBNEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDOzs7O1lBR2xFLDJCQUFzQixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7Ozs7WUFHcEQsbUJBQWM7OztZQUFjLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztZQWVuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUM1RCxrRkFBa0Y7b0JBQ2xGLDZFQUE2RTtvQkFDN0UsNERBQTREO29CQUM1RCxtRkFBbUY7b0JBQ25GLG1EQUFtRDtvQkFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUI7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBQyxFQUFDLENBQUM7Z0JBQ3BGLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDOzs7OztRQWhORCxJQUNJLEdBQUc7WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFhO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7Ozs7UUFJRCxJQUNJLEdBQUc7WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFhO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7Ozs7UUFJRCxJQUNJLEtBQUs7WUFDUCwwRUFBMEU7WUFDMUUsbUNBQW1DO1lBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN2QjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUNELElBQUksS0FBSyxDQUFDLEtBQWtCO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7Ozs7UUFJRCxJQUNJLElBQUk7WUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFDRCxJQUFJLElBQUksQ0FBQyxDQUFTO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7Ozs7UUFPRCxJQUNJLFlBQVk7WUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFvQjtZQUNuQyxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2FBQzdCO2lCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQzs7Ozs7UUFJRCxJQUNJLFVBQVU7WUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxJQUFJLFVBQVUsQ0FBQyxLQUFjO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7Ozs7UUFJRCxJQUNJLFFBQVE7WUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFRO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7OztRQWtJRCxlQUFlO1lBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFFM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDNUIsOEVBQThFO2dCQUM5RSw2RUFBNkU7Z0JBQzdFLGtEQUFrRDtnQkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFeEIsa0ZBQWtGO2dCQUNsRiw4RUFBOEU7Z0JBQzlFLCtEQUErRDtnQkFDL0QsK0RBQStEO2dCQUMvRCwyRkFBMkY7Z0JBQzNGLENBQUMsbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBTyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFFN0MsOEVBQThFO2dCQUM5RSw0RUFBNEU7Z0JBQzVFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRWhCLCtFQUErRTtnQkFDL0Usa0VBQWtFO2dCQUNsRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7WUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxXQUFXLENBQUMsT0FBc0I7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLE9BQU87YUFDUjtZQUVELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7WUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtZQUNELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7WUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzdCO1FBQ0gsQ0FBQzs7OztRQUVELFdBQVc7WUFDVCxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUMsc0VBQXNFO1lBQ3RFLHdDQUF3QztZQUN4QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7Ozs7O1FBR0QsS0FBSyxDQUFDLE9BQXNCO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7OztRQUdELElBQUk7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxDQUFDOzs7OztRQUdELElBQUksWUFBWTtZQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsUUFBUSxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ3ZDLENBQUM7Ozs7Ozs7UUFHTyxrQkFBa0IsQ0FBQyxRQUFnQjs7a0JBQ25DLEtBQUssR0FBRyxJQUFJLGVBQWUsRUFBRTtZQUNuQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN2QixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7Ozs7Ozs7UUFHTyxnQkFBZ0IsQ0FBQyxRQUFnQjtZQUN2QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7Ozs7Ozs7O1FBR08sMEJBQTBCLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxJQUFZO1lBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixPQUFPLEVBQUUsQ0FBQzthQUNYOztrQkFFSyxXQUFXLEdBQUcsR0FBRyxnQkFBZ0IsSUFBSTs7a0JBQ3JDLGdCQUFnQixHQUNsQiwwQ0FBMEMsV0FBVyxrQkFBa0I7WUFFM0UsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTs7c0JBQzFCLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUs7O3NCQUN4RSxhQUFhLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O3NCQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxhQUFhLENBQUM7O3NCQUNsRSxhQUFhLEdBQUcsWUFBWSxHQUFHLElBQUk7Z0JBQ3pDLE9BQU8sR0FBRyxnQkFBZ0IsZUFBZSxhQUFhLGtCQUFrQixDQUFDO2FBQzFFOzs7a0JBR0ssWUFBWSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRzs7a0JBQ3ZFLGdCQUFnQixHQUNsQiwyQkFBMkIsV0FBVyxPQUFPLFlBQVksaUJBQWlCO1lBQzlFLE9BQU8sR0FBRyxnQkFBZ0IsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25ELENBQUM7Ozs7OztRQUdPLG9CQUFvQjtZQUMxQixpRkFBaUY7WUFDakYseUZBQXlGO1lBQ3pGLDJGQUEyRjtZQUMzRiw2RUFBNkU7WUFDN0UsQ0FBQyxtQkFBQSxJQUFJLENBQUMsV0FBVyxFQUFPLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RDLENBQUM7Ozs7OztRQUdPLFNBQVM7WUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7Ozs7O1FBR08sUUFBUTtZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7Ozs7UUFHTyxRQUFRO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7Ozs7OztRQUdPLFVBQVU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDekMsQ0FBQzs7Ozs7O1FBR08sYUFBYTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7Ozs7UUFHRCxNQUFNO1lBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztRQUNoRCxDQUFDOzs7Ozs7O1FBT0QsZ0JBQWdCLENBQUMsRUFBTztZQUN0QixJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO1FBQzFDLENBQUM7Ozs7Ozs7UUFPRCxpQkFBaUIsQ0FBQyxFQUFPO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzNCLENBQUM7Ozs7Ozs7UUFPRCxnQkFBZ0IsQ0FBQyxVQUFtQjtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQzs7Ozs7OztRQU9ELFVBQVUsQ0FBQyxLQUFVO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7Z0JBbGRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsc2xCQUEwQjtvQkFFMUIsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxtREFBbUQ7d0JBQzVELE1BQU0sRUFBRSxRQUFRO3dCQUNoQixrQkFBa0IsRUFBRSxZQUFZOzs7d0JBR2hDLGlCQUFpQixFQUFFLGVBQWU7d0JBQ2xDLDhCQUE4QixFQUFFLFlBQVk7d0JBQzVDLDhCQUE4QixFQUFFLG9CQUFvQjt3QkFDcEQscUNBQXFDLEVBQUUsb0JBQW9CO3dCQUMzRCx3Q0FBd0MsRUFBRSxZQUFZOzs7d0JBR3RELHdDQUF3QyxFQUFFLFVBQVU7d0JBQ3BELDZCQUE2QixFQUFFLFVBQVU7d0JBQ3pDLHFCQUFxQixFQUFFLG9CQUFvQjt3QkFDM0Msb0JBQW9CLEVBQUUsbUJBQW1CO3dCQUN6QyxrQkFBa0IsRUFBRSxpQkFBaUI7d0JBQ3JDLGlDQUFpQyxFQUFFLHFDQUFxQzt3QkFDeEUsUUFBUSxFQUFFLGtCQUFrQjtxQkFDN0I7b0JBQ0QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7O2lCQUN2Qzs7OztnQkF4RkMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBT2pCLE1BQU07Z0JBWmlDLFFBQVE7Z0JBUHpDLGNBQWMsdUJBb1VmLFFBQVE7NkNBQ1IsU0FBUyxTQUFDLFVBQVU7NkNBQ3BCLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7eUJBN041QyxNQUFNO3dCQUdOLE1BQU07OEJBT04sTUFBTTsyQkFHTixLQUFLO3dCQUdMLEtBQUs7OEJBT0wsS0FBSztzQkFHTCxLQUFLO3NCQVVMLEtBQUs7d0JBVUwsS0FBSzt1QkFlTCxLQUFLOytCQWFMLEtBQUs7NkJBZ0JMLEtBQUs7MkJBVUwsS0FBSztrQ0E2R0wsU0FBUyxTQUFDLGdCQUFnQjt5QkFDMUIsU0FBUyxTQUFDLE9BQU87a0NBQ2pCLFNBQVMsU0FBQyxnQkFBZ0I7K0JBQzFCLFNBQVMsU0FBQyxhQUFhOztJQXVPMUIsZ0JBQUM7S0FBQTtTQTdiWSxTQUFTOzs7SUFzYnBCLGdDQUEwQzs7SUFDMUMsZ0NBQTBDOztJQUMxQyxrQ0FBNEM7O0lBQzVDLGlDQUEyQzs7SUFDM0MseUNBQW1EOztJQUNuRCx1Q0FBa0Q7O0lBQ2xELHFDQUFnRDs7Ozs7SUExYmhELDJCQUErRjs7Ozs7SUFHL0YsMEJBQThGOzs7Ozs7O0lBTzlGLGdDQUFrRjs7Ozs7SUFHbEYsNkJBQThCOzs7OztJQUc5QiwwQkFBd0M7Ozs7Ozs7SUFPeEMsZ0NBQXlEOzs7OztJQVV6RCx5QkFBaUI7Ozs7O0lBVWpCLHlCQUFtQjs7Ozs7SUFlbkIsMkJBQW1DOzs7OztJQVVuQywwQkFBMEI7Ozs7O0lBbUIxQixrQ0FBeUM7Ozs7O0lBVXpDLGdDQUFxQzs7Ozs7SUFVckMsOEJBQTBCOzs7Ozs7SUFHMUIsbUNBa0ZFOzs7Ozs7SUFHRixnQ0FBbUU7Ozs7OztJQUduRSxtQ0FBK0I7Ozs7OztJQUcvQixrREFBMEU7Ozs7OztJQUcxRSwyQ0FBb0Q7Ozs7O0lBR3BELG1DQUFxQzs7SUFFckMsb0NBQXNFOztJQUN0RSwyQkFBb0Q7O0lBQ3BELG9DQUFzRTs7SUFDdEUsaUNBQWdFOzs7OztJQUc1RCxnQ0FBNEM7Ozs7O0lBQzVDLHVDQUE2Qzs7Ozs7SUFDN0MsNEJBQXVCOzs7OztJQUN2Qiw4QkFBMkI7Ozs7O0lBQzNCLHlCQUF3Qzs7SUFFeEMsbUNBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEJvb2xlYW5JbnB1dCxcbiAgY29lcmNlQm9vbGVhblByb3BlcnR5LFxuICBjb2VyY2VOdW1iZXJQcm9wZXJ0eSxcbiAgTnVtYmVySW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7bm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucywgUGxhdGZvcm19IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBBdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtBTklNQVRJT05fTU9EVUxFX1RZUEV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge01EQ1NsaWRlckFkYXB0ZXIsIE1EQ1NsaWRlckZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFZpc3VhbGx5LCBhIDMwcHggc2VwYXJhdGlvbiBiZXR3ZWVuIHRpY2sgbWFya3MgbG9va3MgYmVzdC4gVGhpcyBpcyB2ZXJ5IHN1YmplY3RpdmUgYnV0IGl0IGlzXG4gKiB0aGUgZGVmYXVsdCBzZXBhcmF0aW9uIHdlIGNob3NlLlxuICovXG5jb25zdCBNSU5fQVVUT19USUNLX1NFUEFSQVRJT04gPSAzMDtcblxuLyoqXG4gKiBTaXplIG9mIGEgdGljayBtYXJrZXIgZm9yIGEgc2xpZGVyLiBUaGUgc2l6ZSBvZiBhIHRpY2sgaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsXG4gKiBEZXNpZ24gZ3VpZGVsaW5lcyBhbmQgdGhlIE1EQyBzbGlkZXIgaW1wbGVtZW50YXRpb24uXG4gKiBUT0RPKGRldnZlcnNpb24pOiBpZGVhbGx5IE1EQyB3b3VsZCBleHBvc2UgdGhlIHRpY2sgbWFya2VyIHNpemUgYXMgY29uc3RhbnRcbiAqL1xuY29uc3QgVElDS19NQVJLRVJfU0laRSA9IDI7XG5cbi8qKiBFdmVudCBvcHRpb25zIHVzZWQgdG8gYmluZCBwYXNzaXZlIGxpc3RlbmVycy4gKi9cbmNvbnN0IHBhc3NpdmVMaXN0ZW5lck9wdGlvbnMgPSBub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zKHtwYXNzaXZlOiB0cnVlfSk7XG5cbi8qKiBFdmVudCBvcHRpb25zIHVzZWQgdG8gYmluZCBhY3RpdmUgbGlzdGVuZXJzLiAqL1xuY29uc3QgYWN0aXZlTGlzdGVuZXJPcHRpb25zID0gbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyh7cGFzc2l2ZTogZmFsc2V9KTtcblxuLyoqXG4gKiBQcm92aWRlciBFeHByZXNzaW9uIHRoYXQgYWxsb3dzIG1hdC1zbGlkZXIgdG8gcmVnaXN0ZXIgYXMgYSBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAqIFRoaXMgYWxsb3dzIGl0IHRvIHN1cHBvcnQgWyhuZ01vZGVsKV0gYW5kIFtmb3JtQ29udHJvbF0uXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBNQVRfU0xJREVSX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXRTbGlkZXIpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqIEEgc2ltcGxlIGNoYW5nZSBldmVudCBlbWl0dGVkIGJ5IHRoZSBNYXRTbGlkZXIgY29tcG9uZW50LiAqL1xuZXhwb3J0IGNsYXNzIE1hdFNsaWRlckNoYW5nZSB7XG4gIC8qKiBUaGUgTWF0U2xpZGVyIHRoYXQgY2hhbmdlZC4gKi9cbiAgc291cmNlOiBNYXRTbGlkZXI7XG5cbiAgLyoqIFRoZSBuZXcgdmFsdWUgb2YgdGhlIHNvdXJjZSBzbGlkZXIuICovXG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlci5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtYXQtbWRjLXNsaWRlciBtZGMtc2xpZGVyIG1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yJyxcbiAgICAncm9sZSc6ICdzbGlkZXInLFxuICAgICdhcmlhLW9yaWVudGF0aW9uJzogJ2hvcml6b250YWwnLFxuICAgIC8vIFRoZSB0YWJpbmRleCBpZiB0aGUgc2xpZGVyIHR1cm5zIGRpc2FibGVkIGlzIG1hbmFnZWQgYnkgdGhlIE1EQyBmb3VuZGF0aW9uIHdoaWNoXG4gICAgLy8gZHluYW1pY2FsbHkgdXBkYXRlcyBhbmQgcmVzdG9yZXMgdGhlIFwidGFiaW5kZXhcIiBhdHRyaWJ1dGUuXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICd0YWJJbmRleCB8fCAwJyxcbiAgICAnW2NsYXNzLm1kYy1zbGlkZXItLWRpc2NyZXRlXSc6ICd0aHVtYkxhYmVsJyxcbiAgICAnW2NsYXNzLm1hdC1zbGlkZXItaGFzLXRpY2tzXSc6ICd0aWNrSW50ZXJ2YWwgIT09IDAnLFxuICAgICdbY2xhc3MubWRjLXNsaWRlci0tZGlzcGxheS1tYXJrZXJzXSc6ICd0aWNrSW50ZXJ2YWwgIT09IDAnLFxuICAgICdbY2xhc3MubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nXSc6ICd0aHVtYkxhYmVsJyxcbiAgICAvLyBDbGFzcyBiaW5kaW5nIHdoaWNoIGlzIG9ubHkgdXNlZCBieSB0aGUgdGVzdCBoYXJuZXNzIGFzIHRoZXJlIGlzIG5vIG90aGVyXG4gICAgLy8gd2F5IGZvciB0aGUgaGFybmVzcyB0byBkZXRlY3QgaWYgbW91c2UgY29vcmRpbmF0ZXMgbmVlZCB0byBiZSBpbnZlcnRlZC5cbiAgICAnW2NsYXNzLm1hdC1zbGlkZXItaW52ZXJ0LW1vdXNlLWNvb3Jkc10nOiAnX2lzUnRsKCknLFxuICAgICdbY2xhc3MubWF0LXNsaWRlci1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MubWF0LXByaW1hcnldJzogJ2NvbG9yID09IFwicHJpbWFyeVwiJyxcbiAgICAnW2NsYXNzLm1hdC1hY2NlbnRdJzogJ2NvbG9yID09IFwiYWNjZW50XCInLFxuICAgICdbY2xhc3MubWF0LXdhcm5dJzogJ2NvbG9yID09IFwid2FyblwiJyxcbiAgICAnW2NsYXNzLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlXSc6ICdfYW5pbWF0aW9uTW9kZSA9PT0gXCJOb29wQW5pbWF0aW9uc1wiJyxcbiAgICAnKGJsdXIpJzogJ19tYXJrQXNUb3VjaGVkKCknLFxuICB9LFxuICBleHBvcnRBczogJ21hdFNsaWRlcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtNQVRfU0xJREVSX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2xpZGVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGhhcyBjaGFuZ2VkLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8TWF0U2xpZGVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0U2xpZGVyQ2hhbmdlPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHNsaWRlciB0aHVtYiBtb3Zlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0OiBFdmVudEVtaXR0ZXI8TWF0U2xpZGVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0U2xpZGVyQ2hhbmdlPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSByYXcgdmFsdWUgb2YgdGhlIHNsaWRlciBjaGFuZ2VzLiBUaGlzIGlzIGhlcmUgcHJpbWFyaWx5XG4gICAqIHRvIGZhY2lsaXRhdGUgdGhlIHR3by13YXkgYmluZGluZyBmb3IgdGhlIGB2YWx1ZWAgaW5wdXQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogVGFiaW5kZXggZm9yIHRoZSBzbGlkZXIuICovXG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXIgPSAwO1xuXG4gIC8qKiBUaGUgY29sb3IgcGFsZXR0ZSBmb3IgdGhpcyBzbGlkZXIuICovXG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAnYWNjZW50JztcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZm9ybWF0IHRoZSB2YWx1ZSBiZWZvcmUgaXQgaXMgZGlzcGxheWVkXG4gICAqIGluIHRoZSB0aHVtYiBsYWJlbC4gQ2FuIGJlIHVzZWQgdG8gZm9ybWF0IHZlcnkgbGFyZ2UgbnVtYmVyIGluIG9yZGVyXG4gICAqIGZvciB0aGVtIHRvIGZpdCBpbnRvIHRoZSBzbGlkZXIgdGh1bWIuXG4gICAqL1xuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlcjtcblxuICAvKiogVGhlIG1pbmltdW0gdmFsdWUgdGhhdCB0aGUgc2xpZGVyIGNhbiBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgfVxuICBzZXQgbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW4gPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbWluID0gMDtcblxuICAvKiogVGhlIG1heGltdW0gdmFsdWUgdGhhdCB0aGUgc2xpZGVyIGNhbiBoYXZlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuICBzZXQgbWF4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbWF4ID0gMTAwO1xuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgc2xpZGVyLiAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogbnVtYmVyfG51bGwge1xuICAgIC8vIElmIHRoZSB2YWx1ZSBuZWVkcyB0byBiZSByZWFkIGFuZCBpdCBpcyBzdGlsbCB1bmluaXRpYWxpemVkLCBpbml0aWFsaXplXG4gICAgLy8gaXQgdG8gdGhlIGN1cnJlbnQgbWluaW11bSB2YWx1ZS5cbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyfG51bGwpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyfG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgdmFsdWVzIGF0IHdoaWNoIHRoZSB0aHVtYiB3aWxsIHNuYXAuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gIH1cbiAgc2V0IHN0ZXAodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RlcCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYsIHRoaXMuX3N0ZXApO1xuICB9XG4gIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIEhvdyBvZnRlbiB0byBzaG93IHRpY2tzLiBSZWxhdGl2ZSB0byB0aGUgc3RlcCBzbyB0aGF0IGEgdGljayBhbHdheXMgYXBwZWFycyBvbiBhIHN0ZXAuXG4gICAqIEV4OiBUaWNrIGludGVydmFsIG9mIDQgd2l0aCBhIHN0ZXAgb2YgMyB3aWxsIGRyYXcgYSB0aWNrIGV2ZXJ5IDQgc3RlcHMgKGV2ZXJ5IDEyIHZhbHVlcykuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdGlja0ludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLl90aWNrSW50ZXJ2YWw7XG4gIH1cbiAgc2V0IHRpY2tJbnRlcnZhbCh2YWx1ZTogbnVtYmVyfCdhdXRvJykge1xuICAgIGlmICh2YWx1ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLl90aWNrSW50ZXJ2YWwgPSAnYXV0byc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3RpY2tJbnRlcnZhbCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlLCB0aGlzLl90aWNrSW50ZXJ2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aWNrSW50ZXJ2YWwgPSAwO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF90aWNrSW50ZXJ2YWw6IG51bWJlcnwnYXV0bycgPSAwO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IHRoZSB0aHVtYiBsYWJlbC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHRodW1iTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1iTGFiZWw7XG4gIH1cbiAgc2V0IHRodW1iTGFiZWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90aHVtYkxhYmVsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF90aHVtYkxhYmVsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXNhYmxlZCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKiogQWRhcHRlciBmb3IgdGhlIE1EQyBzbGlkZXIgZm91bmRhdGlvbi4gKi9cbiAgcHJpdmF0ZSBfc2xpZGVyQWRhcHRlcjogTURDU2xpZGVyQWRhcHRlciA9IHtcbiAgICBoYXNDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgIGdldEF0dHJpYnV0ZTogKG5hbWUpID0+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSksXG4gICAgc2V0QXR0cmlidXRlOiAobmFtZSwgdmFsdWUpID0+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpLFxuICAgIHJlbW92ZUF0dHJpYnV0ZTogKG5hbWUpID0+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSksXG4gICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIGdldFRhYkluZGV4OiAoKSA9PiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFiSW5kZXgsXG4gICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAvLyBJbnRlcmFjdGlvbiBldmVudCBoYW5kbGVycyAod2hpY2ggaGFuZGxlIGtleWJvYXJkIGludGVyYWN0aW9uKSBjYW5ub3QgYmUgcGFzc2l2ZVxuICAgICAgICAvLyBhcyB0aGV5IHdpbGwgcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvci4gQWRkaXRpb25hbGx5IHdlIGNhbid0IHJ1biB0aGVzZSBldmVudFxuICAgICAgICAvLyBoYW5kbGVycyBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyIHpvbmUgYmVjYXVzZSB3ZSByZWx5IG9uIHRoZSBldmVudHMgdG8gY2F1c2UgdGhlXG4gICAgICAgIC8vIGNvbXBvbmVudCB0cmVlIHRvIGJlIHJlLWNoZWNrZWQuXG4gICAgICAgIC8vIFRPRE86IHRha2UgaW4gdGhlIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgZnJvbSB0aGUgYWRhcHRlciBvbmNlIE1EQyBzdXBwb3J0cyBpdC5cbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYWN0aXZlTGlzdGVuZXJPcHRpb25zKSxcbiAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgIC8vIFRoZSB0aHVtYiBjb250YWluZXIgaW50ZXJhY3Rpb24gaGFuZGxlcnMgYXJlIGN1cnJlbnRseSBqdXN0IHVzZWQgZm9yIHRyYW5zaXRpb25cbiAgICAgIC8vIGV2ZW50cyB3aGljaCBkb24ndCBuZWVkIHRvIHJ1biBpbiB0aGUgQW5ndWxhciB6b25lLlxuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdGh1bWJDb250YWluZXIubmF0aXZlRWxlbWVudFxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHBhc3NpdmVMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZXJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICB0aGlzLl90aHVtYkNvbnRhaW5lci5uYXRpdmVFbGVtZW50XG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHBhc3NpdmVMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH0sXG4gICAgcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgLy8gQm9keSBldmVudCBoYW5kbGVycyAod2hpY2ggaGFuZGxlIHRodW1iIHNsaWRpbmcpIGNhbm5vdCBiZSBwYXNzaXZlIGFzIHRoZXkgd2lsbFxuICAgICAgICAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGJlaGF2aW9yLiBBZGRpdGlvbmFsbHkgd2UgY2FuJ3QgcnVuIHRoZXNlIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIC8vIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgem9uZSBiZWNhdXNlIHdlIHJlbHkgb24gdGhlIGV2ZW50cyB0byBjYXVzZSB0aGUgY29tcG9uZW50XG4gICAgICAgIC8vIHRyZWUgdG8gYmUgcmUtY2hlY2tlZC5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgIGRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHtcbiAgICAgIC8vIFRoZSByZXNpemUgaGFuZGxlciBpcyBjdXJyZW50bHkgcmVzcG9uc2libGUgZm9yIGRldGVjdGluZyBzbGlkZXIgZGltZW5zaW9uXG4gICAgICAvLyBjaGFuZ2VzIGFuZCB0aGVyZWZvcmUgZG9lc24ndCBjYXVzZSBhIHZhbHVlIGNoYW5nZSB0aGF0IG5lZWRzIHRvIGJlIHByb3BhZ2F0ZWQuXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpKTtcbiAgICB9LFxuICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgIG5vdGlmeUlucHV0OlxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLl9mb3VuZGF0aW9uLmdldFZhbHVlKCk7XG4gICAgICAgICAgLy8gTURDIGN1cnJlbnRseSBmaXJlcyB0aGUgaW5wdXQgZXZlbnQgbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgLy8gVE9ETyhkZXZ2ZXJzaW9uKTogcmVtb3ZlIHRoaXMgY2hlY2sgb25jZSB0aGUgaW5wdXQgbm90aWZpY2F0aW9ucyBhcmUgZml4ZWQuXG4gICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmVtaXQodGhpcy5fY3JlYXRlQ2hhbmdlRXZlbnQobmV3VmFsdWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgbm90aWZ5Q2hhbmdlOlxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gVE9ETyhkZXZ2ZXJzaW9uKTogYnVnIGluIE1EQyB3aGVyZSBvbmx5IHRoZSBcImNoYW5nZVwiIGV2ZW50IGlzIGVtaXR0ZWQgaWYgYSBrZXlwcmVzc1xuICAgICAgICAgIC8vIHVwZGF0ZWQgdGhlIHZhbHVlLiBNYXRlcmlhbCBhbmQgbmF0aXZlIHJhbmdlIHNsaWRlcnMgYWxzbyBlbWl0IGFuIGlucHV0IGV2ZW50LlxuICAgICAgICAgIC8vIFVzdWFsbHkgd2Ugc3luYyB0aGUgXCJ2YWx1ZVwiIGluIHRoZSBcImlucHV0XCIgZXZlbnQsIGJ1dCBhcyBhIHdvcmthcm91bmQgd2Ugbm93IHN5bmNcbiAgICAgICAgICAvLyB0aGUgdmFsdWUgaW4gdGhlIFwiY2hhbmdlXCIgZXZlbnQuXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX2ZvdW5kYXRpb24uZ2V0VmFsdWUoKTtcbiAgICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQodGhpcy52YWx1ZSEpO1xuICAgICAgICB9LFxuICAgIHNldFRodW1iQ29udGFpbmVyU3R5bGVQcm9wZXJ0eTpcbiAgICAgICAgKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLl90aHVtYkNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgIHNldFRyYWNrU3R5bGVQcm9wZXJ0eTpcbiAgICAgICAgKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLl90cmFjay5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgIHNldE1hcmtlclZhbHVlOlxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gTWFyayB0aGUgY29tcG9uZW50IGZvciBjaGVjayBhcyB0aGUgdGh1bWIgbGFiZWwgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQuXG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sXG4gICAgc2V0VHJhY2tNYXJrZXJzOlxuICAgICAgICAoc3RlcCwgbWF4LCBtaW4pID0+IHtcbiAgICAgICAgICB0aGlzLl90cmFja01hcmtlci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZCcsIHRoaXMuX2dldFRyYWNrTWFya2Vyc0JhY2tncm91bmQobWluLCBtYXgsIHN0ZXApKTtcbiAgICAgICAgfSxcbiAgICBpc1JUTDogKCkgPT4gdGhpcy5faXNSdGwoKSxcbiAgfTtcblxuICAvKiogSW5zdGFuY2Ugb2YgdGhlIE1EQyBzbGlkZXIgZm91bmRhdGlvbiBmb3IgdGhpcyBzbGlkZXIuICovXG4gIHByaXZhdGUgX2ZvdW5kYXRpb24gPSBuZXcgTURDU2xpZGVyRm91bmRhdGlvbih0aGlzLl9zbGlkZXJBZGFwdGVyKTtcblxuICAvKiogV2hldGhlciB0aGUgTURDIGZvdW5kYXRpb24gaGFzIGJlZW4gaW5pdGlhbGl6ZWQuICovXG4gIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKiogRnVuY3Rpb24gdGhhdCBub3RpZmllcyB0aGUgY29udHJvbCB2YWx1ZSBhY2Nlc3NvciBhYm91dCBhIHZhbHVlIGNoYW5nZS4gKi9cbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRoZSBEaXJlY3Rpb25hbGl0eSBjaGFuZ2UgRXZlbnRFbWl0dGVyLiAqL1xuICBwcml2YXRlIF9kaXJDaGFuZ2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgbWFya3MgdGhlIHNsaWRlciBhcyB0b3VjaGVkLiBSZWdpc3RlcmVkIHZpYSBcInJlZ2lzdGVyT25Ub3VjaFwiLiAqL1xuICBfbWFya0FzVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cbiAgQFZpZXdDaGlsZCgndGh1bWJDb250YWluZXInKSBfdGh1bWJDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd0cmFjaycpIF90cmFjazogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3BpblZhbHVlTWFya2VyJykgX3BpblZhbHVlTWFya2VyOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndHJhY2tNYXJrZXInKSBfdHJhY2tNYXJrZXI6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHRhYkluZGV4OiBzdHJpbmcsXG4gICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHVibGljIF9hbmltYXRpb25Nb2RlPzogc3RyaW5nKSB7XG4gICAgdGhpcy50YWJJbmRleCA9IHBhcnNlSW50KHRhYkluZGV4KSB8fCAwO1xuXG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgdGhpcy5fZGlyQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5fZGlyLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyBJbiBjYXNlIHRoZSBkaXJlY3Rpb25hbGl0eSBjaGFuZ2VzLCB3ZSBuZWVkIHRvIHJlZnJlc2ggdGhlIHJlbmRlcmVkIE1EQyBzbGlkZXIuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIHdhaXQgdW50aWwgdGhlIHBhZ2UgYWN0dWFsbHkgdXBkYXRlZCBhcyBvdGhlcndpc2UgdGhlXG4gICAgICAgIC8vIGNsaWVudCByZWN0YW5nbGUgd291bGRuJ3QgcmVmbGVjdCB0aGUgbmV3IGRpcmVjdGlvbmFsaXR5LlxuICAgICAgICAvLyBUT0RPKGRldnZlcnNpb24pOiBpZGVhbGx5IHRoZSBNREMgc2xpZGVyIHdvdWxkIGp1c3QgY29tcHV0ZSBkaW1lbnNpb25zIHNpbWlsYXJseVxuICAgICAgICAvLyB0byB0aGUgc3RhbmRhcmQgTWF0ZXJpYWwgc2xpZGVyIG9uIFwibW91c2VlbnRlclwiLlxuICAgICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9mb3VuZGF0aW9uLmxheW91dCgpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyBUaGUgTURDIHNsaWRlciBmb3VuZGF0aW9uIGFjY2Vzc2VzIERPTSBnbG9iYWxzLCBzbyB3ZSBjYW5ub3QgaW5pdGlhbGl6ZSB0aGVcbiAgICAgIC8vIGZvdW5kYXRpb24gb24gdGhlIHNlcnZlci4gVGhlIGZvdW5kYXRpb24gd291bGQgYmUgbmVlZGVkIHRvIG1vdmUgdGhlIHRodW1iXG4gICAgICAvLyB0byB0aGUgcHJvcGVyIHBvc2l0aW9uIGFuZCB0byByZW5kZXIgdGhlIHRpY2tzLlxuICAgICAgdGhpcy5fZm91bmRhdGlvbi5pbml0KCk7XG5cbiAgICAgIC8vIFRoZSBzdGFuZGFyZCBBbmd1bGFyIE1hdGVyaWFsIHNsaWRlciBpcyBhbHdheXMgdXNpbmcgZGlzY3JldGUgdmFsdWVzLiBXZSBhbHdheXNcbiAgICAgIC8vIHdhbnQgdG8gZW5hYmxlIGRpc2NyZXRlIHZhbHVlcyBhbmQgc3VwcG9ydCB0aWNrcywgYnV0IHdhbnQgdG8gc3RpbGwgcHJvdmlkZVxuICAgICAgLy8gbm9uLWRpc2NyZXRlIHNsaWRlciB2aXN1YWwgbG9va3MgaWYgdGh1bWIgbGFiZWwgaXMgZGlzYWJsZWQuXG4gICAgICAvLyBUT0RPKGRldnZlcnNpb24pOiBjaGVjayBpZiB3ZSBjYW4gZ2V0IGEgcHVibGljIEFQSSBmb3IgdGhpcy5cbiAgICAgIC8vIFRyYWNrZWQgd2l0aDogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvaXNzdWVzLzUwMjBcbiAgICAgICh0aGlzLl9mb3VuZGF0aW9uIGFzIGFueSkuaXNEaXNjcmV0ZV8gPSB0cnVlO1xuXG4gICAgICAvLyBUaGVzZSBiaW5kaW5ncyBjYW5ub3QgYmUgc3luY2VkIGluIHRoZSBmb3VuZGF0aW9uLCBhcyB0aGUgZm91bmRhdGlvbiBpcyBub3RcbiAgICAgIC8vIGluaXRpYWxpemVkIGFuZCB0aGV5IGNhdXNlIERPTSBnbG9iYWxzIHRvIGJlIGFjY2Vzc2VkICh0byBtb3ZlIHRoZSB0aHVtYilcbiAgICAgIHRoaXMuX3N5bmNTdGVwKCk7XG4gICAgICB0aGlzLl9zeW5jTWF4KCk7XG4gICAgICB0aGlzLl9zeW5jTWluKCk7XG5cbiAgICAgIC8vIE5vdGUgdGhhdCBcInZhbHVlXCIgbmVlZHMgdG8gYmUgc3luY2VkIGFmdGVyIFwibWF4XCIgYW5kIFwibWluXCIgYmVjYXVzZSBvdGhlcndpc2VcbiAgICAgIC8vIHRoZSB2YWx1ZSB3aWxsIGJlIGNsYW1wZWQgYnkgdGhlIE1EQyBmb3VuZGF0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5fc3luY1ZhbHVlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3luY0Rpc2FibGVkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXNbJ3N0ZXAnXSkge1xuICAgICAgdGhpcy5fc3luY1N0ZXAoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ21heCddKSB7XG4gICAgICB0aGlzLl9zeW5jTWF4KCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydtaW4nXSkge1xuICAgICAgdGhpcy5fc3luY01pbigpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXSkge1xuICAgICAgdGhpcy5fc3luY0Rpc2FibGVkKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWyd2YWx1ZSddKSB7XG4gICAgICB0aGlzLl9zeW5jVmFsdWUoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3RpY2tJbnRlcnZhbCddKSB7XG4gICAgICB0aGlzLl9yZWZyZXNoVHJhY2tNYXJrZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGlyQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gVGhlIGZvdW5kYXRpb24gY2Fubm90IGJlIGRlc3Ryb3llZCBvbiB0aGUgc2VydmVyLCBhcyB0aGUgZm91bmRhdGlvblxuICAgIC8vIGhhcyBub3QgYmUgaW5pdGlhbGl6ZWQgb24gdGhlIHNlcnZlci5cbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9mb3VuZGF0aW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgc2xpZGVyLiAqL1xuICBmb2N1cyhvcHRpb25zPzogRm9jdXNPcHRpb25zKSB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqIEJsdXJzIHRoZSBzbGlkZXIuICovXG4gIGJsdXIoKSB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBkaXNwbGF5IHRleHQgb2YgdGhlIGN1cnJlbnQgdmFsdWUuICovXG4gIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheVdpdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlXaXRoKHRoaXMudmFsdWUhKS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZSEudG9TdHJpbmcoKSB8fCAnMCc7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIHNsaWRlciBjaGFuZ2Ugb2JqZWN0IGZyb20gdGhlIHNwZWNpZmllZCB2YWx1ZS4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQ2hhbmdlRXZlbnQobmV3VmFsdWU6IG51bWJlcik6IE1hdFNsaWRlckNoYW5nZSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTWF0U2xpZGVyQ2hhbmdlKCk7XG4gICAgZXZlbnQuc291cmNlID0gdGhpcztcbiAgICBldmVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhIGNoYW5nZSBldmVudCBhbmQgbm90aWZpZXMgdGhlIGNvbnRyb2wgdmFsdWUgYWNjZXNzb3IuICovXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudChuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbihuZXdWYWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX2NyZWF0ZUNoYW5nZUV2ZW50KG5ld1ZhbHVlKSk7XG4gIH1cblxuICAvKiogQ29tcHV0ZXMgdGhlIENTUyBiYWNrZ3JvdW5kIHZhbHVlIGZvciB0aGUgdHJhY2sgbWFya2VycyAoYWthIHRpY2tzKS4gKi9cbiAgcHJpdmF0ZSBfZ2V0VHJhY2tNYXJrZXJzQmFja2dyb3VuZChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHN0ZXA6IG51bWJlcikge1xuICAgIGlmICghdGhpcy50aWNrSW50ZXJ2YWwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXJXaWR0aCA9IGAke1RJQ0tfTUFSS0VSX1NJWkV9cHhgO1xuICAgIGNvbnN0IG1hcmtlckJhY2tncm91bmQgPVxuICAgICAgICBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgJHttYXJrZXJXaWR0aH0sIHRyYW5zcGFyZW50IDApYDtcblxuICAgIGlmICh0aGlzLnRpY2tJbnRlcnZhbCA9PT0gJ2F1dG8nKSB7XG4gICAgICBjb25zdCB0cmFja1NpemUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICBjb25zdCBwaXhlbHNQZXJTdGVwID0gdHJhY2tTaXplICogc3RlcCAvIChtYXggLSBtaW4pO1xuICAgICAgY29uc3Qgc3RlcHNQZXJUaWNrID0gTWF0aC5jZWlsKE1JTl9BVVRPX1RJQ0tfU0VQQVJBVElPTiAvIHBpeGVsc1BlclN0ZXApO1xuICAgICAgY29uc3QgcGl4ZWxzUGVyVGljayA9IHN0ZXBzUGVyVGljayAqIHN0ZXA7XG4gICAgICByZXR1cm4gYCR7bWFya2VyQmFja2dyb3VuZH0gMCBjZW50ZXIgLyAke3BpeGVsc1BlclRpY2t9cHggMTAwJSByZXBlYXQteGA7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBjYWxjdWxhdGlvbiBpbiBjc3MgZm9yIGJldHRlciByb3VuZGluZy9zdWJwaXhlbCBiZWhhdmlvclxuICAgIGNvbnN0IG1hcmtlckFtb3VudCA9IGAoKCgke21heH0gLSAke21pbn0pIC8gJHtzdGVwfSkgLyAke3RoaXMudGlja0ludGVydmFsfSlgO1xuICAgIGNvbnN0IG1hcmtlckJrZ2RMYXlvdXQgPVxuICAgICAgICBgMCBjZW50ZXIgLyBjYWxjKCgxMDAlIC0gJHttYXJrZXJXaWR0aH0pIC8gJHttYXJrZXJBbW91bnR9KSAxMDAlIHJlcGVhdC14YDtcbiAgICByZXR1cm4gYCR7bWFya2VyQmFja2dyb3VuZH0gJHttYXJrZXJCa2dkTGF5b3V0fWA7XG4gIH1cblxuICAvKiogTWV0aG9kIHRoYXQgZW5zdXJlcyB0aGF0IHRyYWNrIG1hcmtlcnMgYXJlIHJlZnJlc2hlZC4gKi9cbiAgcHJpdmF0ZSBfcmVmcmVzaFRyYWNrTWFya2VycygpIHtcbiAgICAvLyBNREMgb25seSBjaGVja3Mgd2hldGhlciB0aGUgc2xpZGVyIGhhcyBtYXJrZXJzIG9uY2Ugb24gaW5pdCBieSBsb29raW5nIGZvciB0aGVcbiAgICAvLyBgbWRjLXNsaWRlci0tZGlzcGxheS1tYXJrZXJzYCBjbGFzcyBpbiB0aGUgRE9NLCB3aGVyZWFzIHdlIHN1cHBvcnQgY2hhbmdpbmcgYW5kIGhpZGluZ1xuICAgIC8vIHRoZSBtYXJrZXJzIGR5bmFtaWNhbGx5LiBUaGlzIGlzIGEgd29ya2Fyb3VuZCB1bnRpbCB3ZSBjYW4gZ2V0IGEgcHVibGljIEFQSSBmb3IgaXQuIFNlZTpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9pc3N1ZXMvNTAyMFxuICAgICh0aGlzLl9mb3VuZGF0aW9uIGFzIGFueSkuaGFzVHJhY2tNYXJrZXJfID0gdGhpcy50aWNrSW50ZXJ2YWwgIT09IDA7XG4gICAgdGhpcy5fZm91bmRhdGlvbi5zZXR1cFRyYWNrTWFya2VyKCk7XG4gIH1cblxuICAvKiogU3luY3MgdGhlIFwic3RlcFwiIGlucHV0IHZhbHVlIHdpdGggdGhlIE1EQyBmb3VuZGF0aW9uLiAqL1xuICBwcml2YXRlIF9zeW5jU3RlcCgpIHtcbiAgICB0aGlzLl9mb3VuZGF0aW9uLnNldFN0ZXAodGhpcy5zdGVwKTtcbiAgfVxuXG4gIC8qKiBTeW5jcyB0aGUgXCJtYXhcIiBpbnB1dCB2YWx1ZSB3aXRoIHRoZSBNREMgZm91bmRhdGlvbi4gKi9cbiAgcHJpdmF0ZSBfc3luY01heCgpIHtcbiAgICB0aGlzLl9mb3VuZGF0aW9uLnNldE1heCh0aGlzLm1heCk7XG4gIH1cblxuICAvKiogU3luY3MgdGhlIFwibWluXCIgaW5wdXQgdmFsdWUgd2l0aCB0aGUgTURDIGZvdW5kYXRpb24uICovXG4gIHByaXZhdGUgX3N5bmNNaW4oKSB7XG4gICAgdGhpcy5fZm91bmRhdGlvbi5zZXRNaW4odGhpcy5taW4pO1xuICB9XG5cbiAgLyoqIFN5bmNzIHRoZSBcInZhbHVlXCIgaW5wdXQgYmluZGluZyB3aXRoIHRoZSBNREMgZm91bmRhdGlvbi4gKi9cbiAgcHJpdmF0ZSBfc3luY1ZhbHVlKCkge1xuICAgIHRoaXMuX2ZvdW5kYXRpb24uc2V0VmFsdWUodGhpcy52YWx1ZSEpO1xuICB9XG5cbiAgLyoqIFN5bmNzIHRoZSBcImRpc2FibGVkXCIgaW5wdXQgdmFsdWUgd2l0aCB0aGUgTURDIGZvdW5kYXRpb24uICovXG4gIHByaXZhdGUgX3N5bmNEaXNhYmxlZCgpIHtcbiAgICB0aGlzLl9mb3VuZGF0aW9uLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyBkaXNwbGF5ZWQgaW4gUlRMLW1vZGUuICovXG4gIF9pc1J0bCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyICYmIHRoaXMuX2Rpci52YWx1ZSA9PT0gJ3J0bCc7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIGhhcyBjaGFuZ2VkLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMuX21hcmtBc1RvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9zeW5jRGlzYWJsZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBtb2RlbCB2YWx1ZS5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fc3luY1ZhbHVlKCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWluOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92YWx1ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGVwOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RpY2tJbnRlcnZhbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90aHVtYkxhYmVsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19