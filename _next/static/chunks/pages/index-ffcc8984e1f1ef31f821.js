(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{35722:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return p}});var l=a(22122),r=a(32465),n=a(17375),i=a(22152),s=a(59278),o=a(54319),c=a(93071),u=a(67294),d=u.createElement;function m(){var e=(0,r.Z)(["\n                                    import { browse, wait, click } from 'geis'\n                                    \n                                    // Visit website with browser\n                                    const data = browse(\n                                        'json://google.com', \n                                        wait('network'),\n                                        click('#details'),\n                                        ({ data }) => ({\n                                            title: data['table > tr.title'].toString(),\n                                            description: data['p.description'].toString(),\n                                            summary: data[\n                                                'table > p:first-child.summary'\n                                            ].toString(),\n                                        })\n                                    )\n                                    \n                                    assert data === [{ title: 'jack' }, ...]\n                                    "]);return m=function(){return e},e}function f(){var e=(0,r.Z)(["\n                                    import { fetch, watch, key, interval } from 'geis'\n\n                                    // Watch changes to API call\n                                    const changes = watch(\n                                        fetch(Json, 'https://google.com', ({ data }) => ({\n                                            title: data['title'].toString(),\n                                            description: data['description'].toString(),\n                                            summary: data['summary'].toString(),\n                                            createdAt: data['created_at'].toDate()\n                                        })), \n                                        key('title'), \n                                        interval(5000),\n                                        ({ data }) => console.log('I changed!', data)\n                                    )\n                                    "]);return f=function(){return e},e}function g(){var e=(0,r.Z)(["\n                                    import { fetch } from 'geis'\n\n                                    // Fetch google and parse as JSON\n                                    const data = fetch('json://google.com', ({ data }) => ({\n                                        title: data['title'].toString(),\n                                        description: data['description'].toString(),\n                                        summary: data['summary'].toString(),\n                                        createdAt: data['created_at'].toDate()\n                                    }))\n\n                                    assert data === [{ title: 'jack' }, ...]\n                                "]);return g=function(){return e},e}var p=!0;t.default=function(e){e.cases,e.releases;var t=(0,n.Z)(e,["cases","releases"]);return d(o.Landing.Layout,(0,l.Z)({},t,{header:d("div",{className:"bg-gray-800 h-screen"},d(o.Header,{className:"bg-gray-800 max-w-5xl mx-auto",itemClassName:"text-white hover:text-gray-300",activeItemClassName:"text-gray-300"}),d(s.Hero.Container,{className:"",asset:d(i.Carousel.List,{className:"bg-gray-700 rounded-md overflow-hidden"},d(i.Carousel.Item,null,d(i.Browser,{title:"api"},d(i.Code,{className:"prose"},(0,c.S)(g())))),d(i.Carousel.Item,null,d(i.Browser,{title:"watch"},d(i.Code,{className:"prose"},(0,c.S)(f())))),d(i.Carousel.Item,null,d(i.Browser,{title:"browse"},d(i.Code,{className:"prose"},(0,c.S)(m())))))},d(s.Hero.Content,{title:d(u.Fragment,null,d("span",{className:"md:block"},"Data to enrich your")," ",d("span",{className:"text-primary-400 md:block"},"online business"))},"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.")))}),d("div",null,d("div",{className:"bg-gray-50"},d("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"},d(s.LogoCloud.List,null,d(s.LogoCloud.Item,{src:"https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"}),d(s.LogoCloud.Item,{src:"https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"}),d(s.LogoCloud.Item,{src:"https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"}),d(s.LogoCloud.Item,{src:"https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"}),d(s.LogoCloud.Item,{src:"https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"}))))),d("div",null,d(s.Content.Container,{asset:d(s.Content.Asset,null)},d(s.Content.Main,{subtitle:"Transactions",title:"What makes us different",action:d(s.Content.Action,null,"Learn More")},"Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae."))),d("div",{className:"bg-white"},d(s.Feature.List,null,d(s.Feature.Item,{name:"Invite team members",description:"You can manage phone, email and chat conversations all from a single mailbox."}),d(s.Feature.Item,{name:"List view",description:"You can manage phone, email and chat conversations all from a single mailbox."}),d(s.Feature.Item,{name:"Keyboard shortcuts",description:"You can manage phone, email and chat conversations all from a single mailbox."}),d(s.Feature.Item,{name:"Notifications",description:"Find what you need with advanced filters, bulk actions, and quick views."}),d(s.Feature.Item,{name:"Calendars",description:"You can manage phone, email and chat conversations all from a single mailbox."}),d(s.Feature.Item,{name:"Boards",description:"Find what you need with advanced filters, bulk actions, and quick views."}),d(s.Feature.Item,{name:"Reporting",description:"Find what you need with advanced filters, bulk actions, and quick views."}),d(s.Feature.Item,{name:"Mobile app",description:"Find what you need with advanced filters, bulk actions, and quick views."}))),d("div",{className:"bg-gray-50"},d(s.CTA.Container,null,d(s.CTA.Action,{title:d(u.Fragment,null,d("span",{className:"block"},"Ready to dive in?"),d("span",{className:"block"},"Start your free trial today."))},d(s.CTA.Button,null,"Get started"),d(s.CTA.Button,{variant:"secondary"},"Learn more")))),d("div",{className:"bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"},d(s.Blog.List,{header:d(s.Blog.Subscribe,null)},t.posts.map((function(e){return d(s.Blog.Item,{key:e.title,post:e})})))))}},45301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(35722)}])},51920:function(e,t,a){"use strict";var l=this&&this.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CallToAction=void 0;const n=r(a(67294));t.CallToAction=e=>{var{title:t,children:a}=e;l(e,["title","children"]);return n.default.createElement(n.default.Fragment,null,n.default.createElement("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},t),n.default.createElement("div",{className:"mt-8 flex justify-center space-x-5"},a))}},58237:function(e,t,a){"use strict";var l=this&&this.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CallToActionButton=void 0;const n=r(a(72779)),i=r(a(67294));t.CallToActionButton=e=>{var{variant:t="primary",children:a}=e;l(e,["variant","children"]);return i.default.createElement("div",{className:"inline-flex rounded-md shadow"},i.default.createElement("a",{href:"#",className:n.default("inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md",{"text-white bg-primary-600 hover:bg-primary-700":"primary"===t,"text-primary-700 bg-primary-100 hover:bg-primary-200":"secondary"===t})},a))}},76379:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CallToActionContainer=void 0;const r=l(a(72779)),n=l(a(67294));t.CallToActionContainer=({className:e,children:t})=>n.default.createElement("div",{className:r.default("max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8",e)},t)},45876:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=t.Container=t.Action=void 0;var l=a(51920);Object.defineProperty(t,"Action",{enumerable:!0,get:function(){return l.CallToAction}});var r=a(76379);Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return r.CallToActionContainer}});var n=a(58237);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n.CallToActionButton}})},49777:function(e,t,a){"use strict";var l=this&&this.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BlogListItem=void 0;const n=r(a(72779)),i=r(a(67294)),s=new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",year:"numeric"});t.BlogListItem=e=>{var{post:t}=e,a=l(e,["post"]);return i.default.createElement("div",{className:n.default(a.className)},i.default.createElement("p",{className:"text-sm text-gray-500"},i.default.createElement("time",{dateTime:t.date},s.format(new Date(t.date)))),i.default.createElement("a",{href:"#",className:"mt-2 block"},i.default.createElement("p",{className:"text-xl font-semibold text-gray-900"},t.title),i.default.createElement("p",{className:"mt-3 text-base text-gray-500"},t.summary)),i.default.createElement("div",{className:"mt-3"},i.default.createElement("a",{href:"#",className:n.default("text-base font-semibold text-blue-400 hover:text-blue-500",a.linkClassName)},"Read full story")))}},96971:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BlogList=void 0;const r=l(a(67294));t.BlogList=({children:e,header:t})=>r.default.createElement("div",{className:"relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"},t&&r.default.createElement("div",null,t),r.default.createElement("div",{className:"mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"},e))},46630:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BlogSubscribe=void 0;const r=l(a(67294));t.BlogSubscribe=({children:e})=>r.default.createElement("div",null,r.default.createElement("h2",{className:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"},"Press"),r.default.createElement("div",{className:"mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"},r.default.createElement("p",{className:"text-xl text-gray-500"},"Get weekly articles in your inbox on how to grow your business."),r.default.createElement("form",{className:"mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end"},r.default.createElement("div",null,r.default.createElement("label",{htmlFor:"email-address",className:"sr-only"},"Email address"),r.default.createElement("input",{id:"email-address",name:"email-address",type:"email",autoComplete:"email",required:!0,className:"appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 lg:max-w-xs",placeholder:"Enter your email"})),r.default.createElement("div",{className:"mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex"},r.default.createElement("button",{type:"button",className:"w-full bg-primary-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:w-auto sm:inline-flex"},"Notify me")))))},35865:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Subscribe=t.List=t.Item=void 0;var l=a(49777);Object.defineProperty(t,"Item",{enumerable:!0,get:function(){return l.BlogListItem}});var r=a(96971);Object.defineProperty(t,"List",{enumerable:!0,get:function(){return r.BlogList}});var n=a(46630);Object.defineProperty(t,"Subscribe",{enumerable:!0,get:function(){return n.BlogSubscribe}})},50671:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContentAction=void 0;const r=l(a(67294));t.ContentAction=e=>r.default.createElement("div",{className:"mt-8 inline-flex rounded-md shadow"},r.default.createElement("a",{href:"#",className:"flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"},e.children))},49494:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContentAsset=void 0;const r=l(a(67294));t.ContentAsset=e=>r.default.createElement("div",{className:"relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden"},r.default.createElement("img",{className:"absolute inset-0 h-full w-full object-cover",src:"https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100",alt:""}),r.default.createElement("div",{className:"absolute inset-0 bg-primary-200 mix-blend-multiply"}),r.default.createElement("div",{className:"absolute inset-0 bg-gradient-to-t from-primary-400 via-primary-400 opacity-90"}),r.default.createElement("div",{className:"relative px-8"},r.default.createElement("div",null,r.default.createElement("img",{className:"h-12",src:"https://tailwindui.com/img/logos/workcation.svg?color=white",alt:"Workcation"})),r.default.createElement("blockquote",{className:"mt-8"},r.default.createElement("div",{className:"relative text-lg font-medium text-white md:flex-grow"},r.default.createElement("svg",{className:"absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400",fill:"currentColor",viewBox:"0 0 32 32","aria-hidden":"true"},r.default.createElement("path",{d:"M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"})),r.default.createElement("p",{className:"relative"},"Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.")),r.default.createElement("footer",{className:"mt-4"},r.default.createElement("p",{className:"text-base font-semibold text-primary-200"},"Sarah Williams, CEO at Workcation")))))},37154:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContentContainer=void 0;const r=l(a(67294));t.ContentContainer=({asset:e,children:t})=>r.default.createElement("div",null,r.default.createElement("div",{className:"relative bg-white sm:py-24"},r.default.createElement("div",{className:"lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"},r.default.createElement("div",{className:"relative sm:py-16 lg:py-0"},r.default.createElement("div",{"aria-hidden":"true",className:"hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"},r.default.createElement("div",{className:"absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"}),r.default.createElement("svg",{className:"absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12",width:404,height:392,fill:"none",viewBox:"0 0 404 392"},r.default.createElement("defs",null,r.default.createElement("pattern",{id:"02f20b47-fd69-4224-a62a-4c9de5c763f7",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse"},r.default.createElement("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"}))),r.default.createElement("rect",{width:404,height:392,fill:"url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"}))),r.default.createElement("div",{className:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"},e)),r.default.createElement("div",{className:"relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"},t))))},69090:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContentMain=void 0;const r=l(a(67294));t.ContentMain=e=>r.default.createElement("div",{className:"pt-12 sm:pt-16 lg:pt-20"},r.default.createElement("div",{className:"text-base max-w-prose mx-auto lg:max-w-none"},e.subtitle&&r.default.createElement("h2",{className:"text-base text-blue-400 font-semibold tracking-wide uppercase"},e.subtitle.toUpperCase()),r.default.createElement("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},e.title)),r.default.createElement("div",{className:"mt-6 text-gray-500 space-y-6"},r.default.createElement("p",{className:"text-lg"},e.children)),e.action)},90737:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Action=t.Asset=t.Main=t.Container=void 0;var l=a(37154);Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return l.ContentContainer}});var r=a(69090);Object.defineProperty(t,"Main",{enumerable:!0,get:function(){return r.ContentMain}});var n=a(49494);Object.defineProperty(t,"Asset",{enumerable:!0,get:function(){return n.ContentAsset}});var i=a(50671);Object.defineProperty(t,"Action",{enumerable:!0,get:function(){return i.ContentAction}})},10039:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureItem=void 0;const r=l(a(67294)),n=a(80390),i=l(a(72779));t.FeatureItem=e=>r.default.createElement("div",{className:i.default("relative",e.className)},r.default.createElement("dt",null,r.default.createElement(n.CheckIcon,{className:"absolute h-6 w-6 text-green-500","aria-hidden":"true"}),r.default.createElement("p",{className:"ml-9 text-lg leading-6 font-medium text-gray-900"},e.name)),r.default.createElement("dd",{className:"mt-2 ml-9 text-base text-gray-500"},e.description))},72490:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureList=void 0;const r=l(a(67294));t.FeatureList=({children:e})=>r.default.createElement("div",{className:""},r.default.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:pb-24 lg:px-8"},r.default.createElement("div",{className:"max-w-3xl mx-auto text-center"},r.default.createElement("h2",{className:"text-3xl font-extrabold text-gray-900"},"All-in-one platform"),r.default.createElement("p",{className:"mt-4 text-lg text-gray-500"},"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.")),r.default.createElement("dl",{className:"mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"},e)))},63203:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Item=t.List=void 0;var l=a(72490);Object.defineProperty(t,"List",{enumerable:!0,get:function(){return l.FeatureList}});var r=a(10039);Object.defineProperty(t,"Item",{enumerable:!0,get:function(){return r.FeatureItem}})},18116:function(e,t,a){"use strict";var l=this&&this.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HeroContainer=void 0;const n=r(a(67294)),i=r(a(72779));t.HeroContainer=e=>{var{className:t,children:a}=e,r=l(e,["className","children"]);return n.default.createElement("div",{className:i.default(t,"relative bg-gray-800 overflow-hidden")},n.default.createElement("div",{className:"hidden sm:block sm:absolute sm:inset-0","aria-hidden":"true"},n.default.createElement("svg",{className:"absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0",width:364,height:484,viewBox:"0 0 364 484",fill:"none"},n.default.createElement("defs",null,n.default.createElement("pattern",{id:"eab71dd9-9d7a-47bd-8044-256344ee00d0",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse"},n.default.createElement("rect",{x:0,y:0,width:4,height:4,fill:"currentColor"}))),n.default.createElement("rect",{width:364,height:484,fill:"url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"}))),n.default.createElement("div",{className:"relative flex items-center justify-center"},n.default.createElement("main",{className:"mt-16 sm:mt-16"},n.default.createElement("div",{className:"mx-auto max-w-7xl"},n.default.createElement("div",{className:"lg:grid lg:grid-cols-12 lg:gap-8"},n.default.createElement("div",{className:"px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"},a),n.default.createElement("div",{className:"mt-16 sm:mt-24 lg:mt-0 lg:col-span-6"},n.default.createElement("div",{className:"shadow-xl sm:max-w-lg sm:w-full sm:mx-auto rounded-lg"},r.asset)))))))}},50461:function(e,t,a){"use strict";var l=this&&this.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HeroContent=void 0;const n=r(a(67294)),i=a(28682);t.HeroContent=e=>{var{className:t,children:a}=e,r=l(e,["className","children"]);return n.default.createElement("div",null,n.default.createElement(i.HeroInstall,null),n.default.createElement("h1",{className:"mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"},r.title),n.default.createElement("p",{className:"mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"},a),n.default.createElement("p",{className:"mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10"},"Used by"),n.default.createElement("div",{className:"mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0"},n.default.createElement("div",{className:"flex flex-wrap items-start justify-between"},n.default.createElement("div",{className:"flex justify-center px-1"},n.default.createElement("img",{className:"h-9 sm:h-10",src:"https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",alt:"Tuple"})),n.default.createElement("div",{className:"flex justify-center px-1"},n.default.createElement("img",{className:"h-9 sm:h-10",src:"https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",alt:"Workcation"})),n.default.createElement("div",{className:"flex justify-center px-1"},n.default.createElement("img",{className:"h-9 sm:h-10",src:"https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",alt:"StaticKit"})))))}},28682:function(e,t,a){"use strict";var l=this&&this.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HeroInstall=void 0;const n=r(a(67294)),i=a(46948),s=a(71780),o=a(80390),c=r(a(86102)),u="npm install geis --save";t.HeroInstall=e=>{var{className:t,children:a}=e;l(e,["className","children"]);const r=i.useTrack(),[d,m]=c.default(u,{successDuration:1e3});return n.default.createElement("div",{className:"cursor-pointer group inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-300",onClick:()=>{d||(r.installCopied(),m())}},n.default.createElement("span",{className:"px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primary-500 rounded-full"},"Install"),n.default.createElement("pre",{className:"ml-4 text-sm"},u),d?n.default.createElement(o.CheckIcon,{className:"ml-4 w-5 h-5 text-white group-hover:text-gray-300","aria-hidden":"true"}):n.default.createElement(s.ClipboardCopyIcon,{className:"ml-4 w-5 h-5 text-white group-hover:text-gray-300","aria-hidden":"true"}))}},57855:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Content=t.Container=void 0;var l=a(18116);Object.defineProperty(t,"Container",{enumerable:!0,get:function(){return l.HeroContainer}});var r=a(50461);Object.defineProperty(t,"Content",{enumerable:!0,get:function(){return r.HeroContent}})},59278:function(e,t,a){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.LogoCloud=t.Content=t.CTA=t.Blog=t.Feature=t.Hero=void 0,t.Hero=n(a(57855)),t.Feature=n(a(63203)),t.Blog=n(a(35865)),t.CTA=n(a(45876)),t.Content=n(a(90737)),t.LogoCloud=n(a(92172))},63536:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LogoCloudItem=void 0;const r=l(a(67294));t.LogoCloudItem=e=>r.default.createElement("div",{className:"col-span-1 flex justify-center md:col-span-2 lg:col-span-1"},r.default.createElement("img",{className:"h-12",src:e.src,alt:"Tuple"}))},42613:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LogoCloudList=void 0;const r=l(a(67294));t.LogoCloudList=({children:e})=>r.default.createElement("div",{className:"grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"},e)},92172:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Item=t.List=void 0;var l=a(42613);Object.defineProperty(t,"List",{enumerable:!0,get:function(){return l.LogoCloudList}});var r=a(63536);Object.defineProperty(t,"Item",{enumerable:!0,get:function(){return r.LogoCloudItem}})}},function(e){e.O(0,[774,474,721,319,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);