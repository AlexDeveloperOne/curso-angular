# CursoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Curso Angular \<notes>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

## 01 Curso Angular 13: Introdução

Compõe a stack MEAN ->

- MongoDb - banco de dados;
- ExpressJs - API;
- Angular - frontend SPA;
- Node.Js - embarca o projeto todo;

Angular com SpringBoot é outra stack;

podemos ter um pouco de dificuldade no princípio, mas veremos que o Angular é muito bem estruturado.

## Pré-requisitos do curso

- `HTML` e `CSS` nível básico/intermediário;
- Bom conhecimento em `JavaScript` (recursos base da linguagem e ES6+) funções de Array;
- Contato prévio com `Node` e `npm` irá ser de grande valia;

## O que vamos precisar

- Node.js: para instalar o Angular, outros pacotes e rodar scripts;
- Um editor de código, sugestão: vsCode000000

## 02 Curso Angular 13: Instalando o Angular - primeiro projeto

### Hello World!!

- o nodejs foi instalado.
- instalar o Angular: `npm install -g @angular/cli`
- criar projetos: `ng new <nome>` na pasta em que o projeto deve ser criado;
- startar e testar o projeto: `ng serve`

Nesta página inicial zerada do projeto temos o `Getting started with Angular` para aprendermos mais com a documentação do Angular.

## 03 Curso Angular 13: Estrutura do Angular

### Logo apos a crição do projeto `ng new`

- `node_modules` - não é exclusividade do Angular, mas pertence a todo projeto que tenha `nodejs` e `npm`, aqui são instaladas as dependências externas do Angular, todos os pacotes dos quais o Angular é dependente; esta pasta não é versionada no repositório, podemos 'excluir' a qualuqer hora e reestabelecer com o comando `NPM install` | ou seja, você clona um repositorio e dá o comando `npm install` para reestabelecer a pasta.

- `./src` - (fonte) é o código-fonte da aplicação, onde mais trabalhamos; (lá está a aplicação); configurações, importações de componentes globais;

- `./src/app` - pasta principal para componentes, services e etc;

Os componentes são divididos em partes: TS, HTML, CSS e testes;

- .TS - é a lógica da aplicação ou componente(mvc controller);
- .HTML - é o template, onde vamos criar os elementos que serão vistos na tela (mvc view);
- .CSS - coloca estilos no html, aqui trabalhmos com uma visão `scoped` onde o estilo não vaza para outros elementos.
- .SPEC.TS - é para realização de testes do componente;

pastas com `.` são ligadas a meta configurações (ex: .angular .vs_code);
.gitignore - listar arquivos que não serão versionados;
angular.json - configuração do Angular de build;
karma.conf.js - framework de testes;
package.json - dependências de projeto e de desenvolvimento são exibidas, alguns scripts(ng serve, ng biuld);
readme.md - (como o projeto funciona)adaptamos as nossas necessidadas;
tsconfig\* - (arquivos de configuração typescript);

em `src`
index.html - home da aplicação;
main.ts - Arquivo principal da aplicação;
styles.css - estilos globais da aplicação;
testes.ts - arquivo de testes global;

- `./src/assets` - colocamos imagens estáticas do projeto (ex logo da empresa);
- `./src/enviroments` - ambientes que o angular vai poder rodar (ambiente de desenvolvimento, ambiente de produção. testes); ex em produção nós vamos remover todos os comentários;

### 04 Curso Angular 13: Criando componentes

ng generate component <nome> {vamos criar numa subpasta para organizar}

> ng generate component components/fist-component[criou dentro de uma pasta]

alternativa

> ng g c components/fist-component

reutilização de componentes

arquivos do componente: [o mesmo arranjo no /app principal]
.html [exibição]
.spec.ts [teste]
.ts [lógica]
.css [estilização]

na criação do componente ele atualizou o arquivo:
`./src/app/app.module.ts` [central de configuração da aplicação] os imports e declarações ficam aqui (mapeados) e são enviadas nas @declarations para gerenciameno da aplicação;

Ele fez o import em cima:

`import { FirstComponentComponent } from './components/first-component/first-component.component'`

colocou na declaration em baixo:

```ts
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
})
```

Agora nossa aplicação sabe que este componente existe, se fosse criado na mão teriamos que colocar esse `import` aqui neste arquivo para que funcione.

- no `FirstComponentComponent`

h1 e p no `.html`

- no `src/app/app.component.html`

