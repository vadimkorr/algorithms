define(["line.comp"], function(line) {
	return {
		get: function(code) {
            return `
                <table class="table table-bordered code">
                    <colgroup>
                        <col style="width: 50px;">
                        <col>
                    </colgroup>
                    <tbody>
                        ${line.empty()}
                        ${code.map((ln, ind) => line.get(ln, ind)).join('')}
                        ${line.empty()}
                    </tbody>
                </table>
            `
        }
	}
});
