(this["webpackJsonpamazed.in"]=this["webpackJsonpamazed.in"]||[]).push([[0],{48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(22),n=a.n(r),s=a(12),i=a(16),l=a(4),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CATEGORIES":return Object(l.a)(Object(l.a)({},e),{},{Categories:t.payload});default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return Object(l.a)(Object(l.a)({},e),{},{SearchResult:t.payload});case"DETAIL":return Object(l.a)(Object(l.a)({},e),{},{ProductDetails:t.payload});case"REVIEW":return Object(l.a)(Object(l.a)({},e),{},{ProductReviews:t.payload});default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDER":return Object(l.a)(Object(l.a)({},e),{},{orderStatus:t.payload});case"ADMIN":return Object(l.a)(Object(l.a)({},e),{},{allOrders:t.payload});default:return e}},h=Object(i.c)({category:o,search:d,order:j}),b=a(31),u=a(32),p=a.n(u),m=Object(i.d)(h,Object(i.a)(p.a,b.logger)),O=a(6),x=a(3),g=a(10),v=a(11),f=a(14),y=a(13),N=a(1),C=a.n(N),w=(a(48),function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(g.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).renderSearch=function(){var t=document.getElementsByClassName("search")[0];t.value?(e.props.history.push("/search?k=".concat(t.value,"&category=aps")),t.value=""):alert("Search Box Should Not Be Empty.")},e.renderEnter=function(e){var t=document.getElementsByClassName("search-btn")[0];13!==e.which&&13!==e.keyCode||t.click()},e}return Object(v.a)(a,[{key:"render",value:function(){return Object(c.jsx)("header",{children:Object(c.jsx)("nav",{className:"navbar navbar-inverse",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("div",{className:"navbar-header",children:Object(c.jsxs)(O.b,{to:"/",className:"navbar-brand",children:[Object(c.jsx)("b",{id:"brand",children:"amazed"}),".in"]})}),Object(c.jsxs)("span",{className:"searchbar",children:[Object(c.jsx)("input",{onKeyPress:this.renderEnter,className:"search",type:"text",placeholder:"Search"}),Object(c.jsx)("button",{onClick:this.renderSearch,className:"search-btn",children:Object(c.jsx)("i",{className:"fa fa-search"})})]}),Object(c.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(c.jsx)("li",{children:Object(c.jsx)(O.b,{to:"/orders",children:"Orders"})}),Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:"#",children:[Object(c.jsx)("span",{className:"glyphicon glyphicon-user"})," Sign Up"]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:"#",children:[Object(c.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Login"]})})]})]})})})}}]),a}(C.a.Component)),k=Object(x.e)(w),S=(a(50),function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("center",{children:Object(c.jsx)("button",{className:"btn btn-primary",style:{width:"100%"},onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},children:"Back To Top"})}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"top-footer",children:[Object(c.jsxs)("div",{className:"reg",children:[Object(c.jsx)("p",{className:"top-heading",children:"Registered Office"}),Object(c.jsxs)("p",{className:"details",children:["Amazed.in",Object(c.jsx)("br",{}),"Buildings Alyssa, Begonia &",Object(c.jsx)("br",{}),"Clove Embassy Tech Village,",Object(c.jsx)("br",{}),"Outer Ring Road, Devarabeesanahalli Village,",Object(c.jsx)("br",{}),"Bengaluru, 560103,",Object(c.jsx)("br",{}),"Karnataka, India"]}),Object(c.jsx)("p",{className:"details",children:"phone: 9538852608"})]}),Object(c.jsxs)("div",{className:"mail",children:[Object(c.jsx)("p",{className:"top-heading",children:"Mail Us"}),Object(c.jsxs)("p",{className:"details",children:["Amazed.in",Object(c.jsx)("br",{}),"Buildings Alyssa, Begonia &",Object(c.jsx)("br",{}),"Clove Embassy Tech Village,",Object(c.jsx)("br",{}),"Outer Ring Road, Devarabeesanahalli Village,",Object(c.jsx)("br",{}),"Bengaluru, 560103,",Object(c.jsx)("br",{}),"Karnataka, India"]}),Object(c.jsx)("p",{className:"details",children:"Email: info@amazed.in"})]}),Object(c.jsxs)("div",{className:"socialMedia",children:[Object(c.jsx)("p",{className:"top-heading",children:"Social Media"}),Object(c.jsx)("p",{className:"details",children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/amazed.in",children:"Facebook"})}),Object(c.jsx)("p",{className:"details",children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/amazed.in",children:"Twitter"})}),Object(c.jsx)("p",{className:"details",children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/pick_your_mandala/",children:"Instagram"})})]}),Object(c.jsxs)("div",{className:"about",children:[Object(c.jsx)("p",{className:"top-heading",children:"About"}),Object(c.jsx)("p",{className:"details",children:Object(c.jsx)(O.b,{to:"/about",children:"About Us"})}),Object(c.jsx)("p",{className:"details",children:Object(c.jsx)(O.b,{to:"/contact",children:"Contact Us"})})]}),Object(c.jsx)("div",{className:"subscription",children:Object(c.jsx)("p",{className:"top-heading",children:"Subscription"})})]}),Object(c.jsx)("hr",{className:"line"}),Object(c.jsx)("center",{children:Object(c.jsx)("small",{children:"\xa9 2021. All rights are reserved"})})]})]})}),D=a(33),R=(a(51),a(52),["images/Slider-Image1.jpg","images/Slider-Image2.jpg","images/Slider-Image3.jpg","images/Slider-Image4.jpg"]),T=function(e){return Object(c.jsxs)(C.a.Fragment,{children:[Object(c.jsx)("div",{className:"slide-container",children:Object(c.jsxs)(D.Slide,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"sliderImage",children:Object(c.jsx)("img",{src:"".concat(R[0]),alt:"slider-img-1"})})}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"sliderImage",children:Object(c.jsx)("img",{src:"".concat(R[1]),alt:"slider-img-2"})})}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"sliderImage",children:Object(c.jsx)("img",{src:"".concat(R[2]),alt:"slider-img-3"})})}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"sliderImage",children:Object(c.jsx)("img",{src:"".concat(R[3]),alt:"slider-img-4"})})})]})}),Object(c.jsxs)("div",{className:"container home-container",children:[Object(c.jsx)("center",{children:function(e){if(e)return e.map((function(e){return Object(c.jsxs)("div",{className:"categoryCard",children:[Object(c.jsx)("h3",{className:"cardTitle",children:Object(c.jsx)("u",{children:e.title})}),Object(c.jsx)("img",{src:"".concat(e.image1),alt:"img1"}),Object(c.jsx)("img",{src:"".concat(e.image2),alt:"img2"}),Object(c.jsx)("img",{src:"".concat(e.image3),alt:"img3"}),Object(c.jsx)("img",{src:"".concat(e.image4),alt:"img4"}),Object(c.jsx)("div",{children:Object(c.jsx)(O.b,{to:"/search?k=".concat(e.keyword,"&category=").concat(e.type),style:{textDecoration:"none"},children:Object(c.jsx)("h4",{className:"link",children:"SEE MORE"})})})]},e.id)}))}(e.cData)}),Object(c.jsx)("hr",{})]})]})},P=a(5),E=a.n(P),A="9dc9601208mshb32cdcb5fb7c705p1491ffjsn9d089396e6f3",I="http://localhost:8900/order";function q(e){return{type:"SEARCH",payload:fetch("".concat("https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?country=IN&").concat(e),{method:"GET",headers:{"x-rapidapi-key":A,"x-rapidapi-host":"amazon-product-reviews-keywords.p.rapidapi.com"}}).then((function(e){return e.json()}))}}function H(){return{type:"ADMIN",payload:fetch(I,{method:"GET"}).then((function(e){return e.json()}))}}var B=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"CATEGORIES",payload:fetch("http://localhost:8900/category",{method:"GET"}).then((function(e){return e.json()}))})}},{key:"render",value:function(){return Object(c.jsx)(C.a.Fragment,{children:Object(c.jsx)(T,{cData:this.props.catData.Categories})})}}]),a}(C.a.Component);B.prototypes={dispatch:E.a.func};var _=Object(s.b)((function(e){return{catData:e.category}}))(B),F=(a(53),function(e){var t=function(t){var a=t.target.value.split("-");if(e.sData){var c=e.sData.SearchResult.products.filter((function(e){return a[0]<=e.price.current_price&&e.price.current_price<=a[1]}));e.fData(c)}};return Object(c.jsx)("div",{style:{background:"#ecf3f9",borderRadius:"10px",boxShadow:"4px 4px 12px grey",marginTop:"20px",maxWidth:"80%"},className:"container",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h2",{className:"filterTitle",children:"Filter"}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"0-100000000"})," All"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"0-500"})," Under Rs.500"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"500-1000"})," Rs.500 - Rs.1000"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"1000-5000"})," Rs.1000 - Rs.5000"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"5000-10000"})," Rs.5000 - Rs.10000"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"10000-20000"})," Rs.10000 - Rs.20000"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"20000-50000"})," Rs.20000 - Rs.50000"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{onClick:t,type:"radio",name:"amount",value:"50000-1000000"})," Over Rs.50000"]})})]})})}),z=(a(54),function(e){var t;return Object(c.jsx)("div",{children:(t=e.sData,t?t.products.length>0?t.products.map((function(e){return Object(c.jsx)("div",{className:"searchContainer",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-sm-4",children:Object(c.jsx)("center",{children:Object(c.jsx)("img",{src:e.thumbnail,alt:"product-img"})})}),Object(c.jsxs)("div",{className:"col-sm-8",children:[Object(c.jsx)(O.b,{to:"/detail/".concat(e.asin),style:{textDecoration:"none"},children:Object(c.jsx)("h3",{className:"link",children:e.title})}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{style:{color:"orange"},children:"Rating: "}),Object(c.jsxs)("span",{className:"rating",children:[e.reviews.rating," "]}),"out of 5"]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:["Rs.",Object(c.jsx)("b",{className:"amount",children:e.price.current_price}),"\xa0 \xa0",Object(c.jsxs)("del",{children:["Rs.",e.price.before_price]})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:["You Save Rs.",Object(c.jsx)("b",{className:"amount",children:e.price.savings_amount})]})})]})]})},e.asin)})):Object(c.jsx)("div",{className:"noData",children:Object(c.jsx)("h3",{children:Object(c.jsx)("b",{children:"No Data Found"})})}):Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("img",{src:"/images/loader.gif",alt:"loader"})}))})}),M=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).filter=function(t){e.setState({data:{SearchResult:{products:t}}})},e.state={queryParam:"",data:{SearchResult:null}},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.search.split("=");this.props.dispatch(q("keyword=".concat(e[1],"=").concat(e[2]))),this.setState({queryParam:this.props.location.search})}},{key:"componentDidUpdate",value:function(){if(this.state.queryParam!==this.props.location.search){var e=this.props.location.search.split("=");this.props.dispatch(q("keyword=".concat(e[1],"=").concat(e[2]))),this.setState({queryParam:this.props.location.search,data:{SearchResult:null}})}}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({data:e.searchData})}},{key:"render",value:function(){var e=this;return document.body.scrollTop=0,document.documentElement.scrollTop=0,Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col col-md-3",children:Object(c.jsx)(F,{fData:function(t){e.filter(t)},sData:this.props.searchData})}),Object(c.jsx)("div",{className:"col col-md-9",children:Object(c.jsx)(z,{sData:this.state.data.SearchResult})})]})})}}]),a}(C.a.Component);M.prototypes={dispatch:E.a.func};var U=Object(s.b)((function(e){return{searchData:e.search}}))(M),J=a(34),G=a.n(J),L=(a(70),{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),V=function(e){return Object(c.jsx)("div",{className:"container",children:function(e){var t=function(){sessionStorage.setItem("productData",JSON.stringify(e))};return e?Object(c.jsxs)(C.a.Fragment,{children:[Object(c.jsx)("h2",{className:"detailTitle",children:e.product.title}),Object(c.jsx)(G.a,Object(l.a)(Object(l.a)({},L),{},{children:e.product.images.map((function(e,t){return Object(c.jsx)("div",{className:"datailImage",children:Object(c.jsx)("center",{children:Object(c.jsx)("img",{src:e,alt:"detail-img"})})},t)}))})),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Current Price: "}),e.product.price.symbol," ",Object(c.jsx)("span",{className:"price",children:e.product.price.current_price})," \xa0 \xa0 ",Object(c.jsxs)("del",{children:[e.product.price.symbol," ",e.product.price.before_price]})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Discount: "}),e.product.price.symbol," ",Object(c.jsx)("span",{className:"price",children:e.product.price.savings_amount})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(O.b,{to:"/cart",children:Object(c.jsx)("button",{onClick:t,className:"btn btn-warning",children:"Add to cart"})}),"\xa0 \xa0",Object(c.jsx)(O.b,{to:"/buynow",children:Object(c.jsx)("button",{onClick:t,className:"btn btn-warning",children:"Buy Now"})})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Description: "}),e.product.description||"None"]}),Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:"Features:"})}),Object(c.jsx)("ul",{children:e.product.feature_bullets.map((function(e,t){return Object(c.jsx)("li",{children:e},t)}))})]})]}):Object(c.jsx)("div",{children:Object(c.jsx)("center",{children:Object(c.jsx)("img",{src:"/images/loader.gif",alt:"loader"})})})}(e.dData)})},Y=(a(71),function(e){var t;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h2",{className:"reviewHeading",children:"Top Reviews"}),(t=e.rData,t?(console.log(t),t.reviews.length>0?t.reviews.map((function(e){return Object(c.jsxs)("div",{className:"reviews",children:[Object(c.jsx)("h3",{className:"reviewTitle",children:e.name}),Object(c.jsx)("p",{className:"reviewDate",children:e.date.date}),Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:e.title})}),Object(c.jsx)("p",{children:e.review}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Rating -"})," ",e.rating," out of 5"]}),Object(c.jsx)("hr",{})]},e.id)})):Object(c.jsx)("div",{children:Object(c.jsx)("h3",{children:"No Reviews Yet"})})):Object(c.jsx)("div",{children:Object(c.jsx)("center",{children:Object(c.jsx)("img",{src:"/images/loader.gif",alt:"loader"})})}))]})}),W=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(e){var c;return Object(g.a)(this,a),(c=t.call(this,e)).state={detData:{ProductDetails:null},revData:{ProductReviews:null}},c}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e;this.props.dispatch((e=this.props.match.params.id,{type:"DETAIL",payload:fetch("".concat("https://amazon-product-reviews-keywords.p.rapidapi.com/product/details?country=IN&asin=").concat(e),{method:"GET",headers:{"x-rapidapi-key":A,"x-rapidapi-host":"amazon-product-reviews-keywords.p.rapidapi.com"}}).then((function(e){return e.json()}))})),this.props.dispatch(function(e){return{type:"REVIEW",payload:fetch("".concat("https://amazon-product-reviews-keywords.p.rapidapi.com/product/reviews?country=IN&variants=1&top=1&asin=").concat(e),{method:"GET",headers:{"x-rapidapi-key":"38e2130a63msh67b11c5d3f7ea45p16ba5bjsnd7ab9ff6429a","x-rapidapi-host":"amazon-product-reviews-keywords.p.rapidapi.com"}}).then((function(e){return e.json()}))}}(this.props.match.params.id))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({detData:e.detailsData,revData:e.reviewData})}},{key:"render",value:function(){return document.body.scrollTop=0,document.documentElement.scrollTop=0,Object(c.jsxs)(C.a.Fragment,{children:[Object(c.jsx)(V,{dData:this.state.detData.ProductDetails}),Object(c.jsx)("hr",{}),Object(c.jsx)(Y,{rData:this.state.revData.ProductReviews})]})}}]),a}(C.a.Component);W.prototypes={dispatch:E.a.func};var K=Object(s.b)((function(e){return{detailsData:e.search,reviewData:e.search}}))(W),Q=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"panel panel-primary",children:[Object(c.jsx)("div",{className:"panel-heading",children:Object(c.jsx)("h3",{children:"About Us"})}),Object(c.jsx)("div",{className:"panel-body",children:Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique soluta eos facilis, aut nostrum voluptatum eaque odio numquam alias molestiae fugiat dolorum sed minima porro magni distinctio laborum, officia quae."})})]})})},X=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"panel panel-primary",children:[Object(c.jsx)("div",{className:"panel-heading",children:Object(c.jsx)("h3",{children:"Contact Us"})}),Object(c.jsx)("div",{className:"panel-body",children:Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique soluta eos facilis, aut nostrum voluptatum eaque odio numquam alias molestiae fugiat dolorum sed minima porro magni distinctio laborum, officia quae."})})]})})},$=a(20),Z=(a(72),new Date),ee=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(g.a)(this,a),(e=t.call(this)).blurHandler=function(t,a){var c=e.state.errors,r=/^\d+$/.test(a);switch(t){case"fname":case"lname":""===a?c[t]="Name can not be blank":a.length<3?c[t]="Name should be more than three letters":c[t]=r?"Name should not be a number":"";break;case"houseadd":case"city":case"state":c[t]=""===a?"Field can not be blank":"";break;case"postCode":case"phone":""===a?c[t]="Field can not be blank":a.length<5?c[t]="Field should contain more than 5 digits":c[t]=r?"":"Should contain only number";break;case"email":var n=a.lastIndexOf("@"),s=a.lastIndexOf(".");""===a?c[t]="Field can not be blank":n<s&&n>0&&-1===a.indexOf("@@")&&s>2&&a.length-s>2?c[t]="":c[t]="Email is not valid"}e.setState(Object($.a)({errors:c},t,a))},e.changeHandler=function(t,a){e.blurHandler(t,a),e.setState(Object($.a)({},t,a))},e.quantitychangeHandler=function(t){e.setState({quantity:t,totalPrice:e.state.currentPrice*t})},e.onSubmit=function(){var t,a={date:Z.getDate()+"/"+(Z.getMonth()+1)+"/"+Z.getFullYear(),fname:e.state.fname,lname:e.state.lname,houseadd:e.state.houseadd,apartment:e.state.apartment,city:e.state.city,state:e.state.state,country:e.state.country,postCode:e.state.postCode,phone:e.state.phone,email:e.state.email,productTitle:e.state.productTitle,beforePrice:e.state.beforePrice,savingAmount:e.state.savingAmount,currentPrice:e.state.currentPrice,quantity:e.state.quantity,totalPrice:e.state.totalPrice,payment:e.state.payment,status:e.state.status,delivered:e.state.delivered};""===a.fname&&""===a.lname&&""===a.email&&""===a.phone&&""===a.houseadd&&""===a.postCode?alert("All fields are required."):(e.props.dispatch((t=a,{type:"ORDER",payload:fetch(I,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))})),alert("Your Order is Placed Successfully!"),e.props.history.push("/orders"))},e.state={fname:"",lname:"",houseadd:"",apartment:"",city:"",state:"",country:"India",postCode:"",phone:"",email:"",productTitle:"",beforePrice:"",savingAmount:"",currentPrice:1,quantity:1,totalPrice:1,payment:"COD",status:"Order placed",delivered:"False",errors:{fname:"",lname:"",houseadd:"",apartment:"",city:"",state:"",postCode:"",phone:"",email:"",payment:"COD",status:"Order placed"}},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("productData"));this.setState({productTitle:t.product.title,beforePrice:t.product.price.before_price,savingAmount:t.product.price.savings_amount,currentPrice:t.product.price.current_price,totalPrice:t.product.price.current_price*this.state.quantity},(function(){return console.log(e.state)}))}},{key:"render",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("productData"));return Object(c.jsx)("div",{className:"order-outer-container",children:Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"container order-container",children:[Object(c.jsx)("div",{className:"order-title",children:Object(c.jsx)("h2",{className:"order-h2",children:"Product Order Form"})}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsxs)("form",{className:"order-form",children:[Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{className:"fname",children:["First Name ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",name:"fname",autoComplete:"new-off",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.fname})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{className:"lname",children:["Last Name ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",name:"lname",autoComplete:"new-off",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.lname})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{children:["Address ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",name:"houseadd",autoComplete:"new-off",placeholder:"House number and street name",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.houseadd})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsx)("span",{children:"\xa0"}),Object(c.jsx)("input",{type:"text",name:"apartment",autoComplete:"new-off",placeholder:"Apartment, suite, unit etc. (optional)",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)}})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{children:["Town / City ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",name:"city",autoComplete:"new-off",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.city})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{children:["State ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",name:"state",autoComplete:"new-off",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.state})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsx)("span",{children:"Country"}),Object(c.jsx)("input",{type:"text",name:"country",value:"India",readOnly:!0,onChange:function(t){return e.changeHandler(t.target.name,t.target.value)}})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{children:["Postcode ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",name:"postCode",autoComplete:"new-off",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.postCode})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{children:["Phone ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"tel",name:"phone",autoComplete:"new-off",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.phone})]}),Object(c.jsxs)("label",{className:"order-label",children:[Object(c.jsxs)("span",{children:["Email Address ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"email",name:"email",autoComplete:"new-off",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)},onBlur:function(t){return e.blurHandler(t.target.name,t.target.value)}}),Object(c.jsx)("p",{className:"error-display",children:this.state.errors.email})]})]}),Object(c.jsxs)("div",{className:"Yorder",children:[Object(c.jsx)("table",{className:"order-table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsx)("tr",{children:Object(c.jsx)("th",{colSpan:"2",children:"Your order"})}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Product Name"}),Object(c.jsx)("td",{className:"order-product-name",children:t.product.title})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Price"}),Object(c.jsx)("tr",{children:Object(c.jsxs)("td",{children:["Before: ",t.product.price.symbol,t.product.price.before_price]})}),Object(c.jsx)("tr",{children:Object(c.jsxs)("td",{children:["Saving: ",t.product.price.symbol,t.product.price.savings_amount]})}),Object(c.jsx)("tr",{children:Object(c.jsxs)("td",{children:["Now: ",t.product.price.symbol,t.product.price.current_price]})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Quantity"}),Object(c.jsx)("td",{children:Object(c.jsxs)("select",{id:"quantity",name:"quantity",onChange:function(t){return e.quantitychangeHandler(t.target.value)},children:[Object(c.jsx)("option",{value:"1",children:"1"}),Object(c.jsx)("option",{value:"2",children:"2"}),Object(c.jsx)("option",{value:"3",children:"3"}),Object(c.jsx)("option",{value:"4",children:"4"}),Object(c.jsx)("option",{value:"5",children:"5"})]})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Total"}),Object(c.jsxs)("td",{children:[t.product.price.symbol,this.state.totalPrice]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Shipping"}),Object(c.jsx)("td",{children:"Free shipping"})]})]})}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsx)("input",{type:"radio",name:"payment",value:"NetBanking",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)}}),Object(c.jsx)("label",{className:"order-label1",children:"Net Banking"})]}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsx)("input",{type:"radio",name:"payment",value:"COD",checked:!0,onChange:function(t){return e.changeHandler(t.target.name,t.target.value)}}),Object(c.jsx)("label",{className:"order-label1",children:"Cash on Delivery"})]}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsx)("input",{type:"radio",name:"payment",value:"CDcard",onChange:function(t){return e.changeHandler(t.target.name,t.target.value)}}),Object(c.jsx)("label",{className:"order-label1",children:"Credit / Debit Card"}),Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:"https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg",alt:"",width:"50"})})]}),Object(c.jsx)("button",{className:"order-button",type:"button",onClick:this.onSubmit,children:"Place Order"})]})]})]})})})}}]),a}(C.a.Component);ee.protoTypes={dispatch:E.a.func};var te=Object(s.b)((function(e){return{orderResponse:e.order.orderStatus}}))(ee),ae=function(e){return Object(c.jsx)(C.a.Fragment,{children:Object(c.jsxs)("table",{className:"table table-responsive",children:[Object(c.jsx)("thead",{style:{background:"orange"},children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Order Id"}),Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Address"}),Object(c.jsx)("th",{children:"Phone/Email"}),Object(c.jsx)("th",{children:"Qty."}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Product"}),Object(c.jsx)("th",{children:"Payment Mode"}),Object(c.jsx)("th",{children:"Change Delivery Status"}),Object(c.jsx)("th",{children:"Delivered"})]})}),Object(c.jsx)("tbody",{style:{background:"#ecf3f9"},children:function(t){var a=function(t){var a=JSON.parse(t.target.value);"False"==a.delivered?(a.delivered="True",fetch("http://localhost:8900/order/".concat(a.id),{method:"PUT",headers:{Accepct:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(){e.uStatus()}))):(a.delivered="False",fetch("http://localhost:8900/order/".concat(a.id),{method:"PUT",headers:{Accepct:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(){e.uStatus()})))};if(t.allOrders&&t.allOrders.length>0)return t.allOrders.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsx)("td",{children:e.date}),Object(c.jsx)("td",{children:"".concat(e.fname," ").concat(e.lname)}),Object(c.jsx)("td",{children:"".concat(e.houseadd,", ").concat(e.apartment,", ").concat(e.city,", ").concat(e.state," ").concat(e.postCode)}),Object(c.jsx)("td",{children:"".concat(e.phone,"/ ").concat(e.email)}),Object(c.jsx)("td",{children:e.quantity}),Object(c.jsx)("td",{children:e.totalPrice}),Object(c.jsx)("td",{children:e.productTitle}),Object(c.jsx)("td",{children:e.payment}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:a,className:"btn btn-primary",value:JSON.stringify(e),children:"Change"})}),(t=e.delivered,"True"===t?Object(c.jsx)("td",{style:{color:"green"},children:t}):Object(c.jsx)("td",{style:{color:"red"},children:t}))]},e.id);var t}))}(e.oData)})]})})},ce=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(g.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).updateStatus=function(){e.props.dispatch(H())},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(H())}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"container",style:{overflowX:"auto"},children:Object(c.jsx)(ae,{oData:this.props.orders,uStatus:function(){e.updateStatus()}})})}}]),a}(C.a.Component);ce.prototypes={dispatch:E.a.func};var re=Object(s.b)((function(e){return{orders:e.order}}))(ce),ne=function(){return Object(c.jsxs)(O.a,{children:[Object(c.jsx)(k,{}),Object(c.jsx)(x.a,{exact:!0,path:"/",component:_}),Object(c.jsx)(x.a,{path:"/search",component:U}),Object(c.jsx)(x.a,{path:"/detail/:id",component:K}),Object(c.jsx)(x.a,{path:"/buynow",component:te}),Object(c.jsx)(x.a,{path:"/about",component:Q}),Object(c.jsx)(x.a,{path:"/contact",component:X}),Object(c.jsx)(x.a,{path:"/orders",component:re}),Object(c.jsx)(S,{})]})};n.a.render(Object(c.jsx)(s.a,{store:m,children:Object(c.jsx)(ne,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.9c77e437.chunk.js.map