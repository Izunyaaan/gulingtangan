/*================================================
Loading screen logic
===================================================*/
let checkDocumentReady = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(checkDocumentReady);
        // document ready
        //hide loading screen
        document.querySelector('#loader').style.visibility = 'hidden';
    }
}, 100);

/*==================================================
End of loading screen logic
==================================================== */

