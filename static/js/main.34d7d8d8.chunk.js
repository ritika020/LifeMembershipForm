(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),c=a.n(n),r=a(27),i=a.n(r),o=(a(100),a.p,a(101),a(37)),l=a(1),d=a(87),m=a(88),h=a(32),j=a(94),u=a(93),b=(a(102),a(103),a(89)),p=a.n(b),O=a(90),f=a.n(O),x=a.p+"static/media/avatar-placeholder.457c68df.png",g=a(57),N=a.n(g),v=a(91),S=a(92),y=a.n(S),C=function(){var e=Object(v.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,y.a.post("https://nimaaaa-project.herokuapp.com/LifeMembership",t,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).addNew=function(e){e.preventDefault();s.state.count;s.setState({count:s.state.count+1});var t=document.createElement("input");t.type="text",t.name="titleOfPaper",t.id="titleOfPaper",t.className="form-control form-control-sm mt-2",t.placeholder=" ",t.onChange="".concat(s.handleTitlePaper),document.getElementById("addNewPaper").appendChild(t)},s.handlepractitioner=function(e){e.preventDefault(),"hospitalAttached"===e.target.name?s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{practitioner:Object(l.a)(Object(l.a)({},t.professionalStatus.practitioner),{},{hospitalAttached:e.target.value})})})})):"capacity"===e.target.name&&s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{practitioner:Object(l.a)(Object(l.a)({},t.professionalStatus.practitioner),{},{capacity:e.target.value})})})}))},s.handlemedicalEduTeacher=function(e){e.preventDefault(),"nameOfInstitution"===e.target.name?s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{medicalEduTeacher:Object(l.a)(Object(l.a)({},t.professionalStatus.medicalEduTeacher),{},{nameOfInstitution:e.target.value})})})})):"designation"===e.target.name&&s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{medicalEduTeacher:Object(l.a)(Object(l.a)({},t.professionalStatus.medicalEduTeacher),{},{designation:e.target.value})})})}))},s.handleinService=function(e){e.preventDefault(),"nameOfEmployee"===e.target.name?s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{inService:Object(l.a)(Object(l.a)({},t.professionalStatus.inService),{},{nameOfEmployee:e.target.value})})})})):"designation"===e.target.name&&s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{inService:Object(l.a)(Object(l.a)({},t.professionalStatus.inService),{},{designation:e.target.value})})})}))},s.handleresearchWorker=function(e){e.preventDefault(),"nameOfInstitution"===e.target.name?s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{researchWorker:Object(l.a)(Object(l.a)({},t.professionalStatus.researchWorker),{},{nameOfInstitution:e.target.value})})})})):"designation"===e.target.name&&s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{professionalStatus:Object(l.a)(Object(l.a)({},t.professionalStatus),{},{researchWorker:Object(l.a)(Object(l.a)({},t.professionalStatus.researchWorker),{},{designation:e.target.value})})})}))},s.sendMessage=function(){},s.onResolved=function(){s.setState({messageSent:!0})},s.handleTitlePaper=function(e){e.preventDefault();var t=s.state.titleOfPaper.concat(e.target.value);console.log(t),s.setState({titleOfPaper:t})},s.state={firstName:"",middleName:"",lastName:"",gender:null,dateOfBirth:"",bloodGroup:null,contactNo:"",alternateNumber:"",address:"",qualification:"",examiningBody:"",yearOfPassing:"",registrationNumber:"",dateOfRegistration:"",nameofBoard:"",professionalStatus:{practitioner:{hospitalAttached:"",capacity:""},medicalEduTeacher:{nameOfInstitution:"",designation:""},inService:{designation:"",nameOfEmployee:""},researchWorker:{designation:"",nameOfInstitution:""}},paperPublished:"",titleOfPaper:[],nimaMemberBefore:null,branch:null,reasonForDiscontinue:"",message:"",messageSent:!1,selectedProfessionalStatus:"",practitioner:!1,medicalEduTeacher:!1,inService:!1,researchWorker:!1,count:0},s.handleChange=s.handleChange.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),s}return Object(m.a)(a,[{key:"handleChange",value:function(e){"professionalStatus"===e.target.name?(this.setState({selectedProfessionalStatus:e.target.value}),"practitioner"===e.target.value?(this.setState({practitioner:!0}),this.setState({medicalEducationTeacher:!1}),this.setState({inService:!1}),this.setState({researchWorker:!1})):"medicalEducationTeacher"===e.target.value?(this.setState({practitioner:!1}),this.setState({medicalEducationTeacher:!0}),this.setState({inService:!1}),this.setState({researchWorker:!1})):"inService"===e.target.value?(this.setState({practitioner:!1}),this.setState({medicalEducationTeacher:!1}),this.setState({inService:!0}),this.setState({researchWorker:!1})):"researchWorker"===e.target.value&&(this.setState({practitioner:!1}),this.setState({medicalEducationTeacher:!1}),this.setState({inService:!1}),this.setState({researchWorker:!0}))):this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.recaptcha.execute(),console.log(this.state);var t=new FormData(e.target),a={};a.firstName=t.get("firstName")||this.state.firstName,a.middleName=t.get("middleName")||this.state.middleName,a.lastName=t.get("lastName")||this.state.lastName,a.gender=t.get("gender")||this.state.gender,a.DateOfBirth=t.get("dateOfBirth")||this.state.dateOfBirth,a.bloodGroup=t.get("bloodGroup")||this.state.bloodGroup,a.contactNo=t.get("contactNo")||this.state.contactNo,a.alternateNumber=t.get("alternateNumber")||this.state.alternateNumber,a.address=t.get("address")||this.state.address,a.qualification=t.get("qualification")||this.state.qualification,a.examiningBody=t.get("examiningBody")||this.state.examiningBody,a.yearOfPassing=t.get("yearOfPassing")||this.state.yearOfPassing,a.registrationNumber=t.get("registrationNumber")||this.state.registrationNumber,a.dateOfRegistration=t.get("dateOfRegistration")||this.state.dateOfRegistration,a.nameOfBoard=t.get("nameOfBoard")||this.state.nameOfBoard;var s=this.state.selectedProfessionalStatus;"practitioner"===s&&(a["professionalStatus.practitioner"]=this.state.professionalStatus.practitioner),"medicalEducationTeacher"===s&&(a["professionalStatus.medicalEduTeacher"]=this.state.professionalStatus.medicalEduTeacher),"inService"===s&&(a["professionalStatus.inService"]=this.state.professionalStatus.inService),"researchWorker"===s&&(a["professionalStatus.researchWorker"]=this.state.professionalStatus.researchWorker),"y"===(t.get("paperPublished")||this.state.paperPublished)&&(a.titleOfPaper=this.state.titleOfPaper),console.log(a),C(a).then((function(e){console.log(e.data),"success"===e.data.status&&(alert("Success "+e.data.message),window.location.reload())})).catch((function(e){alert(e),console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{className:"Forms_first mr-5 ml-5 mb-5",children:[Object(s.jsx)("div",{className:"Forms_pic mb-1",children:Object(s.jsxs)("div",{className:"form-row mt-4",children:[Object(s.jsx)("div",{className:"col-md-2  no-gutters",children:Object(s.jsx)("img",{src:x,alt:"Avatar",className:"Forms_avatar"})}),Object(s.jsxs)("div",{className:"col-md-6 offset-md-2 ",children:[Object(s.jsx)("p",{style:{fontSize:"30px"},children:"NIMA LIFE MEMBERSHIP APPLICATION FORM"}),Object(s.jsx)("div",{className:"row justify-content-center",children:"4140 Parker Rd, Allentown, New Mexico 31134"})]})]})}),Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsx)("h4",{className:"Forms_title Forms_titleText mb-4",children:"Personal details"}),Object(s.jsxs)("div",{className:"form-row mb-3",children:[Object(s.jsxs)("div",{className:" col-md-2 col-12",children:[Object(s.jsx)("input",{name:"firstName",id:"firstName",onChange:this.handleChange,className:"form-control",type:"text",pattern:"[A-Za-z_ ]{1,32}",title:"*ENTER CHARACTER VALUES ONLY",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"First Name"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"middleName",id:"middleName",onChange:this.handleChange,className:"form-control",type:"text",pattern:"[A-Za-z_ ]{1,32}",title:"*ENTER CHARACTER VALUES ONLY",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Middle Name"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"lastName",id:"lastName",onChange:this.handleChange,className:"form-control",type:"text",placeholder:" ",pattern:"[A-Za-z_ ]{1,32}",title:"*ENTER CHARACTER VALUES ONLY",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Last Name"})]}),Object(s.jsx)("div",{className:"col-md-1 col-12",children:Object(s.jsxs)("select",{className:"custom-select Form__select",id:"gender",name:"gender",onChange:this.handleChange,required:!0,children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Gender"}),Object(s.jsx)("option",{value:"male",children:"Male"}),Object(s.jsx)("option",{value:"female",children:"Female"}),Object(s.jsx)("option",{value:"other",children:"Others"})]})}),Object(s.jsxs)("div",{className:"col-md-2 col-12 mt-2 mt-md-0",children:[Object(s.jsx)("input",{required:!0,type:"date",name:"dateOfBirth",id:"dateOfBirth",onChange:this.handleChange,className:"form-control",placeholder:" "}),Object(s.jsx)("span",{className:"Form__span",children:"Date of birth"})]}),Object(s.jsx)("div",{className:"col-md-1 col-12",children:Object(s.jsxs)("select",{className:"custom-select Form__select",id:"bloodGroup",name:"bloodGroup",required:!0,onChange:this.handleChange,children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Blood Group"}),Object(s.jsx)("option",{value:"A+",children:"A+"}),Object(s.jsx)("option",{value:"A-",children:"A-"}),Object(s.jsx)("option",{value:"B+",children:"B+"}),Object(s.jsx)("option",{value:"B-",children:"B-"}),Object(s.jsx)("option",{value:"AB+",children:"AB+"}),Object(s.jsx)("option",{value:"AB-",children:"AB-"}),Object(s.jsx)("option",{value:"O+",children:"O+"}),Object(s.jsx)("option",{value:"O-",children:"O-"})]})}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"contactNo",onChange:this.handleChange,className:"form-control",pattern:"[1-9]{1}[0-9]{9}",title:"Number should be of 10 digits only",type:"tel",id:"contactNo",placeholder:" ",min:"0",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Number"})]})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"col-md-10 col-12",children:[Object(s.jsx)("textarea",{className:"form-control",name:"address",id:"address",onChange:this.handleChange,placeholder:" ",rows:"3",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Residential Address"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"alternateNumber",pattern:"[1-9]{1}[0-9]{9}",title:"Number should be of 10 digits only",type:"tel",id:"alternateNumber",onChange:this.handleChange,className:"form-control",min:"0",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Alternate Number"})]})]}),Object(s.jsx)("br",{}),Object(s.jsx)("h5",{className:"Forms_titleText",children:"Qualification Details"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"col-md-5 col-12",children:[Object(s.jsx)("input",{type:"text",name:"qualification",id:"qualification",onChange:this.handleChange,className:"form-control form-control-sm",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Academic Qualification"})]}),Object(s.jsxs)("div",{className:"col-md-5 col-12",children:[Object(s.jsx)("input",{type:"text",name:"examiningBody",id:"examiningBody",className:"form-control form-control-sm",placeholder:" ",onChange:this.handleChange,required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Examining Body"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{type:"number",name:"yearOfPassing",id:"yearOfPassing",pattern:"[1-9]{1}[0-9]{3}",title:"Number should be of 4 digits only",className:"form-control form-control-sm",placeholder:" ",onChange:this.handleChange,required:!0,min:"0"}),Object(s.jsx)("span",{className:"Form__span",children:"Year of Passing"})]})]}),Object(s.jsx)("br",{}),Object(s.jsx)("h5",{className:"Forms_titleText",children:"Membership Details"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{type:"text",name:"registrationNumber",id:"registrationNumber",className:"form-control form-control-sm",placeholder:" ",onChange:this.handleChange,required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Registration Number"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12 mt-2 mt-md-0",children:[Object(s.jsx)("input",{type:"date",name:"dateOfRegistration",id:"dateOfRegistration",onChange:this.handleChange,className:"form-control",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Date Of Registration"})]}),Object(s.jsxs)("div",{className:"col-md-5 col-12",children:[Object(s.jsx)("input",{type:"text",name:"nameOfBoard",id:"nameOfBoard",className:"form-control form-control-sm",placeholder:" ",onChange:this.handleChange,required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Name of the Board/Council of Registration"})]})]}),Object(s.jsx)("br",{}),Object(s.jsx)("h5",{className:"Forms_titleText",children:"Professional Status"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("div",{className:"col-md-2 col-12",children:Object(s.jsxs)("select",{className:"custom-select Form__select",id:"professionalStatus",name:"professionalStatus",required:!0,onChange:this.handleChange,children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Professional Status"}),Object(s.jsx)("option",{value:"practitioner",children:"Practitioner"}),Object(s.jsx)("option",{value:"medicalEducationTeacher",children:"Medical Education Teacher"}),Object(s.jsx)("option",{value:"inService",children:"In Service"}),Object(s.jsx)("option",{value:"researchWorker",children:"Research Worker"})]})}),this.state.practitioner&&Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"hospitalAttached",id:"hospitalAttached",onChange:this.handlepractitioner,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Hospital Attached"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"capacity",id:"capacity",onChange:this.handlepractitioner,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"In What Capacity"})]})]}),this.state.medicalEducationTeacher&&Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"col-md-5 col-12",children:[Object(s.jsx)("input",{name:"nameOfInstitution",id:"nameOfInstitution",onChange:this.handlemedicalEduTeacher,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Name of the Institution"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"designation",id:"designation",onChange:this.handlemedicalEduTeacher,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Designation"})]})]}),this.state.inService&&Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"designation",id:"designation",onChange:this.handleinService,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Designation"})]}),Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"nameOfEmployee",id:"nameOfEmployee",onChange:this.handleinService,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Name of the Employee"})]})]}),this.state.researchWorker&&Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"col-md-2 col-12",children:[Object(s.jsx)("input",{name:"designation",id:"designation",onChange:this.handleresearchWorker,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Designation"})]}),Object(s.jsxs)("div",{className:"col-md-5 col-12",children:[Object(s.jsx)("input",{name:"nameOfInstitution",onChange:this.handleresearchWorker,className:"form-control",type:"text",placeholder:" ",required:!0}),Object(s.jsx)("span",{children:"Name of the Institution"})]})]})]}),Object(s.jsxs)("div",{className:"form-row mt-md-3",children:[Object(s.jsx)("div",{className:"col-md-2 col-12",children:Object(s.jsxs)("select",{className:"custom-select Form__select",id:"paperPublished",name:"paperPublished",required:!0,onChange:this.handleChange,children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Scientific Papers Published"}),Object(s.jsx)("option",{value:"y",children:"Yes"}),Object(s.jsx)("option",{value:"n",children:"No"})]})}),Object(s.jsxs)("div",{className:"col-md-5 col-12",children:[Object(s.jsx)("input",{type:"text",name:"titleOfPaper",className:"form-control form-control-sm",placeholder:" ",onChange:this.handleTitlePaper,required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Title of Paper"})]}),Object(s.jsx)("button",{type:"button",className:"btn btn-link",style:{color:"black"},onClick:this.addNew,children:"+ Add Another"})]}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("div",{className:"col-md-2 col-12"}),Object(s.jsx)("div",{id:"addNewPaper",className:"col-md-5 col-12"})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-row",children:[Object(s.jsx)("div",{className:"col-md-2 col-12",children:Object(s.jsxs)("select",{className:"custom-select Form__select",id:"nimaMemberBefore",name:"nimaMemberBefore",onChange:this.handleChange,required:!0,children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"NIMA Member Before?"}),Object(s.jsx)("option",{value:"y",children:"Yes"}),Object(s.jsx)("option",{value:"n",children:"No"})]})}),Object(s.jsx)("div",{className:"col-md-2 col-12",children:Object(s.jsxs)("select",{className:"custom-select Form__select",id:"branch",name:"branch",onChange:this.handleChange,required:!0,children:[Object(s.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Branch"}),Object(s.jsx)("option",{value:"y",children:"Yes"}),Object(s.jsx)("option",{value:"n",children:"No"})]})}),Object(s.jsxs)("div",{className:"col-md-5 col-12",children:[Object(s.jsx)("textarea",{className:"form-control",name:"reasonForDiscontinue",id:"reasonForDiscontinue",placeholder:" ",onChange:this.handleChange,rows:"2",required:!0}),Object(s.jsx)("span",{className:"Form__span",children:"Reason for Discontinue"})]})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col text-center",children:[Object(s.jsx)("button",{className:"button button1",children:"View form"}),Object(s.jsx)("button",{className:"button button2",type:"submit",children:"Submit form"})]})})}),Object(s.jsx)(p.a,{ref:function(t){return e.recaptcha=t},sitekey:"6LdV_00aAAAAAOhy0wsKIR1yCyOcOWK-7-X0J0zQ",onResolved:this.onResolved})]})]})})}}]),a}(c.a.Component);var F=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(_,{})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,233)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root")),E()}},[[232,1,2]]]);
//# sourceMappingURL=main.34d7d8d8.chunk.js.map