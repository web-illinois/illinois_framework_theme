## The organization of the SCSS files are as follows
> The style.css file will show you the order of imported stylesheets but it's important to mention that the SCSS files
> follow the [BEM](http://getbem.com/) and [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodologies
* The order of the SCSS files from most general to most specific
    * themes/contrib/bootstrap4/dist/bootstrap/4.5.3/scss files are included first as the base bootstrap theme [bootstrap documents](https://getbootstrap.com/docs/4.5)
    * themes/contrib/illinois_framework_theme/scss
        * /web-components (campus level)
        * /illinois-framework/functions/*
        * /illinois-framework/variables
        * /illinois-framework/mixins/*
        * /bootstrap-overrides/*
        * /illinois-framework/
            * _regions* (layout)
            * _components* (3rd party/campus components)
            * _blocks* (blocks)
            * _node.CONTENT_TYPE (content types)
            * _paragraphs* (paragraphs)
        * /utilities/* (Utility Classes / Overrides / !important styles)
## Bootstrap Overrides
> To do a bootstrap override find the rules you would like to change and copy them
> from the scss file that they are found in and either create the same file name
> or place the rules in the file name that matches in the bootstrap/4.5.3/scss files
> comment where the rules was found in the bootstrap file for easy reference

<code>
 // overrides _reboot.scss line 182
 a {
   color: $link-color;
   text-decoration: $link-decoration;
   background-color: transparent; // Remove the gray background on active links in IE 10.

   @include hover() {
     color: $link-hover-color;
     text-decoration: $link-hover-decoration;
   }
 }
</code>
