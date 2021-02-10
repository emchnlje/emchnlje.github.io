let isMobile = function()
{
	return window.navigator.userAgent.toLowerCase().includes("mobi");
};

let chooseStyleFile = function(styleFileName)
{
	let styleFile = "/assets/styles/" + styleFileName;

	if(isMobile())
	{
		styleFile += "_mobile";
	}

	styleFile += ".css";
	
	let link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", styleFile);
	document.getElementsByTagName("head")[0].appendChild(link);
};