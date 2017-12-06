var jsonBeautifier = {


	beautify: (container, obj) => {
		var text = container[0].textContent;

		text = text.split('<').join('&lt;');
		text = text.split('>').join('&gt;');

		var replacementText = text;


		// ============ errors ==============
		// missing value after key:
		replacementText = replacementText.replace(/([^{|}|,|:|\[]*):(\s*}|,|])/g, '<span class="error">$1</span>:$2');

		replacementText = replacementText.replace(/([A-z|0-9]*)\s*:\s*([A-z|0-9]*)\s+([A-z|0-9]*)/g, '$1:<span class="error">$2 </span>$3');

		// ========= colorization ===========
		// colorize key:value
		replacementText = replacementText.replace(/([^{|}|,|:|\[]*):([^{|}|,|:|\[]*)/g, '<span class="key">$1</span>:<span class="val">$2</span>');
		
		// {}
		replacementText = replacementText.replace(/{/g, '{<br><div class="node-wrapper">');
		replacementText = replacementText.replace(/}/g, '<br></div><span>}</span>');
		
		// []

		replacementText = replacementText.replace(/\[/g, '[<br><div class="node-wrapper">');
		replacementText = replacementText.replace(/\]/g, '<br></div><span>]</span>');


		// comma
		replacementText = replacementText.replace(/,/g, ',<br>');	
		//replacementText = replacementText.replace(/:\s*("|')([^"|'|}|\]]*)("|')/g, ',: $1 $2 $3');	

		





		//replacementText = replacementText.replace(/\[/g, '[<br>');		

		//replacementText = replacementText.split('<').join('&lt;');
		//replacementText = replacementText.split('>').join('&gt;');		

		container.html(replacementText);
		//console.log(txt);
	}
}