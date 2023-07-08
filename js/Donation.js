let DonationINP = document.getElementById('DonationINP')

DonationINP.addEventListener('keyup',()=>{

    DonationINP.value = formatNumber(DonationINP.value)

})



function formatNumber(n) {
    // format number 1000000 to 1,234,567
    var n1 = n.replace('.00', "").replace('.0', "")
    var newN = n1.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace('$', "")

    if(newN != "" && newN != " ") {
        if (newN.indexOf('$') == -1) {
            newN = `$${newN}`  
        }
        if (newN.indexOf('.00') == -1) {
            newN = `${newN}.00`  
        }
    }

    return newN
}
