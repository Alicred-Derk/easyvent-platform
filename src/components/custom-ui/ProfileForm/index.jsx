import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CirclePlus, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import DateInput from "../../ui/date";
import Textarea from "../../ui/textarea";

const ProfileForm = ({ isCreating }) => {
  return (
    <Card className="overflow-hidden w-[60%] rounded-md shadow-xs">
      <CardContent className="px-[3rem] py-[0.5rem]">
        {isCreating && <div className="font-title mb-[0.5rem] font-bold text-[1.5rem]">Profile</div>}
        {isCreating && <p className="mb-[3rem] text-gray-500">Finish setting up your profile name, contacts and other details to continue.</p>}

        <form>
          <div className="flex mb-[2rem]">
            <div className="w-[25%]">Profile Photo</div>

            <div className="w-[75%] flex items-center gap-[1rem]">
              <Avatar className="w-[5rem] h-[5rem]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Button variant="outline">
                <Upload /> Upload photo
              </Button>
            </div>
          </div>

          <div className="flex mb-[1.5rem] items-center">
            <div className="w-[25%]">Full Name</div>

            <div className="w-[75%] flex items-center gap-[1rem]">
              <Input type="text" placeholder="Personal Name" />
              <Input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="flex mb-[1.5rem] items-center">
            <div className="w-[25%]">Email</div>

            <div className="w-[75%] flex items-center gap-[1rem]">
              <Input type="email" placeholder="Email Address" />
            </div>
          </div>

          <div className="flex mb-[1.5rem]">
            <div className="w-[25%] pt-[0.5rem]">Contacts</div>

            <div className="w-[75%] flex flex-col gap-[0.25rem]">
              <div className="flex">
                <Input type="text" className="rounded-r-none" />

                <Select>
                  <SelectTrigger className="w-[180px] rounded-l-none border-l-0">
                    <SelectValue placeholder="Contact Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="landline">Landline</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button type="button" className="w-fit text-blue-600" variant="link"><CirclePlus /> Add Contact</Button>
            </div>
          </div>

          <div className="flex mb-[1.5rem] items-center">
            <div className="w-[25%]">Date of Birth</div>

            <div className="w-[75%] flex items-center gap-[1rem]">
              <DateInput />
            </div>
          </div>

          

          <div className="flex mb-[1.5rem] pt-[0.5rem]">
            <div className="w-[25%]">BIO</div>

            <div className="w-[75%] flex items-center gap-[1rem]">
              <Textarea />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#183B4E] hover:bg-[#2e5e78]">Save Changes</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
};

export default ProfileForm;