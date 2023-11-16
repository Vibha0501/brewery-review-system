import{_ as v,a as y,l as _,o as h,c as u,b as t,w as g,v as p,F as m,r as w,t as i,d}from"./index-7e5ae006.js";const B={data(){return{name:"",city:"",type:"",breweries:[]}},methods:{calculateAverageRating(r){let e=0;return r.forEach(a=>{e+=a.rating}),r.length>0?e/r.length:0},viewBrewery(r){this.$router.push({name:"DetailView",params:{id:r.id}})},async getBreweriesByCity(){try{const r=await y.get(`https://api.openbrewerydb.org/v1/breweries?by_city=${this.city}`);this.breweries=r.data,this.breweries.forEach(async e=>{const a=await _(e.id),c=this.calculateAverageRating(a);e.currentRating=c})}catch(r){console.error("Error:",r)}},async getBreweriesByName(){try{const r=await y.get(`https://api.openbrewerydb.org/breweries?by_name=${this.name}`);this.breweries=r.data,this.breweries.forEach(async e=>{const a=await _(e.id),c=this.calculateAverageRating(a);e.currentRating=c})}catch(r){console.error("Error:",r)}},async getBreweriesByType(){try{const r=await y.get(`https://api.openbrewerydb.org/breweries?by_type=${this.type}`);this.breweries=r.data,this.breweries.forEach(async e=>{const a=await _(e.id),c=this.calculateAverageRating(a);e.currentRating=c})}catch(r){console.error("Error:",r)}}}},f={class:"container mt-5"},R=t("h1",null,"Brewery Search",-1),C={class:"row mb-3"},k={class:"col-md-4"},x={class:"col-md-4"},E={class:"col-md-4"},V=["onClick"],S={class:"card-body"},T={class:"card-title"},N={class:"card-text"},A=t("br",null,null,-1),D=t("br",null,null,-1),U=t("br",null,null,-1),F=t("br",null,null,-1),j=t("br",null,null,-1),L=["href"];function M(r,e,a,c,o,l){return h(),u("div",f,[R,t("div",C,[t("div",k,[g(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.city=s),class:"form-control",placeholder:"Search by City",onChange:e[1]||(e[1]=(...s)=>l.getBreweriesByCity&&l.getBreweriesByCity(...s))},null,544),[[p,o.city]])]),t("div",x,[g(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.name=s),class:"form-control",placeholder:"Search by Name",onChange:e[3]||(e[3]=(...s)=>l.getBreweriesByName&&l.getBreweriesByName(...s))},null,544),[[p,o.name]])]),t("div",E,[g(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.type=s),class:"form-control",placeholder:"Search by Type",onChange:e[5]||(e[5]=(...s)=>l.getBreweriesByType&&l.getBreweriesByType(...s))},null,544),[[p,o.type]])])]),t("div",null,[(h(),u(m,null,w(3,s=>t("div",{key:s,class:"row justify-content-center"},[(h(!0),u(m,null,w(o.breweries.slice((s-1)*3,s*3),(n,b)=>(h(),u("div",{class:"card border-dark col-md-4 m-3",style:{width:"20rem",height:"16rem"},key:b,onClick:P=>l.viewBrewery(n)},[t("div",S,[t("h5",T,i(n.name),1),t("p",N,[d("Address: "+i(n.street)+", "+i(n.city)+" ",1),A,d("Type: "+i(n.brewery_type)+" ",1),D,d("Phone: "+i(n.phone)+" ",1),U,d("Current Rating: "+i(n.currentRating)+" ",1),F,d(i(n.state)+", "+i(n.country)+" ",1),j,d("Website: "),t("a",{href:n.website_url,target:"_blank"},i(n.website_url),9,L)])])],8,V))),128))])),64))])])}const q=v(B,[["render",M]]);export{q as default};
