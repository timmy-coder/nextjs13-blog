import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import urlFor from "../libs/urlFor"
import ClientSideRoute from "./ClientSideRoute"

type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
  return (
    <div >
      <hr className="border border-gray-300 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map(post => (
            <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
                <div  className="group cursor-pointer flex flex-col">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200">
                    <Image className="object-cover object-left lg:object-center" src={urlFor(post.mainImage).url()} alt={post.author.name} fill/>
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                        <div>
                            <p className="font-bold">{post.title}</p>
                            <p className="">
                                {new Date(post._createdAt).toLocaleDateString(
                                    "en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    }
                                )}
                            </p>
                        </div>
                        <div>
                            {post.categories.map(category => (
                                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                    <p className="bg-[#F8AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">{category.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex-1">
                    <p className="underline text-lg font-bold">{post.title}</p>
                    <p className="text-gray-500 line-clamp-2">{post.description}</p>
                </div>
                <p className="mt-5 font-bold flex items-center group-hover:underline">
                    Read Post

                    <ArrowRightIcon className="ml-2 h-4 w-4"/>
                </p>
            </div>
            </ClientSideRoute>
            
        ))}
      </div>
    </div>
  )
}

export default BlogList
