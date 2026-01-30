# 🌱 Garden (Mobile)

Aplicativo mobile desenvolvido em **React Native** como parte do projeto **Garden**, um sistema voltado para auxiliar no acompanhamento terapêutico entre **psicólogo** e **paciente**.

O sistema completo é composto por:
- **Web (Next.js)**: painel do psicólogo (desenvolvido por colegas de equipe)
- **Mobile (React Native)**: aplicativo do paciente (**desenvolvido por mim**)
---

## 📱 Sobre o App (Paciente)

No aplicativo, o paciente pode:

- 📝 **Criar notas/diário terapêutico**  
  Registrar acontecimentos e pensamentos do dia a dia para que o psicólogo possa acompanhar.

- 😀 **Registrar emoções por emoji**  
  O paciente pode selecionar um emoji (ex: raiva, tristeza, felicidade) para indicar seu estado emocional naquele momento, mesmo sem tempo para escrever uma nota.

- 📌 **Visualizar e concluir atividades**  
  O psicólogo pode enviar atividades pelo sistema e o paciente consegue visualizar no app e marcar como concluídas.

- 🔐 **Autenticação e navegação entre telas**
  O app possui login/autenticação e navegação organizada com rotas.

---

## 🧠 Meu papel no projeto

Neste projeto, fui responsável principalmente por:

- Desenvolvimento de **todas as telas do aplicativo**
- Implementação da **navegação** com React Navigation
- Integração com a **API (backend)** consumindo endpoints do sistema
- Uso de **Context API (UserContext)** para compartilhar dados do usuário (como ID e informações de sessão) em todo o app
- Organização e manutenção do código visando reutilização e clareza

---

## 🛠️ Tecnologias utilizadas

- React Native
- JavaScript
- React Navigation
- Context API (UserContext)
- Integração com API (requisições HTTP)

---

## 🔒 Dependência de API

O aplicativo consome uma API privada usada no projeto original do TCC.
Por isso, ao executar localmente sem a API configurada, o app pode ficar limitado à tela de autenticação.
