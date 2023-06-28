const tag_1st = [
  "html",
  "body",
  "div",
  "span",
  "applet",
  "object",
  "iframe",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "blockquote",
  "pre",
  "a",
  "abbr",
  "acronym",
  "address",
  "big",
  "cite",
  "code",
  "del",
  "dfn",
  "em",
  "img",
  "ins",
  "kbd",
  "q",
  "s",
  "samp",
  "small",
  "strike",
  "strong",
  "sub",
  "sup",
  "tt",
  "var",
  "b",
  "u",
  "i",
  "center",
  "dl",
  "dt",
  "dd",
  "ol",
  "ul",
  "li",
  "fieldset",
  "form",
  "label",
  "legend",
  "table",
  "caption",
  "tbody",
  "tfoot",
  "thead",
  "tr",
  "th",
  "td",
  "article",
  "aside",
  "canvas",
  "details",
  "embed",
  "figure",
  "figcaption",
  "footer",
  "header",
  "hgroup",
  "menu",
  "nav",
  "output",
  "ruby",
  "section",
  "summary",
  "time",
  "mark",
  "audio",
  "video",
];
const tag_2nd = [
  "article",
  "aside",
  "details",
  "figcaption",
  "figure",
  "footer",
  "header",
  "hgroup",
  "menu",
  "nav",
  "section",
];
const tag_3th = ["body"];
const tag_4th = ["ol", "ul"];
const tag_5th = ["blockquote", "q"];
const tag_6th = [
  "blockquote:before",
  "blockquote:after",
  "q:before",
  "q:after",
];
const tag_7th = ["table"];
const tag_8th = ["p", "h4", "h3", "h2", "h1", "span", "button", "input"];

let tagElement_1st = [];
for (let i = 0; i < tag_1st.length; i++) {
  tagElement_1st[i] = document.createElement(tag_1st[i]);
  tagElement_1st[i].style.margin = "0";
  tagElement_1st[i].style.padding = "0";
  tagElement_1st[i].style.border = "0";
  tagElement_1st[i].style.fontSize = "100%";
  tagElement_1st[i].style.font = "inherit";
  tagElement_1st[i].style.verticalAlign = "baseline";
  console.log(tagElement_1st[i]);
}

let tagElement_2nd = [];
for (let i = 0; i < tag_2nd.length; i++) {
  tagElement_2nd[i] = document.createElement(tag_2nd[i]);
  tagElement_2nd[i].style.display = "block";
  console.log(tagElement_2nd[i]);
}

let tagElement_3th = [];
for (let i = 0; i < tag_3th.length; i++) {
  tagElement_3th[i] = document.createElement(tag_3th[i]);
  tagElement_3th[i].style.lineHeight = "1";
  console.log(tagElement_3th[i]);
}

let tagElement_4th = [];
for (let i = 0; i < tag_4th.length; i++) {
  tagElement_4th[i] = document.createElement(tag_4th[i]);
  tagElement_4th[i].style.listStyle = "none";
  console.log(tagElement_4th[i]);
}

let tagElement_5th = [];
for (let i = 0; i < tag_5th.length; i++) {
  tagElement_5th[i] = document.createElement(tag_5th[i]);
  tagElement_5th[i].style.quotes = "none";
  console.log(tagElement_5th[i]);
}

let tagElement_6th = [];
for (let i = 0; i < tag_5th.length; i++) {
  tagElement_6th[i] = document.createElement(tag_6th[i]);
  tagElement_6th[i].style.content = "";
  tagElement_6th[i].style.content = "none";
  console.log(tagElement_6th[i]);
}

let tagElement_7th = [];
for (let i = 0; i < tag_5th.length; i++) {
  tagElement_7th[i] = document.createElement(tag_7th[i]);
  tagElement_7th[i].style.borderCollapse = "collapse";
  tagElement_7th[i].style.borderSpacing = "0";
  console.log(tagElement_7th[i]);
}

let tagElement_8th = [];
for (let i = 0; i < tag_8th.length; i++) {
  tagElement_8th[i] = document.createElement(tag_8th[i]);
  tagElement_8th[i].style.transform = "rotate(0.04deg)";
  console.log(tagElement_8th[i]);
}
