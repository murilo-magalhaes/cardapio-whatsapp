export default function stringIsNotNull(
  str: string | null | undefined,
): boolean {
  return (
    str !== undefined && str !== null && str !== '' && typeof str === 'string'
  );
}
