export default function messageRequestError(err: any): string {
  if (err) {
    if (err.code && err.code === 'ERR_NETWORK') {
      return 'Falha no sinal de rede. Aguarde sua rede reestabelecer a conexão!';
    }
    if (err.response) {
      switch (err.response.status) {
        case 400:
          if (err.response.data.validation) {
            return err.response.data.validation.body.message;
          }
          return err.response.data.error;
        case 401:
          return 'Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.';
        case 402:
          return 'Este código de resposta está reservado para uso futuro. O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento, no entanto, este código de status é usado raramente e não existe nenhuma convenção padrão.';
        case 403:
          return 'O cliente não tem direitos de acesso ao conteúdo; ou seja, não é autorizado, portanto o servidor está se recusando a fornecer o recurso solicitado. Ao contrário do 401 Unauthorized, a identidade do cliente é conhecida pelo servidor.';
        case 404:
          return 'O servidor não pode encontrar o recurso solicitado. No navegador, isso significa que o URL não é reconhecido. Em uma API, isso também pode significar que o endpoint é válido, mas o próprio recurso não existe. Os servidores também podem enviar esta resposta em vez de 403 Forbidden para ocultar a existência de um recurso de um cliente não autorizado. Este código de resposta é provavelmente o mais conhecido devido à sua ocorrência frequente na web.';
        default:
          return err.response.data.error;
      }
    }
  }

  if (err) console.error(err);

  return err.response;
}
