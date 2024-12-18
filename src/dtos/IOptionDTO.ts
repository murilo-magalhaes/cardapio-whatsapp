export default interface IOptionDTO {
  label: string;
  value: string;
}

export const emptyOption: IOptionDTO = {
  label: 'Selecione...',
  value: '',
};
