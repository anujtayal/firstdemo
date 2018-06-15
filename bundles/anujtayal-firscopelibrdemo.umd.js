(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@anujtayal/firscopelibrdemo', ['exports', '@angular/core'], factory) :
    (factory((global.anujtayal = global.anujtayal || {}, global.anujtayal.firscopelibrdemo = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FirscopelibrdemoService = (function () {
        function FirscopelibrdemoService() {
        }
        FirscopelibrdemoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        FirscopelibrdemoService.ctorParameters = function () { return []; };
        /** @nocollapse */ FirscopelibrdemoService.ngInjectableDef = i0.defineInjectable({ factory: function FirscopelibrdemoService_Factory() { return new FirscopelibrdemoService(); }, token: FirscopelibrdemoService, providedIn: "root" });
        return FirscopelibrdemoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FirscopelibrdemoComponent = (function () {
        function FirscopelibrdemoComponent() {
        }
        /**
         * @return {?}
         */
        FirscopelibrdemoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FirscopelibrdemoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-firscopelibrdemo',
                        template: "\n    <p>\n      firscopelibrdemo works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        FirscopelibrdemoComponent.ctorParameters = function () { return []; };
        return FirscopelibrdemoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FirscopelibrdemoModule = (function () {
        function FirscopelibrdemoModule() {
        }
        FirscopelibrdemoModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [FirscopelibrdemoComponent],
                        exports: [FirscopelibrdemoComponent]
                    },] },
        ];
        return FirscopelibrdemoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.FirscopelibrdemoService = FirscopelibrdemoService;
    exports.FirscopelibrdemoComponent = FirscopelibrdemoComponent;
    exports.FirscopelibrdemoModule = FirscopelibrdemoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW51anRheWFsLWZpcnNjb3BlbGlicmRlbW8udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYW51anRheWFsL2ZpcnNjb3BlbGlicmRlbW8vbGliL2ZpcnNjb3BlbGlicmRlbW8uc2VydmljZS50cyIsIm5nOi8vQGFudWp0YXlhbC9maXJzY29wZWxpYnJkZW1vL2xpYi9maXJzY29wZWxpYnJkZW1vLmNvbXBvbmVudC50cyIsIm5nOi8vQGFudWp0YXlhbC9maXJzY29wZWxpYnJkZW1vL2xpYi9maXJzY29wZWxpYnJkZW1vLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpcnNjb3BlbGlicmRlbW9TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWZpcnNjb3BlbGlicmRlbW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgZmlyc2NvcGVsaWJyZGVtbyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRmlyc2NvcGVsaWJyZGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlyc2NvcGVsaWJyZGVtb0NvbXBvbmVudCB9IGZyb20gJy4vZmlyc2NvcGVsaWJyZGVtby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ZpcnNjb3BlbGlicmRlbW9Db21wb25lbnRdLFxuICBleHBvcnRzOiBbRmlyc2NvcGVsaWJyZGVtb0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRmlyc2NvcGVsaWJyZGVtb01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3NDQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQiw0Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxRQUFRLEVBQUUsd0RBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7d0NBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDckM7O3FDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9