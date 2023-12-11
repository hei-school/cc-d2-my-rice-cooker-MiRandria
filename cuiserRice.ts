class CuiseurARiz {
    private cuisson_en_cours: boolean = false;
    private maintien_au_chaud: boolean = false;
    private temps_maintien_au_chaud: number = 30; 
    private surchauffe_temperature: number = 120; 
  
    constructor() {}
  
    cuireRiz(): void {
        try {
            console.log("Cuisson en cours...");
            this.cuisson_en_cours = true;
      
            for (let i = 0; i < 15; i++) {
                this.surchauffeDetectee();
                console.log("Surchauffe non détectée. Continuation de la cuisson...");
          
            }
            if (!this.qualiteDuRiz()) {
                throw new Error("Le riz ne répond pas aux critères de qualité.");
            }
        } catch (error) {
            console.log(`Erreur pendant la cuisson : ${error.message}`);
        } finally {
            this.cuisson_en_cours = false;
        }
    }
  
    maintienChaud(): void {
        try {
            if (this.cuisson_en_cours) {
                console.log(`Le riz est maintenant maintenu au chaud pendant ${this.temps_maintien_au_chaud} secondes.`);
                this.maintien_au_chaud = true;
                console.log("Le maintien au chaud est terminé.");
                this.maintien_au_chaud = false;
            } else {
                throw new Error("Aucune cuisson en cours. Commencez d'abord la cuisson.");
            }
        } catch (error) {
            console.log(`Erreur pendant le maintien au chaud : ${error.message}`);
        }
    }
  
    private surchauffeDetectee(): void {
      
        const temperatureActuelle: number = 130; 
        if (temperatureActuelle >= this.surchauffe_temperature) {
            throw new Error("Surchauffe détectée. Arrêt de la cuisson.");
        }
    }
  
    private qualiteDuRiz(): boolean {
        return true;
    }
}
  
const cuiseur = new CuiseurARiz();
  
try {
    cuiseur.cuireRiz();
} catch (error) {
    console.log(`Erreur générale pendant la cuisson : ${error.message}`);
}
  
try {
    cuiseur.maintienChaud();
} catch (error) {
    console.log(`Erreur générale pendant le maintien au chaud : ${error.message}`);
}
  