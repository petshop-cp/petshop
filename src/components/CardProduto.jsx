const formatarPreco = (valor) =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function CardProduto({ produto, quantidade, onAdicionar, onRemover }) {
    return (
        <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm">
            <div className="mb-4 flex h-28 items-center justify-center rounded-lg bg-[#6BCB77]/10 text-6xl">
                {produto.emoji}
            </div>
            <span className="mb-1 text-xs font-semibold text-[#2c6934]">
                {produto.categoria}
            </span>
            <h3 className="mb-3 grow text-base font-semibold text-gray-900">
                {produto.nome}
            </h3>
            <p className="mb-4 text-xl font-bold text-gray-900">
                {formatarPreco(produto.preco)}
            </p>

            {quantidade ? (
                <div className="flex items-center justify-between rounded-lg border border-[#2c6934] px-2 py-1">
                    <button
                        type="button"
                        onClick={onRemover}
                        aria-label={`Remover uma unidade de ${produto.nome}`}
                        className="h-8 w-8 cursor-pointer rounded-md text-lg font-bold hover:bg-[#6BCB77]/20"
                    >
                        −
                    </button>
                    <span className="font-semibold">{quantidade}</span>
                    <button
                        type="button"
                        onClick={onAdicionar}
                        aria-label={`Adicionar mais uma unidade de ${produto.nome}`}
                        className="h-8 w-8 cursor-pointer rounded-md text-lg font-bold hover:bg-[#6BCB77]/20"
                    >
                        +
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    onClick={onAdicionar}
                    className="cursor-pointer rounded-lg bg-[#3b7042] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#224427]"
                >
                    Adicionar ao carrinho
                </button>
            )}
        </article>
    )
}

export default CardProduto