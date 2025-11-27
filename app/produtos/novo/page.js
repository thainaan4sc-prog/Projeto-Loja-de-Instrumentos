
'use server';

import { Produto } from '../../../database/tables';

export default async function TelaNovoProduto(req) {
  
  async function cadastrar(formData) {
    "use server";

    await Produto.create({
      nome_prod: formData.get("nome_prod"),
      quantidade: formData.get("quantidade"),
      descricao: formData.get("descricao"),
      estoque: formData.get("estoque"),
      marca: formData.get("marca"),
      modelo: formData.get("modelo"),
      preco_venda: formData.get("preco_venda"),
      preco_custo: formData.get("preco_custo"),
    });
  }

  return (
    <div align="center">
      <h1 style={{color: '#3e1e04ff', }} >Cadastrar Produto</h1>

    <fieldset>
    <legend align="center">Dados Principais</legend> <br/>

      <form action={cadastrar}>
        <label>Nome:</label><br/>
        <input type="text" name="nome_prod" required /><br/>

        <label>Quantidade:</label><br/>
        <input type="number" name="quantidade" required /><br/>

        <label>Descrição:</label><br/>
        <input type="text" name="descricao" /><br/>

        <label>Estoque:</label><br/>
        <input type="number" name="estoque" /><br/>

        <label>Marca:</label><br/>
        <input type="text" name="marca" /><br/>

        <label>Modelo:</label><br/>
        <input type="text" name="modelo" /><br/>

        <label>Preço de Custo:</label><br/>
        <input type="number" step="0.01" name="preco_custo" /><br/>

        <label>Preço de Venda:</label><br/>
        <input type="number" step="0.01" name="preco_venda" /><br/>

        <br/>
        <button type="submit">Salvar</button>
      </form>
      </fieldset>
    </div>
  );
}
