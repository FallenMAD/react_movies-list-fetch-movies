(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),n=c.n(i),a=(c(15),c(10)),s=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=(c(21),c(9)),v=c.n(u);function h(e){return(t=500,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("".concat("https://www.omdbapi.com/?apikey=6e933e75","&t=").concat(e))})).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}));var t}var O=function(e){var t=e.handleMovieAdd,c=Object(r.useState)(""),i=Object(s.a)(c,2),n=i[0],a=i[1],d=Object(r.useState)(null),m=Object(s.a)(d,2),u=m[0],O=m[1],x=Object(r.useState)(!1),f=Object(s.a)(x,2),p=f[0],N=f[1],g=Object(r.useState)(!1),y=Object(s.a)(g,2),w=y[0],k=y[1],I=function(e){var t=e.Poster,c=e.Title,i=e.Plot,n=e.imdbID,a={title:c,description:i,imdbUrl:"https://www.imdb.com/title/".concat(n),imdbId:n,imgUrl:"N/A"===t?"https://via.placeholder.com/360x270.png?text=no%20preview":t};O(a)},C=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),k(!1),e.prev=2,e.next=5,h(n).finally((function(){return N(!1)}));case 5:if(!("Error"in(t=e.sent))){e.next=10;break}throw new Error("Error");case 10:I(t);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),k(!0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:n,onChange:function(e){a(e.target.value),k(!1)}})}),w&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button is-light",{"is-loading":p}),onClick:function(e){e.preventDefault(),C(),N(!0)},disabled:!n,children:u?"Search Movie":"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:u&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return t(u),a(""),O(null),void N(!1)},children:"Add to the list"})})]})]}),u&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:u})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{handleMovieAdd:function(e){c.find((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};n.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.060f18fe.chunk.js.map