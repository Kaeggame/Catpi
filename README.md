## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## API Calls :
Controller App : 

    Obtenir la documentation des calls API :
      Méthode : GET
      URL : /
      Description : Cet endpoint retourne la documentation des calls API.

Contrôleur Chats :

    Obtenir tous les chats :
        Méthode : GET
        URL : /cats
        Description : Cet endpoint retourne tous les chats présents dans le tableau cats.

    Obtenir un chat par son ID :
        Méthode : GET
        URL : /cats/:id
        Description : Remplacez :id par l'ID réel du chat que vous souhaitez récupérer. Cet endpoint retourne un objet chat qui correspond à l'ID fourni.

Contrôleur des Posts :

    Obtenir tous les posts :
        Méthode : GET
        URL : /posts
        Description : Cet endpoint retourne tous les posts disponibles dans le tableau posts.

    Obtenir un post par son ID :
        Méthode : GET
        URL : /posts/:id
        Description : Remplacez :id par l'ID réel du post que vous souhaitez récupérer. Cet endpoint retourne un objet post qui correspond à l'ID fourni.

    Créer un nouveau post :
        Méthode : POST
        URL : /posts
        Corps : Objet JSON contenant l'auteur, le titre et le contenu du post, en omettant les champs id et timestamp qui sont gérés automatiquement par le service.
        Description : Cet endpoint permet de créer un nouveau post. Le corps de la requête doit inclure les détails du post (auteur, titre et contenu). L'id est auto-incrémenté, et le timestamp est défini à la date et l'heure actuelles.