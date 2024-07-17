import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { CiMail } from 'react-icons/ci';

export default function Footer() {
    return (
        <footer className="flex justify-between items-center w-full py-4 px-24 border border-b-0">
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
                        className="text-sm text-muted-foreground"
                    >
                        Explore Commands
                    </Link>
                    {/* <Link href="/compare-commands">Compare Commands</Link> */}
                    {/* <Link href="/blog">Blog</Link> */}
                    <Link
                        href="/about"
                        className="text-sm text-muted-foreground"
                    >
                        About ATC
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-between min-w-40">
                <Link
                    href="mailto:allthecommands@gmail.com"
                    className="flex text-sm text-muted-foreground items-center gap-1"
                >
                    <CiMail />
                    allthecommands@gmail.com
                </Link>

                <Separator orientation="vertical" className="w-0.5 h-4 mx-2" />
                <p className="text-sm text-muted-foreground">Made In India</p>
            </div>
        </footer>
    );
}
