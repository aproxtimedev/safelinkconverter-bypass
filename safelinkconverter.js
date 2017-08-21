// ==UserScript==
// @name         Safelinkconverter v 1.0
// @namespace    https://www.facebook.com/aproxtime.dev
// @version      1.0
// @description  Auto Replace Link Safelinkconverter, so no need disable adblocker or wait some seconds, also auto redirect when open web link.safelinkconverter.com
// @author       Aproxtime Dev
// @match      *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var replaced = 0;
    var a = document.getElementsByTagName("a");
    for(var i=0; i < a.length; i++) {
      if(a[i].href.indexOf('https://link.safelinkconverter.com') !== -1) {
        var el = a[i];
              var url = new URL(a[i].href);
        var id = url.searchParams.get("id");
            var c = url.searchParams.get("c");
            var user = url.searchParams.get("user");
            el.setAttribute("href", "http://decrypt.safelinkconverter.com/index.php?id="+id+"&c="+c+"&user="+user+"&pop=0");
            replaced++;
      }
    }

    if (replaced !== 0) {
        alert('Replaced ' + replaced + ' links Safelinkconverter');
    }

    if (typeof p_name !== 'undefined') {
        if (p_name == "Download" && d_link !== "") {
            window.location=unescape(d_link);
        }
    }
})();
