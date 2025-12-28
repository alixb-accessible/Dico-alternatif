/* ========================================
   BASE DE DONNÉES COMPLÈTE DU DICTIONNAIRE
   Tous les termes, expressions et alternatives
   ======================================== */

const DICTIONARY = {
    // ========== A ==========
    "abruti": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un qui manque de jugement ou de réflexion",
        problematique: "Terme qui suggère qu'une personne a été 'abrutie', c'est-à-dire rendue semblable à une brute, à un animal. Historiquement lié aux classifications des déficiences intellectuelles et à l'idée d'une régression mentale.",
        alternatives: {
            "Vieux français élégant": ["Bélître", "Butor", "Malotru", "Maraud", "Pignouf", "Mufle", "Goujat", "Faquin", "Cuistre", "Paltoquet", "Olibrius", "Foutriquet", "Ganache"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Nouille", "Navet", "Gland"],
            "Pour critiquer un comportement précis": ["Tu agis sans réfléchir", "C'est irréfléchi", "Inconsidéré", "Imprudent"],
            "Inventions satiriques": ["Nodocéphale", "Crétinocéphale", "Malapraxique", "Autopraxique"],
            "Créatives": ["Emplâtre"],
            "Alsacien": ["Stinkmichel"],
            "Normand": ["Grand sicot (vaurien)"]
        }
    },

    "ahuri": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de surpris ou qui semble dépassé",
        problematique: "Étymologiquement lié à 'hure' (tête d'animal), le terme a été utilisé pour désigner des personnes avec des déficiences intellectuelles, suggérant une expression faciale 'vide'.",
        alternatives: {
            "Descriptions factuelles": ["Étonné", "Surpris", "Stupéfait", "Ébahi", "Médusé", "Pantois", "Déconcerté", "Décontenancé", "Interloqué", "Déstabilisé", "Bouche bée", "Éberlué", "Sidéré"],
            "Autres": ["Dans les nuages", "Rêveur", "Distrait"],
            "Inventions": ["Somnambulogue (dit des bêtises en parlant dans le vide)"]
        }
    },

    "aliéné": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de complètement déconnecté de la réalité",
        problematique: "Terme psychiatrique historique désignant les personnes atteintes de troubles mentaux, souvent enfermées dans des 'asiles d'aliénés'. L'utiliser comme insulte stigmatise les personnes ayant des problèmes de santé mentale.",
        alternatives: {
            "Descriptions": ["Déconnecté", "Décalé", "Sur une autre planète", "Irrationnel", "Incohérent", "Décousu", "Confus"],
            "Poétiques": ["Absurde", "Extravagant", "Fantasque", "Baroque", "Esprit vagabond", "Tête ailleurs"],
            "Inventions": ["Crepusculier (agit dans l'ombre, obscur)", "Fumigophore (qui brouille les esprits)"]
        }
    },

    "allumé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de bizarre, excentrique, pas net",
        problematique: "Métaphore électrique suggérant un dysfonctionnement cérébral, un 'court-circuit' mental.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Atypique", "Singulier", "Audacieux", "Téméraire", "Sans limites", "Fantaisiste", "Farfelu", "Loufoque"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfelucratique", "Histrioncule"]
        }
    },

    "alzheimer": {
        types: ["saniste", "validiste", "agiste"],
        intention: "Se moquer de quelqu'un qui oublie quelque chose",
        problematique: "Banalise une maladie neurodégénérative grave et handicapante. Triple discrimination : saniste + validiste + âgiste.",
        alternatives: {
            "Descriptions": ["Distrait", "Étourdi", "Tête en l'air", "Qui a oublié", "A eu un trou de mémoire", "Ailleurs", "Dans la lune"],
            "Constat factuel": ["Tu as oublié (simple constat factuel)"]
        }
    },

    "amputé de": {
        types: ["validiste"],
        intention: "Dire que quelqu'un manque complètement d'une capacité (ex: amputé du cerveau)",
        problematique: "Utilise le handicap physique (amputation) comme métaphore négative, ce qui dévalorise les personnes amputées.",
        alternatives: {
            "Descriptions": ["Dépourvu de", "Dénué de", "Privé de", "Exempt de", "Manque cruellement de", "En carence de", "Vide de", "Sans trace de"]
        }
    },

    "amoindri": {
        types: ["validiste"],
        intention: "Suggérer qu'une personne a des capacités cognitives réduites",
        problematique: "Euphémismes médicaux détournés pour désigner des personnes avec déficiences intellectuelles ou troubles mentaux.",
        alternatives: {
            "Descriptions comportementales": ["Décrire le comportement précis sans référence médicale"],
            "Si difficulté réelle": ["A du mal avec [chose précise]", "A besoin d'aide pour [chose précise]"]
        }
    },

    "anormal": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un ou quelque chose qui sort de la norme",
        problematique: "Ancien terme médical français (équivalent de 'subnormal' anglais) pour désigner les personnes avec déficiences. Normalise l'idée qu'il existe une 'norme' humaine.",
        alternatives: {
            "Descriptions": ["Inhabituel", "Atypique", "Hors norme", "Singulier", "Différent", "Original", "Unique", "Non conventionnel", "Non conforme", "Inédit", "Rare", "Exceptionnel"]
        }
    },

    "araignée au plafond": {
        types: ["saniste"],
        intention: "Dire que quelqu'un est un peu fou, bizarre",
        problematique: "Métaphore du dysfonctionnement mental, suggère quelque chose qui 'cloche' dans la tête.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Fantaisiste", "Olibrius", "A des idées inhabituelles", "Une pensée créative", "Hors des sentiers battus"],
            "Inventions": ["Farfadocieux"]
        }
    },

    "arriéré": {
        types: ["validiste"],
        intention: "Qualifier des idées de dépassées ou une personne de lente",
        problematique: "Ancien terme médical pour désigner les personnes ayant une déficience intellectuelle ('arriération mentale').",
        alternatives: {
            "Pour des idées": ["Rétrograde", "Réactionnaire", "Conservateur", "Archaïque", "Dépassé", "Obsolète", "Anachronique", "Fossilisé"],
            "Pour une personne lente": ["Prend son temps", "Posé", "Contemplatif", "Peu pressé"],
            "Inventions": ["Blancristocrate (nostalgique d'une société figée)", "Patriomonarchiste", "Obscurantule (qui obscurcit les faits)"]
        }
    },

    "asile": {
        types: ["saniste"],
        intention: "Dire que quelqu'un est fou, devrait être enfermé",
        problematique: "Référence aux asiles psychiatriques, lieux d'enfermement et de maltraitance historiques. Menace implicite d'enfermement.",
        alternatives: {
            "Si comportement problématique": ["Décrire le comportement sans menace"],
            "Si étrange": ["Déconcertant", "Déroutant", "Surprenant"],
            "IMPORTANT": ["Ne JAMAIS menacer d'enfermement psychiatrique"]
        }
    },

    "attardé": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de lent à comprendre",
        problematique: "Ancienne expression médicale ('retard mental') détournée en insulte. Discrimine les personnes ayant une déficience intellectuelle.",
        alternatives: {
            "Descriptions": ["Lent", "Qui prend son temps", "Posé", "Contemplatif", "Distrait", "Ailleurs", "Dans la lune", "Songeur", "Rêveur", "Peu pressé", "Qui ne se précipite pas"]
        }
    },

    "attardé mental": {
        types: ["validiste"],
        intention: "Variante aggravée d'attardé, utilisée pour insulter l'intelligence",
        problematique: "Reprend directement la terminologie médicale obsolète ('retard mental') pour en faire une insulte. Doublement violent car explicite le lien avec la déficience intellectuelle.",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Maraud", "Malotru", "Faquin", "Paltoquet", "Ganache"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Navet", "Gland"],
            "Pour un comportement": ["Irréfléchi", "Inconsidéré", "Imprudent", "Absurde"],
            "Inventions": ["Nodocéphale", "Malapraxique", "Verboplecte (s'emmêle dans ses mots)"],
            "IMPORTANT": ["Ne JAMAIS utiliser de terminologie médicale comme insulte"]
        }
    },

    "autisme": {
        types: ["validiste"],
        intention: "Qualifier une institution, un gouvernement de replié sur soi (ex: l'autisme de ce gouvernement)",
        problematique: "Détourne un diagnostic médical en métaphore politique négative. Renforce les stéréotypes sur l'autisme (repli, incommunicabilité).",
        alternatives: {
            "Descriptions": ["Fermé sur soi", "Replié", "Isolé", "Sourd aux critiques", "Imperméable au dialogue", "Refus de communiquer", "Absence de dialogue", "En vase clos", "Coupé du réel"]
        }
    },

    "autiste": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de replié sur soi, sans empathie, incompréhensible",
        problematique: "Détourne un diagnostic médical en insulte et véhicule des stéréotypes totalement FAUX sur l'autisme. Les personnes autistes ont de l'empathie (elle s'exprime différemment), ne sont pas des 'monstres', et sont des êtres humains à part entière avec des modes de communication différents.",
        alternatives: {
            "Descriptions": ["Peu sociable", "Réservé", "Discret", "Introverti", "Solitaire", "Peu bavard", "Taciturne", "Silencieux", "Laconique", "Concentré sur ses intérêts", "Absorbé", "Focalisé", "Renfermé", "Peu communicatif", "Distant"],
            "Si manque d'empathie réel": ["Insensible", "Froid", "Indifférent"],
            "Élégantes": ["Ermite mondain", "Misanthrope"],
            "Inventions": ["Autopraxique (agit toujours seul, incapable de coopérer)"]
        }
    },

    "autiste de merde": {
        types: ["validiste"],
        intention: "Variante aggravée et haineuse d'autiste, utilisée pour insulter violemment",
        problematique: "Combine validisme et violence verbale extrême. Déshumanise totalement les personnes autistes et véhicule une haine pure envers le handicap. Absolument inacceptable.",
        alternatives: {
            "Vieux français corsé": ["Faquin", "Goujat", "Mufle", "Pignouf", "Maraud", "Gredin", "Forban", "Ribaud"],
            "Créole": ["Makro", "Isalòp", "Kanay", "Malfézan"],
            "MIEUX": ["Critiquer le comportement précis plutôt que la personne"]
        }
    },

    "avc": {
        types: ["saniste", "validiste"],
        intention: "Exagérer le stress ou l'énervement de quelqu'un (il va faire un AVC)",
        problematique: "Banalise un accident vasculaire cérébral, condition médicale grave qui peut être mortelle ou laisser des séquelles lourdes.",
        alternatives: {
            "Descriptions": ["Il est très stressé", "Très énervé", "Il va exploser", "Il est au bord de la crise de nerfs", "Il est sous pression", "À bout"]
        }
    },

    "aveugle": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un qui refuse de voir l'évidence (être aveugle à)",
        problematique: "Utilise le handicap visuel comme métaphore de l'ignorance volontaire.",
        alternatives: {
            "Descriptions": ["Ignore volontairement", "Nie l'évidence", "Imperméable à", "Fermé à", "Indifférent à", "Être déconnecté de la réalité de", "Obstiné", "Têtu", "Fermé au dialogue", "Fermé à la remise en question", "Rigide", "Inflexible", "Dogmatique", "Fermé", "Campé sur ses positions"],
            "Créatives": ["Se tenir dans l'ombre du déni"],
            "Inventions": ["Obscurantule (qui obscurcit les faits)", "Sofocrate (se croit sage et impose ses idées)"]
        }
    },

    "aveuglé par": {
        types: ["validiste"],
        intention: "Dire que quelqu'un est obnubilé par quelque chose au point de perdre son jugement",
        problematique: "Utilise le handicap visuel comme métaphore de l'aveuglement mental ou émotionnel.",
        alternatives: {
            "Descriptions": ["Obnubilé par", "Obsédé par", "Consumé par", "Dominé par", "Submergé par", "Envahi par", "Prisonnier de", "Captif de", "Empêtré dans", "A perdu son discernement face à", "Son jugement est altéré par"],
            "Créatives": ["Noyé dans", "Englué dans", "Envoûté par"],
            "Inventions": ["Doxomane (obsédé par l'opinion d'autrui)"]
        }
    },

    "avoir oublié ses médicaments": {
        types: ["saniste"],
        intention: "Moquer un comportement jugé anormal en suggérant un besoin de médication psychiatrique",
        problematique: "Se moque du besoin de soins psychiatriques, stigmatise la prise de psychotropes, renforce la honte associée aux traitements de santé mentale.",
        alternatives: {
            "Descriptions factuelles": ["Décrire simplement le comportement sans référence médicale", "Tu sembles agité, tout va bien ?", "Ce comportement me surprend, qu'est-ce qui se passe ?", "Tu as l'air contrarié, préoccupé"],
            "MIEUX": ["Ne pas moquer, mais exprimer une préoccupation sincère ou décrire factuellement"]
        }
    },

    "avoir un grain": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de légèrement étrange ou bizarre",
        problematique: "Compare le cerveau à une machine défectueuse ou incomplète. Stigmatise les différences neurologiques et la santé mentale.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Atypique", "Singulier", "Fantaisiste", "Farfelu", "Loufoque", "Fantasque", "Décalé", "À part", "Hors norme"],
            "Vieux français": ["Olibrius", "Drôle de numéro", "Drôle d'oiseau", "Drôle de pistolet"],
            "Inventions": ["Farfadocieux (rusé et prétentieux)"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"],
            "Corse": ["O carnavà (carnaval, pour quelqu'un d'extravagant)"]
        }
    },

    "avoir un petit vélo dans la tête": {
        types: ["saniste"],
        intention: "Dire que quelqu'un a des idées bizarres, fonctionne différemment",
        problematique: "Suggère un dysfonctionnement mental, ridiculise les différences de pensée.",
        alternatives: {
            "Descriptions": ["A des idées originales", "Une pensée créative", "Fonctionne différemment", "A sa propre logique", "Excentrique", "Fantaisiste", "Original"],
            "Vieux français": ["Olibrius", "Drôle de numéro"],
            "Inventions": ["Farfelucratique (bureaucrate fou)", "Histrioncule (petit acteur prétentieux)"]
        }
    }
},
// ========== B ==========
    "bancal": {
        types: ["validiste"],
        intention: "Qualifier un raisonnement comme instable",
        problematique: "Décrit à l'origine une personne ayant les jambes arquées ou une démarche atypique. L'utiliser pour des concepts abstraits normalise l'idée que différence physique = défaut.",
        alternatives: {
            "Pour un concept (pas une personne)": ["Fragile", "Précaire", "Branlant", "Chancelant", "Peu solide", "Défaillant", "Vacillant", "Incomplet", "Lacunaire", "Troué", "Percé", "Mal conçu", "Mal fichu", "Mal foutu", "Mal construit"],
            "Élégantes": ["Spécieux", "Fallacieux", "Captieux", "Sophistique"],
            "NOTE": ["'Instable' peut être problématique si appliqué à une personne (connotation saniste)"]
        }
    },

    "barjot": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'excentrique ou de déjanté",
        problematique: "Verlan de 'jobard', mais surtout utilisé comme synonyme de 'fou'. Stigmatise les comportements hors norme.",
        alternatives: {
            "Descriptions": ["Excentrique", "Déjanté", "Décalé", "Original", "Extravagant", "Exubérant", "Débridé", "Flamboyant", "Audacieux", "Téméraire", "Hors des clous"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfelucratique", "Histrioncule"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "bébé": {
        types: ["validiste"],
        intention: "Rabaisser un adulte en le traitant comme un enfant (infantilisation)",
        problematique: "Infantilise les adultes, particulièrement utilisé contre les personnes handicapées. Nie leur autonomie et leur maturité.",
        alternatives: {
            "Si vraiment pertinent": ["Immature", "Puéril (si comportement enfantin)"],
            "Si c'est le comportement": ["Irresponsable", "Peu sérieux"],
            "MIEUX": ["Décrire le comportement précis sans infantiliser"]
        }
    },

    "benêt": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de simple, naïf, un peu bête",
        problematique: "Anciens termes pour désigner les personnes avec déficiences intellectuelles. 'Benêt' vient de 'benedictus' (béni), euphémisme pour déficience.",
        alternatives: {
            "Descriptions": ["Naïf", "Crédule", "Candide (si c'est vraiment le cas)", "Peu méfiant", "Confiant"],
            "Vieux français": ["Bélître", "Butor", "Jobastre (occitan)"],
            "Si maladroit socialement": ["Maladroit", "Gauche"]
        }
    },

    "bigleux": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un qui ne voit pas bien ou qui manque d'observation",
        problematique: "Se moque des personnes malvoyantes ou ayant des troubles de la vision.",
        alternatives: {
            "Descriptions": ["Peu observateur", "Distrait", "Tête en l'air", "Qui rate des détails", "Peu attentif", "Dans les nuages", "Ailleurs"],
            "Inventions": ["Pifomètreur (qui juge tout à vue de nez)", "Filigranophile (amoureux des détails inutiles, ironique ici)"]
        }
    },

    "bipolaire": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de changeant, d'humeur instable",
        problematique: "Détourne un trouble psychiatrique sérieux (trouble bipolaire) en insulte banale.",
        alternatives: {
            "Descriptions": ["Changeant", "Versatile", "Capricieux", "D'humeur variable", "Imprévisible", "Contradictoire", "Ambivalent", "Partagé"],
            "Poétiques": ["Girouette", "Caméléon d'humeur", "Lune changeante"],
            "NOTE": ["'Instable' peut être problématique si appliqué à l'humeur d'une personne (connotation saniste)"]
        }
    },

    "boiteux": {
        types: ["validiste"],
        intention: "Qualifier un raisonnement de faible",
        problematique: "Utilise le handicap moteur comme métaphore du défaut.",
        alternatives: {
            "Pour un raisonnement (pas une personne)": ["Fragile", "Chancelant", "Branlant", "Peu convaincant", "Défaillant", "Lacunaire", "Incomplet", "Troué", "Percé", "Spécieux", "Fallacieux", "Douteux", "Fumeux"]
        }
    },

    "boitiller": {
        types: ["validiste"],
        intention: "Dire que quelque chose avance difficilement, de manière hésitante",
        problematique: "Utilise une démarche liée au handicap moteur comme métaphore négative.",
        alternatives: {
            "Descriptions": ["Avancer difficilement", "Péniblement", "Progresser par à-coups", "De manière irrégulière", "Hésiter", "Tâtonner"]
        }
    },

    "bon pour la camisole": {
        types: ["saniste"],
        intention: "Dire que quelqu'un devrait être maîtrisé, calmé de force",
        problematique: "Référence aux camisoles de force et à la contention chimique, pratiques psychiatriques coercitives. Menace implicite.",
        alternatives: {
            "Si agitation réelle": ["Agité", "Survolté", "Très énergique"],
            "IMPORTANT": ["Ne JAMAIS menacer de contention ou de médication forcée"]
        }
    },

    "borgne": {
        types: ["validiste"],
        intention: "Désigner quelque chose d'incomplet (dans expressions comme 'au royaume des aveugles...')",
        problematique: "Utilise un handicap visuel comme métaphore négative.",
        alternatives: {
            "Pour un concept (pas une personne)": ["Incomplet", "Partiel", "Limité", "Restreint", "Unilatéral", "Partial", "Biaisé", "Étroit"]
        }
    },

    "borderline": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'instable émotionnellement, imprévisible",
        problematique: "Détourne un trouble complexe (trouble de la personnalité limite) en insulte, renforce la stigmatisation.",
        alternatives: {
            "Descriptions": ["Émotif", "D'une grande intensité émotionnelle", "Aux réactions vives", "À la sensibilité à fleur de peau", "Imprévisible émotionnellement", "Changeant", "Versatile"],
            "Poétiques": ["Cœur à vif", "Tempérament de braise"],
            "Inventions": ["Vexibond (qui s'indigne pour un rien)", "Tremblacieux (qui tremble de façon excessive)"],
            "NOTE": ["Éviter 'instable' appliqué à une personne (connotation saniste)"]
        }
    },

    "bug": {
        types: ["validiste", "saniste"],
        intention: "Dire que quelqu'un a un moment de confusion, ne suit plus (métaphore informatique)",
        problematique: "Compare le cerveau humain à un ordinateur défectueux. Déshumanise.",
        alternatives: {
            "Descriptions": ["Confus", "Perdu", "Désorienté momentanément", "A un trou", "Un blanc", "Ne suit plus", "A décroché", "Fatigué", "Saturé"]
        }
    },

    // ========== C ==========
    "cacochyme": {
        types: ["validiste", "agiste"],
        intention: "Qualifier quelqu'un de faible, maladif (terme vieilli)",
        problematique: "Terme médical ancien pour personnes affaiblies par l'âge ou la maladie. Stigmatise la faiblesse physique.",
        alternatives: {
            "Si vraiment pertinent factuellement": ["Affaibli", "Fragilisé (par maladie/âge)"],
            "MIEUX": ["Ne pas utiliser ce terme qui est intrinsèquement validiste"]
        }
    },

    "cancéreux": {
        types: ["saniste"],
        intention: "Qualifier quelque chose de toxique, qui se propage (métaphore)",
        problematique: "Utilise une maladie grave comme métaphore négative.",
        alternatives: {
            "Pour un concept (pas une personne)": ["Toxique", "Nuisible", "Délétère", "Pernicieux", "Nocif", "Destructeur", "Ravageur", "Dévastateur", "Corrosif", "Contagieux", "Qui se propage", "Contaminant", "Virulent"],
            "Élégantes": ["Pestilentiel", "Miasmatique", "Putride"]
        }
    },

    "caractériel": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de difficile, qui a mauvais caractère",
        problematique: "Ancien terme psychiatrique ('troubles du caractère') détourné. Pathologise des traits de personnalité ou réactions émotionnelles.",
        alternatives: {
            "Descriptions": ["Difficile", "Peu accommodant", "Peu conciliant", "De mauvaise humeur", "Irritable", "Irascible", "Qui s'emporte facilement", "Colérique"],
            "Vieux français": ["Bourru", "Bougon"]
        }
    },

    "cerveau d'oiseau": {
        types: ["validiste"],
        intention: "Se moquer de l'intelligence de quelqu'un",
        problematique: "Compare le cerveau humain à un cerveau animal (spécisme) ou à un cerveau défaillant (validisme).",
        alternatives: {
            "Descriptions": ["Peu perspicace", "Peu clairvoyant"],
            "Vieux français": ["Bélître", "Butor", "Ganache"],
            "Inventions": ["Nodocéphale", "Crétinocéphale"],
            "IMPORTANT": ["Ne JAMAIS utiliser d'analogie animale ou de référence à un cerveau défaillant"]
        }
    },

    "cinglé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de déraisonnable",
        problematique: "Associe les troubles mentaux à la folie ridicule.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Atypique", "Singulier", "Audacieux", "Téméraire", "Imprudent", "Impétueux", "Farfelu", "Loufoque", "Fantasque", "Baroque", "Déraisonnable", "Extravagant", "Démesuré"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfelucratique", "Histrioncule"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "claqué": {
        types: ["saniste"],
        intention: "Dire qu'on est épuisé ou que quelqu'un est bizarre",
        problematique: "Suggère un cerveau 'cassé'.",
        alternatives: {
            "Si fatigue": ["Épuisé", "Éreinté", "Exténué", "Vidé", "Lessivé", "À plat", "Fourbu", "Rompu", "Au bout du rouleau", "Vanné"],
            "Si comportement": ["Excentrique", "Décalé", "Original", "Atypique"]
        }
    },

    "clopin-clopant": {
        types: ["validiste"],
        intention: "Décrire quelque chose qui avance difficilement",
        problematique: "Fait référence à une démarche claudicante.",
        alternatives: {
            "Descriptions": ["Péniblement", "Difficilement", "Laborieusement", "Tant bien que mal", "De manière irrégulière", "Par à-coups", "Par soubresauts"]
        }
    },

    "comateux": {
        types: ["saniste", "validiste"],
        intention: "Dire que quelqu'un est très fatigué, amorphe",
        problematique: "Utilise un état médical grave (coma) comme métaphore de fatigue. Déshumanise les personnes en coma.",
        alternatives: {
            "Descriptions": ["Très fatigué", "Épuisé", "Exténué", "Amorphe", "Léthargique", "Sans énergie", "Somnolent", "Ensommeillé"]
        }
    },

    "contrefait": {
        types: ["validiste"],
        intention: "Décrire quelque chose de mal fait, déformé (ou insulter l'apparence physique)",
        problematique: "Termes historiques pour désigner les personnes avec des différences physiques. Extrêmement stigmatisants.",
        alternatives: {
            "Pour un objet/concept": ["Altéré", "Dénaturé", "Mal conçu"],
            "IMPORTANT": ["Ne JAMAIS utiliser pour une personne"]
        }
    },

    "court-circuiter": {
        types: ["validiste", "saniste"],
        intention: "Dire que quelqu'un a un moment de confusion, que son cerveau 'plante'",
        problematique: "Métaphore électrique du dysfonctionnement cérébral.",
        alternatives: {
            "Descriptions": ["Confus", "Perdu momentanément", "A un trou", "Un blanc", "Fatigué", "Saturé"]
        }
    },

    "crétin": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de peu réfléchi",
        problematique: "Terme médical historique désignant une déficience intellectuelle liée à des troubles thyroïdiens (crétinisme).",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Malotru", "Maraud", "Faquin", "Paltoquet", "Cuistre", "Goujat", "Foutriquet", "Ganache"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Navet", "Nouille", "Gland"],
            "Pour un comportement": ["Irréfléchi", "Inconsidéré", "Imprudent", "Peu judicieux"],
            "Absurde": ["Ridiculement imprudent", "D'une absurdité confondante"],
            "Créatives": ["Emplâtre"],
            "Inventions": ["Nodocéphale", "Crétinocéphale", "Malapraxique", "Verboplecte"],
            "Alsacien": ["Stinkmichel"],
            "Ch'ti": ["Caboche (obstiné)", "Babelle (bavard)"],
            "Normand": ["Grand sicot", "Caboche"],
            "Occitan": ["Mascagnaïre (quelqu'un qui gâte son travail)", "Feignàs (fainéant)"]
        }
    },

    "crétin des alpes": {
        types: ["validiste"],
        intention: "Insulter quelqu'un en ajoutant une précision géographique",
        problematique: "Variante géographique de terme médical eugéniste. Doublement stigmatisant (validisme + mépris de classe/origine).",
        alternatives: {
            "Utiliser les mêmes alternatives que 'crétin' ou 'idiot'": [],
            "IMPORTANT": ["Ne JAMAIS ajouter de précision géographique ou sociale stigmatisante"]
        }
    },

    "crise": {
        types: ["saniste"],
        intention: "Décrire une réaction émotionnelle forte, un moment de stress",
        problematique: "'Crise' est un terme médical précis (crise d'épilepsie, crise psychiatrique). Banaliser son usage stigmatise les personnes qui ont réellement des crises.",
        alternatives: {
            "Descriptions": ["Réaction vive", "Forte réaction émotionnelle", "Moment de stress intense", "De tension", "S'emporte", "Réagit fortement"],
            "Poétiques": ["Tempête émotionnelle", "Vague déferlante"]
        }
    },

    "cul-de-jatte": {
        types: ["validiste"],
        intention: "Terme ancien pour personne amputée des jambes (parfois utilisé métaphoriquement)",
        problematique: "Terme extrêmement violent et déshumanisant pour les personnes amputées. Ne JAMAIS utiliser.",
        alternatives: {
            "Si nécessaire factuellement": ["Personne amputée des membres inférieurs"],
            "IMPORTANT": ["Ne JAMAIS utiliser comme métaphore"]
        }
    }
};
// ========== D ==========
    "daltonien": {
        types: ["validiste"],
        intention: "Dire que quelqu'un ne voit pas les différences, les nuances (métaphore)",
        problematique: "Utilise une différence de perception visuelle (daltonisme) comme métaphore d'incompréhension.",
        alternatives: {
            "Descriptions": ["Ne perçoit pas les nuances", "Les différences", "Manque de discernement", "De finesse", "Peu sensible aux subtilités"]
        }
    },

    "débile": {
        types: ["validiste"],
        intention: "Qualifier quelque chose d'absurde",
        problematique: "Ancien terme médical pour désigner une déficience intellectuelle légère.",
        alternatives: {
            "Descriptions": ["Absurde", "Aberrant", "Insensé", "Déraisonnable", "Illogique", "Ridicule", "Grotesque", "Risible", "Comique", "Farfelu", "Loufoque", "Saugrenu", "Cocasse", "Extravagant", "Burlesque"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)", "Inconsidéré", "Irréfléchi", "Imprudent", "Impulsif"],
            "Élégantes": ["D'une absurdité confondante", "D'une ineptie remarquable", "Inepte"],
            "Vieux français pour la personne": ["Bélître", "Butor", "Cuistre", "Faquin"],
            "Inventions": ["Nodocéphale", "Nodocéphalogique (tête de nœud avec prétention scientifique)", "Malapraxique"]
        }
    },

    "débile mental": {
        types: ["validiste"],
        intention: "Insulter l'intelligence de quelqu'un de manière violente et explicite",
        problematique: "Reprend directement la terminologie médicale psychiatrique du XIXe siècle (échelle : idiot < imbécile < débile mental) pour en faire une insulte. Extrêmement stigmatisant.",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Maraud", "Malotru", "Faquin", "Paltoquet", "Ganache", "Foutriquet"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Gland"],
            "Pour un comportement": ["Absurde", "Ridicule", "Irréfléchi", "Inconsidéré"],
            "Inventions": ["Nodocéphale", "Crétinocéphale", "Verboplecte"],
            "IMPORTANT": ["Ne JAMAIS utiliser de terminologie médicale comme insulte"]
        }
    },

    "déficient": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un d'incompétent",
        problematique: "Terme médical ('déficience intellectuelle', 'déficience motrice') détourné.",
        alternatives: {
            "Descriptions": ["Incompétent", "Médiocre", "Peu efficace", "Lacunaire", "Insuffisant"],
            "Élégantes": ["Piètre", "Falot", "Sans éclat", "Médiocre"],
            "Inventions": ["Malapraxique", "Sapienticule (petit sage prétentieux, ironique)"]
        }
    },

    "dégénéré": {
        types: ["validiste", "saniste", "eugeniste"],
        intention: "Qualifier quelqu'un de moralement corrompu",
        problematique: "Terme eugéniste utilisé pour désigner les personnes avec handicaps ou maladies héréditaires. Histoire eugéniste très sombre.",
        alternatives: {
            "Descriptions": ["Corrompu", "Dépravé", "Perverti", "Vicieux", "Décadent", "Immoral", "Dévoyé", "Fourvoyé", "Débauché", "Libertin"],
            "Vieux français": ["Ribaud", "Forban", "Gredin"],
            "Créole": ["Makro", "Isalòp", "Malfézan"]
        }
    },

    "déjanté": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'excentrique, hors norme",
        problematique: "Métaphore mécanique suggérant un dysfonctionnement (sortir de ses gonds/jantes).",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé", "Atypique", "Hors norme", "Non conventionnel", "Audacieux", "Sans limites"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"]
        }
    },

    "délirant": {
        types: ["saniste"],
        intention: "Qualifier quelque chose d'absurde, irréaliste, déconnecté",
        problematique: "Utilise un symptôme psychiatrique sérieux (le délire est un symptôme de plusieurs troubles psychotiques) comme métaphore négative banale.",
        alternatives: {
            "Descriptions": ["Absurde", "Farfelu", "Extravagant", "Baroque", "Déraisonnable", "Fantaisiste", "Irréaliste", "Chimérique", "Déconnecté du réel", "Hors-sol"],
            "Inventions": ["Fumigophore (qui brouille les esprits)", "Somnambulogue (dit des bêtises en parlant dans le vide)"],
            "Poétiques": ["Échappée belle", "Envolée imaginaire", "Château en Espagne"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "demeuré": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de lent",
        problematique: "Expression ancienne ('resté en arrière') pour les personnes ayant une déficience intellectuelle.",
        alternatives: {
            "Descriptions": ["Lent", "Posé", "Qui prend son temps", "Peu pressé", "Rêveur", "Songeur", "Contemplatif", "Méditatif", "Distrait", "Ailleurs", "Dans la lune", "Perdu dans ses pensées"],
            "Ch'ti/Picard": ["Losse (paresseux)", "Balochard (traîne-savate)"]
        }
    },

    "dément": {
        types: ["saniste"],
        intention: "Qualifier quelque chose d'excessif",
        problematique: "Utilise une pathologie neurologique (démences, Alzheimer) comme insulte.",
        alternatives: {
            "Si négatif": ["Excessif", "Démesuré", "Absurde", "Insensé"],
            "Si positif": ["Extraordinaire", "Incroyable", "Stupéfiant", "Phénoménal", "Prodigieux", "Formidable"],
            "Élégantes": ["Extravagant", "Démesuré", "Hors du commun", "Remarquable"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"],
            "Inventions": ["Histrioncule (pour l'aspect dramatique)"]
        }
    },

    "dépressif": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de pessimiste, plombant",
        problematique: "Banalise la dépression, une maladie mentale grave, en trait de caractère négatif.",
        alternatives: {
            "Descriptions": ["Pessimiste", "Sombre", "Morose", "Maussade", "Chagrin", "Défaitiste", "Rabat-joie", "Trouble-fête", "Sinistre", "Lugubre", "Funèbre"],
            "Vieux français": ["Pisse-froid"],
            "Inventions": ["Grinchelobscur (râleur mystérieux)", "Grinchevrel (râleur chronique mais comique)"]
        }
    },

    "déprimant": {
        types: ["saniste"],
        intention: "Qualifier quelque chose de triste, qui rend triste",
        problematique: "Banalise la dépression clinique qui est une maladie grave et handicapante.",
        alternatives: {
            "Descriptions": ["Triste", "Morose", "Sombre", "Mélancolique", "Maussade", "Sinistre", "Lugubre", "Attristant", "Qui attriste", "Lourd"],
            "Poétiques": ["Voilé de gris", "Nuage bas", "Crépuscule d'âme"]
        }
    },

    "dérangé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de bizarre",
        problematique: "Euphémisme pour 'fou' avec même stigmatisation.",
        alternatives: {
            "Descriptions": ["Perturbant", "Déconcertant", "Déroutant", "Troublant", "Étrange", "Singulier", "Inhabituel", "Insolite"],
            "Si danger réel": ["Préoccupant"],
            "Positif": ["Original", "Atypique", "Hors norme"],
            "Élégantes": ["Excentrique", "Fantasque", "Baroque", "Extravagant"],
            "Inventions": ["Farfadocieux"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "déséquilibré": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'instable mentalement ou émotionnellement",
        problematique: "Terme psychiatrique détourné qui suggère qu'une personne a perdu son 'équilibre mental'. Stigmatise les troubles de santé mentale.",
        alternatives: {
            "Descriptions": ["Changeant", "Versatile", "Imprévisible", "Perturbé", "Troublé", "Tourmenté"],
            "Si comportement problématique": ["Imprévisible", "Erratique", "Chaotique"],
            "Si danger réel": ["Dangereux", "Violent", "Menaçant (décrire le comportement factuel)"],
            "NOTE": ["Éviter 'instable' appliqué à une personne (connotation saniste)"]
        }
    },

    "détraqué": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de bizarre ou dysfonctionnel",
        problematique: "Compare une personne à une machine cassée. Déshumanise et suggère un dysfonctionnement mental.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Singulier", "Atypique", "Décalé", "Hors norme", "Inhabituel"],
            "Si danger réel": ["Dangereux", "Violent", "Menaçant"],
            "Vieux français": ["Olibrius", "Drôle de numéro"],
            "Inventions": ["Farfelucratique"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "deux de qi": {
        types: ["validiste"],
        intention: "Se moquer de l'intelligence de quelqu'un",
        problematique: "Utilise le QI (mesure controversée) comme mesure de valeur humaine. Le 'QI animal' ajoute du spécisme.",
        alternatives: {
            "Descriptions": ["Peu perspicace", "Peu clairvoyant"],
            "Vieux français": ["Bélître", "Butor", "Ganache"],
            "IMPORTANT": ["Ne JAMAIS utiliser le QI ou des comparaisons animales"]
        }
    },

    "dialogue de sourds": {
        types: ["validiste"],
        intention: "Décrire une situation où deux personnes ne s'écoutent pas mutuellement",
        problematique: "Utilise le handicap auditif comme métaphore d'un échec de communication. Sous-entend que les personnes sourdes ne peuvent pas communiquer efficacement.",
        alternatives: {
            "Descriptions": ["Dialogue impossible", "Échange stérile", "Conversation dans le vide", "Sans écoute mutuelle", "Chacun campe sur ses positions", "Incompréhension mutuelle", "Malentendu persistant", "On se parle sans s'entendre", "On parle dans le vide"],
            "Inventions": ["Pataquèsien (qui mélange tout, crée le chaos verbal)", "Verboplecte (s'emmêle dans ses mots, ironique)"]
        }
    },

    "diminué": {
        types: ["validiste"],
        intention: "Dire que quelqu'un a des capacités réduites",
        problematique: "Euphémisme médical pour handicap. Réduit la personne à une 'diminution'.",
        alternatives: {
            "Si besoin factuel": ["A des difficultés avec [chose précise]", "A besoin d'aide pour [chose précise]", "Personne handicapée", "Personne en situation de handicap (si vraiment nécessaire)"]
        }
    },

    "disjoncter": {
        types: ["saniste"],
        intention: "Dire que quelqu'un s'énerve fortement, 'perd les pédales'",
        problematique: "Métaphore électrique du dysfonctionnement cérébral. Déshumanise.",
        alternatives: {
            "Descriptions": ["S'emporter", "S'énerver fortement", "Exploser", "Perdre son calme", "Son sang-froid", "Réagir vivement", "Violemment"],
            "NOTE": ["'Péter les plombs' et variantes restent problématiques"]
        }
    },

    "dyslexique": {
        types: ["validiste"],
        intention: "Se moquer de quelqu'un qui fait des erreurs d'écriture",
        problematique: "Détourne un trouble neurodéveloppemental réel en moquerie. Stigmatise les personnes concernées.",
        alternatives: {
            "Descriptions": ["Qui fait des fautes", "Des erreurs"],
            "IMPORTANT": ["Ne JAMAIS utiliser de diagnostic comme moquerie"]
        }
    },

    // ========== E ==========
    "électrochocs": {
        types: ["saniste"],
        intention: "Dire que quelque chose choque, secoue fortement (métaphore)",
        problematique: "Banalise une pratique psychiatrique controversée (électroconvulsivothérapie) qui a une histoire de maltraitance.",
        alternatives: {
            "Descriptions": ["Choquant", "Saisissant", "Bouleversant", "Qui secoue", "Qui ébranle"]
        }
    },

    "épileptique": {
        types: ["validiste"],
        intention: "Décrire un mouvement saccadé, lumière clignotante",
        problematique: "Utilise une pathologie neurologique comme adjectif négatif.",
        alternatives: {
            "Descriptions": ["Saccadé", "Heurté", "Chaotique", "Erratique", "Irrégulier", "Stroboscopique", "Clignotant", "Intermittent (pour lumière)", "Frénétique", "Sursautant"],
            "Inventions": ["Pifpafique (impulsif, tape à côté ou fait du bruit pour rien)"]
        }
    },

    "estropié": {
        types: ["validiste"],
        intention: "Qualifier quelque chose de mal fait, maltraité (sens figuré)",
        problematique: "Utilise le handicap physique comme métaphore négative.",
        alternatives: {
            "Descriptions": ["Altéré", "Dénaturé", "Abîmé", "Massacré", "Saccagé", "Gâché", "Mal fait", "Raté", "Bâclé", "Saboté", "Écorché", "Maltraité"],
            "NOTE": ["Éviter 'déformé' et 'défiguré' (validistes : utilisent l'apparence physique)"]
        }
    },

    "être à côté de la plaque": {
        types: ["saniste"],
        intention: "Dire que quelqu'un est déconnecté, ne comprend pas",
        problematique: "Expression qui peut suggérer un dysfonctionnement mental, une 'perte de repères'.",
        alternatives: {
            "Descriptions": ["Ne pas comprendre", "Se tromper", "Être hors sujet", "À côté du sujet", "Mal interpréter", "Mal comprendre", "Déconnecté du sujet (si vraiment approprié)"]
        }
    },

    "être à la masse": {
        types: ["saniste"],
        intention: "Dire que quelqu'un est déconnecté, ne comprend rien, est dépassé",
        problematique: "Expression qui suggère un dysfonctionnement mental, un 'court-circuit' du cerveau. Électrocute symboliquement la santé mentale.",
        alternatives: {
            "Descriptions": ["Déconnecté", "Dépassé", "Perdu", "Largué", "Ne suit pas", "N'a pas compris", "Distrait", "Ailleurs", "Dans la lune", "Décalé", "À côté de la plaque (attention, peut aussi être problématique)"],
            "Créatives": ["Sur une autre longueur d'onde", "Dans un autre monde"],
            "Inventions": ["Somnambulogue", "Fumigophore (qui brouille les esprits)", "Crepusculier"]
        }
    },

    "être sous calmants": {
        types: ["saniste"],
        intention: "Moquer quelqu'un de calme ou amorphe en suggérant une médication",
        problematique: "Se moque de la prise de psychotropes, stigmatise les traitements psychiatriques.",
        alternatives: {
            "Descriptions": ["Calme", "Posé", "Tranquille", "Amorphe", "Léthargique (si vraiment approprié)"],
            "IMPORTANT": ["Ne JAMAIS moquer la médication"]
        }
    },

    // ========== F ==========
    "fada": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de fou, bizarre (provençal)",
        problematique: "Terme provençal pour 'fou', même problématique que les autres termes sanistes.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé", "Audacieux", "Téméraire"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Occitan": ["Autres termes non sanistes disponibles"]
        }
    },

    "faible d'esprit": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de peu intelligent",
        problematique: "Expression historique pour les personnes ayant une déficience intellectuelle.",
        alternatives: {
            "Descriptions": ["Crédule", "Influençable", "Malléable", "Manipulable", "Peu perspicace", "Peu clairvoyant", "Peu critique", "Peu réfléchi"],
            "Vieux français": ["Bélître", "Butor", "Maraud", "Ganache", "Foutriquet"],
            "Inventions": ["Nodocéphale", "Doxomane (obsédé par l'opinion d'autrui)"]
        }
    },

    "fêlé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de légèrement étrange",
        problematique: "Compare la santé mentale à un objet cassé.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Atypique", "Singulier", "Fantaisiste", "Farfelu", "Loufoque", "Fantasque", "Décalé", "À part", "Hors norme"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfadocieux", "Histrioncule"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"],
            "Corse": ["O carnavà"]
        }
    },

    "foldingue": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de très excentrique",
        problematique: "Même problématique que 'fou'.",
        alternatives: {
            "Descriptions": ["Excentrique", "Déjanté", "Décalé", "Original", "Extravagant", "Exubérant", "Débridé", "Flamboyant", "Démesuré", "Extrême", "Sans limite"],
            "Créatives": ["Hors des clous", "À l'ouest", "Sur une autre planète"],
            "Inventions": ["Farfelucratique", "Histrioncule"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"],
            "Corse": ["O carnavà"]
        }
    },

    "fou": {
        types: ["saniste", "psychophobe"],
        intention: "Qualifier quelqu'un d'irrationnel ou quelque chose d'extraordinaire",
        problematique: "Stigmatise les personnes ayant des troubles psychiatriques en associant 'folie' à danger, incohérence ou ridicule.",
        alternatives: {
            "Si négatif": ["Irrationnel", "Déraisonnable", "Imprudent", "Téméraire", "Inconsidéré"],
            "Si positif": ["Extraordinaire", "Incroyable", "Stupéfiant", "Phénoménal", "Prodigieux", "Formidable", "Remarquable"],
            "Pour la passion": ["Passionné", "Enthousiaste", "Fervent", "Ardent", "Épris"],
            "Élégantes": ["Excentrique", "Extravagant", "Fantasque", "Baroque"],
            "Inventions": ["Vexibond (qui s'indigne pour un rien)"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"],
            "Jurons": ["Sacrebleu !", "Fichtre !", "Diantre !", "Mazette !", "Saperlipopette !", "Morbleu !"],
            "Ch'ti": ["Crénon des aulx !", "Sapristi !", "Saperlotte !", "Saquernon !"]
        }
    },

    "fou du roi": {
        types: ["saniste", "validiste"],
        intention: "Qualifier quelqu'un qui dit des vérités dérangeantes avec humour",
        problematique: "Référence historique aux 'fous du roi' (souvent des personnes avec déficiences intellectuelles ou troubles mentaux, employées comme divertissement).",
        alternatives: {
            "Descriptions": ["Franc-parleur", "Qui dit les vérités", "Provocateur", "Iconoclaste", "Humoriste caustique", "Satiriste"]
        }
    },

    "frappé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'étrange",
        problematique: "Suggère qu'on a été 'frappé' à la tête, associant traumatisme crânien et troubles mentaux.",
        alternatives: {
            "Descriptions": ["Excentrique", "Déjanté", "Décalé", "Original", "Extravagant", "Singulier", "Atypique", "Loufoque", "Farfelu", "Fantasque", "Baroque"],
            "Vieux français": ["Olibrius", "Drôle d'oiseau", "Drôle de numéro"],
            "Inventions": ["Farfadocieux"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)", "Histrioncule"]
        }
    }
};
// ========== G ==========
    "gaga": {
        types: ["validiste", "saniste", "agiste"],
        intention: "Qualifier une personne âgée de sénile, qui 'radote'",
        problematique: "Terme infantilisant et méprisant pour les personnes âgées, particulièrement celles avec troubles cognitifs. Triple discrimination : saniste + validiste + âgiste.",
        alternatives: {
            "Descriptions": ["Distrait", "Étourdi", "Dans la lune", "Confus", "Désorienté"],
            "MIEUX": ["Ne pas utiliser, terme intrinsèquement âgiste"]
        }
    },

    "gâteux": {
        types: ["validiste", "saniste", "agiste"],
        intention: "Qualifier une personne âgée de sénile",
        problematique: "Terme méprisant pour les personnes âgées atteintes de troubles cognitifs. Triple discrimination.",
        alternatives: {
            "Descriptions": ["Distrait", "Étourdi", "Dans la lune", "Ailleurs", "Confus", "Désorienté", "Perdu"],
            "Factuels si pertinent": ["Vieillissant (neutre et factuel)", "Sénescent (factuel si pertinent)"]
        }
    },

    "givré": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de bizarre, d'excentrique, voire de fou",
        problematique: "Métaphore du froid/gel pour décrire une personne dont le cerveau serait 'gelé', dysfonctionnel. Stigmatise la santé mentale.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé", "Atypique", "Audacieux", "Téméraire", "Sans limites", "Farfelu", "Loufoque", "Fantasque"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfelucratique"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "globicéphale": {
        types: ["validiste"],
        intention: "Insulter quelqu'un en se moquant de la forme de sa tête ou de son intelligence",
        problematique: "Se moque des personnes ayant une forme de crâne atypique (certaines conditions médicales, malformations congénitales, etc.). Utilise l'apparence physique comme insulte et repose sur l'idée validiste que forme du crâne = intelligence (phrénologie, pseudoscience eugéniste).",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Malotru", "Maraud", "Faquin"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Gland"],
            "Pour critiquer un comportement": ["Irréfléchi", "Inconsidéré", "Imprudent"],
            "Inventions": ["Malapraxique"],
            "IMPORTANT": ["Ne JAMAIS utiliser une caractéristique physique comme insulte"]
        }
    },

    "gogol": {
        types: ["validiste", "raciste"],
        intention: "Qualifier quelqu'un de maladroit",
        problematique: "Déformation du mot 'mongol', ancienne appellation raciste et validiste de la trisomie 21. Double discrimination.",
        alternatives: {
            "Descriptions": ["Peu adroit", "Peu habile", "Malhabile"],
            "Vieux français": ["Butor", "Bélître", "Malotru", "Maraud", "Ganache"],
            "Inventions": ["Malapraxique", "Pifpafique"],
            "Corse": ["O goffu (le maladroit)"]
        }
    },

    "goitreux": {
        types: ["validiste"],
        intention: "Ancien terme médical pour personnes avec goitre (thyroïde)",
        problematique: "Terme médical historique détourné en insulte. Ne JAMAIS utiliser.",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Maraud"],
            "IMPORTANT": ["Ne pas utiliser de condition médicale comme insulte"]
        }
    },

    "grabataire": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de très passif, cloué (métaphore)",
        problematique: "Terme médical pour personne alitée de façon permanente. Utiliser comme métaphore stigmatise.",
        alternatives: {
            "Descriptions": ["Passif", "Inactif", "Amorphe"],
            "Ch'ti/Picard/Occitan": ["Losse (paresseux)", "Feignàs (fainéant)"]
        }
    },

    // ========== H ==========
    "handicapé": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un d'incompétent",
        problematique: "Utilise DIRECTEMENT le handicap comme insulte. Le summum de la violence validiste.",
        alternatives: {
            "Descriptions": ["Incompétent", "Inefficace", "Médiocre", "Piètre", "En difficulté sur [préciser le domaine]", "Peu doué pour", "Peu habile à"],
            "Pour une action": ["Empêché", "Entravé (pour une action précise et factuelle)"],
            "Inventions": ["Malapraxique", "Sapienticule (petit sage prétentieux, ironique)"]
        }
    },

    "hp": {
        types: ["saniste"],
        intention: "Menacer quelqu'un d'internement psychiatrique (hôpital psychiatrique)",
        problematique: "Référence à l'hôpital psychiatrique et à l'enfermement forcé. Menace d'internement. Histoire très sombre.",
        alternatives: {
            "IMPORTANT": ["Ne JAMAIS menacer d'internement"],
            "Si comportement problématique": ["Le décrire factuellement"]
        }
    },

    "hydrocéphale": {
        types: ["validiste"],
        intention: "Insulter quelqu'un en se moquant de son intelligence ou de son apparence physique",
        problematique: "L'hydrocéphalie est une condition médicale sérieuse (accumulation de liquide céphalo-rachidien dans le crâne) qui nécessite souvent une intervention chirurgicale. Utiliser ce terme médical comme insulte stigmatise les personnes atteintes, se moque de leur apparence physique, et perpétue l'idée validiste fausse que forme du crâne = intelligence (phrénologie, pseudoscience eugéniste et raciste).",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Malotru", "Maraud", "Faquin", "Paltoquet"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Gland"],
            "Pour critiquer un comportement": ["Irréfléchi", "Inconsidéré", "Imprudent", "Absurde"],
            "Créatives": ["Emplâtre"],
            "Inventions": ["Malapraxique"],
            "IMPORTANT": ["Ne JAMAIS utiliser une condition médicale ou une caractéristique physique comme insulte"]
        }
    },

    "hyperactif": {
        types: ["validiste", "saniste"],
        intention: "Parler de quelqu'un d'énergique, distrait, qui bouge beaucoup",
        problematique: "Banalise un trouble neurodéveloppemental (Trouble Déficit de l'Attention avec ou sans Hyperactivité) qui impacte réellement la vie quotidienne des personnes concernées.",
        alternatives: {
            "Descriptions": ["Énergique", "Dynamique", "Vif", "Pétillant", "Difficile à suivre", "Dispersé", "Papillonnant", "Qui a du mal à se concentrer", "Distrait", "Ailleurs"],
            "Créole": ["Fouyaya (curieux, fouineur - si c'est l'aspect exploration)"],
            "Inventions": ["Vapulotomique (qui fait beaucoup de bruit pour rien)", "Glougloutard (exubérant, bruyant)"],
            "Poétiques": ["Feu follet", "Tourbillon d'énergie", "Bourrasque joyeuse"]
        }
    },

    "hystérique": {
        types: ["saniste", "sexiste"],
        intention: "Qualifier quelqu'un (souvent une femme) d'excessivement émotionnel",
        problematique: "Ancien diagnostic psychiatrique réservé aux femmes, fondé sur des préjugés sexistes (du grec 'hystera' = utérus). Triple discrimination : saniste + sexiste + validiste.",
        alternatives: {
            "Descriptions": ["Excessif", "Démesuré", "Exalté", "Enflammé", "Survolté", "Intense", "Passionné", "Véhément", "Fébrile", "Excité", "Survitaminé"],
            "Élégantes": ["Exalté", "Ardent", "Impétueux", "Fougueux"],
            "Inventions": ["Vexibond (qui s'indigne pour un rien, excessif)"]
        }
    },

    // ========== I ==========
    "idiot": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de peu réfléchi",
        problematique: "Terme médical historique de classification des déficiences intellectuelles (échelle : idiot < imbécile < débile < moron < arriéré).",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Maraud", "Malotru", "Faquin", "Paltoquet", "Cuistre", "Goujat", "Ganache", "Foutriquet", "Gougnafier", "Maroufle", "Sagouin"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Navet", "Nouille", "Gland"],
            "Pour un comportement": ["Absurde", "Ridicule", "Insensé", "Déraisonnable", "Irréfléchi", "Inconsidéré"],
            "Créatives": ["Emplâtre"],
            "Élégantes": ["Inepte", "D'une ineptie remarquable", "D'une absurdité confondante"],
            "Inventions": ["Malapraxique", "Verboplecte"],
            "Alsacien": ["Stinkmichel"],
            "Ch'ti": ["Caboche (obstiné)", "Babelle (bavard)"],
            "Normand": ["Grand sicot", "Caboche"],
            "Occitan": ["Mascagnaïre", "Feignàs"],
            "Créole": ["Malfézan (méchant)", "Fronté (effronté)"]
        }
    },

    "imbécile": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de peu réfléchi",
        problematique: "Terme médical historique de classification des déficiences intellectuelles.",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Maraud", "Malotru", "Faquin", "Paltoquet", "Cuistre", "Goujat", "Ganache", "Foutriquet"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Navet", "Nouille", "Gland"],
            "Pour un comportement": ["Absurde", "Ridicule", "Insensé", "Déraisonnable", "Irréfléchi", "Inconsidéré"],
            "Élégantes": ["Inepte", "D'une ineptie remarquable"]
        }
    },

    "illuminé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un qui a des idées farfelues, qui suit des croyances étranges ou conspirationnistes",
        problematique: "Bien qu'historiquement religieux, le terme est utilisé pour pathologiser des croyances différentes et suggérer une forme de 'folie mystique'. Amalgame entre convictions atypiques et troubles mentaux.",
        alternatives: {
            "Descriptions": ["Idéaliste excessif", "Utopiste radical", "Conspirationniste", "Complotiste (si approprié)", "Croyant fervent", "Zélé", "Fanatique", "Visionnaire (si positif)", "Rêveur impénitent", "Dogmatique", "Sectaire (si critique justifiée du comportement)"],
            "Inventions": ["Sofocrate (se croit sage et impose ses idées)", "Doxomane (obsédé par l'opinion)"]
        }
    },

    "immature": {
        types: ["validiste"],
        intention: "Qualifier un comportement d'enfantin, pas sérieux",
        problematique: "Peut être utilisé pour infantiliser des adultes, particulièrement les personnes handicapées. À utiliser avec précaution.",
        alternatives: {
            "Si c'est le comportement": ["Irresponsable", "Peu sérieux", "Léger", "Insouciant"],
            "MIEUX": ["Décrire le comportement précis sans infantiliser"],
            "Créole": ["Fronté (effronté)", "Malélivé (mal élevé)"],
            "Vieux français": ["Malappris (mal élevé)"]
        }
    },

    "impotent": {
        types: ["validiste"],
        intention: "Ancien terme pour personne ayant des difficultés motrices",
        problematique: "Ancien terme médical péjoratif pour handicap moteur. Ne JAMAIS utiliser.",
        alternatives: {
            "Si factuel et nécessaire": ["Personne à mobilité réduite"],
            "IMPORTANT": ["Ne pas utiliser comme métaphore"]
        }
    },

    "infirme": {
        types: ["validiste"],
        intention: "Rabaisser ou humilier quelqu'un en l'associant à la faiblesse ou à l'incapacité",
        problematique: "Ancien terme médical pour désigner les personnes handicapées, aujourd'hui très péjoratif.",
        alternatives: {
            "Neutre et factuel": ["Personnes en situation de handicap", "Personnes handicapées", "Personnes ayant des besoins spécifiques", "Personnes concernées"],
            "Si matériel spécifique": ["Personnes ayant recours à ce matériel", "Personnes bénéficiaires de ce matériel", "Usagers de ce matériel", "Personnes utilisant ce matériel pour leur autonomie"]
        }
    },

    "infirmité": {
        types: ["validiste"],
        intention: "Qualifier un défaut comme une 'infirmité' (métaphore)",
        problematique: "Utilise le handicap physique comme métaphore négative.",
        alternatives: {
            "Descriptions": ["Défaut", "Faiblesse", "Lacune", "Limite", "Manque"]
        }
    },

    "innocent": {
        types: ["validiste"],
        intention: "Ancien euphémisme pour personne avec déficience intellectuelle",
        problematique: "Ancien terme médical paternaliste pour déficience intellectuelle. Ne JAMAIS utiliser dans ce sens.",
        alternatives: {
            "Si vraiment 'innocent' au sens de 'non coupable'": ["Utiliser normalement"],
            "IMPORTANT": ["Ne jamais utiliser pour désigner une personne handicapée"]
        }
    },

    "insane": {
        types: ["saniste"],
        intention: "Qualifier quelque chose d'extrême, incroyable (anglicisme)",
        problematique: "Vient de l'anglais 'insane' (fou, aliéné), terme psychiatrique détourné.",
        alternatives: {
            "Descriptions": ["Incroyable", "Extraordinaire", "Phénoménal", "Prodigieux", "Extrême", "Excessif", "Démesuré", "Colossal", "Monumental", "Titanesque", "Gigantesque", "Stupéfiant", "Renversant", "Sidérant", "Ahurissant", "Fabuleux", "Formidable", "Remarquable"],
            "Inventions": ["Rocambolesque (extravagant)"],
            "Jurons": ["Fichtre !", "Sacrebleu !", "Mazette !", "Diantre !", "Morbleu !", "Palsambleu !", "Tudieu !", "Ventrebleu !", "Jarnibleu !", "Bigre !"],
            "Ch'ti": ["Crénon des aulx !", "Sapristi !", "Saperlotte !", "Saperlipopette !", "Saquernon !"],
            "Occitan": ["Mila Diou !", "Boudu !"]
        }
    },

    "invalide": {
        types: ["validiste"],
        intention: "Terme ancien pour personne handicapée (ou annuler quelque chose)",
        problematique: "Quand utilisé pour une personne, extrêmement validiste (étymologie : 'non valide'). Ne JAMAIS utiliser pour une personne.",
        alternatives: {
            "Pour annuler quelque chose": ["Annuler", "Invalider (OK dans ce contexte technique)"],
            "Pour une personne": ["Personne handicapée", "Personne en situation de handicap"]
        }
    },

    // ========== L ==========
    "largué": {
        types: ["validiste"],
        intention: "Dire que quelqu'un ne suit pas, a du mal à comprendre",
        problematique: "Peut suggérer une difficulté cognitive. À utiliser avec précaution.",
        alternatives: {
            "Descriptions": ["Ne suit pas", "A décroché", "A besoin d'explications supplémentaires", "Perdu", "Dépassé (factuellement)"]
        }
    },

    "légume": {
        types: ["validiste"],
        intention: "Désigner quelqu'un de très passif ou dans un état végétatif",
        problematique: "DÉSHUMANISE les personnes en état de conscience minimale ou de handicap sévère. Extrêmement violent, méprisant et inacceptable.",
        alternatives: {
            "Si passivité légère": ["Passif", "Inactif", "Amorphe", "Apathique", "Léthargique", "Mou", "Avachi", "Affalé", "Vautré"],
            "Ch'ti/Picard": ["Losse (paresseux)"],
            "Occitan": ["Feignàs (fainéant)"],
            "IMPORTANT": ["Éviter absolument toute comparaison à un végétal pour parler d'êtres humains"]
        }
    },

    "lobotomisé": {
        types: ["saniste"],
        intention: "Dire que quelqu'un est sans réaction, passif, 'vidé'",
        problematique: "Référence à la lobotomie, pratique psychiatrique mutilante et traumatisante. Histoire très sombre.",
        alternatives: {
            "Descriptions": ["Passif", "Amorphe", "Sans réaction", "Apathique", "Léthargique"],
            "Ch'ti/Occitan": ["Losse", "Feignàs"]
        }
    },

    "lunatique": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de changeant, d'humeur variable",
        problematique: "Historiquement lié à l'idée que la lune influençait la santé mentale ('lunatique' = affecté par la lune). Ancienne croyance médicale utilisée pour expliquer les troubles mentaux.",
        alternatives: {
            "Descriptions": ["Changeant", "Versatile", "Imprévisible", "D'humeur variable", "Capricieux", "Fantasque", "Fantasque d'humeur", "Inconstant", "Fluctuant", "Ondoyant"],
            "Poétiques": ["Girouette", "Caméléon d'humeur"],
            "NOTE": ["Éviter 'instable' appliqué à l'humeur (connotation saniste)"]
        }
    },

    // ========== M ==========
    "maboul": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de fou, bizarre (argot)",
        problematique: "Argot pour 'fou', même problématique.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Farfelu"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfadocieux", "Farfelucratique"]
        }
    },

    "malade": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de bizarre, dangereux",
        problematique: "Stigmatise les personnes ayant des troubles de santé mentale en les associant à la dangerosité ou l'anormalité. Renforce l'amalgame faux : maladie mentale = danger.",
        alternatives: {
            "Si danger réel et avéré": ["Dangereux", "Violent", "Menaçant", "Agressif"],
            "Si comportement troublant": ["Perturbant", "Déconcertant", "Déroutant", "Troublant"],
            "Si incompréhensible": ["Incompréhensible", "Énigmatique", "Mystérieux"],
            "Si étrange": ["Étrange", "Singulier", "Inhabituel", "Insolite"],
            "Vieux français": ["Olibrius", "Drôle de numéro"],
            "Inventions": ["Farfadocieux"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "malentendant": {
        types: ["validiste"],
        intention: "Dire que quelqu'un ne veut pas entendre, comprendre (métaphore)",
        problematique: "Détourne un terme respectueux pour handicap auditif en métaphore.",
        alternatives: {
            "Descriptions": ["Refuse d'écouter", "Ignore volontairement", "Fermé au dialogue"]
        }
    },

    "manchot": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de maladroit (métaphore)",
        problematique: "Utilise l'amputation d'un bras comme métaphore de maladresse.",
        alternatives: {
            "Descriptions": ["Peu adroit", "Maladroit", "Peu habile"],
            "Inventions": ["Malapraxique", "Pifpafique"],
            "Corse": ["O goffu"]
        }
    },

    "maniaque": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'obsessionnellement perfectionniste",
        problematique: "Détourne un terme psychiatrique (manie dans TOC ou trouble bipolaire).",
        alternatives: {
            "Descriptions": ["Méticuleux", "Perfectionniste", "Pointilleux", "Tatillon", "Minutieux", "Précis", "Rigoureux", "Scrupuleux", "Maniéré", "Formaliste", "Cérémonieux"],
            "Si excessif": ["Obsédé par les détails", "Excessivement précis"],
            "Inventions": ["Filigranophile (amoureux des détails inutiles)", "Tic-taculeux (obsessionnel sur les détails chronométriques)"]
        }
    },

    "marteau": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de fou, bizarre",
        problematique: "Métaphore du coup sur la tête, associant traumatisme et troubles mentaux.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfadocieux", "Farfelucratique"]
        }
    },

    "mongol": {
        types: ["validiste", "raciste"],
        intention: "Insulter quelqu'un en le traitant de stupide",
        problematique: "Ancien nom RACISTE de la trisomie 21, fondé sur des préjugés eugénistes (1866) : le médecin John Langdon Down pensait que les personnes trisomiques ressemblaient aux populations asiatiques qu'il considérait comme 'inférieures'. Doublement discriminatoire : validisme + racisme anti-asiatique.",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Maraud", "Malotru", "Faquin", "Ganache"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Gland"],
            "Pour un comportement": ["Irréfléchi", "Inconsidéré"],
            "Inventions": ["Malapraxique", "Nodocéphale", "Pifpafique"]
        }
    },

    "monomaniaque": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'obsédé par un seul sujet",
        problematique: "Terme psychiatrique du XIXe siècle désignant un type de 'manie' focalisée sur une idée fixe. Pathologise la passion ou l'intérêt intense.",
        alternatives: {
            "Descriptions": ["Passionné par", "Obsédé par", "Focalisé sur", "Mono-centré", "Concentré exclusivement sur", "Spécialisé à l'extrême", "Expert pointu", "Fervent", "Dévoué corps et âme à"],
            "Si critique": ["Obnubilé par", "Prisonnier de son sujet"],
            "Inventions": ["Doxomane (obsédé par l'opinion d'autrui)", "Bubulophile (passionné de choses insignifiantes)"]
        }
    },

    "mort-vivant": {
        types: ["validiste", "saniste"],
        intention: "Qualifier quelqu'un de très fatigué, amorphe",
        problematique: "Déshumanise. Compare à un mort.",
        alternatives: {
            "Descriptions": ["Très fatigué", "Épuisé", "Exténué", "Amorphe", "Léthargique"]
        }
    },

    "muet": {
        types: ["validiste"],
        intention: "Dire que quelqu'un ne parle pas, reste silencieux (métaphore : 'rester muet')",
        problematique: "Utilise le handicap de parole comme métaphore.",
        alternatives: {
            "Descriptions": ["Silencieux", "Sans voix", "Sans mots", "Interdit", "Stupéfait (si c'est la surprise)"]
        }
    },

    "myope": {
        types: ["validiste"],
        intention: "Dire que quelqu'un ne voit pas loin (métaphore)",
        problematique: "Utilise un trouble visuel comme métaphore d'incompréhension.",
        alternatives: {
            "Descriptions": ["Ne voit pas les conséquences", "Manque de vision", "Ne perçoit pas les détails", "Les nuances", "Peu clairvoyant", "Peu perspicace"]
        }
    },

    // ========== N ==========
    "nain": {
        types: ["validiste"],
        intention: "Se moquer de la petite taille de quelqu'un, ou utiliser comme insulte générale",
        problematique: "Le nanisme est une condition médicale. Utiliser 'nain' comme moquerie ou insulte stigmatise les personnes de petite taille, les réduit à leur apparence physique et perpétue des stéréotypes (personnages de cirque, de conte, objets de moquerie).",
        alternatives: {
            "Pour critiquer quelqu'un": ["Utiliser les alternatives habituelles du dictionnaire"],
            "IMPORTANT": ["Ne JAMAIS utiliser une caractéristique physique comme insulte"],
            "Si on parle factuellement de taille": ["Personne de petite taille (si vraiment nécessaire de le mentionner)"]
        }
    },

    "narcissique": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un d'égocentrique, obsédé par son image",
        problematique: "Pathologise un trait de caractère, détourne un trouble de la personnalité complexe (trouble de la personnalité narcissique) en insulte simpliste.",
        alternatives: {
            "Descriptions": ["Égocentrique", "Vaniteux", "Imbu de soi", "Égotiste", "Prétentieux", "Orgueilleux", "Suffisant", "Arrogant", "Centré sur soi", "Préoccupé de son image", "Obsédé par son apparence"],
            "Vieux français": ["Faquin", "Cuistre", "Paltoquet (prétentieux)"],
            "Inventions": ["Egotrème (égocentrique béant)", "Sapienticule (petit sage prétentieux)"],
            "Poétiques": ["Miroir ambulant", "Amoureux de son reflet"]
        }
    },

    "nase": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un ou quelque chose de nul, cassé",
        problematique: "Au XIXe siècle, abréviation de 'nazi' ou 'nasi' qui désignait les malades atteints de syphilis. Utilise la maladie comme métaphore négative.",
        alternatives: {
            "Descriptions": ["Nul", "Médiocre", "Mauvais", "Piètre", "Minable", "Cassé", "Défectueux", "Hors service", "En panne (pour un objet)", "Incompétent", "Peu doué", "Peu efficace"],
            "Vieux français": ["Jean-foutre", "Foutriquet", "Ganache", "Paltoquet"],
              "Élégantes": ["De piètre qualité", "Falot", "Sans valeur", "Sans éclat"],
"Inventions": ["Sapienticule", "Malapraxique"]
}
},
"ne pas avoir toute sa tête": {
    types: ["saniste"],
    intention: "Dire que quelqu'un est confus, désorienté, 'fou'",
    problematique: "Suggère une perte de capacités mentales, un dysfonctionnement.",
    alternatives: {
        "Descriptions": ["Confus", "Désorienté momentanément", "Très stressé", "Dépassé", "S'emporte", "Réagit fortement"]
    }
},

