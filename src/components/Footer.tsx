import Link from "next/link"
import Avatar from "./shared/Avatar"

const Footer = () => {
  return (
    <footer className="bg-card w-full">
      <div className="box-size py-6 h-auto pb-10">
        <div className="flex items-center justify-between px-2">
          <div className="flex justify-start items-center gap-x-3">
            <Avatar alt="Sabet Avatar" src={"https://avatars.githubusercontent.com/u/20267993?v=4"} width={100} height={100} />
            {/* <h2 className="italic">Footer</h2> */}
            <div className="w-full flex-col gap-y-2">
              <p className="font-normal">Designed & Developed by <Link target="/blank" href="https://github.com/iamsabet" className="hover:text-primary">Sabet</Link></p>
              <p>May 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
