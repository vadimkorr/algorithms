define(["code.comp"], function(codeComp) {
	return {
		get: function(alg, ind) {
            return `
                <table class="table table-sm borderless">
                    <tbody>
                        <tr>
                            <td>${ind}. ${alg.title}</td>
                        </tr>
                        <tr>
                            <td>${alg.task}</td>
                        </tr>
                        <tr>
                            <td>Complexity: ${alg.complexity}</td>
                        </tr>
                        <tr>
                            <td>See more: ${alg.links.map(val => `<a href='${val.link}'>${val.title}</a>`)}</td>
                        </tr>
                        <tr>
                            <td>Tags: ${alg.tags.map(val => val).join(', ')}</td>
                        </tr>
                        <tr>
                            <td>${codeComp.get(alg.solution)}</td>
                        </tr>
                    </tbody>
                </table>
            `
        }
	}
});