"névrosé": {
    types: ["saniste"],
    intention: "Critiquer quelqu'un de très préoccupé ou perfectionniste",
    problematique: "Détourne un terme psychiatrique (névrose) en insulte, stigmatisant les personnes souffrant de troubles anxieux, TOC, phobies.",
    alternatives: {
        "ATTENTION": ["Ne pas utiliser comme insulte des états émotionnels légitimes"],
        "Descriptions": ["Méticuleux", "Perfectionniste", "Pointilleux", "Préoccupé", "Soucieux", "Tracassé (descriptions factuelles, pas insultes)", "Compliqué", "Tourmenté (si on veut critiquer)"],
        "Élégantes": ["D'un tempérament inquiet", "Esprit tortueux"],
        "Inventions": ["Filigranophile (amoureux des détails inutiles)", "Tic-taculeux"]
    }
},

// ========== O ==========
"obsessionnel": {
    types: ["saniste"],
    intention: "Qualifier quelqu'un de trop focalisé, rigide dans ses habitudes",
    problematique: "Détourne un terme psychiatrique (trouble obsessionnel compulsif - TOC) en trait de personnalité négatif.",
    alternatives: {
        "Descriptions": ["Méticuleux", "Perfectionniste", "Rigoureux", "Attaché aux détails", "Précis", "Pointilleux", "Systématique", "Méthodique", "Organisé"],
        "Si excessif": ["Rigide", "Inflexible", "Peu adaptable", "Focalisé intensément sur", "Dévoué à"],
        "Inventions": ["Filigranophile", "Tic-taculeux", "Barbouillomancien (qui brouille tout de façon obsessionnelle)"]
    }
},

