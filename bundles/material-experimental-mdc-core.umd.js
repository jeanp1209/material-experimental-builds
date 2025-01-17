(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/material-experimental/mdc-core', ['exports', '@angular/core', '@angular/common', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.mdcCore = {}), global.ng.core, global.ng.common, global.ng.material.core));
}(this, (function (exports, core, common, core$1) { 'use strict';

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

    /**
     * Component that is used to group instances of `mat-option`.
     */
    var MatOptgroup = /** @class */ (function (_super) {
        __extends(MatOptgroup, _super);
        function MatOptgroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MatOptgroup;
    }(core$1._MatOptgroupBase));
    MatOptgroup.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-optgroup',
                    exportAs: 'matOptgroup',
                    template: "<label\n  class=\"mat-mdc-optgroup-label\"\n  [class.mdc-list-item--disabled]=\"disabled\"\n  [id]=\"_labelId\">\n  <span class=\"mdc-list-item__text\">{{ label }} <ng-content></ng-content></span>\n</label>\n\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    inputs: ['disabled'],
                    host: {
                        'class': 'mat-mdc-optgroup',
                        'role': 'group',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-labelledby]': '_labelId',
                    },
                    providers: [
                        { provide: core$1.MAT_OPTGROUP, useExisting: MatOptgroup }
                    ],
                    styles: [".mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;height:48px}.mat-mdc-optgroup-label:focus{outline:none}[dir=rtl] .mat-mdc-optgroup-label,.mat-mdc-optgroup-label[dir=rtl]{padding-left:16px;padding-right:16px}\n"]
                },] }
    ];

    /**
     * Single option inside of a `<mat-select>` element.
     */
    var MatOption = /** @class */ (function (_super) {
        __extends(MatOption, _super);
        function MatOption(element, changeDetectorRef, parent, group) {
            return _super.call(this, element, changeDetectorRef, parent, group) || this;
        }
        return MatOption;
    }(core$1._MatOptionBase));
    MatOption.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-option',
                    exportAs: 'matOption',
                    host: {
                        'role': 'option',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[class.mdc-list-item--selected]': 'selected',
                        '[class.mat-mdc-option-multiple]': 'multiple',
                        '[class.mat-mdc-option-active]': 'active',
                        '[class.mdc-list-item--disabled]': 'disabled',
                        '[id]': 'id',
                        '[attr.aria-selected]': '_getAriaSelected()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '(click)': '_selectViaInteraction()',
                        '(keydown)': '_handleKeydown($event)',
                        'class': 'mat-mdc-option mat-mdc-focus-indicator',
                    },
                    template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-mdc-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mdc-list-item__text\"><ng-content></ng-content></span>\n\n<div class=\"mat-mdc-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option::after{display:inline-block;min-height:inherit;content:\"\"}.mat-mdc-option:not(.mdc-list-item--disabled){cursor:pointer}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-pseudo-checkbox{margin-right:16px}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox{margin-right:0;margin-left:16px}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-mdc-option .mat-mdc-option-ripple{opacity:.5}.cdk-high-contrast-active .mat-mdc-option-active::before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;border:solid 1px currentColor}\n"]
                },] }
    ];
    MatOption.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MAT_OPTION_PARENT_COMPONENT,] }] },
        { type: MatOptgroup, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.MAT_OPTGROUP,] }] }
    ]; };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MatOptionModule = /** @class */ (function () {
        function MatOptionModule() {
        }
        return MatOptionModule;
    }());
    MatOptionModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [core$1.MatRippleModule, common.CommonModule, core$1.MatPseudoCheckboxModule],
                    exports: [MatOption, MatOptgroup],
                    declarations: [MatOption, MatOptgroup]
                },] }
    ];

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'AnimationCurves', {
        enumerable: true,
        get: function () {
            return core$1.AnimationCurves;
        }
    });
    Object.defineProperty(exports, 'AnimationDurations', {
        enumerable: true,
        get: function () {
            return core$1.AnimationDurations;
        }
    });
    Object.defineProperty(exports, 'DateAdapter', {
        enumerable: true,
        get: function () {
            return core$1.DateAdapter;
        }
    });
    Object.defineProperty(exports, 'ErrorStateMatcher', {
        enumerable: true,
        get: function () {
            return core$1.ErrorStateMatcher;
        }
    });
    Object.defineProperty(exports, 'MATERIAL_SANITY_CHECKS', {
        enumerable: true,
        get: function () {
            return core$1.MATERIAL_SANITY_CHECKS;
        }
    });
    Object.defineProperty(exports, 'MAT_DATE_FORMATS', {
        enumerable: true,
        get: function () {
            return core$1.MAT_DATE_FORMATS;
        }
    });
    Object.defineProperty(exports, 'MAT_DATE_LOCALE', {
        enumerable: true,
        get: function () {
            return core$1.MAT_DATE_LOCALE;
        }
    });
    Object.defineProperty(exports, 'MAT_DATE_LOCALE_FACTORY', {
        enumerable: true,
        get: function () {
            return core$1.MAT_DATE_LOCALE_FACTORY;
        }
    });
    Object.defineProperty(exports, 'MAT_NATIVE_DATE_FORMATS', {
        enumerable: true,
        get: function () {
            return core$1.MAT_NATIVE_DATE_FORMATS;
        }
    });
    Object.defineProperty(exports, 'MAT_OPTGROUP', {
        enumerable: true,
        get: function () {
            return core$1.MAT_OPTGROUP;
        }
    });
    Object.defineProperty(exports, 'MAT_OPTION_PARENT_COMPONENT', {
        enumerable: true,
        get: function () {
            return core$1.MAT_OPTION_PARENT_COMPONENT;
        }
    });
    Object.defineProperty(exports, 'MAT_RIPPLE_GLOBAL_OPTIONS', {
        enumerable: true,
        get: function () {
            return core$1.MAT_RIPPLE_GLOBAL_OPTIONS;
        }
    });
    Object.defineProperty(exports, 'MatCommonModule', {
        enumerable: true,
        get: function () {
            return core$1.MatCommonModule;
        }
    });
    Object.defineProperty(exports, 'MatLine', {
        enumerable: true,
        get: function () {
            return core$1.MatLine;
        }
    });
    Object.defineProperty(exports, 'MatLineModule', {
        enumerable: true,
        get: function () {
            return core$1.MatLineModule;
        }
    });
    Object.defineProperty(exports, 'MatNativeDateModule', {
        enumerable: true,
        get: function () {
            return core$1.MatNativeDateModule;
        }
    });
    Object.defineProperty(exports, 'MatOptionSelectionChange', {
        enumerable: true,
        get: function () {
            return core$1.MatOptionSelectionChange;
        }
    });
    Object.defineProperty(exports, 'MatPseudoCheckbox', {
        enumerable: true,
        get: function () {
            return core$1.MatPseudoCheckbox;
        }
    });
    Object.defineProperty(exports, 'MatPseudoCheckboxModule', {
        enumerable: true,
        get: function () {
            return core$1.MatPseudoCheckboxModule;
        }
    });
    Object.defineProperty(exports, 'MatRipple', {
        enumerable: true,
        get: function () {
            return core$1.MatRipple;
        }
    });
    Object.defineProperty(exports, 'MatRippleModule', {
        enumerable: true,
        get: function () {
            return core$1.MatRippleModule;
        }
    });
    Object.defineProperty(exports, 'NativeDateAdapter', {
        enumerable: true,
        get: function () {
            return core$1.NativeDateAdapter;
        }
    });
    Object.defineProperty(exports, 'NativeDateModule', {
        enumerable: true,
        get: function () {
            return core$1.NativeDateModule;
        }
    });
    Object.defineProperty(exports, 'RippleRef', {
        enumerable: true,
        get: function () {
            return core$1.RippleRef;
        }
    });
    Object.defineProperty(exports, 'RippleRenderer', {
        enumerable: true,
        get: function () {
            return core$1.RippleRenderer;
        }
    });
    Object.defineProperty(exports, 'ShowOnDirtyErrorStateMatcher', {
        enumerable: true,
        get: function () {
            return core$1.ShowOnDirtyErrorStateMatcher;
        }
    });
    Object.defineProperty(exports, 'VERSION', {
        enumerable: true,
        get: function () {
            return core$1.VERSION;
        }
    });
    Object.defineProperty(exports, '_countGroupLabelsBeforeOption', {
        enumerable: true,
        get: function () {
            return core$1._countGroupLabelsBeforeOption;
        }
    });
    Object.defineProperty(exports, '_getOptionScrollPosition', {
        enumerable: true,
        get: function () {
            return core$1._getOptionScrollPosition;
        }
    });
    Object.defineProperty(exports, 'defaultRippleAnimationConfig', {
        enumerable: true,
        get: function () {
            return core$1.defaultRippleAnimationConfig;
        }
    });
    Object.defineProperty(exports, 'mixinColor', {
        enumerable: true,
        get: function () {
            return core$1.mixinColor;
        }
    });
    Object.defineProperty(exports, 'mixinDisableRipple', {
        enumerable: true,
        get: function () {
            return core$1.mixinDisableRipple;
        }
    });
    Object.defineProperty(exports, 'mixinDisabled', {
        enumerable: true,
        get: function () {
            return core$1.mixinDisabled;
        }
    });
    Object.defineProperty(exports, 'mixinErrorState', {
        enumerable: true,
        get: function () {
            return core$1.mixinErrorState;
        }
    });
    Object.defineProperty(exports, 'mixinInitialized', {
        enumerable: true,
        get: function () {
            return core$1.mixinInitialized;
        }
    });
    Object.defineProperty(exports, 'mixinTabIndex', {
        enumerable: true,
        get: function () {
            return core$1.mixinTabIndex;
        }
    });
    Object.defineProperty(exports, 'setLines', {
        enumerable: true,
        get: function () {
            return core$1.setLines;
        }
    });
    exports.MatOptgroup = MatOptgroup;
    exports.MatOption = MatOption;
    exports.MatOptionModule = MatOptionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-mdc-core.umd.js.map
