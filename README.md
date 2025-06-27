# Mock Interceptor Demo

**Descrição curta:**
Projeto Angular standalone (v18+) que demonstra como configurar múltiplos ambientes (dev, mock, production) e mockar requisições HTTP usando interceptors funcionais.

---

## 📝 Descrição

Este repositório contém um exemplo completo de aplicação Angular standalone que:

* Utiliza **`environment.ts`**, **`environment.mock.ts`**, **`environment.prod.ts`** para configurar diferentes ambientes.
* Demonstra como usar **`HttpInterceptorFn`** e **`provideHttpClient(withInterceptors(...))`** para mockar chamadas a APIs.
* Mostra como alternar entre *mock* e chamadas reais com o parâmetro de build `--configuration=mock`.

Ideal para quem deseja:

* Testar funcionalidades de frontend sem depender do backend.
* Facilitar demos e testes de UI/UX com dados mockados.

---

## 🚀 Funcionalidades

* **Ambientes configuráveis** (`dev`, `mock`, `prod`)
* **Interceptor funcional** para mock de requisições GET `/users`
* **Serviço HTTP** (`UserService`) que consome API real ou mock
* **Bootstrap Application** ao estilo standalone (sem NgModule)

---

## 🛠️ Instalação e execução

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/mock-interceptor-demo.git
   cd mock-interceptor-demo
   ```

2. Instale dependências:

   ```bash
   npm install
   ```

3. Executar em **desenvolvimento real** (dev):

   ```bash
   npm start
   ```

   → usa `environment.ts`, chama `https://dev.api.exemplo.com/users`

4. Executar em **modo mock**:

   ```bash
   npm run start:mock
   ```

   → usa `environment.mock.ts`, retorna lista fake de usuários

5. Build para **produção**:

   ```bash
   npm run build:prod
   ```

---

## 🔧 Scripts disponíveis

```json
"scripts": {
  "start": "ng serve",
  "start:mock": "ng serve --configuration=mock",
  "build": "ng build",
  "build:mock": "ng build --configuration=mock",
  "build:prod": "ng build --configuration=production"
}
```

---

## 📁 Estrutura do projeto

```
mock-interceptor-demo/
├─ src/
│  ├─ app/
│  │  ├─ interceptors/
│  │  │  └─ mock.interceptor.ts      # Definição do HttpInterceptorFn
│  │  ├─ services/
│  │  │  └─ user.service.ts          # Serviço de chamadas HTTP
│  │  ├─ app.config.ts               # Configuração de providers (router + HTTP)
│  │  ├─ app.component.ts            # Componente root standalone
│  │  └─ app.routes.ts               # Definições de rota (se houver)
│  ├─ environments/
│  │  ├─ environment.ts              # Base (dev)
│  │  ├─ environment.mock.ts         # Mock enabled
│  │  └─ environment.prod.ts         # Production
│  └─ main.ts                        # bootstrapApplication(AppComponent, appConfig)
└─ angular.json                      # Configurações de build/serve
```

---

## 📚 Referências

* [Angular HTTP Interceptors (Functional)](https://angular.io/guide/http#intercepting-requests-and-responses)
* [Angular Environment Configuration](https://angular.io/guide/build#configuring-application-environments)

---

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
