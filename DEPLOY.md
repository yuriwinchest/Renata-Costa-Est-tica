# 🚀 Guia Rápido de Deploy na Vercel

## Opção 1: Deploy via Interface Web (Mais Fácil)

1. **Acesse**: https://vercel.com
2. **Faça login** com GitHub, GitLab ou Bitbucket
3. **Clique em**: "Add New..." → "Project"
4. **Importe o repositório** ou faça upload da pasta
5. **Configure**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Clique em "Deploy"**
7. **Aguarde** o build finalizar (1-2 minutos)
8. **Pronto!** Seu site estará no ar em `https://seu-projeto.vercel.app`

## Opção 2: Deploy via CLI (Avançado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy (na pasta do projeto)
vercel

# Deploy para produção
vercel --prod
```

## 📝 Checklist Pré-Deploy

- [x] Imagem `renata.jpg` na pasta `public/`
- [x] Arquivo `vercel.json` configurado
- [x] Build testado localmente (`npm run build`)
- [x] Dependências instaladas (`npm install`)

## 🎯 Próximos Passos Após Deploy

1. **Domínio Personalizado** (opcional):
   - Settings → Domains → Add Domain
   - Configure DNS conforme instruções

2. **Variáveis de Ambiente** (se necessário):
   - Settings → Environment Variables

3. **Analytics** (opcional):
   - Settings → Analytics → Enable

## 🔧 Solução de Problemas

### Build falha na Vercel
- Verifique se todas as dependências estão no `package.json`
- Teste o build localmente: `npm run build`

### Imagem não aparece
- Confirme que `renata.jpg` está em `public/`
- Verifique o caminho: deve ser `/renata.jpg` (com barra inicial)

### Rotas não funcionam
- O arquivo `vercel.json` já está configurado para SPA
- Todas as rotas redirecionam para `index.html`

## 📞 Suporte

Documentação oficial: https://vercel.com/docs
