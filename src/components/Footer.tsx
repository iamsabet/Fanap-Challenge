import Logo from "./shared/Logo"

const Footer = () => {
  return (
    <footer className="bg-card w-full">
      <div className="box-size py-6 h-auto pb-10">
        <div className="flex items-center justify-between px-2">
          <div className="flex justify-start items-center gap-x-3">
            <Logo width={80} height={80} />
            <h2 className="italic">Footer</h2>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer