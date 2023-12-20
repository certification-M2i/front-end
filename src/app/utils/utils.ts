export function calculateMatchWeight(source: string, target: string): number {
    if (source === target) return 100;

    const distance = levenshteinDistance(source, target);
    const maxLength = Math.max(source.length, target.length);

    // Convertir la distance en un score de correspondance
    // Plus la distance est petite, plus le poids est élevé
    let weight = Math.max(0, maxLength - distance);

    return weight;
}

/**
 * distance de Levenshtein
 * https://fr.wiktionary.org/wiki/distance_de_Levenshtein#:~:text=(Programmation)%20Mesure%20de%20la%20similarit%C3%A9,une%20cha%C3%AEne%20%C3%A0%20l'autre.
 * https://www.30secondsofcode.org/js/s/levenshtein-distance/
 * @param s1 
 * @param s2 
 * @returns 
 */
function levenshteinDistance(s1: string, s2: string): number {
    // Longueurs des chaînes s1 et s2
    const m = s1.length, n = s2.length;

    // tableau a deux dimensions créés par le Array.from puis la fonction flêchée
    // créé un nouveau tableau dans le tableau de longueur n+1 et 
    // tous ses éléments sont initialisés à 0 via le .fill
    let d = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Initialisation de la première colonne de la matrice
    // Chaque cellule (i, 0) est initialisée à i
    for (let i = 0; i <= m; i++) d[i][0] = i;

    // Initialisation de la première ligne de la matrice
    // Chaque cellule (0, j) est initialisée à j
    for (let j = 0; j <= n; j++) d[0][j] = j;

    // Parcours de chaque caractère des deux chaînes
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            
            const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;

            // là je comprends plus rien.
            d[i][j] = Math.min(
                d[i - 1][j] + 1,    
                d[i][j - 1] + 1,   
                d[i - 1][j - 1] + cost 
            );
        }
    }

    // Retourne la distance de Levenshtein, qui est la valeur de la cellule en bas à droite de la matrice
    return d[m][n];
}
