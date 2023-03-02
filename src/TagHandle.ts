import Tag from "./Tag";

export default class TagHandle implements ITagHandle{
  private _parentTags: HTMLTag[] = [];
  private _content: string = '';
  constructor() {
  }
  content(content : string): string{
    this._parentTags.reverse().map((tag : HTMLTag, index : number)=>{
      if(index === 0){
        this._content = tag.content(content)
      } else {
        this._content = tag.content(this._content)
      }
    })
    return this._content
  }

  tag(tag : TagProps,style : IStyle = {}): ITagHandle{
    this._parentTags.push(new Tag(tag,style))
    return this;
  }
}