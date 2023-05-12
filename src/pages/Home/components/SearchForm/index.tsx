import { useContext } from "react"
import { SearchFormContainer } from "./styles";
import { PostsContext } from "../../../../contexts/PostsContext";
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { getPosts, posts } = useContext(PostsContext)

  const { handleSubmit, register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })


  function handleSearchPost(data: SearchFormInputs) {
    console.log(data);

    getPosts(data.query)
  }

  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <p>{posts.length > 1 ? `${posts.length} publicações` : `${posts.length} publicação`}</p>
      </div>

      <form onSubmit={handleSubmit(handleSearchPost)}>
        <input type="text" placeholder='Buscar conteúdo' {...register('query')} />
      </form>
    </SearchFormContainer>
  )
}