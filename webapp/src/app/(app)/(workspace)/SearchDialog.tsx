import { BiSearch } from 'react-icons/bi'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/ui/dialog'

export default function SearchDialog() {
	return (
		<Dialog>
			<DialogTrigger className='button-sm mr-2'>
				<BiSearch className='size-4' />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>This feature is not available yet!</DialogTitle>
					<DialogDescription>
						We are working to bring this feature to you soon. Expect this
						feature by August 2024.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
