import { trimEnd, isNullOrWhiteSpace, substring, join, endsWith } from "../fable-library.3.1.15/String.js";
import { ofArray, singleton, empty, collect, map } from "../fable-library.3.1.15/List.js";
import { equalsWith } from "../fable-library.3.1.15/Array.js";
import { comparePrimitives } from "../fable-library.3.1.15/Util.js";
import { React_createDisposable_3A5B6456, useReact_useEffect_Z5ECA432F, useReact_useMemo_CF4EA67, useReact_useCallbackRef_7C4B0DD6, React_memo_62A0F746 } from "../Feliz.1.43.0/React.fs.js";
import { defaultArg } from "../fable-library.3.1.15/Option.js";
import { Impl_createRemoveOptions, Impl_adjustPassive } from "../Feliz.UseListener.0.6.3/Listener.fs.js";
import { tryParse } from "../fable-library.3.1.15/Int32.js";
import { FSharpRef } from "../fable-library.3.1.15/Types.js";
import { tryParse as tryParse_1, fromInt } from "../fable-library.3.1.15/Long.js";
import { tryParse as tryParse_2 } from "../fable-library.3.1.15/Guid.js";
import { tryParse as tryParse_3 } from "../fable-library.3.1.15/Double.js";
import { tryParse as tryParse_4 } from "../fable-library.3.1.15/Decimal.js";
import Decimal from "../fable-library.3.1.15/Decimal.js";
import { map as map_1, delay, toList } from "../fable-library.3.1.15/Seq.js";

export function RouterModule_String_$007CPrefix$007C(prefix, str) {
    if (str.indexOf(prefix) === 0) {
        return str;
    }
    else {
        return void 0;
    }
}

export function RouterModule_String_$007CSuffix$007C(suffix, str) {
    if (endsWith(str, suffix)) {
        return str;
    }
    else {
        return void 0;
    }
}

export function RouterModule_encodeQueryString(queryStringPairs) {
    const _arg1 = join("\u0026", map((tupledArg) => join("=", [encodeURIComponent(tupledArg[0]), encodeURIComponent(tupledArg[1])]), queryStringPairs));
    if (_arg1 === "") {
        return "";
    }
    else {
        return "?" + _arg1;
    }
}

export function RouterModule_encodeQueryStringInts(queryStringIntPairs) {
    const _arg1 = join("\u0026", map((tupledArg) => join("=", [encodeURIComponent(tupledArg[0]), tupledArg[1]]), queryStringIntPairs));
    if (_arg1 === "") {
        return "";
    }
    else {
        return "?" + _arg1;
    }
}

function RouterModule_normalizeRoute(routeMode) {
    if (routeMode === 1) {
        return (_arg1) => {
            let activePatternResult9543, path, activePatternResult9544, path_1, activePatternResult9545, path_2;
            return activePatternResult9543 = RouterModule_String_$007CPrefix$007C("/", _arg1), (activePatternResult9543 != null) ? (path = activePatternResult9543, "#" + path) : (activePatternResult9544 = RouterModule_String_$007CPrefix$007C("#/", _arg1), (activePatternResult9544 != null) ? (path_1 = activePatternResult9544, path_1) : (activePatternResult9545 = RouterModule_String_$007CPrefix$007C("#", _arg1), (activePatternResult9545 != null) ? (path_2 = activePatternResult9545, "#/" + substring(path_2, 1, path_2.length - 1)) : ("#/" + _arg1)));
        };
    }
    else {
        return (_arg2) => {
            let activePatternResult9548, path_4;
            return activePatternResult9548 = RouterModule_String_$007CPrefix$007C("/", _arg2), (activePatternResult9548 != null) ? (path_4 = activePatternResult9548, path_4) : ("/" + _arg2);
        };
    }
}

export function RouterModule_encodeParts(xs, routeMode) {
    return RouterModule_normalizeRoute(routeMode)(join("/", map((part) => {
        if (((part.indexOf("?") >= 0) ? true : (part.indexOf("#") === 0)) ? true : (part.indexOf("/") === 0)) {
            return part;
        }
        else {
            return encodeURIComponent(part);
        }
    }, xs)));
}

