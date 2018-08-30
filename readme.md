<h2>Install</h2>
<code>npm install chatfuel</code>
<br>
<h2>Usage</h2>
<code>const chatfuel = require('chatfuel')</code>
<hr>
<h3>Send Text</h3>
<code>messages.push(chatfuel.sendText({ text: 'Hello' }))</code> <br>
<code>messages.push(chatfuel.sendText({ text: 'Welcome to chatfuel' }))</code>

<h3>Send Image</h3>
<p>Messenger supports JPG, PNG and GIF images. If you are having issues with GIF rendering, please try to reduce the file size.</p>
<code>const photo = 'http://ngaoduky.com/assets/img/ngaoduky.jpg'</code> <br>
<code>messages.push(chatfuel.sendImage({url:photo}))</code>

<h3>Send Video</h3>
<p>Messenger supports MP4 videos, which are up to 25MB in size.</p>
<code>const video = 'http://ngaoduky.com/assets/img/ngaoduky.mp4'</code> <br>
<code>messages.push(chatfuel.sendVideo({url:video}))</code>

<h3>Send Audio</h3>
<p>Messenger supports MP3, OGG, WAV audios, which are up to 25MB in size</p>
<code>const audio = 'http://ngaoduky.com/assets/img/ngaoduky.mp3'</code> <br>
<code>messages.push(chatfuel.sendAudio({url:audio}))</code>

<h3>Send File</h3>
<p>Files are no larger than 25 MB</p>
<code>const file = 'http://ngaoduky.com/assets/img/ngaoduky.pdf'</code> <br>
<code>messages.push(chatfuel.sendAudio({url:file}))</code>

<h3>Send Galleries</h3>
<code>const title = 'Title of element'</code> <br>
<code>const image_url = 'http://ngaoduky.com/assets/img/ngaoduky.jpg'</code> <br>
<code>const subtitle = 'Size: M'</code> <br>
<code>buttons.push(chatfuel.createButtonToURL({ url: 'https://www.facebook.com/', title: 'Go to facebook' }))</code> <br>
<code>const element = chatfuel.createElement({ title, image_url, subtitle, buttons })</code> <br>
<code>const elements = []</code> <br>
<code>elements.push(element)</code> <br>
<code>elements.push(element)</code> <br>
<code>messages.push(chatfuel.sendGalleries({ elements }))</code>

<h3>Send List</h3>
<code>const title = 'Title of element'</code> <br>
<code>const image_url = 'http://ngaoduky.com/assets/img/ngaoduky.jpg'</code> <br>
<code>const subtitle = 'Size: M'</code> <br>
<code>buttons.push(chatfuel.createButtonToURL({ url: 'https://www.facebook.com/', title: 'Go to facebook' }))</code> <br>
<code>const element = chatfuel.createElement({ title, image_url, subtitle, buttons })</code> <br>
<code>const elements = []</code> <br>
<code>elements.push(element)</code> <br>
<code>elements.push(element)</code> <br>
<code>messages.push(chatfuel.sendLists({ elements }))</code>

<h3>Create Button To Block</h3>
<code>const title = 'SELECT ITEM'</code> <br>
<code>const block_names = ['SELECT_ITEM']</code> <br>
<code>const set_attributes = { item_id: '3' }</code> <br>
<code>const buttons = []</code><br> 
<code>buttons.push(chatfuel.createButtonToBlock({ title, block_names, set_attributes }))</code>    
    
<h3>Create Button To URL</h3>
<code>const title = 'View My Blog'</code> <br>
<code>const url = 'http://ngaoduky.com/'</code> <br>
<code>const buttons = []</code> <br>
<code>buttons.push(chatfuel.createButtonToURL({ url, title }))</code>

<h3>Create Call Button</h3>
<code>const title = 'Call me maybe'</code> <br>
<code>const phone_number = '0989999999'</code> <br>
<code>buttons.push(chatfuel.createCallButton({ phone_number, title }))</code>

<h3>Create Postback Button</h3>
<code>const title = 'Back'</code> <br>
<code>const url = 'https://rockets.chatfuel.com/api/welcome'</code> <br>
<code>buttons.push(chatfuel.createPostBackButton({ url, title }))</code>

<h3>Create Quick Reply Button</h3>
<code>const title = 'Show menu'</code> <br>
<code>const block_names = ['MENU']</code> <br>
<code>buttons.push(chatfuel.createQuickReplyButton({ title, block_names }))</code>

<h3>Create Share Button</h3>
<code>buttons.push(chatfuel.createShareButton())</code>