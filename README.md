# Description
To be able to use email templates, you must render HTML String. That won't be a problem if it's just a short template. But what if it's a long email template with lots of variables in it? The code will not be clear because it is both a string and has to be assigned a variable inside

## From
```
<div style="margin-bottom: 20px">
    <div><p style="font-weight: bold">This is Title Mail</p></div>
</div>
<div style="margin-bottom: 20px">
    <p>Sort Content</p>
</div>
<div>
    <div>
        <p><b>Name</b></p> : T
    </div>
    <div>
        <p><b>Age</b></p> : 18
    </div>
    <div>
        <p><b>City</b></p> : Tokyo
    </div>
    </div>
</div>
```
## To
```
import Template from 'vs-email-template-typescript-package';
function renderTemplate(){
    return Template()
        .title('This is Title Mail', { 'margin-bottom': '20px' })
        .text('Sort Content', { 'margin-bottom': '20px' })
        .list({
            "Name": "T",
            "Age" : "19",
            "City" : "Tokyo"
        })
        .render()
}
```


# Installing
## Package manager
Using npm:
```
npm install vs-email-template-typescript-package
```
Using yarn:
```
yarn add vs-email-template-typescript-package
```
# Usage
## Example
```
import Template from 'vs-email-template-typescript-package';

function renderTemplate(){
    return Template()
        .title('Title Hello', { 'margin-bottom': '20px' })
        .text('Hello')
        .render()
}
```
We can use these are API to choose type of render
```
1. title(content: string, style?)
2. text(content: string, style?)
3. title(content: string, style?)
4. custom(content: string)
5. list(data: {[key : string] : string}, styleContainer?, style?)
```
Then we need use function <b>render()</b> to render a string HTML and we can use that in email template



## With multiple paragraph
```
import Template from 'vs-email-template-typescript-package';

function renderTemplate(){
    return Template()
        .title('Title Hello')
        .text('Hello', { 'margin-bottom': '20px' })
        .text('My name is T')
        .list({
            "Age" : "19",
            "City" : "Tokyo"
        })
        .render()
}
```
## With custom tag if you need to add some tag 
```
import Template from 'vs-email-template-typescript-package';

function renderTemplate(){
    const customIntro = Template().tag('div').tag('p',{color: "red"}).content('hello this is intro')
    return Template()
        .title('Title Hello')
        .custom(intro)
        .text('I'm here)
        .render()
}
```