export function RouterModule_nav(xs, mode, routeMode) {
    if (mode === 1) {
        history.pushState(void 0, "", RouterModule_encodeParts(xs, routeMode));
    }
    else {
        history.replaceState(void 0, "", RouterModule_encodeParts(xs, routeMode));
    }
    const ev = document.createEvent("CustomEvent");
    ev.initEvent("CUSTOM_NAVIGATION_EVENT", true, true);
    void window.dispatchEvent(ev);
}

export function RouterModule_urlSegments(path, mode) {
    return collect((segment) => {
        if (isNullOrWhiteSpace(segment)) {
            return empty();
        }
        else {
            const segment_1 = trimEnd(segment, "#");
            if (segment_1 === "?") {
                return empty();
            }
            else if (RouterModule_String_$007CPrefix$007C("?", segment_1) != null) {
                return singleton(segment_1);
            }
            else {
                const matchValue = segment_1.split("?");
                if ((!equalsWith((x, y) => comparePrimitives(x, y), matchValue, null)) ? (matchValue.length === 1) : false) {
                    const value = matchValue[0];
                    return singleton(decodeURIComponent(value));
                }
                else if ((!equalsWith((x_1, y_1) => comparePrimitives(x_1, y_1), matchValue, null)) ? (matchValue.length === 2) : false) {
                    if (matchValue[1] === "") {
                        const value_1 = matchValue[0];
                        return singleton(decodeURIComponent(value_1));
                    }
                    else {
                        const value_2 = matchValue[0];
                        const query = matchValue[1];
                        return ofArray([decodeURIComponent(value_2), "?" + query]);
                    }
                }
                else {
                    return empty();
                }
            }
        }
    }, ofArray(((RouterModule_String_$007CPrefix$007C("#", path) != null) ? substring(path, 1, path.length - 1) : ((mode === 1) ? ((RouterModule_String_$007CSuffix$007C("#", path) != null) ? "" : ((RouterModule_String_$007CSuffix$007C("#/", path) != null) ? "" : path)) : path)).split("/")));
}

export function RouterModule_onUrlChange(routeMode, urlChanged, ev) {
    return urlChanged(RouterModule_urlSegments((routeMode === 2) ? (window.location.pathname + window.location.search) : window.location.hash, routeMode));
}

