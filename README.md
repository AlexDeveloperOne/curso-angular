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

## 01 - Introdu????o

Comp??e a stack MEAN ->

- MongoDb - banco de dados;
- ExpressJs - API;
- Angular - frontend SPA;
- Node.Js - embarca o projeto todo;

Angular com SpringBoot ?? outra stack;

podemos ter um pouco de dificuldade no princ??pio, mas veremos que o Angular ?? muito bem estruturado.

## Pr??-requisitos do curso

- `HTML` e `CSS` n??vel b??sico/intermedi??rio;
- Bom conhecimento em `JavaScript` (recursos base da linguagem e ES6+) fun????es de Array;
- Contato pr??vio com `Node` e `npm` ir?? ser de grande valia;

## O que vamos precisar

- Node.js: para instalar o Angular, outros pacotes e rodar scripts;
- Um editor de c??digo, sugest??o: vsCode000000

## 02 - Instalando o Angular | primeiro projeto

### Hello World!!

- o nodejs foi instalado.
- instalar o Angular: `npm install -g @angular/cli`
- criar projetos: `ng new <nome>` na pasta em que o projeto deve ser criado;
- startar e testar o projeto: `ng serve`

Nesta p??gina inicial zerada do projeto temos o `Getting started with Angular` para aprendermos mais com a documenta????o do Angular.

## 03 - Estrutura do Angular

### Logo apos a cri????o do projeto `ng new`

- `node_modules` - n??o ?? exclusividade do Angular, mas pertence a todo projeto que tenha `nodejs` e `npm`, aqui s??o instaladas as depend??ncias externas do Angular, todos os pacotes dos quais o Angular ?? dependente; esta pasta n??o ?? versionada no reposit??rio, podemos 'excluir' a qualuqer hora e reestabelecer com o comando `NPM install` | ou seja, voc?? clona um repositorio e d?? o comando `npm install` para reestabelecer a pasta.

- `./src` - (fonte) ?? o c??digo-fonte da aplica????o, onde mais trabalhamos; (l?? est?? a aplica????o); configura????es, importa????es de componentes globais;

- `./src/app` - pasta principal para componentes, services e etc;

Os componentes s??o divididos em partes: TS, HTML, CSS e testes;

- .TS - ?? a l??gica da aplica????o ou componente(mvc controller);
- .HTML - ?? o template, onde vamos criar os elementos que ser??o vistos na tela (mvc view);
- .CSS - coloca estilos no html, aqui trabalhmos com uma vis??o `scoped` onde o estilo n??o vaza para outros elementos.
- .SPEC.TS - ?? para realiza????o de testes do componente;

pastas com `.` s??o ligadas a meta configura????es (ex: .angular .vs_code);
.gitignore - listar arquivos que n??o ser??o versionados;
angular.json - configura????o do Angular de build;
karma.conf.js - framework de testes;
package.json - depend??ncias de projeto e de desenvolvimento s??o exibidas, alguns scripts(ng serve, ng biuld);
readme.md - (como o projeto funciona)adaptamos as nossas necessidadas;
tsconfig\* - (arquivos de configura????o typescript);

em `src`
index.html - home da aplica????o;
main.ts - Arquivo principal da aplica????o;
styles.css - estilos globais da aplica????o;
testes.ts - arquivo de testes global;

- `./src/assets` - colocamos imagens est??ticas do projeto (ex logo da empresa);
- `./src/enviroments` - ambientes que o angular vai poder rodar (ambiente de desenvolvimento, ambiente de produ????o. testes); ex em produ????o n??s vamos remover todos os coment??rios;

## 04 - Criando componentes

ng generate component <nome> {vamos criar numa subpasta para organizar}

> ng generate component components/fist-component[criou dentro de uma pasta]

alternativa

> ng g c components/fist-component

reutiliza????o de componentes

