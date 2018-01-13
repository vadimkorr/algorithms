requirejs.config({
    "paths": {
        "code.comp": "./comps/code.comp",
        "line.comp": "./comps/line.comp",
        "alg-cont.comp": "./comps/alg-cont.comp",
        "alg-item.comp": "./comps/alg-item.comp",
        
        "db.stub": "./db",
        "jquery": "https://code.jquery.com/jquery-3.2.1.min"
    },
    "shim": {
    }
});

requirejs(["index"]);