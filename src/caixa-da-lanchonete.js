const cardapio = {
    cafe: 3.00,
    chantily: 1.50, // extra café
    suco: 6.20,
    sanduiche: 6.50,
    queijo: 2.00, // extra sanduiche
    salgado: 7.25, 
    combo1: 9.50,
    combo2: 7.50,
}

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let resultado = 0;
        let possuiCafe = false;
        let possuiSanduiche = false;
        let possuiChantily = false;
        let possuiQueijo = false;

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        for (let i = 0; i < itens.length; i++) {
            const pedido = itens[i].split(',');
            const codigo = pedido[0];
            const quantidade = pedido[1];

            if (!cardapio[codigo]) {
                return 'Item inválido!';
            }

            if (Number(quantidade) === 0) {
                return 'Quantidade inválida!'
            }

            if (codigo === 'cafe') {
                possuiCafe = true;
            }

            if (codigo === 'sanduiche') {
                possuiSanduiche = true;
            }

            if (codigo === 'chantily') {
                possuiChantily = true;
            }

            if (codigo === 'queijo') {
                possuiQueijo = true;
            }
            
            resultado += cardapio[codigo] * quantidade;
        }

        if (possuiCafe === false && possuiChantily === true) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        if (possuiSanduiche === false && possuiQueijo === true) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        switch (metodoDePagamento) {

            case 'debito':
                return 'R$ ' + resultado.toFixed(2).replace('.',',');

            case 'dinheiro':
                resultado = resultado - (resultado * 0.05);
                return 'R$ ' + resultado.toFixed(2).replace('.',',');

            case 'credito':
                resultado = resultado + (resultado * 0.03);
                return 'R$ ' + resultado.toFixed(2).replace('.',',');

            default:
                return 'Forma de pagamento inválida!';    
        }
    }
}

export { CaixaDaLanchonete };
