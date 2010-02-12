/*! Copyright (c) 2010 Burin Asavesna (http://helloburin.com) and Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 1.0
 */

jQuery.fn.each_slice = function(num, fn) {
    for ( var i=0,l=this.length,count=0,slice=[]; i<=l; i++ ) {
        if ( count >= num ) {
            fn.apply( jQuery( slice ) );
            count=0, slice=[];
        }
        slice.push( this[i] );
        count++;
    }
    return this;
};