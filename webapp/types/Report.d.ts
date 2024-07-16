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