arquivos do componente: [o mesmo arranjo no /app principal]
.html [exibi????o]
.spec.ts [teste]
.ts [l??gica]
.css [estiliza????o]

na cria????o do componente ele atualizou o arquivo:
`./src/app/app.module.ts` [central de configura????o da aplica????o] os imports e declara????es ficam aqui (mapeados) e s??o enviadas nas @declarations para gerenciameno da aplica????o;

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

Agora nossa aplica????o sabe que este componente existe, se fosse criado na m??o teriamos que colocar esse `import` aqui neste arquivo para que funcione.

- no `FirstComponentComponent`

h1 e p no `.html`

- no `src/app/app.component.html`

usamos ou declaramos o selector do componente que fica no `.ts` na forma de tag;
`<app-firs-component></app-firs-component>` logo assim esse componente ?? importado para a p??gina principal da aplica????o.

o selector do componente deve ser declarado no `.html` do `src/app`

Fa??a o curso de TS ?? para quem quer progromar profissionalmente em Angular.

## 05 - Dados no template

Interpola????o de dados

1. Crio a propriedade no `.ts` do componente (j?? fazendo a exporta????o )

```ts
export class FirstComponentComponent implements OnInit {
  name: string = "Matheus";
}
```

2. Exporto a propriedade para o template (`.html`) do componente.

`<h2>Nome: {{name}}<h2>`

OBS: Independente do dado ?? colocado como `string`

O typescript acaba sendo opcional no Angular, mas leva nosso c??digo para o proximo n??vel, por utilizar um recurso em que o pr??prio utiliza;

- criamos uma propriedade ou metodo nessa classe export(padr??o typescript);
- no template (.html) fazemos o uso com a sintaxe: {{propriedade}} <p>nome: {{name}}</p>

- dessa maneira fazemos o utiliza????o de dados din??micos e em produ????o solicitamos esses dados do BD via HTTP;

- Podemos fazer interpola????o de listas, array e objetos; {{array[0]}}, {{objeto.prop}}

`hobbies = ["Correr", "Jogar", "Estudar"]`
`<p> Hobies preferido: {{ hobbies[2] }} </p>`

## 06 - CSS no Angular

Global - em ./src/style.css
Scoped - no CSS dentro do pr??prio componente;

## 07 - Compartilhamento de dados

Compartilhando dados entre os componentes `pai e filho`
Isso refor??a o reaproveitamento de componentes;

> ng generate components/parent-data
> .html [created]
> .spec.ts [created]
> .ts [created]
> .css [created]
> app.module.ts [updated]

no `app.component.html` [pai] eu coloco <app-parent-data> [filho]

a ideia do reaproveitamento e utiliza????o dos dados de maneira din??mica, ou seja, carrega usuario 0, 1, 2 ... Utilizando o mesmo componente

1?? criar os dados no componente pai:

- no arquivo `app.component.ts`
- `[userName = 'Joaquim']` - `[na classe de export];`

2?? Agora no template do pai `app.component.html` onde o filho foi declarado (como tag), faremos a associa????o ou a equival??ncia (como uma propriedade) dizendo esse = aquele.

- `<app-parent-data [name]="userName"></app-parent-data>`

3?? Faremos um input no componente filho `parent-data.component.ts` de forma que precisamos adicionar o m??dulo `Input` do `'@angular/core'` | ou seja, esse input ser?? realizado atrav??s do atributo `[name]`.

Adicionando o m??dulo Input:

`import { Component, Input } from '@angular/core';`
`import { Component, Input } from '@angular/core';`

- no export:

`@Input() name: String = '';` 'name tem que ter inicializador;'
`@Input() userData!: {email: string, role: string};` (outro exemplo)
OBS: ou voc?? inicializa com `''` ou com `!`

- O [pai] est?? exportando - O [filho] est?? importando;

4?? usando o dado que foi importado do pai...

no: parent-data.component.html
eu insiro por ex:

