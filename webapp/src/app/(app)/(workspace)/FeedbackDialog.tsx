import Button from '@/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/ui/dialog'

export default function FeedbackDialog() {
	return (
		<Dialog>
			<DialogTrigger className='button-sm mx-8 my-4 cursor-pointer text-pretty text-left text-xs'>
				[Preview Version]
				<br /> Click here to drop a quick feedback. I would love to hear from
				you!
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>I would love to hear you!</DialogTitle>
					<DialogDescription className='pt-4'>
						<label className='mb-2 mt-4 font-medium text-primary'>
							How do you feel?
						</label>
						<div className='flex flex-row justify-between gap-4'>
							Emmoji List
						</div>

						<label className='mb-2 mt-4 font-medium text-primary'>
							Write your thoughts:
						</label>
						<textarea
							placeholder='Write feedback / bug / feature request / anything you want to share with us.'
							className='min-h-36 w-full rounded-md border border-border p-2'
						/>

						<label className='mb-2 mt-4 font-medium text-primary'>
							Your Social Handle (optional)
						</label>
						<input
							placeholder='Twitter / LinkedIn / Email'
							className='w-full rounded-md border border-border p-2'
						/>

						<Button scheme='secondary' className='mt-4'>
							Submit Feedback
						</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