"ouf": {
    types: ["saniste"],
    intention: "Qualifier quelque chose d'incroyable ou quelqu'un de bizarre (verlan de 'fou')",
    problematique: "Verlan de 'fou', même problématique que le terme original.",
    alternatives: {
        "Descriptions": ["Incroyable", "Extraordinaire", "Stupéfiant", "Excentrique", "Original (si pour une personne)"],
        "Vieux français": ["Olibrius"],
        "Inventions": ["Rocambolesque (extravagant)"]
    }
},

// ========== P ==========
"panique": {
    types: ["saniste"],
    intention: "Exprimer un stress intense, une peur forte (utilisé légèrement)",
    problematique: "Banalise le trouble panique, un trouble anxieux handicapant avec crises réelles et invalidantes.",
    alternatives: {
        "Descriptions": ["Très stressé", "Très anxieux", "Peur intense", "Angoisse forte", "Affolé", "Effrayé"],
        "NOTE": ["'Panique' factuelle (danger réel) reste acceptable"]
    }
},

"paralysé": {
    types: ["validiste"],
    intention: "Dire qu'on est immobilisé par la peur, l'hésitation (métaphore : 'paralysé de peur')",
    problematique: "Utilise le handicap moteur comme métaphore.",
    alternatives: {
        "Descriptions": ["Figé", "Immobilisé", "Pétrifié", "Incapable de bouger", "Cloué sur place", "Tétanisé (attention : aussi médical mais moins directement lié au handicap)"]
    }
},

