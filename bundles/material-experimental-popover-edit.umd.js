(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk-experimental/popover-edit')) :
    typeof define === 'function' && define.amd ? define('@angular/material-experimental/popover-edit', ['exports', '@angular/core', '@angular/cdk-experimental/popover-edit'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExperimental = global.ng.materialExperimental || {}, global.ng.materialExperimental.popoverEdit = {}), global.ng.core, global.ng.cdkExperimental.popoverEdit));
}(this, (function (exports, core, popoverEdit) { 'use strict';

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
     * A component that attaches to a form within the edit.
     * It coordinates the form state with the table-wide edit system and handles
     * closing the edit when the form is submitted or the user clicks
     * out.
     */
    var MatEditLens = /** @class */ (function (_super) {
        __extends(MatEditLens, _super);
        function MatEditLens() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MatEditLens;
    }(popoverEdit.CdkEditControl));
    MatEditLens.decorators = [
        { type: core.Directive, args: [{
                    selector: 'form[matEditLens]',
                    host: {
                        'class': 'mat-edit-lens',
                    },
                    inputs: [
                        'clickOutBehavior: matEditLensClickOutBehavior',
                        'preservedFormValue: matEditLensPreservedFormValue',
                        'ignoreSubmitUnlessValid: matEditLensIgnoreSubmitUnlessValid',
                    ],
                    outputs: ['preservedFormValueChange: matEditLensPreservedFormValueChange'],
                    providers: [popoverEdit.EditRef],
                },] }
    ];
    /** Reverts the form to its initial or previously submitted state on click. */
    var MatEditRevert = /** @class */ (function (_super) {
        __extends(MatEditRevert, _super);
        function MatEditRevert() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MatEditRevert;
    }(popoverEdit.CdkEditRevert));
    MatEditRevert.decorators = [
        { type: core.Directive, args: [{
                    selector: 'button[matEditRevert]',
                    host: {
                        'type': 'button',
                    }
                },] }
    ];
    /** Closes the lens on click. */
    var MatEditClose = /** @class */ (function (_super) {
        __extends(MatEditClose, _super);
        function MatEditClose() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MatEditClose;
    }(popoverEdit.CdkEditClose));
    MatEditClose.decorators = [
        { type: core.Directive, args: [{ selector: '[matEditClose]' },] }
    ];

    var POPOVER_EDIT_HOST_BINDINGS = {
        '[attr.tabindex]': 'disabled ? null : 0',
        'class': 'mat-popover-edit-cell',
        '[attr.aria-haspopup]': '!disabled',
    };
    var POPOVER_EDIT_INPUTS = [
        'template: matPopoverEdit',
        'context: matPopoverEditContext',
        'colspan: matPopoverEditColspan',
        'disabled: matPopoverEditDisabled',
    ];
    var EDIT_PANE_CLASS = 'mat-edit-pane';
    var MAT_ROW_HOVER_CLASS = 'mat-row-hover-content';
    var MAT_ROW_HOVER_RTL_CLASS = MAT_ROW_HOVER_CLASS + '-rtl';
    var MAT_ROW_HOVER_ANIMATE_CLASS = MAT_ROW_HOVER_CLASS + '-visible';
    var MAT_ROW_HOVER_CELL_CLASS = MAT_ROW_HOVER_CLASS + '-host-cell';
    /**
     * Attaches an ng-template to a cell and shows it when instructed to by the
     * EditEventDispatcher service.
     * Makes the cell focusable.
     */
    var MatPopoverEdit = /** @class */ (function (_super) {
        __extends(MatPopoverEdit, _super);
        function MatPopoverEdit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatPopoverEdit.prototype.panelClass = function () {
            return EDIT_PANE_CLASS;
        };
        return MatPopoverEdit;
    }(popoverEdit.CdkPopoverEdit));
    MatPopoverEdit.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matPopoverEdit]:not([matPopoverEditTabOut])',
                    host: POPOVER_EDIT_HOST_BINDINGS,
                    inputs: POPOVER_EDIT_INPUTS,
                },] }
    ];
    /**
     * Attaches an ng-template to a cell and shows it when instructed to by the
     * EditEventDispatcher service.
     * Makes the cell focusable.
     */
    var MatPopoverEditTabOut = /** @class */ (function (_super) {
        __extends(MatPopoverEditTabOut, _super);
        function MatPopoverEditTabOut() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatPopoverEditTabOut.prototype.panelClass = function () {
            return EDIT_PANE_CLASS;
        };
        return MatPopoverEditTabOut;
    }(popoverEdit.CdkPopoverEditTabOut));
    MatPopoverEditTabOut.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matPopoverEdit][matPopoverEditTabOut]',
                    host: POPOVER_EDIT_HOST_BINDINGS,
                    inputs: POPOVER_EDIT_INPUTS,
                },] }
    ];
    /**
     * A structural directive that shows its contents when the table row containing
     * it is hovered or when an element in the row has focus.
     */
    var MatRowHoverContent = /** @class */ (function (_super) {
        __extends(MatRowHoverContent, _super);
        function MatRowHoverContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatRowHoverContent.prototype.initElement = function (element) {
            _super.prototype.initElement.call(this, element);
            element.classList.add(MAT_ROW_HOVER_CLASS);
        };
        MatRowHoverContent.prototype.makeElementHiddenButFocusable = function (element) {
            element.classList.remove(MAT_ROW_HOVER_ANIMATE_CLASS);
        };
        MatRowHoverContent.prototype.makeElementVisible = function (element) {
            popoverEdit._closest(this.elementRef.nativeElement, popoverEdit._CELL_SELECTOR)
                .classList.add(MAT_ROW_HOVER_CELL_CLASS);
            if (this.services.directionality.value === 'rtl') {
                element.classList.add(MAT_ROW_HOVER_RTL_CLASS);
            }
            else {
                element.classList.remove(MAT_ROW_HOVER_RTL_CLASS);
            }
            element.classList.remove(MAT_ROW_HOVER_ANIMATE_CLASS);
            this.services.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    element.classList.add(MAT_ROW_HOVER_ANIMATE_CLASS);
                });
            });
        };
        return MatRowHoverContent;
    }(popoverEdit.CdkRowHoverContent));
    MatRowHoverContent.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matRowHoverContent]',
                },] }
    ];
    /**
     * Opens the closest edit popover to this element, whether it's associated with this exact
     * element or an ancestor element.
     */
    var MatEditOpen = /** @class */ (function (_super) {
        __extends(MatEditOpen, _super);
        function MatEditOpen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MatEditOpen;
    }(popoverEdit.CdkEditOpen));
    MatEditOpen.decorators = [
        { type: core.Directive, args: [{
                    selector: '[matEditOpen]',
                },] }
    ];

    var EXPORTED_DECLARATIONS = [
        MatPopoverEdit,
        MatPopoverEditTabOut,
        MatRowHoverContent,
        MatEditLens,
        MatEditRevert,
        MatEditClose,
        MatEditOpen
    ];
    var MatPopoverEditModule = /** @class */ (function () {
        function MatPopoverEditModule() {
        }
        return MatPopoverEditModule;
    }());
    MatPopoverEditModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        popoverEdit.CdkPopoverEditModule,
                    ],
                    exports: __spread(EXPORTED_DECLARATIONS, [
                        popoverEdit.CdkEditable,
                    ]),
                    declarations: EXPORTED_DECLARATIONS,
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

    exports.MatEditClose = MatEditClose;
    exports.MatEditLens = MatEditLens;
    exports.MatEditOpen = MatEditOpen;
    exports.MatEditRevert = MatEditRevert;
    exports.MatPopoverEdit = MatPopoverEdit;
    exports.MatPopoverEditModule = MatPopoverEditModule;
    exports.MatPopoverEditTabOut = MatPopoverEditTabOut;
    exports.MatRowHoverContent = MatRowHoverContent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-experimental-popover-edit.umd.js.map
