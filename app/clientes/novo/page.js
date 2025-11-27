'use server';

import { Cliente } from '../../../database/tables';

export default async function NovoCliente() {
  async function cadastrar(formData) {
    "use server";

    await Cliente.create({
      nome_cliente: formData.get("nome_cliente"),
      telefone: formData.get("telefone"),
      email: formData.get("email"),
      cpf: formData.get("cpf"),
      endereco: formData.get("endereco"),
    });
  }

  return (
    <div align="center">
      <h1 style={{ color: '#3e1e04ff'}} >Cadastrar Cliente</h1>

      <fieldset>
      <legend align="center">Dados Principais</legend> <br/>
      <form action={cadastrar}>
        <label>Nome:</label><br/>
        <input type="text" name="nome_cliente" required /><br/>

        <label>Telefone:</label><br/>
        <input type="text" name="telefone" required /><br/>

        <label>Email:</label><br/>
        <input type="email" name="email" /><br/>

        <label>CPF:</label><br/>
        <input type="text" name="cpf" /><br/>

        <label>Endereço:</label><br/>
        <input type="text" name="endereco" /><br/><br/>

        <button type="submit">Salvar</button>
      </form>
      </fieldset>
    </div>
  );
}
