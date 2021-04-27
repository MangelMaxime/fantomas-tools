import { useLayoutEffectWithDeps, useLayoutEffect, useEffectWithDeps, useEffect, useDebugValue } from "./ReactInterop.js";
import { class_type } from "../fable-library.3.1.15/Reflection.js";
import { iterate } from "../fable-library.3.1.15/Seq.js";
import { defaultArg, some, toArray } from "../fable-library.3.1.15/Option.js";
import { reactApi } from "./Interop.fs.js";
import { curry, uncurry } from "../fable-library.3.1.15/Util.js";
import { useState } from "../../../../_snowpack/pkg/react.js";
import * as react from "../../../../_snowpack/pkg/react.js";

export const ReactInterop_useDebugValueWithFormatter = useDebugValue;

export const ReactInterop_useEffect = useEffect;

export const ReactInterop_useEffectWithDeps = useEffectWithDeps;

export const ReactInterop_useLayoutEffect = useLayoutEffect;

export const ReactInterop_useLayoutEffectWithDeps = useLayoutEffectWithDeps;

export class Internal {
    constructor() {
    }
}

export function Internal$reflection() {
    return class_type("Feliz.Internal", void 0, Internal);
}

export function Internal_$ctor() {
    return new Internal();
}

(() => {
})();

export function Internal_functionComponent_Z1B155329(renderElement, name, withKey) {
    iterate((name_1) => {
        renderElement.displayName = name_1;
    }, toArray(name));
    console.warn(some("Feliz: using React.functionComponent in Fable 3 is obsolete, please consider using the [\u003cReactComponent\u003e] attribute instead which makes Feliz output better Javascript code that is compatible with react-refresh"));
    return (props) => reactApi.createElement(renderElement, Internal_propsWithKey(withKey, props));
}

export function Internal_memo_Z603636D8(renderElement, name, areEqual, withKey) {
    const memoElementType = reactApi.memo(renderElement, uncurry(2, defaultArg(curry(2, areEqual), null)));
    iterate((name_1) => {
        renderElement.displayName = name_1;
    }, toArray(name));
    return (props) => reactApi.createElement(memoElementType, Internal_propsWithKey(withKey, props));
}

function Internal_propsWithKey(withKey, props) {
    if (withKey == null) {
        return props;
    }
    else {
        const f = withKey;
        props.key = f(props);
        return props;
    }
}

export class React {
    constructor() {
    }
}

export function React$reflection() {
    return class_type("Feliz.React", void 0, React);
}

export function React_createDisposable_3A5B6456(dispose) {
    return {
        Dispose() {
            dispose();
        },
    };
}

export function useReact_useState_FCFD9EF(initializer) {
    return reactApi.useState(initializer);
}

export function useReact_useReducer_2B9E6EA0(update, initialState) {
    return reactApi.useReducer(update, initialState);
}

export function useReact_useEffect_Z5ECA432F(effect) {
    ReactInterop_useEffect(effect);
}

export function useReact_useEffect_Z5234A374(effect, dependencies) {
    ReactInterop_useEffectWithDeps(effect, dependencies);
}

export function useReact_useLayoutEffect_Z5ECA432F(effect) {
    ReactInterop_useLayoutEffect(effect);
}

export function useReact_useLayoutEffect_Z5234A374(effect, dependencies) {
    ReactInterop_useLayoutEffectWithDeps(effect, dependencies);
}

export function useReact_useLayoutEffect_3A5B6456(effect) {
    ReactInterop_useLayoutEffect((_arg1) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
        });
    });
}

export function useReact_useLayoutEffect_Z101E1A95(effect, dependencies) {
    ReactInterop_useLayoutEffectWithDeps((_arg2) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
        });
    }, dependencies);
}

export function useReact_useEffectOnce_3A5B6456(effect) {
    useReact_useEffect_Z101E1A95(effect, []);
}

export function useReact_useEffectOnce_Z5ECA432F(effect) {
    useReact_useEffect_Z5234A374(effect, []);
}

export function useReact_useEffectOnce_6E825304(effect) {
    useReact_useEffect_Z5234A374(() => {
        const disposeOption = effect();
        return {
            Dispose() {
                iterate((d) => {
                    let copyOfStruct = d;
                    copyOfStruct.Dispose();
                }, toArray(disposeOption));
            },
        };
    }, []);
}

export function useReact_useEffect_3A5B6456(effect) {
    ReactInterop_useEffect((_arg3) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
        });
    });
}

export function useReact_useEffect_Z101E1A95(effect, dependencies) {
    ReactInterop_useEffectWithDeps((_arg4) => {
        effect();
        return React_createDisposable_3A5B6456(() => {
        });
    }, dependencies);
}

export function useReact_useDebugValue_Z721C83C5(value) {
    ReactInterop_useDebugValueWithFormatter(value, (x) => x);
}

export function useReact_useDebugValue_77A55D6D(value, formatter) {
    ReactInterop_useDebugValueWithFormatter(value, formatter);
}

export function useReact_useCallback_93353E(callbackFunction, dependencies) {
    return reactApi.useCallback(callbackFunction, defaultArg(dependencies, []));
}

export function useReact_useRef_1505(initialValue) {
    return reactApi.useRef(initialValue);
}

export function useReact_useInputRef() {
    return useReact_useRef_1505(void 0);
}

export function useReact_useButtonRef() {
    return useReact_useRef_1505(void 0);
}

