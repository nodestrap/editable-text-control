// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, vars, children, 
// rules:
states, 
// utilities:
escapeSvg, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssVar, } from '@cssfn/css-var'; // Declares & retrieves *css variables* (css custom properties).
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, mildOf, } from '@nodestrap/basic';
import { 
// hooks:
isActive, } from '@nodestrap/indicator';
import { 
// hooks:
markActive as controlMarkActive, isFocus, isArrive, } from '@nodestrap/control';
import { isValid, isInvalid, isNoValidation, usesValidInvalidState as editableControlUsesValidInvalidState, 
// styles:
usesEditableControlLayout, usesEditableControlVariants, usesEditableControlStates, EditableControl, } from '@nodestrap/editable-control';
import { 
// hooks:
usesIconColor, 
// styles:
usesIconImage, } from '@nodestrap/icon';
// hooks:
// states:
//#region activePassive
export const markActive = () => composition([
    imports([
        controlMarkActive(),
        mildOf(null), // keeps mild variant
    ]),
]);
const [validInvalidRefs, validInvalidDecls] = createCssVar();
/**
 * Uses valid & invalid states.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents valid & invalid state definitions.
 */
export const usesValidInvalidState = () => {
    // dependencies:
    const [validInvalid, , , ...restValidInvalid] = editableControlUsesValidInvalidState();
    return [
        () => composition([
            imports([
                validInvalid(),
            ]),
            vars({
                [validInvalidDecls.iconImg]: 'none',
            }),
            states([
                isValid([
                    vars({
                        // apply a *valid* icon indicator:
                        [validInvalidDecls.iconImg]: cssProps.iconValid,
                    }),
                ]),
                isInvalid([
                    vars({
                        // apply an *invalid* icon indicator:
                        [validInvalidDecls.iconImg]: cssProps.iconInvalid,
                    }),
                ]),
            ]),
        ]),
        validInvalidRefs,
        validInvalidDecls,
        ...restValidInvalid,
    ];
};
//#endregion validInvalid
// styles:
const iconElm = '::after';
export const usesEditableTextControlLayout = () => {
    // dependencies:
    // colors:
    const [iconColor, iconColorRefs] = usesIconColor();
    // states:
    const [, validInvalidRefs] = usesValidInvalidState();
    return composition([
        imports([
            // layouts:
            usesEditableControlLayout(),
            // colors:
            iconColor(), // do not import `iconColor()` on pseudo `::after`
        ]),
        layout({
            ...children(iconElm, [
                imports([
                    usesIconImage(
                    /*iconImage: */ validInvalidRefs.iconImg, 
                    /*iconColor: */ iconColorRefs.iconCol),
                ]),
                layout({
                    // layouts:
                    content: '""',
                    display: 'inline-block',
                    // sizes:
                    boxSizing: 'border-box',
                    blockSize: cssProps.iconSize,
                    inlineSize: `calc(${cssProps.iconSize} *  1.25)`,
                    marginInlineStart: `calc(${cssProps.iconSize} * -1.25)`,
                    maskPosition: 'right',
                    // accessibilities:
                    pointerEvents: 'none',
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'icon')), // apply general cssProps starting with icon***
                }),
            ]),
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    ]);
};
export const usesEditableTextControlVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesEditableControlVariants(),
            // layouts:
            sizes(),
        ]),
    ]);
};
export const usesEditableTextControlStates = () => {
    // dependencies:
    // states:
    const [validInvalid] = usesValidInvalidState();
    return composition([
        imports([
            // states:
            usesEditableControlStates(),
            validInvalid(),
        ]),
        states([
            isActive([
                imports([
                    markActive(),
                ]),
            ]),
            isFocus([
                imports([
                    markActive(),
                ]),
            ]),
            isArrive([
                imports([
                    markActive(),
                ]),
            ]),
            isNoValidation([
                layout({
                    ...children(iconElm, [
                        layout({
                            display: 'none',
                        }),
                    ]),
                }),
            ]),
        ]),
    ]);
};
export const usesEditableTextControl = () => {
    return composition([
        imports([
            // layouts:
            usesEditableTextControlLayout(),
            // variants:
            usesEditableTextControlVariants(),
            // states:
            usesEditableTextControlStates(),
        ]),
    ]);
};
export const useEditableTextControlSheet = createUseSheet(() => [
    mainComposition([
        imports([
            usesEditableTextControl(),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        // accessibilities:
        cursor: 'text',
        //#region animations
        iconSize: '1em',
        iconValid: `url("data:image/svg+xml,${escapeSvg("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#000' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>")}")`,
        iconInvalid: `url("data:image/svg+xml,${escapeSvg("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#000' d='M7.3,6.31,5,4,7.28,1.71a.7.7,0,1,0-1-1L4,3,1.71.72a.7.7,0,1,0-1,1L3,4,.7,6.31a.7.7,0,0,0,1,1L4,5,6.31,7.3A.7.7,0,0,0,7.3,6.31Z'/></svg>")}")`,
        //#endregion animations
    };
}, { prefix: 'tedit' });
export function EditableTextControl(props) {
    // styles:
    const sheet = useEditableTextControlSheet();
    // jsx:
    return (<EditableControl 
    // other props:
    {...props} 
    // variants:
    mild={props.mild ?? true} 
    // classes:
    mainClass={props.mainClass ?? sheet.main}/>);
}
export { EditableTextControl as default };
