import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function CommandsPage() {
  return (
    <main className="min-h-screen p-24">
      <div className="mb-12">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
          Explore Commands
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          No more wandering for the command list you need, we have them all here
          (if not, it&apos;ll soon be).
        </p>
      </div>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 mb-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Input
              className="hover:bg-gray-50 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 pl-10"
              type="text"
              placeholder="Search for tools..."
            />
            <MagnifyingGlassIcon className="absolute left-2 bottom-4 ml-2" />
          </div>
        </form>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
        <Link href="/commands/vim" scroll={false}>
          <Card className="cursor-pointer hover:bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-s text-muted-foreground">
              Vim is a highly configurable text editor built to make creating
              and changing any kind of text very efficient.
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
