(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["64369"],{55658:function(e,i,a){a.r(i),a.d(i,{default:()=>l});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BoardCard_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"blockedByMe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVerifiedMerchant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,concreteType:"VerifiedIdentity",kind:"LinkedField",name:"verifiedIdentity",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verified",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};n.hash="0628142b7a59444fec6969159289921a";let l=n},437566:function(e,i,a){var n,l,r,t;a.r(i),a.d(i,{default:()=>o});let s={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BoardRep_board",selections:[{alias:"boardAccess",args:null,kind:"ScalarField",name:"access",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"archivedByMeAt",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"boardOrderModifiedAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"collaboratingUsers",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"UserCollaboratingUsersConnection",kind:"LinkedField",name:"connection",plural:!1,selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[n,l={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"UserCollaboratingUsersConnectionContainer",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CoverPin",kind:"LinkedField",name:"coverPin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"crop",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"size",storageKey:null}],storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"followedByMe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasCustomCover",storageKey:null},{alias:"images170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!0,selections:t=[r={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"170x")'},{alias:"images236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!0,selections:t,storageKey:'images(spec:"236x")'},{alias:null,args:null,kind:"ScalarField",name:"isCollaborative",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isTemporarilyDisabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"owner",plural:!1,selections:[l,{args:null,kind:"FragmentSpread",name:"BoardCard_user"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pinThumbnailUrls",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sectionCount",storageKey:null},{alias:null,args:null,concreteType:"SensitivityScreen",kind:"LinkedField",name:"sensitivityScreen",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reason",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"showWarning",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldShowBoardCollaborators",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},r,{args:null,kind:"FragmentSpread",name:"useGetCoverPhoto_board"}],type:"Board",abstractKey:null};s.hash="08dc7cb76d98b372522a348ab8acda69";let o=s},200745:function(e,i,a){var n;a.r(i),a.d(i,{default:()=>r});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetCoverPhoto_board",selections:[{alias:"coverImageSpec_222x",args:[{kind:"Literal",name:"spec",value:"222x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'coverImages(spec:"222x")'},{alias:"coverImageSpec_400x300",args:[{kind:"Literal",name:"spec",value:"400x300"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:n,storageKey:'coverImages(spec:"400x300")'},{alias:"coverImageSpec_216x146",args:[{kind:"Literal",name:"spec",value:"216x146"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:n,storageKey:'coverImages(spec:"216x146")'},{alias:null,args:null,concreteType:"CoverPin",kind:"LinkedField",name:"coverPin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageCoverHdUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageCoverUrl",storageKey:null},{alias:"image_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!0,selections:n,storageKey:'images(spec:"170x")'}],type:"Board",abstractKey:null};l.hash="0dcc0ff703cdf1ad8ec8403c4f7daba9";let r=l},271255:function(e,i,a){a.d(i,{Z:()=>r});var n=a(883119),l=a(785893);let r=({text:e})=>(0,l.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},"data-test-id":"line-clamp-wrapper",fit:!0,overflow:"hidden",children:e})},79271:function(e,i,a){a.d(i,{F:()=>v,Z:()=>x});var n=a(667294),l=a(763538),r=a(343669),t=a(230201),s=a(589172),o=a(609252),d=a(774838),c=a(739405),u=a(281213),p=a(2061),m=a(767415),g=a(177433);let y={ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},OneBar:{impressionType:"oneBarImpressions",idType:"onebarIdStr",eventType:9993},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpression",idType:"idStr",eventType:170},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},AdsPreview:{impressionType:"AdsPreviewImpression",idType:"AdsPreviewStr",eventType:8600},BoardMoreIdeasRep:{impressionType:"boardMoreIdeasFeedUpsellImpressions",idType:"boardIdStr",eventType:10054},Notification:{impressionType:"notificationDetailImpressions",idType:"newsIdStr",eventType:4111},NotificationFeed:{impressionType:"notificationFeedImpressions",idType:"newsIdStr",eventType:4110},EditorialBoard:{impressionType:"curatedBoardImpressions",idType:"boardIdStr",eventType:3700},VaseAnnotation:{impressionType:"vaseAnnotationImpressions",idType:"vaseAnnotationUrlStr",eventType:16444}};function x({carouselData:e,closeupImpressionType:i,closeupNavigationType:a,componentType:x,contextLogData:v,clientTrackingParams:_,duploShouldTrackPinEvents:h,elementType:f,impressionAuxFields:w,inImpressionExp:b,impressionType:I,impressionsFramework:T,isPaused:P,loggingId:k,objectIdStr:S,slotIndex:j,trackCarousel:C,viewData:A,viewParameter:D,viewType:F,isPromoted:z,storyPinProductEventData:B}){let{logContextEvent:Z}=(0,t.v)(),{logMrcVideoAdEventOnPlay:K}=(0,u.r)(),{userAgent:{browserName:L}}=(0,d.B)(),{logStat:U}=(0,p.Yg)(),E=T||o.Z,M=(0,n.useRef)(null),N=(0,n.useRef)(e=>{});N.current=n=>{let t=y[I],s=t.idType,o={clientTrackingParams:_,endTime:n.endTime,[s]:k,slotIndex:j,time:n.startTime,renderDuration:n.endTime-n.startTime,type:i,...w,forcedExit:"removed"===n.forcedExit?0:void 0};if("Pin"===I){let e=[],i=n.visibleEvents||new Map,a=n.hiddenEvents||new Map;if([1,50,80,2].forEach(n=>{i.has(n)&&e.push({type:n,time:1e6*(i.get(n)||0),visible:!0}),a.has(n)&&e.push({type:n,time:1e6*(a.get(n)||0),visible:!1})}),o={...o,pinCellWidth:n.pinCellWidth||0,pinCellHeight:n.pinCellHeight||0,windowWidth:window?.innerWidth,windowHeight:window?.innerHeight,visibleEvents:e.sort((e,i)=>e.time-i.time)},(0,r.i7)(L)&&w&&w.isPromoted){let{attributionSourceId:e,isPromoted:i,link:a,campaignId:n,araAuxData:r,advertiserId:t,domain:s,adDestinationUrl:o}=w;(0,l.YS)(I,i??null,e??null,a??null,n??null,r??null,t??null,s??null,o??null)}}let d={component:x,object_id_str:S,view_type:F,view_data:A||{},view_parameter:D};if(C)e&&C&&Z({event_type:7352,event_data:{pinCarouselSlotImpressions:[{...o,..."canonical"===e.type?{carouselDataId:Number(e.carouselId??0),slotIndex:e.index,carouselSlotId:e.carouselSlots?.[e.index??0]&&Number(e.carouselSlots[e.index??0].slotId)}:{carouselDataId:Number(e.id??0),carouselSlotId:e.carousel_slots?.[e.index??0]&&Number(e.carousel_slots[e.index??0].id),slotIndex:e.index}}]},...d,aux_data:{...v}});else{let e={clientTrackingParams:_,event_type:t.eventType,...d,element:f,event_data:{[t.impressionType]:"Story"===I?o:[o],...B?{storyPinProductEventData:B}:{}},aux_data:{closeup_navigation_type:a,...v}};Z(e),K(e)}h&&U("log_pin_impression")};let{expName:H,group:O}=(0,s.Z)({skipActivation:!0}),R=(0,c.ZP)(),V=(0,g.MM)(),{isAuthenticated:W}=(0,d.B)(),G=(0,n.useCallback)(()=>{let e=!1;try{let{current:i}=M;if(i instanceof HTMLElement&&(!z||i.getElementsByTagName("img").length>0)){let a=E.start(i);a.onExitViewport(N.current).setDebugId(k||"unknown"),h&&a.onEnterViewport(()=>{U("log_pin_impression_track_enter_viewport")}),e=!0,O&&(0,m.nP)("webapp.masonry.trackImpression",{tags:{callsite:"app_packages_useImpressionTracker",deviceType:R,experimentName:H,group:O,handlerId:V,isAuthenticated:W,slotIndex:j??"unknown"}})}}catch{window.console.error('Can only track impressions for type "HTMLElement"')}h&&U("log_pin_impression_track",{didStartTracking:e})},[M.current]);return(0,n.useEffect)(()=>(b&&!E.inExperiment&&E.setExperimentStatus(!0),P||G(),()=>{let{current:e}=M;e instanceof HTMLElement&&(!z||e.getElementsByTagName("img").length>0)&&E.stop(e)}),[P,G]),M}let v=({children:e,...i})=>e({impressionTrackerRef:x(i)})},327638:function(e,i,a){a.d(i,{U:()=>r,Z:()=>t});var n=a(883119),l=a(785893);let r=", ";function t(){return(0,l.jsx)(n.xu,{display:"visuallyHidden",children:r})}},69841:function(e,i,a){a.d(i,{Cy:()=>d,HE:()=>c,Mv:()=>r,Y4:()=>u,dL:()=>l,fS:()=>p,fv:()=>s,lu:()=>m,qS:()=>o,u:()=>g,uc:()=>t});var n=a(79271);let l=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,duploShouldTrackPinEvents:e.duploShouldTrackPinEvents,loggingId:e.loggingId,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Pin",isPaused:e.isPaused,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},r=e=>{let i=(0,n.Z)({impressionAuxFields:{newsType:e.newsType,displayMode:e.displayMode,newsIndex:e.newsIndex||0,tapItemIdStr:e.tapItemIdStr},contextLogData:e.auxData||{},impressionType:"Notification",loggingId:e.notificationId,viewType:107,viewParameter:3082});return e.children({impressionTrackerRef:i})},t=e=>{let i=(0,n.Z)({impressionAuxFields:{newsType:e.newsType},contextLogData:e.auxData||{},impressionType:"NotificationFeed",loggingId:e.notificationId,viewType:107,viewParameter:3082});return e.children({impressionTrackerRef:i})},s=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},contextLogData:e.auxData||{},componentType:e.component,isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,impressionType:"Article"});return e.children({impressionTrackerRef:i})},o=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Story",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},d=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0,contextLogData:e.auxData||{},componentType:e.component,impressionType:"User",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},c=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Interest",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},u=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"TodayArticle",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},p=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Board",loggingId:e.loggingId,viewType:e.viewType||1,viewParameter:e.viewParameter,viewData:e.viewData});return e.children({impressionTrackerRef:i})},m=e=>{let i=(0,n.Z)({carouselData:e.carouselData,impressionType:"Pin",loggingId:e.loggingId,slotIndex:e.slotIndex??0,trackCarousel:!0,viewParameter:e.viewParameter||72,viewType:e.viewType||1,isPaused:e.isPaused,contextLogData:e.contextLogData,componentType:e.component,impressionAuxFields:e.impressionAuxFields});return e.children({impressionTrackerRef:i})},g=e=>{let i=(0,n.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"EditorialBoard",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})}},143677:function(e,i,a){a.d(i,{Z:()=>D});var n,l=a(667294);a(167912);var r=a(616550),t=a(883119),s=a(104999),o=a(583875),d=a(907022),c=a(995514),u=a(138596),p=a(720459),m=a(216975),g=a(774838),y=a(865043),x=a(327638),v=a(380938),_=a(739405),h=a(462867),f=a(474885),w=a(914253),b=a(785893);function I({boardId:e}){let i=(0,u.ZP)(),a=(0,h.Z)(),n=(0,_.HG)(),r=(0,w.gC)()(e),s=function(e){let i=(0,h.Z)(),a=(0,_.HG)()&&i&&i.isAuth,n=(0,w.gC)()(e);return(0,l.useMemo)(()=>{if(!n)return[];let{owner:e,collaborating_users:l}=n,[r,t,s]=[new Set,new Set,new Set];for(let a of[...e?[e]:[],...l||[]])a.id===e?.id?r.add(a):a.id===i.id?t.add(a):s.add(a);return[...r,...t,...s].map(e=>({name:(a?e.full_name:e.username)??"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":e.image_medium_url??"",color:e?.avatar_color_index??void 0}))},[a,n,i])}(e);if(!r)return null;let{collaborator_count:o=0}=r,d=n&&a&&a.isAuth?23:16,c=d/3*((s.length>2?3:s.length)*2+1),p=o>=s.length?o-s.length:0,m=[...s,...Array(p=p>99?100:p).fill({name:"",src:""})];return(0,b.jsx)(t.xu,{height:d,marginStart:2,minWidth:c,width:c,children:(0,b.jsx)(t.HE,{accessibilityLabel:x.U+(i._('Board has collaborators', 'boardCard.avatarGroup.collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:m})})}var T=a(464094),P=a(748261),k=a(667389),S=a(338065),j=a(69841);let C=void 0!==n?n:n=a(55658),A=({children:e,isOwnProfile:i})=>(0,_.HG)()?(0,b.jsx)(t.X6,{accessibilityLevel:2,lineClamp:i?1:2,size:i?"400":"300",children:e}):(0,b.jsx)(t.xv,{lineClamp:i?1:2,size:i?void 0:"200",weight:"bold",children:e});function D({archivedDate:e,boardId:i,boardUrl:a,canEdit:n,numberOfCollaborators:w,containerBackgroundColor:D,coverPhoto:F,display:z,followedByMe:B,fullSizeDrawer:Z,sensitivityScreen:K,handleInviteResponse:L,hideMeta:U,hideSecretBoardIcon:E=!1,id:M,invite:N,imagesLego:H=[],isActive:O,isAttributionHeightUnfixed:R,isAuthenticated:V,isBoardInviteAccepted:W,isCollaborative:G,isCollaborator:Y,isCollaboratorsAttributionVisible:q=!1,isFeaturedBoardsModule:X=!1,isNoBoardTitleStyle:$=!1,isOwner:J,isProtected:Q,isSecret:ee,isTemporarilyDisabled:ei,lastModifiedDate:ea,layout:en,locale:el,metaMarginTop:er=0,metaPaddingY:et=2,name:es,numCols:eo,onEditClick:ed,onFollow:ec,onUnfollow:eu,pinCount:ep=0,sectionCount:em,slotIndex:eg,showFollowButton:ey,showMask:ex,showBoardCollaborators:ev=!0,trackingParams:e_,userKey:eh,viewObjectIdStr:ef,viewParameter:ew,viewType:eb}){let eI=(0,u.ZP)(),eT=(0,c.Z)(),eP=(0,p.Z)(),ek=(0,s.Z)(),eS=(0,_.HG)(),{isRTL:ej}=(0,g.B)(),eC=(0,h.Z)(),{username:eA}=eC,eD=eC.isAuth?eC?.avatar_color_index:void 0,{username:eF}=(0,r.UO)(),ez=(0,d.Z)(C,eh),eB=eS&&V,eZ="square"===en?T.M0:T.z9,eK="responsive"!==z&&(eB||X)?eZ:"100%",eL=eA&&eA===eF,eU=eF&&T.sN.includes(eF.toLowerCase()),eE=e=>{V||(0,y.NC)("press_follow_board"),ec&&ec(e)},eM=e=>{V||(0,y.NC)("press_unfollow_board"),eu&&eu(e)},eN=H.map(e=>({url:e.url,name:es})),eH=!!ez&&!n&&ey,eO=ez?.isVerifiedMerchant,eR=ez?.verifiedIdentity?.verified,eV=eO||eR,eW=G&&!X;eL||(eW&&=eF&&!eU);let eG=!J&&!Y&&!!K?.show_warning,eY={board_id:M,reason:K?.reason},eq=!eL&&(!eF||q||eU),eX=eB?void 0:T.s0+(eH?T.o2:0);eL||(eX=eS?void 0:(eq?T.AC:T.Y_)+(eH?T.o2:0));let e$=eH&&"responsive"!==z?`max(calc(25vh + 10px), calc(210px + ${eL?0:5}vh))`:"100%";return(0,l.useEffect)(()=>{eG&&ek({event_type:13,component:13861,view_type:215,aux_data:eY})},[]),(0,b.jsx)(j.fS,{auxData:{board_id:M,board_pin_count:ep??0,board_section_count:em??0,grid_index:eg||0},impressionData:{imageURL:F?.url},loggingId:M,slotIndex:eg||0,trackingParams:e_,viewData:{view_object_id_str:ef},viewParameter:ew,viewType:eb,children:({impressionTrackerRef:r})=>(0,b.jsxs)(t.xu,{ref:r,"data-test-id":`boardCard-${es}`,height:e&&!eS?185:e$,position:"relative",width:eK,children:[(0,b.jsx)(t.zd,{rounding:4,wash:ex,children:(0,b.jsx)(P.Z,{canEdit:n,containerBackgroundColor:D,coverPhoto:F,fullSize:Z,hideSecretBoardIcon:E,images:eN,isActive:O,isProtected:Q,isSecret:ee,isTemporarilyDisabled:ei,layout:en,onEditClick:ed,renderAsImage:!0,showSensitivityScreen:eG})}),!U&&(0,b.jsx)(l.Fragment,{children:N&&!ei?(0,b.jsxs)(l.Fragment,{children:[(0,b.jsxs)(t.xu,{alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",padding:2,children:[(0,b.jsxs)(t.xu,{width:"100%",children:[(0,b.jsx)(t.rU,{href:a??"",children:(0,b.jsx)(t.xu,{marginBottom:1,marginTop:0,children:(0,b.jsx)(A,{isOwnProfile:eL,children:es})})}),W?(0,b.jsx)(t.xv,{lineClamp:1,size:"200",children:eI._('You\u2019ve joined', 'boardRep.invite.invitationAcceptedText', 'Text shown after accepting collaborator board invitations')}):(0,b.jsx)(t.xv,{size:"200",children:function(e,i){let{full_name:a,username:n}=e,l=(0,b.jsx)(t.rU,{display:"inlineBlock",href:`/${n}`,underline:"hover",children:a},"linkToUser");return(0,m.nk)(i._('{{ linkToUser }} invited you to join this board', 'boardRep.invite.invitationText', 'Indicating that another user invited the viewer to this board'),{linkToUser:l})}(N.invited_by_user,eI)})]}),ev&&(0,b.jsx)(I,{boardId:i})]}),W?(0,b.jsx)(t.xu,{direction:"row",display:"flex",paddingX:2,children:(0,b.jsx)(t.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,b.jsx)(t.ZP,{fullWidth:!0,href:a??"",size:"lg",text:eI._('See board', 'boardRep.invite.seeBoardButton', 'Button text to see board after accepting collaborator invite')})})}):(0,b.jsxs)(t.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,b.jsx)(t.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,b.jsx)(t.zx,{fullWidth:!0,onClick:()=>{L?.(!1)},size:"lg",text:eI._('Decline', 'boardRep.invite.declineButton', 'Button text to decline board collaborator invite or request')})}),(0,b.jsx)(t.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,b.jsx)(t.zx,{color:"red",fullWidth:!0,onClick:()=>{L?.(!0)},size:"lg",text:eI._('Accept', 'boardRep.invite.acceptButton', 'Button text to accept board collaborator invite or request')})})]})]}):(0,b.jsxs)(t.xu,{height:R?void 0:eX,marginTop:eB?er:1,paddingX:2,paddingY:eB?et:0,children:[$&&(0,b.jsxs)(t.xu,{alignContent:"center",alignItems:"center",display:"flex",justifyContent:"start",marginEnd:2,paddingY:1,children:[(0,b.jsx)(t.xu,{marginEnd:2,marginStart:1,children:(0,b.jsx)(o.qE,{accessibilityLabel:eI._('Avatar', 'User`s Avatar', 'User`s Avatar'),color:eD,name:ez?.fullName??"",size:"xs",src:ez?.imageMediumUrl??""})}),(0,b.jsxs)(t.kC,{direction:"column",children:[(0,b.jsxs)(t.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",children:[(0,b.jsxs)(t.xv,{inline:!0,lineClamp:1,size:"100",children:[(0,b.jsx)(t.xv,{inline:!0,size:"100",children:eI._('By', 'boardRep.boardCard.userAttribution', 'User attribution for a board rep')})," ",(0,b.jsx)(t.xv,{inline:!0,size:"100",weight:"bold",children:ez?.fullName})]}),eV&&(0,b.jsx)(t.xu,{marginStart:1,children:(0,b.jsx)(k.Z,{isVerifiedIdentity:!!eR,isVerifiedMerchant:!!eO,size:"xs"})})]}),(0,b.jsxs)(t.xu,{alignItems:eS?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,b.jsxs)(t.xv,{color:"subtle",lineClamp:1,size:"100",children:[(0,b.jsx)(x.Z,{}),(0,m.nk)(eI.ngettext('{{ count }} Pin', '{{ count }} Pins', ep, 'profile.ProfilePage.board.BoardCard.pinsCount', 'Show how many Pins there are in the board card. count:number of Pins'),{count:eP(el,ep,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),(0,b.jsx)(t.xv,{color:"subtle",size:"100",children:(0,b.jsx)(v.Z,{ariaHidden:!0,size:"100"})}),!e&&(0,b.jsx)(t.xu,{display:"inlineBlock",marginEnd:ej?2:0,children:(0,b.jsxs)(t.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,b.jsx)(x.Z,{}),eT(ea,!0)]})})]})]})]}),!$&&(0,b.jsxs)(l.Fragment,{children:[(0,b.jsxs)(t.xu,{alignItems:eL?"center":"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,b.jsx)(A,{isOwnProfile:eL,children:es}),eW&&!ei&&ev&&(0,b.jsx)(I,{boardId:i})]}),eq&&(0,b.jsx)(t.xu,{marginTop:1,children:(0,b.jsx)(f.Z,{numberOfCollaborators:w,ownerFullName:ez?.fullName??"",ownerIsVerifiedIdentity:!!eR,ownerIsVerifiedMerchant:!!eO,showBoardCollaborators:ev})}),(0,b.jsxs)(t.xu,{alignItems:eS?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,b.jsx)(t.kC.Item,{flex:"none",children:(0,b.jsxs)(t.xv,{color:eL?void 0:"subtle",lineClamp:1,size:"100",children:[(0,b.jsx)(x.Z,{}),(0,m.nk)(eI.ngettext('{{ count }} Pin', '{{ count }} Pins', ep, 'profile.ProfilePage.board.BoardCard.pinsCount', 'Show how many Pins there are in the board card. count:number of Pins'),{count:eP(el,ep,{shortform:!0,shortform_maximum_fraction_digits:1})})]})}),!!em&&(0,b.jsxs)(t.xv,{color:eL?void 0:"subtle",lineClamp:1,size:"100",children:[(0,b.jsx)(v.Z,{ariaHidden:!0,size:"100"}),(0,b.jsx)(x.Z,{}),(0,m.nk)(eI.ngettext('{{ count }} section', '{{ count }} sections', em, 'profile.ProfilePage.board.BoardCard.sectionsCount', 'Show how many sections there are in the board card. count:number of sections'),{count:em})]}),!eL&&(0,b.jsx)(t.xv,{color:"subtle",size:"100",children:(0,b.jsx)(v.Z,{ariaHidden:!0,size:"100"})}),(0,b.jsx)(t.kC.Item,{flex:em?"none":"grow",children:(0,b.jsx)(t.xu,{display:eB?"flex":"inlineBlock",marginEnd:ej?2:0,marginStart:eL?2:void 0,children:(0,b.jsxs)(t.xv,{color:"subtle",lineClamp:1,size:"100",children:[(0,b.jsx)(x.Z,{}),eT(ea,!0)]})})})]}),e&&!eS&&(0,b.jsxs)(t.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,b.jsx)(x.Z,{}),eI._('Archived', 'profile.ProfilePage.BoardCard.ArchivedText', 'label for archived boards')]}),eH&&(0,b.jsx)(t.xu,{column:2===eo?12:void 0,flex:"none",marginTop:2===eo?3:void 0,children:(0,b.jsx)(S.Z,{disabled:!!ez?.blockedByMe,followEventType:26,id:M,isFollowed:B,onFollow:eE,onUnfollow:eM,pinKey:null,shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:ew,viewType:eb})})]})]})})]})})}},662911:function(e,i,a){a.r(i),a.d(i,{BOARD_REP_PADDING_DWEB:()=>w,BOARD_REP_PADDING_MWEB:()=>b,default:()=>I});var n,l=a(581722);a(167912);var r=a(883119),t=a(104999),s=a(907022),o=a(774838),d=a(865043),c=a(736328),u=a(739405),p=a(462867),m=a(143677),g=a(422913),y=a(214451),x=a(701572),v=a(914253),_=a(785893);let h=void 0!==n?n:n=a(437566),f=["thumbnail","imageOnly"],w=2,b=3;function I({boardKey:e,component:i,containerBackgroundColor:a,display:n="responsive",forwardedRef:I,fullSize:T,hideSecretBoardIcon:P=!1,isAttributionHeightUnfixed:k=!1,isCollaboratorsAttributionVisible:S=!1,isFeaturedBoardsModule:j=!1,isNoBoardTitleStyle:C=!1,noPaddings:A=!1,showFollowButton:D=!0,showMask:F=!1,showPinCount:z=!0,slotIndex:B,type:Z,viewObjectIdStr:K,viewParameter:L,viewType:U,isBoardPreviewEnabled:E}){let M=(0,p.Z)(),N=M&&M.isAuth,H=(0,l.I0)(),{locale:O}=(0,o.B)(),R=(0,c.Z)(),V=(0,s.Z)(h,e),W=(0,v.gC)(),G=V?.entityId?W(V.entityId):null,Y=(0,g.Z)(V),q=(0,t.Z)(),X=(0,u.HG)();if(!V)return null;let{owner:$,shouldShowBoardCollaborators:J}=V,Q=M.isAuth?M.id:"",ee=$?.entityId===Q,ei=V.collaboratingUsers?.__typename==="UserCollaboratingUsersConnectionContainer"?V.collaboratingUsers.connection?.edges:[],ea=ei?.some(e=>e?.node?.entityId===Q)||ee;if("secret"===V.privacy&&!ea)return null;let en="grid"===Z||"thumbnail"===Z?2:4,el=E&&V.images236x?.[0]?.url?V.images236x?.[0]?.url:Y(en),er=V.coverPin??G?.cover_pin,et=(er?.crop&&er?.size&&{x:er?.crop[0]??0,y:er?.crop[1]??0,width:er?.size[0]??0,height:er?.size[0]??0})??{x:0,y:0,width:0,height:0},es={isCustom:!E&&(V.hasCustomCover||void 0),url:el,position:et},eo=V.pinThumbnailUrls??G?.pin_thumbnail_urls,ed=(0,y.Jx)(V.images170x,eo?.filter(e=>null!==e)??void 0,el).map(({url:e})=>({name:(0,y.po)(e),url:e})),ec=[44,49].includes(L)||[3,442,625].includes(U),eu=()=>49===L?ee?3106:3107:L,ep=V?.sensitivityScreen?{reason:V.sensitivityScreen?.reason,showWarning:V.sensitivityScreen?.showWarning}:void 0,em=V.pinCount??G?.pin_count??0,eg=V.sectionCount??G?.section_count??0,ey=(0,_.jsx)(m.Z,{archivedDate:V.archivedByMeAt??G?.archived_by_me_at,boardId:V.entityId,canEdit:!!V.boardAccess&&V.boardAccess.includes("write"),containerBackgroundColor:a,coverPhoto:es,display:n,followedByMe:!!(G?.followed_by_me??V.followedByMe),fullSizeDrawer:T,hideMeta:f.includes(Z),hideSecretBoardIcon:P,id:V.entityId,imagesLego:ed,isAttributionHeightUnfixed:k,isAuthenticated:N,isCollaborative:!!V.isCollaborative,isCollaborator:!!ea,isCollaboratorsAttributionVisible:S,isFeaturedBoardsModule:j,isNoBoardTitleStyle:C,isOwner:ee,isProtected:"protected"===V.privacy||G?.privacy==="protected",isSecret:"secret"===V.privacy||G?.privacy==="secret",isTemporarilyDisabled:!!V.isTemporarilyDisabled||!!G?.is_temporarily_disabled,lastModifiedDate:V.boardOrderModifiedAt??G?.board_order_modified_at??"",layout:X?"square":void 0,locale:O,metaMarginTop:2,metaPaddingY:0,name:V.name??(G?.name||""),numberOfCollaborators:ei?.length??0,numCols:en,onFollow:e=>H((0,x.Z)(e,q)),onUnfollow:e=>H((0,x.f)(e,q)),pinCount:z&&em?em:void 0,sectionCount:eg??0,sensitivityScreen:ep,showBoardCollaborators:!1!==J,showFollowButton:D,showMask:F,slotIndex:B,userKey:V?.owner,viewerId:Q,viewObjectIdStr:K,viewParameter:L,viewType:U}),ex=V.url||G?.url;return!f.includes(Z)&&ex?(0,_.jsx)(r.Tg,{href:N?ex:ex.toLowerCase(),onTap:()=>{ec&&q({aux_data:{board_id:V.entityId,board_pin_count:em,board_section_count:eg},component:i??1,element:36,event_type:102,view_parameter:eu(),view_data:{view_object_id_str:K}}),N||((0,d.NC)("click_go_to_board"),R({action:"click",item:"board-card"}))},rounding:2,tapStyle:"compress",children:(0,_.jsx)(r.xu,{ref:I,paddingY:A?0:X?w:b,children:ey})}):ey}},474885:function(e,i,a){a.d(i,{Z:()=>c});var n=a(883119),l=a(271255),r=a(138596),t=a(720459),s=a(774838),o=a(785893);let d={xs:{icon:12,text:"100",height:15},sm:{icon:16,text:"200",height:17},md:{icon:20,text:"300",height:18},lg:{icon:24,text:"400",height:23}};function c({ownerFullName:e,ownerIsVerifiedMerchant:i,ownerIsVerifiedIdentity:a,numberOfCollaborators:c,size:u="xs",showBoardCollaborators:p=!0}){let m=(0,r.ZP)(),{locale:g}=(0,s.B)(),y=(0,t.Z)();return(0,o.jsxs)(n.kC,{alignItems:"center",justifyContent:"start",maxHeight:d[u].height,children:[(0,o.jsx)(n.xv,{lineClamp:1,size:d[u].text,children:(0,o.jsx)(l.Z,{text:e})}),(i||a)&&(0,o.jsx)(n.xu,{flex:"none",marginStart:1,children:i?(0,o.jsx)(n.JO,{accessibilityLabel:m._('Merchant verification badge icon', 'merchantVerification.badge.icon', 'Badge indicating that a merchant is verified'),color:"shopping",icon:"workflow-status-ok",size:d[u].icon}):(0,o.jsx)(n.JO,{accessibilityLabel:m._('Identity verification badge icon', 'identityVerification.badge.icon', 'Badge indicating that user is verified'),color:"error",icon:"check-circle",size:d[u].icon})}),p&&c>0&&(0,o.jsx)(n.xu,{flex:"none",marginStart:1,children:(0,o.jsx)(n.xv,{size:d[u].text,children:"+ "+y(g,c,{shortform:!0,shortform_maximum_fraction_digits:0})})})]})}},422913:function(e,i,a){a.d(i,{Z:()=>d}),a(167912);var n,l=a(907022),r=a(739405),t=a(462867),s=a(914253);let o=void 0!==n?n:n=a(200745),d=e=>{let i=(0,r.HG)(),a=(0,t.Z)(),n=a?.isAuth??!1,d=(0,l.Z)(o,e),c=(0,s.gC)(),u=d?.entityId?c(d.entityId):null,p=d?.imageCoverUrl??u?.image_cover_url,m=d?.coverPin?.imageUrl??u?.cover_pin?.image_url,g=d?.coverImageSpec_216x146??u?.cover_images?.spec_216x146,y=d?.coverImageSpec_222x??u?.cover_images?.spec_222x,x=d?.coverImageSpec_400x300??u?.cover_images?.spec_400x300,v=d?.image_170x??u?.images?.spec_170x;return e=>{if(i&&n)return m??y?.url??(v||[])[0]?.url??"";let a=d?.imageCoverHdUrl||d?.imageCoverUrl;if(a)return a;let l=x?.url??y?.url??g?.url??"";return e&&e>2&&l?l:p||""}}},214451:function(e,i,a){a.d(i,{Bw:()=>s,Jx:()=>t,po:()=>n});let n=(e="")=>(e??"").substring((e??"").lastIndexOf("/")+1),l=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),r=e=>{if(!e)return()=>!0;let i=n(e);return e=>"string"==typeof e?n(e)!==i:n(e.url??"")!==i},t=(e,i,a)=>e?e.filter(r(a)):i?i.filter(r(a)).map(l):[],s=e=>(e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})??{x:0,y:0,width:0,height:0}},701572:function(e,i,a){a.d(i,{Z:()=>r,f:()=>t});var n=a(681698),l=a(160587);function r(e,i){return async a=>{a((0,l.md)(e,!0));try{await (0,n.Z)({url:`/v3/boards/${e}/follow/`,method:"PUT"}),i({event_type:26,object_id_str:e})}catch(i){a((0,l.md)(e,!1))}}}function t(e,i){return async a=>{a((0,l.md)(e,!1));try{await (0,n.Z)({url:`/v3/boards/${e}/follow/`,method:"DELETE"}),i({event_type:27,object_id_str:e})}catch(i){a((0,l.md)(e,!0))}}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/64369-36de31735a5f6a67.mjs.map