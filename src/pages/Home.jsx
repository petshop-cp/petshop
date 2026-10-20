
import React from 'react'

const Home = () => {
    return (
        <main>
            <section className="bg-[#FF6B6B] text-white py-20 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    🐾 Bem-vindo ao Petshop Amigo Fiel!
                </h1>

                <p className="text-lg max-w-2xl mx-auto">
                    Aqui seu melhor amigo recebe todo o
                    carinho e cuidado que merece!
                    Temos produtos e serviços especiais
                    para cães e gatos.
                </p>
            </section>

            <section className="py-16 px-6 text-center bg-white">
                <h2 className="text-3xl font-bold text-[#FF6B6B] mb-6">
                    Quem Somos
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700">
                    Somos um petshop apaixonado por animais.
                    Nosso objetivo é oferecer produtos de
                    qualidade, conforto e bem-estar para
                    todos os pets.

                    Acreditamos que cada animal merece
                    amor, respeito e atenção.
                </p>
            </section>
        </main>
    )
}

export default Home
