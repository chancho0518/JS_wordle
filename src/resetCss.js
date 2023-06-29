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
  tagElement_1st[i] = document.querySelector(tag_1st[i]);
  if (tagElement_1st[i]) {
    tagElement_1st[i].style.margin = "0";
    tagElement_1st[i].style.padding = "0";
    tagElement_1st[i].style.border = "0";
    tagElement_1st[i].style.fontSize = "100%";
    tagElement_1st[i].style.font = "inherit";
    tagElement_1st[i].style.verticalAlign = "baseline";
  }
}

let tagElement_2nd = [];
for (let i = 0; i < tag_2nd.length; i++) {
  tagElement_2nd[i] = document.querySelector(tag_2nd[i]);
  if (tagElement_2nd[i]) {
    tagElement_2nd[i].style.display = "block";
  }
}

let tagElement_3th = [];
for (let i = 0; i < tag_3th.length; i++) {
  tagElement_3th[i] = document.querySelector(tag_3th[i]);
  if (tagElement_3th[i]) {
    tagElement_3th[i].style.lineHeight = "1";
  }
}

let tagElement_4th = [];
for (let i = 0; i < tag_4th.length; i++) {
  tagElement_4th[i] = document.querySelector(tag_4th[i]);
  if (tagElement_4th[i]) {
    tagElement_4th[i].style.listStyle = "none";
  }
}

let tagElement_5th = [];
for (let i = 0; i < tag_5th.length; i++) {
  tagElement_5th[i] = document.querySelector(tag_5th[i]);
  if (tagElement_5th[i]) {
    tagElement_5th[i].style.quotes = "none";
  }
}

let tagElement_6th = [];
for (let i = 0; i < tag_5th.length; i++) {
  tagElement_6th[i] = document.querySelector(tag_6th[i]);
  if (tagElement_6th[i]) {
    tagElement_6th[i].style.content = "";
    tagElement_6th[i].style.content = "none";
  }
}

let tagElement_7th = [];
for (let i = 0; i < tag_5th.length; i++) {
  tagElement_7th[i] = document.querySelector(tag_7th[i]);
  if (tagElement_7th[i]) {
    tagElement_7th[i].style.borderCollapse = "collapse";
    tagElement_7th[i].style.borderSpacing = "0";
  }
}

let tagElement_8th = [];
for (let i = 0; i < tag_8th.length; i++) {
  tagElement_8th[i] = document.querySelector(tag_8th[i]);
  if (tagElement_8th[i]) {
    tagElement_8th[i].style.transform = "rotate(0.04deg)";
  }
}
