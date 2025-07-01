import fs from 'fs'
import matter from 'gray-matter'

export default function getMetadata(basePath){
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const MarkdownPosts = files.filter(file => file.endsWith('.md'))
    const Posts = MarkdownPosts.map((filename)=>{
        const fileContent = fs.readFileSync(`${folder}${filename}`,'utf-8')
        const matterResult = matter(fileContent)
        return{
            title: matterResult.data.title,
            prep_time: matterResult.data.prep_time,
            cook_time: matterResult.data.cook_time,
            description: matterResult.data.description,
            slug: filename.replace('.md','')

        }
    })
    return Posts
}
