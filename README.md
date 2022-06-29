# Perfil Profissional

Projeto Perfil Profissional, implementado no módulo 2 curso Fábrica de Programador em Hightech Cursos.

Este Projeto implementauma **API** em **NodeJS**, utilizando **Express** como *Gerenciador de requisições HTTP*, Banco de Dados não Relacional **MongoDB** e o  Framework **ODM Mongoose** para intermediar a comunicação entre a Aplicação e o Banco de dados

O projeto trata-se de uma aplicação de gerenciamento de Perfis profissionais e Conexões entre eles. Portanto é possivel Cadastrar perfis e a Comunicação entre perfis por meio de notificações

Este documento tem por objetivo detalhar os elementos presentes no projeto do Perfil Profissional, incluindo dependências, **Scripts** de execução, definicao de **Entidades** e **Endpoints**.


# Entidades:

- Perfil
- Notificacao

## Perfil

Atributo | Tipo
-------- | -------
nome | String*
dataNascimento | Date*
disponibilidadeDeMudanca | Boolean*
disponibilidadeDeHorario | Enum [ "Meio Periodo", "Integral" ]*
skills | Array< String >*
educacao | Array< Educacao >*
certificacoes | Array< Certificacao >
experiencias | Array< Experiencia >
usuario | Usuario*
conexoes | Array< Perfil >

## Notificacao

Atributo | Tipo
-------- | ------
tipo | Enum ["Contato", "Solicitação de Amizade"]*
titulo | String*
descricao | String
lida | Boolean*
remetente | Perfil*
destinatario | Perfil*

> Entidades marcadas com asterisco* são Entidades Obrigatorias.

## Entidades Internas

### Educacao

Atributo | Tipo
-------- | -------  
insituicao | String 
ingresso | Date 
conclusao | Date 
nivelEscolaridade | Enum ["Ensino Fundamental","Ensino Médio","Ensino Superior","Pós-graduação","Mestrado" ,"Doutorado"]
completo | Boolean
     

### Certificacao

Atributo | Tipo
-------- | ------
instituicao | String
titulo | String
cargaHoraria | Number

### Experiencia

Atributo | Tipo
-------- | -------  
insituicao | String 
ingresso | Date 
conclusao | Date 

### Usuario

Atributo | Tipo
-------- | -------  
email | String 
senha | String

# Endpoints

## Perfil

Recurso | Método | Autenticado? | Objetivo | Retorno 
------- | ------ | ------------ | --------- | --------
/perfil | GET | Não | Últimos 5 perfis cadastrados | Lista de Perfis JSON
/perfil/:id | GET | Não | Busca um perfil por ID | Perfil JSON 
/perfil | POST | Não | Cadastrar um perfil | Perfil JSON
/perfil | PUT | Sim | Editar um perfil | Perfil JSON
/perfil/conexao | POST | Sim | Conecta dois perfis (Conexão/Amizade) | Mensagem JSON

## Login

## Perfil

Recurso | Método | Autenticado? | Objetivo | Retorno 
------- | ------ | ------------ | --------- | --------
/login | POST | Não | Efetuar autenticação do usuário | Token, Email e Perfil

## Notificação

Recurso | Método | Autenticado? | Objetivo | Retorno 
------- | ------ | ------------ | --------- | --------
/notificacao/:id | GET | Sim | Buscar uma notificação por ID | Notificação JSON
/notificacao/perfil/:id | GET | Sim | Buscar todas as Notificações do perfil por ID | Lista de Notificações JSON
/notificacao | POST | Sim | Cadastrar uma nova notificação | Notificação JSON
/notificacao/lida/:id | PUT | Sim | Muda o **status** da notificação para "*lida*" | Notificação JSON





