import type { LocalizedEdition } from "./localized-pages";

// Eigenständig verfasster deutscher Entwurf. Die Datei schaltet keine URL frei.
export const deEdition: LocalizedEdition = {
  ui: {
    language: "Sprache", home: "Startseite", start: "Einstieg", controls: "Modell & Gedächtnis", compare: "Vergleiche", blog: "Artikel",
    about: "Über uns", contact: "Kontakt", editorial: "Redaktionsgrundsätze", privacy: "Datenschutz", terms: "Nutzungsbedingungen",
    official: "SpicyChat öffnen", read: "Vergleich lesen", sources: "Originalquellen", verdict: "Fazit", allArticles: "Alle Vergleiche", more: "Mehr erfahren",
    independent: "Unabhängige Redaktion; nicht Teil von SpicyChat", adults: "Informationen für Erwachsene",
    analyticsSettings: "Analyse-Einstellungen", analyticsTitle: "Freiwillige Reichweitenmessung",
    analyticsBody: "Dürfen wir Google Analytics einsetzen, um zu sehen, welche Artikel wir verbessern sollten? Wir nutzen die Daten nicht für personalisierte Werbung.",
    analyticsDecline: "Ablehnen", analyticsAccept: "Analyse erlauben", analyticsPrivacy: "Datenschutzhinweise lesen",
    analyticsStatusPrivacy: "Das Datenschutzsignal Ihres Browsers wird beachtet; die Analyse bleibt aus.",
    analyticsStatusOn: "Die Analyse ist aktiv. Sie können die Einwilligung hier jederzeit zurücknehmen.",
    analyticsStatusOff: "Die Analyse ist aus. Diese Entscheidung gilt nur für diese Website.",
    skip: "Zum Inhalt springen", navigation: "Hauptnavigation", menu: "Menü öffnen", closeMenu: "Menü schließen",
  },
  home: {
    description: "Spicy Chat AI unabhängig erklärt: KI-Charakter-Chat, Rollenspiel, Kontext, Gedächtnis, Regeln, Kosten und fünf Alternativen im Vergleich.",
    hero: {
      kicker: "Unabhängige Einordnung · ab 18",
      tagline: "Ein guter KI-Charakter braucht mehr als ein gutes Bild.",
      body: "Wer SpicyChat für längere Rollenspiele nutzt, sollte Figur, Einstiegsnachricht, Modell, Kontext und gespeicherte Erinnerung getrennt betrachten. Hier finden Sie eine nachvollziehbare Prüfmethode und fünf Vergleiche mit unterschiedlichen Schwerpunkten.",
      primary: "So vergleichen Sie", secondary: "Fünf Vergleiche",
    },
    intro: {
      kicker: "01 / Orientierung", heading: "Spicy Chat AI: Was steckt hinter der Suche?",
      lead: "SpicyChat ist ein Dienst für Chats und Rollenspiele mit fiktiven KI-Charakteren. Diese Website beschreibt das Angebot unabhängig; sie betreibt selbst keinen Chat und kein Nutzerkonto.",
      body: "Die Auswahl einer Figur ist nur der Anfang. Für einen zusammenhängenden Handlungsbogen zählen ein konkreter Konflikt, die Rolle des Gegenübers, das verwendete Modell, der jeweils verfügbare Gesprächskontext und separat gespeicherte Erinnerungen. Auch ein Angebot für Erwachsene hat Inhaltsregeln. Bevor Sie einen Charakter erstellen oder bezahlen, prüfen Sie die aktuellen Vorgaben des Anbieters und die Funktionen Ihres konkreten Tarifs.",
    },
    journey: {
      kicker: "02 / Drei Einstiege", heading: "Figur finden, Figur schreiben, Szene testen",
      description: "Wählen Sie zuerst die Art von Geschichte, die Sie erzählen möchten. Die schönsten Vorschaubilder verraten wenig über die Gesprächsqualität.",
      cards: [
        { label: "Entdecken", heading: "Die erste Nachricht lesen", body: "Achten Sie auf Schauplatz, Ziel und Anlass für Ihre Antwort. Eine leere Begrüßung lässt selbst eine aufwendige Charakterkarte blass wirken." },
        { label: "Erstellen", heading: "Eine Motivation geben", body: "Eine fiktive erwachsene Figur braucht einen Wunsch, eine Grenze und eine erkennbare Stimme – keine endlose Liste schmeichelnder Adjektive." },
        { label: "Prüfen", heading: "Nur eine Variable ändern", body: "Wechseln Sie nicht gleichzeitig Modell, Persona und Gedächtnis. Sonst lässt sich eine bessere Antwort keinem Faktor zuordnen." },
      ],
    },
    controls: {
      kicker: "03 / Gesprächsmechanik", heading: "Kontext ist nicht dasselbe wie Erinnerung",
      description: "SpicyChat nennt Kontextfenster, Memory Manager und Semantic Memory 2.0 getrennt. Welche Funktion verfügbar ist, hängt von der aktuellen Tarifstufe ab.",
      cards: [
        { label: "Charakter", heading: "Wer handelt – und warum?", body: "Die Karte und die erste Nachricht sollten ein Ziel, ein Hindernis und einen plausiblen nächsten Schritt eröffnen." },
        { label: "Modell", heading: "Wie fällt die Antwort aus?", body: "Vergleichen Sie Stil, Initiative und Widersprüche anhand derselben Szene. Verfügbare Modelle können je nach Plan variieren." },
        { label: "Kontext", heading: "Was liegt gerade vor?", body: "Der sichtbare Chatverlauf ist nicht automatisch vollständig im Kontext der nächsten Modellantwort enthalten." },
        { label: "Gedächtnis", heading: "Was bleibt zusätzlich erhalten?", body: "Memory Manager und Semantic Memory 2.0 sind unterschiedliche Funktionen und sollten nicht als eine einzige Quote beschrieben werden." },
        { label: "Tarif", heading: "Welche Funktion kostet?", body: "Prüfen Sie Modelle, Bildfunktionen, Sprachausgabe und Gedächtnis in der heutigen Tarifübersicht, nicht in einer alten Preisgrafik." },
      ],
    },
    test: {
      kicker: "04 / Reproduzierbarer Versuch", heading: "Eine kleine Szene sagt mehr als ein Werbeversprechen",
      description: "Das ist eine Anleitung für Ihren eigenen Vergleich, keine vorgetäuschte Messreihe der Redaktion.",
      steps: [
        { heading: "Zwei harmlose Details setzen", body: "Lassen Sie zwei erfundene erwachsene Figuren etwa eine Verabredung an einem fiktiven Ort und ein unverfängliches Versprechen vereinbaren." },
        { heading: "Das Thema wechseln", body: "Führen Sie ein normales Gespräch und eine kleine Meinungsverschiedenheit. Notieren Sie, ob die Figur ihre Absicht beibehält." },
        { heading: "Ohne Hinweis zurückkehren", body: "Fragen Sie später nach dem Versprechen, ohne es zu wiederholen. Halten Sie Modell, Plan, Nachrichtenanzahl und aktivierte Gedächtnisfunktionen fest." },
      ],
    },
    comparison: {
      kicker: "05 / Fünf Alternativen", heading: "Nicht jeder KI-Charakter-Chat löst dieselbe Aufgabe",
      description: "Die sinnvolle Alternative hängt davon ab, ob Sie Inhaltsregeln, Konfiguration, kostenlose Modelle, Figurensuche oder Medienfunktionen vergleichen.",
      columns: ["Angebot", "Interessant für", "Vorher prüfen"],
      baseline: ["SpicyChat", "Fiktive Rollenspiele für Erwachsene mit Modell- und Gedächtniswahl", "Kontext und Funktionen des gewählten Plans"],
      options: {
        "spicychat-vs-character-ai": ["Character.AI", "Geschichten innerhalb engerer Inhaltsregeln", "Pornografie-Verbot und aktuelle Altersregeln"],
        "spicychat-vs-janitor-ai": ["Janitor AI", "Community-Figuren und individuelle Konfiguration", "Echte Domain, Modellwahl und mögliche Fremdkosten"],
        "spicy-chat-ai-vs-crushon-ai": ["CrushOn AI", "Figurensuche und Chat mit kostenlosen Modellen", "Credits für Pro-Modelle getrennt rechnen"],
        "spicy-chat-ai-vs-polybuzz": ["PolyBuzz", "Schneller Einstieg über vorhandene Charaktere", "Regeln öffentlicher Karten und Datenschutzhinweise"],
        "spicy-chat-ai-vs-girlfriendgpt": ["GirlfriendGPT", "Begleit-Chat mit Stimme und Bildern", "Angegebene Betreiber und Medienkosten"],
      },
    },
    privacy: {
      kicker: "06 / Sichere Grenzen", heading: "Eine erfundene Geschichte braucht keine echten Geheimnisse",
      body: "Nutzen Sie für Gedächtnistests nur harmlose erfundene Szenendetails. Ein Chat löschen, gespeicherte Erinnerungen entfernen, das Konto schließen und ein Abo kündigen sind verschiedene Vorgänge. Laut SpicyChat-Hilfe wird ein extern über Google Play oder SubscribeStar abgeschlossenes Abo durch Kontolöschung nicht automatisch beendet.",
      checks: [
        "Keine echten Anschriften, E-Mail-Adressen, Gesundheits- oder Finanzangaben in Figurenkarten oder Tests verwenden – laut SpicyChat auch keine erfundenen Angaben dieser Art.",
        "Vor dem Bezahlen klären, wie Chats, Figuren, Personas und Erinnerungen gelöscht werden.",
        "Prüfen, wo das konkrete Abo abgeschlossen und gekündigt wird; Fremdplattformen haben eigene Abläufe.",
        "Keine Fotos echter Menschen oder fotorealistischen Personenbilder als SpicyChat-Avatar hochladen.",
        "Nur fiktive erwachsene Figuren und einvernehmliche Szenen innerhalb der aktuellen Regeln nutzen.",
      ],
    },
    research: {
      kicker: "07 / Vor der Entscheidung", heading: "Drei Fragen für längere KI-Rollenspiele",
      description: "Die Größe eines Charakterkatalogs hilft beim Stöbern. Ob eine Geschichte trägt, zeigt sich erst nach mehreren Wendungen.",
      blocks: [
        { heading: "Hat die Figur einen eigenen Antrieb?", paragraphs: [
          "Viele Charakterkarten klingen attraktiv, liefern aber keinen erzählerischen Anfang. Lesen Sie die erste Nachricht: Gibt es einen konkreten Anlass, eine Haltung und einen Grund, warum Ihre Antwort etwas verändert? Ein gelungenes Bild ersetzt keine Situation. Vergleichen Sie daher nicht nur die beliebtesten Portraits, sondern zwei Karten mit ähnlich klarer Ausgangslage.",
          "Wenn Sie selbst eine Figur entwerfen, schreiben Sie lieber drei präzise Sätze zu Ziel, Hindernis und Sprechweise. Lassen Sie sie erst in einer alltäglichen Unterhaltung und danach bei einer schwierigen Entscheidung reagieren. Bei einem plötzlichen Charakterbruch kann die Karte ebenso verantwortlich sein wie das Modell. Ein reales Vorbild oder Foto ist für diesen Versuch weder nötig noch nach den aktuellen Bildregeln als Avatar zulässig.",
        ] },
        { heading: "Fehlt Kontext – oder eine gespeicherte Erinnerung?", paragraphs: [
          "Kontext bezeichnet die Information, die dem Modell für die nächste Antwort zur Verfügung steht. Eine Erinnerungsfunktion verwaltet ausgewählte Fakten über den gerade berücksichtigten Gesprächsausschnitt hinaus. SpicyChat führt eine kostenlose und drei bezahlte Stufen auf; Memory Manager beginnt in einer anderen Stufe als Semantic Memory 2.0. Sichtbarer Verlauf, Kontextfenster und gespeicherte Fakten sind deshalb keine austauschbaren Größen.",
          "Lassen Sie Szene und Figur unverändert und ändern Sie nur eine Einstellung: zuerst das Modell, danach gegebenenfalls Kontext oder Gedächtnis. Notieren Sie, wann die Figur ein harmloses erzählerisches Versprechen korrekt wieder aufgreift und wann sie Hilfe benötigt. Die Tarifübersicht und der Kassenbildschirm des Anbieters sind für aktuelle Verfügbarkeit und Preis maßgeblich; ein Drittartikel kann diese nicht dauerhaft festschreiben.",
        ] },
        { heading: "Sind Bildregeln und Löschung klar?", paragraphs: [
          "Die Einordnung als Erwachsenenangebot bedeutet nicht grenzenlose Inhalte. SpicyChat verbietet unter anderem sexuelle Inhalte mit Minderjährigen oder minderjährig wirkenden Figuren, fehlende Einwilligung und die Sexualisierung identifizierbarer realer Personen. Bei Avataren sind echte Fotos, Ausschnitte daraus und täuschend realistische Personenbilder ausgeschlossen. Die redaktionellen Bilder dieser Website sind keine Vorlagen zum Hochladen.",
          "Vor einer Registrierung sollten Sie die Löschhilfe und den Kündigungsweg lesen. Eine Kontolöschung entfernt laut Hilfe Chats, Figuren, Personas, Einstellungen und Erinnerungen; ein Abo außerhalb der Website kann trotzdem weiterlaufen. Bei Alternativen gelten jeweils deren eigene Datenschutz- und Inhaltsregeln. Das Etikett „privat“ auf einer Chatoberfläche beschreibt nicht die gesamte Datenverarbeitung.",
        ] },
      ],
    },
    blog: { kicker: "08 / Vergleiche", heading: "Fünf konkrete Entscheidungen statt einer Rangliste", cta: "Alle Vergleiche ansehen" },
    faq: {
      kicker: "09 / Häufige Fragen", heading: "Spicy Chat AI knapp erklärt",
      items: [
        { question: "Was ist Spicy Chat AI?", answer: "Damit suchen viele nach SpicyChat, einem Dienst für Chats mit fiktiven KI-Charakteren. Unsere unabhängige Website erklärt Funktionen und Alternativen; hier können Sie selbst nicht chatten." },
        { question: "Heißt Erwachsenen-Rollenspiel, dass alles erlaubt ist?", answer: "Nein. SpicyChat nennt klare Verbote, unter anderem für Minderjährige, fehlende Einwilligung, persönliche Daten und die Sexualisierung realer Menschen. Lesen Sie die aktuelle Richtlinie." },
        { question: "Sind beide Gedächtnisfunktionen kostenlos?", answer: "Nein. Die derzeitige offizielle Tarifübersicht führt Memory Manager und Semantic Memory 2.0 in unterschiedlichen bezahlten Stufen. Prüfen Sie vor dem Kauf den aktuellen Stand." },
        { question: "Darf ich ein eigenes Foto als Avatar nutzen?", answer: "Nach der aktuellen SpicyChat-Bildregel sind Fotos echter Menschen, auch Ausschnitte, und täuschend echte Personenbilder nicht zulässig. Erlaubt ist vollständig fiktive, nicht-realistische Gestaltung." },
        { question: "Welche Alternative sollte ich zuerst ansehen?", answer: "Das hängt vom Ziel ab: Character.AI für Inhaltsregeln, Janitor AI für Konfiguration, CrushOn AI für Modellkosten, PolyBuzz für die Figurensuche und GirlfriendGPT für Stimme und Bilder." },
      ],
    },
    final: { kicker: "Vor dem Abschluss", heading: "Testen Sie die Geschichte, dann prüfen Sie den Tarif", body: "Eine kurze fiktive Szene macht Stärken und Grenzen sichtbarer als ein Schlagwort. Regeln, Funktionsumfang und tatsächlichen Preis bestätigt der Anbieter auf seinen aktuellen Seiten.", cta: "Offizielles SpicyChat öffnen" },
  },
  blog: {
    title: "Spicy Chat AI im Vergleich", description: "Fünf eigenständige Vergleiche von Spicy Chat AI mit Character.AI, Janitor AI, CrushOn AI, PolyBuzz und GirlfriendGPT: Regeln, Modelle, Gedächtnis und Kosten.",
    intro: "Diese Artikel sind keine fünf umbenannten Top-Listen. Jeder behandelt eine andere Kauf- oder Nutzungsfrage: Welche Handlung ist erlaubt? Welches Modell steckt hinter dem Chat? Was kostet eine lange Geschichte? Wie findet man passende Figuren? Und was verändert Stimme oder Bild? Für veränderliche Produktangaben verweisen wir auf aktuelle Originalquellen; vorgeschlagene Lesertests sind keine behaupteten Labormessungen.",
    kicker: "Vor der Registrierung lesen", listHeading: "Wählen Sie Ihre Vergleichsfrage",
  },
  info: {
    about: {
      title: "Über Spicy Chat AI", description: "Wofür die unabhängige Website Spicy Chat AI steht, was sie vergleicht und warum sie kein offizieller SpicyChat-Dienst ist.",
      kicker: "Über diese Website", intro: "Wir erklären Erwachsenen, wie sie KI-Charakter-Chats anhand von Geschichten, Funktionen und Regeln beurteilen können. Wir betreiben SpicyChat nicht.",
      sections: [
        { heading: "Was Sie hier finden", paragraphs: ["Die Artikel erklären Charakterkarten, Modelle, Kontext, Gedächtnis, Preise und Alternativen anhand konkreter Entscheidungen. Diese statische Website bietet weder Chatkonten noch Zahlungen, Uploads oder Bildgenerierung."] },
        { heading: "Unabhängigkeit und Marken", paragraphs: ["Wir vertreten weder SpicyChat noch die verglichenen Anbieter und behaupten keine Partnerschaft oder Freigabe. Externe Links führen zum jeweiligen Dienst mit eigenen Bedingungen. Die Produktnamen dienen der sachlichen Zuordnung, nicht einer Verwechslungsabsicht."] },
        { heading: "Woran wir Vergleiche messen", paragraphs: ["Jedes Paar hat einen eigenen Schwerpunkt. Wir trennen belegte Funktionen von redaktionellen Schlussfolgerungen, erfinden keine Testwerte und veröffentlichen schwankende Preise nicht als zeitlose Tatsache. Maßgeblich sind die verlinkten Originaldokumente und das aktuelle Angebot beim Anbieter."] },
      ],
    },
    contact: {
      title: "Kontakt", description: "Hinweise zu Fehlern oder Rechten auf Spicy Chat AI; der vorgesehene E-Mail-Empfang ist derzeit noch nicht eingerichtet.",
      kicker: "Korrekturen & Rechte", intro: "Für eine spätere Korrekturanfrage reichen Seitenadresse, beanstandete Aussage und eine öffentlich zugängliche Originalquelle. Private Chats brauchen wir nicht.",
      sections: [
        { heading: "Vorgesehene Adresse", paragraphs: ["Die Adresse support@spicychatai.fun ist vorgesehen, kann derzeit aber noch keine verlässlich zugestellten Nachrichten empfangen. Bitte gehen Sie nicht davon aus, dass eine jetzt gesendete E-Mail ankommt. Wir aktualisieren diese Seite, sobald der Empfang eingerichtet ist."] },
        { heading: "Keine sensiblen Inhalte senden", paragraphs: ["Bitte übermitteln Sie keine Passwörter, Bestätigungscodes, Ausweise, Anschriften, Gesundheitsangaben, intimen Bilder oder vollständige Gesprächsverläufe anderer Personen. Eine genaue Textstelle und überprüfbare Quelle genügen."] },
      ],
    },
    "editorial-policy": {
      title: "Redaktionsgrundsätze", description: "Wie Spicy Chat AI Quellen prüft, Fehler korrigiert und produktbezogene Vergleiche ohne erfundene Ergebnisse erstellt.",
      kicker: "Unsere Arbeitsweise", intro: "Ein Vergleich soll eine echte Auswahl erleichtern, nicht dieselbe Vorlage mit wechselndem Produktnamen in Suchergebnisse bringen.",
      sections: [
        { heading: "Originalquellen und Unsicherheit", paragraphs: ["Für Regeln, Tarife und Funktionen nutzen wir zunächst offizielle Hilfeseiten, Nutzungsbedingungen und Produktseiten. Wir legen offen, wenn Angaben unklar oder veränderlich sind. Einen vorgeschlagenen Selbstversuch geben wir nie als bereits durchgeführten Test aus; wir veröffentlichen keine ausgedachten Leistungswerte."] },
        { heading: "Eigenständige Vergleichsfragen", paragraphs: ["Bei Character.AI stehen Inhaltsregeln im Zentrum, bei Janitor AI Domain und Modellkonfiguration, bei CrushOn AI kostenlose Modelle und Pro-Credits, bei PolyBuzz Figurensuche und Datenfragen, bei GirlfriendGPT Medienfunktionen und die offengelegte Betreiberüberschneidung. Nur den Konkurrentennamen auszutauschen wäre keine neue Recherche."] },
        { heading: "Erwachsene, Einwilligung und Bilder", paragraphs: ["Wir sprechen über erfundene erwachsene Figuren und einvernehmliche Interaktionen. Minderjährige, die Sexualisierung realer Menschen und verbotene Avatare haben hier keinen Platz. Redaktionelle Portraits sind nicht als SpicyChat-Avatare freigegeben."] },
        { heading: "Korrekturen", paragraphs: ["Ändert ein Anbieter seine Regeln oder Leistungen, prüfen wir die betroffene Passage neu. Für einen Hinweis benötigen wir eine überprüfbare Quelle; der gegenwärtige Status der vorgesehenen E-Mail-Adresse steht unter Kontakt."] },
      ],
    },
    privacy: {
      title: "Datenschutz", description: "Automatisches Google Analytics, Cookies, erkennbare Bots und Datenschutzeinstellungen des Browsers.",
      kicker: "Datenschutz", intro: "Wir führen hier keine Nutzerkonten und speichern keine Charaktere, Chats, Sprachdateien, hochgeladenen Bilder oder Zahlungen unserer Leser.",
      sections: [{"heading":"Auslieferung und Sicherheit","paragraphs":["Der Hosting- und Sicherheitsanbieter kann übliche technische Zugriffsdaten wie IP-Adresse, Browser, aufgerufene URL, Zeitpunkt und Sicherheitssignale zur Auslieferung und Missbrauchsabwehr verarbeiten. Daten, die Sie in einem externen Charakter-Chat eingeben, erhalten wir dadurch nicht."]},{"heading":"Automatische Messung mit Google Analytics","paragraphs":["Google Analytics 4 startet automatisch, wenn eine Seite in einem normalen Browser geöffnet wird. Erfasst werden Seitenaufrufe, Scrollen, Klicks auf externe Links, Geräteinformationen und Zugriffsquellen. Analyse-Cookies laufen nach 180 Tagen ab und können bei Nutzung erneuert werden. Google kann Daten außerhalb deines Landes verarbeiten. Google signals, personalisierte Werbung und Werbespeicherung sind deaktiviert."]},{"heading":"Cookies, Datenschutz und automatisierte Zugriffe","paragraphs":["GA4 schließt bekannte Bots automatisch aus. Auch diese Website überspringt erkennbare Crawler und Browser, die sich ausdrücklich als automatisiert melden. Nicht alle Bots, die Menschen imitieren, können erkannt werden. Wir beachten Global Privacy Control, Do Not Track und die Google-Analytics-Deaktivierung im Browser. Die konfigurierte Seitenadresse enthält keine Abfrageparameter oder Fragmente; Verweisadressen werden auf ihren Ursprung reduziert. Chats, Prompts, Dateien und Formularinhalte werden nicht gesendet. Das Löschen von Cookies entfernt keine bereits von Google verarbeiteten Daten."]},{"heading":"Andere Websites","paragraphs":["Wenn Sie einem Link zu SpicyChat oder einem Vergleichsangebot folgen, gelten dort eigene Regeln für Konten, Gespräche, Bilder, Stimme und Käufe. Lesen Sie diese, bevor Sie personenbezogene Angaben machen."]}],
    },
    terms: {
      title: "Nutzungsbedingungen", description: "Informationszweck und verantwortliche Nutzung der unabhängigen Inhalte auf Spicy Chat AI.",
      kicker: "Nutzungsbedingungen", intro: "Diese Website veröffentlicht redaktionelle Informationen und verkauft oder betreibt keinen der beschriebenen Charakter-Chat-Dienste.",
      sections: [
        { heading: "Keine individuelle Beratung", paragraphs: ["Unsere Artikel sind keine Rechts-, Medizin-, Finanz- oder psychologische Beratung. Wir garantieren weder die Sicherheit noch die Eignung oder ein bestimmtes Ergebnis bei Drittangeboten. Vor Registrierung und Zahlung sind deren aktuelle Bedingungen zu prüfen."] },
        { heading: "Verantwortungsvoller Umgang", paragraphs: ["Nutzen Sie die Inhalte nicht für Belästigung, Zwang, Identitätsmissbrauch, Ausbeutung Minderjähriger, nicht einvernehmliche intime Bilder oder Verstöße gegen Persönlichkeitsrechte. Erwähnte Beispielszenen betreffen ausschließlich fiktive Erwachsene und freiwillige Interaktionen."] },
        { heading: "Änderungen und Urheberrecht", paragraphs: ["Modelle, Tarife, Kontext, Gedächtnis und Regeln anderer Anbieter können sich ändern. Übernehmen Sie unsere Texte, Vergleichsstruktur, Gestaltung oder Bilder nicht massenhaft und geben Sie sie nicht ohne Erlaubnis als eigene Arbeit aus."] },
      ],
    },
  },
};
