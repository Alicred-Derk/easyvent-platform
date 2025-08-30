import LoginForm from "./Form";

const LoginPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-1xl">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;
