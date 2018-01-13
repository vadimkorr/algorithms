define("index",
[
   "alg-cont.comp",
   "db.stub",

   "jquery"
], 
function(algCont, db) {
    $(document).ready(() => {        
        $('#main-cont').append(algCont.get(db.algs))

        $('code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
});