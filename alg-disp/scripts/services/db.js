define(["db"], function(db) {
	return {
		getAll: function() {
            let dbInst = openDB('http://localhost:8081/algs/algorithms.json');
            db.get(function(err, data){
                console.log(data.length);
            });
        }
	}
});
