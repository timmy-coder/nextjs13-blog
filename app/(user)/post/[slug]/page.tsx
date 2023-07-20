import { groq } from "next-sanity"
import { client } from "../../../../libs/sanity.client";

type Props = {
    params: {
        slug: string
    }
}

async function Post({params: {slug}}: Props) {
    const query = groq`
        *[_type == 'post' && slug.current == $slug][0]{
            ...,
            author->,
            catogries[]->
        }
    `;

    const post: Post = await client.fetch(query, {slug});
    
  return (
    <div>Post: {slug}</div>
  )
}

export default Post