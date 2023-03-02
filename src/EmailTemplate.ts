import TagHandle from "./TagHandle";

export default class EmailTemplate implements IEmailTemplate{
  private defaultStyleText : IStyle = {
    "font-size": "16px",
    "line-height": "18px",
    "padding": "0",
    "margin": "0 0 5px 0",
    "font-family": "Helvetica,Arial,sans-serif",
  }
  content : string = '';
  constructor() {

  }

  getDefaultStyle(style? : IStyle){
    return this.defaultStyleText;
  }

  setDefaultStyle(style? : IStyle){
    this.defaultStyleText = style || {};
    return this;
  }

  tag(tag : TagProps,style? : IStyle): ITagHandle{
    return (new TagHandle()).tag(tag,style)
  }

  title(text : string, style? : IStyle){
    this.content += this.tag('div').tag('p',{...this.defaultStyleText,...style}).tag('b').content(text)
    return this
  }


  text(text : string, style? : IStyle) : this {
    this.content += this.tag('div').tag('p',{...this.defaultStyleText,...style}).content(text)
    return this
  }

  custom(content: string): this {
    this.content += content;
    return this
  }

  list(data: ItemList, style?: IStyle, styleItem? : IStyle) : this {
    let content = '';
    Object.keys(data).map((key: string)=>{
      const textKey = this.tag('b',{"text-transform" : 'capitalize'}).content(key)
      content += this.tag('div').tag('p',{...this.defaultStyleText,...styleItem}).content(`${textKey}: ${data[key]}`)
    })
    this.content += this.tag('div',style).content(content)
    return this
  }

  render() {
    return this.content
  }
}