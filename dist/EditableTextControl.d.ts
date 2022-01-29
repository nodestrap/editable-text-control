/// <reference types="react" />
import { ValidInvalidVars as EditableControlValidInvalidVars, EditableControlProps } from '@nodestrap/editable-control';
export declare const markActive: () => import("@cssfn/cssfn").Rule;
export interface ValidInvalidVars extends EditableControlValidInvalidVars {
    /**
     * final validation icon image.
     */
    iconImg: any;
}
/**
 * Uses valid & invalid states.
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents valid & invalid state definitions.
 */
export declare const usesValidInvalidState: () => readonly [() => import("@cssfn/cssfn").Rule, import("@cssfn/css-var").ReadonlyRefs<ValidInvalidVars>, import("@cssfn/css-var").ReadonlyDecls<ValidInvalidVars>];
export declare const usesEditableTextControlLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesEditableTextControlVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesEditableTextControlStates: () => import("@cssfn/cssfn").Rule;
export declare const useEditableTextControlSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    cursor: string;
    iconSize: string;
    iconValid: string;
    iconInvalid: string;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    cursor: string;
    iconSize: string;
    iconValid: string;
    iconInvalid: string;
}>, cssVals: import("@cssfn/css-config").Vals<{
    cursor: string;
    iconSize: string;
    iconValid: string;
    iconInvalid: string;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare type EditableTextControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export interface EditableTextControlProps<TElement extends EditableTextControlElement = EditableTextControlElement> extends EditableControlProps<TElement> {
    minLength?: number;
    maxLength?: number;
}
export declare function EditableTextControl<TElement extends EditableTextControlElement = EditableTextControlElement>(props: EditableTextControlProps<TElement>): JSX.Element;
export { EditableTextControl as default };
