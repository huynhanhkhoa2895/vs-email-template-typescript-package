
export default class Tag implements HTMLTag{
  readonly _tag: TagProps;
  readonly _style: IStyle;
  private _content: string = '';
  constructor(tag : TagProps, style? : IStyle) {
    this._tag = tag;
    this._style = style || {};
  }
  content(content : string): string{
    this._content = `<${this._tag} ${Object.keys(this._style).length === 0 ? '' : `style="${this._getStyleString()}"`} >${content || ''}</${this._tag}>`;
    return this._content;
  }
  getTag(): TagProps {
    return this._tag
  }
  private _getStyleString() {
    let styleString = '';
    Object.keys(this._style).map((key)=>{
      styleString += `${key}: ${this._style[key]};`;
    })
    return styleString;
  }
}