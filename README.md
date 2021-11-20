# &lt;EditableTextControl /&gt;
A generic element with `valid`/`invalid` state.  
The layout and appearance have been optimized for text editing.

## Preview

```jsx
<EditableTextControl tag='textarea' theme='primary' size='lg' gradient={true} outlined={true} enableValidation={true} isValid={true} >
    hello world
</EditableTextControl>
```
Rendered to:
```html
<textarea class="c1 thPrimary szLg gradient outlined vald">
    hello world
</textarea>
```

## Features
* Includes all features in [`<EditableControl />`](https://www.npmjs.com/package/@nodestrap/editable-control).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/editable-text-control
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
