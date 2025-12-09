# Renata Costa - Estética Avançada

Site profissional para a enfermeira esteta Renata Costa, apresentando seus serviços de estética avançada.

## 🚀 Deploy na Vercel

Este projeto está configurado para deploy automático na Vercel.

### Passos para fazer o deploy:

1. **Criar conta na Vercel** (se ainda não tiver):
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub, GitLab ou Bitbucket

2. **Fazer upload do projeto**:
   - Clique em "Add New Project"
   - Selecione "Import Git Repository" ou faça upload direto da pasta
   - A Vercel detectará automaticamente que é um projeto Vite

3. **Configurar o projeto**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**:
   - Clique em "Deploy"
   - Aguarde o build finalizar
   - Seu site estará disponível em um domínio `.vercel.app`

### Domínio personalizado (opcional):

Após o deploy, você pode adicionar um domínio personalizado:
1. Vá em "Settings" > "Domains"
2. Adicione seu domínio
3. Configure os DNS conforme instruções da Vercel

## 🖼️ Imagem de Perfil

A foto de perfil (`renata.jpg`) está localizada na pasta `public/` e é automaticamente servida pelo Vite.

## 💻 Desenvolvimento Local

**Pré-requisitos:** Node.js instalado

1. Instalar dependências:
   ```bash
   npm install
   ```

2. Executar em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Build para produção:
   ```bash
   npm run build
   ```

4. Preview do build de produção:
   ```bash
   npm run preview
   ```

## 📁 Estrutura do Projeto

```
├── public/           # Arquivos estáticos (imagens, etc)
│   └── renata.jpg   # Foto de perfil
├── components/      # Componentes React reutilizáveis
├── pages/          # Páginas da aplicação
├── App.tsx         # Componente principal
├── index.html      # HTML base
└── vercel.json     # Configuração do Vercel
```

## 🎨 Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **React Router** - Roteamento
- **Lucide React** - Ícones

## 📝 Licença

© 2025 Renata Costa - Todos os direitos reservados
