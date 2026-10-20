import { useState } from 'react'
import Card from '../components/CardProduto'

const produtos = [
  { id: 1, nome: 'Ração Premium Cães Adultos 10kg', categoria: 'Cães', preco: 189.9, emoji: '🐕' },
  { id: 2, nome: 'Ração Filhotes Cães 3kg', categoria: 'Cães', preco: 79.9, emoji: '🐶' },
  { id: 3, nome: 'Coleira Ajustável com Guia', categoria: 'Cães', preco: 49.9, emoji: '🦮' },
  { id: 4, nome: 'Bolinha de Borracha Mordedor', categoria: 'Cães', preco: 19.9, emoji: '🎾' },
  { id: 5, nome: 'Ração Gatos Castrados 3kg', categoria: 'Gatos', preco: 94.9, emoji: '🐈' },
  { id: 6, nome: 'Arranhador com Plataforma', categoria: 'Gatos', preco: 129.9, emoji: '🐱' },
  { id: 7, nome: 'Areia Higiênica 4kg', categoria: 'Gatos', preco: 24.9, emoji: '🧺' },
  { id: 8, nome: 'Varinha com Penas', categoria: 'Gatos', preco: 13.9, emoji: '🪶' },
  { id: 9, nome: 'Ração para Peixes Tropicais', categoria: 'Aquário', preco: 12.9, emoji: '🐠' },
  { id: 10, nome: 'Kit Decoração para Aquário', categoria: 'Aquário', preco: 59.9, emoji: '🪸' },
  { id: 11, nome: 'Semente Mix para Calopsita', categoria: 'Aves', preco: 17.9, emoji: '🦜' },
  { id: 12, nome: 'Gaiola Média com Comedouro', categoria: 'Aves', preco: 159.9, emoji: '🪺' },
]

const categorias = ['Todos', 'Cães', 'Gatos', 'Aves', 'Aquário']

const Produtos = () => {
  const [categoria, setCategoria] = useState('Todos')
  const [busca, setBusca] = useState('')
  const [carrinho, setCarrinho] = useState({}) // { idDoProduto: quantidade }

  const totalItens = Object.values(carrinho).reduce((soma, q) => soma + q, 0)

  function adicionar(id) {
    setCarrinho((atual) => ({ ...atual, [id]: (atual[id] || 0) + 1 }))
  }

  function remover(id) {
    setCarrinho((atual) => {
      const novo = { ...atual }
      if (novo[id] > 1) novo[id] -= 1
      else delete novo[id]
      return novo
    })
  }

  const produtosFiltrados = produtos.filter((p) => {
    const bateCategoria = categoria === 'Todos' || p.categoria === categoria
    const bateBusca = p.nome.toLowerCase().includes(busca.toLowerCase())
    return bateCategoria && bateBusca
  })

  return (
    <main className="px-[5%] text-center my-8 grow">
      <h2 className="text-3xl font-bold mb-4 bg-[#4D96FF] text-white py-2 border border-[#4D96FF]">
        Catálogo de produtos
      </h2>
      <p className="mb-6 text-gray-600">
        Tudo o que seu pet precisa, em um só lugar.
      </p>

      {/* Busca + contador do carrinho */}
      <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center gap-3 sm:flex-row">
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar produto..."
          aria-label="Buscar produto"
          className="w-full flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-[#6BCB77] focus:ring-2 focus:ring-[#6BCB77]/30"
        />
        <div className="whitespace-nowrap rounded-lg bg-[#6BCB77]/15 px-4 py-2 font-semibold text-gray-800">
          🛒 {totalItens} {totalItens === 1 ? 'item' : 'itens'}
        </div>
      </div>

      {/* Filtros por categoria */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategoria(cat)}
            aria-pressed={categoria === cat}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${categoria === cat
                ? 'border-[#6BCB77] bg-[#3d7444] text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:border-[#6BCB77]'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de produtos */}
      {produtosFiltrados.length === 0 ? (
        <p className="py-12 text-gray-500">
          Nenhum produto encontrado. Tente outra busca ou categoria.
        </p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
          {produtosFiltrados.map((p) => (
            <Card
              key={p.id}
              produto={p}
              quantidade={carrinho[p.id]}
              onAdicionar={() => adicionar(p.id)}
              onRemover={() => remover(p.id)}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Produtos