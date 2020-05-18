/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __awaiter } from "tslib";
import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/** Harness for interacting with a MDC-based mat-menu in tests. */
let MatMenuHarness = /** @class */ (() => {
    class MatMenuHarness extends ComponentHarness {
        // TODO: potentially extend MatButtonHarness
        /**
         * Gets a `HarnessPredicate` that can be used to search for a menu with specific attributes.
         * @param options Options for narrowing the search:
         *   - `selector` finds a menu whose host element matches the given selector.
         *   - `label` finds a menu with specific label text.
         * @return a `HarnessPredicate` configured with the given options.
         */
        static with(options = {}) {
            return new HarnessPredicate(MatMenuHarness, options)
                .addOption('triggerText', options.triggerText, (harness, text) => HarnessPredicate.stringMatches(harness.getTriggerText(), text));
        }
        /** Gets a boolean promise indicating if the menu is disabled. */
        isDisabled() {
            return __awaiter(this, void 0, void 0, function* () {
                const disabled = (yield this.host()).getAttribute('disabled');
                return coerceBooleanProperty(yield disabled);
            });
        }
        isOpen() {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
        getTriggerText() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield this.host()).text();
            });
        }
        /** Focuses the menu and returns a void promise that indicates when the action is complete. */
        focus() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield this.host()).focus();
            });
        }
        /** Blurs the menu and returns a void promise that indicates when the action is complete. */
        blur() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield this.host()).blur();
            });
        }
        open() {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
        close() {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
        getItems(filters = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
        clickItem(filter, ...filters) {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
    }
    MatMenuHarness.hostSelector = '.mat-menu-trigger';
    return MatMenuHarness;
})();
export { MatMenuHarness };
/** Harness for interacting with a standard mat-menu in tests. */
let MatMenuItemHarness = /** @class */ (() => {
    class MatMenuItemHarness extends ComponentHarness {
        /**
         * Gets a `HarnessPredicate` that can be used to search for a menu with specific attributes.
         * @param options Options for narrowing the search:
         *   - `selector` finds a menu item whose host element matches the given selector.
         *   - `label` finds a menu item with specific label text.
         * @return a `HarnessPredicate` configured with the given options.
         */
        static with(options = {}) {
            return new HarnessPredicate(MatMenuItemHarness, options)
                .addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text))
                .addOption('hasSubmenu', options.hasSubmenu, (harness, hasSubmenu) => __awaiter(this, void 0, void 0, function* () { return (yield harness.hasSubmenu()) === hasSubmenu; }));
        }
        /** Gets a boolean promise indicating if the menu is disabled. */
        isDisabled() {
            return __awaiter(this, void 0, void 0, function* () {
                const disabled = (yield this.host()).getAttribute('disabled');
                return coerceBooleanProperty(yield disabled);
            });
        }
        getText() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield this.host()).text();
            });
        }
        /** Focuses the menu and returns a void promise that indicates when the action is complete. */
        focus() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield this.host()).focus();
            });
        }
        /** Blurs the menu and returns a void promise that indicates when the action is complete. */
        blur() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield this.host()).blur();
            });
        }
        click() {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
        hasSubmenu() {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
        getSubmenu() {
            return __awaiter(this, void 0, void 0, function* () {
                throw Error('not implemented');
            });
        }
    }
    MatMenuItemHarness.hostSelector = '.mat-menu-item';
    return MatMenuItemHarness;
})();
export { MatMenuItemHarness };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1oYXJuZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtbWVudS90ZXN0aW5nL21lbnUtaGFybmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFNNUQsa0VBQWtFO0FBQ2xFO0lBQUEsTUFBYSxjQUFlLFNBQVEsZ0JBQWdCO1FBR2xELDRDQUE0QztRQUU1Qzs7Ozs7O1dBTUc7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQThCLEVBQUU7WUFDMUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7aUJBQy9DLFNBQVMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFDekMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztRQUVELGlFQUFpRTtRQUMzRCxVQUFVOztnQkFDZCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5RCxPQUFPLHFCQUFxQixDQUFDLE1BQU0sUUFBUSxDQUFDLENBQUM7WUFDL0MsQ0FBQztTQUFBO1FBRUssTUFBTTs7Z0JBQ1YsTUFBTSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNqQyxDQUFDO1NBQUE7UUFFSyxjQUFjOztnQkFDbEIsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFD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QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnRIYXJuZXNzLCBIYXJuZXNzUHJlZGljYXRlfSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIE1lbnVIYXJuZXNzRmlsdGVycyxcbiAgTWVudUl0ZW1IYXJuZXNzRmlsdGVyc1xufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51L3Rlc3RpbmcnO1xuXG4vKiogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIE1EQy1iYXNlZCBtYXQtbWVudSBpbiB0ZXN0cy4gKi9cbmV4cG9ydCBjbGFzcyBNYXRNZW51SGFybmVzcyBleHRlbmRzIENvbXBvbmVudEhhcm5lc3Mge1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gJy5tYXQtbWVudS10cmlnZ2VyJztcblxuICAvLyBUT0RPOiBwb3RlbnRpYWxseSBleHRlbmQgTWF0QnV0dG9uSGFybmVzc1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBhIG1lbnUgd2l0aCBzcGVjaWZpYyBhdHRyaWJ1dGVzLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBuYXJyb3dpbmcgdGhlIHNlYXJjaDpcbiAgICogICAtIGBzZWxlY3RvcmAgZmluZHMgYSBtZW51IHdob3NlIGhvc3QgZWxlbWVudCBtYXRjaGVzIHRoZSBnaXZlbiBzZWxlY3Rvci5cbiAgICogICAtIGBsYWJlbGAgZmluZHMgYSBtZW51IHdpdGggc3BlY2lmaWMgbGFiZWwgdGV4dC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aChvcHRpb25zOiBNZW51SGFybmVzc0ZpbHRlcnMgPSB7fSk6IEhhcm5lc3NQcmVkaWNhdGU8TWF0TWVudUhhcm5lc3M+IHtcbiAgICByZXR1cm4gbmV3IEhhcm5lc3NQcmVkaWNhdGUoTWF0TWVudUhhcm5lc3MsIG9wdGlvbnMpXG4gICAgICAgIC5hZGRPcHRpb24oJ3RyaWdnZXJUZXh0Jywgb3B0aW9ucy50cmlnZ2VyVGV4dCxcbiAgICAgICAgICAgIChoYXJuZXNzLCB0ZXh0KSA9PiBIYXJuZXNzUHJlZGljYXRlLnN0cmluZ01hdGNoZXMoaGFybmVzcy5nZXRUcmlnZ2VyVGV4dCgpLCB0ZXh0KSk7XG4gIH1cblxuICAvKiogR2V0cyBhIGJvb2xlYW4gcHJvbWlzZSBpbmRpY2F0aW5nIGlmIHRoZSBtZW51IGlzIGRpc2FibGVkLiAqL1xuICBhc3luYyBpc0Rpc2FibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGRpc2FibGVkID0gKGF3YWl0IHRoaXMuaG9zdCgpKS5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgcmV0dXJuIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShhd2FpdCBkaXNhYmxlZCk7XG4gIH1cblxuICBhc3luYyBpc09wZW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdGhyb3cgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgYXN5bmMgZ2V0VHJpZ2dlclRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS50ZXh0KCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgbWVudSBhbmQgcmV0dXJucyBhIHZvaWQgcHJvbWlzZSB0aGF0IGluZGljYXRlcyB3aGVuIHRoZSBhY3Rpb24gaXMgY29tcGxldGUuICovXG4gIGFzeW5jIGZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogQmx1cnMgdGhlIG1lbnUgYW5kIHJldHVybnMgYSB2b2lkIHByb21pc2UgdGhhdCBpbmRpY2F0ZXMgd2hlbiB0aGUgYWN0aW9uIGlzIGNvbXBsZXRlLiAqL1xuICBhc3luYyBibHVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLmJsdXIoKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhyb3cgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhyb3cgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgYXN5bmMgZ2V0SXRlbXMoZmlsdGVyczogT21pdDxNZW51SXRlbUhhcm5lc3NGaWx0ZXJzLCAnYW5jZXN0b3InPiA9IHt9KTpcbiAgICAgIFByb21pc2U8TWF0TWVudUl0ZW1IYXJuZXNzW10+IHtcbiAgICB0aHJvdyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gIH1cblxuICBhc3luYyBjbGlja0l0ZW0oZmlsdGVyOiBPbWl0PE1lbnVJdGVtSGFybmVzc0ZpbHRlcnMsICdhbmNlc3Rvcic+LFxuICAgICAgICAgICAgICAgICAgLi4uZmlsdGVyczogT21pdDxNZW51SXRlbUhhcm5lc3NGaWx0ZXJzLCAnYW5jZXN0b3InPltdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhyb3cgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG59XG5cblxuLyoqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYSBzdGFuZGFyZCBtYXQtbWVudSBpbiB0ZXN0cy4gKi9cbmV4cG9ydCBjbGFzcyBNYXRNZW51SXRlbUhhcm5lc3MgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzIHtcbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9ICcubWF0LW1lbnUtaXRlbSc7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgbWVudSB3aXRoIHNwZWNpZmljIGF0dHJpYnV0ZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIG5hcnJvd2luZyB0aGUgc2VhcmNoOlxuICAgKiAgIC0gYHNlbGVjdG9yYCBmaW5kcyBhIG1lbnUgaXRlbSB3aG9zZSBob3N0IGVsZW1lbnQgbWF0Y2hlcyB0aGUgZ2l2ZW4gc2VsZWN0b3IuXG4gICAqICAgLSBgbGFiZWxgIGZpbmRzIGEgbWVudSBpdGVtIHdpdGggc3BlY2lmaWMgbGFiZWwgdGV4dC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aChvcHRpb25zOiBNZW51SXRlbUhhcm5lc3NGaWx0ZXJzID0ge30pOiBIYXJuZXNzUHJlZGljYXRlPE1hdE1lbnVJdGVtSGFybmVzcz4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShNYXRNZW51SXRlbUhhcm5lc3MsIG9wdGlvbnMpXG4gICAgICAgIC5hZGRPcHRpb24oJ3RleHQnLCBvcHRpb25zLnRleHQsXG4gICAgICAgICAgICAoaGFybmVzcywgdGV4dCkgPT4gSGFybmVzc1ByZWRpY2F0ZS5zdHJpbmdNYXRjaGVzKGhhcm5lc3MuZ2V0VGV4dCgpLCB0ZXh0KSlcbiAgICAgICAgLmFkZE9wdGlvbignaGFzU3VibWVudScsIG9wdGlvbnMuaGFzU3VibWVudSxcbiAgICAgICAgICAgIGFzeW5jIChoYXJuZXNzLCBoYXNTdWJtZW51KSA9PiAoYXdhaXQgaGFybmVzcy5oYXNTdWJtZW51KCkpID09PSBoYXNTdWJtZW51KTtcbiAgfVxuXG4gIC8qKiBHZXRzIGEgYm9vbGVhbiBwcm9taXNlIGluZGljYXRpbmcgaWYgdGhlIG1lbnUgaXMgZGlzYWJsZWQuICovXG4gIGFzeW5jIGlzRGlzYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSAoYXdhaXQgdGhpcy5ob3N0KCkpLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICByZXR1cm4gY29lcmNlQm9vbGVhblByb3BlcnR5KGF3YWl0IGRpc2FibGVkKTtcbiAgfVxuXG4gIGFzeW5jIGdldFRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS50ZXh0KCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgbWVudSBhbmQgcmV0dXJucyBhIHZvaWQgcHJvbWlzZSB0aGF0IGluZGljYXRlcyB3aGVuIHRoZSBhY3Rpb24gaXMgY29tcGxldGUuICovXG4gIGFzeW5jIGZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogQmx1cnMgdGhlIG1lbnUgYW5kIHJldHVybnMgYSB2b2lkIHByb21pc2UgdGhhdCBpbmRpY2F0ZXMgd2hlbiB0aGUgYWN0aW9uIGlzIGNvbXBsZXRlLiAqL1xuICBhc3luYyBibHVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLmJsdXIoKTtcbiAgfVxuXG4gIGFzeW5jIGNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRocm93IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIGFzeW5jIGhhc1N1Ym1lbnUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdGhyb3cgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgYXN5bmMgZ2V0U3VibWVudSgpOiBQcm9taXNlPE1hdE1lbnVIYXJuZXNzIHwgbnVsbD4ge1xuICAgIHRocm93IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgfVxufVxuIl19