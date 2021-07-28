export enum Roles {
	buyer = 'buyer',
	exhibition = 'exhibition',
	visitor = 'visitor',
	ITB = 'ITB',
	BuyerCallCenter = 'BuyerCallCenter',
	ExhibitorCallCenter = 'ExhibitorCallCenter',
}

export type RoleName = keyof typeof Roles;


// 
export enum BuyerType {
	Fully = 'Fully',
	Partial = 'Partial',
	Free = 'Free'
}