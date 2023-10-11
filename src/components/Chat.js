import React, { useEffect } from 'react'
 
const Chat = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Send a message",
        "botConversationDescription": "Ask me questions",
        "botId": "e1d0cc8d-2711-4811-8568-5a741dc6bfe5",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "e1d0cc8d-2711-4811-8568-5a741dc6bfe5",
        "lazySocket": true,
        "botName": "WrenDev",
        "phoneNumber": "+63 906 006 3919",
        "emailAddress": "macayanwren@gmail.com",
        "website": "macayanwren.vercel.app",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/123f1e52-753c-4580-80a0-ef471e9b3021/v46437/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true
    });
    }
  }, [])
 
  return (<div id="webchat" />)
}
 
export default Chat