usamos ou declaramos o selector do componente que fica no `.ts` na forma de tag;
`<app-firs-component></app-firs-component>` logo assim esse componente é importado para a página principal da aplicação.

o selector do componente deve ser declarado no `.html` do `src/app`

Faça o curso de TS é para quem quer progromar profissionalmente em Angular.

### 05 Curso Angular 13: Dados no template

Interpolação de dados

1. Crio a propriedade no `.ts` do componente (já fazendo a exportação )

```ts
export class FirstComponentComponent implements OnInit {
  name: string = "Matheus";
}
```

2. Exporto a propriedade para o template (`.html`) do componente.

`<h2>Nome: {{name}}<h2>`

OBS: Independente do dado é colocado como `string`

O typescript acaba sendo opcional no Angular, mas leva nosso código para o proximo nível, por utilizar um recurso em que o próprio utiliza;

- criamos uma propriedade ou metodo nessa classe export(padrão typescript);
- no template (.html) fazemos o uso com a sintaxe: {{propriedade}} <p>nome: {{name}}</p>

- dessa maneira fazemos o utilização de dados dinâmicos e em produção solicitamos esses dados do BD via HTTP;

- Podemos fazer interpolação de listas, array e objetos; {{array[0]}}, {{objeto.prop}}

`hobbies = ["Correr", "Jogar", "Estudar"]`
`<p> Hobies preferido: {{ hobbies[2] }} </p>`

### 06 Curso Angular 13: CSS no Angular

Global - em ./src/style.css
Scoped - no CSS dentro do próprio componente;

### 07 Curso Angular 13: Compartilhamento de dados

Compartilhando dados entre os componentes `pai e filho`
Isso reforça o reaproveitamento de componentes;

> ng generate components/parent-data
> .html [created]
> .spec.ts [created]
> .ts [created]
> .css [created]
> app.module.ts [updated]

no `app.component.html` [pai] eu coloco <app-parent-data> [filho]

a ideia do reaproveitamento e utilização dos dados de maneira dinâmica, ou seja, carrega usuario 0, 1, 2 ... Utilizando o mesmo componente

1º criar os dados no componente pai:

- no arquivo `app.component.ts`
- `[userName = 'Joaquim']` - `[na classe de export];`

2º Agora no template do pai `app.component.html` onde o filho foi declarado (como tag), faremos a associação ou a equivalência (como uma propriedade) dizendo esse = aquele.

- `<app-parent-data [name]="userName"></app-parent-data>`

3º Faremos um input no componente filho `parent-data.component.ts` de forma que precisamos adicionar o módulo `Input` do `'@angular/core'` | ou seja, esse input será realizado através do atributo `[name]`.

Adicionando o módulo Input:

`import { Component, Input } from '@angular/core';`
`import { Component, Input } from '@angular/core';`

- no export:

`@Input() name: String = '';` 'name tem que ter inicializador;'
`@Input() userData!: {email: string, role: string};` (outro exemplo)
OBS: ou você inicializa com `''` ou com `!`

- O [pai] está exportando - O [filho] está importando;

4º usando o dado que foi importado do pai...

no: parent-data.component.html
eu insiro por ex:

<p>Batismo = {{name}}</p>
<p>Email: {{ userData.email }}</p>
<p>Função do usuário: {{ userData.role }}</p>

## 08 - Diretivas do Angular

as aplicações são multiplas...
começam com ng ex ngAlgumaCoisa

`ng generate components/directives`

importa no app-component.html

- utilizamos valores dinâmicos utilizando um 'export'
  ```html
  <div class="class">
    <h2
      [ngStyle]="{ 'font-size': size + 'px', 'font-family': font, color: color }"
    >
      Testando diretiva de estilos / style
    </h2>
    <h2 [ngClass]="classes">Testando diretiva de classe 1</h2>
    <h2 [ngClass]="classes">Testando diretiva de classe 2</h2>
    <h2 [ngClass]="underline">Testando diretiva de classe 3</h2>
  </div>
  ```

```ts
export class DirectivesComponent {
  size = 40;
  font = "Arial";
  color = "red";

  classes = ["green-title", "small-title"]; //duas classes

  underline = "underline-title"; //unica classe
}
```

classes e underline foram exportados

### 09 Curso Angular 13: Renderização condicional

`ng generate components/if-render`

No .ts criamos atributos para exportar;

```ts
export class IfRenderComponent {
  canShow: boolean = true;
  name = "Matheus";
}
```

com o atribubo booleano 'canShow' exibimos ou não a <u>div</u> na qual ele foi inserido com o `*ngIf`

