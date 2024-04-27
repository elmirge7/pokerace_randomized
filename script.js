// Définir les variables de calcul des points
let rivalPoints = 0;
let GiovanniPoints = 0;
let GymPoints = 0;
let LiguePoints = 0;
let CapturePoints = 0;
let totalPoints = 0;

// Sélectionner toutes les images
const images = document.querySelectorAll('img');
const progressBarRival = document.querySelector('.progress-bar-rival');
const progressBarGiovanni = document.querySelector('.progress-bar-giovanni');
const progressBarGym = document.querySelector('.progress-bar-gym');
const progressBarLigue = document.querySelector('.progress-bar-ligue');
const progressBarCapture = document.querySelector('.progress-bar-capture');

// Ajouter un gestionnaire d'événements à chaque image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Toggle la classe 'showColor' sur l'image cliquée
    image.classList.toggle('showColor');
    // Calculer les points en fonction des classes des images cliquées
    if (image.classList.contains('rival')) {
      if (image.classList.contains('showColor')) {
        rivalPoints++;
        progressBarShow(progressBarRival, (rivalPoints/6*100).toFixed(2));
      } else {
        rivalPoints--;
        progressBarShow(progressBarRival, (rivalPoints/6*100).toFixed(2));
      }
    } else if (image.classList.contains('giovanni')) {
      if (image.classList.contains('showColor')) {
        GiovanniPoints+=2;
        progressBarShow(progressBarGiovanni, (GiovanniPoints/2*50).toFixed(2));
      } else {
        GiovanniPoints-=2;
        progressBarShow(progressBarGiovanni, (GiovanniPoints/2*50).toFixed(2));
      }
    } else if (image.classList.contains('gymbadge')) {
      if (image.classList.contains('showColor')) {
        GymPoints+=2;
        progressBarShow(progressBarGym, (GymPoints/8*50).toFixed(2));
      } else {
        GymPoints-=2;
        progressBarShow(progressBarGym, (GymPoints/8*50).toFixed(2));
      }
    } else if (image.classList.contains('ligue')) {
      if (image.classList.contains('showColor')) {
        LiguePoints+=3;
        progressBarShow(progressBarLigue, (LiguePoints/5*33.333).toFixed(2));
      } else {
        LiguePoints-=3;
        progressBarShow(progressBarLigue, (LiguePoints/5*33.333).toFixed(2));
      }
    } else if (image.classList.contains('capture')) {
      if (image.classList.contains('showColor')) {
        CapturePoints++;
        progressBarShow(progressBarCapture, (CapturePoints/6*100).toFixed(2));
      } else {
        CapturePoints--;
        progressBarShow(progressBarCapture, (CapturePoints/6*100).toFixed(2));
      }
    }
    // Afficher le score
    showScore();
  });
});

function showScore() {
  totalPoints = rivalPoints + GiovanniPoints + GymPoints + LiguePoints + CapturePoints;
  document.querySelector(".total").innerHTML = totalPoints + "/47";
}

function progressBarShow(progressBar, newValue) {
  progressBar.style.width = newValue + '%'; // Met à jour la largeur de la barre de progression
  progressBar.setAttribute('aria-valuenow', newValue);
  progressBar.innerHTML = newValue + '%';
}

const CardPoint = document.querySelector('.points');
CardPoint.addEventListener('click', () => {
  CardPoint.classList.toggle('hidden');
})