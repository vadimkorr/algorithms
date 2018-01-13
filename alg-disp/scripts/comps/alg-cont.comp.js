define([
    "alg-item.comp",
    "db.stub"
], function(algItem) {
	return {
		get: function(algsColl) {
            return algsColl.map((val, ind) => { 
                return ` 
                    <tr>
                        <td>${algItem.get(val, ind + 1)}</td>
                    </tr>
                `
            }).join('') 
        }
	}
});