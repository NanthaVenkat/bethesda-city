;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="a7ff7ba500e50aa6015c350c75cc3c26";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["aAazri3EQn8A"]={appId:"U7qJvtD8fdSv",scope:{}};;CloudflareApps.installs["aAazri3EQn8A"].options={"backgroundColor":"#191919","backgroundOpacity":0.86,"buttonBorderColor":"#000000","buttonColor":"#892680","buttonHoverColor":"#ffffff","buttonHoverTextColor":"#000000","buttonlocation":"right","buttonText":"Got It","buttonTextColor":"#ffffff","buttonTextSize":{"unit":"px","value":15},"callbackFunction":"","cookieLifetime":true,"location":"bottom","message":"We use cookies to personalize content, tailor your experience and help us improve our services. By navigating our site, you agree to allow us to use cookies, in accordance with our","popuplocation":{"method":"prepend","selector":"body"},"popupPositioning":"fixed","splitTextAndButton":true,"textColor":"#ffffff","textLink":"Privacy Policy","textLinkColor":"#497cc9","textLinkHoverColor":"#559bbd","textLinkNewTab":true,"textLinkUrl":"https://www.sterlingholidays.com/privacy-policy","textSize":{"unit":"px","value":14}};;CloudflareApps.installs["aAazri3EQn8A"].selectors={"popuplocation.selector":"body"};;CloudflareApps.installs["5R7wzfouzBsG"]={appId:"XnGtvBXQ6bMw",scope:{}};;CloudflareApps.installs["5R7wzfouzBsG"].options={"bannerUrl":"","borderRadius":11,"buttonText":"OK","colorScheme":"#d1ecf1,#0c5460,#17a2b8,#ffffff","customBackgroundColor":"#e2e3e5","customBackgroundGradientLevel":0.5,"customButtonBackgroundColor":"#6c757d","customButtonTextColor":"#ffffff","customDismissalPeriodGroup":{"minutes":1,"multiplier":"1440"},"customHTMLMessage":"A \u003cspan style=\"color: red;\"\u003eFancy\u003c/span\u003e \u003cb\u003eHTML\u003c/b\u003e \u003ca href=\"#\"\u003eMessage\u003c/a\u003e","customPlainMessage":"Our payment gateway is being upgraded from 6 to 8 am on 18th Nov. During this time, online payments for holiday bookings and outstanding dues will be temporarily unavailable. Thank you for your patience. - Sterling Holidays","customRichMessageGroup":{"maxImageWidth":100,"message":"\u003cp\u003eA \u003cstrong\u003eRich-Text\u003c/strong\u003e Message\u003c/p\u003e"},"customStyles":"","customTextColor":"#383d41","dismissedUntilMinutes":"-1","displayMode":"banner","enabled":false,"fontSize":16,"horizontalMargin":0,"horizontalPadding":4,"location":{"method":"prepend","selector":"body"},"messageType":"customPlain","notDismissible":false,"pages":{"URLPatterns":["^www.sterlingholidays.com/?.*$"]},"verticalMargin":0,"verticalPadding":16};;CloudflareApps.installs["5R7wzfouzBsG"].URLPatterns=["^www.sterlingholidays.com/?$"];;CloudflareApps.installs["5R7wzfouzBsG"].selectors={"location.selector":"body"};;CloudflareApps.installs["5R7wzfouzBsG"].product={"id":"basic"};(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/npF7fzeYINbx174sKEHAARao5ss.js';document.head.appendChild(script);})();