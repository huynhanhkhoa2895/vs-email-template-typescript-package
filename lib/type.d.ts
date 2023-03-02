type TagProps = 'p' | 'div' | 'b' | 'hr' | 'font' | 'span' | 'table' | 'tr' | 'td' | 'th';
interface HTMLTag {
    readonly _tag: TagProps;
    readonly _style: IStyle;
    getTag(): TagProps;
    content(content: string): string;
}
type ItemList = {
    [key: string]: string;
};
type IStyle = {
    [key: string]: string;
};
interface ITagHandle {
    tag(tag: TagProps, style?: IStyle): ITagHandle;
    content(content: string): string;
}
interface IEmailTemplate {
    content: string;
    setDefaultStyle(style?: IStyle): this;
    getDefaultStyle(): IStyle;
    title(text: string, style?: IStyle): this;
    text(text: string, style?: IStyle): this;
    tag(tag: TagProps, style?: IStyle): ITagHandle;
    list(data: ItemList, style?: IStyle): this;
    custom(text: string): this;
    render(): string;
}
