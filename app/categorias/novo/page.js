
'use server';

import { Categoria } from '../../../database/tables';

export default async function NovaCategoria() {
  async function cadastrar(formData) {
    "use server";

    await Categoria.create({
      nome_cat: formData.get("nome_cat"),
      descricao: formData.get("descricao"),
      tipo_produto: formData.get("tipo_produto"),
    });
  }

  return (
    <div align="center">
      <h1 style={{ color: '#3e1e04ff'}} >Cadastrar Categoria</h1>

      <fieldset>
      <legend align="center">Dados Principais</legend> <br/>

      <form action={cadastrar}>
        <label>Nome:</label><br/>
        <input type="text" name="nome_cat" required /><br/>

        <label>Descrição:</label><br/>
        <input type="text" name="descricao" /><br/>

        <label>Tipo de Produto:</label><br/>
        <input type="text" name="tipo_produto" /><br/><br/>

        <button type="submit">Salvar</button>
      </form>
      </fieldset>
    </div>
  );
}