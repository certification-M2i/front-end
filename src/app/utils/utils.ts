
/**
 * distance de Levenstein
 * https://fr.wiktionary.org/wiki/distance_de_Levenshtein#:~:text=(Programmation)%20Mesure%20de%20la%20similarit%C3%A9,une%20cha%C3%AEne%20%C3%A0%20l'autre.
 * @param source 
 * @param target 
 * @returns 
 */
export function calculateMatchWeight(source : string, target : string) {
    if (source === target) return 100;

    const minLength = Math.min(source.length, target.length);
    let weight = 0;

    for (let i = 0; i < minLength; i++) {
        if (source[i] !== target[i]) break;
        weight += (source.length - i);
    }

    return weight;
}
