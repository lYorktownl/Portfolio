import{_ as h,o as a,c as n,F as b,r as x,n as k,a as t,t as d,f as _,g as f,h as D,b as m,w as p,u as w,i as y,v as P,j as v,R as g,p as $,e as C}from"./index-cafe718c.js";const T={data(){return{projects:[{id:1,name:"To do on React",details:`Мой первый опыт работы с React, первое знакомство с фреймворками, библиотеками, понятием SPA и компонентным подходом. 
 Познакомился с системой контроля версий Git 
 Верстал по макету с тз для элементов списка задач, а так же пощупал, что такое react hooks и как они работают.`,icon:"assets/icons/list3.svg",link:"https://github.com/lYorktownl/My_kanban.git",showDetails:!1},{id:2,name:"Portfolio",details:`Первый полностью самостоятельный проект на Vue3 + vite и Tailwind css. 
 После реакта, захотелось для себя попробовать еще какой-нибудь фрэймвор, выбирая между Angular и Vue,  мой выбор остановился на последнем, в силу большей мобильности и гибкости настроек, к тому же мне понравилась идея однофайловых компонентов и новый синтаксис vue3. Неожиданно главным вызовом для меня стал выбор дизайна и цветовой схемы для проекта =) 
 С этим вызовом мне помогал справляться Tailwind. Конечно у него есть свои плюсы и минусы: из плюсов мне понравилось, что не нужно придумывать миллион имен для каждого элемента, ведь теперь ты можешь напрямую работать с каждым из них, много предустановленных CSS шаблонов, что сильно экономит время. Из минусов можно отметить, что немного засоряются сами компоненты, когда необходимо прописать много стилей, от части эту проблему решает расширение, которое сворачивает "class=". Но от старого доброго css все равно никуда не деться) `,icon:"assets/icons/portfolio-icon.svg",link:"https://github.com/lYorktownl/Portfolio.git",showDetails:!1},{id:3,name:"Timer",details:"Obratnyi otstc. sgsdaf afsdfafa afadfadfadsdf s dsfdsfdsd",icon:"assets/icons/timer-icon.svg",link:"",showDetails:!1},{id:4,name:"Weather",details:`Weather APIМой первый опыт раворками, библиотеками, понятием SPA и компенентным подходом. 
 Научился делать коммиты и работать с Git.
 Верстка по тз, знакомство с реакт хуками.`,icon:"assets/icons/weather-icon.svg",link:"",showDetails:!1},{id:5,name:"Landing",details:"Это был один из первых этапов погружения в веб-разработку. Узнал про подключаемые стили, и про работу с разными формами и кнопками. Получил базовые навыки работы со стилями.",icon:"assets/icons/landing-icon.svg",link:"https://github.com/lYorktownl/repair-design.git",showDetails:!1}]}},methods:{formatFirstParagraph(s,o){return s?o?"":`<p>${s.split(`
`)[0]}`:""},formatDetails(s){return s?s.includes(`
`)?s.split(`
`).map(o=>`<p>${o}</p>`).join(""):s:""},toggleDetails(s){s.showDetails=!s.showDetails}},computed:{showDetails(){return this.projects.some(s=>s.showDetails)}}},V=["id"],M={class:"sm:min-w-48 sm:h-48 w-28 h-28 flex flex-col justify-center items-center mx-auto"},S=["src"],I=["href"],N={class:"text-lg pl-3 w-full"},L=["innerHTML"],A=["innerHTML"],F=["onClick"];function j(s,o,l,u,c,i){return a(),n("div",{class:k(["grid sm:mx-16 mx-2 xl:pt-20 place-items-start",{"gt:grid-cols-2":!i.showDetails,"grid-cols-1":i.showDetails}])},[(a(!0),n(b,null,x(c.projects,e=>(a(),n("div",{class:"p-[10px] sm:m-[10px] m-[10px] sm:flex flex-col sm:min-w-full mb-4",key:e.id,id:"project-"+e.id},[t("div",M,[t("img",{class:"icon w-10 sm:w-20 h-20 items-center",src:"/"+e.icon,alt:"Project Icon"},null,8,S),t("h3",null,d(e.name),1),e.link?(a(),n("a",{key:0,href:e.link,target:"_blank",class:"border-b-2"}," View on github ",8,I)):_("",!0)]),t("div",N,[t("div",{innerHTML:i.formatFirstParagraph(e.details,e.showDetails)},null,8,L),e.showDetails?(a(),n("div",{key:0,innerHTML:i.formatDetails(e.details)},null,8,A)):_("",!0),t("button",{onClick:r=>i.toggleDetails(e),class:"border-b-2"},d(e.showDetails?"View less":"View more"),9,F)])],8,V))),128))],2)}const B=h(T,[["render",j]]);const H=s=>($("data-v-91eb6f25"),s=s(),C(),s),R={class:"flex h-fit p-3 mt-2 border-sky-950"},Y={class:"flex space-x-4"},E=H(()=>t("button",{class:"dropdown_btn px-4 py-2 border-2 -mt-2 -ml-[17px] rounded-e-full hover:transition-all hover:duration-1000 shadow hover:shadow-lg"},[t("svg",{class:"arrow w-4 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])],-1)),G={class:"absolute flex mt-2 space-y-2 w-36 bg-white p-2 border rounded shadow-lg flex-col left-0 transform translate-x-[-100%]"},O=["onClick"],W={__name:"Navbar",setup(s){const o=f(!1),l=f([]);D(()=>{l.value=B.data().projects});const u=()=>{o.value=!o.value},c=i=>{const e=document.getElementById(`project-${i}`);e&&e.scrollIntoView({behavior:"smooth"})};return(i,e)=>(a(),n("div",R,[t("ul",Y,[t("li",null,[m(w(g),{class:"px-4 py-2 border-2 rounded-full hover:transition-all hover:duration-1000 shadow hover:shadow-lg",to:"/"},{default:p(()=>[v(" About ")]),_:1})]),t("li",null,[m(w(g),{class:"px-4 py-2 border-2 rounded-s-full hover:transition-all hover:duration-1000 shadow hover:shadow-lg",to:"/projects"},{default:p(()=>[v(" Projects ")]),_:1})]),t("li",{class:"relative space-x-0",onClick:u},[E,y(t("div",G,[(a(!0),n(b,null,x(l.value,r=>(a(),n("button",{key:r.id,onClick:Q=>c(r.id),class:""},d(r.name),9,O))),128))],512),[[P,o.value]])])])]))}},X=h(W,[["__scopeId","data-v-91eb6f25"]]),z={},q=t("p",null,"developed by Yorktown 2024 All rights reserved",-1),J=[q];function K(s,o){return a(),n("div",null,J)}const Z=h(z,[["render",K]]);export{Z as F,X as N,B as P};
