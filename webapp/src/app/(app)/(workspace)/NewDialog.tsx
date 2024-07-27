import { BiEdit } from 'react-icons/bi'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/ui/dialog'

export default function NewDialog() {
	// TODO: OPEN THE SEARCH DIALOG WITH PREFIX = "New "
	return (
		<Dialog>
			<DialogTrigger className='button-sm'>
				<BiEdit className='size-4' />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>New...</DialogTitle>
					<DialogDescription>
						Chronicle / Blog Post / Guest Post / Social Post / Web Story / Media
						/ Author / Category / Tag
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
