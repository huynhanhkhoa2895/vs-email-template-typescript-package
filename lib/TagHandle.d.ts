export default class TagHandle implements ITagHandle {
    private _parentTags;
    private _content;
    constructor();
    content(content: string): string;
    tag(tag: TagProps, style?: IStyle): ITagHandle;
}
