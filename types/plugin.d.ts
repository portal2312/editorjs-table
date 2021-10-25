/**
 * @typedef {object} TableConfig - configuration that the user can set for the table
 * @property {number} rows - number of rows in the table
 * @property {number} cols - number of columns in the table
 */
/**
 * @typedef {object} Tune - setting for the table
 * @property {string} name - tune name
 * @property {HTMLElement} icon - icon for the tune
 * @property {boolean} isActive - default state of the tune
 * @property {void} setTune - set tune state to the table data
 */
/**
 * @typedef {object} TableData - object with the data transferred to form a table
 * @property {boolean} withHeadings - setting to use cells of the first row as headings
 * @property {string[][]} content - two-dimensional array which contains table content
 */
/**
 * Table block for Editor.js
 */
export default class TableBlock {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Allow to press Enter inside the CodeTool textarea
     *
     * @returns {boolean}
     * @public
     */
    public static get enableLineBreaks(): boolean;
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
        icon: string;
        title: string;
    };
    /**
     * Plugins styles
     *
     * @returns {{settingsWrapper: string}}
     */
    static get CSS(): {
        settingsWrapper: string;
    };
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: TableData, config: TableConfig, api: object, readOnly: boolean}}
     *   data - previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     *   readOnly - read only mode flag
     */
    constructor({ data, config, api, readOnly }: {
        data: TableData;
        config: TableConfig;
        api: object;
        readOnly: boolean;
    });
    api: any;
    readOnly: boolean;
    data: {
        withHeadings: boolean;
        content: string[][];
    };
    config: TableConfig;
    table: Table;
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render(): HTMLDivElement;
    /** creating container around table */
    container: Element;
    /**
     * Add plugin settings
     *
     * @returns {HTMLElement} - wrapper element
     */
    renderSettings(): HTMLElement;
    /**
     * Extract table data from the view
     *
     * @returns {TableData} - saved data
     */
    save(): TableData;
    /**
     * Changes the state of the tune
     * Updates its representation in the table
     *
     * @param {Tune} tune - one of the table settings
     * @param {HTMLElement} tuneButton - DOM element of the tune
     * @returns {void}
     */
    toggleTune(tune: Tune, tuneButton: HTMLElement): void;
    /**
     * Plugin destroyer
     *
     * @returns {void}
     */
    destroy(): void;
}
/**
 * - configuration that the user can set for the table
 */
export type TableConfig = {
    /**
     * - number of rows in the table
     */
    rows: number;
    /**
     * - number of columns in the table
     */
    cols: number;
};
/**
 * - setting for the table
 */
export type Tune = {
    /**
     * - tune name
     */
    name: string;
    /**
     * - icon for the tune
     */
    icon: HTMLElement;
    /**
     * - default state of the tune
     */
    isActive: boolean;
    /**
     * - set tune state to the table data
     */
    setTune: void;
};
/**
 * - object with the data transferred to form a table
 */
export type TableData = {
    /**
     * - setting to use cells of the first row as headings
     */
    withHeadings: boolean;
    /**
     * - two-dimensional array which contains table content
     */
    content: string[][];
};
import Table from "./table";