```html
<div class="class">
  <div *ngIf="canShow">Estamos mostrando isso porque foi permitido!</div>
</div>
```

Outro exemplo com o `if e else`;
para o `else` utilizamos um tag especial chamada `<ng-template #nameNotFound>` colocando nela como atributo o nome definido no `else` de forma que ficas linkados.

```html
<div class="class">
  <h2 *ngIf="name === 'Matheus'; else nameNotFound">O nome é Matheus</h2>
  <ng-template #nameNotFound>
    <div>
      <h2>O nome não foi encontrado!</h2>
    </div>
  </ng-template>
</div>
```

```ts
s;
```

## 10 - Eventos no Angular

`ng generate components/eventos`

Declara o componente no `app.component.html`

Foi no html e criou `<p *ngIf="show">Exibindo mensagem</p>`como na aula anterior.

criou no .ts o boleano show `show: boolean = false;`

```ts
export class EventosComponent {
  show: boolean = false;

  showMessage(): void {
    this.show = !this.show; //toggle
  }
}
```

agor ele cria uma botão que altera o estado do `show` o que permite exibir / ocultar a mensagem, tecnica `toggle`.

```html
<div class="class">
  <p *ngIf="show">Exibindo mensagem</p>
  <button (click)="showMessage()">Clique em mim!</button>
</div>
```

## 11 - Emitindo eventos

`ng generate components/emitter`

.html

```html
<div class="class">
  <h1>O número é: {{ myNumber }}</h1>
  <app-change-number (changeNumber)="onChangeNumber()"></app-change-number>
</div>
```

`ng generate components/change-number` [vai emitir o evento para o componente pai]

Esse componente foi chamado dentro do html do componente `emitter`, isso é o que vai fazer o link entre eles.

botão criado no .html do `change-number`.

```html
<button (click)="handleClick()">Alterar o número!</button>
```

Criado a logica da funcao no .ts do `change-number`.

```ts
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit();
  }
}
```

Incluimos no import o `Output` e o `EventEmitter` no import '.ts' do `change-number`.

Logo exportamos a funcão `handleClick()`

```ts
import { Component, Output, EventEmitter } from "@angular/core";

export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit(); //funcao sendo emitida
  }
}
```

Aqui ele vai linkar a funcao emitida no `.html` do componente emitter.

```html
<div class="class">
  <!-- usando o evento -->
  <h1>O número é: {{ myNumber }}</h1>
  ><!-- linkando o evento -->
  <app-change-number (changeNumber)="onChangeNumber()"></app-change-number>
</div>
```

ele cria a função receptora `onChangeNumber()` no `.ts` do componente emitter.

```ts
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
```

## 12 - Renderização de lista

Com a diretiva `*ngFor`

`ng generate components/list-render`

importa para o componente principal

cria um objeto no .ts do componente

```ts
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 5},
    {name: "Bob", type: "Horse", age: 1},
  ];
```

Agora essas propriedades estão disponíveis no tamplate

```ts
<div class="class">
  <h2>Animais:</h2>
  <ul>
    <li *ngFor="let animal of animals"> //sintxe for
      Nome: {{ animal.name }} - tipo: {{ animal.type }}
    </li>
  </ul>
</div>
```

## 13 - A importância das interfaces no Angular

É um recurso do `ts` amplamente utilizado em `Angular`;

É criado na mão, na pasta `app` ou `app/interfaces` `Animal.ts`

Já sendo exportado.

```ts
export interface Animal {
  id: number;
  name: string;
  type: string;
  age: number;
}
```

no .ts do `list-render` importamos a interface.

```ts
import { Animal } from "src/app/Animal";
```

tipar o array de objetos no .ts do `list-render`.

```ts
export class ListRenderComponent {
  //animals: Animal[] = []

  //esses objetos seguem o tipo da inteface importada
  animals: Animal[] = [
    { name: "Turca", type: "Dog", age: 4 },
    { name: "Tom", type: "Cat", age: 10 },
    { name: "Frida", type: "Dog", age: 5 },
    { name: "Bob", type: "Horse", age: 1 },
  ];
  //O código deve ficar alinha a interface
  animal: Animal = {
    name: "Teste",
    type: "Alguma coisa",
    age: 10,
  };
  animalDetails = "";

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  // <button (click)="showAge(animal)">Show age</button>
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
```

Muito visto em projetos profissionais em Angular.

## 14 - Pipe operators do Angular

