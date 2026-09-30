import type { LocalizedEdition } from "./localized-pages";

// Édition française rédigée pour les recherches francophones ; aucune route n'est publiée ici.
export const frEdition: LocalizedEdition = {
  ui: {
    language: "Langue", home: "Accueil", start: "Bien débuter", controls: "Modèles et mémoire", compare: "Comparer", blog: "Articles",
    about: "À propos", contact: "Contact", editorial: "Ligne éditoriale", privacy: "Confidentialité", terms: "Conditions d'utilisation",
    official: "Ouvrir SpicyChat", read: "Lire le comparatif", sources: "Sources officielles", allArticles: "Tous les comparatifs", more: "En savoir plus",
    independent: "Publication indépendante, sans affiliation avec SpicyChat", adults: "Informations destinées aux adultes",
    analyticsSettings: "Préférences de mesure", analyticsTitle: "Mesure d'audience facultative",
    analyticsBody: "Acceptez-vous Google Analytics pour nous aider à améliorer les pages consultées ? Aucune personnalisation publicitaire n'est activée.",
    analyticsDecline: "Refuser", analyticsAccept: "Autoriser la mesure", analyticsPrivacy: "Lire la politique de confidentialité",
    analyticsStatusPrivacy: "Le signal de confidentialité du navigateur est respecté : la mesure reste désactivée.",
    analyticsStatusOn: "La mesure est activée. Vous pouvez retirer votre accord dans ces préférences.",
    analyticsStatusOff: "La mesure est désactivée. Ce choix ne concerne que ce site.",
    skip: "Aller au contenu", navigation: "Navigation principale", menu: "Ouvrir le menu", closeMenu: "Fermer le menu",
  },
  home: {
    description: "Spicy Chat AI décrypté en français : chat avec personnages IA, jeu de rôle, modèles, contexte, mémoire, règles, tarifs et cinq alternatives.",
    hero: {
      kicker: "Analyse indépendante · réservé aux adultes",
      tagline: "Une belle image attire. La cohérence du personnage fait durer l'histoire.",
      body: "Pour juger SpicyChat, nous séparons la fiche du personnage, le message d'ouverture, le modèle, le contexte et les souvenirs enregistrés. Cinq comparatifs répondent à cinq questions concrètes avant de créer un compte ou de payer.",
      primary: "Méthode de comparaison", secondary: "Voir les cinq comparatifs",
    },
    intro: {
      kicker: "01 / Comprendre", heading: "Spicy Chat AI, au-delà du portrait du personnage",
      lead: "SpicyChat permet de discuter et de jouer des scènes avec des personnages fictifs créés par la communauté. Ce site est une publication explicative : il n'héberge ni chatbot ni compte SpicyChat.",
      body: "Un jeu de rôle IA convaincant dépend d'une situation de départ, d'un objectif pour le personnage et d'un modèle capable de suivre l'intrigue. La quantité de conversation visible à l'écran ne dit pas ce que le modèle reçoit réellement comme contexte. Les souvenirs conservés relèvent encore d'un autre mécanisme. Enfin, une présentation destinée aux adultes ne signifie pas absence de règles : les contenus impliquant des mineurs, des personnes réelles identifiables ou l'absence de consentement sont interdits par la plateforme.",
    },
    journey: {
      kicker: "02 / Trois façons d'essayer", heading: "Chercher, créer, puis faire jouer une scène",
      description: "Définissez l'expérience attendue avant de comparer les abonnements ou les nombres de personnages annoncés.",
      cards: [
        { label: "Explorer", heading: "Lire l'accroche", body: "Au-delà de la vignette, cherchez le lieu, l'enjeu et une première réplique qui vous donne quelque chose à faire." },
        { label: "Écrire", heading: "Donner un désir au personnage", body: "Une volonté, une difficulté et une voix reconnaissable valent mieux qu'un inventaire d'adjectifs. Restez dans une fiction avec des adultes." },
        { label: "Ajuster", heading: "Tester un réglage à la fois", body: "Ne changez pas simultanément le modèle, le rôle de l'utilisateur et la mémoire : vous ne sauriez plus ce qui a amélioré la scène." },
      ],
    },
    controls: {
      kicker: "03 / Ce qui façonne les réponses", heading: "Ne mettez pas toute la « mémoire » dans le même panier",
      description: "La grille officielle distingue la fenêtre de contexte, Memory Manager et Semantic Memory 2.0. Leurs accès varient selon la formule.",
      cards: [
        { label: "Fiche", heading: "Quel rôle joue-t-il ?", body: "Définissez une motivation, une contrainte et une ouverture qui invite à poursuivre l'action." },
        { label: "Modèle", heading: "Comment écrit-il ?", body: "À scène égale, observez la voix, les répétitions et l'initiative. Les modèles disponibles dépendent de la formule actuelle." },
        { label: "Contexte", heading: "Que voit-il maintenant ?", body: "L'historique que vous pouvez faire défiler n'est pas nécessairement entièrement utilisé pour rédiger la prochaine réponse." },
        { label: "Souvenirs", heading: "Que garde-t-il à part ?", body: "Memory Manager et Semantic Memory 2.0 ne sont ni synonymes ni inclus au même niveau d'abonnement." },
        { label: "Formule", heading: "Que payez-vous vraiment ?", body: "Vérifiez séparément l'accès aux modèles avancés, aux images, à la synthèse vocale et aux réglages de génération." },
      ],
    },
    test: {
      kicker: "04 / Petit test reproductible", heading: "Une scène identique vaut mieux qu'une impression rapide",
      description: "Voici une méthode que le lecteur peut reproduire ; nous ne la présentons pas comme une campagne de tests déjà réalisée sur tous les modèles.",
      steps: [
        { heading: "Poser deux détails de fiction", body: "Faites convenir à deux adultes fictifs d'un rendez-vous dans un lieu imaginaire et d'une promesse anodine." },
        { heading: "Laisser évoluer l'échange", body: "Changez de sujet, ajoutez un léger désaccord, puis notez si le personnage conserve son caractère." },
        { heading: "Revenir sans souffler la réponse", body: "Après plusieurs tours, demandez ce qui était prévu. Notez modèle, formule, nombre de messages et fonctions de mémoire actives." },
      ],
    },
    comparison: {
      kicker: "05 / Cinq autres options", heading: "Choisir selon votre usage, pas selon un classement générique",
      description: "Les mêmes besoins ne conduisent pas au même choix : règles d'écriture, configuration, modèle gratuit, découverte ou voix et images.",
      columns: ["Service", "Intéressant pour", "Point à vérifier"],
      baseline: ["SpicyChat", "Jeu de rôle fictif entre adultes avec choix de modèle et de mémoire", "Contexte et fonctions inclus dans votre formule"],
      options: {
        "spicychat-vs-character-ai": ["Character.AI", "Histoires dans un cadre de contenu plus strict", "Interdiction de la pornographie et règles d'âge"],
        "spicychat-vs-janitor-ai": ["Janitor AI", "Fiches communautaires et configurations souples", "Domaine officiel, modèle réel et coûts externes éventuels"],
        "spicy-chat-ai-vs-crushon-ai": ["CrushOn AI", "Personnages et discussions avec des modèles gratuits", "Crédits nécessaires aux modèles Pro"],
        "spicy-chat-ai-vs-polybuzz": ["PolyBuzz", "Découverte rapide de personnages prêts à jouer", "Visibilité des fiches et politique de données"],
        "spicy-chat-ai-vs-girlfriendgpt": ["GirlfriendGPT", "Compagnon avec conversation vocale et images", "Opérateurs déclarés et dépenses liées aux médias"],
      },
    },
    privacy: {
      kicker: "06 / Garder la fiction à sa place", heading: "Testez la mémoire sans raconter votre vraie vie",
      body: "Une anecdote inventée suffit à vérifier la continuité d'une histoire. Effacer un chat, retirer un souvenir, supprimer son compte et arrêter un abonnement ne sont pas la même opération. La documentation SpicyChat précise qu'une souscription faite via Google Play ou SubscribeStar doit être résiliée auprès du service concerné, même après suppression du compte.",
      checks: [
        "N'indiquez pas d'adresse, d'e-mail, de numéro, de données médicales ou bancaires dans la fiction ; les règles SpicyChat interdisent ces catégories même inventées.",
        "Vérifiez ce qu'il advient des conversations, personnages, personas et souvenirs en cas de suppression du compte.",
        "Repérez où votre abonnement a été souscrit et comment arrêter le renouvellement sur ce canal précis.",
        "N'utilisez aucune photo d'une personne réelle ni portrait photoréaliste comme avatar SpicyChat.",
        "Restez avec des personnages fictifs majeurs et des interactions consenties, dans les limites des règles en vigueur.",
      ],
    },
    research: {
      kicker: "07 / Avant de s'abonner", heading: "Trois questions qui comptent après le premier message",
      description: "Un grand catalogue facilite l'entrée dans une histoire. La tenue du récit se voit plusieurs scènes plus tard.",
      blocks: [
        { heading: "Le personnage veut-il quelque chose ?", paragraphs: [
          "Une fiche populaire peut afficher un portrait soigné tout en laissant la première scène vide. Relisez son message d'ouverture : le personnage poursuit-il un objectif ? Quel obstacle rend une réponse intéressante ? Votre réplique peut-elle modifier le cours des événements ? Ces éléments aident davantage le jeu de rôle qu'une simple liste de qualités ou de catégories.",
          "Si vous créez votre propre personnage, limitez la fiche de départ à quelques éléments jouables : une intention, une limite et une manière de parler. Essayez d'abord un échange calme, puis une situation où il doit choisir. Si sa personnalité change sans raison, revoyez la fiche et le début de scène avant d'attribuer le problème uniquement au modèle. Une personne réelle n'a pas à servir de modèle ou de visage à ce personnage.",
        ] },
        { heading: "Manque-t-il du contexte ou un souvenir sauvegardé ?", paragraphs: [
          "La fenêtre de contexte correspond à ce que l'IA peut prendre en compte pour sa réponse immédiate. Une fonction de mémoire peut gérer des éléments sélectionnés en dehors de cette portion. La grille SpicyChat présente une offre gratuite et trois offres payantes ; Memory Manager et Semantic Memory 2.0 n'apparaissent pas au même palier. Confondre historique affiché, contexte et mémoire sauvegardée conduit à de mauvaises attentes.",
          "Pour isoler la cause d'un oubli, gardez la même scène et modifiez un paramètre après l'autre. Notez quand un personnage reprend spontanément une promesse fictive, quand il y répond seulement si vous posez une question directe et quand il la contredit. Un seul échange ne démontre pas une capacité générale. Pour l'accès aux fonctions, retenez le tableau et la page de paiement actuels du fournisseur plutôt qu'une ancienne capture d'écran.",
        ] },
        { heading: "Que disent les règles sur les images et la sortie du service ?", paragraphs: [
          "SpicyChat interdit notamment les contenus sexuels concernant des mineurs ou des personnages paraissant mineurs, la présentation positive d'actes non consentis et la sexualisation de personnes identifiables. Ses règles d'avatars excluent les photographies, même recadrées, et les visuels si réalistes qu'ils pourraient passer pour une vraie personne. Les portraits éditoriaux visibles ici ne sont pas des fichiers à réutiliser dans une fiche de personnage.",
          "La suppression d'un compte est définitive et retire notamment chats, personnages, personas, réglages et souvenirs selon l'aide officielle. Une souscription achetée ailleurs peut demander une résiliation séparée. Les services comparés ont leurs propres règles de contenu et de confidentialité ; la mention « privé » sur une page d'accueil ne dit pas à elle seule comment les données sont conservées ou utilisées.",
        ] },
      ],
    },
    blog: { kicker: "08 / Comparatifs", heading: "Cinq choix distincts, cinq articles utiles", cta: "Voir tous les articles" },
    faq: {
      kicker: "09 / Réponses brèves", heading: "Questions fréquentes sur Spicy Chat AI",
      items: [
        { question: "Que signifie Spicy Chat AI ?", answer: "Cette recherche renvoie généralement à SpicyChat, service de conversation avec des personnages fictifs. Notre site l'explique de façon indépendante et n'offre pas de chatbot." },
        { question: "Un chat pour adultes est-il forcément sans règles ?", answer: "Non. SpicyChat interdit entre autres les contenus impliquant des mineurs, les interactions non consenties, certaines données personnelles et les représentations sexuelles de personnes réelles. Consultez les règles actuelles." },
        { question: "Les deux fonctions de mémoire sont-elles gratuites ?", answer: "Non. La grille officielle place Memory Manager et Semantic Memory 2.0 à des niveaux payants différents. Vérifiez les conditions au moment de l'achat." },
        { question: "Puis-je mettre ma photo comme avatar ?", answer: "Non selon les règles actuelles de SpicyChat : aucune photo de personne réelle, même partielle, ni image photoréaliste pouvant passer pour une vraie personne. Préférez un dessin entièrement fictif et non réaliste." },
        { question: "Quelle alternative regarder en premier ?", answer: "Character.AI pour comparer les règles, Janitor AI pour la configuration, CrushOn AI pour les coûts de modèles, PolyBuzz pour trouver des personnages et GirlfriendGPT pour la voix ou les images." },
      ],
    },
    final: { kicker: "Avant de payer", heading: "Éprouvez le récit, puis lisez les conditions", body: "Une courte scène fictive et reproductible vous apprendra davantage qu'une promesse publicitaire. Pour les règles, la disponibilité et le prix, les pages à jour du fournisseur font foi.", cta: "Accéder au site officiel SpicyChat" },
  },
  blog: {
    title: "Comparatifs Spicy Chat AI", description: "Cinq analyses de Spicy Chat AI face à Character.AI, Janitor AI, CrushOn AI, PolyBuzz et GirlfriendGPT : règles, mémoire, crédits, recherche et médias.",
    intro: "Chaque article part d'une décision différente. Vous trouverez ici un examen des règles d'écriture, de l'origine des modèles, du véritable contenu d'une offre gratuite, de la découverte de personnages ou du prix d'une expérience avec voix et images. Les conditions qui changent sont renvoyées aux sources du fournisseur. Nos méthodes de vérification proposées aux lecteurs ne sont pas des tests que nous prétendons avoir effectués sur tous les modèles.",
    kicker: "À lire avant l'inscription", listHeading: "Choisissez le point à comparer",
  },
  info: {
    about: {
      title: "À propos de Spicy Chat AI", description: "Découvrez la mission du site indépendant Spicy Chat AI et la façon dont il compare les services de chat avec personnages IA.",
      kicker: "À propos", intro: "Nous aidons les lecteurs adultes à poser les bonnes questions sur le jeu de rôle avec IA. Nous ne sommes ni l'équipe ni un service officiel de SpicyChat.",
      sections: [
        { heading: "Le contenu du site", paragraphs: ["Vous trouverez des explications sur les fiches de personnages, modèles, fenêtres de contexte, souvenirs, règles, formules et alternatives. Ce site statique n'ouvre pas de compte, n'encaisse aucun paiement, ne reçoit pas de photo et ne fait pas fonctionner un chatbot."] },
        { heading: "Indépendance", paragraphs: ["Aucune validation, représentation ou affiliation avec SpicyChat ou les autres plateformes n'est revendiquée. Les marques citées servent à identifier les produits comparés. Une fois arrivé sur un service externe, lisez ses propres conditions avant d'y communiquer des données."] },
        { heading: "Une question par comparaison", paragraphs: ["Nous retenons des critères propres à chaque paire de produits, distinguons les éléments confirmés des déductions éditoriales et évitons les résultats de tests inventés. Prix, modèles et politiques peuvent changer ; leurs sources officielles doivent être revérifiées avant un achat."] },
      ],
    },
    contact: {
      title: "Contact", description: "Comment signaler une erreur ou une question de droits à Spicy Chat AI ; la boîte e-mail du site n'est pas encore configurée.",
      kicker: "Corrections et droits", intro: "Pour proposer une correction, préparez l'URL exacte, la phrase concernée et une source primaire publiquement consultable. Ne transmettez pas vos conversations privées.",
      sections: [
        { heading: "Adresse prévue, non active", paragraphs: ["L'adresse support@spicychatai.fun est prévue pour ce projet, mais la réception des messages n'est pas encore configurée. Un courrier envoyé maintenant risque de ne pas être reçu. Cette page sera modifiée lorsque la boîte fonctionnera ; nous ne prétendons pas traiter des demandes par e-mail aujourd'hui."] },
        { heading: "Données à ne pas envoyer", paragraphs: ["N'envoyez ni mot de passe, ni code de connexion, ni document d'identité, ni adresse, ni donnée médicale ou bancaire, ni image intime, ni transcription complète du chat d'autrui. Une citation précise et un lien vérifiable suffisent."] },
      ],
    },
    "editorial-policy": {
      title: "Ligne éditoriale", description: "Méthode de recherche, sources, corrections et comparatifs indépendants de Spicy Chat AI.",
      kicker: "Notre méthode", intro: "Nous voulons aider à choisir en connaissance de cause, pas produire des pages quasi identiques pour multiplier les requêtes.",
      sections: [
        { heading: "Une affirmation, une source", paragraphs: ["Pour une règle, une fonction ou une formule, nous privilégions l'aide et les conditions publiées par le fournisseur. Une promesse de messages « illimités » ne devient pas un accès illimité à tous les modèles. Si nous n'avons pas réalisé une mesure comparative, nous ne publions ni score, ni vitesse, ni taux de réussite inventés."] },
        { heading: "Des angles qui ne se substituent pas", paragraphs: ["Character.AI pose la question des limites de contenu ; Janitor AI, celle du domaine et du modèle réellement utilisé ; CrushOn AI, celle des modèles gratuits et des crédits ; PolyBuzz, celle de la recherche et des données ; GirlfriendGPT, celle de la voix, des images et des opérateurs déclarés. Changer un nom dans un texte standard ne constituerait pas un travail original."] },
        { heading: "Fiction adulte et respect des personnes", paragraphs: ["Nos exemples mettent en scène des adultes fictifs consentants. Nous n'aidons ni à exploiter des mineurs, ni à représenter sexuellement une personne réelle, ni à réutiliser des images d'avatar interdites. Les portraits de la publication ne doivent pas être envoyés à SpicyChat comme avatars."] },
        { heading: "Révisions", paragraphs: ["Lorsqu'une source officielle change, nous réexaminons la phrase, la comparaison et ses métadonnées. Un signalement utile contient une URL primaire vérifiable. Le statut actuel de notre adresse e-mail figure sur la page Contact."] },
      ],
    },
    privacy: {
      title: "Confidentialité", description: "Données et cookies du site statique Spicy Chat AI, consentement à Google Analytics, retrait du choix et liens vers des plateformes tierces.",
      kicker: "Confidentialité", intro: "Nous ne créons aucun compte lecteur et ne stockons ici ni personnages, ni discussions, ni fichiers vocaux, ni photos importées, ni paiements.",
      sections: [
        { heading: "Accès techniques au site", paragraphs: ["Le prestataire d'hébergement et de protection peut traiter les informations techniques ordinaires d'une requête — adresse IP, navigateur, page demandée, heure et signaux de sécurité — afin de servir le site et limiter les abus. Nous ne recevons pas ce que vous écrivez dans un chat externe."] },
        { heading: "Mesure facultative", paragraphs: ["Google Analytics 4 n'est chargé qu'après votre accord explicite. Il sert alors à mesurer les pages consultées, le défilement, les clics sortants et des données générales sur l'appareil ou la provenance. La personnalisation publicitaire et Google signals sont désactivés. Les paramètres et fragments d'URL ne sont pas transmis dans l'adresse de page configurée ; le traitement peut avoir lieu hors de votre pays."] },
        { heading: "Refus, retrait et signaux du navigateur", paragraphs: ["Avant accord, aucun script Google Analytics n'est chargé. Le bouton de préférences en bas de page permet de refuser ou de retirer votre accord. Le choix est conservé jusqu'à 180 jours dans le stockage local du navigateur. Au retrait, les cookies analytiques accessibles au site sont supprimés. Global Privacy Control et Do Not Track sont respectés. Le retrait n'efface pas instantanément les données déjà traitées par un tiers."] },
        { heading: "Passage vers un autre service", paragraphs: ["Si vous ouvrez SpicyChat ou une alternative depuis un lien, ses propres conditions couvrent inscription, messages, images, voix et achat. Vérifiez-les avant de fournir des informations personnelles réelles."] },
      ],
    },
    terms: {
      title: "Conditions d'utilisation", description: "Portée informative et usage responsable des comparatifs publiés par Spicy Chat AI.",
      kicker: "Conditions d'utilisation", intro: "Le site publie des textes éditoriaux. Il ne vend pas et n'exploite pas les services de chat décrits.",
      sections: [
        { heading: "Pas de conseil personnalisé", paragraphs: ["Les articles ne remplacent pas un avis juridique, médical, financier ou psychologique individuel. Nous ne garantissons ni la sécurité, ni l'adéquation, ni le résultat d'une plateforme tierce. Ses règles et son offre actuelles priment avant toute inscription ou dépense."] },
        { heading: "Utilisation responsable", paragraphs: ["N'utilisez pas ces contenus pour harceler, contraindre, usurper une identité, exploiter des mineurs, créer des images intimes sans consentement ou porter atteinte aux droits d'autrui. Les scènes décrites supposent des adultes fictifs et des interactions consenties."] },
        { heading: "Évolutions et droits", paragraphs: ["Modèles, tarifs, fenêtres de contexte, mémoire et règles des fournisseurs évoluent. Ne copiez pas en masse nos textes, la structure des comparatifs, la mise en page ou les images en les présentant sans autorisation comme votre travail."] },
      ],
    },
  },
};