<p>Batismo = {{name}}</p>
<p>Email: {{ userData.email }}</p>
<p>Fun????o do usu??rio: {{ userData.role }}</p>

## 08 - Diretivas do Angular

as aplica????es s??o multiplas...
come??am com ng ex ngAlgumaCoisa

`ng generate components/directives`

importa no app-component.html

- utilizamos valores din??micos utilizando um 'export'
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

## 09 - Renderiza????o condicional

`ng generate components/if-render`

No .ts criamos atributos para exportar;

```ts
export class IfRenderComponent {
  canShow: boolean = true;
  name = "Matheus";
}
```

com o atribubo booleano 'canShow' exibimos ou n??o a <u>div</u> na qual ele foi inserido com o `*ngIf`

```html
<div class="class">
  <div *ngIf="canShow">Estamos mostrando isso porque foi permitido!</div>
</div>
```

Outro exemplo com o `if e else`;
para o `else` utilizamos um tag especial chamada `<ng-template #nameNotFound>` colocando nela como atributo o nome definido no `else` de forma que ficas linkados.

```html
<div class="class">
  <h2 *ngIf="name === 'Matheus'; else nameNotFound">O nome ?? Matheus</h2>
  <ng-template #nameNotFound>
    <div>
      <h2>O nome n??o foi encontrado!</h2>
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

agor ele cria uma bot??o que altera o estado do `show` o que permite exibir / ocultar a mensagem, tecnica `toggle`.

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
  <h1>O n??mero ??: {{ myNumber }}</h1>
  <app-change-number (changeNumber)="onChangeNumber()"></app-change-number>
</div>
```

`ng generate components/change-number` [vai emitir o evento para o componente pai]

Esse componente foi chamado dentro do html do componente `emitter`, isso ?? o que vai fazer o link entre eles.

bot??o criado no .html do `change-number`.

```html
<button (click)="handleClick()">Alterar o n??mero!</button>
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

Logo exportamos a func??o `handleClick()`

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
  <h1>O n??mero ??: {{ myNumber }}</h1>
  ><!-- linkando o evento -->
  <app-change-number (changeNumber)="onChangeNumber()"></app-change-number>
</div>
```

ele cria a fun????o receptora `onChangeNumber()` no `.ts` do componente emitter.

```ts
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
```

## 12 - Renderiza????o de lista

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

Agora essas propriedades est??o dispon??veis no tamplate

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

## 13 - A import??ncia das interfaces no Angular

?? um recurso do `ts` amplamente utilizado em `Angular`;

?? criado na m??o, na pasta `app` ou `app/interfaces` `Animal.ts`

J?? sendo exportado.

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
  //O c??digo deve ficar alinha a interface
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

Ele formata na interpola????o de dados.

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

ver pipe operators na documenta????o do Angular e fazer esses exemplos:


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
      <p>O nome ??: {{ name }}</p>
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

?? alterado em um lugar e refletido em outro!

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
      <!--cria esse bot??o-->
      <button (click)="removeAnimal(animal)">Excluir</button>
    </li>
  </ul>
  <h3>{{ animalDetails }}</h3>
</div>
```

## 17 - Angular Router

quando iniciamos um projeto temos a op????o de iniciar o `router` e tudo ?? criado.

Criar o arquivo de routas `app/app-routing.module.ts` ?? o local e nome padr??o.

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
><!--Agora cada p??gina ?? roteada pelo nome do componente-->
<p>footer</p>
```

## 18 - Requisi????es HTTP

`npm install json-server`

Criado `db.json` na raiz da aplica????o!

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

Pertence ao mundo real: ?? utilizado no mercado de trabalho.
Vamos fazer um requisi????o do `component` passar pelo `service`

## 19 - Dynamic routes - selecionando dado individual

`ng generate component components/item-detail`

a partir desse componente a gente vai criar um rota...

PARAMOS AQUI (DEVE SER REFEITA!)

## 20 - Excluindo dados pelo Service