export const RouterModule_router = React_memo_62A0F746((input) => {
    const onChange = useReact_useCallbackRef_7C4B0DD6((ev) => {
        const urlChanged = defaultArg(input.onUrlChanged, (value) => {
        });
        RouterModule_onUrlChange(defaultArg(input.hashMode, 1), urlChanged, ev);
    });
    if (((window.navigator.userAgent).indexOf("Trident") >= 0) ? true : ((window.navigator.userAgent).indexOf("MSIE") >= 0)) {
        const eventType = "hashchange";
        const action_1 = (arg00) => {
            onChange(arg00);
        };
        const options_1 = void 0;
        const addOptions = useReact_useMemo_CF4EA67(() => Impl_adjustPassive(options_1), [options_1]);
        const removeOptions = useReact_useMemo_CF4EA67(() => Impl_createRemoveOptions(options_1), [options_1]);
        const fn = useReact_useMemo_CF4EA67(() => ((arg) => {
            action_1(arg);
        }), [action_1]);
        useReact_useEffect_Z5ECA432F(useReact_useCallbackRef_7C4B0DD6(() => {
            if (addOptions == null) {
                window.addEventListener(eventType, fn);
            }
            else {
                window.addEventListener(eventType, fn, addOptions);
            }
            return React_createDisposable_3A5B6456(() => {
                if (removeOptions == null) {
                    window.removeEventListener(eventType, fn);
                }
                else {
                    window.removeEventListener(eventType, fn, removeOptions);
                }
            });
        }));
    }
    else {
        const eventType_1 = "popstate";
        const action_3 = onChange;
        const options_5 = void 0;
        const addOptions_1 = useReact_useMemo_CF4EA67(() => Impl_adjustPassive(options_5), [options_5]);
        const removeOptions_1 = useReact_useMemo_CF4EA67(() => Impl_createRemoveOptions(options_5), [options_5]);
        const fn_1 = useReact_useMemo_CF4EA67(() => ((arg_1) => {
            action_3(arg_1);
        }), [action_3]);
        useReact_useEffect_Z5ECA432F(useReact_useCallbackRef_7C4B0DD6(() => {
            if (addOptions_1 == null) {
                window.addEventListener(eventType_1, fn_1);
            }
            else {
                window.addEventListener(eventType_1, fn_1, addOptions_1);
            }
            return React_createDisposable_3A5B6456(() => {
                if (removeOptions_1 == null) {
                    window.removeEventListener(eventType_1, fn_1);
                }
                else {
                    window.removeEventListener(eventType_1, fn_1, removeOptions_1);
                }
            });
        }));
    }
    const eventType_2 = "CUSTOM_NAVIGATION_EVENT";
    const action_4 = onChange;
    const options_8 = void 0;
    const addOptions_2 = useReact_useMemo_CF4EA67(() => Impl_adjustPassive(options_8), [options_8]);
    const removeOptions_2 = useReact_useMemo_CF4EA67(() => Impl_createRemoveOptions(options_8), [options_8]);
    const fn_2 = useReact_useMemo_CF4EA67(() => ((arg_2) => {
        action_4(arg_2);
    }), [action_4]);
    useReact_useEffect_Z5ECA432F(useReact_useCallbackRef_7C4B0DD6(() => {
        if (addOptions_2 == null) {
            window.addEventListener(eventType_2, fn_2);
        }
        else {
            window.addEventListener(eventType_2, fn_2, addOptions_2);
        }
        return React_createDisposable_3A5B6456(() => {
            if (removeOptions_2 == null) {
                window.removeEventListener(eventType_2, fn_2);
            }
            else {
                window.removeEventListener(eventType_2, fn_2, removeOptions_2);
            }
        });
    }));
    const matchValue = input.application;
    return (matchValue == null) ? null : matchValue;
});

export function Route_$007CInt$007C_$007C(input) {
    let matchValue;
    let outArg = 0;
    matchValue = [tryParse(input, 511, false, 32, new FSharpRef(() => outArg, (v) => {
        outArg = (v | 0);
    })), outArg];
    if (matchValue[0]) {
        return matchValue[1];
    }
    else {
        return void 0;
    }
}

export function Route_$007CInt64$007C_$007C(input) {
    let matchValue;
    let outArg = fromInt(0);
    matchValue = [tryParse_1(input, 511, false, 64, new FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return matchValue[1];
    }
    else {
        return void 0;
    }
}

export function Route_$007CGuid$007C_$007C(input) {
    let matchValue;
    let outArg = "00000000-0000-0000-0000-000000000000";
    matchValue = [tryParse_2(input, new FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return matchValue[1];
    }
    else {
        return void 0;
    }
}

export function Route_$007CNumber$007C_$007C(input) {
    let matchValue;
    let outArg = 0;
    matchValue = [tryParse_3(input, new FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return matchValue[1];
    }
    else {
        return void 0;
    }
}

export function Route_$007CDecimal$007C_$007C(input) {
    let matchValue;
    let outArg = new Decimal(0);
    matchValue = [tryParse_4(input, new FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return matchValue[1];
    }
    else {
        return void 0;
    }
}

export function Route_$007CBool$007C_$007C(input) {
    const matchValue = input.toLocaleLowerCase();
    switch (matchValue) {
        case "1":
        case "true": {
            return true;
        }
        case "0":
        case "false": {
            return false;
        }
        case "": {
            return true;
        }
        default: {
            return void 0;
        }
    }
}

export function Route_$007CQuery$007C_$007C(input) {
    try {
        const urlParams = new URLSearchParams(input);
        return toList(delay(() => map_1((entry) => [entry[0], entry[1]], urlParams.entries())));
    }
    catch (matchValue) {
        return void 0;
    }
}

