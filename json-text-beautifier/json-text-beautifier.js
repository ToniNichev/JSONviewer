var jsonBeautifier = {


	beautify: (container, config) => {
		var text = container[0].textContent;

		text = text.split('<').join('&lt;');
		text = text.split('>').join('&gt;');

		var replacementText = text;



		// colorize value inside quotes"
		replacementText = replacementText.replace(/(["'])(.*?)(["'])/g, '$1<span class="val">$2</span>$3');	

		// ============ errors ==============

		// missing value after key:
		replacementText = replacementText.replace(/([^{|}|,|:|\[]*):(\s*}|,|])/g, '<span class="error">$1</span>:$2');

		replacementText = replacementText.replace(/([A-z|0-9]*)\s*:\s*([A-z|0-9]*)\s+([A-z|0-9]*)/g, '$1:<span class="error">$2 </span>$3');
		
		// ========= colorization ===========	
		// colorize key:value
		replacementText = replacementText.replace(/([^{|}|,|:|\[]*):([^{|}|,|:|\[]*)/g, '<span class="key">$1</span>:<span class="val">$2</span>');

		// ========== indentation ===========	

		// {}
		replacementText = replacementText.replace(/(?!\B["'][^"']*){(?![^"']*["']\B)/g, '{<br><div class="node-wrapper">');
		replacementText = replacementText.replace(/(?!\B["'][^"']*)}(?![^"']*["']\B)/g, '<br></div><span>}</span>');
		
		// []

		replacementText = replacementText.replace(/(?!\B["'][^"']*)\[(?![^"']*["']\B)/g, '[<br><div class="node-wrapper">');
		replacementText = replacementText.replace(/(?!\B["'][^"']*)\](?![^"']*["']\B)/g, '<br></div><span>]</span>');

		/*
		for(var c in config.openTags) {
			let tag = config.openTags[c];
			let re = new RegExp(`(?!\B["'][^"']*)${tag}(?![^"']*["']\B)`, 'g');
			replacementText = replacementText.replace(re,  tag.split('\\').join('') + '<br><div class="node-wrapper">');
		}


		for(var c in config.closeTags) {
			let tag = config.closeTags[c];
			//let re = new RegExp(`(?!\B["'][^"']*)${tag}(?![^"']*["']\B)`, 'g');

			let re = new RegExp('(?!\\B["\'][^"\']*)}(?![^"\']*["\']\\B)', 'g');
			//replacementText = replacementText.replace(re,  '<br></div><span>}</span>');
		}
	*/
			var r = '@'
			let re = new RegExp('one:', 'g');
			replacementText = replacementText.replace(re,  'ONE:!');	

		// matched comma outside quotes
		replacementText = replacementText.replace(/(?!\B["'][^"']*),(?![^"']*["']\B)/g, ',<br>');	

		container.html(replacementText);
	}
}