"parano": {
    types: ["saniste"],
    intention: "Qualifier quelqu'un de trop méfiant",
    problematique: "Banalise un trouble psychiatrique sérieux (paranoïa, troubles délirants).",
    alternatives: {
        "Descriptions": ["Méfiant", "Suspicieux", "Défiant", "Soupçonneux", "Vigilant à l'excès", "Sur ses gardes", "Craintif", "Prudent à l'excès"],
        "Si pertinent": ["Complotiste", "Conspirationniste"],
        "Élégantes": ["Ombrageux", "Circonspect"],
        "Inventions": ["Doxomane (obsédé par l'opinion d'autrui)"],
        "Poétiques": ["Renard aux aguets", "Sentinelle inquiète"]
    }
},

"parkinson": {
    types: ["validiste"],
    intention: "Se moquer de quelqu'un qui tremble",
    problematique: "Se moque d'une maladie neurodégénérative grave.",
    alternatives: {
        "Descriptions": ["Qui tremble (constat factuel si nécessaire)"],
        "IMPORTANT": ["Ne JAMAIS se moquer des tremblements"]
    }
},

"pas clair": {
    types: ["saniste"],
    intention: "Dire que quelqu'un est bizarre, louche, ou mentalement instable",
    problematique: "Euphémisme pour 'fou' ou 'malade mental'. Suggère une 'impureté' mentale ou un trouble de la pensée.",
    alternatives: {
        "Si comportement louche": ["Louche", "Suspect", "Douteux", "Équivoque"],
        "Si étrange": ["Étrange", "Singulier", "Inhabituel", "Déconcertant"],
        "Si malhonnête": ["Malhonnête", "Peu fiable", "Douteux"],
        "Positif": ["Excentrique", "Original", "Atypique"],
        "Vieux français": ["Olibrius", "Drôle de numéro"],
        "Inventions": ["Farfadocieux", "Crepusculier (agit dans l'ombre)"]
    }
},

