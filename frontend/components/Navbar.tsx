'use client';

import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useState } from 'react';
import { sendFeedback } from '@/api/services';
import { useToast } from '@/components/ui/use-toast';

export default function Navbar() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);

    const sendFeedbackHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userEmail = formData.get('email');
        const feedbackMessage = formData.get('message');
        const feedbackPayload = { userEmail, feedbackMessage };
        const response = await sendFeedback(feedbackPayload);
        toast({
            title: response.data.message,
        });
        setOpen(false);
    };

    return (
        <nav className="flex justify-between items-center w-full py-4 px-24">
            <div className="flex justify-between items-center min-w-96">
                <Link
                    href="/"
                    className="scroll-m-20 text-xl font-semibold tracking-tight mr-16"
                >
                    All The Commands
                </Link>
                <div className="min-w-48 gap-7 flex justify-around items-center">
                    <Link
                        href="/explore"
                        className="text-muted-foreground hover:text-zinc-950"
                    >
                        Explore Commands
                    </Link>
                    <Link
                        href="/about"
                        className="text-muted-foreground hover:text-zinc-950"
                    >
                        About ATC
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-between min-w-40">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <p className="text-sm text-muted-foreground cursor-pointer">
                            Send Feedback
                        </p>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>
                                We&apos;d love to hear your opinion
                            </DialogTitle>
                            <DialogDescription>
                                Wanna bring change to current features or
                                introduce a new one? Go ahead.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={sendFeedbackHandler}>
                            <div className="grid gap-4 py-4">
                                <div className="grid items-center gap-4">
                                    <Label
                                        htmlFor="email"
                                        className="text-left"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Your email address"
                                        className="col-span-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                                <div className="grid items-center gap-4">
                                    <Label
                                        htmlFor="message"
                                        className="text-left"
                                    >
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Type your message here"
                                        className="resize-none w-full focus-visible:ring-0 focus-visible:ring-offset-0"
                                        required
                                        maxLength={500}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                <Separator orientation="vertical" className="w-0.5 h-4 mx-2" />
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                    Follow us on:
                    <Link href="/about">
                        <FaXTwitter />
                    </Link>
                </p>
            </div>
        </nav>
    );
}
