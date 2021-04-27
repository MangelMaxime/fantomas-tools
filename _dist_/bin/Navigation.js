import { isNullOrWhiteSpace } from "./.fable/fable-library.3.1.15/String.js";
import { Cmd_none, Cmd_batch, Cmd_OfFunc_result, Cmd_map } from "./.fable/Fable.Elmish.3.1.0/cmd.fs.js";
import { ActiveTab, Msg } from "./Model.js";
import { Msg as Msg_1 } from "./FSharpTokens/Model.js";
import { Msg as Msg_2 } from "./ASTViewer/Model.js";
import { Msg as Msg_3 } from "./Trivia/Model.js";
import { equals } from "./.fable/fable-library.3.1.15/Util.js";
import { getVersionCmd, getOptionsCmd } from "./FantomasOnline/State.js";
import { tail, head, isEmpty, ofArray } from "./.fable/fable-library.3.1.15/List.js";
import { FantomasMode, Msg as Msg_4 } from "./FantomasOnline/Model.js";
import { Route_$007CQuery$007C_$007C } from "./.fable/Feliz.Router.3.2.0/Router.fs.js";

export function cmdForCurrentTab(tab, model) {
    if (!isNullOrWhiteSpace(model.SourceCode)) {
        if (tab.tag === 1) {
            return Cmd_map((arg0) => (new Msg(3, arg0)), Cmd_OfFunc_result(new Msg_1(0)));
        }
        else if (tab.tag === 2) {
            return Cmd_map((arg0_1) => (new Msg(4, arg0_1)), Cmd_OfFunc_result(new Msg_2(2)));
        }
        else if (tab.tag === 3) {
            return Cmd_map((arg0_2) => (new Msg(2, arg0_2)), Cmd_OfFunc_result(new Msg_3(1)));
        }
        else if (tab.tag === 4) {
            if (!equals(tab.fields[0], model.FantomasModel.Mode)) {
                return Cmd_batch(ofArray([Cmd_map((arg0_3) => (new Msg(5, arg0_3)), getOptionsCmd(tab.fields[0])), Cmd_map((arg0_4) => (new Msg(5, arg0_4)), getVersionCmd(tab.fields[0]))]));
            }
            else {
                let pattern_matching_result;
                if (tab.tag === 4) {
                    if (!isEmpty(model.FantomasModel.DefaultOptions)) {
                        pattern_matching_result = 0;
                    }
                    else {
                        pattern_matching_result = 1;
                    }
                }
                else {
                    pattern_matching_result = 1;
                }
                switch (pattern_matching_result) {
                    case 0: {
                        return Cmd_map((arg0_5) => (new Msg(5, arg0_5)), Cmd_OfFunc_result(new Msg_4(3)));
                    }
                    case 1: {
                        if (tab.tag === 4) {
                            return Cmd_none();
                        }
                        else {
                            throw (new Error("Match failure"));
                        }
                    }
                }
            }
        }
        else {
            return Cmd_none();
        }
    }
    else {
        return Cmd_none();
    }
}

export function toHash(_arg1) {
    if (_arg1.tag === 3) {
        return "#/trivia";
    }
    else if (_arg1.tag === 1) {
        return "#/tokens";
    }
    else if (_arg1.tag === 2) {
        return "#/ast";
    }
    else if (_arg1.tag === 4) {
        if (_arg1.fields[0].tag === 1) {
            return "#/fantomas/v3";
        }
        else if (_arg1.fields[0].tag === 2) {
            return "#/fantomas/v4";
        }
        else if (_arg1.fields[0].tag === 3) {
            return "#/fantomas/preview";
        }
        else {
            return "#/fantomas/v2";
        }
    }
    else {
        return "#/";
    }
}

