import { EmojiPanelOption } from './interface';
export declare const ICON_LIBS: {
    expression: string;
    goods: string;
};
export declare class EmojiPanel {
    options: EmojiPanelOption;
    panel: HTMLElement;
    constructor(options: EmojiPanelOption);
    init(): void;
    createIconDOM(type: string): void;
    changeIcons(type: string): void;
}
declare const _default: {
    ICON_LIBS: {
        expression: string;
        goods: string;
    };
    EmojiPanel: typeof EmojiPanel;
};
export default _default;
