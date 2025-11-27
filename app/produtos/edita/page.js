import { Produto } from '../../../database/tables';
import { redirect } from 'next/navigation';


async function editaProduto(formData) {
    "use server"
    const id = formData.get('id');
    const nome_prod = formData.get('nome_prod');
    const quantidade = formData.get('quantidade');
    const estoque = formData.get('estoque');
    const marca = formData.get('marca');
    const preco_venda = formData.get('preco_venda');
    const preco_custo = formData.get('preco_custo');

    const produto = await Produto.findByPk(id);

    produto.nome_prod = nome_prod;
    produto.quantidade = quantidade;
    produto.estoque = estoque;
    produto.marca = marca;
    produto.preco_venda = preco_venda;
    produto.preco_custo = preco_custo;

    await produto.save();

    redirect('/produtos');
}


async function TelaEditaProduto({ searchParams }) {
    const id = searchParams.id;
    const produto = await Produto.findByPk(id);
    return (
        <>
            <form action={editaProduto}>

                <input type="hidden" name="id" defaultValue={produto.id} />

                <br></br>
                <label htmlFor="nome_prod">Nome:</label><br />
                <input type="text" name="nome_prod" defaultValue={produto.nome_prod} /> <br />

                <label htmlFor="nome_prod">Quantidade:</label><br />
                <input type="number" name="quantidade" defaultValue={produto.quantidade} /><br />

                <label htmlFor="descricao">Descrição:</label><br />
                <input type="text" name="descricao" defaultValue={produto.descricao} /><br />

                <label htmlFor="estoque">Estoque:</label><br />
                <input type="number" name="estoque" defaultValue={produto.estoque}/><br />

                <label htmlFor="marca">Marca:</label><br />
                <input type="text" name="marca" defaultValue={produto.marca}/><br />

                <label htmlFor="modelo">Modelo:</label><br />
                <input type="text" name="modelo" defaultValue={produto.modelo}/><br />

                <label htmlFor="preco_custo">Preço de Custo:</label><br />
                <input type="number" step="0.01" name="preco_custo" defaultValue={produto.preco_custo} /><br />

                <label>Preço de Venda:</label><br />
                <input htmlFor="preco_venda"type="number" step="0.01" name="preco_venda" defaultValue={produto.preco_venda} /><br />

                <br></br>
                <button type="submit">Salvar</button>


            </form>
        </>
    );
}

export default TelaEditaProduto;
