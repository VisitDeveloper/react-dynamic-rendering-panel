export function isTrueChecker(isTrue : boolean  , show : string , other: null | string | number){
    return isTrue ? show : other;
}