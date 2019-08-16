// NOTE: This codepen uses https://codepen.io/box-platform/pen/xBRLmP for static assets and authentication. The token used is a readonly token accessing public data in a demo enterprise.

// How to use this CodePen:
// 1. Get started with Box Platform and create an application: https://developer.box.com/docs/getting-started-box-platform

// 2. Generate an access token using an SDK or use a developer token from https://app.box.com/developers/console/ -> your application -> configuration in the left sidebar -> Generate Developer Token. See https://developer.box.com/docs/special-scopes-for-box-ui-elements for various scopes you can use for the file picker.

// 3. Whitelist 'https://s.codepen.io' in your CORS allowed origins in https://app.box.com/developers/console/ -> your application -> configuration in the left sidebar -> CORS Domains

// 4. Choose a folder ID or use '0' for the root folder.

// 5. Enter your access token below, replacing the existing access token. Replace the folder ID with yours from step 4.

var contentExplorer = new Box.ContentExplorer();

// Show the content explorer
contentExplorer.show(configData.FOLDER_ID, configData.ACCESS_TOKEN, {
    container: '.container'
});