import { createContext, useState } from "react";

export const SearchPageContext = createContext();

export default function SearchPageProvider({ children }) {

    const BASE_URL = "https://api.github.com/users/"

    async function getListRepo(inputValue) {

        if (inputValue === '') return

        fetch(BASE_URL + inputValue)
            .then(response => response.json())
            .then(data =>
                alert(
                    'Foi encontrado o seguinte User do GitHub para a pesquisa: "' + inputValue + '" \n\n'
                    + ' - Nome: ' + data.name + '\n'
                    + ' - Localidade: ' + data.location + '\n'
                    + ' - Seguidores: ' + data.followers + '\n'
                    + ' - Empresa: ' + (data.company === null ? 'Sem empresa cadastrada 😕' : data.company) + '\n'
                    + ' - Email: ' + (data.email === null ? 'Sem Email cadastrado 😕' : data.email) + '\n'
                    + ' - Repositórios: ' + data.public_repos + '\n'
                )

            );

    }
    return (<SearchPageContext.Provider
        value={{
            getListRepo,
        }}
    >
        {children}
    </SearchPageContext.Provider>)


}