const galerieImage = document.getElementById("allImages");

//Rajout des images directement avec methode manuelle car peu d'images. Sinon priviliégier tableau et boucle en rajoutant un const images pour une gestion plus simple

galerieImage.innerHTML += getImage("Oeuf parfait gourmand", "../images/Assiette_oeuf_avocat.jpg");
galerieImage.innerHTML += getImage("Délices du jardin","../images/Assiette_salade.jpg");
galerieImage.innerHTML += getImage("L'excellence du Chef","../images/Chef_nappe _plat.jpg");
galerieImage.innerHTML += getImage("Velouté de Quinoa aux Herbes","../images/Soupe.jpg");
galerieImage.innerHTML += getImage("Côtelette d’Agneau Rôtie","../images/Cote_ agneau.jpg");
galerieImage.innerHTML += getImage("Duo Terre et Mer","../images/Crevettes.jpg");

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return  ` <div class="col p-3"> 
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100"/>
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="admin">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>` ; 
}