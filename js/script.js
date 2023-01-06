function calcWater() {
    var result1 = parseFloat(document.getElementById("value1").value)
    
    var litros_por_dia = parseFloat(result1 * 0.035)
    var mililitro_por_dia = parseFloat(result1 * 35)

    document.getElementById("litros_dia").value = litros_por_dia + " Litros"
    document.getElementById("mililitro_dia").value = mililitro_por_dia + " Mililitros"

}