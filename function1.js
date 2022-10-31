//코드스쿼드 [미션] 함수1

//cm을 inch로
function convertToInches(fromCM) {
    var result = fromCM / 2.54;
    console.log(fromCM + " cm -> " + result.toFixed(2) + " inch");
    return result;
}
convertToInches(100);


//inch를 cm으로
function convertToCM(fromInches) {
    var result = fromInches * 2.54;
    console.log(fromInches + " inch -> " + result.toFixed(2) + " cm ");
    return result;
}

convertToCM(32);


//M를 inch로
function convertToInches2(fromMeter) {
    var result = (fromMeter * 100) / 2.54;
    console.log(fromMeter + " M -> " + result.toFixed(2) + " inch ")
    return result;
}

convertToInches2(1);
