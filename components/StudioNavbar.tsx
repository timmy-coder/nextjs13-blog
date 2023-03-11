import Link from "next/link";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5 bg-[#6e7683]">
        <Link href="/" className="flex items-center">
        <ArrowUturnLeftIcon className="h-6 w-6 text-black mr-2"/>
          Go to website
        </Link>
        </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
