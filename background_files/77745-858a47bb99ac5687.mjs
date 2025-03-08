(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["77745"],{171419:function(e,t,a){a.d(t,{Z:()=>l});var r=a(616550),n=a(173874),o=a(774838),i=a(462867),d=a(169834);function l(){let e=(0,i.Z)(),{isRTL:t}=(0,o.B)(),a=(0,r.TH)();return{enabled:(0,d.Z)(a)&&!t&&e.isAuth&&!e.isPartner&&!(0,n.OK)(a)}}},264267:function(e,t,a){a.d(t,{pb:()=>h,lV:()=>A,nf:()=>f});var r=a(667294),n=a(581722),o=a(441143),i=a.n(o),d=a(27399),l=a(213491),s=a(681698),c=a(57887),_=a(360033),g=a(730056);let m={feature_map:Object.freeze({})},u=(e,t)=>{let a={...(0,g.Z)(e,t),...t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({}),...t.tags?{tags:t.tags}:Object.freeze({}),...t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({})};return(0,_.ZP)(e,a)?e:a},E=(e=m,t)=>{if("FETCH_COMPLETE"===t.type){let{payload:{resource:a}}=t,{data:r}=t.payload.response.resource_response;if("AggregatedCommentFeedResource"===a||"AggregatedCommentReplyFeedResource"===a||"DidItCommentsResource"===a){let t=(r||[]).reduce((t,a)=>(t[a.id]=u(e[a.id],a),t),{});return{...e,...t}}if("UnifiedCommentsResource"===a&&r&&r.length>0){let t=r.filter(e=>"aggregatedcomment"===e.type).reduce((t,a)=>(t[a.id]=u(e[a.id],a),t),{});return{...e,...t}}if("UnifiedCommentsPreviewResource"===a&&r&&r.length>0){let t=r[0].aggregated_comment,a=t?{[t.id]:u(e[t.id],t)}:{},n=r[0].creator_reply,o=n?{[n.id]:u(e[n.id],n)}:{};return{...e,...a,...o}}if("AggregatedCommentFeaturesResource"===a&&r&&Object.keys(r).length>0)return{...e,feature_map:r}}else if("AGGREGATED_COMMENT_CREATED"===t.type){let{payload:{aggregatedComment:a}}=t;return a.id?{...e,[a.id]:a}:e}else if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){let{payload:{aggregatedCommentId:a}}=t,r={...e};return delete r[a],r}else if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){let{payload:{userId:a}}=t;return Object.fromEntries(Object.entries(e).filter(e=>e[1].user?.id!==a))}else if("AGGREGATED_COMMENT_UPDATED"===t.type){let{payload:{data:a}}=t;return{...e,[a.id]:u(e[a.id],a)}}else if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){let{payload:{data:a}}=t,r=e[a.id],n=r.reaction_counts[1]||0,o={1:a.reaction_by_me?n+1:n-1},i={...r,reaction_by_me:a.reaction_by_me,reaction_counts:o};return{...e,[a.id]:i}}else if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){let{payload:{data:a}}=t,r=e[a.id],n=r.helpful_count||0,o=a.marked_helpful_by_me?n+1:n-1,i={...r,marked_helpful_by_me:a.marked_helpful_by_me,helpful_count:o};return{...e,[a.id]:i}}else if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){let{payload:{data:a}}=t,r={...e[a.aggregated_comment_id],highlighted_by_pin_owner:a.is_highlighted};return{...e,[a.aggregated_comment_id]:r}}else if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){let{payload:{data:{featureMap:a}}}=t;return{...e,feature_map:{...e.feature_map,...a}}}else if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){let{payload:{increment:a,id:r}}=t,n=e[r];if(!n)return e;let o={...n,comment_count:n.comment_count+a};return{...e,[r]:o}}else if("DELETE_COMMENT_MENTION"===t.type){let{payload:{aggregatedCommentId:a,tagged_users:r}}=t,n={...e[a],tagged_users:r};return{...e,[a]:n}}else if("GET_COMMENT_TRANSLATION"===t.type){let{payload:{aggregatedCommentId:a,translatedText:r}}=t,n={...e[a],translatedText:r};return{...e,[a]:n}}return e};var p=a(785893);let{Provider:y,useHook:T}=(0,l.Z)("AggregatedComments");function h({children:e}){let t=(0,n.v9)(({resources:e})=>e?.UnifiedCommentsResource),a=m;t&&Object.values(t).forEach(e=>{let t=e.data?.filter(e=>"aggregatedcomment"===e.type),r=t?.reduce((e,t)=>(e[t.id]=u(a[t.id],t),e),{});a={...a,...r}});let[o,i]=(0,r.useReducer)(E,a),d=e=>{i({type:"FETCH_COMPLETE",payload:e})};(0,c.Z8)("AggregatedCommentFeaturesResource",d),(0,c.my)("AggregatedCommentFeaturesResource",d),(0,c.Z8)("AggregatedCommentFeedResource",d),(0,c.my)("AggregatedCommentFeedResource",d),(0,c.Z8)("AggregatedCommentReplyFeedResource",d),(0,c.my)("AggregatedCommentReplyFeedResource",d),(0,c.Z8)("DidItCommentsResource",d),(0,c.my)("DidItCommentsResource",d),(0,c.Z8)("UnifiedCommentsPreviewResource",d),(0,c.my)("UnifiedCommentsPreviewResource",d),(0,c.Z8)("UnifiedCommentsResource",d),(0,c.my)("UnifiedCommentsResource",d);let l=(0,r.useMemo)(()=>({aggregatedComments:o,dispatch:i}),[o,i]);return(0,p.jsx)(y,{value:l,children:e})}function f(){let{dispatch:e}=T();return(0,r.useMemo)(()=>({aggregatedCommentCreated(t,a){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:a}})},aggregatedCommentDeleted:(t,a)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:a}})},aggregatedCommentHidden:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:async({commentId:e,reason:t,detailedReasons:a})=>(0,s.Z)({url:`/v3/aggregated_comments/${e}/flag/`,method:"PUT",data:{commentId:e,reason:t,detailedReasons:a}}),deleteCommentMention:async t=>{let{resource_response:a}=await (0,s.Z)({url:`/v3/aggregated_comments/${t}/mentions/`,method:"DELETE",data:{fields:["aggregatedcomment.id","aggregatedcomment.tagged_users"]}}),r=a.data??{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:r.id,tagged_users:r.tagged_users}})},translateAggregatedComment:async t=>{try{let{resource_response:a}=await (0,s.Z)({url:`/v3/aggregated_comments/${t}/translate/`,method:"GET"}),r=a.data??"";e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:r}})}catch(a){e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:""}})}},toggleAggregatedCommentHelpful:({aggregatedCommentId:t,isMarkedHelpfulByMe:a,orbacSubjectId:r})=>{(0,s.Z)({url:`/v3/helpful/1/${t}/`,method:a?"DELETE":"POST",data:r?{orbac_subject_id:r}:{}}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:t,marked_helpful_by_me:!a}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:t,pinId:a,isHighlighted:r})=>{i()(t,"Could not find comment"),i()(a,"Could not find Pin"),await (0,s.Z)({url:"/v3/aggregated_comments/pin/highlight/",method:"PUT",data:{aggregated_comment:t,pin:a,highlight:!r}}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:t,pin_id:a,is_highlighted:!r}}})},toggleAggregatedCommentLike:({aggregatedCommentId:t,isLikedByMe:a,orbacSubjectId:r})=>{(0,s.Z)({url:`/v3/aggregated_comments/${t}/react/`,method:a?"DELETE":"POST",data:{reaction_type:1,...r?{orbac_subject_id:r}:{}}}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:t,reaction_by_me:a?0:1}}})},updateAggregatedComment:async({commentId:t,force:a,orbacSubjectId:r,tags:n,text:o})=>{let{resource_response:i}=await d.Z.create("AggregatedCommentResource",{commentId:t,force:a,tags:n,text:o,...r?{orbacSubjectId:r}:{}}).callUpdate({showError:!1}),{tagged_users:l}=i.data??{};e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:t,tagged_users:l.map(e=>({...e})),tags:JSON.parse(n),text:o}}})},updateAggregatedCommentFeatures:async({userId:t,featureMap:a,passcode:r,userConfirmPasscode:n})=>{let o={userId:t,featureMap:a,passcode:r,user_confirm_skip_passcode:n};void 0===n&&(o.user_confirm_skip_passcode=!1);let{resource_response:i}=await d.Z.create("AggregatedCommentFeaturesResource",o).callUpdate({showError:!1});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:i.data??Object.freeze({})}}})},updateCommentCount:(t,a)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:a,id:t}})}}),[e])}function A(){let{aggregatedComments:e}=T();return e}},206349:function(e,t,a){a.d(t,{BO:()=>C,D5:()=>b,Dk:()=>M,GC:()=>R,GJ:()=>p,L7:()=>u,Lc:()=>c,Mh:()=>d,Qf:()=>s,Qq:()=>O,Xd:()=>N,bT:()=>h,bd:()=>T,df:()=>_,dg:()=>l,dv:()=>D,kl:()=>y,m6:()=>G,mT:()=>A,nQ:()=>L,pS:()=>f,qM:()=>w,xp:()=>m,yg:()=>g,zz:()=>E});var r=a(883119),n=a(876594),o=a(492601),i=a(386385);let d="right",l=d,s=72,c="VerticalNavContent",_=24,g="lg",m="compress",u=16,E=16,p=392,y=12,T=n.mJW,h=n.Kuk,f=new r.H3([i.NW]),A=new r.Ry(i.fe-3),C=new r.H3([f,o.kl]),G=new r.H3([f]),D=2,M=8,b=4,O=3,R=12,N=20,L=24,w={menuItemPadding:"12px",anchorOffset:"16px"}},452038:function(e,t,a){a.d(t,{Z:()=>o});var r=a(206349),n=a(785893);let o=()=>(0,n.jsx)("hr",{"data-gestalt-valid-html":"Divider",style:{display:"block",borderTop:`1px solid ${r.bd}`,margin:0,borderBottom:"none",borderLeft:"none",borderRight:"none"}})},169834:function(e,t,a){a.d(t,{Z:()=>n});var r=a(173874);function n(e){return!((0,r.Gl)(e)||(0,r.PY)(e)||(0,r.jC)(e)||(0,r.Xn)(e)||(0,r.b_)(e)||(0,r.oF)(e)||(0,r.dt)(e)||(0,r.x7)(e)||(0,r.cY)(e)||(0,r.bb)(e))}},500499:function(e,t,a){a.d(t,{Z:()=>u});var r=a(667294),n=a(883119),o=a(943152),i=a(289935),d=a(138596),l=a(613567),s=a(133546),c=a(36351),_=a(785893);let g=new n.Ry(3);function m({anchor:e,children:t,displayOptions:a,onFlyoutDismiss:r}){let o=(0,d.ZP)(),{closeupWithinMasonryEnabled:c}=(0,s.x4)(),{checkExperiment:m}=(0,l.F)(),u=m("sg_dweb_sharesheet_update").anyEnabled?i.b7:void 0;return a?.shownWithinMasonry||a?.shownWithinProfileHeader?(0,_.jsx)(n.mh,{zIndex:a.shownWithinProfileHeader||c&&a?.shownWithinMasonry?g:u,children:(0,_.jsx)(n.xu,{position:a.inModal?"absolute":void 0,top:!!a.inModal||void 0,zIndex:a.inModal?i.b7:void 0,children:(0,_.jsx)(n.J2,{_deprecatedShowCaret:a.showCaret,accessibilityLabel:o._('Share Menu', 'SendShareController.ShareMenu.accessibilityLabel', 'Accessbililty label for the share menu.'),anchor:e,forceDirection:a.forceDirection??!1,idealDirection:a.idealDirection??"down",onDismiss:()=>{r()},positionRelativeToAnchor:!1,size:"flexible",children:t})})}):(0,_.jsx)(n.J2,{_deprecatedShowCaret:a?.showCaret,accessibilityLabel:o._('Share Menu', 'SendShareController.ShareMenu.accessibilityLabel', 'Accessbililty label for the share menu.'),anchor:e,forceDirection:a?.forceDirection??!1,idealDirection:a?.idealDirection??"down",onDismiss:()=>{r()},size:"flexible",children:t})}function u({children:e,flyoutDisplayOptions:t,isFlyoutOpen:a,loggingOptions:i,onClick:d,onFlyoutDismiss:l,onToggleFlyout:g,sendObject:u}){let E=(0,r.useRef)(null),{clientTrackingParams:p}=(0,s.x4)(),y=(0,o.Z)();return(0,_.jsxs)(n.xu,{ref:E,dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},children:[(0,_.jsx)(n.xu,{children:e({handleSendShareFlyoutButtonClick:()=>{if(y){y();return}g()}})}),a&&(0,_.jsx)(n.xu,{position:"fixed",children:(0,_.jsx)(m,{anchor:E.current,displayOptions:t,onFlyoutDismiss:l,children:(0,_.jsx)(c.Z,{clientTrackingParams:p,component:i.component,element:i.element,onExternalSend:i.onExternalSend,onHide:()=>{d?.(),l()},sendType:u.type,sharedObject:{...u,type:"user"===u.type?"pinner":u.type},viewParameter:i.viewParameter,viewType:i.viewType})})})]})}},492601:function(e,t,a){a.d(t,{Bq:()=>g,CZ:()=>l,Db:()=>c,Lu:()=>d,kl:()=>o,rC:()=>n,sb:()=>s,t3:()=>i,to:()=>_});var r=a(883119);let n="full-height-inbox-panel",o=new r.Ry(700),i="defaultInboxView",d="newMessageView",l="newMessageSelectRecipientsView",s="invitesRequestsView",c="followInviteEducationView",_=64,g="conversationView"},36351:function(e,t,a){a.d(t,{Z:()=>c});var r=a(667294),n=a(883119),o=a(470205),i=a(138596),d=a(825605),l=a(785893);let s=(0,r.lazy)(()=>Promise.all([a.e("26134"),a.e("79339"),a.e("37408")]).then(a.bind(a,845222)));function c(e){let t=(0,i.ZP)();return(0,l.jsx)(o.Z,{name:"SafeSuspense_SendObjectLoader_SendObjectWrapper",children:(0,l.jsx)(d.Z,{fallback:(0,l.jsx)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",padding:2,width:"100%",children:(0,l.jsx)(n.$j,{accessibilityLabel:t._('Loading sharing', 'Accessibility label for loading sharing UI', 'Accessibility label for loading sharing UI'),show:!0})}),children:(0,l.jsx)(s,{...e})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/77745-858a47bb99ac5687.mjs.map