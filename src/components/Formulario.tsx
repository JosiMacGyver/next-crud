import { useState } from 'react';
import Entrada from './Entrada';
import Cliente from '../core/Cliente';
import Botao from './Botao';

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente:Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    console.log(props.cliente)
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <>
            <div>
                {id ? (
                    <Entrada
                        somenteLeitura
                        texto="Código"
                        valor={id}
                        className="mb-5"
                    />
                ) : false}
                <Entrada
                    texto="Nome"
                    valor={nome}
                    valorMudou={setNome}
                    className="mb-5"
                />
                <Entrada
                    texto="Idade"
                    tipo="number"
                    valor={idade}
                    valorMudou={setIdade}
                />
                <div className='flex justify-end mt-7'>
                    <Botao
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                    className = "mr-2  bg-gradient-to-r from-blue-500 to-blue-700">
                        {id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao 
                    onClick={props.cancelado}
                    className= 'bg-gradient-to-r from-gray-500 to-gray-700'>
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>
    )
}