export function parseUrl(segments) {
    let pattern_matching_result;
    if (!isEmpty(segments)) {
        if (head(segments) === "tokens") {
            if (!isEmpty(tail(segments))) {
                const activePatternResult13093 = Route_$007CQuery$007C_$007C(head(tail(segments)));
                if (activePatternResult13093 != null) {
                    if (!isEmpty(activePatternResult13093)) {
                        if (head(activePatternResult13093)[0] === "data") {
                            if (isEmpty(tail(activePatternResult13093))) {
                                if (isEmpty(tail(tail(segments)))) {
                                    pattern_matching_result = 0;
                                }
                                else {
                                    pattern_matching_result = 1;
                                }
                            }
                            else {
                                pattern_matching_result = 1;
                            }
                        }
                        else {
                            pattern_matching_result = 1;
                        }
                    }
                    else {
                        pattern_matching_result = 1;
                    }
                }
                else {
                    pattern_matching_result = 1;
                }
            }
            else {
                pattern_matching_result = 0;
            }
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return new ActiveTab(1);
        }
        case 1: {
            let pattern_matching_result_1;
            if (!isEmpty(segments)) {
                if (head(segments) === "ast") {
                    if (!isEmpty(tail(segments))) {
                        const activePatternResult13092 = Route_$007CQuery$007C_$007C(head(tail(segments)));
                        if (activePatternResult13092 != null) {
                            if (!isEmpty(activePatternResult13092)) {
                                if (head(activePatternResult13092)[0] === "data") {
                                    if (isEmpty(tail(activePatternResult13092))) {
                                        if (isEmpty(tail(tail(segments)))) {
                                            pattern_matching_result_1 = 0;
                                        }
                                        else {
                                            pattern_matching_result_1 = 1;
                                        }
                                    }
                                    else {
                                        pattern_matching_result_1 = 1;
                                    }
                                }
                                else {
                                    pattern_matching_result_1 = 1;
                                }
                            }
                            else {
                                pattern_matching_result_1 = 1;
                            }
                        }
                        else {
                            pattern_matching_result_1 = 1;
                        }
                    }
                    else {
                        pattern_matching_result_1 = 0;
                    }
                }
                else {
                    pattern_matching_result_1 = 1;
                }
            }
            else {
                pattern_matching_result_1 = 1;
            }
            switch (pattern_matching_result_1) {
                case 0: {
                    return new ActiveTab(2);
                }
                case 1: {
                    let pattern_matching_result_2;
                    if (!isEmpty(segments)) {
                        if (head(segments) === "trivia") {
                            if (!isEmpty(tail(segments))) {
                                const activePatternResult13091 = Route_$007CQuery$007C_$007C(head(tail(segments)));
                                if (activePatternResult13091 != null) {
                                    if (!isEmpty(activePatternResult13091)) {
                                        if (head(activePatternResult13091)[0] === "data") {
                                            if (isEmpty(tail(activePatternResult13091))) {
                                                if (isEmpty(tail(tail(segments)))) {
                                                    pattern_matching_result_2 = 0;
                                                }
                                                else {
                                                    pattern_matching_result_2 = 1;
                                                }
                                            }
                                            else {
                                                pattern_matching_result_2 = 1;
                                            }
                                        }
                                        else {
                                            pattern_matching_result_2 = 1;
                                        }
                                    }
                                    else {
                                        pattern_matching_result_2 = 1;
                                    }
                                }
                                else {
                                    pattern_matching_result_2 = 1;
                                }
                            }
                            else {
                                pattern_matching_result_2 = 0;
                            }
                        }
                        else {
                            pattern_matching_result_2 = 1;
                        }
                    }
                    else {
                        pattern_matching_result_2 = 1;
                    }
                    switch (pattern_matching_result_2) {
                        case 0: {
                            return new ActiveTab(3);
                        }
                        case 1: {
                            let pattern_matching_result_3;
                            if (!isEmpty(segments)) {
                                if (head(segments) === "fantomas") {
                                    if (!isEmpty(tail(segments))) {
                                        if (head(tail(segments)) === "v2") {
                                            if (!isEmpty(tail(tail(segments)))) {
                                                const activePatternResult13090 = Route_$007CQuery$007C_$007C(head(tail(tail(segments))));
                                                if (activePatternResult13090 != null) {
                                                    if (!isEmpty(activePatternResult13090)) {
                                                        if (head(activePatternResult13090)[0] === "data") {
                                                            if (isEmpty(tail(activePatternResult13090))) {
                                                                if (isEmpty(tail(tail(tail(segments))))) {
                                                                    pattern_matching_result_3 = 0;
                                                                }
                                                                else {
                                                                    pattern_matching_result_3 = 1;
                                                                }
                                                            }
                                                            else {
                                                                pattern_matching_result_3 = 1;
                                                            }
                                                        }
                                                        else {
                                                            pattern_matching_result_3 = 1;
                                                        }
                                                    }
                                                    else {
                                                        pattern_matching_result_3 = 1;
                                                    }
                                                }
                                                else {
                                                    pattern_matching_result_3 = 1;
                                                }
                                            }
                                            else {
                                                pattern_matching_result_3 = 0;
                                            }
                                        }
                                        else {
                                            pattern_matching_result_3 = 1;
                                        }
                                    }
                                    else {
                                        pattern_matching_result_3 = 1;
                                    }
                                }
                                else {
                                    pattern_matching_result_3 = 1;
                                }
                            }
                            else {
                                pattern_matching_result_3 = 1;
                            }
                            switch (pattern_matching_result_3) {
                                case 0: {
                                    return new ActiveTab(4, new FantomasMode(0));
                                }
                                case 1: {
                                    let pattern_matching_result_4;
                                    if (!isEmpty(segments)) {
                                        if (head(segments) === "fantomas") {
                                            if (!isEmpty(tail(segments))) {
                                                if (head(tail(segments)) === "v3") {
                                                    if (!isEmpty(tail(tail(segments)))) {
                                                        const activePatternResult13089 = Route_$007CQuery$007C_$007C(head(tail(tail(segments))));
                                                        if (activePatternResult13089 != null) {
                                                            if (!isEmpty(activePatternResult13089)) {
                                                                if (head(activePatternResult13089)[0] === "data") {
                                                                    if (isEmpty(tail(activePatternResult13089))) {
                                                                        if (isEmpty(tail(tail(tail(segments))))) {
                                                                            pattern_matching_result_4 = 0;
                                                                        }
                                                                        else {
                                                                            pattern_matching_result_4 = 1;
                                                                        }
                                                                    }
                                                                    else {
                                                                        pattern_matching_result_4 = 1;
                                                                    }
                                                                }
                                                                else {
                                                                    pattern_matching_result_4 = 1;
                                                                }
                                                            }
                                                            else {
                                                                pattern_matching_result_4 = 1;
                                                            }
                                                        }
                                                        else {
                                                            pattern_matching_result_4 = 1;
                                                        }
                                                    }
                                                    else {
                                                        pattern_matching_result_4 = 0;
                                                    }
                                                }
                                                else {
                                                    pattern_matching_result_4 = 1;
                                                }
                                            }
                                            else {
                                                pattern_matching_result_4 = 1;
                                            }
                                        }
                                        else {
                                            pattern_matching_result_4 = 1;
                                        }
                                    }
                                    else {
                                        pattern_matching_result_4 = 1;
                                    }
                                    switch (pattern_matching_result_4) {
                                        case 0: {
                                            return new ActiveTab(4, new FantomasMode(1));
                                        }
                                        case 1: {
                                            let pattern_matching_result_5;
                                            if (!isEmpty(segments)) {
                                                if (head(segments) === "fantomas") {
                                                    if (!isEmpty(tail(segments))) {
                                                        if (head(tail(segments)) === "v4") {
                                                            if (!isEmpty(tail(tail(segments)))) {
                                                                const activePatternResult13088 = Route_$007CQuery$007C_$007C(head(tail(tail(segments))));
                                                                if (activePatternResult13088 != null) {
                                                                    if (!isEmpty(activePatternResult13088)) {
                                                                        if (head(activePatternResult13088)[0] === "data") {
                                                                            if (isEmpty(tail(activePatternResult13088))) {
                                                                                if (isEmpty(tail(tail(tail(segments))))) {
                                                                                    pattern_matching_result_5 = 0;
                                                                                }
                                                                                else {
                                                                                    pattern_matching_result_5 = 1;
                                                                                }
                                                                            }
                                                                            else {
                                                                                pattern_matching_result_5 = 1;
                                                                            }
                                                                        }
                                                                        else {
                                                                            pattern_matching_result_5 = 1;
                                                                        }
                                                                    }
                                                                    else {
                                                                        pattern_matching_result_5 = 1;
                                                                    }
                                                                }
                                                                else {
                                                                    pattern_matching_result_5 = 1;
                                                                }
                                                            }
                                                            else {
                                                                pattern_matching_result_5 = 0;
                                                            }
                                                        }
                                                        else {
                                                            pattern_matching_result_5 = 1;
                                                        }
                                                    }
                                                    else {
                                                        pattern_matching_result_5 = 1;
                                                    }
                                                }
                                                else {
                                                    pattern_matching_result_5 = 1;
                                                }
                                            }
                                            else {
                                                pattern_matching_result_5 = 1;
                                            }
                                            switch (pattern_matching_result_5) {
                                                case 0: {
                                                    return new ActiveTab(4, new FantomasMode(2));
                                                }
                                                case 1: {
                                                    let pattern_matching_result_6;
                                                    if (!isEmpty(segments)) {
                                                        if (head(segments) === "fantomas") {
                                                            if (!isEmpty(tail(segments))) {
                                                                if (head(tail(segments)) === "preview") {
                                                                    if (!isEmpty(tail(tail(segments)))) {
                                                                        const activePatternResult13087 = Route_$007CQuery$007C_$007C(head(tail(tail(segments))));
                                                                        if (activePatternResult13087 != null) {
                                                                            if (!isEmpty(activePatternResult13087)) {
                                                                                if (head(activePatternResult13087)[0] === "data") {
                                                                                    if (isEmpty(tail(activePatternResult13087))) {
                                                                                        if (isEmpty(tail(tail(tail(segments))))) {
                                                                                            pattern_matching_result_6 = 0;
                                                                                        }
                                                                                        else {
                                                                                            pattern_matching_result_6 = 1;
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        pattern_matching_result_6 = 1;
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    pattern_matching_result_6 = 1;
                                                                                }
                                                                            }
                                                                            else {
                                                                                pattern_matching_result_6 = 1;
                                                                            }
                                                                        }
                                                                        else {
                                                                            pattern_matching_result_6 = 1;
                                                                        }
                                                                    }
                                                                    else {
                                                                        pattern_matching_result_6 = 0;
                                                                    }
                                                                }
                                                                else {
                                                                    pattern_matching_result_6 = 1;
                                                                }
                                                            }
                                                            else {
                                                                pattern_matching_result_6 = 1;
                                                            }
                                                        }
                                                        else {
                                                            pattern_matching_result_6 = 1;
                                                        }
                                                    }
                                                    else {
                                                        pattern_matching_result_6 = 1;
                                                    }
                                                    switch (pattern_matching_result_6) {
                                                        case 0: {
                                                            return new ActiveTab(4, new FantomasMode(3));
                                                        }
                                                        case 1: {
                                                            return new ActiveTab(0);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
