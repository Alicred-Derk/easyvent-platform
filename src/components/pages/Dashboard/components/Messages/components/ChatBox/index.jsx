import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChatBox = () => {
  return (
    <div className="grow">
      <div className="bg-background fixed inset-0 z-50 flex h-full flex-col p-4 lg:relative lg:z-10 lg:bg-transparent lg:p-0">
        <div className="flex justify-between gap-4 lg:px-4">
          <div className="flex gap-4">
            <Avatar className="relative flex size-8 shrink-0 rounded-full md:size-10">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <div className="text-sm font-semibold">
                John Smith
              </div>
              <div className="text-xs text-green-500">Online</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto lg:px-4">
          <div>
            <div className="flex flex-col items-start space-y-10 py-8">

              <div className="max-w-(--breakpoint-sm) space-y-1 self-end">
                <div className="flex items-center gap-2">
                  <div className="bg-muted inline-flex rounded-md border p-4 order-1">
                    Sorry :( send you as soon as possible.
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-end">
                  <time className="text-muted-foreground mt-1 flex items-center text-xs justify-end">05:34 PM</time>
                </div>
              </div>

              <div className="max-w-(--breakpoint-sm) space-y-1">
                <div className="flex items-center gap-2">
                  <div className="bg-muted inline-flex rounded-md border p-4 order-1">
                    Sorry :( send you as 
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <time className="text-muted-foreground mt-1 flex items-center text-xs justify-end">05:34 PM</time>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="lg:px-4">
          <div className="bg-muted relative flex items-center rounded-md border">
            <Input placeholder="Enter message..." className="border-0 h-14 bg-white" />

            <div className="absolute end-4 flex items-center">
              <Button variant="outline">Send</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatBox;