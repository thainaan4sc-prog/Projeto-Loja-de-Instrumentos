'use server';

import { Fornecedor } from '../../../database/tables';

export default async function NovoFornecedor() {
  async function cadastrar(formData) {
    "use server";

    await Fornecedor.create({
      razsoc: formData.get("razsoc"),
      cnpj: formData.get("cnpj"),
      telefone: formData.get("telefone"),
      email: formData.get("email"),
      endereco: formData.get("endereco"),
    });
  }

  return (
    <div align="center">
      <h1 style={{ color: '#3e1e04ff'}} >Cadastrar Fornecedor</h1>

      <fieldset>
      <legend align="center">Dados Principais</legend> <br/>

      <form action={cadastrar}>
        <label>Razão Social:</label><br/>
        <input type="text" name="razsoc" required /><br/>

        <label>CNPJ:</label><br/>
        <input type="text" name="cnpj" required /><br/>

        <label>Telefone:</label><br/>
        <input type="text" name="telefone" /><br/>

        <label>Email:</label><br/>
        <input type="email" name="email" /><br/>

        <label>Endereço:</label><br/>
        <input type="text" name="endereco" /><br/><br/>

        <button type="submit">Salvar</button>
      </form>
      </fieldset>

    </div>
  );
}