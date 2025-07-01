import Markdown from "markdown-to-jsx"
import getMetadata from "@/utils/getBlogMetadata"
import React from "react"
import fs from 'fs'
import matter from "gray-matter"

function getPostContent(slug){
    const folder = 'blogs/'
    const file = folder + slug + '.md'
    const content = fs.readFileSync(file,'utf-8')
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async() =>{
    const posts = getMetadata('blogs')
    return posts.map((post)=>({
        slug: post.slug
    }))
}

export async function generateMetadata({params,searchParams}){
    const id = params?.slug ? '.'+params.slug:''
    return{
        title: `${id.replace('_',' ')}`
    }
}
export default function Blog(props){
    const slug = props.params.slug
    const post = getPostContent(slug)
    return(
        <main>
            <article>
                <Markdown>{post.content}</Markdown>
            </article>
        </main>
    )
}