/**Todo componente é uma função javascript que irá
 * retornar mais javascript, html e css
 */

/**
 * O código abaixo define uma classe JavaScript chamada 
 * CardNews, que herda da classe HTMLElement. 
 * Essa nova classe define um novo elemento HTML personalizado.
 */
class CardNews extends HTMLElement{ /**Leitura da linha: a nova classe CardNews irá se comportar igual um elemento html */
/**Quando queremos usar algo muitas vezes precisamos de um molde
 * assim como todo bolo segue a mesm receita
 * Se queremos usar as mesmas tags várias vezes teremos um molde
 * para botar elas
*/
    constructor(){/**O método constructor() é um método especial que é executado quando um objeto da classe é criado. */
       /**Nesse caso, ele invoca o construtor da classe pai HTMLElement através do comando super(). */
    super(); /**O super invoca o método construtor de quem a gente está herdando*/
        
        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Hello World</h1>";
    }
}

customElements.define('card-news', CardNews);
/**estou  criando um elemento personalizado que terá
 * como apelidio o nome 'card-news' e ele vem do molde
 * da classe criada a card-news
 */