export function useReact_useElementRef() {
    return useReact_useRef_1505(void 0);
}

export function useReact_useMemo_CF4EA67(createFunction, dependencies) {
    return reactApi.useMemo(createFunction, defaultArg(dependencies, []));
}

export function React_functionComponent_2F9D7239(render, withKey) {
    return Internal_functionComponent_Z1B155329(render, void 0, withKey);
}

export function React_functionComponent_Z4C5FE1BE(name, render, withKey) {
    return Internal_functionComponent_Z1B155329(render, name, withKey);
}

export function React_functionComponent_19A12FB2(render, withKey) {
    return Internal_functionComponent_Z1B155329((arg) => react.createElement(react.Fragment, {}, ...render(arg)), void 0, withKey);
}

export function React_functionComponent_2E1DD889(name, render, withKey) {
    return Internal_functionComponent_Z1B155329((arg) => react.createElement(react.Fragment, {}, ...render(arg)), name, withKey);
}

export function React_memo_62A0F746(render, withKey, areEqual) {
    return Internal_memo_Z603636D8(render, void 0, areEqual, withKey);
}

export function React_memo_6648A89D(name, render, withKey, areEqual) {
    return Internal_memo_Z603636D8(render, name, areEqual, withKey);
}

export function React_memo_C2C6BED(render, withKey, areEqual) {
    return Internal_memo_Z603636D8((arg) => react.createElement(react.Fragment, {}, ...render(arg)), void 0, areEqual, withKey);
}

export function React_memo_Z4FCC584A(name, render, withKey, areEqual) {
    return Internal_memo_Z603636D8((arg) => react.createElement(react.Fragment, {}, ...render(arg)), name, areEqual, withKey);
}

export function React_createContext_1AE444D8(name, defaultValue) {
    const contextObject = reactApi.createContext(defaultArg(defaultValue, void 0));
    iterate((name_1) => {
        contextObject.displayName = name_1;
    }, toArray(name));
    return contextObject;
}

export function React_contextProvider_34D9BBBD(contextObject, contextValue, child) {
    return reactApi.createElement(contextObject.Provider, {
        value: contextValue,
    }, child);
}

export function React_contextProvider_138D2F56(contextObject, contextValue, children) {
    return reactApi.createElement(contextObject.Provider, {
        value: contextValue,
    }, ...children);
}

export function React_contextConsumer_Z68910595(contextObject, render) {
    return reactApi.createElement(contextObject.Consumer, null, render);
}

export function React_contextConsumer_56D53A40(contextObject, render) {
    return reactApi.createElement(contextObject.Consumer, null, (arg) => react.createElement(react.Fragment, {}, ...render(arg)));
}

export function useReact_useContext_37FA55CF(contextObject) {
    return reactApi.useContext(contextObject);
}

export function useReact_useCallbackRef_7C4B0DD6(callback) {
    const lastRenderCallbackRef = useReact_useRef_1505(callback);
    const callbackRef = useReact_useCallback_93353E((arg) => lastRenderCallbackRef.current(arg), []);
    useReact_useLayoutEffect_3A5B6456(() => {
        lastRenderCallbackRef.current = callback;
    });
    return callbackRef;
}

export const React_useStateWithUpdater_1505 = useState;

export function React_forwardRef_3790D881(render) {
    const forwardRefType = reactApi.forwardRef((props, ref) => render([props, ref]));
    return (tupledArg) => {
        let o;
        return reactApi.createElement(forwardRefType, (o = {
            props: tupledArg[0],
            ref: tupledArg[1],
        }, Object.assign({}, o)));
    };
}

export function React_forwardRef_7DC3DB1A(name, render) {
    const forwardRefType = reactApi.forwardRef((props, ref) => render([props, ref]));
    render.displayName = name;
    return (tupledArg) => {
        let o;
        return reactApi.createElement(forwardRefType, (o = {
            props: tupledArg[0],
            ref: tupledArg[1],
        }, Object.assign({}, o)));
    };
}

export function React_strictMode_6E3A73D(children) {
    return reactApi.createElement(reactApi.StrictMode, void 0, ...children);
}

export function React_lazy$0027_4712D3AE(dynamicImport, props) {
    return reactApi.createElement(reactApi.lazy((() => dynamicImport)), props);
}

export function React_lazy$0027_Z3D8450FC(dynamicImport, props) {
    return reactApi.createElement(reactApi.lazy(dynamicImport), props);
}

export function React_suspense_6E3A73D(children) {
    let o;
    return reactApi.createElement(reactApi.Suspense, (o = {
        fallback: null,
    }, Object.assign({}, o)), ...children);
}

export function React_suspense_Z3796A576(children, fallback) {
    let o;
    return reactApi.createElement(reactApi.Suspense, (o = {
        fallback: fallback,
    }, Object.assign({}, o)), ...children);
}

export function useReact_useImperativeHandle_596DDC25(ref, createHandle) {
    reactApi.useImperativeHandle(ref, createHandle);
}

export function useReact_useImperativeHandle_Z12F09548(ref, createHandle, dependencies) {
    reactApi.useImperativeHandle(ref, createHandle, dependencies);
}

export function useFeliz_React__React_useState_Static_1505(initial) {
    return reactApi.useState(initial);
}

export const Feliz_React__React_useStateWithUpdater_Static_FCFD9EF = useState;
