// Conteneur pour les menus et les plats à la carte
const menuContainer = document.getElementById("menuSection");
const aLaCarteContainer = document.getElementById("aLaCarteSection");

// Ajout des menus directement
menuContainer.innerHTML += getMenu(
    "Menu Gourmet",
    "25,00 €",
    "Une expérience gastronomique complète avec entrée, plat et dessert.",
    [
        { type: "Entrée ", plat : "Foie gras maison avec pain d’épices" },
        { type: "Plat ", plat: "Magret de canard aux figues" },
        { type: "Dessert ", plat: "Tartelette au chocolat et caramel" },
    ]
);
menuContainer.innerHTML += getMenu(
    "Menu Enfant",
    "12,00 €",
    "Un menu spécialement conçu pour les petits gourmands.",
    [
        { type: "Entrée ", plat: "Petit délice du jardin" },
        { type: "Plat ", plat: "Nuggets de poulet avec frites maison" },
        { type: "Dessert ", plat: "Glace à la vanille avec coulis de fraise" },
    ]
);

// Ajout des plats à la carte directement
aLaCarteContainer.innerHTML += getAlaCarte("À la Carte", {
    entrees: [
        { nom: "Oeuf parfait gourmand", prix: "12,00 €", description: "Oeuf poché sur son lit d'avocat."  },
        { nom: "Délice du jardin", prix: "8,00 €", description: "Salade mélangée, tomates confites avec parmesan et croutons."  },
        { nom: "Velouté aux Herbes", prix: "10,00 €", description: "Velouté au Quinoa et aux herbes de saison."  },
    ],
    plats: [
        { nom: "L'excellence du Chef", prix: "35,00 €", description: "Laissez vous surprendre par le plat signature du Chef."  },
        { nom: "Duo Terre et Mer", prix: "18,00 €", description: "Brochettes de saumon et de canard accompagnées d'une sauce vierge."  },
        { nom: "Côtelette d’Agneau Rôtie", prix: "25,00 €", description: "Côtelette rotie au feu de bois."  },
    ],
    desserts: [
        { nom: "Crème brûlée", prix: "6,00 €", description: "Un dessert classique avec une croûte caramélisée." },
        { nom: "Moelleux au chocolat", prix: "8,00 €", description: "Un moelleux au chocolat avec un cœur fondant." },
    ],
});

// Fonction pour générer un menu
function getMenu(titre, prix, description, contenu) {
    titre = sanitizeHtml(titre);
    prix = sanitizeHtml(prix);
    description = sanitizeHtml(description);

    let contenuHtml = "";
    contenu.forEach((item) => {
        contenuHtml += `<li><strong>${sanitizeHtml(item.type)}:</strong> ${sanitizeHtml(item.plat)}</li>`;
    });

    return `
        <div class="col p-3">
            <div class="card">
                <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h2>${titre} - ${prix}</h2>
                    <div>
                        <button class="btn btn-secondary btn-sm"  data-show="admin" data-bs-toggle="modal" data-bs-target="#editMenuModal" data-title="${titre}" data-price="${prix}" data-description="${description}">Modifier<i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-danger btn-sm" data-show="admin" data-bs-toggle="modal" data-bs-target="#deleteMenuModal" data-title="${titre}">Supprimer<i class="bi bi-trash"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <p>${description}</p>
                    <ul>${contenuHtml}</ul>
                </div>
            </div>
        </div>`;
}

// Fonction pour générer les plats à la carte
function getAlaCarte(titre, contenu) {
    titre = sanitizeHtml(titre);

    let entreesHtml = "";
    contenu.entrees.forEach((entree) => {
        entreesHtml += `<li>
                            <strong>${sanitizeHtml(entree.nom)}</strong> - ${sanitizeHtml(entree.prix)}
                            <p>${sanitizeHtml(entree.description)}</p>
                        </li>`;
    });

    let platsHtml = "";
    contenu.plats.forEach((plat) => {
        platsHtml += `<li>
                        <strong>${sanitizeHtml(plat.nom)}</strong> - ${sanitizeHtml(plat.prix)}
                        <p>${sanitizeHtml(plat.description)}</p>
                    </li>`;
    });

    let dessertsHtml = "";
    contenu.desserts.forEach((dessert) => {
        dessertsHtml += `<li>
                            <strong>${sanitizeHtml(dessert.nom)}</strong> - ${sanitizeHtml(dessert.prix)}
                            <p>${sanitizeHtml(dessert.description)}</p>
                        </li>`;
    });

    return `
        <div class="col p-3">
            <div class="card">
                <div class="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <h2>${titre}</h2>
                    <div>
                        <button class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-show="admin data-bs-target="#editMenuModal" data-title="${titre}">Modifier<i class="bi bi-pencil-square"></i></button>
                        <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-show="admin data-bs-target="#deleteMenuModal" data-title="${titre}">Supprimer<i class="bi bi-trash"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <h3>Entrées</h3>
                        <ul>${entreesHtml}
                    <h3>Plats</h3>
                        <ul>${platsHtml}</ul>
                    <h3>Desserts</h3>
                        <ul>${dessertsHtml}</ul>
                </div>
            </div>
        </div>`;
}