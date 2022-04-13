import type { ColumnData } from '$lib/types/Column';
import { DataCell } from '$lib/models/DataCell';
import { DataRow } from '$lib/models/DataRow';

export const getDataRows = <Item extends object>(
	data: Item[],
	dataColumns: ColumnData<Item>[]
): DataRow<Item>[] => {
	return data.map(
		(item) =>
			new DataRow({
				cells: dataColumns.map(
					(column) =>
						new DataCell({
							key: column.key,
							value: item[column.key],
							label: column.cell,
						})
				),
			})
	);
};
