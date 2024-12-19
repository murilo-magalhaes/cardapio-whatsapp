export default function justNumbers(input: string): string {
  return input.replace(/\D/g, '');
}
