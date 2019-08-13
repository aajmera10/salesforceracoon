({ 
    thirdpartyClientCaller : function(cmp, event, helper) { 
    	var xmlHttp = new XMLHttpRequest();
    	var url = cmp.find("url").get("v.value");
    	console.log(url);
    	xmlHttp.open( "GET", url, true );
	    xmlHttp.setRequestHeader('Content-Type', 'application/json');
		xmlHttp.responseType = 'text';
		xmlHttp.onload = function () {
    	    console.log("onload");
        	console.log(xmlHttp.readyState);
        	console.log(xmlHttp.status);
    		if (xmlHttp.readyState === 4) {
    	    	if (xmlHttp.status === 200) {
	            	console.log(xmlHttp.response);
            		console.log(xmlHttp.responseText);
		        }
	    	}
		};
	    xmlHttp.send( null );
	    console.log("Request sent");
    }
})