"perché": {
    types: ["saniste"],
    intention: "Qualifier quelqu'un de déconnecté",
    problematique: "Stigmatise les états de conscience altérée.",
    alternatives: {
        "Descriptions": ["Déconnecté", "Ailleurs", "Dans un autre monde", "Sur une autre planète", "Dans la lune", "Rêveur", "Distrait", "Absent", "Lointain", "Éthéré", "Décalé"],
        "Élégantes": ["Esprit vagabond", "Tête dans les nuages"],
        "Inventions": ["Somnambulogue (dit des bêtises en parlant dans le vide)", "Crepusculier"]
    }
},

"perdre les pédales": {
    types: ["saniste"],
    intention: "Dire que quelqu'un perd le contrôle, s'énerve",
    problematique: "Métaphore du dysfonctionnement, de la perte de contrôle mental.",
    alternatives: {
        "Descriptions": ["Perdre son calme", "Son sang-froid", "S'emporter", "S'énerver fortement", "Réagir vivement"]
    }
},

"phobique": {
    types: ["saniste"],
    intention: "Exprimer une simple aversion ou évitement",
    problematique: "Minimise les phobies réelles qui sont des troubles anxieux handicapants (agoraphobie, phobies spécifiques, etc.).",
    alternatives: {
        "Descriptions": ["Je n'aime pas", "J'évite", "Je préfère éviter", "Ça me dérange", "Ça me met mal à l'aise", "Ça me gêne", "J'ai une aversion pour", "Je fuis", "Je déteste", "Réticent à", "Peu enclin à"],
        "Poétiques": ["Allergie du cœur", "Répulsion douce"]
    }
},

"piqué": {
    types: ["saniste"],
    intention: "Qualifier quelqu'un de fou, bizarre",
    problematique: "Métaphore de la piqûre (injection), associée historiquement aux traitements psychiatriques forcés.",
    alternatives: {
        "Descriptions": ["Excentrique", "Original", "Décalé"],
        "Vieux français": ["Olibrius", "Drôle de pistolet"],
        "Inventions": ["Farfadocieux", "Farfelucratique"]
    }
},

"pls": {
    types: ["validiste", "saniste"],
    intention: "Dire qu'on est choqué, 'mort de rire' (Position Latérale de Sécurité - détourné, langage jeune)",
    problematique: "Détourne un geste de secourisme médical en expression banale. Banalise les situations d'urgence.",
    alternatives: {
        "Descriptions": ["Choqué", "Stupéfait", "Sidéré", "Mort de rire (mais attention au 'mort')", "Hilare", "Plié de rire"]
    }
},

"pois chiche à la place du cerveau": {
    types: ["validiste"],
    intention: "Se moquer de l'intelligence de quelqu'un",
    problematique: "Compare le cerveau à quelque chose de petit, suggère une déficience.",
    alternatives: {
        "Descriptions": ["Peu perspicace", "Peu clairvoyant"],
        "Vieux français": ["Bélître", "Butor", "Ganache"],
        "Inventions": ["Nodocéphale", "Crétinocéphale"],
        "IMPORTANT": ["Ne JAMAIS comparer le cerveau à un objet"]
    }
},

"psychopathe": {
    types: ["saniste"],
    intention: "Qualifier quelqu'un de dangereux, sans empathie",
    problematique: "Détourne un diagnostic en cliché criminel, alors que la majorité des personnes avec ce trouble ne sont pas violentes. Renforce l'amalgame faux : trouble mental = danger.",
    alternatives: {
        "Si manque d'empathie réel": ["Insensible", "Froid", "Sans empathie", "Impitoyable", "Indifférent"],
        "Si danger réel et avéré": ["Cruel", "Violent", "Dangereux", "Menaçant"],
        "Si manipulateur": ["Manipulateur", "Calculateur", "Retors", "Roué"],
        "Descriptions": ["Sans scrupule", "Amoral", "Cynique"],
        "Élégantes": ["Dénué de compassion", "Cœur de pierre", "De marbre"],
        "Vieux français": ["Gredin", "Forban", "Ribaud"],
        "Créole": ["Makro", "Isalòp", "Malfézan"],
        "Poétiques": ["Cœur de pierre", "Île émotionnelle"]
    }
},

"psychose": {
    types: ["saniste"],
    intention: "Dire que quelqu'un exagère, s'inquiète trop, devient parano",
    problematique: "Détourne un terme psychiatrique précis (épisode psychotique) en expression banale. Les psychoses sont des troubles graves.",
    alternatives: {
        "Descriptions": ["S'inquiète beaucoup", "Très inquiet", "Exagère", "En fait trop", "Très méfiant", "Suspicieux"],
        "Poétiques": ["Tempête d'inquiétude"]
    }
},

