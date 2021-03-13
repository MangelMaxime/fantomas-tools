import { Union } from "../fable-library.3.1.7/Types.js";
import { union_type, lambda_type, unit_type, list_type, class_type, obj_type } from "../fable-library.3.1.7/Reflection.js";
import { keyValueList } from "../fable-library.3.1.7/MapUtil.js";
import { choose, collect } from "../fable-library.3.1.7/Seq.js";
import { empty } from "../fable-library.3.1.7/List.js";
import * as react from "../../../../_snowpack/pkg/react.js";
import { CardLink } from "../../../../_snowpack/pkg/reactstrap.js";

export class CardLinkProps extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Tag", "Custom", "InnerRef"];
    }
}

export function CardLinkProps$reflection() {
    return union_type("Reactstrap.CardLink.CardLinkProps", [], CardLinkProps, () => [[["Item", obj_type]], [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]], [["Item", lambda_type(class_type("Browser.Types.Element"), unit_type)]]]);
}

export function cardLink(props, elems) {
    const customProps = keyValueList(collect((_arg1) => {
        if (_arg1.tag === 1) {
            const props_1 = _arg1.fields[0];
            return props_1;
        }
        else {
            return empty();
        }
    }, props), 1);
    const typeProps = keyValueList(choose((_arg2) => {
        if (_arg2.tag === 1) {
            return void 0;
        }
        else {
            const prop = _arg2;
            return prop;
        }
    }, props), 1);
    const props_2 = Object.assign({}, customProps, typeProps);
    return react.createElement(CardLink, props_2, ...elems);
}

