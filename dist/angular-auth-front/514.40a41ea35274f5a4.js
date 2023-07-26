"use strict";(self.webpackChunkAngular_Auth_Front=self.webpackChunkAngular_Auth_Front||[]).push([[514],{2514:(c,l,r)=>{r.r(l),r.d(l,{AuthModule:()=>h});var g=r(9808),u=r(5271),e=r(2382),t=r(1223),a=r(4319);const m=[{path:"",component:(()=>{class n{constructor(o,s){this.formBuilder=o,this.authService=s,this.formAuth=this.formBuilder.group({email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required]]})}ngOnInit(){}submitForm(){this.formAuth.valid&&this.authService.sign({email:this.formAuth.value.email,password:this.formAuth.value.password}).subscribe({next:o=>o,error:o=>this.msgError=o})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(a.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign"]],decls:17,vars:3,consts:[[1,"container"],["src","../../../../../../assets/images/Angular.png","alt","Logo da Empresa"],[3,"formGroup","ngSubmit"],["width","20","height","20","viewBox","0 0 20 20","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM13.61 6.34C14.68 6.34 15.54 7.2 15.54 8.27C15.54 9.34 14.68 10.2 13.61 10.2C12.54 10.2 11.68 9.34 11.68 8.27C11.67 7.2 12.54 6.34 13.61 6.34ZM7.61 4.76C8.91 4.76 9.97 5.82 9.97 7.12C9.97 8.42 8.91 9.48 7.61 9.48C6.31 9.48 5.25 8.42 5.25 7.12C5.25 5.81 6.3 4.76 7.61 4.76ZM7.61 13.89V17.64C5.21 16.89 3.31 15.04 2.47 12.68C3.52 11.56 6.14 10.99 7.61 10.99C8.14 10.99 8.81 11.07 9.51 11.21C7.87 12.08 7.61 13.23 7.61 13.89ZM10 18C9.73 18 9.47 17.99 9.21 17.96V13.89C9.21 12.47 12.15 11.76 13.61 11.76C14.68 11.76 16.53 12.15 17.45 12.91C16.28 15.88 13.39 18 10 18Z","fill","#4A4A4A"],["type","text","placeholder","Email","required","","formControlName","email"],["width","16","height","21","viewBox","0 0 16 21","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z","fill","#4A4A4A"],["type","password","placeholder","Senha","required","","formControlName","password"],[1,"btn-vermelho",3,"disabled"],[1,"msg-error"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return s.submitForm()}),t.TgZ(3,"label"),t.O4$(),t.TgZ(4,"svg",3),t._UZ(5,"path",4),t.qZA(),t.kcU(),t._UZ(6,"input",5),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"label"),t.O4$(),t.TgZ(9,"svg",6),t._UZ(10,"path",7),t.qZA(),t.kcU(),t._UZ(11,"input",8),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"button",9),t._uU(14," Login "),t.qZA()(),t.TgZ(15,"span",10),t._uU(16),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("formGroup",s.formAuth),t.xp6(11),t.Q6J("disabled",s.formAuth.invalid),t.xp6(3),t.hij(" ",s.msgError," "))},directives:[e._Y,e.JL,e.sg,e.Fj,e.Q7,e.JJ,e.u],styles:["[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]   form[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:center;border-bottom:1px solid #4a4a4a}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:30px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px;border:none;font-size:18px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#4a4a4a}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(m)],u.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,C,e.UX]]}),n})()}}]);