"psychotique": {
    types: ["saniste"],
    intention: "Qualifier quelqu'un de complètement déconnecté de la réalité, dangereux",
    problematique: "Détourne un terme psychiatrique médical (psychose) en insulte. Les personnes ayant des troubles psychotiques ne sont pas systématiquement dangereuses. Renforce la stigmatisation et la peur des maladies mentales.",
    alternatives: {
        "Si déconnexion de la réalité": ["Déconnecté", "Irrationnel", "Incohérent"],
        "Si danger réel et avéré": ["Dangereux", "Violent", "Menaçant (décrire le comportement factuel)"],
        "Si étrange": ["Déconcertant", "Incompréhensible", "Déroutant"],
        "Inventions": ["Fumigophore (qui brouille les esprits)", "Somnambulogue"],
        "IMPORTANT": ["Ne JAMAIS utiliser de diagnostic psychiatrique comme insulte"]
    }
}
};
// ========== R ==========
    "ramolli": {
        types: ["validiste", "saniste", "agiste"],
        intention: "Qualifier quelqu'un de sénile, dont le cerveau se détériore",
        problematique: "Suggère une dégénérescence cérébrale. Stigmatise les personnes âgées avec troubles cognitifs. Triple discrimination : saniste + validiste + âgiste.",
        alternatives: {
            "Descriptions": ["Distrait", "Étourdi", "Confus", "Désorienté"],
            "MIEUX": ["Ne pas utiliser, terme intrinsèquement âgiste/validiste"]
        }
    },

    "ravagé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de fou, détruit mentalement",
        problematique: "Métaphore de destruction cérébrale. Déshumanise.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé"],
            "Vieux français": ["Olibrius"],
            "Inventions": ["Farfadocieux", "Farfelucratique"]
        }
    },

    "retardé": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de lent ou de peu intelligent",
        problematique: "Ancien terme médical pour la déficience intellectuelle ('retard mental'), extrêmement stigmatisant.",
        alternatives: {
            "Descriptions": ["Lent", "Qui prend son temps", "Posé", "Mesuré", "Contemplatif", "Réfléchi", "Peu pressé", "Distrait", "Rêveur", "Songeur", "Pas au même rythme", "Décalé temporellement"],
            "Élégantes": ["D'un tempérament contemplatif", "Esprit flâneur"]
        }
    },

    // ========== S ==========
    "sans cervelle": {
        types: ["validiste"],
        intention: "Dire que quelqu'un n'est pas intelligent, ne réfléchit pas",
        problematique: "Métaphore anatomique du manque d'intelligence. Référence validiste.",
        alternatives: {
            "Descriptions": ["Peu perspicace", "Peu réfléchi", "Irréfléchi", "Inconsidéré"],
            "Vieux français": ["Bélître", "Butor", "Ganache"],
            "Inventions": ["Nodocéphale", "Crétinocéphale"]
        }
    },

    "schizo": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de contradictoire, changeant, voire dangereux",
        problematique: "Détourne un trouble psychiatrique SÉRIEUX et véhicule de FAUSSES croyances (la schizophrénie N'EST PAS un dédoublement de personnalité).",
        alternatives: {
            "Descriptions": ["Contradictoire", "Incohérent", "Décousu", "Confus", "Changeant", "Versatile", "Capricieux", "Ambivalent", "Partagé", "Tiraillé", "Écartelé", "Imprévisible", "Fantasque", "Hésitant", "Indécis", "Inconstant", "Fluctuant"],
            "Élégantes": ["Esprit ondoyant", "Nature versatile", "Girouette"],
            "Inventions": ["Pataquèsien (qui mélange tout, crée le chaos)", "Verboplecte"],
            "Poétiques": ["Mosaïque d'idées", "Puzzle désaccordé"],
            "NOTE": ["Éviter 'instable' appliqué à une personne (connotation saniste)"]
        }
    },

    "schlag": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de fou, bizarre (argot)",
        problematique: "Variante argotique de 'schizo', même problématique. Banalise et ridiculise les troubles psychiatriques.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé", "Atypique", "Farfelu", "Loufoque", "Fantasque", "Déjanté", "Hors norme", "À part"],
            "Vieux français": ["Olibrius", "Drôle de numéro"],
            "Inventions": ["Farfadocieux"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)", "Histrioncule"],
            "Corse": ["O carnavà"]
        }
    },

    "sénile": {
        types: ["validiste", "saniste", "agiste"],
        intention: "Qualifier une personne âgée de confuse, avec des troubles cognitifs",
        problematique: "Terme médical devenu péjoratif. Stigmatise le vieillissement et les troubles cognitifs. Triple discrimination : saniste + validiste + âgiste.",
        alternatives: {
            "Factuels si nécessaire": ["Confus", "Désorienté", "Vieillissant", "Sénescent (termes neutres et factuels)"],
            "MIEUX": ["Ne pas utiliser 'sénile' qui est péjoratif"]
        }
    },

    "simple": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de naïf, peu intelligent",
        problematique: "Ancien euphémisme médical pour déficience intellectuelle. 'Simple d'esprit' était un diagnostic.",
        alternatives: {
            "Descriptions": ["Naïf", "Candide", "Crédule (si vraiment approprié)"],
            "Pour 'simpliste' (raisonnement)": ["Réducteur", "Schématique", "Sommaire"],
            "Vieux français": ["Bélître", "Butor", "Ganache", "Benêt (lui-même validiste)", "Jobastre (occitan)"]
        }
    },

    "siphonné": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de fou, dérangé",
        problematique: "Métaphore du cerveau 'vidé' comme on siphonne un liquide. Déshumanise et compare la santé mentale à un défaut mécanique.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé", "Atypique", "Extravagant", "Fantasque", "Baroque", "Audacieux", "Téméraire", "Sans limites"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfelucratique"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)", "Histrioncule"]
        }
    },

    "sociopathe": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de sans empathie, dangereux, manipulateur",
        problematique: "Détourne un trouble de la personnalité (trouble de la personnalité antisociale) en insulte, renforce des amalgames dangereux entre santé mentale et violence, crée de la peur. La grande majorité des personnes avec ce trouble ne sont pas violentes.",
        alternatives: {
            "Si manque d'empathie réel": ["Sans empathie", "Insensible", "Cruel", "Indifférent"],
            "Si comportement froid": ["Froid", "Détaché", "Distant", "Imperméable"],
            "Si manipulateur": ["Manipulateur", "Calculateur", "Retors", "Roué (si c'est le comportement)"],
            "Vieux français": ["Gredin", "Forban", "Ribaud", "Maraud"],
            "Créole": ["Makro", "Isalòp", "Malfézan", "Koken (coquin au sens malhonnête)"],
            "Poétiques": ["Cœur de pierre", "Île émotionnelle"],
            "IMPORTANT": ["Ne JAMAIS utiliser de diagnostic psychiatrique comme insulte"]
        }
    },

    "sonné": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de confus, étourdi, 'pas net'",
        problematique: "Métaphore du coup sur la tête, associant traumatisme crânien et confusion mentale.",
        alternatives: {
            "Descriptions": ["Confus", "Étourdi", "Désorienté", "Fatigué", "Épuisé"],
            "Vieux français": ["Olibrius (si bizarre)"]
        }
    },

    "sourd": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un qui refuse d'écouter (sens figuré : 'faire la sourde oreille')",
        problematique: "Utilise le handicap auditif comme métaphore du refus ou de l'obstination.",
        alternatives: {
            "Descriptions": ["Refuse d'écouter", "Ignore volontairement", "Fait abstraction", "Ne tient pas compte de", "Ferme les oreilles à", "Buté", "Obstiné", "Têtu", "Borné", "Obtus", "Indifférent à", "Imperméable à"],
            "Normand/Ch'ti": ["Caboche (obstiné, inflexible)"]
        }
    },

    "sourd-muet": {
        types: ["validiste"],
        intention: "Ancien terme pour personnes sourdes et muettes",
        problematique: "Terme obsolète et offensant. Double capacitisme (auditif + oral). Ne JAMAIS utiliser.",
        alternatives: {
            "Si factuel et vraiment nécessaire": ["Personne sourde et non-oralisante"],
            "IMPORTANT": ["Ne pas utiliser comme métaphore"]
        }
    },

    "sous-développé": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de peu intelligent",
        problematique: "Terme eugéniste suggérant un développement incomplet, inférieur.",
        alternatives: {
            "Descriptions": ["Peu perspicace", "Peu clairvoyant"],
            "Vieux français": ["Bélître", "Butor", "Ganache"],
            "IMPORTANT": ["Ne JAMAIS suggérer un 'sous-développement' humain"]
        }
    },

    "susceptible": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de facilement vexé, d'humeur changeante",
        problematique: "Peut pathologiser des réactions émotionnelles normales. À utiliser avec précaution.",
        alternatives: {
            "Descriptions": ["Sensible", "À fleur de peau", "D'humeur changeante", "Imprévisible"],
            "NOTE": ["Ces termes peuvent être acceptables s'ils décrivent factuellement, mais pas comme insultes pathologisantes"]
        }
    },

    // ========== T ==========
    "tapé": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de fou, bizarre",
        problematique: "Métaphore du coup sur la tête, associant traumatisme et troubles mentaux.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Décalé"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfadocieux", "Farfelucratique"]
        }
    },

    "taré": {
        types: ["validiste", "saniste", "eugeniste"],
        intention: "Qualifier quelqu'un de défectueux, anormal",
        problematique: "Terme eugéniste désignant les personnes considérées comme génétiquement 'défectueuses'. Histoire eugéniste très sombre (nazis, stérilisations forcées).",
        alternatives: {
            "Pour un objet": ["Défectueux", "Abîmé", "Détérioré"],
            "Si danger réel": ["Dangereux", "Violent", "Menaçant"],
            "Si comportement problématique": ["Décrire le comportement précis plutôt que la personne"],
            "Vieux français": ["Gredin", "Forban", "Ribaud", "Maraud"],
            "Créole": ["Makro", "Isalòp", "Malfézan", "Kanay (canaille)"]
        }
    },

    "taré mental": {
        types: ["validiste", "saniste", "eugeniste"],
        intention: "Variante aggravée de 'taré', utilisée pour insulter violemment quelqu'un",
        problematique: "Double la violence validiste en ajoutant 'mental' au terme eugéniste 'taré'. Extrêmement stigmatisant et déshumanisant.",
        alternatives: {
            "Vieux français corsé": ["Gredin", "Forban", "Ribaud", "Maraud", "Faquin", "Goujat", "Mufle"],
            "Familières fortes": ["Pignouf", "Ganache"],
            "Si danger réel": ["Dangereux", "Violent", "Menaçant (décrire le comportement factuel)"],
            "Créole": ["Makro", "Isalòp", "Malfézan"],
            "IMPORTANT": ["Ne JAMAIS utiliser de terminologie eugéniste comme insulte"]
        }
    },

    "timbré": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de légèrement bizarre",
        problematique: "Banalise les troubles mentaux en les ridiculisant.",
        alternatives: {
            "Descriptions": ["Excentrique", "Original", "Atypique", "Singulier", "Fantaisiste", "Farfelu", "Loufoque", "Fantasque", "Décalé", "À part", "Hors norme"],
            "Vieux français": ["Olibrius", "Drôle de numéro"],
            "Inventions": ["Farfadocieux", "Histrioncule"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"],
            "Corse": ["O carnavà"],
            "Alsacien": ["Drôle de Hànswurscht (Jean Saucisse)"]
        }
    },

    "toc": {
        types: ["saniste"],
        intention: "Parler d'une petite manie, d'une habitude répétitive",
        problematique: "Banalise un trouble obsessionnel-compulsif réellement handicapant et envahissant. Les TOC sont des troubles anxieux graves qui peuvent empêcher de vivre normalement.",
        alternatives: {
            "Descriptions": ["Manie", "Habitude", "Rituel", "Routine", "Marotte", "Tic", "Petit réflexe", "Préférence marquée", "Façon de faire habituelle"],
            "Inventions": ["Tic-taculeux (obsessionnel sur les détails)", "Filigranophile (amoureux des détails)"],
            "Poétiques": ["Ritournelle personnelle", "Pas de danse familier"]
        }
    },

    "tordu": {
        types: ["validiste"],
        intention: "Qualifier quelqu'un de pervers ou un raisonnement de biaisé",
        problematique: "Peut renvoyer aux déformations physiques comme métaphore négative.",
        alternatives: {
            "Pour une personne": ["Pervers", "Malsain", "Vicieux", "Retors", "Sournois"],
            "Pour un raisonnement": ["Biaisé", "Faussé", "Vicié", "Alambiqué", "Complexe", "Confus", "Sophistiqué (au sens négatif)", "Tarabiscoté"],
            "Inventions": ["Farfadocieux (rusé et prétentieux)"]
        }
    },

    "traumatisé": {
        types: ["saniste"],
        intention: "Dire qu'on est choqué par quelque chose de banal",
        problematique: "Banalise le traumatisme psychologique, condition sérieuse (TSPT, trauma complexe).",
        alternatives: {
            "Descriptions": ["Choqué", "Surpris", "Déstabilisé", "Marqué", "Touché (si vraiment impactant)"],
            "NOTE": ["'Traumatisé' reste acceptable pour de vrais traumatismes"]
        }
    },

    "trisomique": {
        types: ["validiste"],
        intention: "Insulter quelqu'un au sujet de son intelligence",
        problematique: "Utilise directement un diagnostic médical (trisomie 21) comme insulte. Violence validiste pure.",
        alternatives: {
            "Vieux français": ["Bélître", "Butor", "Maraud", "Malotru", "Faquin", "Paltoquet", "Ganache"],
            "Familières": ["Andouille", "Cornichon", "Courge", "Patate", "Navet", "Gland"],
            "Pour un comportement": ["Irréfléchi", "Inconsidéré", "Imprudent"],
            "Inventions": ["Nodocéphale", "Malapraxique", "Pifpafique"],
            "Corse": ["O goffu (le maladroit)"]
        }
    },

    // ========== U ==========
    "unijambiste": {
        types: ["validiste"],
        intention: "Qualifier quelque chose d'incomplet, bancal (métaphore)",
        problematique: "Utilise l'amputation d'une jambe comme métaphore négative.",
        alternatives: {
            "Pour un concept (pas une personne)": ["Incomplet", "Lacunaire", "Partiel", "Déséquilibré (pour un objet/concept, pas une personne)"]
        }
    },

    // ========== V ==========
    "végéter": {
        types: ["validiste"],
        intention: "Dire que quelqu'un ne fait rien, vit passivement",
        problematique: "Compare des humains à des végétaux. Déshumanise, particulièrement les personnes en état de conscience minimale.",
        alternatives: {
            "Descriptions": ["Vivre passivement", "Sans projets", "Stagner", "Être inactif"]
        }
    },

    // ========== Z ==========
    "zinzin": {
        types: ["saniste"],
        intention: "Qualifier quelqu'un de bizarre",
        problematique: "Familier pour 'fou', donc même problématique.",
        alternatives: {
            "Descriptions": ["Excentrique", "Farfelu", "Original", "Fantaisiste", "Loufoque", "Fantasque", "Décalé", "Singulier", "À part"],
            "Vieux français": ["Olibrius", "Drôle de pistolet"],
            "Inventions": ["Farfadocieux", "Histrioncule"],
            "Vieux français/littéraire": ["Rocambolesque (extravagant)"]
        }
    },

    "zombie": {
        types: ["validiste", "saniste"],
        intention: "Qualifier quelqu'un de très fatigué, amorphe, ou sous l'effet de médicaments",
        problematique: "DÉSHUMANISE les personnes fatiguées ou sous traitement médical (notamment psychiatrique). Compare des êtres humains à des morts-vivants (sans conscience).",
        alternatives: {
            "Si fatigue": ["Épuisé", "Exténué", "Éreinté", "À plat", "Vidé", "Lessivé", "Fourbu"],
            "Si sous traitement": ["Somnolent", "Ralenti", "Au ralenti"],
            "Si apathie": ["Apathique", "Léthargique", "Inactif", "Avachi", "Amorphe", "Sans énergie"]
        }
    }
};
// ========================================
// CONTENUS TEXTUELS COMPLETS (VERSION INTÉGRALE)
// ========================================