Ele formata na interpolação de dados.

`ng generate components/pipes`

```html
<div class="class">
  <!-- sem usar propriedade-->
  <h2>{{ "Algum texto aqui!" | uppercase }}</h2>
  <!-- usando propriedades: someText-->
  <h2>{{ someText | titlecase }}</h2>
  <h2>{{ today | date: "fullDate" }}</h2>
</div>
```

ver pipe operators na documentação do Angular e fazer esses exemplos:

## 15 - Two way data binding no Angular

Temos que importar coisas como `FormsModule` e o `ngModel`

`ng generate components/two-way-binding`

importado para o componente principal `app`

no `app.module.ts`

```ts
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    FormsModule
  ],

```

no .html

```html
<div class="class">
  <h2>Two way data binding</h2>
  <form>
    <input
      type="text"
      [(ngModel)]="name"
      name="name"
      placeholder="Digite seu nome "
    />
    <input type="submit" value="Enviar" />
    <div *ngIf="name != ''">
      <p>O nome é: {{ name }}</p>
    </div>
  </form>
</div>
```

no .ts

```ts
export class TwoWayBindingComponent {
  name: string = "";
}
```

É alterado em um lugar e refletido em outro!

## 16 - Services do Angular

`ng generate service services/list`

no `.ts` do componente `list-render`

```ts
//feito import
import { ListService } from 'src/app/services/list.service'

//criado o constructor
  constructor (private listService: ListService){
    this.getAnimals();
  }
//criado metodo
  removeAnimal (animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
```

no `.html` do componente `list-render`

```html
<div class="class">
  <h2>Animais:</h2>
  <ul>
    <li *ngFor="let animal of animals">
      Nome: <a routerLink="/list/{{ animal.id }}">{{ animal.name }}</a> - tipo:
      {{ animal.type }}
      <button (click)="showAge(animal)">Show age</button>
      <!--cria esse botão-->
      <button (click)="removeAnimal(animal)">Excluir</button>
    </li>
  </ul>
  <h3>{{ animalDetails }}</h3>
</div>
```

## 17 - Angular Router

quando iniciamos um projeto temos a opção de iniciar o `router` e tudo é criado.

Criar o arquivo de routas `app/app-routing.module.ts` é o local e nome padrão.

```ts
//1
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//2
const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  //{path: 'list/:id', component: ItemDetailComponent}

//3
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//4
export class AppRoutingModule{}

];
```

import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";

no `app.module.ts`

```ts
//5
import { AppRoutingModule } from './app-routing.modules'
// incluir no imports abaixo-5-1
imports: [
    ...,
    AppRoutingModule,
    ...
  ],
```

no `app.component.html`

```html
<!-- 6 -->
<p>header</p>
<nav>
  <a routerLink="/" style="padding: 20px">Home</a>
  <a routerLink="/list">Lista</a>
</nav>
<h1>Hello World Angular!</h1>
<router-outlet></router-outlet
><!--Agora cada página é roteada pelo nome do componente-->
<p>footer</p>
```

## 18 - Requisições HTTP

`npm install json-server`

Criado `db.json` na raiz da aplicação!

```json
{
  //db.json
  "animals": [
    { "id": 1, "name": "Turca", "type": "Dog", "age": 4 },
    { "id": 2, "name": "Tom", "type": "Cat", "age": 10 },
    { "id": 3, "name": "Frida", "type": "Dog", "age": 11 },
    { "id": 4, "name": "Bob", "type": "Horse", "age": 2 },
    { "id": 5, "name": "Paco", "type": "Bird", "age": 1 }
  ]
}
```

modificado o arquivo `package.json` na lista de `scripts` foi adicionado:
`"server": "json-server --watch db.json"`
agora precisamos do terminal para rodar esse servidor

`npm run server` [rodando]

a porta 3000 simula uma API: http://localhost:3000/animals

Vamos precisar: no `app.module.ts`
em cima IMPORTA
`import { HttpClientModule } from '@angular/common/http'`
em baixo INCLUI NA LISTA

```ts
imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule//<aqui>
  ],
```

Pertence ao mundo real: é utilizado no mercado de trabalho.
Vamos fazer um requisição do `component` passar pelo `service`

## 19 - Dynamic routes - selecionando dado individual

`ng generate component components/item-detail`

a partir desse componente a gente vai criar um rota...

PARAMOS AQUI (DEVE SER REFEITA!)
20
Curso Angular 13: Excluindo dados pelo Service - #20
