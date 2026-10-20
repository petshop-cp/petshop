
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


            <section className="bg-[#FFF9E6] py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-[#FF6B6B] mb-10">
                    Nossos Serviços
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <span className="text-5xl">🛁</span>
                        <h3 className="text-xl font-bold mt-4 mb-2">
                            Banho e Tosa
                        </h3>
                        <p className="text-gray-600">
                            Cuidado e higiene para deixar seu pet
                            limpo, cheiroso e feliz.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <span className="text-5xl">🐶</span>
                        <h3 className="text-xl font-bold mt-4 mb-2">
                            Cuidados Especiais
                        </h3>
                        <p className="text-gray-600">
                            Atendimento com carinho e atenção
                            para o bem-estar do seu animal.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md text-center">
                        <span className="text-5xl">🦴</span>
                        <h3 className="text-xl font-bold mt-4 mb-2">
                            Produtos e Acessórios
                        </h3>
                        <p className="text-gray-600">
                            Brinquedos, rações e acessórios
                            para seu melhor amigo.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold text-[#FF6B6B] mb-10">
                    Categorias
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">

                    <div className="bg-[#FFD93D] p-8 rounded-xl">
                        <span className="text-5xl">🐕</span>
                        <h3 className="text-xl font-bold mt-4">
                            Produtos para Cães
                        </h3>
                    </div>

                    <div className="bg-[#6BCB77] p-8 rounded-xl">
                        <span className="text-5xl">🐈</span>
                        <h3 className="text-xl font-bold mt-4">
                            Produtos para Gatos
                        </h3>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home
