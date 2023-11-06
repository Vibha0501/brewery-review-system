import{_ as g,a as y,o as c,c as l,w as p,v as h,b as t,F as u,r as w,t as i,d as b}from"./index-5e217324.js";const v={data(){return{name:"",city:"",type:"",breweries:[],reviews:[]}},async mounted(){},methods:{calculateAverageRating(n){const e=this.reviews.filter(d=>d.breweryId===n);return e.length>0?(e.reduce((m,r)=>m+r.rating,0)/e.length).toFixed(1):"No reviews yet"},viewBrewery(n){this.$router.push({name:"DetailView",params:{id:n.id}})},async getBreweriesByCity({city:n}){try{const e=await y.get(`https://api.openbrewerydb.org/v1/breweries?by_city=${this.city}`);this.breweries=e.data}catch(e){console.error("Error:",e)}},async getBreweriesByName(n){try{const e=await y.get(`https://api.openbrewerydb.org/breweries?by_name=${this.name}`);this.breweries=e.data}catch(e){console.error("Error:",e)}},async getBreweriesByType(n){try{const e=await y.get(`https://api.openbrewerydb.org/breweries?by_type=${this.type}`);this.breweries=e.data}catch(e){console.error("Error:",e)}}}},B=t("h1",null,"Brewery Search",-1),x={class:"row"},f=["onClick"],C={class:"card-body"},k={class:"card-title"},V={class:"card-text"},S={class:"card-text"},N={class:"card-text"},T=["href"],E={class:"card-text"},R={class:"card-text"};function A(n,e,d,m,r,a){return c(),l("div",null,[B,p(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>r.city=s),class:"form-control mb-3",placeholder:"Search by City",onChange:e[1]||(e[1]=s=>a.getBreweriesByCity(r.city))},null,544),[[h,r.city]]),p(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>r.name=s),class:"form-control mb-3",placeholder:"Search by Name",onChange:e[3]||(e[3]=s=>a.getBreweriesByName(r.name))},null,544),[[h,r.name]]),p(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>r.type=s),class:"form-control mb-3",placeholder:"Search by Type",onChange:e[5]||(e[5]=s=>a.getBreweriesByType(r.type))},null,544),[[h,r.type]]),t("div",x,[(c(),l(u,null,w(3,s=>t("div",{key:s,class:"col-md-4 mb-3"},[(c(!0),l(u,null,w(r.breweries.slice((s-1)*3,s*3),(o,_)=>(c(),l("div",{class:"card border-dark mb-3",style:{"max-width":"18rem"},key:_,onClick:D=>a.viewBrewery(o)},[t("div",C,[t("h5",k,i(o.name),1),t("p",V,"Address: "+i(o.street),1),t("p",S,"Phone: "+i(o.phone),1),t("p",N,[b("Website: "),t("a",{href:o.website_url,target:"_blank"},i(o.website_url),9,T)]),t("p",E," Current Rating: "+i(a.calculateAverageRating(o.id)),1),t("p",R,i(o.city)+", "+i(o.state),1)])],8,f))),128))])),64))])])}const U=g(v,[["render",A]]);export{U as default};