const TEXTES = {
    aPropos: `
        <h2>Pourquoi ce dictionnaire ?</h2>
        <p>Le validisme, le capacitisme, le sanisme (ou psychophobie) et l'handiphobie désignent les discriminations envers les personnes en situation de handicap ou atteintes de troubles de santé mentale. Ces discriminations se manifestent notamment dans notre langage quotidien, où des termes médicaux désignant des handicaps ou des pathologies sont détournés en insultes. Cette banalisation renforce la stigmatisation et l'exclusion des personnes concernées.</p>
        
        <h3>L'objectif de ce dictionnaire est triple :</h3>
        <ul>
            <li>Prendre conscience des mots validistes, capacitistes, handiphobes et sanistes que nous utilisons souvent et parfois sans y penser.</li>
            <li>Comprendre pourquoi ces mots sont problématiques</li>
            <li>Proposer des alternatives riches, drôles, élégantes et variées en français pour enrichir notre vocabulaire sans discriminer.</li>
        </ul>

        <h3>Cadre légal en France</h3>
        <p>En France, les discriminations liées au handicap et à la santé mentale sont punies par la loi :</p>
        <ul>
            <li><strong>Articles 225-1 et suivants du Code pénal :</strong> discrimination fondée sur le handicap</li>
            <li><strong>Loi du 11 février 2005 :</strong> égalité des droits et des chances des personnes handicapées</li>
            <li><strong>Article 222-33 du Code pénal :</strong> le harcèlement moral, y compris à caractère validiste ou saniste</li>
        </ul>

        <h4>Sanctions encourues :</h4>
        <ul>
            <li>Jusqu'à 3 ans d'emprisonnement et 45 000 euros d'amende pour discrimination</li>
            <li>Peines aggravées si circonstances aggravantes (violence, position d'autorité...)</li>
            <li>Sanctions disciplinaires possibles dans le cadre professionnel ou éducatif</li>
        </ul>
        <p><em>ET 1 mois d'obligation d'écoute en boucle de "C'est pas faux" de Perceval en répétant après chaque réplique "Jarnidieu, quel faquin suis-je !" (bon d'accord, celle-là on l'a inventée, mais avouez que ça fait réfléchir)</em></p>

        <h3>Remerciements</h3>
        <p>Ce dictionnaire a été créé pour sensibiliser au validisme et au sanisme dans le langage quotidien. Il n'est pas exhaustif et peut être enrichi.</p>
        <p>Un grand merci aux associations de personnes concernées qui luttent au quotidien contre ces discriminations, et qui nous éduquent sur ces sujets.</p>
        <p><strong>Ensemble, faisons du français une langue plus riche, plus créative, et plus respectueuse de tou·tes.</strong></p>
    `,

    definitions: {
        intro: `<h2>Petit lexique des discriminations</h2>
        <p>Parce qu'il est important de nommer précisément les oppressions, voici les définitions des termes utilisés dans ce dictionnaire.</p>`,
        
        validisme: `
            <h2>Validisme</h2>
            <p><strong>Définition :</strong> Discrimination, préjugés et exclusion envers les personnes en situation de handicap (physique, sensoriel, intellectuel, psychique, etc.). Le validisme repose sur l'idée que les personnes valides sont la norme et que tout écart à cette norme est un défaut, une anomalie à corriger ou à cacher. Ce terme met l'accent sur la norme validiste qui exclut et marginalise.</p>
            
            <h3>Exemples :</h3>
            <ul>
                <li>Utiliser "débile", "handicapé", "boiteux" comme insultes</li>
                <li>Des bâtiments inaccessibles aux fauteuils roulants</li>
                <li>Infantiliser les personnes handicapées</li>
                <li>Parler à la place des personnes concernées</li>
                <li>Considérer le handicap comme une tragédie personnelle plutôt qu'un fait de société.</li>
            </ul>
            
            <p><strong>Origine du terme :</strong> "Valide" (qui n'a pas de handicap) + suffixe "-isme" (discrimination). Terme principalement utilisé dans l'espace francophone.</p>
        `,
        
        capacitisme: `
            <h2>Capacitisme</h2>
            <p><strong>Définition :</strong> Système d'oppression qui valorise certaines capacités corporelles et cognitives comme supérieures ou plus désirables, et qui structure la société autour de ces capacités considérées comme "normales". Le capacitisme ne se limite pas à discriminer les personnes handicapées, mais évalue et hiérarchise toutes les personnes selon leurs capacités (productivité, autonomie, performance). Il s'agit d'une logique plus large qui affecte aussi les personnes âgées, malades chroniques, ou temporairement diminuées.</p>
            
            <h3>Exemples :</h3>
            <ul>
                <li>Valoriser uniquement les corps "productifs" et "autonomes"</li>
                <li>L'injonction à la performance et à l'optimisation constante</li>
                <li>Considérer qu'une vie avec des limitations n'a pas de valeur</li>
                <li>Le mythe du "super-handicapé" qui doit "surmonter" son handicap pour être accepté</li>
                <li>L'eugénisme et le tri prénatal basé sur les capacités futures.</li>
            </ul>
            
            <p><strong>Origine du terme :</strong> De l'anglais <em>ableism</em> (de <em>able</em> = capable), traduction qui insiste sur la capacité comme critère de valeur. Terme issu des <em>disability studies</em> anglo-saxonnes.</p>
            
            <h4>La différence clé :</h4>
            <p><strong>Validisme</strong> = discrimination envers les personnes handicapées (opposition valide/invalide)</p>
            <p><strong>Capacitisme</strong> = système qui hiérarchise les individus selon leurs capacités, affectant un spectre plus large de personnes.</p>
            <p>Les deux termes se recoupent largement dans leurs effets sur les personnes handicapées, mais le capacitisme permet de penser une oppression plus systémique et extensive.</p>
        `,
        
        sanisme: `
            <h2>Sanisme (ou Psychophobie)</h2>
            <p><strong>Définition :</strong> Discrimination, préjugés et exclusion envers les personnes ayant ou ayant eu des troubles de santé mentale (dépression, troubles anxieux, troubles bipolaires, schizophrénie, etc.). Le sanisme repose sur l'idée que la santé mentale "normale" est la norme et que tout trouble mental est un défaut, une faiblesse morale ou une dangerosité.</p>
            
            <h3>Exemples :</h3>
            <ul>
                <li>Utiliser "fou", "schizo", "psychopathe", "dépressif" comme insultes</li>
                <li>Associer systématiquement maladie mentale et danger/violence</li>
                <li>Minimiser la souffrance ("c'est dans ta tête", "secoue-toi")</li>
                <li>Stigmatiser les personnes qui prennent des médicaments psychiatriques</li>
                <li>Infantiliser ou sur-médicaliser les personnes concernées</li>
            </ul>
            
            <p><strong>Origine du terme :</strong> Du latin "sanus" (sain d'esprit) + suffixe "-isme". Le terme a été popularisé dans les années 1990 par les mouvements de personnes concernées.</p>
        `,
        
        handiphobie: `
            <h2>Handiphobie</h2>
            <p><strong>Définition :</strong> Peur, rejet et hostilité envers les personnes en situation de handicap. C'est un terme plus général qui englobe à la fois le validisme (discrimination systémique) et les réactions individuelles de peur ou de dégoût face au handicap.</p>
            
            <h3>Exemples :</h3>
            <ul>
                <li>Éviter de regarder ou parler à une personne handicapée</li>
                <li>Avoir des réactions de dégoût face à certains handicaps visibles</li>
                <li>Refuser d'embaucher une personne handicapée par "peur"</li>
                <li>Utiliser le handicap comme insulte ou épouvantail</li>
            </ul>
        `,
        
        recoupements: `
            <h2>Différences et recoupements</h2>
            <ul>
                <li><strong>Validisme</strong> = discrimination envers les personnes handicapées, fondée sur l'opposition valide/invalide et l'idée que le handicap est une anomalie</li>
                <li><strong>Capacitisme</strong> = système d'oppression qui hiérarchise les individus selon leurs capacités corporelles et cognitives, valorisant la productivité, l'autonomie et la performance comme normes sociales</li>
                <li><strong>Sanisme</strong> = discrimination systémique envers les troubles de santé mentale et les personnes psychiatrisées</li>
                <li><strong>Handiphobie</strong> = terme parapluie incluant peur, rejet et hostilité envers le handicap en général (dimension plus affective et individuelle)</li>
            </ul>
            
            <p><strong>À noter :</strong> Le validisme et le capacitisme se recoupent largement dans leurs effets sur les personnes handicapées, mais le capacitisme permet d'analyser une logique plus large qui touche aussi les personnes âgées, malades chroniques, ou en situation de vulnérabilité temporaire. Le sanisme, bien que ciblant spécifiquement la santé mentale, partage avec le validisme et le capacitisme cette même logique de normalisation et d'exclusion.</p>
            
            <p>Ces discriminations s'entrecroisent souvent (une personne peut subir simultanément validisme, capacitisme et sanisme) et s'articulent avec d'autres oppressions (sexisme, racisme, âgisme, classisme, LGBTIphobie, etc.), créant des situations de discriminations multiples et imbriquées.</p>
        `
    },

    hallOfShame: `
        <h2>Hall of Shame : Quand les politiques montrent l'exemple... du validisme</h2>
        <p>Parce que le validisme ne concerne pas que le langage quotidien, voici des exemples récents de personnalités politiques de droite et d'extrême-droite qui ont utilisé le handicap comme insulte ou métaphore négative.</p>
        <p><strong>Le validisme existe dans tout le spectre politique, mais force est de constater que ces exemples médiatisés viennent tous de ce camp-là.</strong></p>

        <h3>Jean-Pierre Farandou (2025) : "On n'est pas sourds, on n'est pas autistes"</h3>
        <p><strong>Le contexte :</strong> Le 14 octobre 2025, à peine nommé ministre du Travail et des Solidarités (l'ironie, tudieu !), Jean-Pierre Farandou déclare sur le plateau du JT de 20h de France 2 : « On n'est pas sourds, on n'est pas autistes, on voit bien qu'elle passe mal, cette réforme [des retraites] ! »</p>
        <p><strong>Le problème :</strong> Le ministre utilise la surdité et l'autisme comme synonymes d'incompétence, de déconnexion de la réalité et d'incapacité à percevoir les problèmes. C'est d'une violence inouïe pour les 650 000 personnes autistes et les millions de personnes sourdes en France.</p>
        <p><strong>L'ironie cruelle :</strong> Celui qui est censé incarner les "solidarités" nationales commence son mandat en stigmatisant les personnes en situation de handicap. Cerise sur le gâteau : Léa Salamé ne bronche pas. France Télévisions supprime puis modifie son tweet initial pour retirer la mention "on n'est pas autistes", tentant maladroitement de protéger le ministre. Le service public, complice du validisme ? Fichtre !</p>
        <p><strong>Ce qu'il aurait dû dire :</strong> "On voit bien qu'elle passe mal, cette réforme" — tout simplement, sans instrumentaliser le handicap.</p>

        <h3>François Bayrou (2025) : "Réutiliser le matériel des personnes infirmes"</h3>
        <p><strong>Le contexte :</strong> En juillet 2025, lors des débats budgétaires, le Premier ministre François Bayrou déclare vouloir « réutiliser » le matériel médical « pour les personnes infirmes gravement malades, en fin de vie, les cannes anglaises » après que « la personne a disparu ».</p>
        <p><strong>Le problème :</strong> Bayrou utilise le terme péjoratif et validiste « infirmes » (terme médical du XIXe siècle aujourd'hui considéré comme méprisant), et propose de récupérer les béquilles et fauteuils roulants des personnes décédées comme mesure d'économie budgétaire.</p>
        <p>Les personnes handicapées réduites à des variables d'ajustement comptable. On vous laisse apprécier la profondeur du malaise.</p>
        <p><strong>L'indécence ET l'incompétence :</strong> Parler de « récupérer » le matériel médical des personnes handicapées décédées comme on récupère de vieux meubles, utiliser un vocabulaire validiste ("infirmes"), présenter cela comme une innovation économique... alors que CE SYSTÈME EXISTE DÉJÀ ! Sacrebleu ! Des associations, des acteurs de l'économie sociale et solidaire récupèrent et réhabilitent ce matériel depuis des années. Mieux encore : la Sécurité sociale a DÉJÀ un protocole de remboursement pour la prise en charge du matériel médical de seconde main !</p>
        <p>Le Premier ministre « découvre » l'eau chaude, ignore les dispositifs existants de son propre gouvernement, et au passage insulte les personnes handicapées.</p>
        <p>Un exploit, fichtre !</p>
        <p><strong>Ce qu'il aurait dû faire :</strong> Se renseigner AVANT de parler, découvrir que tout cela existe déjà, puis soit se taire, soit valoriser et renforcer les dispositifs existants (associations, protocole Sécu) au lieu de jouer les grands innovateurs validistes et ignares.</p>

        <h3>Éric Zemmour (2022) : Moquerie de la surdité de Jean-Luc Mélenchon</h3>
        <p><strong>Le contexte :</strong> Le 27 janvier 2022, dans l'émission Face à Baba sur C8, Éric Zemmour coupe Jean-Luc Mélenchon en plein débat sur les retraites : « Vous en avez d'autres, monsieur de La Palisse ? ». Mélenchon demande de répéter. Zemmour rétorque en tapotant son oreille : « Ça reçoit ? » puis « Mais ça rend sourd, hein ! »</p>
        <p><strong>Le problème :</strong> Zemmour se moque ouvertement du handicap auditif de Jean-Luc Mélenchon, sourd de naissance. C'est une attaque ad hominem validiste pure et simple, en direct à la télévision.</p>
        <p><strong>La réponse de Mélenchon :</strong> « Je suis sourd de naissance. Vous avez quelque chose contre les handicapés, j'ai remarqué. Vous êtes vulgaire et vous détestez tout le monde : les musulmans, les enfants handicapés. »</p>
        <p><strong>Ce qu'il n'aurait JAMAIS dû faire :</strong> Se moquer du handicap d'un adversaire politique, quelle que soit l'intensité du débat. Le respect des personnes en situation de handicap n'est pas négociable.</p>

        <h3>François Fillon (2017) : "Je ne suis pas autiste"</h3>
        <p><strong>Le contexte :</strong> Le 5 mars 2017, en pleine affaire Penelopegate, François Fillon répète à quatre reprises sur le plateau du JT de France 2 : « Je ne suis pas autiste », pour dire qu'il n'est pas "enfermé dans une certitude" et qu'il "voit bien les difficultés".</p>
        <p><strong>Le problème :</strong> Le candidat à la présidentielle associe l'autisme à l'aveuglement, l'imperméabilité à la critique, l'enfermement, voire la malhonnêteté et le déni. Il véhicule des clichés totalement faux sur l'autisme et déshumanise les personnes autistes en en faisant des êtres fermés, incapables de percevoir la réalité, voire des monstres sociaux.</p>
        <p><strong>Le comble :</strong> Son épouse Penelope Fillon était à l'époque marraine de l'association Asperger Aide France. Palsambleu ! L'association SOS Autisme a demandé des excuses publiques et saisi le CSA. Le hashtag #JeSuisAutiste a émergé sur les réseaux sociaux, avec des personnes autistes qui répondaient : "Je suis autiste, pour de vrai, et je suis quelqu'un d'honnête qui ne vole pas d'argent et qui n'affabule pas sur les médias".</p>
        <p><strong>Ce qu'il aurait dû dire :</strong> "Je ne suis pas fermé au dialogue", "Je reste à l'écoute des critiques", "Je ne suis pas buté" — le français regorge de termes précis.</p>

        <p><strong>Morale :</strong> Ces exemples viennent tous de la droite et de l'extrême-droite. Service public, candidats à la présidentielle, ministres... Le validisme existe partout, mais il est particulièrement présent et décomplexé dans ces milieux. C'est pour cela qu'un travail sur notre langage quotidien est essentiel. Parbleu !</p>
    `
};
// ========================================
// ALTERNATIVES COMPLÈTES
// ========================================

