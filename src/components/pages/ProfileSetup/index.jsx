import NavigationMenu from "../../custom-ui/NavigationMenu";
import ProfileForm from "../../custom-ui/ProfileForm";

const ProfileSetup = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />
      <div className="w-full flex items-center justify-center py-[2rem]">
        <ProfileForm />
      </div>

    </div>
  )
}

export default ProfileSetup;