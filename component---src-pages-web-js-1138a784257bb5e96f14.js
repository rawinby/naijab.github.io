(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(166),c=a(157),u=function(e){return r.a.createElement("li",null,r.a.createElement(c.a,{to:e.slug},e.title))},s=function(e){var t=e.tagTitle,a=e.posts;return r.a.createElement(n.Fragment,null,r.a.createElement(o.If,{condition:a.length>0},r.a.createElement(o.Then,null,r.a.createElement("h3",null,t),r.a.createElement("ul",null,a.map(function(e,t){var a=e.node,n=a.frontmatter,l=n.title,i=n.date,o=a.fields.slug;return r.a.createElement(u,{title:l,date:i,slug:o,key:t,id:t})}))),r.a.createElement(o.Else,null,r.a.createElement("h3",null,"No Post.."))))};s.propTypes={posts:i.a.array.isRequired};var d=s,f=a(163),m=function(e){return r.a.createElement(f.a,{title:e.title,keywords:e.keywords,location:e.location},r.a.createElement("h1",null,e.title," Posts List"),r.a.createElement("span",null,"อัพเดตล่าสุด: ",e.lastUpdate),r.a.createElement("br",null),r.a.createElement("br",null),e.children)};a.d(t,"pageQuery",function(){return p});t.default=function(e){var t=e.data.site.siteMetadata.lastUpdate,a=function(e,t){return e.filter(function(e){return e.node.frontmatter.tags.some(function(e){return e===t})})}(e.data.allMarkdownRemark.edges,"react");return r.a.createElement(m,{title:"Web",lastUpdate:t,location:e.location},r.a.createElement(d,{tagTitle:"React",posts:a}))};var p="2808215546"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a});a(158);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},160:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(165),u=a.n(c),s=function(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o+" | "+c.siteMetadata.title},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o+" | "+c.siteMetadata.title},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})};s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=s},161:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(54),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},162:function(e){e.exports={data:{site:{siteMetadata:{title:"naijab.com",description:"just a lonely man likes coding.",author:"Nattapon Pondongnok"}}}}},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(194),i=a(193),o=a(195),c=a(196),u=a(206),s=a(197),d=a(198),f=a(157),m=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return r.a.createElement(i.a,{color:"light",fixed:"top",dark:!0,expand:"md",className:"navbar-red-shadow"},r.a.createElement(l.a,null,r.a.createElement(o.a,{href:"/"},"naijab.com"),r.a.createElement(c.a,{onClick:function(){return a(!t)}}),r.a.createElement(u.a,{isOpen:t,navbar:!0},r.a.createElement(s.a,{className:"ml-auto",navbar:!0},r.a.createElement(d.a,null,r.a.createElement(f.a,{to:"/app",className:"nav-link"},"APP")),r.a.createElement(d.a,null,r.a.createElement(f.a,{to:"/web",className:"nav-link"},"WEB")),r.a.createElement(d.a,null,r.a.createElement(f.a,{to:"/game",className:"nav-link"},"GAME")),r.a.createElement(d.a,null,r.a.createElement(f.a,{to:"/tech",className:"nav-link"},"TECH")),r.a.createElement(d.a,null,r.a.createElement(f.a,{to:"/life",className:"nav-link"},"LiFE")),r.a.createElement(d.a,null,r.a.createElement(f.a,{to:"/all",className:"nav-link"},"ALL"))))))},p=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"© ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://naijab.com"},"naijab.com")," ",", Built with",r.a.createElement("a",{href:"https://www.gatsbyjs.org"}," Gatsby")))},E=a(160);t.a=function(e){var t=e.isHome?"home-container":"default-container";return r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{title:e.title,description:e.description,keywords:e.keywords}),r.a.createElement(m,null),r.a.createElement(l.a,{className:t},e.children),r.a.createElement(p,null))}},166:function(e,t,a){var n,r,l;r=[t,a(4)],void 0===(l="function"==typeof(n=function(e,t){"use strict";function a(e){return"function"==typeof e.children?e.children():e.children||null}function n(e){return a(e)}function r(e){return a(e)}function l(e){var t=e.condition,a=e.children;return null==a?null:[].concat(a).find(function(e){return e.type!==r^!t})||null}var i;Object.defineProperty(e,"__esModule",{value:!0}),e.Then=n,e.Else=r,e.If=l,e.Unless=c,e.When=u,e.default=void 0,t=(i=t)&&i.__esModule?i:{default:i},n.propTypes=r.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var o=t.default.oneOfType([t.default.instanceOf(n),t.default.instanceOf(r),t.default.node]);function c(e){var t=e.condition,n=e.children;return!t&&n?a({condition:t,children:n}):null}function u(e){var t=e.condition,n=e.children;return t&&n?a({condition:t,children:n}):null}l.propTypes={condition:t.default.bool.isRequired,children:t.default.oneOfType([t.default.arrayOf(o),o])},c.propTypes={condition:t.default.bool.isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},c.defaultProps={children:null},u.propTypes={condition:t.default.bool.isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},u.defaultProps={children:null},l.Then=n,l.Else=r,l.When=u,l.Unless=c;var s=l;e.default=s})?n.apply(t,r):n)||(e.exports=l)}}]);
//# sourceMappingURL=component---src-pages-web-js-1138a784257bb5e96f14.js.map