define([], function() {
	return {
		get: function(line, ind) {
            return `
                <tr>
                    <td class="line-ind hljs" data-pseudo-content="${ind + 1}."><code></code></td>
                    <td><code>${line}</code></td>
                </tr>
            `
        },
        empty: function() {
            return `
                <tr>
                    <td class="line-ind hljs"><code> </code></td>
                    <td><code> </code></td>
                </tr>
            `
        }
	}
});
