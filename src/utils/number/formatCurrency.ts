export default function formatCurrency(value: string | number): string {
  let formatedValue: string = '';

  if (typeof value === 'string') {
    const conValue = Number(value.replace(',', '.'));
    formatedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(conValue);
  }

  if (typeof value === 'number') {
    formatedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  // Remover o NBSP
  formatedValue = formatedValue.replace(/\u00A0/g, '');

  return formatedValue;
}
