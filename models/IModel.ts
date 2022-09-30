interface IModel {
	insert(): Promise<any>;
	select(): Promise<any>;
	update(field: string, newValue: any): Promise<any>;
	remove(): Promise<any>;
	itExists(): Promise<boolean>;
}

export default IModel;
