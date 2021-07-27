import { EmojiPanelOption } from './interface';
export declare const ICON_LIBS: {
    expression: string;
    goods: string;
};
export default class EmojiPanel {
    options: EmojiPanelOption;
    panel: HTMLElement;
    constructor(options: EmojiPanelOption);
    init(): void;
    createIconDOM(type: string): void;
    changeIcons(type: string): void;
}