const ALTERNATIVES = {
    introduction: `
        <h2>Les alternatives</h2>
        <p>Voici un récapitulatif des insultes que vous pouvez utiliser sans discrimination :</p>
    `,
    
    vieuxFrancais: {
        titre: "Insultes élégantes du vieux français",
        contenu: `
            <ul class="alternatives-list">
                <li><strong>Bélître :</strong> mendiant, homme de rien, importun</li>
                <li><strong>Butor :</strong> personne lourde, grossière</li>
                <li><strong>Cuistre :</strong> pédant ridicule et vaniteux</li>
                <li><strong>Faquin :</strong> personnage méprisable, vaniteux, malhonnête</li>
                <li><strong>Forban :</strong> homme sans scrupule</li>
                <li><strong>Foutriquet :</strong> personne insignifiante</li>
                <li><strong>Fripon :</strong> personne malhonnête, fourbe</li>
                <li><strong>Ganache :</strong> personne incapable et bornée</li>
                <li><strong>Goujat :</strong> homme grossier, malotru</li>
                <li><strong>Gougnafier :</strong> individu sans valeur</li>
                <li><strong>Malappris :</strong> personne mal élevée, impolie</li>
                <li><strong>Malotru :</strong> personne aux manières grossières</li>
                <li><strong>Maraud :</strong> homme du peuple (condescendant)</li>
                <li><strong>Maroufle :</strong> personnage grossier ou malhonnête</li>
                <li><strong>Mufle :</strong> personnage vulgaire, grossier, indélicat</li>
                <li><strong>Olibrius :</strong> quelqu'un de prétentieux et bizarre</li>
                <li><strong>Paltoquet :</strong> homme prétentieux et insolent</li>
                <li><strong>Pignouf :</strong> individu grossier, dépourvu de finesse</li>
                <li><strong>Pisse-froid :</strong> quelqu'un de froid et morose</li>
                <li><strong>Ribaud :</strong> débauché, impudique</li>
                <li><strong>Sagouin :</strong> personne sale, malpropre</li>
            </ul>
        `
    },
    
    alimentaires: {
        titre: "Insultes alimentaires",
        contenu: `<p>Andouille, cornichon, courge, patate, nouille, navet, gland, courgette…</p>`
    },
    
    inventions: {
        titre: "Inventions lexicales satiriques et érudites - Épithètes inventées à base de racines grecques/latines",
        contenu: `
            <ul class="alternatives-list">
                <li><strong>Autopraxique</strong> – <em>autos + praxis</em> – agit toujours seul, incapable de coopérer</li>
                <li><strong>Barbouillomancien</strong> – <em>barbouiller + -manie</em> – qui brouille ou salit tout de façon obsessionnelle, à la fois toutologue et brouilleur de repères</li>
                <li><strong>Babilonien</strong> – <em>babylon</em> – bavard exubérant, souvent inutile</li>
                <li><strong>Blablastique</strong> – <em>blabla + blastikos</em> – bavard explosif, qui parle pour rien</li>
                <li><strong>Blancristocrate</strong> – <em>blanc + aristocrate</em> – nostalgique d'une société figée et exclusive</li>
                <li><strong>Boustifolard</strong> – <em>boustifaille</em> – gourmand exagéré ou festif ridicule</li>
                <li><strong>Bubulophile</strong> – <em>bubulus + philos</em> – passionné de choses insignifiantes, obsession futile</li>
                <li><strong>Chafouinette</strong> – <em>chafouin + diminutif</em> – rusé mais ridicule</li>
                <li><strong>Clapoculiste</strong> – <em>clapo + cul</em> – bavard maladroit, fait du bruit inutilement</li>
                <li><strong>Crénombricole</strong> – <em>crénom + bricole</em> – celui qui peste et bricole sans résultat</li>
                <li><strong>Crépusculier</strong> – <em>crepusculum</em> – agit dans l'ombre, obscur</li>
                <li><strong>Doxomane</strong> – <em>doxa + mania</em> – obsédé par l'opinion d'autrui (ou par les sondages)</li>
                <li><strong>Egotrème</strong> – <em>ego + trêma</em> – égocentrique béant, vide mais bruyant</li>
                <li><strong>Ethnoxylé</strong> – <em>ethnos + xylon</em> – esprit de bois nationaliste</li>
                <li><strong>Exclusivophilie</strong> – <em>exclusivus + philia</em> – amour de l'exclusion et du rejet</li>
                <li><strong>Farfadocieux</strong> – <em>farfadet + docere</em> – rusé et prétentieux, aime embrouiller les autres</li>
                <li><strong>Farfelucratique</strong> – <em>farfelu + kratos</em> – dirigeant farfelu ou bureaucrate exubérant</li>
                <li><strong>Filigranophile</strong> – <em>filigrana + philos</em> – amoureux des détails inutiles et futiles</li>
                <li><strong>Flagitieux</strong> – <em>flagrare</em> – criminel, infâme</li>
                <li><strong>Fissilingual</strong> – <em>fissus + lingua</em> – langue de vipère</li>
                <li><strong>Fumigèneur</strong> – <em>fumus + gener</em> – qui brouille tout, crée de la confusion</li>
                <li><strong>Fumigophore</strong> – <em>fumus + phoros</em> – qui crée la confusion, brouille les esprits</li>
                <li><strong>Glougloutard</strong> – <em>glouglou + suffixe</em> – bavard exubérant, bruyant et ridicule</li>
                <li><strong>Gribouillophage</strong> – <em>gribouillus + phagein</em> – qui mange ou perd son temps à griffonner inutilement</li>
                <li><strong>Gribouillomancien</strong> – <em>gribouiller + -manie</em> – obsédé par griffonner ou bricoler inutilement</li>
                <li><strong>Grinchelobscur</strong> – <em>grinche + obscur</em> – râleur mystérieux</li>
                <li><strong>Grinchevrel</strong> – <em>grinche + vel</em> – râleur chronique mais comique</li>
                <li><strong>Histrioncule</strong> – <em>histrio + suffixe diminutif</em> – petit acteur prétentieux, dramatique</li>
                <li><strong>Logorrhéphore</strong> – <em>logos + rheô + phoros</em> – débiteur de flots de paroles inutiles</li>
                <li><strong>Malapraxique</strong> – <em>mal + praxis</em> – maladroit dans l'action</li>
                <li><strong>Marmousetique</strong> – <em>marmouset</em> – petit prétentieux ou ridicule</li>
                <li><strong>Nasolecte</strong> – <em>nasus + loqui</em> – bavard ridicule ou prétentieux</li>
                <li><strong>Nodocéphale</strong> – <em>nodos + kephalè</em> – tête de nœud, obstiné confus</li>
                <li><strong>Nodocéphalogique</strong> – <em>nodos + kephalè + logique</em> – tête de nœud avec prétention scientifique (syn. de pseudo scientifique)</li>
                <li><strong>Obscurantule</strong> – <em>obscurare</em> – qui obscurcit les faits, manipulateur</li>
                <li><strong>Orchidoclaste</strong> – <em>orchis + klastos</em> – voir les insultes en breton. Briseur de gonades masculines</li>
                <li><strong>Pataquèsien</strong> – <em>pataquès</em> – qui mélange tout, crée le chaos verbal ou administratif</li>
                <li><strong>Patriomonarchiste</strong> – <em>patrimoine + monarchiste</em> – adore "protéger le patrimoine" dans un sens ethnique et culturel très personnel</li>
                <li><strong>Pédiculeux</strong> – <em>pediculus</em> – pouilleux, miteux</li>
                <li><strong>Pifomètreur</strong> – <em>pif + metrum</em> – qui juge tout à vue de nez ou sondagier exagérateur</li>
                <li><strong>Pifpafique</strong> – <em>pif-paf</em> – impulsif, tape à côté ou fait du bruit pour rien</li>
                <li><strong>Poltronnier</strong> – <em>poltro</em> – peureux ou couard (satirique)</li>
                <li><strong>Rocambolesque</strong> – <em>rocambole</em> – exubérant et extravagant</li>
                <li><strong>Rocambolophobe</strong> – <em>rocambole + phobe</em> – ne craint pas ses propres extravagances mais critique celles des autres</li>
                <li><strong>Ructabonde</strong> – <em>ructus + abundare</em> – qui rote bruyamment</li>
                <li><strong>Rabougrin</strong> – <em>rabougri</em> – ridicule, maladroit ou limité dans ses excès</li>
                <li><strong>Somnambulogue</strong> – <em>somnus + ambulare + logos</em> – dit des bêtises en parlant dans le vide, jusqu'à endormir les gens qui l'écoutent</li>
                <li><strong>Sapienticule</strong> – <em>sapiens + suffixe diminutif</em> – petit sage prétentieux</li>
                <li><strong>Sofocrate</strong> – <em>sophos + kratos</em> – se croit sage et impose ses idées</li>
                <li><strong>Tartignolard</strong> – <em>tartignole</em> – ridicule prétentieux, fanfaron</li>
                <li><strong>Tartufolique</strong> – <em>Tartuffe + philos</em> – faux dévot, hypocrite à l'excès</li>
                <li><strong>Tic-taculeux</strong> – <em>tic-tac + suffixe</em> – obsessionnel sur les détails chronométriques</li>
                <li><strong>Ventripotent</strong> – <em>venter + potent</em> – exubérant, prétentieux et gourmand</li>
                <li><strong>Vaporfique</strong> – <em>vapor + ficus</em> – qui disparaît quand les problèmes arrivent</li>
                <li><strong>Vapulotomique</strong> – <em>vapor + luto + tomique</em> – qui fait beaucoup de bruit pour rien</li>
                <li><strong>Vexibond</strong> – <em>vexare + bondire</em> – qui s'indigne pour un rien, excessif</li>
                <li><strong>Verboplecte</strong> – <em>verbum + plectere</em> – s'emmêle dans ses propres mots</li>
                <li><strong>Xénophilophobe</strong> – <em>xeno + philo + phobe</em> – aime haïr ceux qui ne lui ressemblent pas</li>
                <li><strong>Xenovotant</strong> – <em>xeno + votant</em> – électeur guidé par la haine de l'étranger</li>
            </ul>
        `
    },

    regionaux: {
        titre: "Tour de France des insultes régionales non oppressives",
        sections: {
            alsacien: {
                titre: "ALSACIEN (les plus drôles !)",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Cervilagingel :</strong> Asticot à cervelas</li>
                        <li><strong>Hànswurscht :</strong> Jean Saucisse</li>
                        <li><strong>Dräckspatz :</strong> Sale moineau, souillon</li>
                        <li><strong>Beerflaschebrunzer :</strong> Pisseur de bouteille de bière</li>
                        <li><strong>Johmeri :</strong> Quelqu'un qui se plaint beaucoup</li>
                        <li><strong>Lewerworschtsauer :</strong> Saucisse de foie vexée (quelqu'un qui boude!)</li>
                        <li><strong>Falscherseckel :</strong> Faux-cul</li>
                        <li><strong>Putzfrawecasanova :</strong> Playboy des femmes de ménages</li>
                        <li><strong>Stinkmichel :</strong> Michel qui pue</li>
                        <li><strong>Hornochs :</strong> Espèce de rhinocéros</li>
                        <li><strong>Fleischkiechleschiesser :</strong> déféqueur de boulette de viande</li>
                        <li><strong>Knepfelefratz :</strong> Face de quenelle</li>
                        <li><strong>Zewalla pfurz :</strong> Pet d'oignon</li>
                    </ul>
                `
            },
            breton: {
                titre: "BRETON",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Kaoc'h :</strong> Merde</li>
                        <li><strong>Penn-kaoc'h :</strong> Tête de…</li>
                        <li><strong>Torr-revr :</strong> orchidoclaste</li>
                        <li><strong>Gaouyaer :</strong> Menteur</li>
                        <li><strong>Krog :</strong> Accro, avare (qui accroche/retient tout)</li>
                        <li><strong>Pennkaled :</strong> Tête dure (têtu, obstiné)</li>
                        <li><strong>Brezhoneg :</strong> Bavard (littéralement "breton", usage ironique)</li>
                        <li><strong>Droukdener :</strong> Mauvais caractère</li>
                        <li><strong>Breinañ :</strong> Pourri (personne corrompue)</li>
                        <li><strong>Skluj :</strong> Sale, crasseux</li>
                    </ul>
                    <h4>Jurons d'exaspération :</h4>
                    <ul class="alternatives-list">
                        <li>Diaoul ! : Diable !</li>
                        <li>Mallozh ! : Malédiction !</li>
                        <li>Taol Doue ! : Par Dieu !</li>
                        <li>Souden ! : Sacré ! Fichtre !</li>
                    </ul>
                    <h4>Expressions :</h4>
                    <ul class="alternatives-list">
                        <li>Kaoc'h ki : Merde de chien (intensificateur)</li>
                        <li>Kaoc'h bara : Croûte de pain (personne insignifiante)</li>
                    </ul>
                `
            },
            chti: {
                titre: "CH'TI / PICARD",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Caronne :</strong> Charogne (personne désagréable)</li>
                        <li><strong>Caboche :</strong> Mauvaise tête</li>
                        <li><strong>Babelle :</strong> Bavard</li>
                        <li><strong>Merlaud / Marlou :</strong> Voyou, filou</li>
                        <li><strong>Rabouilleux :</strong> Qui fait du désordre, brouillon</li>
                        <li><strong>Braillard :</strong> Qui crie, gueulard</li>
                        <li><strong>Racro :</strong> Sale, crasseux</li>
                        <li><strong>Fricoteux :</strong> Magouilleur, qui combine</li>
                        <li><strong>Chicaneux :</strong> Qui cherche la petite bête, querelleur</li>
                    </ul>
                    <h4>Expressions :</h4>
                    <ul class="alternatives-list">
                        <li>Crénon des aulx !</li>
                        <li>Sapristi !</li>
                        <li>Saperlotte !</li>
                        <li>Saperlipopette !</li>
                        <li>Saquernon !</li>
                    </ul>
                `
            },
            corse: {
                titre: "CORSE",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Testa di legnu :</strong> Tête de bois (têtu, borné)</li>
                        <li><strong>Sciacquone / Sciacquetta :</strong> Bon à rien, fainéant</li>
                        <li><strong>Storditu :</strong> Étourdi, distrait</li>
                        <li><strong>Ciccarone :</strong> Bavard, commère</li>
                        <li><strong>Furbacchione :</strong> Petit malin, rusé (peut être péjoratif)</li>
                        <li><strong>Sgarbatu :</strong> Grossier, malpoli</li>
                        <li><strong>Taccagnu :</strong> Radin, avare</li>
                        <li><strong>Strambacciu :</strong> Bizarre, excentrique</li>
                        <li><strong>Leccapiatti :</strong> Lèche-assiette (flatteur, opportuniste)</li>
                        <li><strong>Sfaccendatu :</strong> Indiscret, fouineur</li>
                    </ul>
                    <h4>Jurons d'exaspération (non dirigés) :</h4>
                    <ul class="alternatives-list">
                        <li>Porca miseria ! : Misère !</li>
                        <li>Accidenti ! : Zut ! Mince !</li>
                        <li>Mannaggia ! : Bon sang !</li>
                    </ul>
                `
            },
            creoleAntillais: {
                titre: "CRÉOLE ANTILLAIS (Martinique/Guadeloupe)",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Makro / Spèce makro :</strong> Salaud</li>
                        <li><strong>Koken :</strong> Coquin au sens de malhonnête</li>
                        <li><strong>Malfézan :</strong> Méchant</li>
                        <li><strong>Malparlan :</strong> Médisant</li>
                        <li><strong>Mantò :</strong> Menteur</li>
                        <li><strong>Kanay :</strong> Canaille</li>
                        <li><strong>Isalòp :</strong> Personne sans scrupule</li>
                        <li><strong>Fouyaya :</strong> Curieux, fouineur</li>
                        <li><strong>Grimèl :</strong> Avare, radin</li>
                        <li><strong>Mové lang :</strong> Mauvaise langue, commère</li>
                        <li><strong>Enkont :</strong> Importun, casse-pieds</li>
                        <li><strong>Fòdjèl :</strong> Prétentieux, m'as-tu-vu</li>
                        <li><strong>Tchenbè :</strong> Profiteur, qui s'accroche</li>
                        <li><strong>Kouto anba do :</strong> Traître (couteau sous le dossier)</li>
                        <li><strong>Jennfoutè :</strong> Je-m'en-foutiste, négligent</li>
                        <li><strong>Tcholéré :</strong> Tête brûlée, impulsif</li>
                        <li><strong>Kalkile :</strong> Calculateur, manipulateur</li>
                    </ul>
                `
            },
            creoleReunionnais: {
                titre: "CRÉOLE RÉUNIONNAIS",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Malpròp :</strong> Malpropre</li>
                        <li><strong>Malélivé :</strong> Mal élevé</li>
                        <li><strong>Fronté :</strong> Effronté</li>
                        <li><strong>Malonèt :</strong> Malhonnête</li>
                        <li><strong>Laper :</strong> Bavard, rapporteur</li>
                        <li><strong>Grin dan :</strong> Avare (qui grince des dents)</li>
                        <li><strong>Gratèr :</strong> Profiteur, parasite</li>
                        <li><strong>Mové kèr :</strong> Mauvais cœur, méchant</li>
                        <li><strong>Kapon :</strong> Peureux, lâche</li>
                        <li><strong>Mangfonnkèr :</strong> Traître (mange le fond du cœur)</li>
                    </ul>
                `
            },
            normand: {
                titre: "NORMANDIE (Normand/Cauchois)",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Fretlaúmpi :</strong> Voyou, contrebandier</li>
                        <li><strong>Grand sicot :</strong> Vaurien</li>
                        <li><strong>Caboche :</strong> Fort caractère, forte tête</li>
                        <li><strong>Babelle :</strong> Bavard</li>
                        <li><strong>Balochard :</strong> Traîne-savate, bon à rien</li>
                        <li><strong>Marle :</strong> Filou, rusé</li>
                        <li><strong>Rapiat :</strong> Avare, radin</li>
                        <li><strong>Grosse tête :</strong> Prétentieux, orgueilleux</li>
                        <li><strong>Maufaisant :</strong> Malfaisant, méchant</li>
                        <li><strong>Gratoui :</strong> Gratteur, profiteur</li>
                        <li><strong>Braillard :</strong> Gueulard, criard</li>
                        <li><strong>Fricoteux :</strong> Magouilleur, combinard</li>
                        <li><strong>Chicaneux :</strong> Qui cherche querelle, râleur</li>
                        <li><strong>Malpropre :</strong> Sale, crasseux</li>
                        <li><strong>Boueux :</strong> Boueux, salissant (personne qui fait du désordre)</li>
                    </ul>
                `
            },
            occitan: {
                titre: "OCCITAN / PATOIS DU SUD-OUEST",
                contenu: `
                    <ul class="alternatives-list">
                        <li><strong>Mila Diou / Milla Dious :</strong> Mille dieux !</li>
                        <li><strong>Boudu :</strong> Bon Dieu (exclamation)</li>
                        <li><strong>Mascagnaïre :</strong> Quelqu'un qui gâte son travail</li>
                        <li><strong>Rouméguer :</strong> Râler</li>
                        <li><strong>Cagaire :</strong> Froussard, peureux</li>
                        <li><strong>Bausièr :</strong> Menteur, hâbleur</li>
                        <li><strong>Galapian :</strong> Vaurien, garnement</li>
                        <li><strong>Babòt :</strong> Bavard, qui parle pour ne rien dire</li>
                        <li><strong>Malin :</strong> Rusé, sournois (sens péjoratif)</li>
                        <li><strong>Pantaïaire :</strong> Qui traîne, lambin</li>
                        <li><strong>Escagarlacha :</strong> Débrouillard malhonnête, magouilleur</li>
                        <li><strong>Cacarassaire :</strong> Commère, cancanier</li>
                        <li><strong>Malavesit :</strong> Mal avisé, qui fait des bêtises</li>
                        <li><strong>Grapaud :</strong> Avare, radin</li>
                        <li><strong>Tòrt :</strong> malhonnête</li>
                        <li><strong>Ganhaire :</strong> Profiteur, qui cherche son intérêt</li>
                        <li><strong>Esperluquet :</strong> Étourdi, évaporé</li>
                        <li><strong>Braguèt :</strong> Prétentieux, frimeur</li>
                    </ul>
                    <h4>Jurons supplémentaires :</h4>
                    <ul class="alternatives-list">
                        <li>Pèr de Diu ! : Par Dieu !</li>
                        <li>Caspita ! : Fichtre !</li>
                    </ul>
                `
            }
        }
    },

    descriptions: {
        titre: "Descriptions factuelles de comportements problématiques",
        contenu: `
            <p>Au lieu d'insulter la personne, décrivez précisément le comportement :</p>
            <ul class="alternatives-list">
                <li>Tu mens / Tu es malhonnête</li>
                <li>Tu es violent / agressif</li>
                <li>Tu es irrespectueux / impoli / grossier</li>
                <li>Tu es méprisant / condescendant</li>
                <li>Tu manipules / Tu es manipulateur</li>
                <li>Tu es cruel / impitoyable / insensible</li>
            </ul>
        `
    },

    jurons: {
        titre: "Jurons et exclamations pour remplacer 'C'est fou !'",
        contenu: `
            <p>Bigre ! Bon sang ! Bon sang de bois ! Bon sang de bonsoir !</p>
            <p>Bougre !</p>
            <p>Ça alors ! Ciel ! Corbleu ! Crénom ! Crédié !</p>
            <p>Diable ! Diantre ! Doux Jésus !</p>
            <p>Fichtre ! Fichtre bougre ! Fichtre diantre ! Fichtre dieu !</p>
            <p>Grands dieux !</p>
            <p>Jarnibleu ! Jarnidieu !</p>
            <p>Ma parole ! Macache ! Mâtin ! Mazette ! Mazette alors ! Mille sabords ! Mille tonnerres ! Miséricorde ! Morbleu !</p>
            <p>Nom d'un petit bonhomme ! Nom d'une pipe !</p>
            <p>Palsambleu ! Par exemple ! Peste !</p>
            <p>Que diable !</p>
            <p>Sacrebleu ! Sacreblotte ! Saperlipopette ! Saperlotte !</p>
            <p>Sapristi !</p>
            <p>Tonnerre ! Tudieu !</p>
            <p>Ventrebleu ! Vertubleu !</p>
        `
    },

    conclusion: {
        titre: "Conclusion",
        contenu: `
            <p>Le français est une langue d'une richesse EXTRAORDINAIRE. Nous avons des CENTAINES de mots pour exprimer des nuances, critiquer, se moquer, sans avoir besoin d'utiliser le handicap, la maladie ou les troubles mentaux comme repoussoirs.</p>
            
            <p>Changer son vocabulaire n'est pas de la censure : c'est :</p>
            <ul>
                <li>Enrichir sa langue</li>
                <li>Affiner sa pensée</li>
                <li>Respecter la dignité de chacun·e</li>
                <li>Insulter avec CLASSE et créativité</li>
            </ul>

            <p><strong>La langue française et nos patois vous offrent un arsenal d'insultes magnifiques, alors servez-vous en !</strong></p>
            <p>Et si cela ne vous suffit pas, allez voir la section "inventions satiriques lexicales" de ce dictionnaire !</p>
        `
      }
};
// Export pour utilisation dans l'app
if (typeof module !== 'undefined' && module.exports) {
module.exports = { DICTIONARY, EXPRESSIONS, TEXTES, ALTERNATIVES };
}
