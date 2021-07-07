## Galleria setup
- Create a Flickr account - [Flickr.com](https://www.flickr.com/)
- Upload pictures to an album
- Generate an API key in your account settings area
- Add the API key to the /galleria/plugins/flickr/galleria.flickr.js file <br/>
    <code>this.api_key = api_key || 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';</code>
- Create a custom.js file for the album number that you wish to display
    * See example custom-meat-science.js
    * Add the album ID from the flickr URL <br/>
    <code>flickr: 'set:72157719184125316',</code>
- Edit the illinois_framework_theme.libraries.yml file to include the new js file
- Add the new library to the illinois_framework_them.info.yml file
- Call the files in a twig template using the galleria base library and custom js files
  * {{ attach_library('illinois_framework_theme/galleria') }}
  * {{ attach_library('illinois_framework_theme/galleria--custom') }}

