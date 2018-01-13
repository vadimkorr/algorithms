define("index",
[
    "alg-cont.comp",
    "db.stub",
    "jquery"
], 
function(algCont, dbStub, db) {

    let reader = {
        json: "",
        init: (json) => {
            this.json = json
        },
        getAll: () => {
            return $.get(this.json).then((data) => {
                return JSON.parse(data)
            });
        },
        where: (doc, is) => {

        }
    }

    $(document).ready(() => {
        (async () => {
            reader.init('http://localhost:8081/algs/algorithms.json')
            $('#main-cont').append(algCont.get(await reader.getAll()));
            $('code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        })()       
    });
});