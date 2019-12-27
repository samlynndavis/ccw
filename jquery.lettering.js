/* Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
var lettering = lettering || {};
		
(function(){
	
	var opts = {
		"chars": ["char",""],
		"words": ["word"," "],
		"lines": ["line","<br />"]
	};
	
	lettering.splitter = function (e,t) { // Element, type
		var type = opts[t || "chars"], splitBy = type[1], d = '', c = 0, arr, a, m;
			
		arr = e.childNodes;
		for(var i = 0,len = arr.length; i<len; i++) {
			if(arr[i].nodeType === 3 && type[0] === "line") {
				c++;
				m = c%2;
				d += ["<span class='",type[0]+c,((m!==0)?" even":" odd"),"'>",arr[i].nodeValue,"</span>",splitBy].join("");
			} else if(arr[i].nodeType === 3 && type[0] !== "line") {
				a = arr[i].data.split(splitBy);
			
				for(var k = 0,len2 = a.length; k<len2; k++) {
					c++;
					m = c%2;
					d += ["<span class='",type[0]+c,((m!==0)?" even":" odd"),"'>",a[k],"</span>",splitBy].join("");
				}
			}
		}
		c = 0;
		
		e.innerHTML = d;
	};
	
})();