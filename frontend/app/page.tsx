"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AiOutlineEnter } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";
import SearchCommands from "@/lib/SearchCommands";

export default function Home() {
  const handleSearchItemClick = (command: string) => {};

  return (
    <main className="flex min-h-screen justify-between p-24">
      <div className="w-2/4">
        <div className="w-9/12 h-full">
          <h1 className="scroll-m-20 mb-10 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Search Commands
          </h1>
          <SearchCommands handleSearchItemClick={handleSearchItemClick} />
          {<Card className=""></Card>}
        </div>
      </div>

      <div className="w-2/4 flex">
        <Separator orientation="vertical" className="mr-8" />
        <div className="flex flex-col p-4 h-full justify-between">
          <h4 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
            Some Handpicked Commands For You
          </h4>
          <Link href="/commands/vim" scroll={false}>
            <Card className="w-3/4 pt-4 cursor-pointer hover:bg-gray-50 hover:translate-x-1 transition">
              <CardContent>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  vim
                </code>
                - Vim is a highly configurable text editor built to make
                creating and changing any kind of text very efficient.
              </CardContent>
            </Card>
          </Link>
          <Link href="/commands/git" scroll={false}>
            <Card className="w-3/4 pt-4 cursor-pointer hover:bg-gray-50 hover:translate-x-1 transition">
              <CardContent>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  git
                </code>
                - Vim is a highly configurable text editor built to make
                creating and changing any kind of text very efficient.
              </CardContent>
            </Card>
          </Link>
          <Link href="/commands/linux" scroll={false}>
            <Card className="w-3/4 pt-4 cursor-pointer hover:bg-gray-50 hover:translate-x-1 transition">
              <CardContent>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  linux
                </code>
                - Vim is a highly configurable text editor built to make
                creating and changing any kind of text very efficient.
              </CardContent>
            </Card>
          </Link>
          <Link href="/commands/docker" scroll={false}>
            <Card className="w-3/4 pt-4 cursor-pointer hover:bg-gray-50 hover:translate-x-1 transition">
              <CardContent>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  docker
                </code>
                - Vim is a highly configurable text editor built to make
                creating and changing any kind of text very efficient.
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
