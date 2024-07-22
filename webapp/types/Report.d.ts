type ReportType = {
	id: string
	name: string
	description: string
} & (
	| {
			render: 'table'
			table: any[]
	  }
	| {
			render: 'grid'
			grid: any[]
	  }
)

// namespace Report {
// 	type Table = {
// 		id: string
// 		name: string
// 		description: string
// 		columns: string[]
// 		rows: any[]
// 	}

// 	type Grid = {
// 		id: string
// 		name: string
// 		description: string
// 		columns: string[]
// 		rows: any[]
// 	}
// }
