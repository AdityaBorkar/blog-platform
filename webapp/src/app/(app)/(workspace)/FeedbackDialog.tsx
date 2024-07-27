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
			<DialogTrigger className='button-sm mx-8 my-4'>
				I would love to hear your feedback. Click here to give a quick feedback.
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>I would love to hear you!</DialogTitle>
					<DialogDescription>
						<div>How do you feel?</div>
						<div>Select Emoji</div>

						<div>Enter your feedback</div>
						<div>Enter feedback...</div>

						<div>Submit</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
