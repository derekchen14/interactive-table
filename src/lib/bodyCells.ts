import { derived } from 'svelte/store';
import type { BodyRow } from './bodyRows';
import type { DataColumn } from './columns';
import { TableComponent } from './tableComponent';
import type { Label } from './types/Label';
import type { AnyPlugins } from './types/TablePlugin';
import type { RenderConfig } from './render';

export interface DataBodyCellInit<Item, Plugins extends AnyPlugins = AnyPlugins, Value = unknown> {
	row: BodyRow<Item, Plugins>;
	column: DataColumn<Item, Plugins>;
	label?: Label<Item, Value>;
	value: Value;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-interface
export interface DataBodyCellAttributes<Item, Plugins extends AnyPlugins = AnyPlugins> {}

export class DataBodyCell<
	Item,
	Plugins extends AnyPlugins = AnyPlugins,
	Value = unknown
> extends TableComponent<Item, Plugins, 'tbody.tr.td'> {
	row: BodyRow<Item, Plugins>;
	column: DataColumn<Item, Plugins>;
	label?: Label<Item, Value>;
	value: Value;
	constructor({ row, column, label, value }: DataBodyCellInit<Item, Plugins, Value>) {
		super({ id: column.id });
		this.row = row;
		this.column = column;
		this.label = label;
		this.value = value;
	}

	render(): RenderConfig {
		if (this.label === undefined) {
			return `${this.value}`;
		}
		return this.label(this.value);
	}

	attrs() {
		return derived([], () => {
			return {};
		});
	}
}
