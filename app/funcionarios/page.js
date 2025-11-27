'use server';
import { Funcionario } from '../../database/tables';
import { redirect } from 'next/navigation';

async function removeFuncionario(formData) {
    "use server";
    const id = formData.get('id');
    const funcionario = await Funcionario.findByPk(id);
    await funcionario.destroy();
    redirect('/funcionarios');
}

async function Funcionarios() {
  const funcionarios = await Funcionario.findAll();

  return (
    <>
      <h1 style={{ color: '#3e1e04ff' }} >Listagem de Funcionários</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Endereço</th>
            <th>Tipo</th>
            <th>Salário</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.nome_func}</td>
              <td>{f.cpf}</td>
              <td>{f.telefone}</td>
              <td>{f.email}</td>
              <td>{f.endereco}</td>
              <td>{f.tipo_func}</td>
              <td>{f.salario}</td>
              <td>
                <form action={'/funcionarios/edita'}>
                  <input type="hidden" name="id" defaultValue={f.id} />
                  <button>Editar</button>
                </form>

                <form action={removeFuncionario}>
                  <input type="hidden" name="id" defaultValue={f.id} />
                  <button>Excluir</button>
                </form>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Funcionarios;