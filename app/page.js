import Image from "next/image";
import getMetadata from "@/utils/getBlogMetadata";
import Blogcard from "@/components/BlogCard";

export default function Home() {
  const blogMetadata = getMetadata('blogs')
  console.log(blogMetadata)
  return (
    <main>
      <p className="text-5xl">welcome to blog jen</p>
      {blogMetadata.map((post,postIndex)=>{
        return(
          <Blogcard key={postIndex} post={post}/>
        )
      })}
    </main>
  );
}
