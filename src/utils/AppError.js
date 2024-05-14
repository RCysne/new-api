class AppError {
    // Criando as variáveis globais para ficarem acessíveis
    message
    statusCode

    // O método construtor é carregado automaticamente quando a classe é instanciada, e toda vez que ela for instanciada, eu quero a mensagem e o status. Caso não seja enviado, assume o valor de 400
    constructor(message, statusCode = 400) {
        this.message = message; // A variável global vai receber a mensagem recebida do construtor 
        this.statusCode = statusCode;
    }
}

module.exports = AppError;