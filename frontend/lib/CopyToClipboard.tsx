"use client";

import { CopyIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CopyButton({ commandName }: { commandName: string }) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commandName).then(function () {
      toast({
        title: "Command Copied To Clipboard!",
      });
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CopyIcon className="cursor-pointer" onClick={copyToClipboard} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy To Clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
