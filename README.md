# 🌱 Garden (Mobile) App — TCC

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

---

## 📸 Screenshots

- **Login**
<img width="240" height="920" alt="Login" src="https://github.com/user-attachments/assets/af1e7332-57d9-4c81-a498-c574354d889c" />

- **Home**
<img width="240" height="920" alt="Home" src="https://github.com/user-attachments/assets/d8593a55-9d87-40f1-b8a7-10e2c30c4bd2" />

- **Diario**
<img width="240" height="920" alt="Diario" src="https://github.com/user-attachments/assets/71d7280e-28cb-4922-b47c-a361b6f75685" />

- **Emoções**
<img width="240" height="920" alt="Emoções" src="https://github.com/user-attachments/assets/f02ef8a4-5688-40e5-ba63-f7002e5e46a2" />

- **Atividades**
<img width="240" height="920" alt="Atividades" src="https://github.com/user-attachments/assets/43e0cb42-d19f-4d03-819f-46048418ddba" />

