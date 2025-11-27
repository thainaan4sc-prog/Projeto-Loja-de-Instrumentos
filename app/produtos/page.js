
'use server';
import { Produto } from '../../database/tables';
import { redirect } from 'next/navigation';

async function removeProduto(formData) {
    "use server";
    const id = formData.get('id');
    const produto = await Produto.findByPk(id);
    await produto.destroy();
    redirect('/produtos');
}

async function Produtos() {
    const produtos = await Produto.findAll();
    console.log(produtos);
    return (
        <>
            <h1 style={{ color: '#3e1e04ff' }}>Listagem de Produtos</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>QUANTIDADE</th>
                        <th>DESCRICAO</th>
                        <th>ESTOQUE</th>
                        <th>MARCA</th>
                        <th>MODELO</th>
                        <th>PREÇO DE VENDA</th>
                        <th>PREÇO DE CUSTO</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        produtos.map(function (p) {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.nome_prod}</td>
                                    <td>{p.quantidade}</td>
                                    <td>{p.descricao}</td>
                                    <td>{p.estoque}</td>
                                    <td>{p.marca}</td>
                                    <td>{p.modelo}</td>
                                    <td>{p.preco_venda}</td>
                                    <td>{p.preco_custo}</td>
                                    <td>
                                        <form action={'/produtos/edita'}>
                                            <input type="hidden" name="id" defaultValue={p.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={removeProduto}>
                                            <input type="hidden" name="id" defaultValue={p.id} />
                                            <button>Excluir</button>
                                        </form>

                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Produtos;