(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["52877"],{249942:function(e,t,n){n.d(t,{Z:()=>T});var s=n(667294),i=n(616550),o=n(883119),a=n(521367),r=n(899111),l=n(12930),c=n(138596),d=n(583875),u=n(924591),h=n(253542),_=n(600138),m=n(575820),p=n(785893),x=n(173874),f=n(660613),g=n(661376),y=n(577356),b=n(462867),A=n(179),j=n(380108),w=n(386385),P=n(206349),v=n(920343),C=n(171039),S=n(841353);function T({currentSite:e,isSterlingOnSteroids:t,isAdsNavMenuEnabled:n,advertiser:T,idealTooltipDirection:I,icon:k,iconSize:B,iconLabel:z,defaultIconColor:Z,selectedIconColor:E,tooltipZIndex:O,onClick:R,onPanelChange:L,showMoreOptions:D=!0}){let U=(0,c.ZP)(),{showAccountMenuFlyout:N,updateHeaderState:H}=(0,j.Z)(),M=e=>{H({type:e?"showAccountMenuFlyout":"hideAccountMenuFlyout"})},[F,W]=(0,s.useState)(!1),[Y,$]=(0,s.useState)(!0),q=(0,i.k6)(),G=(0,b.Z)(),Q=(0,C.Z)(),V=(0,v.Z)({user:Q.data,viewer:G}),K=V&&Y,X=(0,g.Z)({name:"UserResource",options:{field_set_key:"linked_partner",user_id:G.isAuth?G.id:""}}),J=(0,s.useRef)(null),ee=(0,l.YG)(e)&&!t||(0,l.Dm)(e)||(0,l.Y3)(e),et=(0,l.Y3)(e)||n,en=(0,i.TH)(),es=(0,y.F9)();(0,s.useEffect)(()=>{!function({showOneToast:e,i18n:t,location:n,history:s,username:i,fullName:o,avatarUrl:a}){if(!(n&&n.search))return;let r=(0,_.Z)(t,n,i||""),{message:l}=(0,m.mB)(n.search),c=l===h.pN||l===h.aU;r&&(e(({hideToast:e})=>(0,p.jsx)(u.Z,{duration:h.Jl,onHide:e,text:r,thumbnail:c?{avatar:(0,p.jsx)(d.qE,{name:o||"",size:"md",src:a||""})}:void 0})),s.replace(n.hash?`${n.pathname}${n.hash}`:n.pathname))}({showOneToast:es.showOneToast,i18n:U,location:en,history:q,username:G.username||"",fullName:G.fullName||"",avatarUrl:G.imageMediumUrl||""})},[]),(0,s.useEffect)(()=>(G.isAuth&&G.partner&&(0,f.Mt)(G,X.data),()=>{G.isAuth&&G.partner&&(0,f.CV)("flyout.dismiss")}),[]),(0,s.useEffect)(()=>{(X.data?.businesses??[]).length>0&&W(!0)},[X]),(0,s.useEffect)(()=>{L?.(N)},[N]);let{pathname:ei}=en,eo=!(ei.startsWith("/settings")||ei.startsWith("/edit"))&&(G.username&&ei.startsWith(`/${G.username}`)||ei.startsWith("/news_hub")),ea=V||ei.startsWith("/homefeed")||ei.startsWith("/business/hub")||"/"===ei;return(0,p.jsx)(A.T,{children:(0,p.jsxs)(S.j,{children:[(0,p.jsx)(o.xu,{ref:J,"data-test-id":"header-accounts-options-button",children:(0,p.jsx)(o.hU,{accessibilityLabel:z??U._('Accounts and more options', 'header.accountsOptionsMenu.accountsOptionsMenuButton', 'accessibility label for the button that shows the accounts/options menu'),icon:k||"arrow-down",iconColor:N?E||"darkGray":Z||"gray",onClick:()=>{R?.(),M(!N),W(!1),$(!1)},size:B||"xs",tooltip:{accessibilityLabel:"",text:z??U._('Accounts and more options', 'navbar.actionsOptionsButton.tooltip', 'Tooltip text for icon button to open accounts/options menu'),zIndex:O||new o.H3([w.NW]),idealDirection:I}})}),N&&(0,p.jsx)(o.xu,{"data-test-id":"HeaderAccountsOptionsFlyout",children:(0,p.jsx)(r.Z,{advertiser:T,anchor:J.current,isWwwSite:(0,l.YG)(e),onDismiss:()=>{M(!1)},showAccountSwitcher:ee,showAdsSupportOption:et,showMoreOptions:D})}),F&&(0,p.jsx)(o.xu,{"data-test-id":"LinkedBusinessAccountFlyout",children:(0,p.jsx)(a.Qp,{anchor:J.current,experienceIds:[502787],placementId:1000109,showCaret:!0})}),(0,x.LO)(en)&&(0,p.jsx)(a.Qp,{anchor:J.current,experienceIds:[503137],idealDirection:"left",placementId:1000303}),G.isAuth&&!G.partner?(0,p.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,p.jsx)(a.Qp,{anchor:J.current,experienceIds:[503893,503602],onClickComplete:()=>q.push("/settings"),placementId:1000109,showCaret:!0})}):null,K&&(0,p.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,p.jsx)(a.Qp,{anchor:J.current,experienceIds:[505848],hasFullWidthButton:!1,onClickComplete:()=>{$(!1),q.push("/settings/permissions")},placementId:1000109,showCaret:!0,textWeight:"normal"})}),eo&&(0,p.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,p.jsx)(a.Qp,{anchor:J.current,experienceIds:[505283],flyoutSize:"md",hasFullWidthButton:!1,onClickComplete:()=>{q.push("/settings/privacy/")},placementId:1000109,showCaret:!0,textAlign:"center",textWeight:"bold"})}),ea&&(0,p.jsx)(o.mh,{zIndex:new o.H3([P.pS]),children:(0,p.jsx)(a.Qp,{anchor:J.current,experienceIds:[505949],hasFullWidthButton:!1,onClickComplete:()=>{q.push("/settings/claim")},placementId:1000109,showCaret:!0,textWeight:"normal"})})]})})}},686710:function(e,t,n){n.d(t,{Z:()=>s});function s(e){return"object"==typeof e&&null!==e&&"url"in e&&"media"in e}},720901:function(e,t,n){n.d(t,{Z:()=>a});var s=n(667294),i=n(230201),o=n(746868);let a=e=>{let t=(0,s.useRef)(!1),{logContextEvent:n}=(0,i.v)(),{viewType:a,viewParameter:r}=(0,o.SU)();(0,s.useEffect)(()=>{Object.entries(e).length>0&&!t.current&&a&&(n({event_type:13,view_type:a,view_parameter:r,...e}),t.current=!0)})}},253542:function(e,t,n){n.d(t,{Di:()=>a,Jl:()=>s,R:()=>i,aU:()=>r,j2:()=>o,pN:()=>l});let s=1e4,i="permanent_account_closure",o="account_deletion_email_sent",a="account_deactivated",r="unlink_successful",l="account_switch_to_settings"},600138:function(e,t,n){n.d(t,{Z:()=>o});var s=n(533104),i=n(575820);function o(e,t,n=""){if(!(t&&t.search))return"";let{message:a}=(0,i.mB)(t.search),r=(0,i.mB)(t.search).username||n,l="true"===(0,i.mB)(t.search).multiple_accounts;return(0,s.Z)({i18n:e,message:a,multipleAccounts:l,username:r})}},533104:function(e,t,n){n.d(t,{Z:()=>l});var s=n(883119),i=n(216975),o=n(253542),a=n(785893);function r(e,t,n){return(0,a.jsx)(s.xv,{align:n||"center",children:(0,i.nk)(e,{username:(0,a.jsx)(s.xv,{inline:!0,weight:"bold",children:t})})})}function l({i18n:e,message:t,multipleAccounts:n,username:s=""}){switch(t){case o.R:return e._('Your account has been deleted. We\'re sad to see you go', 'unauthLoginPage.accountDeletedToast.message', 'Confirmation message after a user has successfully deleted their account');case o.j2:if(n)return r(e._('An email has been sent with final steps to delete your account, {{username}} and its linked accounts', 'accountDeletedEmailToast.message.multipleAccounts', 'Confirmation message after a user has successfully requested multiple accounts deletion'),s);return r(e._('An email has been sent with final steps to delete your account, {{username}}', 'accountDeletedEmailToast.message.singleAccount', 'Confirmation message after a user has successfully requested a single account deletion'),s);case o.Di:return r(n?e._('The account, {{username}}, and its associated linked accounts have been deactivated', 'unauthLoginPage.deactivatedToast.message.multipleAccounts', 'Confirmation message after a user has successfully deactivated multiple accounts'):e._('The account, {{username}}, has been deactivated', 'unauthLoginPage.deactivatedToast.message.singleAccount', 'Confirmation message after a user has successfully deactivated a single account'),s);case o.aU:return r(e._('Success! You\'ve unlinked this business account. You are currently in {{username}}.', 'authHomeFeedPage.unlinkAccountToast.message', 'Confirmation message after a user has successfully unlinked business account'),s,"start");case o.pN:return r(e._('You\'ve switched into and are currently in the account {{username}}', 'accountSettings.switchAccountToAccountChanges', 'Confirmation message after a user has successfully switched accounts and got redirected to Account Changes'),s,"start");default:return""}}},923298:function(e,t,n){n.d(t,{Z:()=>o});var s=n(818244),i=n(233550);let o=()=>{let e=(0,s.g)(),t=(0,i.l)();return n=>{let{mobileOptions:s,desktopOptions:i,reason:o,attributionLabel:a,pinId:r}=n;e?e.showDesktopSignupModal({signupFlow:i?.modalType==="login"?{type:"login"}:{type:"signup"},reason:o,attributionLabel:a,...i?.modalOptions}):t&&t.showMobileSignupModal({reason:o,attributionLabel:a,headingType:s?.headingType??"none",pinId:r})}}},649540:function(e,t,n){n.d(t,{Z:()=>o});var s=n(925201),i=n(145626);function o({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:o,advertiserId:a}){let r=e||t||n?`${i.C0}`:"",l=`${r}${o}`;return a?(0,s.Z)(l,{advertiserId:a}):l}},771091:function(e,t,n){n.r(t),n.d(t,{Header:()=>X,default:()=>J});var s=n(667294),i=n(616550),o=n(883119),a=n(363061),r=n(171419),l=n(11442),c=n(686710),d=n(71133),u=n(562400),h=n(521367),_=n(249942),m=n(138596),p=n(173874),x=n(167336),f=n(613567),g=n(774838),y=n(736328),b=n(575820),A=n(420711),j=n(812671),w=n(611649),P=n(230201),v=n(544030),C=n(405019),S=n(785893);let T=({isSelected:e,onClick:t})=>{let n=(0,m.ZP)(),{logContextEvent:r}=(0,P.v)(),l=(0,w.Z)(!0),c=(0,s.useRef)(null),[d,u]=(0,s.useState)(!1),h=(0,i.k6)(),_=e=>{r({event_type:101,component:13988,element:e}),u(!1)};return(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:c,"data-test-id":"create-tab",children:(0,S.jsx)(v.Z,{contextData:C.SB.createPin,iconEnd:l?void 0:"arrow-down",isSelected:e,onClick:e=>{t?.(),l?(r({event_type:101,component:13988,element:10949}),e.preventDefault(),h.push({pathname:(0,a.Z)(l),state:{entry_type:"navbar_plus_button"}})):u(e=>!e)},role:l?"link":"button",text:n._('Create', 'header.section.createTab', 'visual label for Create tab button in nav bar')})}),d&&(0,S.jsxs)(o.Lt,{anchor:c.current,id:"header-create-dropdown",idealDirection:"down",onDismiss:()=>{u(!1)},zIndex:new o.Ry(1e3),children:[(0,S.jsx)(o.Lt.Link,{dataTestId:"create-idea-pin",href:"/idea-pin-builder/",onClick:()=>_(10949),option:{value:"ideaPin",label:n._('Create Pin for Idea ad', 'header.headerCreateMenu.ideaPinBtn', 'Create Pin for Idea ad button')}}),(0,S.jsx)(o.Lt.Link,{dataTestId:"create-static-pin",href:"/pin-builder/",onClick:()=>_(10643),option:{value:"pin",label:n._('Create Pin', 'header.headerCreateMenu.pinBtn', 'Create Pin button')}})]})]})};var I=n(424733),k=n(626487),B=n(811666),z=n(186485),Z=n(902123),E=n(386385),O=n(767415);function R({tabs:e}){let t=(0,m.ZP)(),[n,i]=(0,s.useState)(!1),{hovered:a,onMouseEnter:r,onMouseLeave:l}=(0,Z.Z)(),c=(0,s.useRef)(null),d=e.find(e=>e.isSelected);d||(d=e.find(e=>"home"===e.key));let u=()=>i(!1);return(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:c,color:n?"dark":a?"secondary":void 0,"data-test-id":"HeaderCollapsedTabs",display:"inlineBlock",flex:"none",height:48,marginStart:2,minWidth:60,onMouseEnter:r,onMouseLeave:l,rounding:6,children:(0,S.jsx)(o.iP,{fullHeight:!0,onTap:()=>{i(!n),d?.incrementKey&&(0,O.nP)(d.incrementKey)},rounding:6,children:(0,S.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{padding:"14px 14px",whiteSpace:"nowrap"}},display:"flex",flex:"none",justifyContent:"center",children:[(0,S.jsx)(o.xv,{align:"center",color:n?"inverse":"default",overflow:"normal",weight:"bold",children:d?.text}),(0,S.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{marginTop:"1px"}},marginStart:2,children:(0,S.jsx)(o.JO,{accessibilityLabel:t._('Open tab menu', 'header.tabMenu.downArrow', 'accessibility label for icon indicating more tabs are available in a menu'),color:n?"inverse":"default",icon:"arrow-down",size:12})})]})})}),n&&(0,S.jsx)(o.xu,{"data-test-id":"HeaderCollapsedTabsMenu",children:(0,S.jsx)(o.Lt,{anchor:c.current,disableMobileUI:!0,id:"HeaderCollapsedTabsMenu",onDismiss:u,zIndex:new o.H3([new o.Ry(E.fe)]),children:e.map(({isSelected:e,key:n,text:s,url:i})=>(0,S.jsx)(o.Lt.Link,{href:i,onClick:u,option:{value:n,label:s},children:(0,S.jsxs)(o.kC,{alignItems:"center",width:"100%",children:[(0,S.jsx)(o.kC.Item,{flex:"grow",children:(0,S.jsx)(o.xv,{weight:"bold",children:s})}),(0,S.jsx)(o.JO,{accessibilityLabel:t._('Selected option', 'flyoutMenu.selectedOptionCheckmark', 'Accessibility label for checkmark icon indicating which option is currently selected'),color:"default",icon:e?"check":void 0,inline:!0})]})},n))})})]})}var L=n(439405),D=n(543380),U=n(661376);function N({children:e,isSelected:t}){let{isLoaded:n,data:s}=(0,U.Z)({name:"ApiResource",options:{url:"/v3/feeds/homefeed/badge/"},noCache:!0});return e(!!(n&&s)&&!t)}function H({anchor:e}){let t=(0,m.ZP)();return(0,S.jsx)(o.Li,{anchor:e,idealDirection:"down",message:t._('Your home feed will show ideas for your new interests', 'Flyout message on Pinterest logo on Header', 'Flyout message on Pinterest logo on Header'),onDismiss:()=>{}})}var M=n(939986),F=n(534222),W=n(720901),Y=n(849371);function $({isSelected:e,onClick:t}){let n=(0,m.ZP)();(0,W.Z)({component:C.SB.today.component,element:C.SB.today.element});let s=n._('Explore', 'header.section.exploreTab', 'visual label for Explore tab button in nav bar');return(0,S.jsx)(v.Z,{contextData:C.SB.today,dataTestId:"today-tab",isSelected:e,onClick:t,showNotifBadge:!0,text:s,url:(0,Y.tG)()})}var q=n(206349),G=n(791830);function Q(e,t,n){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let{hidden:V,visibilityChange:K}=(0,d.s)();class X extends s.Component{constructor(e){super(e),Q(this,"mounted",!1),Q(this,"iconRoutes",(0,I.Z)({username:this.props.viewer.username,isIdeaPinRenamingEnabled:this.props.isIdeaPinRenamingEnabled})),Q(this,"logoButtonRef",(0,s.createRef)()),Q(this,"profileRef",(0,s.createRef)()),Q(this,"getCollapsedTabList",()=>[{key:"home",text:this.props.i18n._('Home', 'header.homeButton.section', 'accessibility label for home button in nav bar'),url:"/",incrementKey:C.sp.HOME_BUTTON_COLLAPSED_TAB},...this.props.isTodayTabEligible?[{key:"explore",text:this.props.i18n._('Explore', 'header.section.exploreTab', 'visual label for Explore tab button in nav bar'),url:this.props.todayPathUrl,incrementKey:C.sp.TODAY_TAB_COLLAPSED_TAB}]:[],{key:"create",text:this.props.i18n._('Create', 'header.section.createTab', 'visual label for Create tab button in nav bar'),url:(0,a.Z)(this.props.isIdeaPinRenamingEnabled),incrementKey:C.sp.CREATE_TAB_COLLAPSED_TAB}]),Q(this,"handleResize",(0,u.Z)(()=>{if(this.mounted){let e=document.getElementById("searchBoxContainer")?.offsetWidth||0;this.setState({searchIconOnly:e<=300}),window.innerWidth<850&&this.props.requestContext?this.setState({shrinkSearchbox:!0}):this.state.shrinkSearchbox&&this.setState({searchIconOnly:!1,shrinkSearchbox:!1})}},100)),Q(this,"handleDAUPing",()=>{document[V]||(0,l.Z)()}),Q(this,"fetchUserAccounts",()=>{let{userAccountsRetrieved:e,viewer:t}=this.props;t.isAuth&&(0,x.dD)(t).then(t=>{e(t)})}),this.state={searchIconOnly:!1,selected:(0,k.Z)({pathname:e.location.pathname,iconRoutes:this.iconRoutes}),showLeftTabs:!0,shrinkSearchbox:!1}}componentDidMount(){let{headerButtonContext:e}=this.props;this.mounted=!0,this.fetchUserAccounts(),this.handleResize(),window.addEventListener("resize",this.handleResize),(0,s.startTransition)(()=>{e.setLogoButtonRef(this.logoButtonRef.current)}),K&&window.addEventListener(K,this.handleDAUPing,!1)}componentDidUpdate(e){let{location:t}=this.props;if(e.location.pathname!==t.pathname){let e=(0,k.Z)({pathname:t.pathname,iconRoutes:this.iconRoutes});this.setState({selected:e})}}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),K&&window.removeEventListener(K,this.handleDAUPing),this.mounted=!1}renderSearchBox(){let{history:e}=this.props,{searchIconOnly:t,shrinkSearchbox:n}=this.state;return e?.push?(0,S.jsx)(j.Z,{handleIconOnlyChange:e=>this.setState({showLeftTabs:t&&e}),iconOnly:t,widthType:n?"shrink":void 0}):null}renderButtons(){let{currentSite:e,headerButtonContext:t,isVerticalNavEnabled:n,onMouseDownHomefeedPrefetch:i,onNavigateToHomefeedMousedownPrefetch:a}=this.props,{selected:r,showLeftTabs:l,shrinkSearchbox:c}=this.state;return n?(0,S.jsxs)(o.xu,{alignItems:"center",column:12,"data-test-id":"button-container",display:"flex",height:56,children:[this.renderSearchBox(),(0,S.jsx)(o.kC.Item,{children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(B.Z,{idealTooltipDirection:"down",isSelected:"profile"===r,onClick:()=>(0,O.nP)(C.Un.AVATAR),tooltipZIndex:q.BO})})}),(0,S.jsx)(o.kC.Item,{children:(0,S.jsx)(_.Z,{currentSite:e,iconLabel:this.props.i18n._('Accounts', 'header.accountOptionsButton.accountsOnly', 'accessibility label for accounts button in nav bar'),onPanelChange:e=>{e&&(0,O.nP)(C.Un.ACCOUNT_SWITCHER)},showMoreOptions:!1})})]}):(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsxs)(o.xu,{children:[(0,S.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>{(0,O.nP)(C.sp.PINTEREST_LOGO),a?.()},onMouseDown:i},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,S.jsx)(H,{anchor:this.logoButtonRef.current})]}),!c&&l&&(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(N,{isSelected:"home"===r,children:e=>(0,S.jsx)(v.Z,{dataTestId:"home-tab",isSelected:"home"===r,onClick:()=>(0,O.nP)(C.sp.HOME_TAB),showNotifBadge:e,text:this.props.i18n._('Home', 'header.homeButton.section', 'accessibility label for home button in nav bar'),url:"/"})}),this.props.isTodayTabEligible&&(0,S.jsx)($,{isSelected:"today"===r,onClick:()=>(0,O.nP)(C.sp.TODAY_TAB)}),(0,S.jsx)(T,{isSelected:"create"===r,onClick:()=>(0,O.nP)(C.sp.CREATE_TAB)})]}),c&&l&&(0,S.jsx)(R,{tabs:this.getCollapsedTabList().map(e=>({isSelected:r===e.key,...e}))}),this.renderSearchBox(),(0,S.jsxs)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:[(0,S.jsx)(F.F,{value:{currentSite:e},children:(0,S.jsx)(G.Z,{onConversationsClick:()=>(0,O.nP)(C.sp.CONVERSATIONS),onNewsClick:()=>(0,O.nP)(C.sp.NEWS)})}),(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:this.profileRef,children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(B.Z,{isSelected:"profile"===r,onClick:()=>(0,O.nP)(C.sp.AVATAR)})})}),(0,S.jsx)(_.Z,{currentSite:e,onClick:()=>(0,O.nP)(C.sp.ACCOUNT_OPTIONS)})]})]})]})}renderHomeButtonAndAccountSwitcher(){let{currentSite:e,headerButtonContext:t}=this.props,{selected:n}=this.state;return(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsxs)(o.xu,{children:[(0,S.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>(0,O.nP)(C.sp.EXTERNAL_BUTTON_QUERY_PINTEREST_LOGO)},"HomeButton")}),t.isTooltipOnLogoButtonShown&&(0,S.jsx)(H,{anchor:this.logoButtonRef.current})]}),(0,S.jsx)(o.xu,{flex:"grow"}),(0,S.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,S.jsxs)(s.Fragment,{children:[(0,S.jsx)(o.xu,{ref:this.profileRef,children:(0,S.jsx)(M.Z,{children:(0,S.jsx)(B.Z,{isSelected:"profile"===n,onClick:()=>(0,O.nP)(C.sp.EXTERNAL_BUTTON_QUERY_AVATAR)})})}),(0,S.jsx)(_.Z,{currentSite:e,onClick:()=>(0,O.nP)(C.sp.EXTERNAL_BUTTON_QUERY_ACCOUNT_OPTIONS)})]})})]})}renderBusinessSsoPageHeader(){let{i18n:e}=this.props;return(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsx)(o.xu,{ref:this.logoButtonRef,"aria-hidden":!0,children:(0,S.jsx)(D.Z,{onClick:()=>(0,O.nP)(C.sp.SSO_PAGE_PINTEREST_LOGO)},"HomeButton")}),(0,S.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{letterSpacing:"-1px"}},children:(0,S.jsx)(o.X6,{accessibilityLevel:2,color:"default",overflow:"normal",size:"400",children:e._('Business', 'authHeader.logoText.business', 'Business text for the sso signup page header')})})]})}renderUnsubscribePageHeader(){let{history:e,i18n:t,trackInteraction:n}=this.props;return(0,S.jsxs)(o.xu,{alignItems:"center",column:12,display:"flex",height:56,children:[(0,S.jsx)(o.xu,{children:(0,S.jsx)(D.Z,{onClick:()=>(0,O.nP)(C.sp.UNSUBSCRIBE_PAGE_PINTEREST_LOGO)},"HomeButton")}),(0,S.jsx)(o.xu,{flex:"grow"}),(0,S.jsx)(o.xu,{alignItems:"center","data-test-id":"button-container",display:"flex",children:(0,S.jsx)(o.iP,{onTap:()=>{e.push("/"),n({action:"click",item:"back-to-pinterest",within:"unsubscribe-page"})},rounding:2,tapStyle:"compress",children:(0,S.jsxs)(o.kC,{alignItems:"center",justifyContent:"start",children:[(0,S.jsx)(o.xv,{inline:!0,size:"300",weight:"bold",children:t._('Back to Pinterest', 'header.backToPinterest.section', 'Button that allows one-click going back to Pinterest homefeed from email unsubscribe page')}),(0,S.jsx)(B.Z,{isSelected:!1,noNavigation:!0,onClick:()=>(0,O.nP)(C.sp.UNSUBSCRIBE_PAGE_AVATAR)})]})})})]})}renderHeaderContent(){let{location:e,viewer:t}=this.props;if((0,p.RU)(e)){let t=(0,b.mB)(e.search);if((0,c.Z)(t))return this.renderHomeButtonAndAccountSwitcher()}else if((0,p.OK)(e)&&t.isLimitedLogin)return this.renderUnsubscribePageHeader();else if((0,p.nU)(e))return this.renderBusinessSsoPageHeader();return this.renderButtons()}render(){let{headerShadowContext:{isScrolled:e,subheaderShadow:t},nags:n}=this.props;return(0,S.jsxs)(o.xu,{color:"default",column:12,"data-test-id":"header-background",children:[n,(0,S.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{...null===t&&e?E.Rz:{}}},children:(0,S.jsx)(o.kC,{direction:"column",height:E.cI,justifyContent:"start",width:"100%",children:(0,S.jsx)(o.xu,{alignItems:"center",column:12,display:"flex",flex:"grow",paddingX:4,children:this.renderHeaderContent()})})})]})}}function J(e){let t=(0,m.ZP)(),n=(0,i.k6)(),s=(0,i.TH)(),o=(0,z.p)(),a=(0,L.WQ)(),l=(0,g.B)(),{checkExperiment:c}=(0,f.F)(),{userAccountsRetrieved:d}=(0,A.N)(),u=(0,y.Z)(),{enabled:_}=(0,r.Z)(),p=(0,C.tB)();return c("social_experience_holdout_2025_h1"),c("ce_project_habit_holdout_2025_h1"),c("inclusive_holdout_2025"),(0,h.Ow)(1000109),(0,S.jsx)(X,{...e,...p,headerButtonContext:o,headerShadowContext:a,history:n,i18n:t,isVerticalNavEnabled:_,location:s,requestContext:l,showPersonalBoutique:e.viewer.show_personal_boutique??!1,trackInteraction:u,userAccountsRetrieved:d})}},811666:function(e,t,n){n.d(t,{Z:()=>j});var s=n(667294),i=n(883119),o=n(171419),a=n(521367),r=n(583875),l=n(306902),c=n(138596),d=n(192336),u=n(680391),h=n(774838),_=n(649540),m=n(902123),p=n(462867),x=n(380108),f=n(386385),g=n(206349),y=n(785893);let b="circle";function A({children:e,show:t,text:n,idealDirection:s,zIndex:o}){return t?(0,y.jsx)(i.u,{accessibilityLabel:"",idealDirection:s,text:n,zIndex:o||new i.H3([new i.Ry(f.fe)]),children:e}):e}function j({isAdsSite:e=!1,isAnalyticsSite:t=!1,isTrendsSite:n=!1,isSelected:f,noNavigation:j=!1,idealTooltipDirection:w,tooltipZIndex:P,onClick:v}){let C=(0,p.Z)(),S=(0,h.B)(),T=(0,c.ZP)(),{active:I,hovered:k,onBlur:B,onFocus:z,onMouseDown:Z,onMouseUp:E,onMouseEnter:O,onMouseLeave:R}=(0,m.Z)(),{fullName:L,username:D,imageMediumUrl:U}=C.isAuth?C:{fullName:"",username:"",imageMediumUrl:""},N=C.isAuth?C?.avatar_color_index:void 0,{isInBiznuxFullscreen:H}=(0,x.Z)(),M=(0,s.useRef)(null),F=(0,_.Z)({isAdsSite:e,isAnalyticsSite:t,isTrendsSite:n,path:`/${D}/`,requestContext:S}),W=(0,u.Z)({href:F,onHistoryChange:d.Z}),{enabled:Y}=(0,o.Z)(),$=(0,l.Z)()?g.D5:g.dv;return H||j?(0,y.jsx)(i.xu,{"data-test-id":"header-profile",height:48,rounding:"circle",width:48,children:(0,y.jsx)(i.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,y.jsx)(i.xu,{alignItems:"center",display:"flex",height:30,justifyContent:"center",rounding:"circle",width:30,children:(0,y.jsx)(r.qE,{color:N,name:L,size:"xs",src:U})})})}):(0,y.jsxs)(i.xu,{"data-test-id":"header-profile",children:[(0,y.jsx)(a.N,{anchors:{3014:M.current},idealDirection:w,onAnchorTouch:"complete",placementId:1000109,scrollToDismiss:!0}),(0,y.jsx)(A,{idealDirection:w,show:![e,t,n].some(Boolean),text:T._('Your profile', 'navbar.avatarButton.tooltip', 'Tooltip text for button leading to user\'s profile'),zIndex:P,children:(0,y.jsx)(i.Tg,{href:F,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{v?.(),t(),W({event:e})},rounding:Y?$:b,tapStyle:Y?g.xp:void 0,children:(0,y.jsx)(i.xu,{ref:M,color:k&&!Y?"secondary":void 0,dangerouslySetInlineStyle:Y?{__style:{backgroundColor:k?g.bT:void 0}}:void 0,height:48,onBlur:B,onFocus:z,onMouseDown:Z,onMouseEnter:O,onMouseLeave:R,onMouseUp:E,rounding:Y?$:b,width:48,children:(0,y.jsx)(i.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,y.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{...I||f?{border:"2px solid #111111"}:{}}},display:"flex",height:Y?38:30,justifyContent:"center",rounding:"circle",width:Y?38:30,children:(0,y.jsx)(r.qE,{color:N,name:L,size:Y?"sm":"xs",src:U})})})})})})]})}},939986:function(e,t,n){n.d(t,{Z:()=>f});var s=n(667294),i=n(883119),o=n(59111),a=n(380108),r=n(228612),l=n(785893);function c(e,t,n){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:s+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let d="SavePin",u={__style:{left:"50%",marginLeft:-125}},h={__style:{animationName:`${d}_AnimateIn, ${d}_CircleAnimateOut`,animationDuration:"0.3s, 0.25s",animationDelay:"0.5s, 1.3s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",backgroundColor:"rgba(255, 255, 255, 0.6)"}},_={__style:{animationName:`${d}_AnimateIn, ${d}_AnimateOut`,animationDuration:"0.3s, 0.35s",animationDelay:"0.5s, 1.55s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out",border:"4px solid white"}},m={__style:{animationName:`${d}_NavButtonAnimation`,animationDuration:"0.8s",animationDelay:"1.65s",animationFillMode:"forwards",animatitionTimingFunction:"ease-out"}},p=()=>`
@keyframes ${d}_AnimateIn {
  from {
    transform: scale(0.0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1.0);
  }
}
@keyframes ${d}_CircleAnimateOut {
  from {
    transform: scale(1.0);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}
@keyframes ${d}_AnimateOut {
  from {
    transform: translateY(0) scale(1.0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px) scale(0.0);
    opacity: 0;
  }
}
@keyframes ${d}_NavButtonAnimation {
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1.0);
  }
}
`;class x extends s.Component{constructor(...e){super(...e),c(this,"state",{imageLoaded:!1}),c(this,"handleAnimationCompletion",()=>{let{animationEnded:e}=this.props;this.setState({imageLoaded:!1},()=>{e()})}),c(this,"handleImageLoad",()=>{this.setState({imageLoaded:!0})}),c(this,"loadImage",()=>{let e=new Image;e.onload=this.handleImageLoad,e.src=this.imageSrc()}),c(this,"imageSrc",()=>{let{images:e={}}=this.props.lastRepin||{};return e["236x"]?.url??""}),c(this,"shouldRenderAnimation",()=>{let{lastRepin:e,startAnimation:t}=this.props,{imageLoaded:n}=this.state;return!!(e&&n&&t)})}componentDidUpdate(e,t){let{lastRepin:n={}}=e,{imageLoaded:s}=t,{lastRepin:i,startAnimation:o}=this.props,{imageLoaded:a}=this.state;i&&i.id!==n?.id&&this.loadImage(),o&&a&&a!==s&&(this.dismissTimeout=setTimeout(this.handleAnimationCompletion,2500))}componentWillUnmount(){this.dismissTimeout&&clearTimeout(this.dismissTimeout)}render(){let{children:e}=this.props;return this.shouldRenderAnimation()?(0,l.jsxs)(i.kC,{alignItems:"stretch",flex:"grow",justifyContent:"center",children:[(0,l.jsx)(o.Z,{unsafeCSS:p()}),(0,l.jsxs)(i.xu,{position:"relative",children:[(0,l.jsxs)(i.xu,{dangerouslySetInlineStyle:u,height:250,position:"absolute",top:!0,width:250,children:[(0,l.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:h,display:"flex",height:"100%",justifyContent:"center",opacity:0,rounding:"circle",width:"100%"}),(0,l.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:_,height:100,left:!0,margin:"auto",opacity:0,position:"absolute",right:!0,rounding:3,top:!0,width:100,children:(0,l.jsx)(i.zd,{height:"100%",rounding:2,wash:!0,width:"100%",children:(0,l.jsx)(i.Ee,{alt:"pin-image",fit:"cover",naturalHeight:1,naturalWidth:1,src:this.imageSrc()})})})]}),(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:m,children:e})]})]}):e}}function f(e){let{repinPinId:t,repinStartAnimation:n,updateHeaderState:s}=(0,a.Z)(),i=(0,r.S6)(),o=t?i(t):null;return(0,l.jsx)(x,{...e,animationEnded:()=>s({type:"hideRepinAnimation"}),lastRepin:o,startAnimation:n})}},791830:function(e,t,n){n.d(t,{Z:()=>l});var s=n(667294),i=n(462867),o=n(113116),a=n(959646),r=n(785893);function l({onNewsClick:e,onConversationsClick:t}){let n=(0,i.Z)();return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(o.Z,{onClick:e}),n.isAuth&&n.should_show_messaging&&(0,r.jsx)(a.Z,{onClick:t})]})}},920343:function(e,t,n){n.d(t,{Z:()=>i,x:()=>o});var s=n(92481);function i({user:e,viewer:t}){return!!(t.isAuth&&e?.username===t.username)}function o({user:e,viewer:t,location:n}){let{id:i}=e||{},{id:o,isAuth:a}=t,{pathname:r=""}=n||{};return!!(a&&o===i&&r.includes(`/${s.qV}/`))}},92481:function(e,t,n){n.d(t,{Lz:()=>o,qV:()=>s,sz:()=>i});let s="_profile",i={enabled_with_unorganized_feed:"enabled_with_unorganized_feed",enabled_with_log_fix:"enabled_with_log_fix",enabled_old:"enabled_old"},o=506467},171039:function(e,t,n){n.d(t,{Z:()=>o});var s=n(616550),i=n(661376);function o(e){let{username:t}=(0,s.UO)();return(0,i.Z)(e||null==t?null:{name:"UserResource",options:{username:t,field_set_key:"profile"}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/AuthDesktopHeader-7860982b49a6d2c1.mjs.map