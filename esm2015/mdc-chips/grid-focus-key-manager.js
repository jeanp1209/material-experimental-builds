/**
 * @fileoverview added by tsickle
 * Generated from: src/material-experimental/mdc-chips/grid-focus-key-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { GridKeyManager } from './grid-key-manager';
/**
 * A version of GridKeyManager where the cells are HTMLElements, and focus()
 * is called on a cell when it becomes active.
 */
export class GridFocusKeyManager extends GridKeyManager {
    /**
     * @param {?} cell
     * @return {?}
     */
    setActiveCell(cell) {
        super.setActiveCell(cell);
        if (this.activeCell) {
            this.activeCell.focus();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1mb2N1cy1rZXktbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leHBlcmltZW50YWwvbWRjLWNoaXBzL2dyaWQtZm9jdXMta2V5LW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU1sRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBMkI7Ozs7O0lBY2xFLGFBQWEsQ0FBQyxJQUFTO1FBQ3JCLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtHcmlkS2V5TWFuYWdlcn0gZnJvbSAnLi9ncmlkLWtleS1tYW5hZ2VyJztcblxuLyoqXG4gKiBBIHZlcnNpb24gb2YgR3JpZEtleU1hbmFnZXIgd2hlcmUgdGhlIGNlbGxzIGFyZSBIVE1MRWxlbWVudHMsIGFuZCBmb2N1cygpXG4gKiBpcyBjYWxsZWQgb24gYSBjZWxsIHdoZW4gaXQgYmVjb21lcyBhY3RpdmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmlkRm9jdXNLZXlNYW5hZ2VyIGV4dGVuZHMgR3JpZEtleU1hbmFnZXI8SFRNTEVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBjZWxsIHRvIHRoZSBjZWxsIGF0IHRoZSBzcGVjaWZpZWRcbiAgICogaW5kaWNlcyBhbmQgZm9jdXNlcyB0aGUgbmV3bHkgYWN0aXZlIGNlbGwuXG4gICAqIEBwYXJhbSBjZWxsIFJvdyBhbmQgY29sdW1uIGluZGljZXMgb2YgdGhlIGNlbGwgdG8gYmUgc2V0IGFzIGFjdGl2ZS5cbiAgICovXG4gIHNldEFjdGl2ZUNlbGwoY2VsbDoge3JvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlcn0pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgY2VsbCB0byB0aGUgY2VsbCB0aGF0IGlzIHNwZWNpZmllZCBhbmQgZm9jdXNlcyBpdC5cbiAgICogQHBhcmFtIGNlbGwgQ2VsbCB0byBiZSBzZXQgYXMgYWN0aXZlLlxuICAgKi9cbiAgc2V0QWN0aXZlQ2VsbChjZWxsOiBIVE1MRWxlbWVudCk6IHZvaWQ7XG5cbiAgc2V0QWN0aXZlQ2VsbChjZWxsOiBhbnkpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRBY3RpdmVDZWxsKGNlbGwpO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlQ2VsbCkge1xuICAgICAgdGhpcy5hY3RpdmVDZWxsLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=