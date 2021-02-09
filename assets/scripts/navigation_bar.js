let setActiveNavbarItem = function()
{
	let elementsTemp = document.getElementsByName("navbar-name");
	if(elementsTemp.length > 0)
	{
		let navbarItemName = elementsTemp[0].getAttribute("content");
		
		let navItems = document.getElementsByClassName("nav-link");
		
		for(let i = 0; i < navItems.length; i++)
		{
			if(navItems[i].innerHTML == navbarItemName)
			{
				navItems[i].classList.add("active");
				navItems[i].classList.add("force-underline");
			}
		}
	}
};

setActiveNavbarItem();