import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Markdown from 'markdown-to-jsx';
import Splitter from 'm-react-splitters';
import Bookmark from 'react-bookmark';

import { mdTemplateOverrides }  from './markdown-styles';

import 'm-react-splitters/lib/splitters.css';
import './App.css';

const colors = {
    background: '#666',
    contentBackground: '#fff',
    lightBorder: '#9999ff'

};

const SveltHeader = styled.header`
    max-height: 100px;
`;

const SiteContainer = styled.div`
    padding: 5px;
    background: ${colors.background};
    text-align: left;
    height: 100vh;
`;

const OutlinedMain = styled.main`
    border: solid 1px ${colors.lightBorder};
    background: ${colors.contentBackground};
    height:100%;
`;

const MarkdownContainer = styled(Markdown)`
    display: block;
    height: 100%;
    overflow: auto;
    background-color: ${colors.contentBackground};

`;

const MarkdownEditor = styled.textarea`
    min-height: 200px;
    width: 100%;
    resize: none;
    height: 100%;
`;

function App() {
    const [md, setMd] = useState(baseMD);
    const handleMDChange = event => setMd(event.target.value);
    return (
        <div className="App">
            <SiteContainer>
                <SveltHeader>
                    <h1>Markdown Working example</h1>
                    <Bookmark
                        href="http://localhost:3000/"
                        title="markdown working example"
                    />
                </SveltHeader>
                <OutlinedMain>
                    <Splitter
                        position="horizontal"
                        primaryPaneMaxHeight="80%"
                        primaryPaneMinHeight={0}
                        primaryPaneHeight="400px"
                        dispatchResize={true}
                        postPoned={true}
                    >
                        <Splitter
                            position="vertical"
                            primaryPaneMaxWidth="80%"
                            primaryPaneMinWidth={0}
                            primaryPaneWidth="400px"
                            postPoned={false}
                        >
                            <MarkdownEditor value={md} onChange={handleMDChange} />
                            <MarkdownContainer
                                options={{
                                    overrides: {
                                        ...mdTemplateOverrides
                                    }
                                }}
                            >
                                {md}
                            </MarkdownContainer>
                        </Splitter>
                        <div></div>
                    </Splitter>
                </OutlinedMain>
            </SiteContainer>

        </div>
    );
}


const baseMD = `

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


`;

export default App;
