import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting }
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })

    const handleSearch = async (data: SearchFormInput) => {
        await new Promise( resolve => setTimeout( resolve, 2000))
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
            <input 
                {...register('query')}
                type='text' 
                placeholder="Buscar transações" 
            />
            <button type='submit' disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}