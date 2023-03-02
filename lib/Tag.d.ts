export default class Tag implements HTMLTag {
    readonly _tag: TagProps;
    readonly _style: IStyle;
    private _content;
    constructor(tag: TagProps, style?: IStyle);
    content(content: string): string;
    getTag(): TagProps;
    private _getStyleString;
}
