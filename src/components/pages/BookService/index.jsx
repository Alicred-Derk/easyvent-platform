import FooterSection from "../../custom-ui/Footer"
import NavigationMenu from "../../custom-ui/NavigationMenu"

const BookService = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />

      <FooterSection />
    </div>
  )
};

export default BookService;