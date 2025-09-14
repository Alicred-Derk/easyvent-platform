import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatItem = () => {
  return (
    <div className="group/item hover:bg-muted relative flex min-w-0 cursor-pointer items-center gap-4 px-6 py-4">
      <Avatar className="relative flex size-8 shrink-0 rounded-full md:size-10">
        <AvatarImage src={"https://github.com/shadcn.png"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="min-w-0 grow">
        <div className="flex items-center justify-between">
          <span className="truncate text-sm font-medium">John Smith</span>
          <span className="text-muted-foreground flex-none text-xs">3 hours</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground truncate text-start text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </span>

          <div className="ms-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm text-white">2</div>
        </div>
      </div>
    </div>
  );
}

const ChatList = () => {
  return (
    <div className="flex-1 grow overflow-auto p-0">
      <div className="block min-w-0 divide-y">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  )
}

const ChatMenu = () => {
  return (
    <Card className="p-0 shadow-none h-full w-[35%]">
      <CardContent className="p-0 flex flex-col gap-5 h-full">
        <header className="font-bold text-[1.5rem] px-6 pt-4">Chats</header>
        <div className="px-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2 pointer-events-none" />
            <Input 
              type="search" 
              placeholder="Chats search..."
              className="pl-10 pr-3 w-full h-8"
              // onChange={(evt) => setSearchFilter(evt.target.value)}
            />
          </div>
        </div>

        <ChatList />
      </CardContent>
    </Card>
  )
};

export default ChatMenu;