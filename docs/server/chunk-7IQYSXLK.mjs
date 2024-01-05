import './polyfills.server.mjs';
import{A as te,B as ne,C as T,D as A,E as ie,F as re,M as oe,N as se,O as j,Q as ae,R as le,S as ue,V as de,Z as ce,a as $,aa as he,b as z,c as q,d as S,e as C,f as c,g as V,h as D,i as h,j as Z,k as X,l as Y,m as x,n as P,o as N,p as s,q as K,r as b,s as p,t as J,u as Q,v as g,w as m,x as k,y as ee,z as M}from"./chunk-WXZT6EO4.mjs";import{a as u,b as d}from"./chunk-KRLCULJA.mjs";var fe=(()=>{let e=class e{constructor(){this.SUB_20=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],this.SUB_100=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],this.POW_10=["Hundred","Thousand","Million","Billion"]}getSub1000(n,r){if(r>=100){let o=r%100;n.push(this.SUB_20[(r-o)/100],this.POW_10[0]),r=o}if(r>=20){let o=r%10;n.push(this.SUB_100[(r-o)/10]),r=o}r>0&&n.push(this.SUB_20[r])}numberToWords(n){if(n===0)return this.SUB_20[0];let r=[];for(let o=this.POW_10.length-1;n>=1e3;--o){let a=1e3**o;if(n>=a){let l=n%a;this.getSub1000(r,(n-l)/a),r.push(this.POW_10[o]),n=l}}return this.getSub1000(r,n),r.join(" ")}transform(n,...r){try{return this.numberToWords(parseInt(n))}catch{return""}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=Z({name:"numToWord",type:e,pure:!0,standalone:!0});let t=e;return t})();var Ve=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(s(P),s(x))},e.\u0275dir=h({type:e});let t=e;return t})(),Be=(()=>{let e=class e extends Ve{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Y(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[p]});let t=e;return t})(),De=new c("NgValueAccessor");var Re={provide:De,useExisting:S(()=>O),multi:!0};function He(){let t=j()?j().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Le=new c("CompositionEventMode"),O=(()=>{let e=class e extends Ve{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!He())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(s(P),s(x),s(Le,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&M("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[T([Re]),p]});let t=e;return t})();var We=new c("NgValidators"),$e=new c("NgAsyncValidators");function be(t){return t!=null}function Me(t){return ee(t)?$(t):t}function Ae(t){let e={};return t.forEach(i=>{e=i!=null?u(u({},e),i):e}),Object.keys(e).length===0?null:e}function Ee(t,e){return e.map(i=>i(t))}function ze(t){return!t.validate}function we(t){return t.map(e=>ze(e)?e:i=>e.validate(i))}function qe(t){if(!t)return null;let e=t.filter(be);return e.length==0?null:function(i){return Ae(Ee(i,e))}}function Fe(t){return t!=null?qe(we(t)):null}function Ze(t){if(!t)return null;let e=t.filter(be);return e.length==0?null:function(i){let n=Ee(i,e).map(Me);return q(n).pipe(z(Ae))}}function Oe(t){return t!=null?Ze(we(t)):null}function pe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Xe(t){return t._rawValidators}function Ye(t){return t._rawAsyncValidators}function U(t){return t?Array.isArray(t)?t:[t]:[]}function w(t,e){return Array.isArray(t)?t.includes(e):t===e}function ge(t,e){let i=U(e);return U(t).forEach(r=>{w(i,r)||i.push(r)}),i}function me(t,e){return U(e).filter(i=>!w(t,i))}var F=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Fe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},B=class extends F{get formDirective(){return null}get path(){return null}},_=class extends F{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ke={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Rt=d(u({},Ke),{"[class.ng-submitted]":"isSubmitted"}),Ie=(()=>{let e=class e extends R{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(s(_,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Q("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[p]});let t=e;return t})();var v="VALID",E="INVALID",f="PENDING",y="DISABLED";function Je(t){return(I(t)?t.validators:t)||null}function Qe(t){return Array.isArray(t)?Fe(t):t||null}function et(t,e){return(I(e)?e.asyncValidators:t)||null}function tt(t){return Array.isArray(t)?Oe(t):t||null}function I(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var H=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===v}get invalid(){return this.status===E}get pending(){return this.status==f}get disabled(){return this.status===y}get enabled(){return this.status!==y}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(me(e,this._rawAsyncValidators))}hasValidator(e){return w(this._rawValidators,e)}hasAsyncValidator(e){return w(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=f,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=y,this.errors=null,this._forEachChild(n=>{n.disable(d(u({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(u({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=v,this._forEachChild(n=>{n.enable(d(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(u({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===v||this.status===f)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?y:v}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=f,this._hasOwnPendingAsyncValidator=!0;let i=Me(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?y:this.errors?E:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(f)?f:this._anyControlsHaveStatus(E)?E:v}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){I(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Qe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=tt(this._rawAsyncValidators)}};var Se=new c("CallSetDisabledState",{providedIn:"root",factory:()=>L}),L="always";function nt(t,e){return[...e.path,t]}function it(t,e,i=L){ot(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),st(t,e),lt(t,e),at(t,e),rt(t,e)}function ve(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function rt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ot(t,e){let i=Xe(t);e.validator!==null?t.setValidators(pe(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Ye(t);e.asyncValidator!==null?t.setAsyncValidators(pe(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();ve(e._rawValidators,r),ve(e._rawAsyncValidators,r)}function st(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&xe(t,e)})}function at(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&xe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function xe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function lt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function ut(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function dt(t){return Object.getPrototypeOf(t.constructor)===Be}function ct(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===O?i=o:dt(o)?n=o:r=o}),r||n||i||null}function ye(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function _e(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ht=class extends H{constructor(e=null,i,n){super(Je(i),et(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(i)&&(i.nonNullable||i.initialValueIsDefault)&&(_e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){_e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ft={provide:_,useExisting:S(()=>W)},Ce=(()=>Promise.resolve())(),W=(()=>{let e=class e extends _{constructor(n,r,o,a,l,Ue){super(),this._changeDetectorRef=l,this.callSetDisabledState=Ue,this.control=new ht,this._registered=!1,this.name="",this.update=new b,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ct(this,a)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),ut(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){it(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Ce.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&oe(r);Ce.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?nt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(s(B,9),s(We,10),s($e,10),s(De,10),s(K,8),s(Se,8))},e.\u0275dir=h({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([ft]),p,X]});let t=e;return t})();var pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({});let t=e;return t})();var gt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({imports:[pt]});let t=e;return t})();var Pe=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Se,useValue:n.callSetDisabledState??L}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({imports:[gt]});let t=e;return t})();var Ne=(()=>{let e=class e{constructor(){this.result="",this.inputValue=""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-converter"]],standalone:!0,features:[A],decls:6,vars:4,consts:[[1,"container"],[1,"input-group"],["type","text","id","inputValue","placeholder","Type here..Ex. 123",3,"ngModel","ngModelChange"],["id","displayResult",1,"result"]],template:function(r,o){r&1&&(g(0,"div",0)(1,"div",1)(2,"input",2),M("ngModelChange",function(l){return o.inputValue=l}),m()(),g(3,"div",3),te(4),ie(5,"numToWord"),m()()),r&2&&(N(2),J("ngModel",o.inputValue),N(2),ne(re(5,2,o.inputValue)))},dependencies:[fe,Pe,O,Ie,W],styles:[".container[_ngcontent-%COMP%]{text-align:center;padding:20px;background-color:#fff;box-shadow:0 0 15px #0000001a;border-radius:10px}.input-group[_ngcontent-%COMP%]{margin-bottom:20px}input[_ngcontent-%COMP%]{padding:12px;width:300px;font-size:16px;border:1px solid #ccc;border-radius:5px;margin-right:10px;outline:none}button[_ngcontent-%COMP%]{padding:12px 20px;font-size:16px;cursor:pointer;color:#fff;background-color:#4caf50;border:none;border-radius:5px;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#45a049}.result[_ngcontent-%COMP%]{font-size:18px;margin-top:20px;color:#333}"]});let t=e;return t})();var ke=(()=>{let e=class e{constructor(){this.title="number-converter2"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-root"]],standalone:!0,features:[A],decls:4,vars:0,consts:[[1,"main"],[1,"content"]],template:function(r,o){r&1&&(g(0,"main",0)(1,"div",1),k(2,"app-converter"),m()(),k(3,"router-outlet"))},dependencies:[ae,ce,Ne],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]});let t=e;return t})();var Te=[];var je={providers:[he(Te),ue()]};var vt={providers:[de()]},Ge=se(je,vt);var yt=()=>le(ke,Ge),dn=yt;export{dn as a};
