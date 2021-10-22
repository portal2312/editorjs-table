# Table tool

github: [editor-js/table](https://github.com/editor-js/table).

npm: [@editorjs/table](https://www.npmjs.com/package/@editorjs/table)

dependence editor-js/table version: 2.0.1

## Install

```bash
npm install --save git+https://github.com/portal2312/editorjs-table.git
```

## Hotfix

### typo `withHeading` in `plugin.js`

Fixed `withHeading` to `withHeadings`:

- `./plugin.js`

### Uncaught TypeError: Cannot read properties of null (reading 'getBoundingClientRect')

UI: Click to "Delete row" at Last row.

Messages:

```js
Uncaught TypeError: Cannot read properties of null (reading 'getBoundingClientRect')
    at getCoords (dom.js:48)
    at Module.getRelativeCoordsOfTwoElems (dom.js:67)
    at eval (table.js:746)
    at Toolbox.show (toolbox.js:131)
    at Table.updateToolboxesPosition (table.js:744)
    at Table.hideToolboxes (table.js:682)
    at Object.onClick (table.js:260)
    at Popover.popoverClicked (popover.js:107)
    at HTMLDivElement.eval (popover.js:76)
```

Fixed:

- `./table.js`

Reason:

- `this.deleteRow()` 이후 `this.hideToolboxes()` 에서 `this.hoveredRow` 값을 이용하여 element 를 찾아 제어하려고 함.
