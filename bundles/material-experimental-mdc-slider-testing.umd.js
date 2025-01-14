(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/coercion'), require('@angular/cdk/testing')) :
    typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-slider/testing', ['exports', '@angular/cdk/coercion', '@angular/cdk/testing'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcSlider = global.ng.materialExperimental.mdcSlider || {}, global.ng.materialExperimental.mdcSlider.testing = {}), global.ng.cdk.coercion, global.ng.cdk.testing));
}(this, (function (exports, coercion, testing) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /** Harness for interacting with a MDC mat-slider in tests. */
    var MatSliderHarness = /** @class */ (function (_super) {
        __extends(MatSliderHarness, _super);
        function MatSliderHarness() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._textLabel = _this.locatorForOptional('.mdc-slider__pin-value-marker');
            _this._trackContainer = _this.locatorFor('.mdc-slider__track-container');
            return _this;
        }
        /**
         * Gets a `HarnessPredicate` that can be used to search for a mat-slider with
         * specific attributes.
         * @param options Options for narrowing the search:
         *   - `selector` finds a slider whose host element matches the given selector.
         *   - `id` finds a slider with specific id.
         * @return a `HarnessPredicate` configured with the given options.
         */
        MatSliderHarness.with = function (options) {
            if (options === void 0) { options = {}; }
            return new testing.HarnessPredicate(MatSliderHarness, options);
        };
        /** Gets the slider's id. */
        MatSliderHarness.prototype.getId = function () {
            return __awaiter(this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [4 /*yield*/, (_a.sent()).getProperty('id')];
                        case 2:
                            id = _a.sent();
                            // In case no id has been specified, the "id" property always returns
                            // an empty string. To make this method more explicit, we return null.
                            return [2 /*return*/, id !== '' ? id : null];
                    }
                });
            });
        };
        /**
         * Gets the current display value of the slider. Returns null if the thumb
         * label is disabled.
         */
        MatSliderHarness.prototype.getDisplayValue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var textLabelEl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this._textLabel()];
                        case 1:
                            textLabelEl = _a.sent();
                            return [2 /*return*/, textLabelEl ? textLabelEl.text() : null];
                    }
                });
            });
        };
        /** Gets the current percentage value of the slider. */
        MatSliderHarness.prototype.getPercentage = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this._calculatePercentage;
                            return [4 /*yield*/, this.getValue()];
                        case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                    }
                });
            });
        };
        /** Gets the current value of the slider. */
        MatSliderHarness.prototype.getValue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = coercion.coerceNumberProperty;
                            return [4 /*yield*/, this.host()];
                        case 1: return [4 /*yield*/, (_b.sent()).getAttribute('aria-valuenow')];
                        case 2: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    }
                });
            });
        };
        /** Gets the maximum value of the slider. */
        MatSliderHarness.prototype.getMaxValue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = coercion.coerceNumberProperty;
                            return [4 /*yield*/, this.host()];
                        case 1: return [4 /*yield*/, (_b.sent()).getAttribute('aria-valuemax')];
                        case 2: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    }
                });
            });
        };
        /** Gets the minimum value of the slider. */
        MatSliderHarness.prototype.getMinValue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = coercion.coerceNumberProperty;
                            return [4 /*yield*/, this.host()];
                        case 1: return [4 /*yield*/, (_b.sent()).getAttribute('aria-valuemin')];
                        case 2: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    }
                });
            });
        };
        /** Whether the slider is disabled. */
        MatSliderHarness.prototype.isDisabled = function () {
            return __awaiter(this, void 0, void 0, function () {
                var disabled, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1:
                            disabled = (_b.sent()).getAttribute('aria-disabled');
                            _a = coercion.coerceBooleanProperty;
                            return [4 /*yield*/, disabled];
                        case 2: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    }
                });
            });
        };
        /** Gets the orientation of the slider. */
        MatSliderHarness.prototype.getOrientation = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: 
                        // "aria-orientation" will always be set to "horizontal" for the MDC
                        // slider as there is no vertical slider support yet.
                        return [2 /*return*/, (_a.sent()).getAttribute('aria-orientation')];
                    }
                });
            });
        };
        /**
         * Sets the value of the slider by clicking on the slider track.
         *
         * Note that in rare cases the value cannot be set to the exact specified value. This
         * can happen if not every value of the slider maps to a single pixel that could be
         * clicked using mouse interaction. In such cases consider using the keyboard to
         * select the given value or expand the slider's size for a better user experience.
         */
        MatSliderHarness.prototype.setValue = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, sliderEl, trackContainer, percentage, width;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: 
                        // Need to wait for async tasks outside Angular to complete. This is necessary because
                        // whenever directionality changes, the slider updates the element dimensions in the next
                        // tick (in a timer outside of the NgZone). Since this method relies on the element
                        // dimensions to be updated, we wait for the delayed calculation task to complete.
                        return [4 /*yield*/, this.waitForTasksOutsideAngular()];
                        case 1:
                            // Need to wait for async tasks outside Angular to complete. This is necessary because
                            // whenever directionality changes, the slider updates the element dimensions in the next
                            // tick (in a timer outside of the NgZone). Since this method relies on the element
                            // dimensions to be updated, we wait for the delayed calculation task to complete.
                            _b.sent();
                            return [4 /*yield*/, Promise.all([this.host(), this._trackContainer()])];
                        case 2:
                            _a = __read.apply(void 0, [_b.sent(), 2]), sliderEl = _a[0], trackContainer = _a[1];
                            return [4 /*yield*/, this._calculatePercentage(value)];
                        case 3:
                            percentage = _b.sent();
                            return [4 /*yield*/, trackContainer.getDimensions()];
                        case 4:
                            width = (_b.sent()).width;
                            return [4 /*yield*/, sliderEl.hasClass('mat-slider-invert-mouse-coords')];
                        case 5:
                            // In case the slider is displayed in RTL mode, we need to invert the
                            // percentage so that the proper value is set.
                            if (_b.sent()) {
                                percentage = 1 - percentage;
                            }
                            // We need to round the new coordinates because creating fake DOM
                            // events will cause the coordinates to be rounded down.
                            return [4 /*yield*/, sliderEl.click(Math.round(width * percentage), 0)];
                        case 6:
                            // We need to round the new coordinates because creating fake DOM
                            // events will cause the coordinates to be rounded down.
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Focuses the slider and returns a void promise that indicates when the
         * action is complete.
         */
        MatSliderHarness.prototype.focus = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).focus()];
                    }
                });
            });
        };
        /**
         * Blurs the slider and returns a void promise that indicates when the
         * action is complete.
         */
        MatSliderHarness.prototype.blur = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).blur()];
                    }
                });
            });
        };
        /** Whether the slider is focused. */
        MatSliderHarness.prototype.isFocused = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.host()];
                        case 1: return [2 /*return*/, (_a.sent()).isFocused()];
                    }
                });
            });
        };
        /** Calculates the percentage of the given value. */
        MatSliderHarness.prototype._calculatePercentage = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, min, max;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Promise.all([this.getMinValue(), this.getMaxValue()])];
                        case 1:
                            _a = __read.apply(void 0, [_b.sent(), 2]), min = _a[0], max = _a[1];
                            return [2 /*return*/, (value - min) / (max - min)];
                    }
                });
            });
        };
        return MatSliderHarness;
    }(testing.ComponentHarness));
    MatSliderHarness.hostSelector = '.mat-mdc-slider';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    exports.MatSliderHarness = MatSliderHarness;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-slider-testing.umd.js.map
