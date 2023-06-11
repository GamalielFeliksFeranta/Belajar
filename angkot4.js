var jumlahAngkot=10;
var angkotBeroperasi=6;
var noAngkot=1;


for(noAngkot ; noAngkot<=jumlahAngkot; noAngkot++)
{   
    if(noAngkot<=angkotBeroperasi && noAngkot<jumlahAngkot)
    console.log("Angkot No. "+noAngkot+" beroperasi dengan baik.")  
    else if(noAngkot==8)
    {
        console.log("Angkot No. "+noAngkot+" sedang lembur")  
    } 
    else
    {
        console.log("Angkot No. "+noAngkot+" tidak beroperasi dengan baik.") 
    }
}