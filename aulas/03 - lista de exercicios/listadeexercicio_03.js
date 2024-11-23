/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado. 

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

/* Minha tentativa:

const precoProduto = 100;
const condicaoPagamento = 'Acima de duas vezes';

if (condicaoPagamento === 'Débito') {
    const desconto = 10;
    const descontoDecimal = desconto / 100;
    const valorDesconto = precoProduto * descontoDecimal;
    const valorFinal = precoProduto - valorDesconto;
    console.log(valorFinal);
} else if (condicaoPagamento === 'Duas vezes') {
    const precoProduto = 100;
    const valorFinal = precoProduto;
    console.log(valorFinal)
} else if (condicaoPagamento === 'Acima de duas vezes') {
    const juros = 10;
    const jurosDecimal = juros / 100;
    const valorJuros = precoProduto * jurosDecimal;
    const valorFinal = precoProduto + valorJuros;
    console.log(valorFinal);
} else if (condicaoPagamento === 'Dinheiro', 'PIX') {
    const desconto = 15;
    const descontoDecimal = desconto / 100;
    const valorDesconto = precoProduto * descontoDecimal;
    const valorFinal = precoProduto - valorDesconto;
    console.log(valorFinal);
} */

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta *0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}