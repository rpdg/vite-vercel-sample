export type MenuItem = {
	id: string;
	icon: string;
	path: string;
	label: string;
};

export type MenuHash = {
	[key: string]: MenuItem;
};

export const menuTable: MenuHash = {
	Home: { id: 'Home', path: '/home', icon: 'icon-home', label: 'menu.home' },
	ShowFloor: { id: 'ShowFloor', path: '/showFloor', icon: 'icon-online-tracking', label: 'menu.showFloor' },
	Recommend: { id: 'Recommend', path: '/recommend', icon: 'icon-jiaobiao', label: 'menu.recommend' },
	Presentation: { id: 'Presentation', path: '/presentation', icon: 'icon-training', label: 'menu.presentation' },
	Partners: { id: 'Partners', path: '/partners', icon: 'icon-trust', label: 'menu.partners' },
	Events: { id: 'Events', path: '/events', icon: 'icon-calculator', label: 'menu.events' },
	MyCalendar: { id: 'MyCalendar', path: '/calendar', icon: 'icon-calendar', label: 'menu.calendar' },
	News: { id: 'News', path: '/news', icon: 'icon-namecard', label: 'menu.news' },
};

export const menus = Object.values(menuTable);