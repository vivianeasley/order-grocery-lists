(()=>{let f$=Object.hasOwnProperty,h$={},j$,k$=a$=>{let b$=h$[a$];return b$||(b$=h$[a$]={exports:{}},j$[a$](b$.exports,b$)),b$.exports},l$=a$=>{if(a$&&a$.__esModule)return a$;let b$={};for(let c$ in a$)f$.call(a$,c$)&&(b$[c$]=a$[c$]);return b$.default=a$,b$},p$=a$=>l$(k$(a$));j$={1(){var w=function(b,a,c){if(typeof b!=="string")throw new TypeError("Expecting query to be a string");if(typeof a!=="string")throw new TypeError("Expecting source to be a string");var d=b.normalize("NFD").replace(/[\u0300-\u036f]/g,""),f=a.normalize("NFD").replace(/[\u0300-\u036f]/g,"");return c.caseSensitive||(d=d.toLowerCase(),f=f.toLowerCase()),[d,f]},x=function(b,a,c){c===void 0&&(c={});var d=w(b,a,c),f=d[0],g=d[1];if(!g.length)return!b.length;if(!f.length)return!0;if(f.length>g.length)return!1;for(var h=0,i=0;i<a.length;){var j=g[i],e=f[h];j===e&&(h+=1),i+=1}return h===f.length},q=function(){return q=Object.assign||function b(a){for(var c,d=1,f=arguments.length;d<f;d++){c=arguments[d];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(a[g]=c[g])}return a},q.apply(this,arguments)};function y(){for(var b=0,a=0,c=arguments.length;a<c;a++)b+=arguments[a].length;for(var d=Array(b),f=0,a=0;a<c;a++)for(var g=arguments[a],h=0,i=g.length;h<i;h++,f++)d[f]=g[h];return d}var F=function(b,a){var c=b[b.length-1];return c&&c.stop===a?y(b.slice(0,-1),[{start:c.start,stop:a+1}]):y(b,[{start:a,stop:a+1}])},z=function(b,a){if(!a)throw new TypeError("Expecting context to be defined");if(!a.match)return a.currentScore-1;var c=0;return b&&b.match&&(c+=5),a.leading&&(c+=10),a.currentScore+c},G=function(b){return b.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},H=function(b,a){var c=b==="-"||b==="_"||b===" "||b==="."||b==="/"||b==="\\",d=a.toUpperCase()===a&&/\w/.test(G(a));return c||d},o=function(b,a,c){c===void 0&&(c={withScore:!0,strategy:z});var d=w(b,a,c),f=d[0],g=d[1];if(!g.length||!f.length){var h={match:!b.length};return c.withRanges&&(h.ranges=b.length?[]:[{start:0,stop:g.length}]),c.withScore&&(h.score=Number(!b.length)),h}if(f.length>g.length){var i={match:!1,score:0};return c.withRanges&&(i.ranges=[]),c.withScore&&(i.score=0),i}for(var j=0,e=0,m=0,l=null,k=[];e<a.length;){var t=g[e],r=f[j],D=t===r;if(c.withScore){var S=e>0?a[e-1]:"",E={currentScore:m,character:a[e],match:D,leading:H(S,a[e])};m=z(l,E),l=E}D&&(c.withRanges&&(k=F(k,e)),j+=1),e+=1}if(j===f.length){var u={match:!0};return c.withRanges&&(u.ranges=k),c.withScore&&(u.score=m),u}var v={match:!1};return c.withRanges&&(v.ranges=[]),c.withScore&&(v.score=0),v},n=function(b,a){if(typeof a==="function")return a(b);if(typeof b==="string")return b;throw new TypeError("Unexpected array of "+typeof b+". Use an accessor to return a string")},I=function(b,a){return a===void 0&&(a={}),function(c){return x(b,n(c,a.sourceAccessor),a)}},J=function(b,a){a===void 0&&(a={});var c=q(q({},a),{withRanges:!1,withScore:!0});if(!a.idAccessor)return function(f,g){var h=o(b,n(f,a.sourceAccessor),c).score,i=o(b,n(g,a.sourceAccessor),c).score;return i===h?0:i>h?1:-1};var d={};return function(f,g){var h=n(f,a.idAccessor),i=n(g,a.idAccessor),j=d.hasOwnProperty(h)?d[h]:o(b,n(f,a.sourceAccessor),c).score,e=d.hasOwnProperty(i)?d[i]:o(b,n(g,a.sourceAccessor),c).score;return d.hasOwnProperty(h)||(d[h]=j),d.hasOwnProperty(i)||(d[i]=e),e===j?0:e>j?1:-1}},A=function(b,a,c){return c===void 0&&(c=""),b.slice(0,a)+c+b.slice(a)},K=function(b,a){if(typeof b!=="string")throw new TypeError("Expecting source to be a string");if(!b.length)return"";if(!a||!a.result||!a.result.ranges||!a.result.ranges.length)return b;for(var c=b,d=0,f=0,g=a.result.ranges;f<g.length;f++){var h=g[f];c=A(c,h.start+d,a.prefix),d+=(a.prefix||"").length,c=A(c,h.stop+d,a.suffix),d+=(a.suffix||"").length}return c};const s={wholeFoods:{"unsweetened mattes":"0",mattes:"0",matte:"0",kale:"0",chard:"0","organic spinach":"0",beet:"0",spinach:"0",radicchio:"0","Radicchio or dandelion greens":"0","dandelion greens":"0",arugula:"0","baby bok choy":"0","chao cheese":"4","coco powder":"2",mayonnaise:"2",veganaise:"2","vegan pepperoni":"4","beyond meat burgers":"4",salt:"2","hot dog buns":"3","hamburger buns":"3","amy’s soups black bean":"2","amy’s soups vegetable":"2","amy’s soups  lentil":"2","lily’s dark chocolate baking chips":"2","oat flour":"2",ghee:"2","purple cabbage":"0",radishes:"0",sponges:"1",soap:"1","coconut Bliss":"1","coconut sugar":"2","coconut aminos":"2","unsweetened cocoa powder":"2","pepper jack cheese":"5","special cheese":"5","wildwood zesty garlic aioli":"2","smokey tempeh":"4","chao cheese":"4","baby bok choi":"0","baby bok choy":"0","teriyaki flavored baked tofu":"4","paper towels":"1","toilet paper":"1",tp:"1",ginger:"0","bell pepper":"0","organic bell pepper":"0"},traders:{oatmeal:"4",eggs:"6",butter:"6",milk:"6","cheddar cheese":"6","extra sharp cheddar cheese":"6","almond milk":"4","organic bananas":"2",bananas:"2","bag of avocados":"3",avocados:"3",oranges:"3","Bag of 4 med avocados":"3",apples:"3","frozen fruit":"5","bell pepper":"3",raisins:"3","refried beans":"4","flour tortillas":"0","rice tortillas":"0","gluten free tortillas":"0","corn tortillas":"0",potatoes:"3","raisin bread":"0","cracked wheat sourdough":"0",sourdough:"0","wheat bread":"0","hot dog buns":"0","hamburger buns":"0","ginger cookies":"5","potato chips":"7",broccoli:"1","frozen broccoli":"5","organic cauliflower":"1","cauliflower rice":"5",cauliflower:"1",celery:"1","chocolate chip cookies":"0",ghee:"4",onion:"3",onions:"3","medium yukon gold potatoes":"3","yukon gold potatoes":"3","yukon gold":"3",sponges:"11",soap:"11","vegetable broth":"4","unsweetened original almond milk":"4","coconut oil":"4","maple syrup":"4","coconut sugar":"4","unsweetened cocoa powder":"4","peanut butter":"4","spicy mustard":"4",ketchup:"4",quinoa:"4","vegan popcorn":"7","pepper jack cheese":"9","paper towels":"11","toilet paper":"11",tp:"11","cracked wheat sour dough":"0","sprouted wheat daily bread":"0","organic hummus":"9",hummus:"9",tofu:"9",carrots:"1","olive oil":"4","organic thompson seedless raisins":"3",almonds:"3",cashews:"3",peanuts:"3","triple ginger snaps":"5","tomato paste":"4","diced tomatos":"4","crunchy peanut butter":"4",bellpepper:"3","mixed medly cherry tomatos":"3","cherry tomatos":"3","crumbled feta cheese":"9","feta cheese":"9","frozen organic mixed berries":"5","frozen berries":"5","jackfruit patties":"5"}};const B=document.querySelector(".list-input"),L=document.querySelector(".generate-ordered-traders-list-button"),M=document.querySelector(".generate-ordered-wf-list-button"),N=document.querySelector(".ordered-list-output"),O=document.querySelector(".generate-printable-button");let p="";window.onload=function(){L.addEventListener("click",()=>{C("traders")},!1),M.addEventListener("click",()=>{C("wholeFoods")},!1),O.addEventListener("click",R,!1)};function C(b){const a={},c=Object.keys(s[b]),d=[],f=[];if(B.value.length<1){alert("You must add items to the grocery list");return}const g=B.value.split(`
`);let h;for(let e=0;e<g.length;e++){let m,l;for(let k=0;k<c.length;k++){h=Q(g[e]);const t=P(g[e]),r=o(t,c[k]);(!l||l<r.score)&&(l=r.score,m=c[k])}l>9?(h&&(a[m]=h),d.push(m)):f.push(g[e])}const i=[[],[],[],[],[],[],[],[],[],[],[],[]];for(let e=0;e<d.length;e++)a[d[e]]?i[s[b][d[e]]].push(a[d[e]]+" "+d[e]):i[s[b][d[e]]].push(d[e]);let j="";p="";for(let e=0;e<i.length;e++)if(i[e].length>0){const m=i[e].join(`
`);j=j+m+`


-
`;let l="";for(let k=0;k<i[e].length;k++)l=l+"<div>"+i[e][k]+"</div>";p=p+"<p>"+l+"- <p>"}f.length>0&&(j=j+`UNMATCHED ITEMS:
`+f.join(`
`)),N.value=j}function P(b){const a=/^[0-9].*?\s/;let c=b.toLowerCase();return c=c.trim(),c.replace(a,"")}function Q(b){if(/^[0-9]/.test(b)){const a=/^[0-9].*?\s/;return b.match(a)}return}function R(){console.log(p);const b=window.open("","","width=300,height=300");b.document.write(p),b.document.close(),b.focus(),b.print()}}};return k$(1)})();
