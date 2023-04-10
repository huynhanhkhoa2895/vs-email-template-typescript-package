export default class EmailTemplate implements IEmailTemplate {
    private defaultStyleText;
    content: string;
    constructor();
    getDefaultStyle(): IStyle;
    setDefaultStyle(style?: IStyle): this;
    tag(tag: TagProps, style?: IStyle): ITagHandle;
    title(text: string, style?: IStyle): this;
    text(text: string, style?: IStyle): this;
    custom(content: string): this;
    list(data: ItemList, style?: IStyle, styleItem?: IStyle): this;
    render(): string;
}
