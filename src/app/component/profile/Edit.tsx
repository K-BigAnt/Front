import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Edit({ name }: { name: string }) {
	return (
		<Dialog>
			<DialogTrigger>
				<Button variant="outline" className="w-[100px]">
					프로필 수정
				</Button>
			</DialogTrigger>
			<DialogContent>
				<div className="grid gap-4 py-4">
					<div className="w-[100px] h-[100px] rounded-full bg-red-300"></div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							이름
						</Label>
						<Input id="name" defaultValue={name} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							프로필 소개
						</Label>
						<Textarea className="col-span-3"></Textarea>
					</div>
				</div>
				<DialogFooter>
					<Button variant="outline" type="submit">
						저장
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
