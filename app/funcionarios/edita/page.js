import { Funcionario } from '../../../database/tables';
import { redirect } from 'next/navigation';


async function editaFuncionario(formData) {
    "use server"
    const id = formData.get('id');
    const nome_func = formData.get('nome_func');
    const cpf = formData.get('cpf');
    const telefone = formData.get('telefone');
    const email = formData.get('email');
    const endereco = formData.get('endereco');
    const salario = formData.get('salario');

    const funcionario = await Funcionario.findByPk(id);

    funcionario.nome_func = nome_func;
    funcionario.cpf = cpf;
    funcionario.telefone = telefone;
    funcionario.email = email;
    funcionario.endereco = endereco;
    funcionario.salario = salario;

    await funcionario.save();

    redirect('/funcionarios');
}


async function TelaEditaFuncionario({ searchParams }) {
    const id = searchParams.id;
    const funcionario = await Funcionario.findByPk(id);
    return (
        <>
            <form action={editaFuncionario}>

                <input type="hidden" name="id" defaultValue={funcionario.id} />

                <br></br>
                <label htmlFor="nome_func">Nome:</label><br />
                <input type="text" name="nome_func" defaultValue={funcionario.nome_func} /> <br />

                <label htmlFor="cpf">CPF:</label><br />
                <input type="text" name="cpf" defaultValue={funcionario.cpf} /><br />

                <label htmlFor="telefone">Telefone:</label><br />
                <input type="text" name="telefone" defaultValue={funcionario.telefone} /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="text" name="email" defaultValue={funcionario.email} /><br />

                <label htmlFor="endereco">Endereco:</label><br />
                <input type="text" name="endereco" defaultValue={funcionario.endereco} /><br />

                <label htmlFor="salario">Salario:</label><br />
                <input htmlFor="salario" type="number" step="0.01" name="salario" defaultValue={funcionario.salario} /><br />

                <br></br>
                <button type="submit">Salvar</button>


            </form>
        </>
    );
}

export default TelaEditaFuncionario;
