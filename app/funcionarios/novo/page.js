'use server';

import { Funcionario } from '../../../database/tables';

export default async function NovoFuncionario() {
  async function cadastrar(formData) {
    "use server";

    await Funcionario.create({
      nome_func: formData.get("nome_func"),
      cpf: formData.get("cpf"),
      telefone: formData.get("telefone"),
      email: formData.get("email"),
      endereco: formData.get("endereco"),
      tipo_func: formData.get("tipo_func"),
      salario: formData.get("salario"),
    });
  }

  return (
    <div align="center">
      <h1 style={{ color: '#3e1e04ff'}} >Cadastrar Funcionário</h1>

      <fieldset>
      <legend align="center">Dados Principais</legend> <br/>

      <form action={cadastrar}>
        <label>Nome:</label><br/>
        <input type="text" name="nome_func" required /><br/>

        <label>CPF:</label><br/>
        <input type="text" name="cpf" required /><br/>

        <label>Telefone:</label><br/>
        <input type="text" name="telefone" /><br/>

        <label>Email:</label><br/>
        <input type="email" name="email" /><br/>

        <label>Endereço:</label><br/>
        <input type="text" name="endereco" /><br/>

        <label>Tipo:</label><br/>
        <input type="text" name="tipo_func" /><br/>

        <label>Salário:</label><br/>
        <input type="number" step="0.01" name="salario" /><br/><br/>

        <button type="submit">Salvar</button>
      </form>
      </fieldset>
    </div>
  );
}